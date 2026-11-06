/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Mountain, Sparkles, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const NatureCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const destinations = [
    {
      id: 1,
      location: "Himalayas",
      tagline: "Eternal Alpine Peaks",
      elevation: "4,200m+",
      imageUrl: "/assest/Nature/himalaya.webp",
      badge: "High Altitude",
    },
    {
      id: 2,
      location: "Manali",
      tagline: "Snow Meadows & Pines",
      elevation: "2,050m",
      imageUrl: "/assest/Nature/dinning_snow_opt.webp",
      badge: "Winter Trails",
    },
    {
      id: 3,
      location: "Ladakh",
      tagline: "Cold Desert & Lakes",
      elevation: "3,500m+",
      imageUrl: "/assest/Nature/mountain.webp",
      badge: "Iconic Circuit",
    },
    {
      id: 4,
      location: "Shimla",
      tagline: "Colonial Ridge & Valleys",
      elevation: "2,276m",
      imageUrl: "/assest/Nature/valley_opt.webp",
      badge: "Heritage Trail",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref} id="natureCard">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Nature In Its Purest Form</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Discover the Touch of Nature
        </motion.h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From ancient deodar forests to crystal glacial waters — experience India’s most awe-inspiring landscapes.
        </p>
      </div>

      {/* Destination Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {destinations.map((dest, index) => (
          <motion.div key={dest.id} variants={itemVariants} className="group">
            <Link
              to="/itinerary"
              className={`block relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/80 ${
                index % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <img
                src={dest.imageUrl}
                alt={dest.location}
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Ambient Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Top Location Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>{dest.location}</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
                  {dest.badge}
                </span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end space-y-2">
                <div className="flex items-center gap-2 text-orange-300 text-xs font-semibold">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>{dest.elevation}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-orange-300 transition-colors flex items-center justify-between">
                  <span>{dest.location}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5" />
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                  {dest.tagline}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default NatureCard;
