import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(0);

  const activities = [
    {
      id: "01",
      title: "Trekking",
      description: "Climbing the tallest mountain in Europe!",
      imageUrl: "/assest/HeroImages/gompa-transformed.webp",
    },
    {
      id: "02",
      title: "Rafting",
      description: "Let's meet the wildest river and raft on these!",
      imageUrl: "/assest/HeroImages/rocky_hotels.webp",
    },
    {
      id: "03",
      title: "Windsurfing",
      description: "Didn't see the tallest wave on a rainy day?",
      imageUrl: "/assest/HeroImages/ladakh.webp",
    },
  ];

  // Auto-play carousel effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % activities.length);
      setSelectedActivity((prevSlide) => (prevSlide + 1) % activities.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const handleActivityClick = (index) => {
    setSelectedActivity(index);
    setCurrentSlide(index);
  };

  return (
    <div className="hero-container relative xs:max-h-[100%] md:min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <div className="hero-background-wrapper relative h-screen">
        <AnimatePresence mode="wait">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`hero-slide absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div className="hero-image-wrapper absolute inset-0">
                <img
                  src={activity.imageUrl}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="hero-gradient absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div
                className="hero-content absolute top-1/2 left-4 sm:left-8 md:left-16 transform -translate-y-1/2 text-white max-w-md z-10
             xs:-translate-y-[210%] xm:-translate-y-[150%]"
              >
                {" "}
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="hero-title font-bold font-borel text-3xl sm:text-4xl mb-4"
                >
                  {activity.title}
                </motion.h2>
                <motion.p
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="hero-description text-base sm:text-lg font-poppins font-thin"
                >
                  {activity.description}
                </motion.p>
              </div>
            </div>
          ))}
        </AnimatePresence>
      </div>

      {/* Activities Tab */}
      <div
        className="hero-activities-wrapper absolute bottom-0 left-0 lg:left-[70%] right-0 flex justify-center px-4 pb-8 z-20
      "
      >
        <div className="hero-activities-container bg-white/20 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-xs">
          <div className="hero-activities-header p-4 relative">
            <h2 className="text-lg font-semibold text-white mb-2">
              What Excites You Most?
            </h2>
            <div className="w-12 h-0.5 bg-white"></div>
            {/* Hidden on mobile, shows ID outside the div */}
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
                  <p className="text-white/80 text-xs">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="hero-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
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

export default Hero;
