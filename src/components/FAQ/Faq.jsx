import React, { useState } from 'react';
import { Info } from 'lucide-react';

const FAQ = () => {

 const faqs = [
  { 
    question: "What experiences do these trips offer?", 
    answer: "These trips combine spiritual exploration, breathtaking mountain views, trekking adventures, and authentic pahadi meals." 
  },
  { 
    question: "What type of accommodations are provided?", 
    answer: "Accommodations include campsites in scenic villages and guesthouses in picturesque mountain towns." 
  },
  { 
    question: "Can I try local pahadi cuisine during the trips?", 
    answer: "Yes, authentic pahadi meals are a key highlight of these trips, offering a taste of the region’s traditional flavors." 
  },
  { 
    question: "Are there cultural activities included?", 
    answer: "Absolutely! Activities such as exploring monasteries, visiting local markets, and participating in community ceremonies are part of the experience." 
  },
  { 
    question: "Will there be opportunities to interact with local communities?", 
    answer: "Yes, trips often include visits to villages like Jiunthi and Komic, where you can engage with the pahadi communities and learn about their way of life." 
  },
  { 
    question: "How can I book a trip?", 
    answer: "You can book a trip by contacting us via email or phone." 
  },
  { 
    question: "Are there group discounts available?", 
    answer: "Yes, special discounts are available for group bookings. Contact us for details." 
  },
  { 
    question: "What is the cancellation policy?", 
    answer: "Cancellation policies will be provided at the time of booking and may vary depending on the trip." 
  },
  { 
    question: "Are these trips safe for solo travelers?", 
    answer: "Yes, these trips are well-organized with safety measures in place, making them suitable for solo travelers as well." 
  }
];


  return (
    <div className=" p-3 md:p-8 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-950">Traveler's Guide</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className='bg-white rounded-lg shadow-md p-6 transform transition-all duration-300   scale-105   hover:shadow-xl hover:scale-102'
                  >
            <div className="flex items-start mb-4">
              <Info className="mr-3 text-blue-600 flex-shrink-0" />
              <h3 className="font-semibold text-lg text-teal-950">{faq.question}</h3>
            </div>
              <p className="text-gray-600 text-justify mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;