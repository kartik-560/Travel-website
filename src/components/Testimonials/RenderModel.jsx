
import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Star } from 'lucide-react';
import './TestimonialModal.css';

const RenderModal = ({
  selectedModal,
  setSelectedModal,
  testimonials,
  currentImageIndex,
  setCurrentImageIndex,
}) => {
  const testimonial = !selectedModal ? null : testimonials[selectedModal - 1];

  useEffect(() => {
    // Prevent background scrolling when modal is open
    if (selectedModal) {
      document.body.style.overflow = 'hidden';
    }

    // Cleanup: restore scrolling when modal closes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedModal]);

  useEffect(() => {
    let intervalId;
    if (selectedModal) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prev) =>
          (prev + 1) % testimonials[selectedModal - 1].image.length
        );
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [selectedModal]);

  const renderStarRating = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={() => setSelectedModal(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedModal(null)}
          className="absolute top-4 right-4 z-10 text-gray-800 hover:rotate-90 transition-transform"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Left Side - Image Carousel */}
        <div className="relative group aspect-square w-full h-full">
          <div className="absolute inset-0">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={testimonial.image[currentImageIndex]}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Carousel Navigation */}
          {testimonial.image.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImageIndex((prev) =>
                  prev === 0 ? testimonial.image.length - 1 : prev - 1
                )}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) =>
                  (prev + 1) % testimonial.image.length
                )}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Right Side - Testimonial Content */}
        <div className="testimonial-content-wrapper">
          <div className="testimonial-content">
            <div className="flex items-center space-x-2 mb-4">
              {renderStarRating(testimonial.rating)}
            </div>

            <blockquote className="text-xl italic mb-4 text-gray-800">
              "{testimonial.text}"
            </blockquote>

            <div className="mt-4">
              <p className="font-bold text-lg">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RenderModal;