// src/app/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Phone, Users, Shield, Clock } from 'lucide-react';
import { CTAButton } from './components/CTAButton';
import { LeadForm } from './components/LeadForm';
import Image from 'next/image';

export const metadata: Metadata = {
  description: 'Find trusted tree service professionals in East Texas and North Louisiana. Get free quotes for tree removal, trimming, stump grinding, and emergency services in Kilgore, Longview, Henderson, Tyler, and Shreveport.',
  alternates: {
    canonical: 'https://treeserviceconnect.com'
  },
  openGraph: {
    description: 'Find trusted tree service professionals in East Texas and North Louisiana. Get free quotes for tree removal, trimming, stump grinding, and emergency services.',
    url: 'https://treeserviceconnect.com'
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
              'Kilgore, TX', 'Longview, TX', 'Henderson, TX', 'Tyler, TX',
              'Marshall, TX', 'Shreveport, LA', 'Monroe, LA', 'Nacogdoches, TX'
            ].map((city) => (
              <Link 
                key={city}
                href={`/tree-service-${city.toLowerCase().replace(', ', '-').replace(' ', '-')}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-semibold text-gray-900">{city}</h3>
                <p className="text-sm text-gray-600 mt-1">Tree Services</p>
              </Link>
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
                <li>Email: info@treeserviceconnect.com</li>
                <li>Phone: (903) XXX-XXXX</li>
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


// // src/app/page.tsx
// import Link from 'next/link';
// import { MapPin, Star, Phone, Users, Shield, Clock } from 'lucide-react';

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-green-600 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold">TreeServiceConnect</h1>
//               <span className="ml-2 text-green-200 text-sm">East Texas & North Louisiana</span>
//             </div>
//             <nav className="hidden md:flex space-x-6">
//               <Link href="/" className="hover:text-green-200">Home</Link>
//               <Link href="/about" className="hover:text-green-200">About</Link>
//               <Link href="/cities" className="hover:text-green-200">Service Areas</Link>
//             </nav>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Headline & Benefits */}
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                 Find Qualified Tree Services in 
//                 <span className="text-green-600"> East Texas</span>
//               </h1>
              
//               <p className="text-xl text-gray-600 mb-8">
//                 Connect with trusted, rated tree service professionals in your area. 
//                 Get quotes from multiple companies and hire with confidence.
//               </p>

//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 <div className="flex items-center">
//                   <Shield className="h-5 w-5 text-green-600 mr-2" />
//                   <span className="text-gray-700">Verified Companies</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Star className="h-5 w-5 text-green-600 mr-2" />
//                   <span className="text-gray-700">Rated & Reviewed</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Clock className="h-5 w-5 text-green-600 mr-2" />
//                   <span className="text-gray-700">Fast Responses</span>
//                 </div>
//                 <div className="flex items-center">
//                   <MapPin className="h-5 w-5 text-green-600 mr-2" />
//                   <span className="text-gray-700">Local Experts</span>
//                 </div>
//               </div>

//               <div className="text-sm text-gray-500">
//                 <strong>Serving:</strong> Kilgore, Longview, Henderson, Tyler, Marshall, Shreveport, Monroe, Nacogdoches and surrounding areas
//               </div>
//             </div>

//             {/* Right Column - Lead Form */}
//             <div className="bg-white p-8 rounded-lg shadow-xl">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
//                 Get Free Quotes from Local Tree Services
//               </h2>
              
//               <LeadGenerationForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             How TreeServiceConnect Works
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-green-600">1</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Describe Your Job</h3>
//               <p className="text-gray-600">
//                 Tell us about your tree service needs - removal, trimming, stump grinding, or emergency work.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-green-600">2</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
//               <p className="text-gray-600">
//                 We connect you with 2-3 qualified tree service companies in your area.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-green-600">3</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-3">Compare & Hire</h3>
//               <p className="text-gray-600">
//                 Compare quotes, read reviews, and hire the right professional for your job.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Service Areas */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             Service Areas
//           </h2>
          
//           <div className="grid md:grid-cols-4 gap-4">
//             {[
//               'Kilgore, TX', 'Longview, TX', 'Henderson, TX', 'Tyler, TX',
//               'Marshall, TX', 'Shreveport, LA', 'Monroe, LA', 'Nacogdoches, TX'
//             ].map((city) => (
//               <Link 
//                 key={city}
//                 href={`/tree-service-${city.toLowerCase().replace(', ', '-').replace(' ', '-')}`}
//                 className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
//               >
//                 <h3 className="font-semibold text-gray-900">{city}</h3>
//                 <p className="text-sm text-gray-600 mt-1">Tree Services</p>
//               </Link>
//             ))}
//           </div>
          
//           <div className="text-center mt-8">
//             <Link 
//               href="/cities" 
//               className="text-green-600 hover:text-green-700 font-medium"
//             >
//               View all service areas →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-green-600 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             Ready to Find Your Tree Service Professional?
//           </h2>
//           <p className="text-xl text-green-100 mb-8">
//             Join hundreds of satisfied customers who found their perfect tree service through TreeServiceConnect
//           </p>
//           <button 
//             onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
//             className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
//           >
//             Get Free Quotes Now
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">TreeServiceConnect</h3>
//               <p className="text-gray-300 text-sm">
//                 Connecting homeowners with qualified tree service professionals across East Texas and North Louisiana.
//               </p>
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
            
//             <div>
//               <h4 className="font-semibold mb-4">Service Areas</h4>
//             <ul className="text-gray-300 text-sm space-y-2">
//                 <li>East Texas</li>
//                 <li>North Louisiana</li>
//                 <li>Piney Woods Region</li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-semibold mb-4">Contact</h4>
//               <ul className="text-gray-300 text-sm space-y-2">
//                 <li>Email: info@treeserviceconnect.com</li>
//                 <li>Phone: (903) XXX-XXXX</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
//             <p>&copy; 2025 TreeServiceConnect. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// // Lead Generation Form Component
// function LeadGenerationForm() {
//   return (
//     <form id="lead-form" className="space-y-6">
//       {/* Contact Info */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Name *
//           </label>
//           <input 
//             type="text"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="Your name"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Phone *
//           </label>
//           <input 
//             type="tel"
//             required
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             placeholder="(903) 555-0123"
//           />
//         </div>
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Property Address *
//         </label>
//         <input 
//           type="text"
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="123 Main St, Kilgore, TX 75662"
//         />
//       </div>

//       {/* Service Type */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">
//           What service do you need? *
//         </label>
//         <div className="grid grid-cols-2 gap-2">
//           {[
//             'Tree Removal',
//             'Tree Trimming', 
//             'Stump Grinding',
//             'Emergency Service'
//           ].map((service) => (
//             <label key={service} className="flex items-center">
//               <input 
//                 type="checkbox" 
//                 className="mr-2 text-green-600 focus:ring-green-500"
//               />
//               <span className="text-sm">{service}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Job Details */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Number of Trees
//           </label>
//           <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
//             <option>1</option>
//             <option>2-3</option>
//             <option>4-6</option>
//             <option>7+</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Urgency
//           </label>
//           <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
//             <option>Planning ahead</option>
//             <option>Within 2-4 weeks</option>
//             <option>This week</option>
//             <option>Emergency</option>
//           </select>
//         </div>
//       </div>

//       {/* Description */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Additional Details
//         </label>
//         <textarea 
//           rows={3}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           placeholder="Describe the trees, location, special requirements..."
//         />
//       </div>

//       {/* Submit Button */}
//       <button 
//         type="submit"
//         className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors"
//       >
//         Get Free Quotes from Tree Services
//       </button>

//       <p className="text-xs text-gray-500 text-center">
//         By submitting, you agree to be contacted by tree service companies in your area.
//       </p>
//     </form>
//   );
// }

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }