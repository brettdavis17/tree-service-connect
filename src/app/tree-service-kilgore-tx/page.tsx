// src/app/tree-service-kilgore-tx/page.tsx
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

// Get companies within radius of Kilgore using PostGIS
async function getKilgoreAreaCompanies() {
  try {
    // Kilgore coordinates
    const kilgoreLat = 32.3875;
    const kilgoreLng = -94.8731;
    const radiusMiles = 25;
    const radiusMeters = radiusMiles * 1609.34; // Convert miles to meters

    const companies = await prisma.$queryRaw`
      SELECT 
        *,
        ST_Distance(
          ST_Point(longitude, latitude)::geography,
          ST_Point(${kilgoreLng}, ${kilgoreLat})::geography
        ) / 1609.34 as distance_miles
      FROM companies 
      WHERE 
        "isActive" = true 
        AND phone IS NOT NULL
        AND latitude IS NOT NULL
        AND longitude IS NOT NULL
        AND ST_DWithin(
          ST_Point(longitude, latitude)::geography,
          ST_Point(${kilgoreLng}, ${kilgoreLat})::geography,
          ${radiusMeters}
        )
      ORDER BY distance_miles ASC, rating DESC NULLS LAST
    `;
    
    return companies;
  } catch (error) {
    console.error('Error fetching companies near Kilgore:', error);
    return [];
  }
}

export default async function KilgoreTreeServicePage() {
  const companies = await getKilgoreAreaCompanies();
  
  const nearbyAreas = [
    { name: "Longview, TX", href: "/tree-service-longview-tx" },
    { name: "Henderson, TX", href: "/tree-service-Henderson-tx" },
    { name: "Tyler, TX", href: "/tree-service-tyler-tx" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CityHero cityName="Kilgore" state="TX" companyCount={companies.length} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <CompanyListing companies={companies} cityName="Kilgore" radius={25} />
          <LeadFormSidebar cityName="Kilgore" />
        </div>
      </div>
      
      <ServicesGrid cityName="Kilgore" />
      <LocalAreaInfo cityName="Kilgore" region="East Texas" />
      <Footer cityName="Kilgore" nearbyAreas={nearbyAreas} />
    </main>
  );
}

export const metadata = {
  title: 'Tree Service Kilgore TX - Top Rated Companies Within 25 Miles',
  description: 'Find qualified tree service professionals in Kilgore, TX and surrounding areas. Get free quotes for tree removal, trimming, stump grinding & emergency services from local experts.',
  keywords: 'tree service Kilgore TX, tree removal Kilgore, stump grinding Kilgore, tree trimming Kilgore, Tatum tree service, Overton tree service',
  alternates: {
    canonical: 'https://treeserviceconnect.com/tree-service-kilgore-tx'
  },
  openGraph: {
    title: 'Tree Service Kilgore TX - Top Rated Companies Within 25 Miles',
    description: 'Find qualified tree service professionals in Kilgore, TX and surrounding areas. Get free quotes for tree removal, trimming, stump grinding & emergency services from local experts.',
    url: 'https://treeserviceconnect.com/tree-service-kilgore-tx'
  }
};




// // src/app/tree-service-kilgore-tx/page.tsx
// import Link from 'next/link';
// import { Star, Phone, MapPin, Globe, ArrowLeft } from 'lucide-react';
// import { LeadForm } from '../components/LeadForm';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// // Get companies for Kilgore
// async function getKilgoreCompanies() {
//   try {
//     const companies = await prisma.company.findMany({
//       where: {
//         city: 'Kilgore',
//         isActive: true,
//       },
//       orderBy: [
//         { rating: 'desc' },
//         { reviewCount: 'desc' }
//       ]
//     });
//     return companies;
//   } catch (error) {
//     console.error('Error fetching companies:', error);
//     return [];
//   }
// }

// export default async function KilgoreTreeServicePage() {
//   const companies = await getKilgoreCompanies();

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-green-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <Link href="/" className="flex items-center text-white hover:text-green-200">
//                 <ArrowLeft className="h-5 w-5 mr-2" />
//                 TreeServiceConnect
//               </Link>
//             </div>
//             <nav className="hidden md:flex space-x-6">
//               <Link href="/" className="hover:text-green-200">Home</Link>
//               <Link href="/cities" className="hover:text-green-200">Service Areas</Link>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Tree Service in Kilgore, TX
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Connect with {companies.length} qualified tree service professionals in Kilgore and surrounding areas
//             </p>
//             <div className="flex justify-center space-x-8 text-sm text-gray-500">
//               <span>✓ Licensed & Insured</span>
//               <span>✓ Highly Rated</span>
//               <span>✓ Local Experts</span>
//               <span>✓ Fast Response</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Left Column - Company Listings */}
//           <div className="lg:col-span-2">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-900">
//                 Top Tree Service Companies in Kilgore
//               </h2>
//               <span className="text-gray-500 text-sm">
//                 {companies.length} companies found
//               </span>
//             </div>

//             <div className="space-y-6">
//               {companies.map((company) => (
//                 <CompanyCard key={company.id} company={company} />
//               ))}
//             </div>

//             {companies.length === 0 && (
//               <div className="text-center py-12">
//                 <p className="text-gray-500">No companies found for Kilgore.</p>
//                 <Link href="/" className="text-green-600 hover:text-green-700 mt-2 inline-block">
//                   Browse all service areas →
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Right Column - Lead Form & Info */}
//           <div className="lg:col-span-1">
//             <div className="bg-white p-6 rounded-lg shadow-lg border sticky top-4">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 Get Free Quotes
//               </h3>
//               <p className="text-gray-600 text-sm mb-6">
//                 Tell us about your tree service needs and we'll connect you with qualified professionals in Kilgore.
//               </p>
              
//               <LeadForm />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             Tree Services Available in Kilgore, TX
//           </h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: 'Tree Removal',
//                 description: 'Safe removal of dangerous, dead, or unwanted trees',
//                 icon: '🌳'
//               },
//               {
//                 title: 'Tree Trimming',
//                 description: 'Professional pruning to maintain tree health and appearance',
//                 icon: '✂️'
//               },
//               {
//                 title: 'Stump Grinding',
//                 description: 'Complete stump removal and grinding services',
//                 icon: '🪵'
//               },
//               {
//                 title: 'Emergency Service',
//                 description: '24/7 storm damage and emergency tree services',
//                 icon: '🚨'
//               }
//             ].map((service) => (
//               <div key={service.title} className="bg-white p-6 rounded-lg shadow text-center">
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
//                 <p className="text-gray-600 text-sm">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Local Area Info */}
//       <section className="py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
//             Tree Services Serving Kilgore and Surrounding Areas
//           </h2>
          
//           <div className="prose prose-lg mx-auto text-gray-600">
//             <p>
//               Kilgore, Texas is located in the heart of the East Texas Piney Woods, where mature pine and hardwood trees are abundant. 
//               Our network of tree service professionals understands the unique challenges of maintaining trees in this heavily forested region.
//             </p>
            
//             <p>
//               Whether you need routine tree maintenance, storm damage cleanup, or emergency tree removal, our qualified arborists 
//               and tree service companies serve Kilgore and the surrounding areas including Longview, Henderson, Overton, and Gladewater.
//             </p>

//             <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
//               Why Choose Tree Service Professionals in Kilgore?
//             </h3>
            
//             <ul className="list-disc pl-6 space-y-2">
//               <li>Local expertise with East Texas tree species</li>
//               <li>Understanding of regional weather patterns and storm risks</li>
//               <li>Licensed and insured professionals</li>
//               <li>Emergency response for storm-damaged trees</li>
//               <li>Competitive pricing and free estimates</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">TreeServiceConnect</h3>
//               <p className="text-gray-300 text-sm">
//                 Connecting Kilgore homeowners with qualified tree service professionals.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Nearby Areas</h4>
//               <ul className="text-gray-300 text-sm space-y-2">
//                 <li><Link href="/tree-service-longview-tx" className="hover:text-white">Longview, TX</Link></li>
//                 <li><Link href="/tree-service-henderson-tx" className="hover:text-white">Henderson, TX</Link></li>
//                 <li><Link href="/tree-service-tyler-tx" className="hover:text-white">Tyler, TX</Link></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Services</h4>
//               <ul className="text-gray-300 text-sm space-y-2">
//                 <li>Tree Removal</li>
//                 <li>Tree Trimming</li>
//                 <li>Stump Grinding</li>
//                 <li>Emergency Tree Service</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
//             <p>&copy; 2025 TreeServiceConnect. Serving Kilgore, TX and surrounding areas.</p>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// // Company Card Component
// function CompanyCard({ company }: { company: any }) {
//   const rating = company.rating ? parseFloat(company.rating) : 0;
//   const reviewCount = company.reviewCount || 0;

//   return (
//     <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">
//             {company.name}
//           </h3>
          
//           {rating > 0 && (
//             <div className="flex items-center mb-2">
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <Star 
//                     key={i}
//                     className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
//                   />
//                 ))}
//               </div>
//               <span className="ml-2 text-sm text-gray-600">
//                 {rating.toFixed(1)} ({reviewCount} reviews)
//               </span>
//             </div>
//           )}
//         </div>
        
//         <div className="text-right">
//           {company.phone && (
//             <a 
//               href={`tel:${company.phone}`}
//               className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors inline-flex items-center text-sm font-medium"
//             >
//               <Phone className="h-4 w-4 mr-1" />
//               Call Now
//             </a>
//           )}
//         </div>
//       </div>
      
//       <div className="space-y-2 text-sm text-gray-600">
//         {company.address && (
//           <div className="flex items-center">
//             <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
//             <span>{company.address}</span>
//           </div>
//         )}
        
//         {company.website && (
//           <div className="flex items-center">
//             <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
//             <a 
//               href={company.website}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-green-600 hover:text-green-700"
//             >
//               Visit Website
//             </a>
//           </div>
//         )}
        
//         {company.phone && (
//           <div className="flex items-center">
//             <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
//             <span>{company.phone}</span>
//           </div>
//         )}
//       </div>

//       {/* Services offered (if available) */}
//       {company.services && company.services.length > 0 && (
//         <div className="mt-4 pt-4 border-t border-gray-200">
//           <div className="flex flex-wrap gap-2">
//             {company.services.map((service: string) => (
//               <span 
//                 key={service}
//                 className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs"
//               >
//                 {service.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // SEO Metadata
// export const metadata = {
//   title: 'Tree Service Kilgore TX - Top Rated Tree Removal & Trimming Companies',
//   description: 'Find qualified tree service professionals in Kilgore, TX. Get free quotes for tree removal, trimming, stump grinding & emergency services. Licensed & insured companies.',
//   keywords: 'tree service Kilgore TX, tree removal Kilgore, stump grinding Kilgore, tree trimming Kilgore, arborist Kilgore Texas',
// };