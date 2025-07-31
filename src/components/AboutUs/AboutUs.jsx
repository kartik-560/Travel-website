/* eslint-disable react/jsx-no-undef */
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, Mountain, Globe, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaBookOpen,
  FaSun,
  FaHandsHelping,
  FaCamera,
} from "react-icons/fa";
import ItineraryCard from "../itineraryCard/ItineraryCard";
import Photos from "../Gallery/Photos"; 

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("story");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const sunilRef = useRef(null);
  const sunilInView = useInView(sunilRef, { once: true });

  const sections = {
    story: (
      <div className="space-y-6 flex flex-col justify-start text-justify">
        <p>
          Better Bagpacking India was born out of passion, adventure, and the
          love for real, immersive travel. In 2012, our founder Sunil took his
          first step into the world of travel while balancing his studies and a
          part-time job in Shimla. From exploring hidden trails to experiencing
          India’s rich culture firsthand, he realized that travel was more than
          just destinations—it was about stories, connections, and experiences
          that last a lifetime.
        </p>
        <p>
          Today, we are proud to have crafted countless journeys that allow
          travelers to connect with India’s landscapes, people, and traditions
          in the most authentic way possible.
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
        <div className="grid gap-4 w-full lg:grid-cols-2">
          {[
            {
              icon: (
                <Globe className="w-10 md:w-12 h-10 md:h-12 text-blue-500" />
              ),
              text: "Global Perspectives",
            },
            {
              icon: (
                <Compass className="w-10 md:w-12 h-10 md:h-12 text-green-500" />
              ),
              text: "Sustainable Tourism",
            },
            {
              icon: (
                <Mountain className="w-10 md:w-12 h-10 md:h-12 text-purple-500" />
              ),
              text: "Authentic Experiences",
            },
            {
              icon: (
                <MapPin className="w-10 md:w-12 h-10 md:h-12 text-red-500" />
              ),
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

  const features = [
    {
      title: "Immersive Experiences",
      description: "Dive deep into local life, beyond the usual tourist spots.",
      icon: <FaMapMarkerAlt size={24} className="text-[#111518]" />,
      image: "/assest/chandratal/Chandratal.webp",
    },
    {
      title: "Cultural Exchange",
      description:
        "Connect with communities, share stories, and embrace diversity.",
      icon: <FaUsers size={24} className="text-[#111518]" />,
      image: "/assest/churdhar_trek/02.webp",
    },
    {
      title: "Continuous Learning",
      description:
        "Expand your horizons through workshops, talks, and hands-on activities.",
      icon: <FaBookOpen size={24} className="text-[#111518]" />,
      image: "/assest/spiti circuit/03.webp",
    },
    {
      title: "Balanced Leisure",
      description:
        "Find your rhythm with a mix of adventure, relaxation, and personal time.",
      icon: <FaSun size={24} className="text-[#111518]" />,
      image: "/assest/churdhar_trek/image.png",
    },
    {
      title: "Community Engagement",
      description:
        "Give back to the places you visit, leaving a positive impact.",
      icon: <FaHandsHelping size={24} className="text-[#111518]" />,
      image: "/assest/yulla_kanda_trek/Yulla_Kanda_Lake.webp",
    },
    {
      title: "Lasting Memories",
      description:
        "Create unforgettable moments that stay with you long after you return.",
      icon: <FaCamera size={24} className="text-[#111518]" />,
      image: "/assest/spiti circuit/group.jpg",
    },
  ];

  return (
    <>
      <section className="w-full relative overflow-hidden">
        <img
          src="/assest/delhi_shimla/01.webp"
          alt="View of Shimla at night"
          className="w-full h-[50vh] max-h-[80vh]  object-cover sm:w-full"
        />
      </section>

      <div
        ref={ref}
        className="min-h-[80vh] bg-white pt-16 pb-2 px-4 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-[90%] bg-white rounded-3xl flex flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-3xl bg-red-500">
            <img
              src="/assest/icon.webp"
              alt="Travel"
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div className="flex flex-col flex-grow p-4 md:p-6 h-[450px] lg:h-[550px]">
            <h1 className="text-4xl font-bold mb-6 text-black">
              Wanderlust Chronicles
            </h1>

            <div className="flex space-x-4 mb-6">
              {Object.keys(sections).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-full transition-all ${activeSection === section
                    ? "bg-orange-500 text-white"
                    : "bg-orange-100 text-orange-800"
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex-grow w-full overflow-hidden relative items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 overflow-auto pr-2"
                >
                  {sections[activeSection]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.section
        ref={sunilRef}
        className=" py-2 px-6 w-full mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={sunilInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={sunilInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Sunil – The Heart of Every Journey
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Sunil, the founder, is more than just a travel planner; he’s your
              personal travel companion. With a passion for India’s rich culture
              and landscapes, Sunil ensures every journey is tailored to your
              desires. He’s available 24/7, offering personalized attention and
              often travels alongside clients, making your experience truly
              unforgettable.
            </p>
            <Link to="/itinerary"><button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Plan Your Trip With Us →
            </button></Link>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={sunilInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/assest/Team/sunil.jpg"
              alt="Portrait of Sunil"
              className="rounded-xl shadow-lg w-full max-w-sm object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      <section className="px-6 py-16 bg-white max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold text-gray-900">
            Why Choose Us?
          </h2>
          <p className="text-gray-600">
            Innovative tools and powerful insights designed to elevate your
            journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Instant Savings",
              desc: "Get immediate savings on every booking—optimized for your budget.",
              icon: "💰",
            },
            {
              title: "Real-Time Insights",
              desc: "Smarter decisions powered by live data and flexible trip plans.",
              icon: "📊",
            },
            {
              title: "Flexible Plans",
              desc: "Custom travel experiences that scale with your preferences.",
              icon: "🛫",
            },
            {
              title: "Secure Transactions",
              desc: "Top-tier encryption and privacy for a worry-free booking process.",
              icon: "🔒",
            },
            {
              title: "Adaptive Features",
              desc: "Trip details evolve with your needs—without the chaos.",
              icon: "⚙️",
            },
            {
              title: "24/7 Support",
              desc: "From last-minute detours to emergencies—we’re always with you.",
              icon: "🧭",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFF8ED] p-6 rounded-xl shadow-md hover:shadow-lg transition space-y-3"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#5D4037]">
                {item.title}
              </h3>
              <p className="text-sm text-[#8D6E63]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-[#bf4e1e] mb-12 tracking-wide">
          OUR PHILOSOPHY – EXCeLLeC
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="shadow-md rounded overflow-hidden flex flex-col h-full"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="bg-[#A5573B] text-[#F5F5DC] p-4 flex flex-col justify-between grow">
                <h5 className="font-bold text-lg mb-2">{feature.icon}</h5>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>

                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ItineraryCard />
       <Photos/>
    
    </>
  );
};

export default AboutUs;
