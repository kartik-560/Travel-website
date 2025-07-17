
import React from 'react';

function Features() {
  const features = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
          <path
            fill="currentColor"
            d="M21 14.1C21 16.3 19.3 18 17.1 18H6.9C4.7 18 3 16.3 3 14.1V9.9C3 7.7 4.7 6 6.9 6H17.1C19.3 6 21 7.7 21 9.9V14.1Z"
          />
        </svg>
      ),
      title: "Multiple Verticals",
      description:
        "A vertical marketplace is a niche subset of related market, a flexibility that a company's offerings are specialized",
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500">
          <path
            fill="currentColor"
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
          />
          <path fill="currentColor" d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z" />
        </svg>
      ),
      title: "Blogging Platform",
      description:
        "We recommend using a platform, such as WP or Squarespace. Neither require any coding knowledge and each presents",
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-500">
          <path
            fill="currentColor"
            d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
          />
        </svg>
      ),
      title: "Language Locales",
      description:
        "A locale defines a user language and combine language and country related preferences. Many languages",
    },
  ];
  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      id='feature'
    >
      <section className="w-full">
        <h2 className="text-4xl font-bold text-center m-2 mt-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="bg-white rounded-2xl w-16 h-16 flex items-center justify-center shadow-sm mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Features;
