import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Travel Plan",
      description:
        "Travel plans are not solely on individual measures but a delivery mechanism or strategy to offer money",
    },
    {
      id: "02",
      title: "Flights Booking",
      description:
        "Discover your next dream destination and deals in domestic and international flights",
    },
    {
      id: "03",
      title: "Accommodation",
      description:
        "Looking local and overseas housing spaces and rental services, quality place in plus+",
    },
  ];

  const mergedDesigns = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
        },
      },
    },
    item: {
      hidden: { opacity: 0, height: 0 },
      visible: {
        opacity: 1,
        height: "auto",
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
    image: {
      hidden: { opacity: 0, scale: 1.2 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.7,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <div className="w-full">
      <section className="py-20 px-10 bg-gray-50" id="services">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={mergedDesigns.container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-10">
            <motion.h2 variants={mergedDesigns.item} className="text-4xl font-bold">
              What services<br />we provide
            </motion.h2>
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={mergedDesigns.item}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <div className="absolute inset-0 text-black bg-gradient-to-r from-[#FF9D81] to-[#FF4E4E] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  <div className="relative p-4 bg-white group-hover:bg-transparent transition-colors rounded-xl shadow-lg group-hover:text-white">
                    <h3 className="text-xl font-bold flex gap-3 mb-2">
                      <span className="text-black-500 group-hover:text-white/60">{service.id}.</span>
                      <span>{service.title}</span>
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/80 pl-10">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            variants={mergedDesigns.image}
            className="relative group flex justify-center"
          >
            <div className="absolute w-[80%] inset-0 bg-gradient-to-r from-[#FF9D81] to-[#FF4E4E] rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform" />
            <img
              src="/assest/services_image.webp"
              alt="Services"
              loading="lazy"
              className="w-[80%] rounded-2xl relative z-10 transform -rotate-3 group-hover:rotate-0 transition-transform"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
