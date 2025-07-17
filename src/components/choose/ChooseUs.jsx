import React from 'react';

const ChooseUs = () => {
  const benefits = [
    {
      title: 'Safety and Comfort',
      description:
        'We prioritize your safety with secure environments and trained professionals, offering comfort and peace of mind on every journey.',
      icon: '🛡️',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Expertly Curated Itineraries',
      description:
        'Each adventure is tailored for you, blending excitement, relaxation, and seamless planning to ensure unforgettable experiences.',
      icon: '🗺️',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Camping Experiences',
      description:
        'Enjoy serene nights under the stars, surrounded by nature, with activities designed to rejuvenate and inspire.',
      icon: '⛺',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Sustainable Travel',
      description:
        'Travel responsibly with us as we ensure eco-friendly practices, supporting local communities and preserving nature.',
      icon: '🌿',
      bgColor: 'bg-teal-100',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
   
   <div className="text-center mb-8 px-4 sm:px-6 md:px-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
    Why People ❤️ Choose Us
  </h2>
  <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
    Experience the best with TrekPanda
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${benefit.bgColor} hover:scale-105 transform transition duration-300`}
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
