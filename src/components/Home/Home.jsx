import NatureCard from "../NatureCard/NatureCard";
import Services from "../Services/Services";
import ItineraryCard from "../itineraryCard/ItineraryCard";
import Testimonial from "../Testimonials/Testimonials";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero1 from "../Hero/Hero1";
// import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import ChooseUs from "../choose/ChooseUs";
import Header1 from "../header1/Header1";
import TripCards from "../../pages/itinerary_page/itinerary_page";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import ContactForm from "../ContactForm/ContactForm";
import ContactFormPage from "../../pages/ContactFormPage/ContactFormPage";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Helmet } from "react-helmet";
import TravelItineraryDetail from "../../pages/Itinerary_details_page/TravelItineraryDetail";
import AboutUs from "../AboutUs/AboutUs";
import TestimonialsPage from "../../pages/TestimonialsPage/TestimonialsPage";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import VisitorTracker from "../VisitorTracker/VisitorTracker";

function Home() {
  return (
    <Router>
      <VisitorTracker />
      <div className="min-h-screen flex flex-col justify-between">
        <ScrollToTop />
        <div className="flex-grow flex flex-col">
          <Routes>
        {/* Home Route with default Header */}
        <Route
          path="/"
          element={
            <div>
              <Helmet>
                <title>Better Backpacking India | Backpacking, Treks & Adventure Tours</title>
                <meta
                  name="description"
                  content="Discover breathtaking travel destinations, trekking expeditions, and cultural backpacking trips across North and South India. Plan your adventure with Better Backpacking India."
                />
                <meta
                  name="keywords"
                  content="India travel, backpacking india, south india travel, himachal trekking, spiti valley road trip, leh ladakh bike trip, kerala tour package, travel packages india, adventure travel"
                />
                <link rel="canonical" href="https://www.betterbackpackingindia.com/" />
                <meta
                  property="og:title"
                  content="Better Backpacking India | Backpacking, Treks & Adventure Tours"
                />
                <meta
                  property="og:description"
                  content="Start your backpacking journey across India with us. Explore customized itineraries, tips, and travel advice for the ultimate adventure."
                />
                <meta property="og:url" content="https://www.betterbackpackingindia.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.betterbackpackingindia.com/assest/logo.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Better Backpacking India | Backpacking, Treks & Adventure Tours" />
                <meta name="twitter:description" content="Discover curated travel itineraries across India from Himalayas to Kerala." />
                <meta name="twitter:image" content="https://www.betterbackpackingindia.com/assest/logo.webp" />
              </Helmet>
              <Header />
              {/* <Hero /> */}
              <Hero1 />
              <NatureCard />
              <AboutUs />
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
                <title>Traveler Reviews & Testimonials - Better Backpacking India</title>
                <meta
                  name="description"
                  content="Read inspiring stories and authentic reviews from travelers who experienced life-changing backpacking and trekking journeys with Better Backpacking India."
                />
                <meta
                  name="keywords"
                  content="traveler reviews, customer testimonials, India backpacking experiences, tour reviews india, trek reviews"
                />
                <link rel="canonical" href="https://www.betterbackpackingindia.com/testimonials" />
                <meta
                  property="og:title"
                  content="Traveler Reviews & Testimonials - Better Backpacking India"
                />
                <meta
                  property="og:description"
                  content="Our travelers share their unforgettable experiences with Better Backpacking India. See why they recommend us for your next adventure!"
                />
                <meta property="og:url" content="https://www.betterbackpackingindia.com/testimonials" />
                <meta property="og:image" content="https://www.betterbackpackingindia.com/assest/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
              </Helmet>
              <Header1 />
              <TestimonialsPage />
            </>
          }
        />

        {/* Itinerary Route */}
        <Route
          path="/itinerary"
          element={
            <>
              <Helmet>
                <title>Explore Travel Itineraries & Treks - Better Backpacking India</title>
                <meta
                  name="description"
                  content="Browse through expertly crafted itineraries across India: Spiti Valley, Leh-Ladakh, South India temple trails, Kerala backwaters, Rajasthan, and Himalayan treks."
                />
                <meta
                  name="keywords"
                  content="India itineraries, travel itineraries, backpacking tours, south india itineraries, himachal tour package, leh ladakh trip, spiti circuit"
                />
                <link rel="canonical" href="https://www.betterbackpackingindia.com/itinerary" />
                <meta
                  property="og:title"
                  content="Explore Travel Itineraries & Treks - Better Backpacking India"
                />
                <meta
                  property="og:description"
                  content="Find the perfect itinerary for your India travels. From Himalayan treks to beach holidays, we’ve got something for every type of traveler."
                />
                <meta property="og:url" content="https://www.betterbackpackingindia.com/itinerary" />
                <meta property="og:image" content="https://www.betterbackpackingindia.com/assest/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
              </Helmet>
              <Header1 />
              <TripCards mode="all"/>
            </>
          }
        />

        {/* Travel Itinerary Detail Route */}
        <Route
          path="/travel_itinerary/:id/:title"
          element={<TravelItineraryDetail />}
        />

        {/* Contact Us Route */}
        <Route
          path="/contact"
          element={
            <>
              <Helmet>
                <title>Contact Us - Plan Your India Backpacking Trip | Better Backpacking India</title>
                <meta
                  name="description"
                  content="Have questions or need a customized travel plan? Get in touch with Better Backpacking India to design your dream journey across North and South India."
                />
                <meta
                  name="keywords"
                  content="contact travel agency, India travel assistance, customized tour plan india, backpacking information, trip inquiry"
                />
                <link rel="canonical" href="https://www.betterbackpackingindia.com/contact" />
                <meta
                  property="og:title"
                  content="Contact Us - Plan Your India Backpacking Trip | Better Backpacking India"
                />
                <meta
                  property="og:description"
                  content="Get in touch with our team to customize your ideal backpacking itinerary across India. We’re here to help with your travel plans!"
                />
                <meta property="og:url" content="https://www.betterbackpackingindia.com/contact" />
                <meta property="og:image" content="https://www.betterbackpackingindia.com/assest/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
              </Helmet>
              <Header1 />
              <ContactFormPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Helmet>
                <title>About Us - Our Story & Vision | Better Backpacking India</title>
                <meta
                  name="description"
                  content="Learn about Better Backpacking India, our mission to redefine exploration with authentic, responsible, and immersive backpacking and trekking journeys across India."
                />
                <meta
                  name="keywords"
                  content="about better backpacking india, travel company shimla, backpacking community india, sustainable travel india"
                />
                <link rel="canonical" href="https://www.betterbackpackingindia.com/about" />
                <meta
                  property="og:title"
                  content="About Us - Our Story & Vision | Better Backpacking India"
                />
                <meta
                  property="og:description"
                  content="Learn about Better Backpacking India, our mission to redefine exploration with authentic, responsible travel experiences."
                />
                <meta property="og:url" content="https://www.betterbackpackingindia.com/about" />
                <meta property="og:image" content="https://www.betterbackpackingindia.com/assest/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
              </Helmet>
              <Header1 />
              <AboutUsPage />
            </>
          }
        />
      </Routes>
        </div>
        <Footer />
      </div>
      <WhatsAppButton />
    </Router>
  );
}

export default Home;
