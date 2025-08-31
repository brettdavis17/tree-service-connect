// src/app/components/ServicesGrid.tsx

interface ServicesGridProps {
  cityName: string;
}

export function ServicesGrid({ cityName }: ServicesGridProps) {
  const services = [
    {
      title: 'Tree Removal',
      description: 'Safe removal of dangerous, dead, or unwanted trees',
      icon: '🌳'
    },
    {
      title: 'Tree Trimming',
      description: 'Professional pruning to maintain tree health and appearance',
      icon: '✂️'
    },
    {
      title: 'Stump Grinding',
      description: 'Complete stump removal and grinding services',
      icon: '🪵'
    },
    {
      title: 'Emergency Service',
      description: '24/7 storm damage and emergency tree services',
      icon: '🚨'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Tree Services Available in the {cityName} Area
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}