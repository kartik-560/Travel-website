import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header1 from '../../components/header1/Header1';
import GallerySections from '../../components/Gallery/GallerySections';
import Destinations from '../../components/Destinations/Destinations';

function TravelItineraryDetail() {
  const { title } = useParams(); // Extract parameters from the route

  // Decode the title for display
  const decodedTitle = decodeURIComponent(title);

  return (
    <>
   <Helmet>
  <title>{decodedTitle} - Itinerary Details</title>
  <meta 
    name="description" 
    content={`Explore the exciting and scenic itinerary for ${decodedTitle}, a 3-day journey covering top attractions, hidden gems, and unique experiences like hiking, camping, and sightseeing across breathtaking destinations such as Shimla, Solan, Jiunthi, and more.`}
  />
  <meta name="keywords" content={`Himachal Pradesh, Shimla, Jiunthi Village, Delhi to Shimla trip, weekend getaway, Himalayan treks, Shimla itinerary, camping trips, hiking, nature tours`} />
  <meta name="author" content="Better Backpacking India" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content={`Itinerary for ${decodedTitle} - Explore the Best Destinations`} />
  <meta property="og:description" content={`Join us for an unforgettable trip to ${decodedTitle}, featuring scenic hikes, peaceful camping under the stars, and immersive nature experiences. Perfect for nature lovers and adventure seekers.`} />
  <meta property="og:url" content={`https://yourwebsite.com/itinerary/${decodedTitle}`} />
  <meta property="og:type" content="website" />
</Helmet>

      <Header1 />
      <GallerySections />
      <Destinations />
    </>
  );
}

export default TravelItineraryDetail;
