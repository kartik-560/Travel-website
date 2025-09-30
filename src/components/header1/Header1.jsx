import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Itinerary", "Contact",'Abode'];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 overflow-hidden bg-[#FFF5EE]      file:shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <div className="logo-header1 h-full flex items-center">

            <a
              href="/"
              className="text-2xl font-bold hover:opacity-75 transition-opacity duration-150"
            >
              <img
                src="/assest/logo.webp"
                alt="Better Backpacking India"
                className='h-[130px]  w-full'
              />

            </a>
          </div>



          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isAbode = item === 'Abode';
              return (
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  key={item}
                  href={
                    isAbode
                      ? "https://thehimalayanabode.in"
                      : `/${item === 'Home' ? '' : item.toLowerCase()}`
                  }
                  target={isAbode ? "_blank" : "_self"}
                  rel={isAbode ? "noopener noreferrer" : undefined}
                  className={`hover:opacity-75 transition-opacity duration-150 hover:text-orange-500 transition-transform font-medium ${scrolled
                    ? 'text-black'
                    : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'
                    }`}
                >
                  {item}
                </motion.a>
              );
            })}
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
              {navItems.map((item) => {
                const isAbode = item === 'Abode';
                return (
                  <a
                    key={item}
                    href={
                      isAbode
                        ? "https://thehimalayanabode.in"
                        : `${item === 'Home' ? '/' : item.toLowerCase()}`
                    }
                    target={isAbode ? "_blank" : "_self"}
                    rel={isAbode ? "noopener noreferrer" : undefined}
                    className="text-black hover:opacity-75 transition-opacity duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header >
  );
};

export default Header1;
