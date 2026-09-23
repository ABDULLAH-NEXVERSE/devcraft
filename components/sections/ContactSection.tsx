"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Upload,
  Clock,
  Globe,
  FileText,
} from "lucide-react";

interface Props {
  initialTab?: "quote" | "consultation";
}

export const ContactSection: React.FC<Props> = ({ initialTab = "quote" }) => {
  const [activeTab, setActiveTab] = useState<"quote" | "consultation">(initialTab);
  const [submittedQuote, setSubmittedQuote] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(false);
  const [userTimeZone] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
      } catch {
        return "Europe/London";
      }
    }
    return "UTC";
  });

  // Form states for Quote Request
  const [quoteData, setQuoteData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    projectType: "Web Development",
    industry: "Logistics & Delivery",
    budgetRange: "£10k – £25k",
    timeline: "1 – 2 Months",
    description: "",
    referralSource: "",
    consent: false,
    fileName: "",
  });

  // Form states for Free Consultation
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    preferredDate: "",
    preferredTime: "14:00",
    timeZone: userTimeZone,
    topic: "",
    consent: false,
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteData.consent) {
      alert("Please agree to the privacy consent to proceed.");
      return;
    }
    setSubmittedQuote(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.consent) {
      alert("Please agree to the privacy consent to proceed.");
      return;
    }
    setSubmittedBooking(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File exceeds 10MB limit. Please upload a smaller file.");
        return;
      }
      setQuoteData({ ...quoteData, fileName: file.name });
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-32 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="glass-panel p-6 sm:p-12 rounded-3xl border border-white/15 relative overflow-hidden bg-[#0B0B10]/95 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]">
        {/* Top emerald atmospheric glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-[#18CB96]/20 blur-3xl rounded-full pointer-events-none" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>Two-Team Rapid Response</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
            Tell Us What You&apos;re Building
          </h2>
          <p className="text-xs sm:text-sm text-[#A4A2B2] max-w-xl mx-auto">
            Request a structured quote if you know your scope, or book a free consultation to talk it through with our team — our team will get back to you from whichever office is awake.
          </p>

          {/* Dual-Path Tab Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 mt-6 max-w-md w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab("quote")}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "quote"
                  ? "bg-[#18CB96] text-[#0B0B10] shadow-[0_0_15px_rgba(24,203,150,0.35)]"
                  : "text-[#A4A2B2] hover:text-white"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>1. Request a Quote</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("consultation")}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "consultation"
                  ? "bg-[#18CB96] text-[#0B0B10] shadow-[0_0_15px_rgba(24,203,150,0.35)]"
                  : "text-[#A4A2B2] hover:text-white"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>2. Book Free Consultation</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Quote Request Form (Appendix B) */}
        {activeTab === "quote" && (
          <div>
            {submittedQuote ? (
              <div className="p-8 rounded-3xl bg-[#131219] border border-[#18CB96]/40 text-center max-w-md mx-auto my-6">
                <div className="w-12 h-12 rounded-full bg-[#18CB96]/20 text-[#18CB96] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Quote Request Received
                </h3>
                <p className="text-xs text-[#A4A2B2] leading-relaxed mb-4">
                  Thank you, <span className="text-white font-semibold">{quoteData.name}</span>. Our technical architects in Sheffield and Lahore are reviewing your scope. We will return an honest estimate within 24 hours.
                </p>
                <button
                  onClick={() => setSubmittedQuote(false)}
                  className="text-xs text-[#18CB96] underline hover:text-[#4ED7AE]"
                >
                  Submit another project spec
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="max-w-2xl mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Your Name <span className="text-[#18CB96]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteData.name}
                      onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={quoteData.company}
                      onChange={(e) => setQuoteData({ ...quoteData, company: e.target.value })}
                      placeholder="e.g. Apex Logistics Ltd"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Business Email <span className="text-[#18CB96]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={quoteData.email}
                      onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={quoteData.phone}
                      onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                      placeholder="+44 7123 456789"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Country <span className="text-[#18CB96]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteData.country}
                      onChange={(e) => setQuoteData({ ...quoteData, country: e.target.value })}
                      placeholder="United Kingdom / Pakistan / USA"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Project Type <span className="text-[#18CB96]">*</span>
                    </label>
                    <select
                      value={quoteData.projectType}
                      onChange={(e) => setQuoteData({ ...quoteData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="E-commerce Development">E-commerce Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="AI & ML Solutions">AI &amp; ML Solutions</option>
                      <option value="Maintenance & Support">Maintenance &amp; Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Industry (Optional)
                    </label>
                    <select
                      value={quoteData.industry}
                      onChange={(e) => setQuoteData({ ...quoteData, industry: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    >
                      <option value="Logistics & Delivery">Logistics &amp; Delivery</option>
                      <option value="Procurement & Compliance">Procurement &amp; Compliance</option>
                      <option value="E-commerce & Retail">E-commerce &amp; Retail</option>
                      <option value="Fintech">Fintech</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Other Industry">Other Industry</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Estimated Budget Range <span className="text-[#18CB96]">*</span>
                    </label>
                    <select
                      value={quoteData.budgetRange}
                      onChange={(e) => setQuoteData({ ...quoteData, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    >
                      <option value="Under £5,000">Under £5,000</option>
                      <option value="£5,000 – £15,000">£5,000 – £15,000</option>
                      <option value="£15,000 – £35,000">£15,000 – £35,000</option>
                      <option value="£35,000 – £75,000">£35,000 – £75,000</option>
                      <option value="£75,000+ Enterprise">£75,000+ Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Target Launch Timeline <span className="text-[#18CB96]">*</span>
                    </label>
                    <select
                      value={quoteData.timeline}
                      onChange={(e) => setQuoteData({ ...quoteData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    >
                      <option value="Immediate (Under 4 Weeks)">Immediate (Under 4 Weeks)</option>
                      <option value="1 – 2 Months">1 – 2 Months</option>
                      <option value="2 – 4 Months">2 – 4 Months</option>
                      <option value="Flexible / Long-Term">Flexible / Long-Term</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                    Project Description &amp; Requirements <span className="text-[#18CB96]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={quoteData.description}
                    onChange={(e) => setQuoteData({ ...quoteData, description: e.target.value })}
                    placeholder="Tell us what you are building, who it is for, and any essential integrations or technical constraints..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors resize-none"
                  />
                </div>

                {/* Optional File Upload */}
                <div className="p-4 rounded-2xl bg-white/5 border border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#18CB96]/10 text-[#18CB96]">
                      <Upload className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">
                        Upload Project Spec / Brief (Optional)
                      </div>
                      <div className="text-[10px] text-[#A4A2B2]">
                        PDF, DOCX, or PNG (Max 10MB)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white transition-colors">
                      <span>{quoteData.fileName || "Choose File"}</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.png,.jpg"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                    How Did You Hear About DevCraft? (Optional)
                  </label>
                  <input
                    type="text"
                    value={quoteData.referralSource}
                    onChange={(e) => setQuoteData({ ...quoteData, referralSource: e.target.value })}
                    placeholder="e.g. Referral, Nexverse, LinkedIn, Google search"
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent-quote"
                    required
                    checked={quoteData.consent}
                    onChange={(e) => setQuoteData({ ...quoteData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-white/20 bg-[#0B0B10] text-[#18CB96] focus:ring-[#18CB96]"
                  />
                  <label htmlFor="consent-quote" className="text-[11px] text-[#A4A2B2] leading-tight">
                    I consent to DevCraft storing my details to provide a technical quote and project proposal per the privacy policy.
                  </label>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#A4A2B2] font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#18CB96]" />
                    <span>Honest scoping &bull; 24h Response</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-halo w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Request Free Project Quote</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: Free Consultation Booking (Appendix B) */}
        {activeTab === "consultation" && (
          <div>
            {submittedBooking ? (
              <div className="p-8 rounded-3xl bg-[#131219] border border-[#18CB96]/40 text-center max-w-md mx-auto my-6">
                <div className="w-12 h-12 rounded-full bg-[#18CB96]/20 text-[#18CB96] flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Consultation Confirmed
                </h3>
                <p className="text-xs text-[#A4A2B2] leading-relaxed mb-4">
                  We have reserved your slot for <span className="text-white font-semibold">{bookingData.preferredDate}</span> at <span className="text-[#18CB96] font-mono">{bookingData.preferredTime} ({bookingData.timeZone})</span>. A Google Meet / Teams invitation has been sent to <span className="text-white font-mono">{bookingData.email}</span>.
                </p>
                <button
                  onClick={() => setSubmittedBooking(false)}
                  className="text-xs text-[#18CB96] underline hover:text-[#4ED7AE]"
                >
                  Book another session
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="max-w-xl mx-auto space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Full Name <span className="text-[#18CB96]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      placeholder="e.g. Michael Chen"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Work Email <span className="text-[#18CB96]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      placeholder="michael@company.com"
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Preferred Date <span className="text-[#18CB96]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingData.preferredDate}
                      onChange={(e) => setBookingData({ ...bookingData, preferredDate: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                      Preferred Time Slot <span className="text-[#18CB96]">*</span>
                    </label>
                    <select
                      value={bookingData.preferredTime}
                      onChange={(e) => setBookingData({ ...bookingData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                    >
                      <option value="09:00">09:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase flex items-center justify-between">
                    <span>Time Zone (Auto-Detected)</span>
                    <Globe className="w-3 h-3 text-[#18CB96]" />
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.timeZone}
                    onChange={(e) => setBookingData({ ...bookingData, timeZone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#A4A2B2] mb-1 uppercase">
                    What Would You Like To Discuss? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={bookingData.topic}
                    onChange={(e) => setBookingData({ ...bookingData, topic: e.target.value })}
                    placeholder="Briefly describe your idea, technical questions, or target timelines..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#0B0B10] border border-white/10 text-white text-xs focus:outline-none focus:border-[#18CB96] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent-booking"
                    required
                    checked={bookingData.consent}
                    onChange={(e) => setBookingData({ ...bookingData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-white/20 bg-[#0B0B10] text-[#18CB96] focus:ring-[#18CB96]"
                  />
                  <label htmlFor="consent-booking" className="text-[11px] text-[#A4A2B2] leading-tight">
                    I agree to schedule this video consultation and receive calendar reminders from DevCraft.
                  </label>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#A4A2B2] font-mono">
                    <Clock className="w-4 h-4 text-[#18CB96]" />
                    <span>30-min strategy session &bull; No obligation</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-halo w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Confirm Free Consultation</span>
                    <Calendar className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
