// src/app/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Shield, Clock } from 'lucide-react';
import { CTAButton } from './components/CTAButton';
import { LeadForm } from './components/LeadForm';
import Image from 'next/image';

export const metadata: Metadata = {
  description: 'Find trusted tree service professionals in East Texas and North Louisiana. Get free quotes for tree removal, trimming, stump grinding, and emergency services in Kilgore, Longview, Henderson, Tyler, and Shreveport.',
  alternates: {
    canonical: 'https://treeserviceconnect.com'
  },
  openGraph: {
    title: 'TreeServiceConnect - Find Tree Services in East Texas & North Louisiana',
    description: 'Find trusted tree service professionals in East Texas and North Louisiana. Get free quotes for tree removal, trimming, stump grinding, and emergency services.',
    url: 'https://treeserviceconnect.com',
    siteName: 'TreeServiceConnect',
    images: [
      {
        url: 'https://treeserviceconnect.com/treeserviceconnect-woodmark.png',
        width: 1200,
        height: 630,
        alt: 'TreeServiceConnect - East Texas Tree Service Directory',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/treeserviceconnect-woodmark.png"
                alt="TreeServiceConnect - East Texas & North Louisiana Tree Service Directory"
                width={200}
                height={45}
                className="h-10 w-auto"
                priority
              />
              <span className="ml-3 text-green-200 text-sm">East Texas & North Louisiana</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200">Home</Link>
              <Link href="/about" className="hover:text-green-200">About</Link>
              <Link href="/cities" className="hover:text-green-200">Service Areas</Link>
              <Link href="/contact" className="hover:text-green-200">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Header */}
      {/* <header className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">TreeServiceConnect</h1>
              <span className="ml-2 text-green-200 text-sm">East Texas & North Louisiana</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200">Home</Link>
              <Link href="/about" className="hover:text-green-200">About</Link>
              <Link href="/cities" className="hover:text-green-200">Service Areas</Link>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headline & Benefits */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Qualified Tree Services in 
                <span className="text-green-600"> East Texas</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Connect with trusted, rated tree service professionals in your area. 
                Get quotes from multiple companies and hire with confidence.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Verified Companies</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Rated & Reviewed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Fast Responses</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Local Experts</span>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                <strong>Serving:</strong> <Link href="/tree-service-kilgore-tx" className="text-green-600 hover:text-green-700 underline">Kilgore</Link>, <Link href="/tree-service-longview-tx" className="text-green-600 hover:text-green-700 underline">Longview</Link>, <Link href="/tree-service-henderson-tx" className="text-green-600 hover:text-green-700 underline">Henderson</Link>, Tyler, Marshall, Shreveport, Monroe, Nacogdoches and surrounding areas
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Free Quotes from Local Tree Services
              </h2>
              
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How TreeServiceConnect Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Describe Your Job</h3>
              <p className="text-gray-600">
                Tell us about your tree service needs - removal, trimming, stump grinding, or emergency work.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
              <p className="text-gray-600">
                We connect you with 2-3 qualified tree service companies in your area.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compare & Hire</h3>
              <p className="text-gray-600">
                Compare quotes, read reviews, and hire the right professional for your job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Service Areas
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Kilgore, TX', active: true },
              { name: 'Longview, TX', active: true },
              { name: 'Henderson, TX', active: true },
              { name: 'Tyler, TX', active: false },
              { name: 'Marshall, TX', active: false },
              { name: 'Shreveport, LA', active: false },
              { name: 'Monroe, LA', active: false },
              { name: 'Nacogdoches, TX', active: false }
            ].map((city) => (
              city.active ? (
                <Link 
                  key={city.name}
                  href={`/tree-service-${city.name.toLowerCase().replace(', ', '-').replace(' ', '-')}`}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="font-semibold text-gray-900">{city.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Tree Services</p>
                </Link>
              ) : (
                <div 
                  key={city.name}
                  className="bg-gray-50 p-4 rounded-lg shadow text-center border border-gray-200"
                >
                  <h3 className="font-semibold text-gray-500">{city.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">Coming Soon</p>
                </div>
              )
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/cities" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Tree Service Professional?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of satisfied customers who found their perfect tree service through TreeServiceConnect
          </p>
          <CTAButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TreeServiceConnect</h3>
              <p className="text-gray-300 text-sm">
                Connecting homeowners with qualified tree service professionals across East Texas and North Louisiana.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>Tree Removal</li>
                <li>Tree Trimming</li>
                <li>Stump Grinding</li>
                <li>Emergency Tree Service</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Service Areas</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>East Texas</li>
                <li>North Louisiana</li>
                <li>Piney Woods Region</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  Email: <a href="mailto:brett@treeserviceconnect.com" className="text-green-300 hover:text-white">brett@treeserviceconnect.com</a>
                </li>
                <li>
                  Phone: <a href="tel:+19038068005" className="text-green-300 hover:text-white">(903) 806-8005</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2025 TreeServiceConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

