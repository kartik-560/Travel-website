import { ClockIcon } from "@heroicons/react/solid";
import {
  MapIcon,
  FlagIcon,
  StarIcon,
  ScaleIcon,
  ChartBarIcon,
} from "@heroicons/react/outline";

import FAQ from "../FAQ/Faq";

const Destinations = ({ trip }) => {


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
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-teal-950">
                Day Journey
              </h3>
              <div className="flex items-center text-gray-500">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>{day.duration || "Full Day"}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700">{day.description}</p>

            {/* Extra Info (Distance + Duration + Highlights) */}
            <div className="mt-4 border-t pt-3 space-y-3">
              {day.distance && (
                <div>
                  <h4 className="font-medium mb-1 text-teal-950">Distance</h4>
                  <p className="text-sm text-gray-600">{day.distance}</p>
                </div>
              )}

              {day.duration && (
                <div>
                  <h4 className="font-medium mb-1 text-teal-950">Duration</h4>
                  <p className="text-sm text-gray-600">{day.duration}</p>
                </div>
              )}

              {day.highlights?.length > 0 && (
                <div>
                  <h4 className="font-medium mb-1 text-teal-950">Highlights</h4>
                  <ul className="space-y-1 text-sm text-gray-600 list-disc list-inside">
                    {day.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (!trip) return null;

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


      {trip?.whatToExpect?.length > 0 && (
        <div className="mt-10">
          <h4 className="text-xl font-semibold text-green-600 mb-6 text-center">
            What to Expect
          </h4>
          <div className="space-y-6">
            {trip.whatToExpect.map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-5 border-l-4 border-green-500">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">{item.expect_title}</h5>
                <p className="text-gray-600 text-sm">{item.expect_description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Design4 />
      <FAQ />
    </div>

  );
};

export default Destinations;
