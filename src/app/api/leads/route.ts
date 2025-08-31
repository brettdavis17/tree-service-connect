// src/app/api/leads/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received form data:', body);

    // Validate required fields
    const { name, phone, streetAddress, city, state, zipCode, services, treeCount, urgency, description } = body;
    console.log('Extracted values:', { name, phone, streetAddress, city, state, zipCode });
    
    if (!name || !phone || !streetAddress || !city || !state) {
      return NextResponse.json(
        { error: 'Name, phone, street address, city, state, and zip code are required' },
        { status: 400 }
      );
    }


    // Construct full address from separate fields
    const fullAddress = `${streetAddress}, ${city}, ${state} ${zipCode || ''}`.trim();

    // Create lead in database
    const lead = await prisma.lead.create({
      data: {
        customerName: name,
        customerPhone: phone,
        customerEmail: body.email || null,
        propertyAddress: fullAddress,
        city: city,
        state: state,
        serviceType: services || [],
        treeCount: treeCount || '1',
        treeSize: body.treeSize || [],
        nearStructures: body.nearStructures || [],
        urgency: urgency || 'planning',
        budgetRange: body.budgetRange || null,
        description: description || null,
        photos: body.photos || [],
        status: 'new',
        leadPrice: null // Will be set when distributed
      }
    });

    // Find matching companies based on location and services
    const matchingCompanies = await findMatchingCompanies(city, state, services);
    
    // For now, just log the matches (we'll implement distribution later)
    console.log(`New lead ${lead.id}: Found ${matchingCompanies.length} matching companies`);
    
    // Send email notification (we'll implement this next)
    await sendLeadNotification(lead, matchingCompanies);

    return NextResponse.json({ 
      success: true, 
      leadId: lead.id,
      message: 'Thank you! We\'ll connect you with qualified tree service professionals shortly.' 
    });

  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}

async function findMatchingCompanies(city: string, state: string, services: string[]) {
  try {
    // Get coordinates for the city first
    const cityCoordinates = getCityCoordinates(city, state);
    if (!cityCoordinates) {
      // Fall back to hardcoded city groups if coordinates not found
      return fallbackCitySearch(city, state);
    }

    const { lat, lng } = cityCoordinates;
    const radiusMeters = 25 * 1609.34; // 25 miles in meters

    // Then use PostGIS query similar to your city pages
    const companies = await prisma.$queryRaw`
      SELECT 
        *,
        ST_Distance(
          ST_Point(longitude, latitude)::geography,
          ST_Point(${lng}, ${lat})::geography
        ) / 1609.34 as distance_miles
      FROM companies 
      WHERE 
        "isActive" = true 
        AND phone IS NOT NULL
        AND latitude IS NOT NULL
        AND longitude IS NOT NULL
        AND ST_DWithin(
          ST_Point(longitude, latitude)::geography,
          ST_Point(${lng}, ${lat})::geography,
          ${radiusMeters}
        )
      ORDER BY distance_miles ASC, rating DESC NULLS LAST
      LIMIT 5
    `;
    
    return companies;
  } catch (error) {
    console.error('Error in geographic company search:', error);
    // Fallback to your current hardcoded city approach
    return fallbackCitySearch(city, state);
  }
}

// Helper function to get city coordinates
function getCityCoordinates(city: string, state: string) {
  const coordinates: { [key: string]: { lat: number; lng: number } } = {
    'Kilgore, TX': { lat: 32.3865, lng: -94.8758 },
    'Longview, TX': { lat: 32.5007, lng: -94.7405 },
    'Henderson, TX': { lat: 32.1532, lng: -94.7991 },
    'Tyler, TX': { lat: 32.3513, lng: -95.3011 },
    'Marshall, TX': { lat: 32.5449, lng: -94.3677 },
    'Shreveport, LA': { lat: 32.5252, lng: -93.7502 },
    'Monroe, LA': { lat: 32.5093, lng: -92.1193 },
    'Nacogdoches, TX': { lat: 31.6036, lng: -94.6555 },
  };
  
  return coordinates[`${city}, ${state}`] || null;
}

// Fallback to your existing city group approach
async function fallbackCitySearch(city: string, state: string) {
  const cityGroups: { [key: string]: string[] } = {
    'Kilgore': ['Kilgore', 'Longview', 'Gladewater', 'Overton'],
    'Longview': ['Longview', 'Kilgore', 'Marshall', 'Gladewater'],
    'Henderson': ['Henderson', 'Kilgore', 'Tyler', 'Longview'],
    'Tyler': ['Tyler', 'Henderson', 'Longview'],
    'Marshall': ['Marshall', 'Longview', 'Shreveport'],
    'Shreveport': ['Shreveport', 'Marshall', 'Monroe'],
    'Monroe': ['Monroe', 'Shreveport', 'West Monroe'],
    'Nacogdoches': ['Nacogdoches', 'Lufkin', 'Tyler']
  };

  const searchCities = cityGroups[city] || [city];
  
  return await prisma.company.findMany({
    where: {
      isActive: true,
      city: { in: searchCities },
      phone: { not: null },
    },
    orderBy: [
      { rating: 'desc' },
      { reviewCount: 'desc' }
    ],
    take: 5
  });
}


async function sendLeadNotification(lead: any, companies: any[]) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailContent = `
NEW TREE SERVICE LEAD

Customer Information:
- Name: ${lead.customerName}
- Phone: ${lead.customerPhone}
- Address: ${lead.propertyAddress}

Job Details:
- Services: ${lead.serviceType.join(', ')}
- Tree Count: ${lead.treeCount}
- Urgency: ${lead.urgency}
- Description: ${lead.description || 'None provided'}

MATCHED COMPANIES (${companies.length}):
${companies.map((c, i) => `${i+1}. ${c.name}
   Phone: ${c.phone}
   Rating: ${c.rating} stars (${c.reviewCount || 0} reviews)
   City: ${c.city}`).join('\n\n')}

Lead Revenue Potential: $${companies.length * 100} (${companies.length} companies @ $100 each)
Lead ID: ${lead.id}
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'brett@treeserviceconnect.com',
      subject: `New Lead: ${lead.city} - ${lead.serviceType.join(', ')} - $${companies.length * 100} potential`,
      text: emailContent,
    });

    console.log('Lead notification email sent successfully');
  } catch (error) {
    console.error('Failed to send email notification:', error);
    // Don't throw error - lead should still be saved even if email fails
  }
}