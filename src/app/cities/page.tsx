import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function CitiesPage() {
  const cities = [
    { name: 'Kilgore, TX', href: '/tree-service-kilgore-tx', description: 'Heart of East Texas Piney Woods' },
    { name: 'Longview, TX', href: '/tree-service-longview-tx', description: 'East Texas regional hub' },
    { name: 'Henderson, TX', href: '/tree-service-henderson-tx', description: 'Scenic East Texas community' },
    { name: 'Tyler, TX', href: '/tree-service-tyler-tx', description: 'Rose Capital of America' },
    { name: 'Marshall, TX', href: '/tree-service-marshall-tx', description: 'Historic East Texas town' },
    { name: 'Shreveport, LA', href: '/tree-service-shreveport-la', description: 'North Louisiana metro area' },
    { name: 'Monroe, LA', href: '/tree-service-monroe-la', description: 'Twin City region' },
    { name: 'Nacogdoches, TX', href: '/tree-service-nacogdoches-tx', description: 'Oldest town in Texas' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h1>
            <p className="text-xl text-gray-600">
              Find qualified tree service professionals in your area
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link 
                key={city.name}
                href={city.href}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{city.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{city.description}</p>
                <span className="text-green-600 text-sm font-medium">
                  View Tree Services →
                </span>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Don't see your city? We're expanding our coverage area. 
              <Link href="/" className="text-green-600 hover:text-green-700 ml-1">
                Contact us for more information.
              </Link>
            </p>
          </div>
        </div>
      </section>
      
      <Footer 
        cityName="All Areas" 
        nearbyAreas={[
          { name: "East Texas", href: "/" },
          { name: "North Louisiana", href: "/" },
          { name: "Piney Woods Region", href: "/" }
        ]} 
      />
    </main>
  );
}

export const metadata = {
  title: 'Service Areas - TreeServiceConnect Tree Services Directory',
  description: 'TreeServiceConnect serves East Texas and North Louisiana including Kilgore, Longview, Tyler, Henderson, Shreveport, Monroe and surrounding areas.',
};