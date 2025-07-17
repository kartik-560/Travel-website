
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// import { Mountain, Compass, MapPin, Calendar, Plane , Globe } from 'lucide-react';
// import itineraryData from '../utils/itineraryData';
// import { useParams } from 'react-router-dom';

// // Design 1: Left Dominant Layout
// const LeftDominantLayout = ({ images, onImageClick , numId }) => {
//   // const title = 'Enchanting Himachal: A Journey from Delhi to Shimla';
//   // const subTitle = "DELHI - SOLAN - JIUNTHI - SHIMLA - DELHI";
//   return (
// <div className="imageContainer">  

// <div className="text-center space-y-2 mt-[5rem]">
//     <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{itineraryData[numId]?.title}</h2>
//     <div className="h-0.5 w-16 bg-blue-500 mx-auto"></div>
//     <p className="text-sm text-gray-500 uppercase tracking-wider">{itineraryData[numId]?.subTitle}</p>
//   </div>


//     <div
//       className="grid grid-rows-2 gap-[0.2rem] md:gap-4 my-0 mx-auto p-2 md:p-[2rem] h-[450px] mt-[1rem]"
//       style={{ gridTemplateColumns: "55% 45%" }} // 60:40 ratio
//     >
//       {/* Large Left Image */}
//       <motion.div
//         className="col-span-1 row-span-2 overflow-hidden rounded-xl "
//         whileHover={{ scale: 1.02 }}
//         onClick={() => onImageClick(0)}
//       >
//         <img
//           src={images[0]}
//           alt="Large left_image"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Small Top Right Image */}
//       <motion.div
//         className="overflow-hidden rounded-xl"
//         whileHover={{ scale: 1.05 }}
//         onClick={() => onImageClick(1)}
//       >
//         <img
//           src={images[1]}
//           alt="Small top right_image"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>

//       {/* Small Bottom Right Image */}
//       <motion.div
//         className="overflow-hidden rounded-xl"
//         whileHover={{ scale: 1.05 }}
//         onClick={() => onImageClick(2)}
//       >
//         <img
//           src={images[2]}
//           alt="Small bottom right_image"
//           className="w-full h-full object-cover"
//         />
//       </motion.div>
//     </div>
//     </div>
//   );
// };


// // Cinematic Modal with advanced animations
// const CinematicModal = ({
//   image,
//   isOpen,
//   onClose,
//   onNext,
//   onPrev,
//   totalImages,
//   currentIndex,
// }) => (
//   <AnimatePresence>
//     {isOpen && (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
//         onClick={onClose}
//       >
//         <motion.div
//           className="relative w-full max-w-7xl p-4"
//           initial={{ scale: 0.9, y: 50 }}
//           animate={{ scale: 1, y: 0 }}
//           exit={{ scale: 0.9, y: 50 }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
//           >
//             <X className="w-6 h-6 text-white" />
//           </button>

//           {/* Image */}
//           <motion.img
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ type: 'spring', stiffness: 200, damping: 20 }}
//             src={image}
//             alt="Cinematic"
//             className="w-full h-[85vh] object-contain"
//           />

//           {/* Navigation */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="absolute inset-x-0 bottom-0 flex justify-between items-center p-2 bg-gradient-to-t from-black/80 to-transparent"
//           >
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={onPrev}
//                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//               >
//                 <ChevronLeft className="w-6 h-6 text-white" />
//               </button>
//               <span className="text-white">
//                 {currentIndex + 1} / {totalImages}
//               </span>
//               <button
//                 onClick={onNext}
//                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
//               >
//                 <ChevronRight className="w-6 h-6 text-white" />
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// );

// // Main Gallery Showcase Component
// const GallerySections = () => {
//   const [modalImage, setModalImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

// const {id} = useParams();
// const numId = Number(id)
// const images = itineraryData[numId]?.images
// console.log(images , "images")
//   const openModal = (index) => {
//     setCurrentIndex(index);
//     setModalImage(images[index]);
//   };

//   const closeModal = () => setModalImage(null);

//   const handleNext = () => {
//     const nextIndex = (currentIndex + 1) % images.length;
//     setCurrentIndex(nextIndex);
//     setModalImage(images[nextIndex]);
//   };

//   const handlePrev = () => {
//     const prevIndex = (currentIndex - 1 + images.length) % images.length;
//     setCurrentIndex(prevIndex);
//     setModalImage(images[prevIndex]);
//   };

//   return (
//     <div>
//       {/* Gallery */}
//       <LeftDominantLayout images={images} onImageClick={openModal} numId={numId} />

//       {/* Cinematic Modal */}
//       <CinematicModal
//         image={modalImage}
//         isOpen={!!modalImage}
//         onClose={closeModal}
//         onNext={handleNext}
//         onPrev={handlePrev}
//         totalImages={images.length}
//         currentIndex={currentIndex}
//       />
//     </div>
//   );
// };

// export default GallerySections;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import itineraryData from '../utils/itineraryData';
import { useParams } from 'react-router-dom';

const LeftDominantLayout = ({ images, onImageClick, numId }) => {
  return (
    <div className="imageContainer">
      <div className="text-center space-y-2 mt-[5rem]">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{itineraryData[numId]?.title}</h2>
        <div className="h-0.5 w-16 bg-blue-500 mx-auto"></div>
        <p className="text-sm text-gray-500 uppercase tracking-wider">{itineraryData[numId]?.subTitle}</p>
      </div>

      <div
        className="grid grid-rows-2 gap-2 md:gap-4 my-0 mx-auto p-2 md:p-[2rem] h-[450px] mt-[1rem]"
        style={{ gridTemplateColumns: "55% 45%" }} // 60:40 ratio
      >
        {/* Large Left Image */}
        <motion.div
          className="col-span-1 row-span-2 overflow-hidden rounded-xl"
          whileHover={{ scale: 1.02 }}
          onClick={() => onImageClick(0)}
        >
          <img
            src={images[0]}
            alt="Large left_image"
            className="w-full h-full object-cover lazyload"
            loading="lazy"
          />
        </motion.div>

        {/* Small Top Right Image */}
        {images.slice(1, 3).map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            onClick={() => onImageClick(index + 1)}
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover lazyload"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CinematicModal = ({
  image,
  isOpen,
  onClose,
  onNext,
  onPrev,
  totalImages,
  currentIndex,
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-7xl p-4"
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            src={image}
            alt="Cinematic"
            className="w-full h-[85vh] object-contain"
          />

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 bottom-0 flex justify-between items-center p-2 bg-gradient-to-t from-black/80 to-transparent"
          >
            <button
              onClick={onPrev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <span className="text-white">
              {currentIndex + 1} / {totalImages}
            </span>
            <button
              onClick={onNext}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const GallerySections = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { id } = useParams();
  const numId = Number(id);
  const images = itineraryData[numId]?.images || [];

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalImage(images[index]);
  };

  const closeModal = () => setModalImage(null);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setModalImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setModalImage(images[prevIndex]);
  };

  return (
    <div>
      {/* Gallery */}
      <LeftDominantLayout images={images} onImageClick={openModal} numId={numId} />

      {/* Cinematic Modal */}
      <CinematicModal
        image={modalImage}
        isOpen={!!modalImage}
        onClose={closeModal}
        onNext={handleNext}
        onPrev={handlePrev}
        totalImages={images.length}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default GallerySections;
