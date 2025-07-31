import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mountain, Waves, Sun } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ImmersiveCard = ({ trip }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative h-96 group rounded-xl overflow-hidden cursor-pointer"
  >
    <img
      src={trip.images?.[0]}
      alt={trip.title}
      loading="lazy"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
    <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
      <h3 className="text-3xl font-bold mb-4">{trip.title}</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Sun className="w-5 h-5 text-yellow-400" />
          {trip.duration}
        </div>
        <div className="flex items-center gap-2">
          <Mountain className="w-5 h-5 text-yellow-400" />
          {trip.difficulty}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-yellow-400" />
          {trip.distance}
        </div>
        <div className="flex items-center gap-2">
          <Waves className="w-5 h-5 text-yellow-400" />
          {trip.highlights?.length} Locations
        </div>
      </div>
    </div>
  </motion.div>
);

const TripCards = () => {
  const [trips, setTrips] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://travel-backend-pearl.vercel.app/api/trips"
        );
        setTrips(res.data);
      } catch (err) {
        console.error("Failed to fetch trips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12" id="itinerary">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Adventures
      </h2>

      {loading ? (
        <div className="text-center">Loading trips...</div>
      ) : (
        Object.entries(
          trips.reduce((acc, trip) => {
            const category = trip.category || "Uncategorized";
            if (!acc[category]) acc[category] = [];
            acc[category].push(trip);
            return acc;
          }, {})
        ).map(([category, tripsInCategory]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tripsInCategory.map((trip) => (
                <Link
                  to={`/travel_itinerary/${trip.id}/${encodeURIComponent(
                    trip.title
                  )}`}
                  key={trip.id}
                >
                  <ImmersiveCard trip={trip} />
                </Link>
              ))}
            </div>
          </div>
        ))
      )}

      <div className="flex justify-center mt-10">
        <a href="/itinerary">
          <button
            className="px-6 py-3 text-white bg-gradient-to-r from-[#FF9D81] to-[#FF4E4E] hover:bg-blue-700 rounded-lg shadow-lg hover:shadow-xl 
                   transition duration-300 transform hover:scale-105 outline-none focus:outline-none focus:ring-2 
                   focus:ring-blue-400 focus:ring-offset-2"
          >
            See More
          </button>
        </a>
      </div>
    </div>
  );
};

export default TripCards;
