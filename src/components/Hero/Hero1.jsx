/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Compass, ChevronLeft, ChevronRight } from "lucide-react";

const Hero1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const activities = [
    {
      id: "01",
      badge: "Curated Expeditions",
      title: "Experience India Like Never Before",
      subtitle: "Authentic Trails • High Mountain Passes • Living Culture",
      description: "Step away from crowded tourist itineraries. Discover the untouched majesty of Spiti, Ladakh, and hidden Himachal hamlets.",
      imageUrl: "/assest/HeroImages/gompa-transformed.webp",
      tag: "Spiti & Kinnaur Valley",
    },
    {
      id: "02",
      badge: "Authentic Experiences",
      title: "Connect Deeply, Travel Softly",
      subtitle: "Village Homestays • Local Mountain Guides • True Hospitality",
      description: "Rest by pristine mountain streams, share warm butter tea with native elders, and make lifelong friends on the trail.",
      imageUrl: "/assest/HeroImages/rocky_hotels.webp",
      tag: "Alpine Retreats & Rivers",
    },
    {
      id: "03",
      badge: "Personalized Journeys",
      title: "Transformative Mountain Adventures",
      subtitle: "Small Group Pacing • High-Altitude Safety • Zero Trace",
      description: "Carefully designed small-batch expeditions (max 10-12 backpackers) ensuring intimate camaraderie and dedicated personal care.",
      imageUrl: "/assest/HeroImages/ladakh.webp",
      tag: "Leh Ladakh & Pangong",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [activities.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <div className="relative w-full h-screen min-h-screen min-h-[600px] overflow-hidden bg-slate-950 select-none">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activities[currentSlide].id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={activities[currentSlide].imageUrl}
            alt={activities[currentSlide].title}
            width="1600"
            height="900"
            fetchPriority={currentSlide === 0 ? "high" : "auto"}
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.72]"
          />
          {/* Subtle multi-layer ambient gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-black/30" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 sm:px-6 max-w-5xl mx-auto pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -22 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-orange-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="uppercase">{activities[currentSlide].badge}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80 font-normal">{activities[currentSlide].tag}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {activities[currentSlide].title}
            </h1>

            {/* Subtitle / Pillars */}
            <p className="text-orange-200/90 font-medium text-sm sm:text-lg tracking-wide">
              {activities[currentSlide].subtitle}
            </p>

            {/* Description */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              {activities[currentSlide].description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-3 pt-2 sm:pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/itinerary")}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-orange-500/25 transition-all cursor-pointer"
              >
                <span>Explore Expeditions</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-md"
              >
                <Compass className="w-4 h-4 text-orange-300" />
                <span>Our Philosophy</span>
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Interactive Bottom Progress Tabs */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/15">
        {activities.map((act, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={act.id}
              onClick={() => setCurrentSlide(index)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-white text-slate-900 shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{act.id}</span>
              <span className="hidden md:inline">{act.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Hero1;
