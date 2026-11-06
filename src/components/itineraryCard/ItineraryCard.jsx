/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mountain, Waves, Sun, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const ImmersiveCard = ({ trip }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="relative h-[400px] sm:h-[420px] group rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/80 bg-slate-900 flex flex-col justify-end"
  >
    <img
      src={trip.images?.[0] || "/assest/chandratal/Chandratal.webp"}
      alt={trip.title}
      width="600"
      height="800"
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
    />
    {/* Gradients */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

    {/* Top Category / Difficulty Pill */}
    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold shadow-xs">
        {trip.duration || "Expedition"}
      </span>
      {trip.difficulty && (
        <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-orange-300 text-[11px] font-semibold border border-white/20">
          {trip.difficulty}
        </span>
      )}
    </div>

    {/* Bottom Content */}
    <div className="relative p-6 z-10 text-white space-y-3">
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-orange-300 transition-colors line-clamp-2">
        {trip.title}
      </h3>

      <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-200 pt-1">
        <div className="flex items-center gap-1.5">
          <Sun className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{trip.duration || "Flexible"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Mountain className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{trip.difficulty || "Moderate"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
          <span>{trip.distance || "Curated Route"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Waves className="w-4 h-4 text-sky-400 shrink-0" />
          <span>{trip.highlights?.length || 0} Key Sights</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const TripSkeletonCard = () => (
  <div className="relative h-[400px] sm:h-[420px] rounded-3xl overflow-hidden bg-slate-200 animate-pulse p-6 flex flex-col justify-end shadow-md">
    <div className="absolute inset-0 bg-gradient-to-t from-slate-300/80 via-slate-200/40 to-transparent" />
    <div className="relative z-10 space-y-4">
      <div className="h-6 bg-slate-300 rounded-md w-3/4 mb-3" />
      <div className="grid grid-cols-2 gap-3">
        <div className="h-4 bg-slate-300 rounded w-20" />
        <div className="h-4 bg-slate-300 rounded w-16" />
        <div className="h-4 bg-slate-300 rounded w-20" />
        <div className="h-4 bg-slate-300 rounded w-24" />
      </div>
    </div>
  </div>
);

const ItineraryCard = ({ mode = "about" }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/trips`);
        setTrips(res.data);
      } catch (err) {
        console.error("Failed to fetch trips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  const showAll = mode === "all";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12" id="itinerary">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Expeditions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Featured Adventures
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Small-group road trips, alpine treks, and cultural immersions designed for mindful travelers.
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((n) => (
            <TripSkeletonCard key={n} />
          ))}
        </div>
      ) : (
        Object.entries(
          trips.reduce((acc, trip) => {
            const category = trip.category || "Featured Expeditions";
            if (!acc[category]) acc[category] = [];
            acc[category].push(trip);
            return acc;
          }, {})
        ).map(([category, tripsInCategory]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-orange-500 pl-3">
              {category}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {tripsInCategory.map((trip, i) => {
                let visibility = "";
                if (!showAll) {
                  if (i >= 3) visibility = "hidden";
                  else if (i >= 2) visibility = "hidden md:block";
                }

                return (
                  <Link
                    to={`/travel_itinerary/${trip.id}/${encodeURIComponent(trip.title)}`}
                    key={trip.id}
                    className={visibility}
                  >
                    <ImmersiveCard trip={trip} />
                  </Link>
                );
              })}
            </div>
          </div>
        ))
      )}

      {!loading && !showAll && (
        <div className="flex justify-center pt-6">
          <Link
            to="/itinerary"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>View All Expeditions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default ItineraryCard;
