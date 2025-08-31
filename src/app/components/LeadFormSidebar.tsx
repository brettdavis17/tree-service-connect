// src/app/components/LeadFormSidebar.tsx
import { LeadForm } from './LeadForm';

export function LeadFormSidebar({ cityName }: { cityName: string }) {
  return(
    <div className="lg:col-span-1">
      <div className="bg-white p-6 rounded-lg shadow-lg border sticky top-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Get Free Quotes
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Tell us about your tree service needs and we'll connect you with qualified professionals in {cityName}.
        </p>
        
        <LeadForm />
      </div>
    </div>
  );
}