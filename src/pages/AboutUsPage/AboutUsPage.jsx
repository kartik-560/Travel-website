/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  MapPin,
  Mountain,
  Globe2,
  Compass,
  Users,
  ShieldCheck,
  Leaf,
  Headphones,
  Sparkles,
  BookOpen,
  Sun,
  HeartHandshake,
  Camera,
  MessageCircle,
  ArrowRight,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Photos from "../../components/Gallery/Photos";
import ItineraryCard from "../../components/itineraryCard/ItineraryCard";

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("story");
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const founderRef = useRef(null);
  const founderInView = useInView(founderRef, { once: true, margin: "-80px" });
  const pillarsRef = useRef(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-80px" });

  const stats = [
    { value: "12+", label: "Handcrafted Trails", note: "Spiti, Ladakh & Shimla" },
    { value: "100%", label: "Local Mountain Leaders", note: "Native Himachali guides" },
    { value: "5,000+", label: "Happy Travelers", note: "Across 24+ countries" },
    { value: "Zero", label: "Trace Philosophy", note: "Eco-certified expeditions" },
  ];

  const storyTabs = {
    story: {
      title: "Our Origin Story",
      badge: "The Beginning",
      content: (
        <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Better Backpacking India began with an enduring belief:{" "}
            <span className="font-semibold text-slate-900">
              travel should be transformative, personal, and respectful of the mountains.
            </span>
          </p>
          <p>
            In 2012, our founder <strong className="text-orange-600 font-semibold">Sunil Kumar</strong>{" "}
            was balancing his studies and part-time jobs in Shimla when he fell in love with
            untrodden Himalayan passes, ancient village trails, and warm fireside conversations
            far away from crowded tourist itineraries.
          </p>
          <p>
            What began as an intimate spark quickly evolved into a mission: crafting boutique,
            small-batch journeys where travelers don’t just observe India — they immerse in it,
            connect deeply with local communities, and create memories that remain etched for a lifetime.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
            <div className="p-3.5 rounded-xl bg-orange-50/80 border border-orange-100">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">2012</span>
              <p className="text-xs text-slate-700 font-medium mt-1">First Shimla & Kinnaur trails charted</p>
            </div>
            <div className="p-3.5 rounded-xl bg-orange-50/80 border border-orange-100">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">2018</span>
              <p className="text-xs text-slate-700 font-medium mt-1">High-altitude Spiti & Ladakh circuits</p>
            </div>
            <div className="p-3.5 rounded-xl bg-orange-50/80 border border-orange-100">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Today</span>
              <p className="text-xs text-slate-700 font-medium mt-1">Recognized boutique mountain community</p>
            </div>
          </div>
        </div>
      ),
    },
    mission: {
      title: "Our Purpose & Mission",
      badge: "Core Purpose",
      content: (
        <div className="space-y-4 text-slate-700 text-sm sm:text-base">
          <p className="text-slate-800 font-medium">
            To transform travel from rushed sightseeing into a profound journey of personal discovery,
            genuine cultural reciprocity, and regenerative tourism.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {[
              {
                icon: <Globe2 className="w-5 h-5 text-sky-600" />,
                title: "Global Community",
                desc: "Uniting mindful backpackers from all corners of the world.",
                bg: "bg-sky-50 border-sky-100",
              },
              {
                icon: <Compass className="w-5 h-5 text-emerald-600" />,
                title: "Sustainable Footprint",
                desc: "Leaving trails cleaner and supporting remote Himalayan hamlets.",
                bg: "bg-emerald-50 border-emerald-100",
              },
              {
                icon: <Mountain className="w-5 h-5 text-purple-600" />,
                title: "Raw Authenticity",
                desc: "Homestays, indigenous cuisine, and off-grid high mountain passes.",
                bg: "bg-purple-50 border-purple-100",
              },
              {
                icon: <HeartHandshake className="w-5 h-5 text-amber-600" />,
                title: "Local Empowerment",
                desc: "Fair wages and direct economic benefit to village hosts.",
                bg: "bg-amber-50 border-amber-100",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-xl border ${item.bg} flex items-start gap-3 transition-transform hover:-translate-y-0.5`}
              >
                <div className="p-2 rounded-lg bg-white shadow-xs shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    promise: {
      title: "The BBI Promise",
      badge: "Our Guarantee",
      content: (
        <div className="space-y-3.5 text-slate-700 text-sm sm:text-base">
          <p>
            When you travel with Better Backpacking India, you leave behind commercial tour bus crowds
            and rigid package schedules. Here is what we promise on every expedition:
          </p>
          <div className="space-y-2.5 pt-1">
            {[
              {
                title: "Intimate Group Sizes (Max 10-12 Backpackers)",
                desc: "Never get lost in a crowd. Everyone travels as close companions with personal guide attention.",
              },
              {
                title: "Certified Mountain Safety & Acclimatization",
                desc: "Gradual altitude acclimation, emergency oxygen gear, and veteran mountain drivers.",
              },
              {
                title: "No Hidden Costs or Forced Shopping",
                desc: "100% transparent pricing covering your stays, permits, authentic meals, and ground logistics.",
              },
              {
                title: "24/7 Founder & On-Trail Assistance",
                desc: "Sunil and our ground team stay reachable around the clock for any adjustments or advice.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  };

  const pillars = [
    {
      title: "Native Mountain Guides",
      desc: "Guided by locals born and raised on these very peaks, revealing secret viewpoints and indigenous folklore.",
      icon: <Compass className="w-6 h-6 text-orange-600" />,
      accent: "from-orange-500/10 to-amber-500/5",
    },
    {
      title: "Fair & Direct Local Pricing",
      desc: "Zero middlemen agency cuts. Your trip investment directly supports family homestays, porters, and mountain cooks.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      accent: "from-emerald-500/10 to-teal-500/5",
    },
    {
      title: "Curated Offbeat Routes",
      desc: "Escape commercial tourist traps. We explore pristine riverbeds, hidden passes, and untouched high-altitude lakes.",
      icon: <MapPin className="w-6 h-6 text-sky-600" />,
      accent: "from-sky-500/10 to-blue-500/5",
    },
    {
      title: "Intimate Small Groups",
      desc: "Cap of 10 to 12 travelers per trail ensures deep friendships, flexible pacing, and real mountain tranquility.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      accent: "from-indigo-500/10 to-purple-500/5",
    },
    {
      title: "Eco-Conscious Zero Trace",
      desc: "We practice Leave No Trace principles, discourage single-use plastics, and preserve fragile Himalayan ecology.",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      accent: "from-green-500/10 to-emerald-500/5",
    },
    {
      title: "24/7 Dedicated Support",
      desc: "From weather changes to custom transit requests, our founder and ground coordinators are always by your side.",
      icon: <Headphones className="w-6 h-6 text-rose-600" />,
      accent: "from-rose-500/10 to-pink-500/5",
    },
  ];

  const philosophies = [
    {
      title: "Immersive Experiences",
      subtitle: "Beyond the Tourist Trail",
      description: "Dive deep into mountain life, hidden monastic chants, and high-altitude wilderness.",
      icon: <MapPin className="w-4 h-4 text-orange-400" />,
      image: "/assest/chandratal/Chandratal.webp",
      tag: "Exploration",
    },
    {
      title: "Cultural Exchange",
      subtitle: "Living Heritage",
      description: "Share butter tea with Himalayan elders, listen to folk tales, and connect with sacred traditions.",
      icon: <Users className="w-4 h-4 text-orange-400" />,
      image: "/assest/Our_Philosophy/04.webp",
      tag: "Connection",
    },
    {
      title: "Mindful Pacing",
      subtitle: "Acclimatize & Reflect",
      description: "Travel at nature's tempo. Balanced days that allow you to soak in viewpoints, sketch, and relax.",
      icon: <BookOpen className="w-4 h-4 text-orange-400" />,
      image: "/assest/spiti circuit/03.webp",
      tag: "Wellness",
    },
    {
      title: "Balanced Adventure",
      subtitle: "Adrenaline & Peace",
      description: "Cross challenging passes by day and unwind under crisp starlit skies by evening bonfires.",
      icon: <Sun className="w-4 h-4 text-orange-400" />,
      image: "/assest/Our_Philosophy/image.webp",
      tag: "Adventure",
    },
    {
      title: "Community Upliftment",
      subtitle: "Regenerative Travel",
      description: "Empower remote Himalayan hamlets with responsible homestays and community-first tourism.",
      icon: <HeartHandshake className="w-4 h-4 text-orange-400" />,
      image: "/assest/Our_Philosophy/07.webp",
      tag: "Impact",
    },
    {
      title: "Lifelong Camaraderie",
      subtitle: "Stories for a Lifetime",
      description: "Return with fellow travelers who become family and memories you will cherish forever.",
      icon: <Camera className="w-4 h-4 text-orange-400" />,
      image: "/assest/Our_Philosophy/06.webp",
      tag: "Memories",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Better Backpacking India - Authentic Himalayan Expeditions</title>
        <meta
          name="description"
          content="Learn about Better Backpacking India, founded by Sunil Kumar in Shimla. Handcrafted journeys, sustainable local travel, small group adventures, and cultural immersion."
        />
        <link rel="canonical" href="https://betterbackpackingindia.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full h-[52vh] sm:h-[60vh] md:h-[66vh] min-h-[420px] max-h-[640px] overflow-hidden flex items-center justify-center bg-slate-950">
        <img
          src="/assest/delhi_shimla/06.webp"
          alt="Shimla illuminated mountain ridge at dusk"
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.72] scale-105 transition-transform duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>AUTHENTIC HIMALAYAN EXPEDITIONS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            About Better Backpacking India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Crafting soulful journeys, empowering local mountain communities, and revealing the living heartbeat of India.
          </motion.p>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="relative z-20 -mt-10 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="text-center p-3 rounded-xl hover:bg-orange-50/50 transition-colors"
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-600 tracking-tight">
                {s.value}
              </span>
              <span className="block text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
                {s.label}
              </span>
              <span className="block text-[11px] sm:text-xs text-slate-500 mt-0.5">
                {s.note}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Story Section ("Wanderlust Chronicles") */}
      <section ref={storyRef} className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
            <Mountain className="w-3.5 h-3.5" />
            <span>Our Roots</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Wanderlust Chronicles
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From humble trails in Shimla to an intimate family of mindful adventurers across the globe.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={storyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Visual Side */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100">
              <img
                src="/assest/bg.webp"
                alt="Backpacker looking across majestic mountain valley"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] sm:h-[460px] lg:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Overlaid Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Born in Shimla, Himachal</h4>
                  <p className="text-xs text-slate-600 font-medium">Rooted in native Himalayan hospitality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Content Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tab Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200 mb-6">
              {Object.keys(storyTabs).map((key) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveTab(key)}
                    className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white text-orange-600 shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    {storyTabs[key].title}
                  </button>
                );
              })}
            </div>

            {/* Tab Panel */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm min-h-[360px]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {storyTabs[activeTab].title}
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">
                  {storyTabs[activeTab].badge}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  {storyTabs[activeTab].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meet Sunil - Founder Section */}
      <section
        ref={founderRef}
        className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-orange-50/30 to-white px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={founderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80"
          >
            {/* Founder Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-orange-600" />
                <span>Founder & Expedition Leader</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Meet Sunil — The Heart of Every Journey
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Sunil is not just a desk itinerary coordinator — he is an avid mountain trekker,
                local leader, and your personal companion on the trails. Born in Himachal Pradesh,
                Sunil brings lifelong knowledge of high Himalayan passes, authentic village customs,
                and trusted mountain drivers.
              </p>

              {/* Direct Founder Quote Block */}
              <div className="relative p-5 rounded-2xl bg-orange-50/70 border-l-4 border-orange-500 text-slate-800 text-sm italic leading-relaxed">
                &ldquo;To truly experience the Himalayas, you must leave the crowded tourist buses
                behind. Sit by a mountain hearth, drink warm salt tea, walk softly across the ridges,
                and let the tranquility of the heights change you forever.&rdquo;
                <span className="block mt-2 font-bold not-italic text-xs text-orange-800">
                  — Sunil Kumar, Founder of Better Backpacking India
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/itinerary"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Handcrafted Itineraries</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-sm border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat with Sunil (+91 8091790220)</span>
                </a>
              </div>
            </div>

            {/* Founder Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img
                    src="/assest/Team/sunilkumar.webp"
                    alt="Sunil Kumar, Founder of Better Backpacking India"
                    width="600"
                    height="750"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider text-orange-300 font-semibold">
                      Trail Guide & Founder
                    </span>
                    <h3 className="text-xl font-bold">Sunil Kumar</h3>
                    <p className="text-xs text-slate-200 mt-0.5">
                      Leading Himalayan expeditions since 2012
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - The 6 Core Pillars */}
      <section ref={pillarsRef} className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The BBI Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Backpack With Us?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Carefully engineered journeys that blend authentic Himalayan wilderness with comfort and care.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-5 border border-slate-100 shadow-xs group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Our Philosophy Grid */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-300 border border-white/20 text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Ethos & Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Philosophy — Travel With Purpose
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Every trail we curate is guided by respect for nature, cultural celebration, and genuine human connection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {philosophies.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-lg flex flex-col h-full hover:border-orange-500/50 transition-colors"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-orange-300 border border-white/10 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between grow space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="p-1 rounded bg-orange-500/20 text-orange-400">
                        {item.icon}
                      </span>
                      <span className="text-xs text-orange-400 font-semibold tracking-wide uppercase">
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Itineraries CTA */}
      <ItineraryCard mode="about" />

      {/* Gallery Photos */}
      <Photos />
    </>
  );
};

export default AboutUsPage;
