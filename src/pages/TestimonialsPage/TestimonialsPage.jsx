/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useCallback, useEffect } from 'react';

import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import RenderModal from '../../components/Testimonials/RenderModel';
const TestimonialsPage = () => {

  const [selectedModal, setSelectedModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const testimonials = [
    {
      name: "Seranne",
      role: "Traveler",
      image: ["/assest/Enchanting_delhi_shimla/Himalaya.webp", "/assest/Enchanting_delhi_shimla/himalaya.png"],
      text: "They say that this means good luck, and I wish you all the luck with everything. I am very grateful for everything you did for me. Without you, I couldn’t make this trip so good. Shukriya!!",
      location: "Himalayas, India",
      rating: 5
    },
    {
      name: "Garlic Girls",
      role: "Road Trippers",
      image: ["/assest/Enchanting_delhi_shimla/Road_trip.png"],
      text: "There are no bad people. Only good people, that do bad things. - Sunil, the wise (2019).",
      location: "India Roadtrip, August 2019",
      rating: 5
    },
    {
      name: "Shivangini Chauhan",
      role: "Traveler",
      image: ["/assest/Enchanting_delhi_shimla/Spiti_valley.png","/assest/Enchanting_delhi_shimla/himachal.png"],
      text: "My recent trip to Spiti was incredible, not just because of the stunning location, but mainly due to the wonderful people I met along the way. Sunil Bhaiya's captivating Himachali stories added an extra layer of charm to the journey. Despite challenges like the lack of running water, it taught me the profound value of water in more ways than one. It feels like yesterday; Spiti, you are truly magnificent.",
      location: "Spiti Valley, Himachal Pradesh",
      rating: 5
    },
    {
      name: "Madhuri",
      role: "Pilgrim Traveler",
      image: ["/assest/Enchanting_delhi_shimla/Spiti_valley.png","/assest/Enchanting_delhi_shimla/gujrat.png"],
      text: "Traveling with mom to Dwarka, Somnath and Gir in Gujarat has been nothing but spectacular. Marvelous darshan to the temples and such warm hospitality made me grateful. Huge thanks to Sunil Bhai, who has always been by our side, taking special care of mom and ensuring everything went smoothly. Can’t thank you enough, Bhai, for being there.",
      location: "Dwarka, Gujarat",
      rating: 5
    }
  ];
    const [imageIndices, setImageIndices] = useState(
  () => Array(testimonials.length).fill(0)
);
  useEffect(() => {
  setImageIndices(prev =>
    Array(testimonials.length)
      .fill(0)
      .map((_, i) => (Number.isFinite(prev[i]) ? prev[i] : 0))
  );
}, [testimonials.length]);

const handleImageNavigation = useCallback((index, direction) => {
  setImageIndices(prev => {
    const next = [...prev];
    const imageCount = testimonials[index]?.image?.length ?? 0;
    if (imageCount === 0) return next;
    const current = Number.isFinite(next[index]) ? next[index] : 0;
    next[index] = (current + direction + imageCount) % imageCount;
    return next;
  }); 
}, [testimonials]);

  const TestimonialCard = ({ testimonial, index }) => {
    return (
      <motion.div
        id='testimonials'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1
          }
        }}
        className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />

        <div className="relative h-[500px]">
          {testimonial.image.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={img}
              alt={`${testimonial.name} (${testimonial.location})`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 
                ${imageIndices[index] === imgIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 z-40 -translate-y-1/2">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleImageNavigation(index, -1);
            }}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleImageNavigation(index, 1);
            }}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <Quote className="w-10 h-10 mb-4 text-yellow-400 opacity-80" />
          <div className="flex gap-1 mb-2">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-white mb-4">{testimonial.text}</p>
          <div className="border-t border-white/20 pt-4">
            <h4 className="text-white font-bold">{testimonial.name}</h4>
            <p className="text-yellow-400">{testimonial.role}</p>
            <p className="text-white/80 text-sm">{testimonial.location}</p>
          </div>
        </div>
      </motion.div>
    );
  };

const teamData = [
    {
      name: 'Sunil Kumar',
      title: 'Founder',
      image: '/assest/Team/sunilkumar.jpg',
      bio: 'From the winding lanes of Shimla to the remotest trails of Himachal, Sunil Kumar has lived travel long before he made it his profession. A licensed tour expert with a Master’s in Tourism from IGNOU, a diploma in German language, and a Basic Mountaineering certification from HMI Darjeeling, he brings knowledge, adventure, and cultural depth into every journey. Having led road trips across 20 Indian states and guided global travellers through the Himalayas, Sunil’s forte lies in crafting experiences that feel less like tours and more like stories waiting to be lived.'
    },
    {
      name: 'Sunil Sharma',
      title: 'Co-founder',
      image: '/assest/Team/sunil.jpg',
      bio: 'With a vision to revolutionize the tourism industry, Sunil co-founded Better Backpacking India to make travel more accessible, transparent, and customer-friendly. His goal is to provide travelers with not just a trip, but an experience that is immersive, exhilarating, and unforgettable.'
    },
    {
      name: 'Aashima Kanwar',
      title: 'Operations Executive',
      image: '/assest/Team/aashima.jpg',
      bio: 'With four years of experience in sales and team leadership, Aashima is a dedicated travel expert committed to curating personalized travel experiences. Hailing from the serene landscapes of Himachal Pradesh, at the foot of Churdhar Peak—the highest in Sirmour—she has a deep appreciation for nature and exploration. Her strong sense of responsibility ensures that every journey she plans is not just a trip but a cherished memory for every traveler.'
    },
    {
      name: 'Neetima',
      title: 'Certified Mountaineer & Trek Guide',
      image: '/assest/Team/neetima.jpg',
      bio: 'A certified mountaineer, skier (ABVIMAS), and licensed tourist guide (HP Tourism), Neetima has spent the past six years leading adventurers through the mountains. Born amidst nature in a humble cow shelter, she was inspired by her uncle, who summited the world’s highest peak in 1993. Living by her mother’s prophecy—marked by a mole on her foot that foretold endless exploration—she now guides fellow trekkers, especially women, helping them discover the thrill and serenity of the wild. With four mountain expeditions every month, she is dedicated to empowering others to conquer new heights.'
    },
    {
      name: 'Sanjay Chauhan',
      title: 'Experienced Driver',
      image: '/assest/Team/sanjay.jpg',
      bio: 'A professional driver having 25 years driving experience in the difficult mountain terrain i.e. Kinnaur,Spiti, Lahaul,Leh, Kashmir and Utrakhand. The best thing about him being a driver is that he is non-smoker and a teetotaler .'
    }


  ];

  return (

    <>
      <div className="bg-gray-50 cursor-pointer">
        <div className="max-w-7xl mx-auto py-16 px-4">
          <div className="text-center mb-12 mt-10">
            <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600">Real stories from real adventurers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}

            <AnimatePresence>
              {selectedModal && (
                <RenderModal
                  selectedModal={selectedModal}
                  setSelectedModal={setSelectedModal}
                  testimonials={testimonials}
                  currentImageIndex={currentImageIndex}
                  setCurrentImageIndex={setCurrentImageIndex}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F5F2] font-sans mt-[-10px]" >

        <div className="bg-[#F5F5F4] text-center py-20 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-[#008080]">
              Meet The Heart of Our Adventures
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#333333]/80">
              At Better Backpacking India, our team is driven by a shared passion for travel, adventure, and creating unforgettable experiences. Each member brings unique expertise, ensuring that every journey is seamless, thrilling, and truly memorable.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-16 md:py-24 px-4 mt-[-60px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover border-4 border-[#E87500] mb-6"
                />
                <h2 className="font-serif text-3xl text-[#333333] font-bold">{member.name}</h2>
                <p className="text-[#008080] italic font-semibold text-lg mb-4">{member.title}</p>
                <p className="text-[#333333]/80 text-base text-left">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
