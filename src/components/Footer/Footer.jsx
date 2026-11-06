/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Mountain,
  Heart,
  Compass,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Explore Itineraries", path: "/itinerary" },
    { name: "Traveler Reviews", path: "/testimonials" },
    { name: "Contact & Consultation", path: "/contact" },
  ];

  const featuredTrails = [
    { name: "Spiti Valley Circuit", path: "/itinerary" },
    { name: "Leh Ladakh Bike Expedition", path: "/itinerary" },
    { name: "Delhi to Shimla Heritage Trail", path: "/itinerary" },
    { name: "Himachal High Passes & Treks", path: "/itinerary" },
    { name: "South India Cultural Journey", path: "/itinerary" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      href: "https://www.instagram.com",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      href: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      href: "https://twitter.com",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-4 h-4 text-emerald-600" />,
      href: "https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India",
    },
  ];

  return (
    <footer className="bg-[#FFF5EE] text-slate-800 border-t border-orange-100/80 pt-16 pb-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Trust & Ethics Badge Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 mb-12 border-b border-orange-200/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-100 text-orange-600">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">ABVIMAS Certified</p>
              <p className="text-[11px] text-slate-500 font-light">Licensed Trek Leaders</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Small Batches</p>
              <p className="text-[11px] text-slate-500 font-light">Max 10-12 Backpackers</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-100 text-purple-600">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Zero-Trace Travel</p>
              <p className="text-[11px] text-slate-500 font-light">Eco-Conscious Trails</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-600">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Fair-Pay Homestays</p>
              <p className="text-[11px] text-slate-500 font-light">Direct Host Support</p>
            </div>
          </div>
        </div>

        {/* 4-Column Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          
          {/* Column 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src="/assest/logo.webp"
                alt="Better Backpacking India"
                className="h-16 sm:h-20 md:h-24 w-auto max-w-[280px] sm:max-w-[320px] object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              Crafted in Himachal Pradesh with a simple belief: travel should feel intimate, transformative, and deeply connected to local mountain roots.
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                Connect With Us
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-xs flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-300 transition-all cursor-pointer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-orange-200/50 pb-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-orange-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Expeditions (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-orange-200/50 pb-2">
              Featured Trails
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {featuredTrails.map((trail) => (
                <li key={trail.name}>
                  <Link
                    to={trail.path}
                    className="text-slate-600 hover:text-orange-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-400 shrink-0" />
                    <span>{trail.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Basecamp & Contact (3.5 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-orange-200/50 pb-2">
              Shimla Basecamp
            </h3>

            <div className="space-y-2.5 text-xs text-slate-600 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>
                  Shankar Niwas, Chalaunthi, PO Sanjauli, Shimla, HP – 171006
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href="tel:+918091790220"
                  className="hover:text-orange-600 transition-colors font-medium text-slate-700"
                >
                  +91 80917 90220
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <a
                  href="mailto:betterbackpackingindia@gmail.com"
                  className="hover:text-orange-600 transition-colors truncate font-medium text-slate-700"
                >
                  betterbackpackingindia@gmail.com
                </a>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Guide on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Accreditation Line */}
        <div className="pt-6 border-t border-orange-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-light text-center sm:text-left">
          <p>© {currentYear} Better Backpacking India. All rights reserved.</p>

          <p className="inline-flex items-center gap-1.5 text-slate-500">
            <span>Handcrafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>in Himachal Pradesh</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
