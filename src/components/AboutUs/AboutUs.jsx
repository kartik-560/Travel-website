import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, Mountain, Globe, Compass } from "lucide-react";
import { useRef } from "react";


const teamMembers = [
  {
    name: "Sunil Kumar",
    role: "Founder",
    image: "/assest/Team/sunilkumar.jpg",
    description:
      "Pursued Masters in Tourism from IGNOU, licensed tour operator, German language enthusiast & a certified mountaineer.",
  },
  {
    name: "Sunil Sharma",
    role: "Co-founder",
    image: "/assest/Team/sunil.jpg",
    description:
      "Visionary, licensed travel guide, and your partner on the road.",
  },
  {
    name: "Aashima Kanwar",
    role: "Operations Executive",
    image: "/assest/Team/aashima.jpg",
    description:
      "The detail wizard, ensuring each trip is smooth and personalized.",
  },
  {
    name: "Neetima",
    role: "Certified Mountaineer & Trek Guide",
    image: "/assest/Team/neetima.jpg",
    description:
      "Certified mountaineer, skier, and licensed guide, helping travelers (especially women) embrace the thrill of the mountains.",
  },
  {
    name: "Sanjay Chauhan",
    role: "Experienced Driver",
    image: "/assest/Team/sanjay.jpg",
    description:
      "Sanjay has over 25 years of experience driving in mountainous regions like Kinnaur, Leh, and Uttarakhand.",
  },
];

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("story");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = {
    story: (
      <div className="space-y-6 flex flex-col justify-start text-justify">
        <p>
          Better Bagpacking India began with a simple belief: travel should feel personal, meaningful, and transformative.
        </p>
        <p>
          In 2012, our founder <b>Sunil Kumar </b>was balancing studies and a part-time job in Shimla when he discovered the joy of hidden trails, local conversations, and the heartbeat of India beyond tourist maps. What started as a spark turned into a vision—crafting journeys where travelers don’t just visit India, they belong here.
        </p>
        <p>
          Today, every trip we design is rooted in authenticity, connecting you with India’s landscapes, traditions, and people in ways that leave you with stories for a lifetime.
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

  return (
    <>
      {/* Main About Section */}
      <div
        ref={ref}
        className="min-h-[80vh] bg-white pt-16  px-4 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6 }}
          className="max-w-6xl w-[90%] bg-white rounded-3xl flex flex-col md:flex-row"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[20rem] md:h-[29rem]  overflow-hidden rounded-3xl bg-red-500">
            <img
              src="/assest/bg.png"
              alt="Travel"
              className="w-full h-[20rem] md:h-[29rem]  object-cover object-center "
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

      {/* Team Section - Stacked Vertically */}

      <section className="bg-white  px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group bg-white"
              >
                {/* Always show image */}
                <div className="w-full aspect-square md:aspect-auto md:h-80 bg-white overflow-hidden rounded-t-2xl flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-contain md:object-cover object-center w-full h-full"
                  />
                </div>

                {/* Mobile content: show always below image */}
                <div className="p-4 text-center md:hidden">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-700">{member.description}</p>
                </div>

                {/* Desktop content: show on hover */}
                <div className="absolute inset-0 hidden md:flex flex-col justify-end bg-black bg-opacity-70 text-white p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-200 max-h-[9rem] overflow-y-auto">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default AboutUs;
