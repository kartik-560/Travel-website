
import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, Mountain, Globe, Compass } from "lucide-react";
import { useRef } from "react";

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState("story");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = {
    story: (
      <div className="space-y-6 flex flex-col justify-start text-justify">
        <p>
          In 2012, I moved to Shimla to pursue my studies, facing financial
          challenges as a middle-class student. To support myself, I joined my
          first travel company, The Great Escape Routes, in 2014. This
          experience was invaluable, serving as a tourism school where I
          learned from the owner and guided foreign tourists around Himachal.
        </p>
        <p>
          After completing my university studies in 2018, I worked with Green
          Lion Travel as a road trip coordinator, leading tours across 20
          states in India. My journey in tourism has fueled my dream of
          establishing my own travel company.
        </p>
      </div>
    ),
    mission: (
      <div className="flex flex-col justify-start items-start h-full overflow-y-auto px-4 md:px-8">
        <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
        <p className="text-sm sm:text-[1rem] text-gray-700 mb-4 mt-[-0.8rem]">
          To transform travel from a mere movement between places to a profound
          journey of personal discovery, cultural understanding, and meaningful
          connections.
        </p>
        <div className="grid gap-4 w-full  lg:grid-cols-2">
          {[
            {
              icon: <Globe className="w-10 md:w-12 h-10 md:h-12 text-blue-500" />,
              text: "Global Perspectives",
            },
            {
              icon: <Compass className="w-10 md:w-12 h-10 md:h-12 text-green-500" />,
              text: "Sustainable Tourism",
            },
            {
              icon: <Mountain className="w-10 md:w-12 h-10 md:h-12 text-purple-500" />,
              text: "Authentic Experiences",
            },
            {
              icon: <MapPin className="w-10 md:w-12 h-10 md:h-12 text-red-500" />,
              text: "Local Empowerment",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg"
            >
              {item.icon}
              <span className="text-sm md:text-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div
      ref={ref}
      className="min-h-[80vh] bg-white py-16 px-4 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-[90%]  bg-white rounded-3xl flex flex-col md:flex-row"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] overflow-hidden rounded-3xl md:rounded-3xl bg-red-500 ">
          <img
            src="/assest/icon.webp"
            alt="Travel"
            className="w-full h-[300px] sm:h-[450px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-4 md:p-6 h-[450px] lg:h-[550px]">
          <h1 className="text-4xl font-bold mb-6 text-black">
            Wanderlust Chronicles
          </h1>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeSection === section
                    ? "bg-orange-500 text-white"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className="flex-grow w-full overflow-hidden relative  items-center ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-auto"
              >
                {sections[activeSection]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
