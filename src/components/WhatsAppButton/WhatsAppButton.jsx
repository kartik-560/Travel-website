import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  // WhatsApp phone number from Footer: +91-8091790220
  const phoneNumber = "918091790220";
  const defaultMessage =
    "Hello! I am interested in planning a trip with Better Backpacking India. Could you please share more details about your itineraries and packages?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <FaWhatsapp className="w-8 h-8 drop-shadow" />
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;

