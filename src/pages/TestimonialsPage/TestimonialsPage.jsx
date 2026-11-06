/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect, useMemo } from "react";
import axios from "axios";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  MapPin,
  Sparkles,
  Maximize2,
  Compass,
  ArrowRight,
  MessageCircle,
  Camera,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import RenderModal from "../../components/Testimonials/RenderModel";

const TestimonialsPage = () => {
  const [selectedModal, setSelectedModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dynamically fetch all published testimonials from backend database
  useEffect(() => {
    let isMounted = true;
    const fetchAllTestimonials = async () => {
      try {
        const baseUrl =
          process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
        const res = await axios.get(`${baseUrl}/api/testimonials`, {
          timeout: 7000,
        });

        const items = res?.data?.testimonials;
        if (isMounted && Array.isArray(items)) {
          const normalized = items.map((t, idx) => {
            const imgs =
              Array.isArray(t.images) && t.images.length > 0
                ? t.images
                : Array.isArray(t.image) && t.image.length > 0
                ? t.image
                : ["/assest/Enchanting_delhi_shimla/Himalaya.webp"];

            return {
              id: t.id || idx + 1,
              name: t.name,
              role: t.role || "Traveler",
              category: t.category || "Adventure & Trekking",
              image: imgs,
              text: t.text,
              location: t.location,
              rating: t.rating || 5,
              tag: t.tag || (t.category ? `${t.category} Trail` : "Expedition"),
            };
          });
          setTestimonials(normalized);
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAllTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter categories extracted dynamically from testimonials
  const categories = useMemo(() => {
    const cats = new Set(testimonials.map((t) => t.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [testimonials]);

  const filteredTestimonials = useMemo(() => {
    if (activeFilter === "All") return testimonials;
    return testimonials.filter((t) => t.category === activeFilter);
  }, [activeFilter, testimonials]);

  const [imageIndices, setImageIndices] = useState(() =>
    Array(testimonials.length).fill(0)
  );

  useEffect(() => {
    setImageIndices((prev) =>
      Array(testimonials.length)
        .fill(0)
        .map((_, i) => (Number.isFinite(prev[i]) ? prev[i] : 0))
    );
  }, [testimonials.length]);

  const handleImageNavigation = useCallback(
    (originalIndex, direction, e) => {
      if (e) e.stopPropagation();
      setImageIndices((prev) => {
        const next = [...prev];
        const imageCount = testimonials[originalIndex]?.image?.length ?? 0;
        if (imageCount === 0) return next;
        const current = Number.isFinite(next[originalIndex]) ? next[originalIndex] : 0;
        next[originalIndex] = (current + direction + imageCount) % imageCount;
        return next;
      });
    },
    [testimonials]
  );

  // 5 Team Members matching the screenshot exactly
  const teamData = [
    {
      name: "Sunil Kumar",
      title: "Founder & Lead Guide",
      badge: "Founder",
      image: "/assest/Team/sunilkumar.webp",
      bio: "From the winding lanes of Shimla to the remotest high passes of Himachal, Sunil lived travel long before making it his profession. Holding a Master's in Tourism, a diploma in German, and Basic Mountaineering certification from HMI Darjeeling, he brings deep cultural warmth into every journey.",
      highlights: [
        "HMI Darjeeling Certified",
        "German Language Diploma",
        "20+ Indian States Charted",
      ],
    },
    {
      name: "Sunil Sharma",
      title: "Co-Founder & Route Scout",
      badge: "Co-Founder",
      image: "/assest/Team/sunil.webp",
      bio: "With a mission to revolutionize responsible tourism, Sunil co-founded Better Backpacking India to make off-grid travel safe, transparent, and community-centric. He scouts unmapped village routes and coordinates fair-pay local homestays.",
      highlights: [
        "Route Pioneer",
        "Community Lead",
        "Homestay Network Architect",
      ],
    },
    {
      name: "Aashima Kanwar",
      title: "Operations & Logistics Executive",
      badge: "Trip Architect",
      image: "/assest/Team/aashima.webp",
      bio: "Hailing from Himachal Pradesh at the foot of sacred Churdhar Peak, Aashima ensures permits, high-altitude transport, homestay bookings, and on-ground logistics run with clockwork precision.",
      highlights: [
        "Permits & Logistics",
        "Himachal Native",
        "Safety Dispatch Coordinator",
      ],
    },
    {
      name: "Neetima",
      title: "Certified Mountaineer & Trek Guide",
      badge: "Certified Skier",
      image: "/assest/Team/neetima.webp",
      bio: "A certified mountaineer, skier (ABVIMAS), and licensed tourist guide (HP Tourism), Neetima leads high-altitude mountain expeditions. Inspired by Himalayan summits, she empowers fellow travelers and women backpackers across wild terrains.",
      highlights: [
        "ABVIMAS Skier",
        "Licensed HP Guide",
        "Women Trail Leader",
      ],
    },
    {
      name: "Sanjay Chauhan",
      title: "Senior Mountain Driver",
      badge: "25+ Yrs Exp.",
      image: "/assest/Team/sanjay.webp",
      bio: "A professional terrain specialist with 25 years navigating extreme mountain roads across Kinnaur, Spiti, Lahaul, Leh, and Uttarakhand. Non-smoker and teetotaler, delivering absolute safety on high-altitude passes.",
      highlights: [
        "25+ Yrs Mountain Exp.",
        "Kinnaur & Spiti Specialist",
        "100% Teetotaler",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans selection:bg-orange-500 selection:text-white">
      {/* ============================================================== */}
      {/* 1. HERO SECTION: Generous top padding for clean header clearance */}
      {/* ============================================================== */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Soft mountain ambient blur behind header */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Authentic Mountain Experiences</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              What Our Travelers Say
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto"
            >
              Unfiltered stories and cherished memories shared by adventurers who explored high Himalayan passes, untamed valleys, and sacred roads alongside us.
            </motion.p>
          </div>

          {/* Interactive Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-8 sm:pt-10"
          >
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 sm:px-5 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/25 scale-105"
                      : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80 shadow-xs"
                  }`}
                >
                  {category === "All" ? "All Stories" : category}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. TESTIMONIALS CARDS: Interactive, Responsive 2x2 Grid         */}
      {/* ============================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        {loading ? (
          <div className="py-20 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-orange-500 mx-auto mb-3" />
            <p className="text-sm text-slate-500 font-medium">Loading traveler stories...</p>
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="py-16 text-center text-slate-500 text-sm">
            No testimonials found in this category.
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((testimonial) => {
              const originalIndex = testimonials.findIndex(
                (item) =>
                  (item.id && item.id === testimonial.id) ||
                  item.name === testimonial.name
              );
              const resolvedIndex = originalIndex >= 0 ? originalIndex : 0;
              const activeImgIndex = imageIndices[resolvedIndex] || 0;
              const totalImages = testimonial.image.length;
              const hasMultipleImages = totalImages > 1;

              return (
                <motion.div
                  layout
                  key={testimonial.id || testimonial.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    setSelectedModal(resolvedIndex + 1);
                    setCurrentImageIndex(activeImgIndex);
                  }}
                  className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-slate-950 border border-slate-200/60 cursor-pointer flex flex-col justify-between min-h-[440px] sm:min-h-[470px]"
                >
                  {/* Background Photo Slider with smooth Crossfade */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    {testimonial.image.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={`${testimonial.name} in ${testimonial.location}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                          activeImgIndex === imgIdx
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-100"
                        }`}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}

                    {/* Rich Dark Gradient Scrim to guarantee high contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/35 group-hover:via-slate-950/70 transition-colors" />
                  </div>

                  {/* Card Header: Rating, Tag, and In-card Image Controls */}
                  <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between gap-3">
                    {/* Rating & Tag Pill */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-white text-xs font-bold">5.0</span>
                      </div>
                      <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 uppercase tracking-wider">
                        {testimonial.tag}
                      </span>
                    </div>

                    {/* Image navigation & Zoom action */}
                    <div className="flex items-center gap-2">
                      {hasMultipleImages && (
                        <div
                          className="flex items-center gap-1 bg-black/50 backdrop-blur-md p-1 rounded-full border border-white/15"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={(e) => handleImageNavigation(resolvedIndex, -1, e)}
                            aria-label="Previous photo"
                            className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <span className="text-[11px] text-white/90 px-1 font-mono font-medium">
                            {activeImgIndex + 1}/{totalImages}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleImageNavigation(resolvedIndex, 1, e)}
                            aria-label="Next photo"
                            className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      <span
                        title="Click to expand photos and full story"
                        className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white/90 border border-white/15 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all shadow-xs"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Card Body: Quote & Traveler Details */}
                  <div className="relative z-10 p-6 sm:p-8 space-y-4">
                    <Quote className="w-9 h-9 text-orange-400/90 shrink-0" />

                    <blockquote className="text-sm sm:text-base text-slate-100 font-light leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Traveler Info Strip */}
                    <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                          <span>{testimonial.name}</span>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        </h2>
                        <p className="text-xs text-orange-300 font-medium">
                          {testimonial.role}
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-slate-300 text-xs bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        )}

        {/* Modal for viewing the enlarged photos & story */}
        <AnimatePresence>
          {selectedModal && (
            <RenderModal
              selectedModal={selectedModal}
              setSelectedModal={setSelectedModal}
              testimonials={testimonials}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          )}
        </AnimatePresence>
      </section>

      {/* ============================================================== */}
      {/* 3. ETHOS CALLOUT: Purely editorial heading strip                */}
      {/* ============================================================== */}
      <section className="border-y border-slate-200/80 bg-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Small-Batch Journeys. Unhurried Exploration.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light">
                We design intimate expeditions with verified local homestays and native Himalayan guides.
              </p>
            </div>
          </div>

          <Link
            to="/itinerary"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore Handcrafted Itineraries</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </Link>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. MEET THE HEART OF OUR ADVENTURES (DARK STYLING FROM IMAGE)   */}
      {/* ============================================================== */}
      <section className="py-20 sm:py-28 bg-[#0a0f1d] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-950/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-orange-400" />
              <span>Native Mountain Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Meet The Heart of Our Adventures
            </h2>

            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Every expedition is powered by certified mountaineers, veteran terrain drivers, and local logistics scouts who keep your journey safe, unhurried, and unforgettable.
            </p>
          </div>

          {/* 5 Team Members Grid: Row 1 has 3 cards, Row 2 has 2 centered cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {teamData.map((member, idx) => {
              const colSpanClass =
                idx === 3
                  ? "lg:col-span-2 lg:col-start-2 sm:col-span-1"
                  : idx === 4
                  ? "lg:col-span-2 sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full lg:max-w-none"
                  : "lg:col-span-2 sm:col-span-1";

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group rounded-3xl overflow-hidden bg-[#11192e] border border-slate-800/80 shadow-2xl hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between ${colSpanClass}`}
                >
                  {/* Portrait photo */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      width="400"
                      height="500"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11192e] via-transparent to-transparent" />

                    {/* Role badge */}
                    <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white text-slate-950 text-[11px] font-bold shadow-md">
                      {member.badge}
                    </span>

                    {/* Overlaid Title on photo */}
                    <div className="absolute bottom-3.5 left-4 right-4">
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-xs text-orange-400 font-semibold">{member.title}</p>
                    </div>
                  </div>

                  {/* Bio & Highlights */}
                  <div className="p-5 sm:p-6 space-y-4 flex flex-col grow justify-between bg-[#11192e]">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {member.bio}
                    </p>

                    {/* Tag highlights */}
                    <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                      {member.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. BOTTOM INQUIRY STRIP: Direct WhatsApp & Itinerary Pathway    */}
      {/* ============================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="rounded-3xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Begin Your Journey</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Craft Your Own Mountain Story?
            </h3>
            <p className="text-orange-100 text-xs sm:text-sm font-light">
              Connect directly with Sunil and our local team in Shimla to curate your personalized backpacking journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-orange-600 hover:bg-orange-50 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              to="/itinerary"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-black/20 hover:bg-black/30 text-white border border-white/20 font-semibold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Expeditions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
