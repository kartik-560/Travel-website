/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Quote, Star, Sparkles, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import RenderModal from "./RenderModel";

const Testimonials = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch strictly from backend database (limit=4 for Home page)
  useEffect(() => {
    let isMounted = true;
    const fetchHomeTestimonials = async () => {
      try {
        const baseUrl =
          process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const res = await axios.get(`${baseUrl}/api/testimonials?limit=4`, {
          timeout: 7000,
        });

        const items = res?.data?.testimonials;
        if (isMounted && Array.isArray(items)) {
          const normalized = items.slice(0, 4).map((t) => {
            const imgs =
              Array.isArray(t.images) && t.images.length > 0
                ? t.images
                : Array.isArray(t.image) && t.image.length > 0
                ? t.image
                : ["/assest/Enchanting_delhi_shimla/Himalaya.webp"];

            return {
              id: t.id,
              name: t.name,
              role: t.role || "Traveler",
              image: imgs,
              text: t.text,
              location: t.location,
              rating: t.rating || 5,
            };
          });
          setTestimonials(normalized);
        }
      } catch (err) {
        console.error("Error loading home testimonials:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchHomeTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  const TestimonialCard = ({ testimonial, index }) => {
    const coverImage =
      Array.isArray(testimonial.image) && testimonial.image.length > 0
        ? testimonial.image[0]
        : "/assest/Enchanting_delhi_shimla/Himalaya.webp";

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
            src={coverImage}
            alt={`${testimonial.name} in ${testimonial.location}`}
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
              {[...Array(testimonial.rating || 5)].map((_, i) => (
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
              <span>{testimonial.location ? testimonial.location.split(",")[0] : ""}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // If loading and no testimonials yet, or no testimonials found
  if (!loading && testimonials.length === 0) {
    return null;
  }

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
            <TestimonialCard key={testimonial.id || index} testimonial={testimonial} index={index} />
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
