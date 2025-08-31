// src/app/components/Footer.tsx
import Link from 'next/link';

interface FooterProps {
  cityName: string;
  nearbyAreas: Array<{ name: string; href: string }>;
}

export function Footer({ cityName, nearbyAreas }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TreeServiceConnect</h3>
            <p className="text-gray-300 text-sm">
              Connecting {cityName} area homeowners with qualified tree service professionals.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Nearby Areas</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              {nearbyAreas.map((area) => (
                <li key={area.name}>
                  <Link href={area.href} className="hover:text-white">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
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
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; 2025 TreeServiceConnect. Serving {cityName} and surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}