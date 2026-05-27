import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header1 from "../../components/header1/Header1";
import GallerySections from "../../components/Gallery/GallerySections";
import Destinations from "../../components/Destinations/Destinations";
import axios from "axios";

function TravelItineraryDetail() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      console.log("Fetching trips...");
      try {
        setLoading(true);
        const res = await axios.get(
          `https://travel-backend-pearl.vercel.app/api/trips/${id}`
        );
        setTrip(res.data);
      } catch (err) {
        console.error("Failed to fetch trip:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrip();
  }, [id]);

  if (loading) return <p className="p-10 text-center">Loading itinerary...</p>;
  if (!trip)
    return <p className="p-10 text-center text-red-500">Trip not found.</p>;

  const decodedTitle = decodeURIComponent(trip.title);

  return (
    <>
      <Helmet>
        <title>{decodedTitle} - Itinerary Details</title>
        <meta
          name="description"
          content={`Explore the exciting and scenic itinerary for ${decodedTitle}, a 3-day journey covering top attractions, hidden gems, and unique experiences like hiking, camping, and sightseeing across breathtaking destinations.`}
        />
        <meta
          property="og:title"
          content={`Itinerary for ${decodedTitle} - Explore the Best Destinations`}
        />
        <meta
          property="og:description"
          content={`Join us for an unforgettable trip to ${decodedTitle}, featuring scenic hikes, peaceful camping under the stars, and immersive nature experiences.`}
        />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/itinerary/${id}/${trip.title}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header1 />
      <GallerySections
        images={trip.images}
        title={trip.title}
        subTitle={trip.subTitle}
      />
      <Destinations trip={trip} />
    </>
  );
}

export default TravelItineraryDetail;
