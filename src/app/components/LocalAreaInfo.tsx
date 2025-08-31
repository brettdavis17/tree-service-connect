// src/app/components/LocalAreaInfo.tsx

interface LocalAreaInfoProps {
  cityName: string;
  region: string;
  state: string
}

export function LocalAreaInfo({ cityName, region }: LocalAreaInfoProps) {
  // City-specific content mapping
  const cityContent = getCityContent(cityName, region);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Tree Services Serving {cityName} and the Greater {region} Area
        </h2>
        
        <div className="prose prose-lg mx-auto text-gray-600">
          <p>
            {cityContent.description}
          </p>
          
          <p>
            {cityContent.networkDescription}
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Why Choose Area Tree Service Professionals?
          </h3>
          
          <ul className="list-disc pl-6 space-y-2">
            {cityContent.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Helper function to get city-specific content
function getCityContent(cityName: string, region: string) {
  const baseContent = {
    networkDescription: "Our network includes tree service companies from multiple nearby towns, ensuring you have access to the best professionals regardless of their exact location. Many companies travel throughout the area to serve customers with quality tree care.",
    benefits: [
      "Licensed and insured professionals",
      "Emergency response for storm-damaged trees", 
      "Competitive pricing with free estimates",
      "Local expertise with regional tree species and conditions",
      `Understanding of ${region} weather patterns and storm risks`,
      `Extensive coverage across ${region} communities`
    ]
  };

  const citySpecificContent: { [key: string]: any } = {
    "Longview": {
      description: "Longview, Texas is the hub of East Texas tree services, with professionals serving a 25-mile radius including White Oak, Gladewater, Kilgore, Marshall, and surrounding communities in the Piney Woods region.",
      ...baseContent
    },
    "Kilgore": {
      description: "Kilgore, Texas is located in the heart of the East Texas Piney Woods, where mature pine and hardwood trees are abundant. Our network of tree service professionals understands the unique challenges of maintaining trees in this heavily forested region.",
      networkDescription: "Whether you need routine tree maintenance, storm damage cleanup, or emergency tree removal, our qualified arborists and tree service companies serve Kilgore and the surrounding areas including Longview, Henderson, Overton, and Gladewater.",
      ...baseContent
    },
    "Henderson": {
      description: "Henderson, Texas sits in the beautiful East Texas Piney Woods region, known for its dense forest coverage and mature tree canopy. Tree service professionals in this area specialize in working with the native pine and hardwood species common to the region.",
      networkDescription: "Our qualified tree service companies serve Henderson and extend their services to nearby communities including Tyler, Kilgore, and Longview, providing comprehensive tree care throughout the area.",
      ...baseContent
    },
    "Tyler": {
      description: "Tyler, Texas is surrounded by the lush East Texas forest, making professional tree services essential for both residential and commercial properties. The area's mix of native pines, oaks, and other hardwoods requires specialized knowledge and equipment.",
      networkDescription: "Tree service professionals serving Tyler also cover the broader East Texas region, including Henderson, Longview, and other surrounding communities within a 25-mile radius.",
      ...baseContent
    },
    "Marshall": {
      description: "Marshall, Texas benefits from its location in the heart of East Texas timber country, where professional tree services are essential for maintaining the area's abundant pine and hardwood forests on residential and commercial properties.",
      networkDescription: "Companies serving Marshall extend their expertise throughout the region, including Longview, Shreveport, and other nearby East Texas and North Louisiana communities.",
      ...baseContent
    },
    "Shreveport": {
      description: "Shreveport, Louisiana is situated in the heavily forested region of North Louisiana, where the climate and soil conditions support dense tree growth. Professional tree services are crucial for managing the mature canopy that characterizes the area.",
      networkDescription: "Our network of tree service professionals serves Shreveport and the greater North Louisiana area, including Monroe, Bossier City, and extending into nearby East Texas communities.",
      ...baseContent
    },
    "Monroe": {
      description: "Monroe, Louisiana is located in North Louisiana's forested region, where abundant rainfall and fertile soil create ideal conditions for tree growth. This also means regular tree maintenance and professional services are essential for property owners.",
      networkDescription: "Tree service companies serving Monroe provide coverage throughout North Louisiana and nearby East Texas areas, ensuring access to qualified professionals regardless of your exact location.",
      ...baseContent
    }
  };

  return citySpecificContent[cityName] || {
    description: `${cityName} is located in the East Texas/North Louisiana region, known for its dense forest coverage and abundant tree growth. Professional tree services are essential for maintaining the area's beautiful but demanding tree canopy.`,
    ...baseContent
  };
}