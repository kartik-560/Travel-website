/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Mountain,
  Calendar,
  MapPin,
  Gauge,
  Clock,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Share2,
  Check,
  MessageCircle,
  Phone,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  X,
  Sparkles,
  Camera,
  ChevronDown,
  Info,
  Users,
  Award,
} from "lucide-react";
import Header1 from "../../components/header1/Header1";
import axios from "axios";

function TravelItineraryDetail() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const fetchTrip = async () => {
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

  const decodedTitle = useMemo(() => {
    return trip?.title ? decodeURIComponent(trip.title) : "";
  }, [trip]);

  const canonicalUrl = useMemo(() => {
    return trip
      ? `https://www.betterbackpackingindia.com/travel_itinerary/${id}/${encodeURIComponent(
          trip.title
        )}`
      : "";
  }, [id, trip]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: decodedTitle,
          text: trip?.subTitle || `Check out ${decodedTitle} on Better Backpacking India!`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const whatsappMessage = useMemo(() => {
    const text = `Hi Better Backpacking India! I am interested in the "${decodedTitle}" itinerary (${trip?.duration || "Tour"}). Could you please share upcoming batch dates, inclusions, and booking details?`;
    return `https://wa.me/918091790220?text=${encodeURIComponent(text)}`;
  }, [decodedTitle, trip]);

  // Generate day-by-day journey milestones dynamically if trip.days doesn't exist
  const itineraryTimeline = useMemo(() => {
    if (!trip) return [];
    if (Array.isArray(trip.days) && trip.days.length > 0) {
      return trip.days.map((d, idx) => ({
        day: d.day || idx + 1,
        title: d.title || `Day ${idx + 1} Journey`,
        description: d.description || "",
        distance: d.distance || "",
        duration: d.duration || "",
        highlights: d.highlights || [],
      }));
    }

    // Intelligently build milestones from highlights and description
    const highlights = Array.isArray(trip.highlights) ? trip.highlights : [];
    if (highlights.length > 0) {
      return highlights.map((highlight, idx) => ({
        day: idx + 1,
        title: typeof highlight === "string" ? highlight : highlight.title || `Milestone ${idx + 1}`,
        description:
          typeof highlight === "string" && highlight.length > 40
            ? highlight
            : `Experience ${typeof highlight === "string" ? highlight : "curated activities"} as part of our expert-guided route.`,
        duration: "Full Day Adventure",
        highlights: [typeof highlight === "string" ? highlight : highlight.title],
      }));
    }

    return [
      {
        day: 1,
        title: `Arrival & Briefing at ${trip.startPoint || "Basecamp"}`,
        description: `Meet your fellow backpackers and trip captain. Acclimatization and comprehensive trail briefing.`,
        duration: "Arrival Day",
        highlights: ["Meet & Greet", "Trail Orientation"],
      },
      {
        day: 2,
        title: `Scenic Trails & Exploration`,
        description: trip.travel_description || "Explore breathtaking landscapes and hidden local villages.",
        duration: "Full Day",
        highlights: ["Scenic Trails", "Local Encounters"],
      },
    ];
  }, [trip]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFF5EE]/30">
        <Header1 />
        <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20">
          <div className="w-full max-w-md mx-auto text-center">
            {/* Ambient Travel Pulse Animation */}
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="w-24 h-24 rounded-full bg-orange-500/15 animate-ping absolute inset-0" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/25 relative z-10">
                <Compass
                  className="w-12 h-12 animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
              Mapping Your Journey...
            </h2>
            <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
              Curating scenic trails, day-by-day guides, and unforgettable highlights for your expedition.
            </p>

            {/* Shimmer skeleton indicators */}
            <div className="mt-8 space-y-2.5 max-w-xs mx-auto animate-pulse">
              <div className="h-3.5 bg-orange-200/50 rounded-full w-3/4 mx-auto" />
              <div className="h-2.5 bg-orange-100/60 rounded-full w-1/2 mx-auto" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Not Found State
  if (!trip) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFF5EE]/30">
        <Header1 />
        <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200 shadow-sm">
            <Compass className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Itinerary Not Found
          </h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
            We couldn't locate this expedition trail. It might have been updated or moved.
          </p>
          <Link
            to="/itinerary"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-md shadow-orange-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore All Itineraries
          </Link>
        </main>
      </div>
    );
  }

  const images = Array.isArray(trip.images) && trip.images.length > 0
    ? trip.images
    : ["/assest/HeroImages/gompa-transformed.jpeg"];

  const tripDescription = trip.subTitle
    ? `${decodedTitle} (${trip.duration || "Curated Tour"}${trip.difficulty ? `, ${trip.difficulty}` : ""}): ${trip.subTitle}. Route: ${trip.startPoint || "India"} to ${trip.endPoint || "India"}. Book with Better Backpacking India.`
    : `Explore the detailed travel itinerary for ${decodedTitle}. ${trip.duration ? `Duration: ${trip.duration}.` : ""} Curated backpacking and adventure tour by Better Backpacking India.`;

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: decodedTitle,
    description: trip.subTitle || trip.travel_description?.slice(0, 250) || decodedTitle,
    touristType: ["Backpackers", "Trekkers", "Adventure Seekers"],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Better Backpacking India",
      url: "https://www.betterbackpackingindia.com",
      telephone: "+91-8091790220",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.betterbackpackingindia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Itineraries",
        item: "https://www.betterbackpackingindia.com/itinerary",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: decodedTitle,
        item: canonicalUrl,
      },
    ],
  };

  const faqs = [
    {
      q: "What is the group size and travel style?",
      a: "Our trips are small-group expeditions (typically 8–14 travelers) designed for backpackers, solo travelers, and friends who want an authentic, non-commercial cultural and adventure experience.",
    },
    {
      q: "What type of accommodation and meals are included?",
      a: "We stay in handpicked local pahadi homestays, boutique mountain lodges, and scenic riverside campsites with authentic regional meals cooked fresh daily.",
    },
    {
      q: "Is this trip suitable for solo travelers?",
      a: "Over 60% of our travelers join solo! Our journeys are safe, community-focused, and led by experienced local trip captains who ensure everyone feels welcome and supported.",
    },
    {
      q: "How does booking and payment work?",
      a: "You can reserve your slot directly by clicking 'Book via WhatsApp' or giving us a quick call. A partial advance confirms your seat, and the balance is payable before trip departure.",
    },
    {
      q: "What should I pack for this expedition?",
      a: "We provide a comprehensive, season-specific packing checklist upon booking, including recommended clothing layers, footwear, thermal wear, and essential mountain gear.",
    },
  ];

  const highlightsList = Array.isArray(trip.highlights) && trip.highlights.length > 0
    ? trip.highlights
    : [
        "Scenic mountain trails & high-altitude vistas",
        "Authentic pahadi homestays & local cuisine",
        "Expert-led cultural storytelling & community interaction",
        "Stargazing & serene camping under the Himalayan skies",
      ];

  return (
    <div className="min-h-screen bg-[#FFF5EE]/20 text-slate-800">
      <Helmet>
        <title>{`${decodedTitle} | ${trip.duration || "Tour"} - Better Backpacking India`}</title>
        <meta name="description" content={tripDescription} />
        <meta
          name="keywords"
          content={`${decodedTitle}, backpacking india, ${trip.category || "adventure travel"}, ${trip.startPoint || ""} to ${trip.endPoint || ""}, india itinerary, guided trek`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${decodedTitle} - Better Backpacking India`} />
        <meta property="og:description" content={tripDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Better Backpacking India" />
        <meta property="og:image" content={images[0]?.startsWith("http") ? images[0] : "https://www.betterbackpackingindia.com/assest/logo.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${decodedTitle} - Better Backpacking India`} />
        <meta name="twitter:description" content={tripDescription} />
        <meta name="twitter:image" content={images[0]?.startsWith("http") ? images[0] : "https://www.betterbackpackingindia.com/assest/logo.png"} />
        <script type="application/ld+json">{JSON.stringify(touristTripSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header1 />

      <main className="pt-24 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb & Share Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs">
            <nav className="flex items-center gap-1.5 text-slate-500">
              <Link to="/" className="hover:text-orange-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/itinerary" className="hover:text-orange-600 transition-colors">
                Itineraries
              </Link>
              <span>/</span>
              <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
                {decodedTitle}
              </span>
            </nav>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-200 transition-all shadow-sm"
              aria-label="Share Itinerary"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Journey</span>
                </>
              )}
            </button>
          </div>

          {/* Title & Badge Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 space-y-3"
          >
            <div className="flex flex-wrap items-center gap-2">
              {trip.category && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200/80">
                  <Sparkles className="w-3 h-3 text-orange-600" />
                  {trip.category}
                </span>
              )}
              {trip.difficulty && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white shadow-sm">
                  <Gauge className="w-3 h-3 text-amber-400" />
                  {trip.difficulty}
                </span>
              )}
              {trip.duration && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <Clock className="w-3 h-3 text-emerald-600" />
                  {trip.duration}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {decodedTitle}
            </h1>

            {trip.subTitle && (
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-4xl">
                {trip.subTitle}
              </p>
            )}
          </motion.div>

          {/* Cinematic Photo Mosaic Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 bg-slate-950 p-2 sm:p-3 md:pb-3 pb-4 sm:pb-5 md:pb-6"
            style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)", isolation: "isolate" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5 h-[320px] sm:h-[420px] md:h-[580px]">
              {/* Feature Main Image */}
              <div
                className="md:col-span-2 h-full relative group overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer"
                onClick={() => setModalImageIndex(0)}
              >
                <img
                  src={images[0]}
                  alt={`${decodedTitle} - Featured`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    <Compass className="w-3.5 h-3.5 text-orange-400" />
                    Featured Trail
                  </span>
                </div>
              </div>

              {/* Secondary Images */}
              <div className="hidden md:grid grid-rows-2 gap-2.5 sm:gap-3.5 h-full">
                {images.slice(1, 3).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer"
                    onClick={() => setModalImageIndex(idx + 1)}
                  >
                    <img
                      src={img}
                      alt={`${decodedTitle} - Vista ${idx + 2}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}

                {/* If fewer than 3 images, fill cleanly */}
                {images.length === 1 && (
                  <div className="row-span-2 relative group overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center p-6 text-center text-white">
                    <div>
                      <Mountain className="w-10 h-10 text-orange-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-300">Experience raw Himalayan beauty</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* "View All Photos" Button */}
            <button
              onClick={() => setModalImageIndex(0)}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md hover:bg-white text-slate-900 text-xs font-bold transition-all shadow-lg hover:scale-105"
            >
              <Camera className="w-4 h-4 text-orange-600" />
              <span>View Photos ({images.length})</span>
            </button>
          </motion.div>

          {/* Expedition Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:border-orange-200 transition-colors">
              <Calendar className="w-5 h-5 text-orange-500 mb-1.5" />
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Duration
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5">
                {trip.duration || "Multi-Day"}
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:border-orange-200 transition-colors">
              <Mountain className="w-5 h-5 text-amber-500 mb-1.5" />
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Max Elevation
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 truncate max-w-full">
                {trip.maxElevation || "Scenic Pass"}
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:border-orange-200 transition-colors">
              <Gauge className="w-5 h-5 text-purple-500 mb-1.5" />
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Trail Grade
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5">
                {trip.difficulty || "Moderate"}
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:border-orange-200 transition-colors">
              <Compass className="w-5 h-5 text-blue-500 mb-1.5" />
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Distance
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5">
                {trip.distance || "Curated Route"}
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:border-orange-200 transition-colors">
              <MapPin className="w-5 h-5 text-emerald-500 mb-1.5" />
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Start Point
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 truncate max-w-full">
                {trip.startPoint || "India"}
              </span>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:border-orange-200 transition-colors">
              <MapPin className="w-5 h-5 text-rose-500 mb-1.5" />
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                End Point
              </span>
              <span className="text-sm font-bold text-slate-900 mt-0.5 truncate max-w-full">
                {trip.endPoint || "India"}
              </span>
            </div>
          </div>

          {/* Main 2-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Interactive Tabs & Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Tab Navigation Bar */}
              <div className="flex items-center gap-2 border-b border-slate-200/80 pb-2 overflow-x-auto no-scrollbar">
                {[
                  { id: "overview", label: "Overview", icon: Info },
                  { id: "highlights", label: "Highlights", icon: Sparkles },
                  { id: "timeline", label: "Day-by-Day Route", icon: Calendar },
                  { id: "essentials", label: "Inclusions & FAQ", icon: ShieldCheck },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-5">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Compass className="w-5 h-5 text-orange-500" />
                      About This Expedition
                    </h3>
                    <div className="text-slate-700 text-base leading-relaxed space-y-4">
                      {trip.travel_description ? (
                        <p className="whitespace-pre-line">{trip.travel_description}</p>
                      ) : (
                        <p>
                          Join Better Backpacking India for an extraordinary adventure across {decodedTitle}.
                          Immerse yourself in authentic cultures, raw mountain landscapes, and unforgettable trails.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Highlights Summary Box */}
                  <div className="bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent rounded-3xl p-6 sm:p-8 border border-orange-200/60">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-orange-600" />
                      Expedition Highlights at a Glance
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {highlightsList.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 font-medium">
                            {typeof highlight === "string" ? highlight : highlight.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: Highlights */}
              {activeTab === "highlights" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="text-left mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Curated Trail Highlights</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Every stop on this itinerary has been hand-selected for authentic adventure and cultural immersion.
                    </p>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    {highlightsList.map((h, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group flex items-start gap-3.5"
                      >
                        <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          0{index + 1}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                            {typeof h === "string" ? h : h.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">
                            Experience the best vistas, local encounters, and backcountry trails with our captain.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Day-by-Day Timeline */}
              {activeTab === "timeline" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-left mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Day-by-Day Journey</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Your complete expedition roadmap from start to finish.
                    </p>
                  </div>

                  <div className="relative pl-6 sm:pl-8 border-l-2 border-orange-200/80 space-y-8 my-4">
                    {itineraryTimeline.map((item) => (
                      <div key={item.day} className="relative group">
                        {/* Timeline Node Icon */}
                        <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-orange-500/30 group-hover:scale-110 transition-transform">
                          {item.day}
                        </div>

                        {/* Milestone Card */}
                        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm group-hover:border-orange-200 transition-all space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                            <h4 className="text-base sm:text-lg font-bold text-slate-900">
                              {item.title}
                            </h4>
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700">
                              <Clock className="w-3 h-3 text-orange-500" />
                              {item.duration || "Full Day"}
                            </span>
                          </div>

                          <p className="text-sm text-slate-600 leading-relaxed">
                            {item.description}
                          </p>

                          {item.highlights?.length > 0 && (
                            <div className="pt-2 flex flex-wrap gap-1.5">
                              {item.highlights.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 border border-slate-200/60"
                                >
                                  📍 {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tab 4: Inclusions & FAQ */}
              {activeTab === "essentials" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Inclusions / Exclusions Split */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-100 space-y-4">
                      <h4 className="text-base font-bold text-emerald-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        What's Included
                      </h4>
                      <ul className="text-xs sm:text-sm text-emerald-950/80 space-y-2.5">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Dedicated, experienced mountain trip captain & local certified guides</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>All accommodations (handpicked homestays, guesthouses & scenic camps)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Freshly prepared traditional pahadi breakfasts and warm dinners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>First aid kits, oxygen cylinders & 24/7 emergency coordination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Inner Line Passes, forest permits & camping fees</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-rose-50/60 rounded-3xl p-6 border border-rose-100 space-y-4">
                      <h4 className="text-base font-bold text-rose-900 flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-rose-500" />
                        What's Not Included
                      </h4>
                      <ul className="text-xs sm:text-sm text-rose-950/80 space-y-2.5">
                        <li className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold mr-1">✕</span>
                          <span>Personal travel expenses, shopping & extra snacks/beverages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold mr-1">✕</span>
                          <span>Flights or transit tickets to the starting basecamp</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold mr-1">✕</span>
                          <span>Personal trekking gear (rentals available upon request)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-400 font-bold mr-1">✕</span>
                          <span>Expenses due to unforeseen weather or road closures</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Interactive Accordion FAQs */}
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Info className="w-5 h-5 text-orange-500" />
                      Frequently Asked Questions
                    </h4>

                    <div className="divide-y divide-slate-100">
                      {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                          <div key={index} className="py-3.5">
                            <button
                              onClick={() => setOpenFaq(isOpen ? null : index)}
                              className="w-full flex items-center justify-between text-left text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors"
                            >
                              <span>{faq.q}</span>
                              <ChevronDown
                                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                                  isOpen ? "rotate-180 text-orange-600" : ""
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed pr-6">
                                {faq.a}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column: Sticky Booking & Inquiry Card (4 cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xl shadow-slate-900/5 space-y-5">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600">
                      <Award className="w-3.5 h-3.5" />
                      <span>Certified Guided Expedition</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900">
                      Ready for this Journey?
                    </h3>
                    <p className="text-xs text-slate-500">
                      Chat directly with our team for batch dates, customized itineraries, and group pricing.
                    </p>
                  </div>

                  {/* Fast Facts Badge Box */}
                  <div className="bg-slate-50 rounded-2xl p-3.5 space-y-2 text-xs border border-slate-100">
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Duration:</span>
                      <strong className="text-slate-900">{trip.duration || "Multi-Day"}</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Group Type:</span>
                      <strong className="text-slate-900">Backpackers & Small Groups</strong>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Basecamp:</span>
                      <strong className="text-slate-900">{trip.startPoint || "India"}</strong>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2.5 pt-1">
                    <a
                      href={whatsappMessage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book via WhatsApp</span>
                    </a>

                    <a
                      href="tel:+918091790220"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-md hover:-translate-y-0.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-orange-400" />
                      <span>Call +91-8091790220</span>
                    </a>
                  </div>

                  {/* Trust Guarantees */}
                  <div className="border-t border-slate-100 pt-4 space-y-2 text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>Verified mountain stays & certified guides</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>Small groups & solo-traveler friendly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Zero hidden charges & flexible rescheduling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Bar for Mobile Devices */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 px-4 z-40 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-slate-900 truncate max-w-[180px]">
            {decodedTitle}
          </p>
          <p className="text-[10px] text-slate-500">
            {trip.duration || "Curated Tour"} • {trip.difficulty || "Moderate"}
          </p>
        </div>

        <a
          href={whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/30"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Chat & Book</span>
        </a>
      </div>

      {/* Cinematic Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {modalImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setModalImageIndex(null)}
          >
            <div
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalImageIndex(null)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={images[modalImageIndex]}
                alt={`${decodedTitle} - Vista ${modalImageIndex + 1}`}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />

              <div className="flex items-center justify-between w-full max-w-sm mt-4 text-white text-xs">
                <button
                  onClick={() =>
                    setModalImageIndex(
                      (modalImageIndex - 1 + images.length) % images.length
                    )
                  }
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span>
                  {modalImageIndex + 1} / {images.length}
                </span>
                <button
                  onClick={() =>
                    setModalImageIndex((modalImageIndex + 1) % images.length)
                  }
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default TravelItineraryDetail;
