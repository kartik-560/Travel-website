

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mountain, Waves, Sun } from 'lucide-react';
import tripDataList from '../utils/tripDataList';
import { Link } from 'react-router-dom';
const ImmersiveCard = ({ trip, id }) => {

  return (

    
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1  
        ,
        transition:{
           duration: 0.5 }
        }
      }
      className="relative h-96 group rounded-xl overflow-hidden cursor-pointer"
    >
      <img 
        src={trip.coverImage} 
        alt={trip.title} 
        loading='lazy'
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <h3 className="text-3xl font-bold mb-4">{trip.title}</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Sun className="w-5 h-5 text-yellow-400" />
            <span>{trip.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="w-5 h-5 text-yellow-400" />
            <span>{trip.difficulty}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-yellow-400" />
            <span>{trip.distance}</span>
          </div>
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-yellow-400" />
            <span>{trip.highlights.length} Locations</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};









const ItineraryCard = () => {

 

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8" id='itinerary'>
      <h2 className="text-3xl font-bold text-center mb-8">Featured Adventures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(tripDataList).slice(0,3).map((trip, index) => (
          <Link to={`/travel_itinerary/${index}/${encodeURIComponent(trip?.title)}`} key={index}>   
          <div key={index}>   
          <ImmersiveCard key={index} trip={trip} />
          </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6">
<a  href='/itinerary'>  
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

export default ItineraryCard;