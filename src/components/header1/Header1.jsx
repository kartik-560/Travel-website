import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About","Itinerary", "Testimonials", "Contact"];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 overflow-hidden bg-[#FFF5EE] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="logo-header1 h-full ">
            {/* Logo with Home Link */}
            <a
              href="/"
              className={`text-2xl font-bold hover:opacity-75 transition-opacity duration-150 'text-black'
            }`}
            >
              <img
                src="/assest/logo.webp"
                alt="Better Backpacking India"
                 className='h-[190%] mt-[-1.9rem] w-full'
              />
            </a>
          </div>
          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className={`hover:opacity-75 transition-opacity duration-150 hover:text-orange-500 transition-transform ${"text-black"}`}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:opacity-75 text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
     
         {isOpen && (
          <div className="md:hidden py-4 px-2 bg-white shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`${item === 'Home' ? '/' : item.toLowerCase()}`}
                  className="text-black hover:opacity-75 transition-opacity duration-150"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;
