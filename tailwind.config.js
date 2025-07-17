// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  safelist: [
    'md:translate-y-12', 
  ],// Update the content path as per your project
  theme: {
    extend: {
      fontFamily: {
        borel: ['"Borel"', 'cursive' , '"Poppins"'], // Define the font family
      },
      screens: {
        'xs': '360px', // Add custom breakpoint for 360px
        'xm':'390px',
        'xl':'450px',
        "ls":""
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),  // Ensure this is enabled
  ],
};
