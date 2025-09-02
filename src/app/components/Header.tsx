// src/app/components/Header.tsx
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-white hover:text-green-200">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <Image 
                src="/treeserviceconnect-woodmark.png" 
                alt="TreeServiceConnect - East Texas Tree Service Directory"
                width={180}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-200">Home</Link>
            <Link href="/cities" className="hover:text-green-200">Service Areas</Link>
            <Link href="/contact" className="hover:text-green-200">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}