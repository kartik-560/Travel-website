import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  // Trigger the animation when the component comes into view
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="relative w-full h-[250px] md:h-[400px] bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <img
        src="/assest/Banner/people.webp"
        alt="Hiker"
        loading='lazy'
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-start justify-start">
        <motion.div
          className="mt-[6rem] p-6 md:p-10 lg:p-16"
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8 },
            },
          }}
        >
          <TypeAnimation
            sequence={[
              'Mountain Adventurer', // Types 'Mountain Adventurer'
              2000, // Waits 2s
              'Exploring the Peaks', // Deletes 'Mountain Adventurer' and types 'Exploring the Peaks'
              2000, // Waits 2s
            ]}
            wrapper="h3"
            className="text-2xl font-medium text-start mb-2"
            cursor={true}
            repeat={Infinity}
          />
          <motion.p
            className="text-gray-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join us on an unforgettable adventure.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full shadow-[inset_-10px_0_20px_0_rgba(0,0,0,0.5)]"></div>
    </div>
  );
};

export default Banner;