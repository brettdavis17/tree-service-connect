// scripts/import-csv.js
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const csv = require('csv-parser');

const prisma = new PrismaClient();

async function importTreeServiceData() {
  console.log('🌲 Starting tree service data import...');
  
  const companies = [];
  
  // Read your CSV file
  return new Promise((resolve, reject) => {
    fs.createReadStream('./data/tree_services_final_20250819_2208.csv')
      .pipe(csv())
      .on('data', (row) => {
        // Map CSV columns to database schema
        const company = {
          placeId: row.place_id,
          name: row.name,
          phone: row.phone || null,
          address: row.address || null,
          website: row.website || null,
          rating: row.rating ? parseFloat(row.rating) : null,
          reviewCount: row.review_count ? parseInt(row.review_count) : null,
          latitude: row.latitude ? parseFloat(row.latitude) : null,
          longitude: row.longitude ? parseFloat(row.longitude) : null,
          businessStatus: row.business_status || null,
          types: row.types || null,
          priceLevel: row.price_level ? parseInt(row.price_level) : null,
          
          // Extract city/state from your data
          city: row.city_extracted || extractCityFromAddress(row.address),
          state: extractStateFromAddress(row.address) || 'TX', // Default to TX
          
          // Default values (you'll update these during onboarding calls)
          services: inferServicesFromName(row.name),
          isActive: true,
          lastDataUpdate: new Date()
        };
        
        companies.push(company);
      })
      .on('end', async () => {
        console.log(`📊 Parsed ${companies.length} companies from CSV`);
        
        try {
          // Insert companies into database
          let imported = 0;
          let updated = 0;
          
          for (const company of companies) {
            const result = await prisma.company.upsert({
              where: { placeId: company.placeId },
              update: {
                ...company,
                updatedAt: new Date()
              },
              create: company
            });
            
            // Check if it was created or updated
            const existing = await prisma.company.count({
              where: { placeId: company.placeId }
            });
            
            if (existing === 1) {
              imported++;
            } else {
              updated++;
            }
            
            // Show progress every 10 companies
            if ((imported + updated) % 10 === 0) {
              console.log(`Progress: ${imported + updated}/${companies.length} companies processed...`);
            }
          }
          
          console.log('✅ Import completed successfully!');
          console.log(`📈 ${imported} new companies imported`);
          console.log(`🔄 ${updated} existing companies updated`);
          
          // Show summary statistics
          await showDatabaseSummary();
          
          resolve();
        } catch (error) {
          console.error('❌ Import failed:', error);
          reject(error);
        }
      })
      .on('error', (error) => {
        console.error('❌ CSV reading failed:', error);
        reject(error);
      });
  });
}

async function showDatabaseSummary() {
  console.log('\n📊 DATABASE SUMMARY:');
  
  const totalCompanies = await prisma.company.count();
  const companiesWithPhone = await prisma.company.count({
    where: { phone: { not: null } }
  });
  const companiesWithRating = await prisma.company.count({
    where: { rating: { not: null } }
  });
  const companiesWithWebsite = await prisma.company.count({
    where: { website: { not: null } }
  });
  
  console.log(`Total companies: ${totalCompanies}`);
  console.log(`With phone numbers: ${companiesWithPhone} (${Math.round(companiesWithPhone/totalCompanies*100)}%)`);
  console.log(`With ratings: ${companiesWithRating} (${Math.round(companiesWithRating/totalCompanies*100)}%)`);
  console.log(`With websites: ${companiesWithWebsite} (${Math.round(companiesWithWebsite/totalCompanies*100)}%)`);
  
  // Show companies by city
  const companiesByCity = await prisma.company.groupBy({
    by: ['city'],
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } }
  });
  
  console.log('\n🏙️  COMPANIES BY CITY:');
  companiesByCity.forEach(city => {
    console.log(`${city.city || 'Unknown'}: ${city._count.id} companies`);
  });
  
  // Show high-priority prospects (your target triangle)
  const triangleCities = ['Kilgore', 'Longview', 'Henderson'];
  const triangleCompanies = await prisma.company.count({
    where: {
      city: { in: triangleCities },
      phone: { not: null },
      rating: { gte: 4.0 }
    }
  });
  
  console.log(`\n🎯 HIGH-PRIORITY PROSPECTS (Triangle cities, 4.0+ rating, has phone): ${triangleCompanies}`);
}

// Helper functions
function extractCityFromAddress(address) {
  if (!address) return null;
  const match = address.match(/, ([^,]+), [A-Z]{2}/);
  return match ? match[1] : null;
}

function extractStateFromAddress(address) {
  if (!address) return null;
  const match = address.match(/, ([A-Z]{2}) /);
  return match ? match[1] : null;
}

function inferServicesFromName(name) {
  if (!name) return ['tree_removal', 'tree_trimming'];
  
  const services = [];
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes('tree') || nameLower.includes('arborist')) {
    services.push('tree_removal', 'tree_trimming');
  }
  if (nameLower.includes('stump')) {
    services.push('stump_grinding');
  }
  if (nameLower.includes('emergency')) {
    services.push('emergency_service');
  }
  if (nameLower.includes('clearing') || nameLower.includes('land')) {
    services.push('land_clearing');
  }
  
  return services.length > 0 ? services : ['tree_removal', 'tree_trimming'];
}

// Run the import
importTreeServiceData()
  .then(() => {
    console.log('\n🎉 All done! Your tree service data is ready to use.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Import failed:', error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });