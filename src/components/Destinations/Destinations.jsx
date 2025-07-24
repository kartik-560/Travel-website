// import React from "react";
// import { useParams } from "react-router-dom";
// import itineraryData from "../utils/itineraryData";
// import { ClockIcon } from "@heroicons/react/solid";
// import {
//   MapIcon,
//   FlagIcon,
//   StarIcon,
//   ScaleIcon,
//   ChartBarIcon,
// } from "@heroicons/react/outline";

// import FAQ from "../FAQ/Faq";

// const Destinations = () => {
//   const { id } = useParams();
//   const NumId = Number(id);
//   const destinations = itineraryData[NumId];
//   console.log(destinations?.days, "destinations");

//   const Design4 = () => (
//     <div className="ml-[2rem]">
//       <h2 className="text-3xl font-bold text-center my-10 text-teal-900">
//         Itinerary
//       </h2>
//       {destinations?.days.map((day, index) => (
//         <div key={day.day} className="mb-12 relative">
//           <div
//             className="absolute -left-10 top-[-30px] md:top-[-15px] w-16 mb-8 h-8 bg-purple-500 text-white 
//           rounded-full flex items-center justify-center font-bold"
//           >
//             Day {day.day}
//           </div>
//           <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
//             <div className="flex justify-between items-center mb-3">
//               <h3 className="text-lg font-semibold text-teal-950">
//                 Day Journey
//               </h3>
//               <div className="flex items-center text-gray-500">
//                 <ClockIcon className="h-5 w-5 mr-2" />
//                 <span>Full Day</span>
//               </div>
//             </div>
//             <p className="text-gray-700">{day.description}</p>
//             {day.highlights && (
//               <div className="mt-4 border-t pt-3">
//                 <h4 className="font-medium mb-2  text-teal-950">Duration</h4>
//                 <ul className="space-y-1 text-sm text-gray-600 grid grid-cols-2 md:grid-cols-3">
//                   {day.highlights.map((highlight, index) => (
//                     <li key={index} className="flex items-center">
//                       <span className="mr-2 text-purple-500">•</span>
//                       {highlight}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="container mx-auto  p-6 md:p-12 pt-0 max-w-[96rem] ">
//       <div className="bg-white rounded-xl p-6 ">
//         <h4 className="text-xl font-semibold text-green-600 mb-4 text-center">
//           Expedition Metrics
//         </h4>
//         <div className="space-y-4 justify-items-center items-center gap-0  grid xl:grid-cols-2 sm:grid-rows-2 sm:grid-cols-3">
//           {/* Max Elevation */}
//           <div>
//             {destinations?.maxElevation && (
//               <div className="bg-orange-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
//                 <ChartBarIcon className="text-orange-500 h-6 w-6 mb-1 text-3xl" />
//                 <h5 className="font-medium text-orange-700">Max Elevation</h5>
//                 <p className="text-sm text-orange-600">
//                   {" "}
//                   {destinations?.maxElevation}
//                 </p>
//               </div>
//             )}
//           </div>
//           {/* Distance */}
//           <div className="bg-purple-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
//             <ScaleIcon className="text-purple-500 h-6 w-6 mb-1" />
//             <h5 className="font-medium text-purple-700">Distance</h5>
//             <p className="text-sm text-purple-600">
//               Approx. {destinations?.distance}
//             </p>
//           </div>

//           {/* duration */}
//           <div className="bg-orange-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
//             <MapIcon className="text-orange-500 h-6 w-6 mb-1" />
//             <h5 className="font-medium text-orange-700">Duration</h5>
//             <p className="text-sm text-orange-600">
//               {destinations?.duration}
//               day
//             </p>
//           </div>

//           {/* Start Point */}
//           <div className="bg-purple-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
//             <FlagIcon className="text-purple-500 h-6 w-6 mb-1" />
//             <h5 className="font-medium text-purple-700">Start Point</h5>
//             <p className="text-sm text-purple-600">
//               {destinations?.startPoint}
//             </p>
//           </div>

//           {/* End Point */}
//           <div className="bg-orange-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
//             <FlagIcon className="text-orange-500 h-6 w-6 mb-1" />
//             <h5 className="font-medium text-orange-700">End Point</h5>
//             <p className="text-sm text-orange-600">{destinations?.endPoint}</p>
//           </div>

//           {/* Difficulty */}
//           <div className="bg-purple-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
//             <StarIcon className="text-purple-500 h-6 w-6 mb-1" />
//             <h5 className="font-medium text-purple-700">Difficulty</h5>
//             <p className="text-sm text-purple-600">
//               {destinations?.difficulty}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="text-justify">
//         <p className="text-gray-700 mb-6">
//           {destinations?.travel_description.slice(0, 700)}
//         </p>
//         <p className="text-gray-700 mb-6">
//           {destinations?.travel_description.slice(80)}
//         </p>
//       </div>

//       <Design4 />
//       <FAQ />
//     </div>
//   );
// };

// export default Destinations;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ClockIcon } from "@heroicons/react/solid";
import {
  MapIcon,
  FlagIcon,
  StarIcon,
  ScaleIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";

import FAQ from "../FAQ/Faq";

const Destinations = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!id || id === '0') return; // Prevent invalid requests

  setLoading(true);
  axios
    .get(`https://travel-backend-0cb0.onrender.com/api/trips/${id}`)
    .then((res) => {
      setTrip(res.data);
    })
    .catch((err) => {
      console.error("Failed to fetch trip:", err);
    })
    .finally(() => {
      setLoading(false);
    });
}, [id]);


  const Design4 = () => (
    <div className="ml-[2rem]">
      <h2 className="text-3xl font-bold text-center my-10 text-teal-900">
        Itinerary
      </h2>
      {trip?.days.map((day) => (
        <div key={day.day} className="mb-12 relative">
          <div className="absolute -left-10 top-[-30px] md:top-[-15px] w-16 mb-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
            Day {day.day}
          </div>
          <div className="bg-white rounded-lg shadow-lg p-2 md:p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-teal-950">
                Day Journey
              </h3>
              <div className="flex items-center text-gray-500">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>Full Day</span>
              </div>
            </div>
            <p className="text-gray-700">{day.description}</p>
            {day.highlights && (
              <div className="mt-4 border-t pt-3">
                <h4 className="font-medium mb-2 text-teal-950">Duration</h4>
                <ul className="space-y-1 text-sm text-gray-600 grid grid-cols-2 md:grid-cols-3">
                  {day.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-purple-500">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) return <p className="p-10 text-center">Loading trip details...</p>;
  if (!trip) return <p className="p-10 text-center text-red-500">Trip not found.</p>;

  return (
    <div className="container mx-auto p-6 md:p-12 pt-0 max-w-[96rem]">
      <div className="bg-white rounded-xl p-6">
        <h4 className="text-xl font-semibold text-green-600 mb-4 text-center">
          Expedition Metrics
        </h4>
        <div className="space-y-4 justify-items-center items-center gap-0 grid xl:grid-cols-2 sm:grid-rows-2 sm:grid-cols-3">
          {trip?.maxElevation && (
            <div className="bg-orange-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
              <ChartBarIcon className="text-orange-500 h-6 w-6 mb-1" />
              <h5 className="font-medium text-orange-700">Max Elevation</h5>
              <p className="text-sm text-orange-600">{trip.maxElevation}</p>
            </div>
          )}

          <div className="bg-purple-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
            <ScaleIcon className="text-purple-500 h-6 w-6 mb-1" />
            <h5 className="font-medium text-purple-700">Distance</h5>
            <p className="text-sm text-purple-600">Approx. {trip.distance}</p>
          </div>

          <div className="bg-orange-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
            <MapIcon className="text-orange-500 h-6 w-6 mb-1" />
            <h5 className="font-medium text-orange-700">Duration</h5>
            <p className="text-sm text-orange-600">{trip.duration} day</p>
          </div>

          <div className="bg-purple-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
            <FlagIcon className="text-purple-500 h-6 w-6 mb-1" />
            <h5 className="font-medium text-purple-700">Start Point</h5>
            <p className="text-sm text-purple-600">{trip.startPoint}</p>
          </div>

          <div className="bg-orange-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
            <FlagIcon className="text-orange-500 h-6 w-6 mb-1" />
            <h5 className="font-medium text-orange-700">End Point</h5>
            <p className="text-sm text-orange-600">{trip.endPoint}</p>
          </div>

          <div className="bg-purple-100 p-2 rounded-lg h-[6rem] w-[10rem] flex items-center justify-center flex-col">
            <StarIcon className="text-purple-500 h-6 w-6 mb-1" />
            <h5 className="font-medium text-purple-700">Difficulty</h5>
            <p className="text-sm text-purple-600">{trip.difficulty}</p>
          </div>
        </div>
      </div>

      <div className="text-justify mt-6">
        <p className="text-gray-700 mb-6">
          {trip?.travel_description?.slice(0, 700)}
        </p>
        <p className="text-gray-700 mb-6">
          {trip?.travel_description?.slice(80)}
        </p>
      </div>

      <Design4 />
      <FAQ />
    </div>
  );
};

export default Destinations;
