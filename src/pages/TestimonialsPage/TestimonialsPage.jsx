




import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TestimonialsPage = () => {
  const [imageIndices, setImageIndices] = useState([0, 0, 0]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Adventure Enthusiast",
      image: ["/assest/sunset_mountains.webp", "/assest/valley.webp", "/assest/buddha.webp"],
      text: "My journey through the mountains of Nepal was absolutely life-changing. The local guides provided by this travel service were not only knowledgeable but also incredibly friendly.",
      location: "Everest Base Camp Trek",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Digital Nomad",
      image: ["/assest/a_man_jumping.webp", "/assest/a_rock.webp"],
      text: "Working remotely while traveling has always been my dream, and this service made it possible. They helped me find perfect spots with reliable internet.",
      location: "Bali Co-working Spaces",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Family Traveler",
      image: ["/assest/van_couples.webp", "/assest/sunset.webp"],
      text: "Traveling with three kids under 10 can be challenging, but our experience was incredibly smooth. The family-friendly accommodations were perfect.",
      location: "Japanese Cultural Tour",
      rating: 5
    }
  ];

  const handleImageNavigation = useCallback((index, direction) => {
    setImageIndices(prevIndices => {
      const newIndices = [...prevIndices];
      const imageCount = testimonials[index].image.length;
      newIndices[index] = (newIndices[index] + direction + imageCount) % imageCount;
      return newIndices;
    });
  }, [testimonials]);

  const TestimonialCard = ({ testimonial, index }) => {
    return (
      <motion.div 
      id='testimonials'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: index * 0.1 
          }
        }}
        className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10"/>
        
        <div className="relative h-[500px]">
          {testimonial.image.map((img, imgIndex) => (
            <img 
              key={imgIndex}
              src={img} 
              alt={`${testimonial.name} - image ${imgIndex + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 
                ${imageIndices[index] === imgIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 z-40 -translate-y-1/2">
          <button 
            onClick={(e) => {
              e.preventDefault();
              handleImageNavigation(index, -1);
            }}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              handleImageNavigation(index, 1);
            }}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <Quote className="w-10 h-10 mb-4 text-yellow-400 opacity-80" />
          <div className="flex gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-white mb-4">{testimonial.text}</p>
          <div className="border-t border-white/20 pt-4">
            <h4 className="text-white font-bold">{testimonial.name}</h4>
            <p className="text-yellow-400">{testimonial.role}</p>
            <p className="text-white/80 text-sm">{testimonial.location}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600">Real stories from real adventurers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;