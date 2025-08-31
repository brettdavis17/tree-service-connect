// src/app/components/CityHero.tsx
interface CityHeroProps {
  cityName: string;
  state: string;
  companyCount: number;
}


export function CityHero({ cityName, state, companyCount }: CityHeroProps) {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tree Service in {cityName}, {state}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with {companyCount} qualified tree service professionals in {cityName} and surrounding areas
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Licensed & Insured</span>
            <span>✓ Highly Rated</span>
            <span>✓ Local Experts</span>
            <span>✓ Fast Response</span>
          </div>
        </div>
      </div>
    </section>
  );
}