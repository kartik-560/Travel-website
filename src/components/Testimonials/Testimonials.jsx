/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Quote, Star, Sparkles, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RenderModal from "./RenderModel";

const Testimonials = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const testimonials = [
    {
      name: "Seranne",
      role: "Solo Backpacker",
      image: [
        "/assest/Enchanting_delhi_shimla/Himalaya.webp",
        "/assest/Enchanting_delhi_shimla/himalaya.webp",
      ],
      text: "They say that this means good luck, and I wish you all the luck with everything. I am very grateful for everything you did for me. Without you, I couldn’t make this trip so good. Shukriya!!",
      location: "Himalayas, India",
      rating: 5,
    },
    {
      name: "Garlic Girls",
      role: "Road Trippers",
      image: ["/assest/Enchanting_delhi_shimla/Road_trip.webp"],
      text: "There are no bad people. Only good people, that do bad things. — Sunil, the wise (2019). The memories we made on these mountain roads will stay with us forever.",
      location: "India Roadtrip, August 2019",
      rating: 5,
    },
    {
      name: "Shivangini Chauhan",
      role: "Adventure Enthusiast",
      image: [
        "/assest/Enchanting_delhi_shimla/Spiti_valley.webp",
        "/assest/Enchanting_delhi_shimla/himachal.webp",
      ],
      text: "My recent trip to Spiti was incredible, not just because of the stunning location, but mainly due to the wonderful people I met along the way. Sunil Bhaiya's captivating Himachali stories added an extra layer of charm to the journey. Despite challenges like the lack of running water, it taught me the profound value of water in more ways than one. It feels like yesterday; Spiti, you are truly magnificent.",
      location: "Spiti Valley, Himachal Pradesh",
      rating: 5,
    },
    {
      name: "Madhuri",
      role: "Pilgrim & Cultural Traveler",
      image: ["/assest/Enchanting_delhi_shimla/dwarka.webp"],
      text: "Traveling with mom to Dwarka, Somnath and Gir in Gujarat has been nothing but spectacular. Marvelous darshan to the temples and such warm hospitality made me grateful. Huge thanks to Sunil Bhai, who has always been by our side, taking special care of mom and ensuring everything went smoothly. Can’t thank you enough, Bhai, for being there.",
      location: "Dwarka, Gujarat",
      rating: 5,
    },
  ];

  const TestimonialCard = ({ testimonial, index }) => {
    return (
      <motion.div
        id="testimonials"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
          },
        }}
        viewport={{ once: true }}
        onClick={(e) => {
          e.preventDefault();
          setSelectedModal(index + 1);
          setCurrentImageIndex(0);
        }}
        className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer border border-slate-200/80 bg-slate-900"
      >
        <div className="relative h-[420px] sm:h-[460px] overflow-hidden">
          <img
            src={testimonial.image[0]}
            alt={`${testimonial.name} journey in ${testimonial.location}`}
            width="800"
            height="800"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Multi-layer Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 sm:p-8 z-20 flex flex-col justify-end text-white">
          <div className="flex items-center justify-between mb-3">
            <Quote className="w-8 h-8 text-orange-400 opacity-90" />
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>

          <p className="text-white/95 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-4 font-light">
            &ldquo;{testimonial.text}&rdquo;
          </p>

          <div className="border-t border-white/20 pt-3 flex items-center justify-between">
            <div>
              <h4 className="text-white font-bold text-base">{testimonial.name}</h4>
              <p className="text-orange-300 text-xs font-medium">{testimonial.role}</p>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-white/80">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{testimonial.location.split(",")[0]}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-slate-50/70 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Traveler Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Travelers Say
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real stories, lifelong memories, and shared laughs from backpackers who explored with us.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Modal */}
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
    </section>
  );
};

export default Testimonials;
