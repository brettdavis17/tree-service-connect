import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About TreeServiceConnect</h1>
          
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              TreeServiceConnect is East Texas and North Louisiana&apos;s premier directory for connecting 
              homeowners with qualified tree service professionals. We understand the unique challenges 
              of maintaining trees in the heavily forested Piney Woods region.
            </p>
            
            <p>
              Our platform serves communities throughout East Texas including Kilgore, Longview, Tyler, 
              Henderson, Marshall, and extends into North Louisiana covering Shreveport, Monroe, and 
              surrounding areas.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why TreeServiceConnect?</h2>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-screened, licensed and insured tree service professionals</li>
              <li>Local expertise with East Texas and North Louisiana tree species</li>
              <li>Emergency response capabilities for storm damage</li>
              <li>Competitive pricing from multiple qualified companies</li>
              <li>Understanding of regional weather patterns and tree care needs</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            
            <p>
              We&apos;re dedicated to making tree care simple and reliable for homeowners while supporting 
              local tree service businesses. Whether you need routine maintenance, emergency storm cleanup, 
              or major tree removal, we connect you with the right professionals for your specific needs.
            </p>
          </div>
        </div>
      </section>
      
      <Footer 
        cityName="East Texas" 
        nearbyAreas={[
          { name: "Kilgore, TX", href: "/tree-service-kilgore-tx" },
          { name: "Longview, TX", href: "/tree-service-longview-tx" },
          { name: "Tyler, TX", href: "/tree-service-tyler-tx" }
        ]} 
      />
    </main>
  );
}

export const metadata = {
  title: 'About TreeServiceConnect - East Texas Tree Service Directory',
  description: 'Learn about TreeServiceConnect, East Texas and North Louisiana\'s premier directory for connecting homeowners with qualified tree service professionals.',
};