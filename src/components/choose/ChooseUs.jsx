import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Tent, Leaf, Sparkles } from "lucide-react";

const ChooseUs = () => {
  const benefits = [
    {
      title: "Mountain Safety First",
      description:
        "Trained high-altitude leaders, certified first-aid kits, acclimatization schedules, and veteran mountain drivers on every pass.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      accent: "from-emerald-500/10 to-teal-500/5",
      badge: "Certified Guides",
    },
    {
      title: "Handcrafted Itineraries",
      description:
        "Thoughtfully planned circuits balancing thrilling high passes with restful village pauses and rich cultural exchanges.",
      icon: <Compass className="w-6 h-6 text-orange-600" />,
      accent: "from-orange-500/10 to-amber-500/5",
      badge: "No Tourist Traps",
    },
    {
      title: "Starlight Wilderness Camps",
      description:
        "Serene nights beneath unpolluted Himalayan skies, warm fireside banter, storytelling, and memories to last a lifetime.",
      icon: <Tent className="w-6 h-6 text-sky-600" />,
      accent: "from-sky-500/10 to-blue-500/5",
      badge: "Off-Grid Nights",
    },
    {
      title: "Regenerative & Eco-Conscious",
      description:
        "We practice strict Leave No Trace guidelines, support indigenous village homestays, and protect sacred mountain ecosystems.",
      icon: <Leaf className="w-6 h-6 text-teal-600" />,
      accent: "from-teal-500/10 to-green-500/5",
      badge: "100% Sustainable",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Why Choose Better Backpacking</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Why Travelers ❤️ Backpack With Us
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          More than a travel agency — we are a community of mountain lovers dedicated to authentic, safe, and respectful journeys.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.accent} flex items-center justify-center border border-slate-100 shadow-xs group-hover:scale-110 transition-transform`}
                >
                  {benefit.icon}
                </div>
                <span className="text-[11px] font-bold text-slate-500 px-2.5 py-1 rounded-full bg-slate-100">
                  {benefit.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
