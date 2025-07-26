import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(0);
  const navigate = useNavigate();
  const activities = [
    {
      id: "01",
      title: "Curated Travel",
      imageUrl: "/assest/HeroImages/gompa-transformed.webp",
    },
    {
      id: "02",
      title: "Authentic Experiences",
      imageUrl: "/assest/HeroImages/rocky_hotels.webp",
    },
    {
      id: "03",
      title: "Personalized Journeys",
      imageUrl: "/assest/HeroImages/ladakh.webp",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length);
      setSelectedActivity((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleActivityClick = (index) => {
    setSelectedActivity(index);
    setCurrentSlide(index);
  };

  return (
    <div className="hero-container relative xs:max-h-[93.0vh] md:min-h-screen w-full overflow-hidden">
      <div className="hero-background-wrapper relative h-screen">
        <AnimatePresence mode="wait">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background */}
              <div className="hero-image-wrapper absolute inset-0">
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="hero-gradient absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Common Hero Text Overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-3xl sm:text-5xl font-bold mb-4 font-borel"
                >
                  Experience India Like Never Before –{" "}
                  <br className="hidden sm:block" />
                  Travel, Connect, Belong.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="text-3xl sm:text-2xl max-w-2xl mb-6 font-poppins"
                >
                  Curated Travel Authentic Experiences Personalized Journeys
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4 }}
                   className="text-[20px] sm:text-[18px] max-w-2xl text-white/90 mb-8"

                >
                  🌍 Led by Experts | 24/7 Personalized Assistance | Immersive
                  Cultural Exchange
                </motion.p>

                <motion.button
                  onClick={() => navigate("/itinerary")}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6 }}
                  className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                  Start Your Journey →
                </motion.button>
              </div>
            </div>
          ))}
        </AnimatePresence>
      </div>

      {/* Activities Tab */}
      <div className="hero-activities-wrapper absolute bottom-0 left-0 lg:left-[70%] right-0 flex justify-center px-4 pb-8 z-20 hidden ">
        <div className="hero-activities-container bg-white/20 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-xs">
          <div className="hero-activities-header p-4 relative">
            <h2 className="text-lg font-semibold text-white mb-2">
              What Excites You Most?
            </h2>
            <div className="w-12 h-0.5 bg-white"></div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 text-sm">
              <span className="hidden sm:inline">
                {activities[selectedActivity].id}
              </span>
            </div>
          </div>
          <div className="hero-activities-list">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`hero-activity-item flex items-center p-4 cursor-pointer transition-all duration-300 ${
                  selectedActivity === index ? "bg-white/10" : "bg-transparent"
                }`}
                onClick={() => handleActivityClick(index)}
              >
                <div className="hero-activity-icon relative mr-4">
                  <span className="sm:hidden text-sm text-white/70 absolute -left-[0.8rem] -top-[0.50rem]">
                    {activity.id}
                  </span>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={activity.imageUrl}
                      alt={activity.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="hero-activity-text">
                  <h3 className="font-semibold text-base text-white">
                    {activity.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="hero-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 displa hidden">
        {activities.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero1;
