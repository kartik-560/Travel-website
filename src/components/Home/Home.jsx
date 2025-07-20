
import NatureCard from '../NatureCard/NatureCard';
import Services from '../Services/Services';
import ItineraryCard from '../itineraryCard/ItineraryCard';
import Testimonial from '../Testimonials/Testimonials';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from '../Hero/Hero';
import Banner from '../Banner/Banner';
import ChooseUs from '../choose/ChooseUs';
import Header1 from '../header1/Header1';
import TripCards from '../../pages/itinerary_page/itinerary_page';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
import ContactForm from '../ContactForm/ContactForm';  
import ContactFormPage from '../../pages/ContactFormPage/ContactFormPage';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import {Helmet} from "react-helmet";
import TravelItineraryDetail from '../../pages/Itinerary_details_page/TravelItineraryDetail';
import AboutUs from '../AboutUs/AboutUs';
// function Home() {
//   return (
//     <Router>
//       <ScrollToTop/>
//       <Routes>
//         {/* Home Route with default Header */}
//         <Route 
//           path="/" 
//           element={
//             <div>
//               <Header/>
//               <Hero />
//               <NatureCard   />
//               <AboutUsPage/>
//               <Services />
//               <ItineraryCard />
//               <Banner/>
//               <ChooseUs/>
//               <Testimonial />
//               <ContactForm/>
//             </div>
//           }
//         />

//         {/* Other routes with Header1 */}
       

//        <Route 
//           path="/testimonials" 
//           element={
//             <>
//               <Header1 />
//             <Testimonial/>
//             </>
//           } 
//         />

//           <Route 
//           path="/itinerary" 
//           element={
//             <>
//               <Header1 />
//             <TripCards/>
//             </>
//           }    
//         />

        
//          <Route 
//           path="/itinerary/:id" 
//           element={
//             <>
//               <Header1 />
//          <GallerySection/>
//          <Destinations/>            </>
//           }    
//         />

//          <Route 
//           path="/contact" 
//           element={
//             <>
//               <Header1 />
// <ContactFormPage/>
//           </>
//           }    
//         />
        
//       </Routes>
// <Footer/>
//     </Router>
//   );
// };


// export default Home;


function Home() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home Route with default Header */}
        <Route 
          path="/" 
          element={
            <div>
              <Helmet>
                <title>Home - Better Backpacking India</title>
                <meta name="description" content="Discover breathtaking travel destinations, adventure itineraries, and unique experiences across India with Better Backpacking India. Start your journey with us!" />
                <meta name="keywords" content="India travel, backpacking, India tours, adventure, itineraries, travel packages" />
                <meta property="og:title" content="Home - Better Backpacking India" />
                <meta property="og:description" content="Start your backpacking journey across India with us. Explore customized itineraries, tips, and travel advice for the ultimate adventure." />
                <meta property="og:image" content="URL-to-image" />
              </Helmet>
              <Header />
              <Hero />
              <NatureCard />
              <AboutUsPage />
              <Services />
              <ItineraryCard />
              <Banner />
              <ChooseUs />
              <Testimonial />
              <ContactForm />
            </div>
          }
        />

        {/* Testimonials Route */}
        <Route 
          path="/testimonials" 
          element={
            <>
              <Helmet>
                <title>Testimonials - Better Backpacking India</title>
                <meta name="description" content="Read inspiring stories from our satisfied customers who experienced life-changing backpacking journeys with Better Backpacking India." />
                <meta name="keywords" content="customer testimonials, India travel experiences, backpacking testimonials" />
                <meta property="og:title" content="Testimonials - Better Backpacking India" />
                <meta property="og:description" content="Our travelers share their unforgettable experiences with Better Backpacking India. See why they recommend us for your next adventure!" />
              </Helmet>
              <Header1 />
              <Testimonial />
            </>
          } 
        />

        {/* Itinerary Route */}
        <Route 
          path="/itinerary" 
          element={
            <>
              <Helmet>
                <title>Our Itineraries - Better Backpacking India</title>
                <meta name="description" content="Browse through a wide range of expertly crafted itineraries to explore the best travel destinations in India. Find your perfect adventure today." />
                <meta name="keywords" content="India itineraries, travel itineraries, backpacking tours, India adventure travel" />
                <meta property="og:title" content="Our Itineraries - Better Backpacking India" />
                <meta property="og:description" content="Find the perfect itinerary for your India travels. From Himalayan treks to beach holidays, we’ve got something for every type of traveler." />
              </Helmet>
              <Header1 />
              <TripCards />
            </>
          }    
        />

        {/* Travel Itinerary Detail Route */}
        <Route 
          path="/travel_itinerary/:id/:title" 
          element={
            <TravelItineraryDetail />
          }    
        />

        {/* Contact Us Route */}
        <Route 
          path="/contact" 
          element={
            <>
              <Helmet>
                <title>Contact Us - Better Backpacking India</title>
                <meta name="description" content="Have questions or need more information? Get in touch with Better Backpacking India to plan your dream travel experience across India." />
                <meta name="keywords" content="contact travel agency, India travel assistance, travel inquiries, backpacking information" />
                <meta property="og:title" content="Contact Us - Better Backpacking India" />
                <meta property="og:description" content="Get in touch with our team to customize your ideal backpacking itinerary across India. We’re here to help with your travel plans!" />
              </Helmet>
              <Header1 />
              <ContactFormPage />
            </>
          }    
        />
        <Route 
          path="/about"
          element={
            <><Header1 /><AboutUs /></>
          }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default Home;
