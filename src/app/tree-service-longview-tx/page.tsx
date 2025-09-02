// src/app/tree-service-longview-tx/page.tsx
import { PrismaClient } from '@prisma/client';
import { CompanyListing } from '../components/CompanyListing';
import { CityHero } from '../components/CityHero';
import { Footer } from '../components/Footer';
import { LeadFormSidebar } from '../components/LeadFormSidebar';
import { ServicesGrid } from '../components/ServicesGrid';
import { Header } from '../components/Header';
import { LocalAreaInfo } from '../components/LocalAreaInfo';
import { LeadForm } from '../components/LeadForm';

const prisma = new PrismaClient();

// Get companies within radius of Longview using PostGIS
async function getLongviewAreaCompanies() {
  try {
    // Longview coordinates
    const longviewLat = 32.5007;
    const longviewLng = -94.7405;
    const radiusMiles = 25;
    const radiusMeters = radiusMiles * 1609.34; // Convert miles to meters

    const companies = await prisma.$queryRaw`
      SELECT 
        *,
        ST_Distance(
          ST_Point(longitude, latitude)::geography,
          ST_Point(${longviewLng}, ${longviewLat})::geography
        ) / 1609.34 as distance_miles
      FROM companies 
      WHERE 
        "isActive" = true 
        AND phone IS NOT NULL
        AND latitude IS NOT NULL
        AND longitude IS NOT NULL
        AND ST_DWithin(
          ST_Point(longitude, latitude)::geography,
          ST_Point(${longviewLng}, ${longviewLat})::geography,
          ${radiusMeters}
        )
      ORDER BY distance_miles ASC, rating DESC NULLS LAST
    `;
    
    return companies;
  } catch (error) {
    console.error('Error fetching companies near Longview:', error);
    return [];
  }
}

export default async function LongviewTreeServicePage() {
  const companies = await getLongviewAreaCompanies();
  
  const nearbyAreas = [
    { name: "Kilgore, TX", href: "/tree-service-kilgore-tx" },
    { name: "Marshall, TX", href: "/tree-service-marshall-tx" },
    { name: "Tyler, TX", href: "/tree-service-tyler-tx" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CityHero cityName="Longview" state="TX" companyCount={companies.length} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <CompanyListing companies={companies} cityName="Longview" radius={25} />
          <LeadFormSidebar cityName="Longview" />
        </div>
      </div>
      
      <ServicesGrid cityName="Longview" />
      <LocalAreaInfo cityName="Longview" region="East Texas" />
      <Footer cityName="Longview" nearbyAreas={nearbyAreas} />
    </main>
  );
}

export const metadata = {
  title: 'Tree Service Longview TX - Top Rated Companies Within 25 Miles',
  description: 'Find qualified tree service professionals in Longview, TX and surrounding areas. Get free quotes for tree removal, trimming, stump grinding & emergency services from local experts.',
  keywords: 'tree service Longview TX, tree removal Longview, stump grinding Longview, tree trimming Longview, White Oak tree service, Gladewater tree service',
  alternates: {
    canonical: 'https://treeserviceconnect.com/tree-service-longview-tx'
  },
  openGraph: {
    title: 'Tree Service Longview TX - Top Rated Companies Within 25 Miles',
    description: 'Find qualified tree service professionals in Longview, TX and surrounding areas. Get free quotes for tree removal, trimming, stump grinding & emergency services from local experts.',
    url: 'https://treeserviceconnect.com/tree-service-longview-tx',
    siteName: 'TreeServiceConnect',
    images: [
      {
        url: 'https://treeserviceconnect.com/treeserviceconnect-woodmark.png',
        width: 1200,
        height: 630,
        alt: 'Tree Service Longview TX - TreeServiceConnect Directory',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

