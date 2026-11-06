import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Itinerary", path: "/itinerary" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#FFF5EE]/95 backdrop-blur-md border-b border-orange-100/60 ${
        scrolled ? "shadow-md py-1.5" : "shadow-xs py-2.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo with Home Link */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none py-1"
            aria-label="Better Backpacking India Home"
          >
            <img
              src="/assest/logo.webp"
              alt="Better Backpacking India"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[240px] sm:max-w-[280px] object-contain transform group-hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-orange-600 bg-orange-100/70 font-bold shadow-2xs"
                      : "text-slate-700 hover:text-orange-600 hover:bg-orange-50/60"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activePillHeader1"
                      className="absolute inset-0 rounded-full border border-orange-500/25 pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-emerald-600 hover:bg-emerald-50 transition-all cursor-pointer"
              title="Chat with Sunil on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <Link
              to="/itinerary"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-orange-500/25 transition-all transform hover:scale-102 cursor-pointer"
            >
              <span>Explore Trips</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 rounded-xl text-slate-800 hover:bg-orange-100/50 transition-all cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-3xl mt-3 p-5 shadow-2xl border border-slate-200/80"
            >
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const isActive =
                    item.path === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(item.path);

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-orange-50 text-orange-600 font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-orange-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: +91 80917 90220</span>
                </a>

                <Link
                  to="/itinerary"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-md"
                >
                  <span>Explore All Expeditions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header1;
