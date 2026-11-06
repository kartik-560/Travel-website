/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";
import { Map, Car, Home, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: "01",
      icon: <Map className="w-6 h-6 text-orange-600" />,
      title: "Handcrafted Expedition Planning",
      description:
        "Every itinerary is thoughtfully curated with proper acclimatization, hidden scenic trails, and cultural encounters far from crowded tourist bus circuits.",
    },
    {
      id: "02",
      icon: <Car className="w-6 h-6 text-emerald-600" />,
      title: "Mountain Transport & Veteran Drivers",
      description:
        "Reliable 4x4 and tempo vehicles operated by mountain drivers with 20+ years of high-altitude pass navigation across Spiti, Ladakh, and Kinnaur.",
    },
    {
      id: "03",
      icon: <Home className="w-6 h-6 text-sky-600" />,
      title: "Authentic Homestays & Starlit Camps",
      description:
        "Immerse yourself in authentic mountain hospitality — sleep in cozy traditional wood-and-stone village homes and camp beneath crisp Himalayan constellations.",
    },
    {
      id: "04",
      icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
      title: "24/7 On-Ground Support & Safety",
      description:
        "Comprehensive safety preparedness including emergency oxygen, first-aid trained trek leaders, and round-the-clock coordination with our founder.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="services">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Content Side */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored To You</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Comprehensive Travel Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We handle every ground detail from permits and village stays to 4x4 mountain logistics, so you can focus on the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform shadow-xs">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-orange-500 transition-colors">
                      {service.id}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/itinerary"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore All Handcrafted Itineraries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="lg:col-span-5 relative group flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Ambient Backdrop Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500 opacity-80 filter blur-[1px]" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="/assest/services_image.webp"
                alt="Backpackers enjoying scenic mountain vantage point"
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 text-slate-900">
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block">
                  Peace Of Mind Guarantee
                </span>
                <p className="text-xs sm:text-sm font-semibold mt-0.5">
                  100% verified homestays & mountain guides
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
