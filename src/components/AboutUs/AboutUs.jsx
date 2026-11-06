/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MapPin, Mountain, Globe2, Compass, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Sunil Kumar",
    role: "Founder & Lead Guide",
    image: "/assest/Team/sunilkumar.webp",
    badge: "Himachal Native",
    description:
      "Masters in Tourism, licensed mountain leader, German speaker & certified Himalayan mountaineer with 10+ years on high passes.",
  },
  {
    name: "Sunil Sharma",
    role: "Co-founder & Route Scout",
    image: "/assest/Team/sunil.webp",
    badge: "Trail Veteran",
    description:
      "Lifelong trekker, licensed mountain guide, and your trusted companion navigating uncharted Himalayan valleys.",
  },
  {
    name: "Aashima Kanwar",
    role: "Operations & Logistics",
    image: "/assest/Team/aashima.webp",
    badge: "Trip Architect",
    description:
      "The detail wizard ensuring permits, homestay coordination, transport logistics, and smooth personalized journeys.",
  },
  {
    name: "Neetima",
    role: "Mountaineer & Trek Guide",
    image: "/assest/Team/neetima.webp",
    badge: "Certified Skier",
    description:
      "Certified mountaineer, professional skier, and licensed guide helping travelers and women solo backpackers conquer high peaks.",
  },
  {
    name: "Sanjay Chauhan",
    role: "Senior Mountain Driver",
    image: "/assest/Team/sanjay.webp",
    badge: "25+ Yrs Exp.",
    description:
      "Veteran high-altitude terrain specialist with 25+ years navigating treacherous mountain passes like Kinnaur, Spiti, Leh, and Uttarakhand.",
  },
];

const TeamCard = ({ member, idx }) => {
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
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white border border-slate-200/80 flex flex-col justify-between ${colSpanClass}`}
    >
      {/* Portrait */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
        <img
          src={member.image}
          alt={member.name}
          width="400"
          height="500"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Role Badge */}
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold shadow-xs">
          {member.badge}
        </span>

        {/* Floating Name on Photo */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <h4 className="text-lg font-bold">{member.name}</h4>
          <p className="text-xs text-orange-300 font-semibold">{member.role}</p>
        </div>
      </div>

      {/* Bio Description */}
      <div className="p-4 sm:p-5 bg-white flex flex-col grow justify-between">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState("story");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const sections = {
    story: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p>
          Better Backpacking India began with a simple belief:{" "}
          <strong className="text-slate-900 font-semibold">
            travel should feel personal, meaningful, and transformative.
          </strong>
        </p>
        <p>
          In 2012, our founder <strong className="text-orange-600 font-semibold">Sunil Kumar</strong>{" "}
          was balancing studies and a part-time job in Shimla when he discovered the joy of hidden trails,
          warm village conversations, and the heartbeat of India beyond tourist maps.
        </p>
        <p>
          Today, every trip we design is rooted in authenticity — connecting you with India’s landscapes,
          traditions, and mountain hosts in ways that leave you with stories for a lifetime.
        </p>
        <div className="pt-2">
          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700"
          >
            <span>Read Our Full Story & Milestones</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    ),
    mission: (
      <div className="space-y-4 text-slate-700 text-sm sm:text-base">
        <p className="font-medium text-slate-800">
          To transform travel from a mere movement between places to a profound journey of personal discovery,
          cultural reciprocity, and sustainable local connection.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {[
            {
              icon: <Globe2 className="w-4 h-4 text-sky-600" />,
              text: "Global Backpacker Community",
            },
            {
              icon: <Compass className="w-4 h-4 text-emerald-600" />,
              text: "Zero-Trace Sustainable Tourism",
            },
            {
              icon: <Mountain className="w-4 h-4 text-purple-600" />,
              text: "100% Authentic Off-Grid Trails",
            },
            {
              icon: <HeartHandshake className="w-4 h-4 text-orange-600" />,
              text: "Direct Village Empowerment",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100"
            >
              <div className="p-1.5 rounded-lg bg-white shadow-2xs">{item.icon}</div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-slate-50/60 py-20 px-4 sm:px-6 lg:px-8">
      {/* Wanderlust Chronicles Card */}
      <div ref={ref} className="max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Image Side */}
          <div className="lg:col-span-5 relative group">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100">
              <img
                src="/assest/bg.webp"
                alt="Backpacker overlooking scenic Himalayan valley"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Shimla, Himachal Pradesh</p>
                  <p className="text-[11px] text-slate-500">Rooted in native Himalayan hospitality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Story Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Heritage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Wanderlust Chronicles
              </h2>
            </div>

            {/* Tab Selectors */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              {Object.keys(sections).map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeSection === section
                      ? "bg-white text-orange-600 shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {section === "story" ? "Our Story" : "Our Mission"}
                </button>
              ))}
            </div>

            {/* Tab Panel */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  {sections[activeSection]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Passionate Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Ground Team
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Certified mountaineers, logistics scouts, and veteran drivers who keep your journeys safe and unforgettable.
          </p>
        </div>

        {/* Responsive Grid - 6 columns on lg so 2 bottom cards center cleanly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.name} member={member} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
