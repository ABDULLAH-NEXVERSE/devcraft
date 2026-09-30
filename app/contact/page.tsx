"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
import { companyData } from "@/data/companyData";
import {
  Mail,
  MapPin,
  Globe,
  Clock,
  ArrowUpRight,
  MessageSquare,
  Send,
  CheckCircle2,
  Zap,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Scroll Progress Bar                                               */
/* ------------------------------------------------------------------ */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#18cb96] via-[#52ffcb] to-[#5B8DEF] origin-left z-50 pointer-events-none"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 1: Contact Hero                                          */
/* ------------------------------------------------------------------ */
function ContactHero() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#18cb96]/8 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/6 w-[300px] h-[300px] bg-[#5B8DEF]/6 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Telemetry Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18cb96] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#18cb96]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold">
            Response Active // Follow-The-Sun Coverage
          </span>
        </div>
        <div className="text-xs font-mono text-[#8B90A6]">
          SHEFFIELD, UK &bull; LAHORE, PK &bull; 24/7 MONITORED
        </div>
      </div>

      {/* Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Typography */}
        <div className="lg:col-span-7 space-y-8">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-[var(--font-display)] leading-[1.04] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Tell us what
            <br />
            <span className="text-gradient-emerald">you&apos;re building.</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-[#A4A2B2] font-[var(--font-body)] leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Whether you have a full spec ready or just a rough idea, get in touch. Request a quote
            if you know the scope, or book a free consultation if you&apos;d rather talk it through
            first. Our team responds from whichever office is awake.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "Free consultation" },
              { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "No-obligation quote" },
              { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "24/7 response coverage" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-[#80E2C5]">
                {item.icon}
                <span className="font-mono">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Response Promise Panel */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-3xl border border-white/15 bg-[#090D18]/95 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Ghost watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.10]">
              <MessageSquare className="w-48 h-48 text-[#18cb96]" />
            </div>

            <div className="relative z-10 space-y-5">
              <div className="text-[10px] font-mono text-[#8B90A6] uppercase tracking-widest font-bold">
                Response Protocol:
              </div>

              {[
                {
                  icon: <Clock className="w-4 h-4 text-[#18cb96]" />,
                  label: "Response Time",
                  value: "Under 4 hours",
                  sub: "During active office hours",
                },
                {
                  icon: <Zap className="w-4 h-4 text-[#52ffcb]" />,
                  label: "Consultation",
                  value: "Free 30-min call",
                  sub: "No obligation, no pressure",
                },
                {
                  icon: <ShieldCheck className="w-4 h-4 text-[#5B8DEF]" />,
                  label: "Coverage",
                  value: "24/7 Follow-the-Sun",
                  sub: "UK then PK hand-off",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/8"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#8B90A6] uppercase">{item.label}</div>
                    <div className="text-sm font-bold text-white mt-0.5">{item.value}</div>
                    <div className="text-xs text-[#8B90A6]">{item.sub}</div>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-white/8">
                <a
                  href="mailto:contact@nexverse.co.uk"
                  className="btn-primary-halo w-full px-6 py-3 rounded-full text-xs font-bold text-[#06120E] inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@nexverse.co.uk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 2: Dual Office Location Cards (Light Section)            */
/* ------------------------------------------------------------------ */
function OfficeLocations() {
  return (
    <section className="py-28 bg-[#F5F7F5] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #14af81 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#14af81] tracking-wider font-bold bg-[#14af81]/10 px-3.5 py-1.5 rounded-full border border-[#14af81]/25 mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Our Offices</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0918] font-[var(--font-display)] mt-4">
            Two studios. One delivery standard.
          </h2>
          <p className="mt-4 text-sm text-[#444256] max-w-2xl mx-auto">
            Reach us through either hub — your message reaches the appropriate team within hours,
            regardless of your time zone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Direct Email */}
          <motion.div
            className="p-8 rounded-3xl bg-white border border-[#e8e6f0] shadow-[0_4px_30px_-8px_rgba(0,0,0,0.07)] relative overflow-hidden group hover:border-[#14af81]/30 hover:shadow-[0_12px_40px_-10px_rgba(20,175,129,0.15)] transition-all duration-300"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#14af81]/10 flex items-center justify-center text-[#14af81] mb-5">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B0918] mb-2">Direct Email</h3>
            <p className="text-xs text-[#6B697D] mb-3">General inquiries &amp; project briefs:</p>
            <a
              href="mailto:contact@nexverse.co.uk"
              className="text-sm font-mono text-[#14af81] hover:underline font-semibold"
            >
              contact@nexverse.co.uk
            </a>
            <p className="text-xs text-[#6B697D] mt-3">
              Checked 24/7 by our on-call project leads.
            </p>
          </motion.div>

          {/* UK Studio */}
          <motion.div
            className="p-8 rounded-3xl bg-white border border-[#e8e6f0] shadow-[0_4px_30px_-8px_rgba(0,0,0,0.07)] relative overflow-hidden group hover:border-[#14af81]/30 hover:shadow-[0_12px_40px_-10px_rgba(20,175,129,0.15)] transition-all duration-300"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-[0.12] pointer-events-none flex items-end justify-end p-4">
              <Globe className="w-full h-full text-[#14af81]" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#14af81]/10 flex items-center justify-center text-[#14af81] mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B0918] mb-1">United Kingdom Studio</h3>
              <p className="text-sm font-semibold text-[#0B0918]">Sheffield, United Kingdom</p>
              <p className="text-xs text-[#6B697D] mt-2">
                Nexverse Studio — Product strategy, UI/UX architecture &amp; commercial management.
              </p>
              <span className="inline-block mt-4 text-[10px] font-mono text-[#14af81] bg-[#14af81]/10 px-2.5 py-1 rounded-full border border-[#14af81]/20">
                GMT / BST Time Zone
              </span>
            </div>
          </motion.div>

          {/* Pakistan Hub */}
          <motion.div
            className="p-8 rounded-3xl bg-white border border-[#e8e6f0] shadow-[0_4px_30px_-8px_rgba(0,0,0,0.07)] relative overflow-hidden group hover:border-[#5B8DEF]/30 hover:shadow-[0_12px_40px_-10px_rgba(91,141,239,0.15)] transition-all duration-300"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-[0.12] pointer-events-none flex items-end justify-end p-4">
              <Globe className="w-full h-full text-[#5B8DEF]" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#5B8DEF]/10 flex items-center justify-center text-[#5B8DEF] mb-5">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0B0918] mb-1">Pakistan Engineering Hub</h3>
              <p className="text-sm font-semibold text-[#0B0918]">Lahore, Pakistan</p>
              <p className="text-xs text-[#6B697D] mt-2">
                DevCraft Development Center — Full-stack engineering, mobile dev &amp; 24/7 support.
              </p>
              <span className="inline-block mt-4 text-[10px] font-mono text-[#5B8DEF] bg-[#5B8DEF]/10 px-2.5 py-1 rounded-full border border-[#5B8DEF]/20">
                PKT Time Zone
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 3: Contact Form (Dark, Full-Width)                       */
/* ------------------------------------------------------------------ */
type FormMode = "quote" | "consultation";

function ContactFormSection() {
  const [mode, setMode] = useState<FormMode>("quote");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams();

  // Auto-switch tab and scroll based on ?type= URL param
  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "consultation") {
      setMode("consultation");
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else if (type === "quote") {
      setMode("quote");
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [searchParams]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      ref={sectionRef}
      id="consultation"
      className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10"
    >
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block mb-3">
          02 // Get In Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-[var(--font-display)] max-w-2xl leading-tight">
          Choose how you&apos;d like to connect.
        </h2>
        <p className="mt-4 text-sm text-[#A4A2B2] max-w-xl">
          Request a quote if you know the scope, or book a consultation if you&apos;d like to talk
          it through first.
        </p>
      </div>

      {/* Mode Toggle */}
      <div className="flex items-center gap-2 mb-10 p-1 rounded-full border border-white/10 bg-white/[0.03] w-fit">
        {(["quote", "consultation"] as FormMode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold font-mono transition-all duration-300 ${
              mode === m
                ? "bg-[#18cb96] text-[#06120E] shadow-[0_0_20px_rgba(24,203,150,0.3)]"
                : "text-[#8B90A6] hover:text-white"
            }`}
          >
            {m === "quote" ? "Request a Quote" : "Book a Consultation"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-3xl border border-[#18cb96]/30 bg-[#18cb96]/5 p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#18cb96]/15 border border-[#18cb96]/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#18cb96]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message received.</h3>
                <p className="text-sm text-[#A4A2B2] max-w-sm mx-auto">
                  We&apos;ll respond from whichever office is active — typically within 4 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key={mode}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/15 bg-[#090D18]/95 p-8 sm:p-10 shadow-2xl space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono text-[#8B90A6] uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder-[#6B697D] focus:border-[#18cb96]/50 focus:outline-none focus:ring-1 focus:ring-[#18cb96]/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#8B90A6] uppercase tracking-wider mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder-[#6B697D] focus:border-[#18cb96]/50 focus:outline-none focus:ring-1 focus:ring-[#18cb96]/30 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono text-[#8B90A6] uppercase tracking-wider mb-2">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder-[#6B697D] focus:border-[#18cb96]/50 focus:outline-none focus:ring-1 focus:ring-[#18cb96]/30 transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  {mode === "quote" && (
                    <div>
                      <label className="block text-[10px] font-mono text-[#8B90A6] uppercase tracking-wider mb-2">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-sm text-white focus:border-[#18cb96]/50 focus:outline-none focus:ring-1 focus:ring-[#18cb96]/30 transition-colors"
                      >
                        <option value="" className="bg-[#090D18]">Select range</option>
                        <option value="under-5k" className="bg-[#090D18]">Under £5,000</option>
                        <option value="5k-15k" className="bg-[#090D18]">£5,000 – £15,000</option>
                        <option value="15k-50k" className="bg-[#090D18]">£15,000 – £50,000</option>
                        <option value="50k-plus" className="bg-[#090D18]">£50,000+</option>
                      </select>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#8B90A6] uppercase tracking-wider mb-2">
                    {mode === "quote" ? "Project Brief *" : "What Would You Like to Discuss? *"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder-[#6B697D] focus:border-[#18cb96]/50 focus:outline-none focus:ring-1 focus:ring-[#18cb96]/30 transition-colors resize-none"
                    placeholder={
                      mode === "quote"
                        ? "Describe what you're building — platform type, key features, integrations, timeline..."
                        : "What stage are you at? What challenges are you facing? We'll talk through the rest."
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-halo w-full px-6 py-4 rounded-full text-sm font-bold text-[#06120E] inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {mode === "quote" ? "Send Quote Request" : "Book Free Consultation"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[11px] text-[#6B697D] font-mono">
                  No spam. No obligation. Typically responded to in under 4 hours.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Why Contact Us */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-[10px] font-mono text-[#8B90A6] uppercase tracking-widest font-bold mb-6">
            What happens next:
          </div>

          {[
            {
              step: "01",
              title: "You send us the brief",
              body: "Tell us what you're building, even if it's just an idea. We don't need a full spec to start.",
            },
            {
              step: "02",
              title: "We review and respond",
              body: "Our team reviews your message and gets back to you within 4 hours from whichever office is active.",
            },
            {
              step: "03",
              title: "Free discovery call",
              body: "We'll schedule a no-obligation call to scope the project, clarify requirements, and answer any questions.",
            },
            {
              step: "04",
              title: "Transparent proposal",
              body: "You receive a clear, honest quote with timeline, deliverables, and pricing — no hidden costs.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              className="flex gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-[#18cb96]/20 hover:bg-white/5 transition-all duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-8 h-8 rounded-xl bg-[#18cb96]/10 border border-[#18cb96]/20 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-black font-mono text-[#18cb96]">{item.step}</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                <p className="text-xs text-[#A4A2B2] leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 4: Trust Signals (Light Section)                         */
/* ------------------------------------------------------------------ */
function TrustSignals() {
  const signals = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Honest, Fixed Scoping",
      body: "No scope creep, no hidden charges. We define deliverables clearly before a single line of code is written.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Production Track Record",
      body: "We build and maintain our own live platforms. Our clients benefit from battle-tested patterns and production experience.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Long-Term Partnership",
      body: "We don't disappear at launch. Every engagement includes ongoing maintenance, monitoring, and scaling support.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Response Coverage",
      body: "Two offices across time zones means critical issues are addressed around the clock, not just 9-to-5.",
    },
  ];

  return (
    <section className="py-28 bg-[#F5F7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#14af81] tracking-wider font-bold bg-[#14af81]/10 px-3.5 py-1.5 rounded-full border border-[#14af81]/25 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why DevCraft</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0918] font-[var(--font-display)] max-w-2xl leading-tight mt-4">
            What makes us different from a typical agency.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {signals.map((signal, idx) => (
            <motion.div
              key={signal.title}
              className="p-8 rounded-3xl bg-white border border-[#e8e6f0] shadow-[0_4px_30px_-8px_rgba(0,0,0,0.07)] relative overflow-hidden hover:border-[#14af81]/30 hover:shadow-[0_12px_40px_-10px_rgba(20,175,129,0.12)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-10 h-10 rounded-2xl bg-[#14af81]/10 flex items-center justify-center text-[#14af81] mb-4">
                {signal.icon}
              </div>
              <h3 className="text-base font-bold text-[#0B0918] mb-2 font-[var(--font-display)]">
                {signal.title}
              </h3>
              <p className="text-sm text-[#444256] leading-relaxed">{signal.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Root                                                         */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0B0918]">
        <ScrollProgressBar />
        <ContactHero />
        <OfficeLocations />
        <ContactFormSection />
        <TrustSignals />
      </div>
    </MotionConfig>
  );
}
