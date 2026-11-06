/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Compass,
  ShieldCheck,
  ChevronDown,
  Loader2,
  ArrowRight,
  Clock,
} from "lucide-react";

const FAQS = [
  {
    q: "How does the custom itinerary planning process work?",
    a: "After you submit your inquiry or reach out via WhatsApp, our founder Sunil connects directly with you. We discuss your fitness, interests, and dates, and draft a day-by-day route with transparent homestay and logistics options.",
  },
  {
    q: "What safety protocols do you maintain on high-altitude passes?",
    a: "Every high-altitude expedition is led by ABVIMAS-certified mountaineers. We carry portable pulse oximeters, medical-grade emergency oxygen, curated high-altitude first-aid kits, and schedule gradual acclimatization buffer days.",
  },
  {
    q: "What is your group size policy?",
    a: "We strictly limit our batches to 10-12 travelers (often smaller). This preserves the intimate backcountry camaraderie, minimizes ecological impact, and ensures every backpacker receives personalized care.",
  },
  {
    q: "Can you accommodate solo women backpackers?",
    a: "Absolutely. Many of our departures are led or co-guided by certified female mountaineers like Neetima. We maintain vetted homestays and zero-tolerance safety policies.",
  },
];

const ContactFormPage = () => {
  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/trips/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your expedition inquiry has been sent to our mountain team. Sunil will contact you shortly via WhatsApp or Email.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message:
            result.error ||
            "Submission failed. Please connect directly with us on WhatsApp.",
        });
      }
    } catch (err) {
      console.error("❌ Submit Error:", err);
      setStatus({
        type: "error",
        message:
          "Network error. Please try again or message Sunil directly on WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 sm:pt-36 md:pt-40 pb-20 min-h-screen bg-gradient-to-b from-orange-50/50 via-white to-slate-50 text-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-700 text-xs sm:text-sm font-semibold tracking-wide">
            <Compass className="w-4 h-4 text-orange-600" />
            <span className="uppercase">Shimla Basecamp • Direct Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let’s Craft Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Dream Expedition</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Tell us where you want to wander. From high Himalayan passes and Spiti circuits to sacred trails and peaceful homestays, our native guides are ready to design your journey.
          </p>
        </div>

        {/* 3 Quick Contact Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* WhatsApp Card */}
          <motion.a
            whileHover={{ y: -4 }}
            href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Instant WhatsApp Chat</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Connect directly with our founder Sunil for immediate answers, batch dates, and packing tips.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
              <span>Chat Now (+91 80917 90220)</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* Direct Call Card */}
          <motion.a
            whileHover={{ y: -4 }}
            href="tel:+918091790220"
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Direct Basecamp Line</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Speak with our operations desk in Shimla for customized group bookings and transport logistics.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs font-bold text-orange-600 group-hover:text-orange-700">
              <span>+91 80917 90220 </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.a
            whileHover={{ y: -4 }}
            href="mailto:betterbackpackingindia@gmail.com"
            className="group p-6 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Email Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Send us detailed itineraries, corporate retreat requirements, or college expedition briefs.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-2 text-xs font-bold text-sky-600 group-hover:text-sky-700">
              <span>betterbackpackingindia@gmail.com</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </div>

        {/* Main Consultation Section */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-16">
          
          {/* Left Visual & Trust Side */}
          <div
            className="lg:col-span-5 bg-cover bg-center relative p-8 sm:p-10 flex flex-col justify-between text-white"
            style={{
              backgroundImage: 'url("/assest/Nature/valley_opt.webp")',
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-black/50" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Responsible Travel</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Authentic Mountain Journeys With Native Guides
              </h2>

              <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
                Better Backpacking India was born on Himachal trails. We believe in unhurried pacing, warm village hospitality, and leaving every trail cleaner than we found it.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>ABVIMAS Certified:</strong> High-altitude licensed trek leaders</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Small Batches:</strong> Max 10-12 travelers for true camaraderie</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Direct Homestays:</strong> 100% fair-pay village host partnerships</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero-Trace:</strong> Strict mountain waste & plastic reduction</span>
                </div>
              </div>
            </div>

            {/* Basecamp info snippet at bottom */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/15 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Basecamp: Shimla, Himachal Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Response Time: Typically within 4–12 hours</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form Side */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Travel Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-light mt-1">
                Tell us about your dream adventure and our team in Shimla will coordinate the perfect journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Contact Inputs */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      required
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-600">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210 (10 Digits)"
                      pattern="[0-9]{10}"
                      inputMode="numeric"
                      maxLength={10}
                      title="Enter a valid 10-digit mobile number"
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. aryan@example.com"
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-600">
                    Tell Us About Your Travel Plans / Preferences
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Share any special requests, fitness level, or specific dates you have in mind..."
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all resize-none"
                  />
                </div>
              </div>

              {/* Status Alert Banner */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={`p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm font-medium ${
                      status.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-xl hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Submitting Consultation...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Travel Consultation</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400 font-light">
                🔒 Zero spam guarantee. We only contact you regarding your requested travel plan.
              </p>
            </form>
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
              <span>Clear & Transparent Travel</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Everything you need to know before booking your Himalayan adventure.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 text-sm sm:text-base hover:text-orange-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactFormPage;
