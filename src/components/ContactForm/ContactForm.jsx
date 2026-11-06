import React, { useState } from "react";
import { Send, Phone, CheckCircle2, AlertCircle, MessageCircle, Sparkles } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

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
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/trips/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Sunil and our team will get back to you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Submission failed. Please try again or chat with us on WhatsApp.",
        });
      }
    } catch (err) {
      console.error("❌ Submit Error:", err);
      setStatus({
        type: "error",
        message: "Network error. Please try again or connect directly on WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact">
      <div className="w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 border border-slate-200/80">
        {/* Visual Info Side */}
        <div
          className="hidden md:block md:col-span-6 lg:col-span-7 bg-cover bg-center relative"
          style={{
            backgroundImage: 'url("/assest/Nature/valley_opt.webp")',
            backgroundPosition: "center",
          }}
        >
          {/* Ambient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40 p-8 sm:p-12 flex flex-col justify-between text-white">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Begin Your Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Plan Your Handcrafted Himalayan Expedition
              </h2>
              <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed max-w-md">
                Tell us where you dream of traveling — from Spiti circuits to Chandratal camps. Our founder will craft your personalized journey.
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
                  <p className="text-xl font-extrabold text-orange-400">24/7</p>
                  <p className="text-xs text-slate-300 font-medium">On-Trail Support</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15">
                  <p className="text-xl font-extrabold text-orange-400">100%</p>
                  <p className="text-xs text-slate-300 font-medium">Local Guides</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300 pt-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Direct Line: +91 80917 90220 (Shimla HQ)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:col-span-6 lg:col-span-5 p-6 sm:p-10 bg-white flex flex-col justify-center">
          <div className="mb-6 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Free Travel Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Get in Touch
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Leave your details and we’ll coordinate your bespoke trip.
            </p>
          </div>

          {status.message && (
            <div
              className={`p-3.5 mb-5 rounded-2xl flex items-start gap-2.5 text-xs sm:text-sm ${
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
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all bg-slate-50/50"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all bg-slate-50/50"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                inputMode="numeric"
                maxLength={10}
                title="Enter a valid 10-digit phone number"
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all bg-slate-50/50"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                Where do you want to explore?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us your dates, group size, or desired destinations (e.g. Spiti Valley in June)..."
                rows={3}
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all bg-slate-50/50 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{submitting ? "Sending..." : "Request Travel Consultation"}</span>
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-slate-100 text-center">
            <a
              href="https://wa.me/918091790220?text=Hi%20Sunil,%20I'd%20like%20to%20plan%20a%20trip%20with%20Better%20Backpacking%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Prefer immediate chat? Message us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
