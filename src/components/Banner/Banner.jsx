/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Compass, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        ref={ref}
        className="relative w-full min-h-[320px] sm:min-h-[380px] md:min-h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-900 flex items-center justify-center text-white"
      >
        <img
          src="/assest/Banner/people.webp"
          alt="Adventurers trekking together across Himalayan alpine meadows"
          width="1920"
          height="800"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.65]"
        />

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-transparent" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mr-auto px-6 sm:px-12 md:px-16 py-10 space-y-4 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Ready For The Trail?</span>
          </div>

          <TypeAnimation
            sequence={[
              "Leave The Crowds Behind.",
              2200,
              "Explore Untouched Spiti Valleys.",
              2200,
              "Cross High Himalayan Passes.",
              2200,
              "Belong Where Few Have Walked.",
              2200,
            ]}
            wrapper="h2"
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
            cursor={true}
            repeat={Infinity}
          />

          <p className="text-slate-200 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            Every expedition is small-group curated with certified mountain leaders, local homestays, and transparent pricing.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/itinerary"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-lg hover:shadow-orange-500/20 transition-all cursor-pointer"
            >
              <span>Explore Expeditions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Sunil</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
