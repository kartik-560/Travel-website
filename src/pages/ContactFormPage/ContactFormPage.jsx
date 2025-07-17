


import React, { useState } from 'react';

const ContactFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log(formData);
  };

  return (
    <div className="max-w-[90rem] w-full bg-beige-50 flex items-center justify-center p-4 md:p-6 mt-14">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5">
        {/* Image Section */}
        <div 
          className="hidden md:block md:col-span-3 lg:col-span-3 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url("assest/Nature/valley.webp")',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8">
            <div className="text-white text-center max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-300">
                Embark on Your Dream Journey
              </h2>
              <p className="text-base md:text-lg text-beige-200 mb-6">
                Discover extraordinary destinations, create unforgettable memories, 
                and let our experts craft the perfect travel experience tailored just for you.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="bg-orange-600 bg-opacity-70 p-4 rounded-lg text-center">
                  <p className="text-xl font-bold">24/7</p>
                  <p className="text-sm">Travel Support</p>
                </div>
                <div className="bg-orange-600 bg-opacity-70 p-4 rounded-lg text-center">
                  <p className="text-xl font-bold">500+</p>
                  <p className="text-sm">Destinations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:col-span-2 lg:col-span-2 p-6 bg-white">
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
            Travel Consultation
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-300 transition"
                required
              />
             
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 border border-orange-200 rounded-md focus:ring-2 focus:ring-orange-300 transition"
                required
              />
            </div>
            
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Travel Vision"
              className="w-full p-3 border border-orange-200 rounded-md h-32 focus:ring-2 focus:ring-orange-300 transition"
            />

            <button 
              type="submit" 
              className="w-full bg-orange-600 text-white p-3 rounded-md hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormPage;