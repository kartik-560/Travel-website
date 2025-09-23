import React, { useState } from "react";
import { Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RenderModal from "./RenderModel";

const Testimonials = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

const testimonials = [
  {
    name: "Seranne",
    role: "Traveler",
    image: ["/assest/Enchanting_delhi_shimla/Himalaya.webp", "/assest/Enchanting_delhi_shimla/himalaya.png"],
    text: "They say that this means good luck, and I wish you all the luck with everything. I am very grateful for everything you did for me. Without you, I couldn’t make this trip so good. Shukriya!!",
    location: "Himalayas, India",
    rating: 5
  },
  {
    name: "Garlic Girls",
    role: "Road Trippers",
    image: ["/assest/Enchanting_delhi_shimla/Road_trip.png"],
    text: "There are no bad people. Only good people, that do bad things. - Sunil, the wise (2019).",
    location: "India Roadtrip, August 2019",
    rating: 5
  },
  {
    name: "Shivangini Chauhan",
    role: "Traveler",
    image: ["/assest/Enchanting_delhi_shimla/Spiti_valley.png","/assest/Enchanting_delhi_shimla/himachal.png"],
    text: "My recent trip to Spiti was incredible, not just because of the stunning location, but mainly due to the wonderful people I met along the way. Sunil Bhaiya's captivating Himachali stories added an extra layer of charm to the journey. Despite challenges like the lack of running water, it taught me the profound value of water in more ways than one. It feels like yesterday; Spiti, you are truly magnificent.",
    location: "Spiti Valley, Himachal Pradesh",
    rating: 5
  },
  {
    name: "Madhuri",
    role: "Pilgrim Traveler",
    image: ["/assest/Enchanting_delhi_shimla/dwarka.png"],
    text: "Traveling with mom to Dwarka, Somnath and Gir in Gujarat has been nothing but spectacular. Marvelous darshan to the temples and such warm hospitality made me grateful. Huge thanks to Sunil Bhai, who has always been by our side, taking special care of mom and ensuring everything went smoothly. Can’t thank you enough, Bhai, for being there.",
    location: "Dwarka, Gujarat",
    rating: 5
  }
];

  const TestimonialCard = ({ testimonial, index }) => {
    return (
      <motion.div
        id="testimonials"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
          },
        }}
        onClick={(e) => {
          e.preventDefault();
          setSelectedModal(index + 1);
          setCurrentImageIndex(0);
        }}
        className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />

        <div className="relative h-[500px]">
          <img
            src={testimonial.image[0]}
            alt={`${testimonial.name} during ${testimonial.location}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
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
    <div className="bg-gray-50 cursor-pointer">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600">Real stories from real adventurers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}

          <AnimatePresence>
            {selectedModal && (
              <RenderModal
                selectedModal={selectedModal}
                setSelectedModal={setSelectedModal}
                testimonials={testimonials}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;