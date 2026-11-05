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
          `${process.env.REACT_APP_API_BASE_URL}/api/trips/${id}`
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
  const canonicalUrl = `https://www.betterbackpackingindia.com/travel_itinerary/${id}/${encodeURIComponent(trip.title)}`;
  const tripDescription = trip.subTitle
    ? `${decodedTitle} (${trip.duration || "Curated Tour"}${trip.difficulty ? `, ${trip.difficulty}` : ""}): ${trip.subTitle}. Route: ${trip.startPoint || "India"} to ${trip.endPoint || "India"}. Book with Better Backpacking India.`
    : `Explore the detailed travel itinerary for ${decodedTitle}. ${trip.duration ? `Duration: ${trip.duration}.` : ""} Curated backpacking and adventure tour by Better Backpacking India.`;

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": decodedTitle,
    "description": trip.subTitle || trip.travel_description?.slice(0, 250) || decodedTitle,
    "touristType": ["Backpackers", "Trekkers", "Adventure Seekers"],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Better Backpacking India",
      "url": "https://www.betterbackpackingindia.com",
      "telephone": "+91-8091790220"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.betterbackpackingindia.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Itineraries",
        "item": "https://www.betterbackpackingindia.com/itinerary"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": decodedTitle,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{`${decodedTitle} | ${trip.duration || "Tour"} - Better Backpacking India`}</title>
        <meta name="description" content={tripDescription} />
        <meta
          name="keywords"
          content={`${decodedTitle}, backpacking india, ${trip.category || "adventure travel"}, ${trip.startPoint || ""} to ${trip.endPoint || ""}, india itinerary, guided trek`}
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={`${decodedTitle} - Better Backpacking India`} />
        <meta property="og:description" content={tripDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Better Backpacking India" />
        <meta property="og:image" content="https://www.betterbackpackingindia.com/assest/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${decodedTitle} - Better Backpacking India`} />
        <meta name="twitter:description" content={tripDescription} />
        <meta name="twitter:image" content="https://www.betterbackpackingindia.com/assest/logo.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(touristTripSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
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
