

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mountain, Waves, Sun,} from 'lucide-react';
import { useParams , Link } from 'react-router-dom';
import tripDataList from '../../components/utils/tripDataList';
const ImmersiveCard = ({ trip,}) => {


  return (

    
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-96 group rounded-xl overflow-hidden cursor-pointer"
    >
      <img 
        src={trip.coverImage} 
        alt={trip.title} 
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







const TripCards = () => {

  
  const { id } = useParams(); // Get the id from the URL
console.log(tripDataList , "tripdata list")
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 m-20">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Adventures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.values(tripDataList).map((trip, index) => (
          <Link to={`/travel_itinerary/${index}/${encodeURIComponent(trip?.title)}` }>   
          <div className='itenary-card' key={index}> 
          <ImmersiveCard key={index} trip={trip}  />
          </div>
          </Link>
        ))}
      </div>
     

    </div>
  );
};

export default TripCards;