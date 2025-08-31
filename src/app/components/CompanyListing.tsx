// src/app/components/CompanyListing.tsx
import Link from 'next/link';
import { Star, Phone, MapPin, Globe } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  phone?: string;
  address?: string;
  website?: string;
  rating?: number;
  reviewCount?: number;
  city?: string;
  services?: string[];
  distance_miles?: number;
}

interface CompanyListingProps {
  companies: Company[];
  cityName: string;
  radius?: number;
}

export function CompanyListing({ companies, cityName, radius = 25 }: CompanyListingProps) {
  return (
    <div className="lg:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Tree Service Companies Near {cityName}
        </h2>
        <span className="text-gray-500 text-sm">
          {companies.length} companies within {radius} miles
        </span>
      </div>

      <div className="space-y-6">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>

      {companies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No companies found near {cityName}.</p>
          <Link href="/" className="text-green-600 hover:text-green-700 mt-2 inline-block">
            Browse all service areas →
          </Link>
        </div>
      )}
    </div>
  );
}

// Company Card Component
function CompanyCard({ company }: { company: Company }) {
  const rating = company.rating ? parseFloat(company.rating.toString()) : 0;
  const reviewCount = company.reviewCount || 0;
  const distance = company.distance_miles ? parseFloat(company.distance_miles.toString()) : 0;
  const isLocal = distance < 5;

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">
              {company.name}
            </h3>
            {!isLocal && distance > 0 && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
                {Math.round(distance * 10) / 10} mi
              </span>
            )}
          </div>
          
          {rating > 0 && (
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {rating.toFixed(1)} ({reviewCount} reviews)
              </span>
            </div>
          )}
        </div>
        
        <div className="text-right">
          {company.phone && (
            <a 
              href={`tel:${company.phone}`}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors inline-flex items-center text-sm font-medium"
            >
              <Phone className="h-4 w-4 mr-1" />
              Call Now
            </a>
          )}
        </div>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        {company.address && (
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{company.address}</span>
          </div>
        )}
        
        {company.website && (
          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2 flex-shrink-0" />
            <a 
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              Visit Website
            </a>
          </div>
        )}
        
        {company.phone && (
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{company.phone}</span>
          </div>
        )}
      </div>

      {/* Services offered */}
      {company.services && company.services.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {company.services.map((service: string) => (
              <span 
                key={service}
                className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-xs"
              >
                {service.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}