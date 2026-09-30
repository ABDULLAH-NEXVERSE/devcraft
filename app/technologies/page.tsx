"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
import { technologiesData } from "@/data/technologiesData";
import { TechLogo } from "@/components/icons/TechLogos";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  Cpu,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Layers,
  Globe,
  Smartphone,
  Server,
  Code2,
  Zap,
  ShieldCheck,
  TrendingUp,
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

/* Category icon map */
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Frontend Development": <Globe className="w-5 h-5" />,
  "Backend & Systems Architecture": <Server className="w-5 h-5" />,
  "Mobile App Development": <Smartphone className="w-5 h-5" />,
  "CMS & Web Platforms": <Layers className="w-5 h-5" />,
  "AI & Machine Learning": <Zap className="w-5 h-5" />,
  "Infrastructure & Deployment": <ShieldCheck className="w-5 h-5" />,
  "UI/UX & Product Design": <Code2 className="w-5 h-5" />,
  "Growth & Technical SEO": <TrendingUp className="w-5 h-5" />,
};

/* ------------------------------------------------------------------ */
/*  Movement 1: Cinematic Stack Hero                                  */
/* ------------------------------------------------------------------ */
function TechHero() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#18cb96]/8 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#5B8DEF]/6 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Telemetry Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18cb96] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#18cb96]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold">
            Engineering Stack // Battle-Tested In Production
          </span>
        </div>
        <div className="text-xs font-mono text-[#8B90A6]">
          {technologiesData.reduce((acc, cat) => acc + cat.items.length, 0)} TECHNOLOGIES &bull; {technologiesData.length} DOMAINS
        </div>
      </div>

      {/* Main Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Typography */}
        <div className="lg:col-span-7 space-y-8">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-[var(--font-display)] leading-[1.04] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Selected technologies,
            <br />
            <span className="text-gradient-emerald">applied with intent.</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-[#A4A2B2] font-[var(--font-body)] leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            We don&apos;t chase fads or force every problem into a single framework. We vet and
            select modern, battle-tested technologies suited to your platform&apos;s concurrency,
            speed, and maintenance requirements.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="btn-primary-halo px-6 py-3 rounded-full text-xs font-bold text-[#06120E] inline-flex items-center gap-2"
            >
              <span>Discuss Your Stack</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="btn-secondary-halo px-5 py-3 rounded-full text-xs font-mono text-white inline-flex items-center gap-1.5"
            >
              <span>View Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#18cb96]" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Stack Domain Matrix */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-3xl border border-white/15 bg-[#090D18]/95 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Ghost watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.10]">
              <Cpu className="w-64 h-64 text-[#18cb96]" />
            </div>

            <div className="relative z-10">
              <div className="text-[10px] font-mono text-[#8B90A6] uppercase tracking-widest mb-4 font-bold">
                Stack Domains:
              </div>
              <div className="space-y-2">
                {technologiesData.map((cat, idx) => (
                  <div
                    key={cat.title}
                    className="flex items-center justify-between py-2 border-b border-white/[0.06] last:border-0"
                  >
                    <div className="flex items-center gap-2.5 text-xs text-[#D1CFDC]">
                      <span className="text-[#18cb96]/70">
                        {CATEGORY_ICONS[cat.title] ?? <Cpu className="w-4 h-4" />}
                      </span>
                      <span className="font-mono">{cat.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8B90A6]">
                      {cat.items.length} tech{cat.items.length > 1 ? "s" : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 2: Interactive Category Explorer (Light Section)         */
/* ------------------------------------------------------------------ */
function CategoryExplorer() {
  const [activeCategory, setActiveCategory] = useState(0);

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
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#14af81] tracking-wider font-bold bg-[#14af81]/10 px-3.5 py-1.5 rounded-full border border-[#14af81]/25 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Stack Explorer</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0918] font-[var(--font-display)] max-w-2xl leading-tight mt-4">
            Deep-dive each domain, layer by layer.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Category Selector */}
          <div className="lg:col-span-4 space-y-2">
            {technologiesData.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${
                  activeCategory === idx
                    ? "bg-[#14af81]/10 border-[#14af81]/30 shadow-[0_4px_20px_-6px_rgba(20,175,129,0.2)]"
                    : "bg-white border-[#e8e6f0] hover:border-[#14af81]/20 hover:bg-[#14af81]/5"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeCategory === idx
                      ? "bg-[#14af81]/15 text-[#14af81]"
                      : "bg-[#f0f0f5] text-[#6B697D]"
                  }`}
                >
                  {CATEGORY_ICONS[cat.title] ?? <Cpu className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className={`text-xs font-bold truncate ${
                      activeCategory === idx ? "text-[#0B0918]" : "text-[#444256]"
                    }`}
                  >
                    {cat.title}
                  </div>
                  <div className="text-[10px] text-[#6B697D] font-mono">
                    {cat.items.length} technologies
                  </div>
                </div>
                {activeCategory === idx && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#14af81] flex-shrink-0" />
                )}
              </button>
            ))}
          </div>

          {/* Right: Tech Item Grid */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category Description */}
                <div className="mb-6 p-6 rounded-2xl bg-[#0B0918] border border-white/10">
                  <h3 className="text-lg font-bold text-white font-[var(--font-display)] mb-2">
                    {technologiesData[activeCategory]?.title}
                  </h3>
                  <p className="text-sm text-[#A4A2B2]">
                    {technologiesData[activeCategory]?.description}
                  </p>
                </div>

                {/* Technology Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technologiesData[activeCategory]?.items.map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      className="p-5 rounded-2xl bg-white border border-[#e8e6f0] hover:border-[#14af81]/30 hover:shadow-[0_8px_30px_-10px_rgba(20,175,129,0.15)] transition-all duration-300 flex flex-col justify-between"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#f5f5f8] border border-[#e8e6f0] p-1.5 flex items-center justify-center shrink-0">
                              <TechLogo name={tech.name} className="w-5 h-5" />
                            </div>
                            <h4 className="text-sm font-bold text-[#0B0918] font-mono">
                              {tech.name}
                            </h4>
                          </div>
                          {tech.badge && (
                            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#14af81]/12 text-[#14af81] border border-[#14af81]/20 shrink-0">
                              {tech.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#444256] leading-relaxed">
                          {tech.whatWeUseItFor}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#f0f0f5] flex items-center gap-1.5 text-[10px] font-mono text-[#14af81]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Production Battle-Tested</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 3: Full Dark Grid — All Tech at a Glance                */
/* ------------------------------------------------------------------ */
function FullStackGrid() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block mb-3">
          02 // Complete Stack Reference
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-[var(--font-display)] max-w-2xl leading-tight">
          Every tool, vetted and production-proven.
        </h2>
        <p className="mt-4 text-sm text-[#A4A2B2] max-w-xl">
          No technology here was chosen for buzzword appeal. Each is deployed in live systems for
          DevCraft clients or our own proprietary platforms.
        </p>
      </div>

      <div className="space-y-10">
        {technologiesData.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="rounded-3xl border border-white/10 bg-[#090D18]/80 p-8 sm:p-10 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category ghost icon */}
            <div className="absolute right-8 top-8 text-[#18cb96]/[0.04] pointer-events-none">
              <div className="w-20 h-20">
                {CATEGORY_ICONS[category.title] ?? <Cpu className="w-20 h-20" />}
              </div>
            </div>

            <div className="relative z-10 mb-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#18cb96]/10 border border-[#18cb96]/20 flex items-center justify-center text-[#18cb96] shrink-0">
                {CATEGORY_ICONS[category.title] ?? <Cpu className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-[var(--font-display)]">
                  {category.title}
                </h3>
                <p className="text-xs text-[#A4A2B2] mt-1">{category.description}</p>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((tech) => (
                <div
                  key={tech.name}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-[#18cb96]/30 hover:bg-white/8 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shrink-0 group-hover:border-[#18cb96]/40 group-hover:bg-[#18cb96]/10 transition-colors">
                          <TechLogo name={tech.name} className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#18cb96] transition-colors font-mono">
                          {tech.name}
                        </h4>
                      </div>
                      {tech.badge && (
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#18cb96]/15 text-[#18cb96] border border-[#18cb96]/20 shrink-0">
                          {tech.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#A4A2B2] leading-relaxed">{tech.whatWeUseItFor}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#18cb96]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Production Battle-Tested</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 4: Stack Selection Manifesto (Light Section)             */
/* ------------------------------------------------------------------ */
function StackManifesto() {
  const principles = [
    {
      num: "01",
      title: "Right Tool for the Problem",
      body: "We evaluate concurrency requirements, team maintainability, and long-term costs before choosing any framework. No forced fits.",
    },
    {
      num: "02",
      title: "Battle-Tested Before Deployed",
      body: "Every technology in our stack is already running in production — either in a client system or in one of our own live platforms.",
    },
    {
      num: "03",
      title: "Stack Transparency",
      body: "We document every architectural decision. You always know what's under the hood and why it was chosen.",
    },
    {
      num: "04",
      title: "No Vendor Lock-In",
      body: "We architect for portability. You retain full ownership, full access, and full ability to switch vendors as your business scales.",
    },
  ];

  return (
    <section className="py-28 bg-[#F5F7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#14af81] tracking-wider font-bold bg-[#14af81]/10 px-3.5 py-1.5 rounded-full border border-[#14af81]/25 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Stack Selection Philosophy</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0918] font-[var(--font-display)] max-w-2xl leading-tight mt-4">
            Why our stack is different from typical agencies.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={p.num}
              className="p-8 rounded-3xl bg-white border border-[#e8e6f0] shadow-[0_4px_30px_-8px_rgba(0,0,0,0.07)] relative overflow-hidden hover:border-[#14af81]/30 hover:shadow-[0_12px_40px_-10px_rgba(20,175,129,0.12)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute right-6 top-4 text-7xl font-black text-[#14af81]/[0.06] font-mono pointer-events-none select-none">
                {p.num}
              </div>
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-mono text-[#14af81] font-bold tracking-widest uppercase">
                  Principle {p.num}
                </span>
                <h3 className="text-lg font-bold text-[#0B0918] font-[var(--font-display)]">
                  {p.title}
                </h3>
                <p className="text-sm text-[#444256] leading-relaxed">{p.body}</p>
              </div>
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
export default function TechnologiesPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0B0918]">
        <ScrollProgressBar />
        <TechHero />
        <CategoryExplorer />
        <FullStackGrid />
        <StackManifesto />
        <div className="px-6 pb-28 max-w-7xl mx-auto border-t border-white/10 pt-16">
          <ContactSection />
        </div>
      </div>
    </MotionConfig>
  );
}
