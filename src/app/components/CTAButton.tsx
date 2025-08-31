// src/app/components/CTAButton.tsx
'use client';

export function CTAButton() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToForm}
      className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
    >
      Get Free Quotes Now
    </button>
  );
}

// // src/app/components/CTAButton.tsx
// 'use client';

// export function CTAButton() {
//   const scrollToForm = () => {
//     document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <button 
//       onClick={scrollToForm}
//       className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
//     >
//       Get Free Quotes Now
//     </button>
//   );
// }

