
import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" }
  ];


  const companyInfo = {
    logo: "LOGO",
    email: "contact@example.com",
    phone: "+1 (234) 567-8900",
    address: "123 Business Street, Tech City, TC 12345"
  };

  const navItems = ['Home' , 'Itinerary', 'Testimonials' , 'Contact'];

  return (
    <div className="bg-[#FFF5EE] text-black py-8 px-4 w-full h-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-[-1rem] md:mb-[-5rem]">
          {/* Mobile-First Responsive Layout */}
          <div className="flex flex-col items-center md:items-start space-y-6 gap-1 mt-[-4.2rem]">
            {/* Logo */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-bold cursor-pointer text-center md:text-left h-[32%] w-[33%] md:h-[27%] md:w-[28%] 
              flex items-center , justify-center mt-8 block
              "
            href='/'
            >
<img src="/assest/logo.webp" alt="logo" className='' />
            </motion.a>

            {/* Social Icons */}
            <div className="flex space-x-4 justify-center md:justify-start m-1rem">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="hover:text-orange-300 transition-transform"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Navigation for Mobile */}
            <div className='Navigation w-full'>
              <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Navigation</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={`/${item.toLowerCase()}`}
                    whileHover={{ scale: 1.05 }}
                    className="hover:text-orange-500 transition-colors text-sm"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="w-full">
              <h2 className="text-xl font-bold uppercase text-center md:text-right mb-4">Information</h2>
              <div className="space-y-2 text-center md:text-right">
                <motion.p
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 cursor-pointer justify-center md:justify-end"
                >
                  <Mail className="w-5 h-5" /> {companyInfo.email}
                </motion.p>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 cursor-pointer justify-center md:justify-end"
                >
                  <Phone className="w-5 h-5" /> {companyInfo.phone}
                </motion.p>
                <motion.p
                  whileHover={{ x: 5 }}
                  className="cursor-pointer text-center md:text-right"
                >
                  {companyInfo.address}
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;