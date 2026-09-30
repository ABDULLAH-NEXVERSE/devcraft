"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
import { companyData, companyTeam, yearsInOperation } from "@/data/companyData";
import {
  MapPin,
  ArrowRight,
  Clock,
  Globe,
  Code2,
  ShieldCheck,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

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
/*  Animated Number Counter                                           */
/* ------------------------------------------------------------------ */
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / (1400 / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 1: Cinematic Identity Hero                               */
/* ------------------------------------------------------------------ */
function AboutHero() {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#18cb96]/8 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#5B8DEF]/6 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Telemetry Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-16">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18cb96] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#18cb96]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold">
            DevCraft Identity // The Company Behind the Code
          </span>
        </div>
        {/* <div className="text-xs font-mono text-[#8B90A6]">
          SHEFFIELD, UK &bull; LAHORE, PK &bull; FOLLOW-THE-SUN
        </div> */}
      </div>

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left: Typographic declaration */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-[var(--font-display)] leading-[1.04] text-white">
              Two teams.
              <br />
              <span className="text-gradient-emerald">One standard.</span>
              <br />
              <span className="text-white/60 text-3xl sm:text-4xl md:text-5xl">
                Around the clock.
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-[#A4A2B2] font-[var(--font-body)] leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {companyData.primaryCorporateStatement}
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
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="btn-secondary-halo px-5 py-3 rounded-full text-xs font-mono text-white inline-flex items-center gap-1.5"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#18cb96]" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Stats Orbital Panel */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-3xl border border-white/15 bg-[#090D18]/95 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.10]">
              <span className="text-[120px] font-black text-white font-mono select-none">DC</span>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-5">
              {[
                { value: yearsInOperation, suffix: "+", label: "Years Active", color: "#18cb96" },
                { value: 2, suffix: "", label: "Global Hubs", color: "#ffffff" },
                { value: companyTeam.length, suffix: "", label: "Core Leads", color: "#ffffff" },
                { value: 99, suffix: "%", label: "Uptime SLA", color: "#18cb96" },
              ].map((stat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.04] border border-white/8">
                  <div
                    className="text-3xl sm:text-4xl font-extrabold font-mono mb-1"
                    style={{ color: stat.color }}
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-[#8B90A6]">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-6 pt-6 border-t border-white/8 flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#18cb96] shrink-0" />
              <p className="text-xs text-[#A4A2B2] font-[var(--font-body)]">
                Follow-the-Sun model — when UK winds down, Lahore continues.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 2: Follow-The-Sun Timeline (Light Section)              */
/* ------------------------------------------------------------------ */
function FollowTheSunSection() {
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
            <span>Follow-The-Sun Delivery Model</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0918] font-[var(--font-display)] leading-tight max-w-3xl mx-auto mt-4">
            {companyData.twoTeamModel.headline}
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#444256] max-w-2xl mx-auto leading-relaxed">
            {companyData.twoTeamModel.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* UK Hub */}
          <motion.div
            className="relative p-8 rounded-3xl bg-white border border-[#e8e6f0] shadow-[0_4px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden"
            whileHover={{ y: -4, boxShadow: "0 20px 60px -15px rgba(20,175,129,0.15)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute right-0 bottom-0 w-52 h-52 opacity-[0.12] pointer-events-none flex items-end justify-end p-4">
              <Globe className="w-full h-full text-[#14af81]" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14af81]/10 border border-[#14af81]/20">
                <div className="w-2 h-2 rounded-full bg-[#14af81] animate-pulse" />
                <span className="text-xs font-mono text-[#14af81] font-bold">GMT/BST Active</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#14af81]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#14af81]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B0918] font-[var(--font-display)]">
                    United Kingdom Hub
                  </h3>
                  <p className="text-xs text-[#6B697D]">Sheffield, United Kingdom</p>
                </div>
              </div>

              <div className="text-xs font-mono font-semibold text-[#14af81] bg-[#14af81]/8 px-3 py-1.5 rounded-lg inline-block">
                {companyData.twoTeamModel.ukOffice.lead}
              </div>

              <p className="text-sm text-[#444256] leading-relaxed">
                {companyData.twoTeamModel.ukOffice.focus}. Operating on UK time, leading direct
                client communications, discovery wireframes, brand-aligned interfaces, and
                strategic milestones.
              </p>

              <div className="pt-3 border-t border-[#e8e6f0] grid grid-cols-2 gap-3">
                {["Client Comms", "UI/UX Design", "Architecture", "Strategy"].map((cap) => (
                  <div key={cap} className="flex items-center gap-1.5 text-xs text-[#444256]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14af81] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pakistan Hub */}
          <motion.div
            className="relative p-8 rounded-3xl bg-white border border-[#e8e6f0] shadow-[0_4px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden"
            whileHover={{ y: -4, boxShadow: "0 20px 60px -15px rgba(20,175,129,0.15)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute right-0 bottom-0 w-52 h-52 opacity-[0.12] pointer-events-none flex items-end justify-end p-4">
              <Terminal className="w-full h-full text-[#5B8DEF]" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8DEF]/10 border border-[#5B8DEF]/20">
                <div className="w-2 h-2 rounded-full bg-[#5B8DEF] animate-pulse" />
                <span className="text-xs font-mono text-[#5B8DEF] font-bold">PKT Active</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#5B8DEF]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#5B8DEF]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B0918] font-[var(--font-display)]">
                    Pakistan Engineering Hub
                  </h3>
                  <p className="text-xs text-[#6B697D]">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="text-xs font-mono font-semibold text-[#5B8DEF] bg-[#5B8DEF]/8 px-3 py-1.5 rounded-lg inline-block">
                {companyData.twoTeamModel.pakistanOffice.lead}
              </div>

              <p className="text-sm text-[#444256] leading-relaxed">
                {companyData.twoTeamModel.pakistanOffice.focus}. Delivering full-stack backend
                APIs, mobile development, testing regressions, and 24/7 infrastructure support.
              </p>

              <div className="pt-3 border-t border-[#e8e6f0] grid grid-cols-2 gap-3">
                {["Full-Stack APIs", "Mobile Apps", "Testing", "24/7 Support"].map((cap) => (
                  <div key={cap} className="flex items-center gap-1.5 text-xs text-[#444256]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8DEF] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 24-Hour Delivery Cycle Bar */}
        <div className="rounded-3xl bg-[#0B0918] p-8 sm:p-10 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs font-mono text-[#18cb96] uppercase tracking-widest font-bold mb-6 text-center">
              24-HOUR DELIVERY CYCLE
            </p>
            <div className="relative h-14 rounded-full bg-white/5 border border-white/10 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-[#18cb96]/30 to-[#18cb96]/10 flex items-center justify-center rounded-l-full border-r border-white/10">
                <span className="text-xs font-mono text-[#18cb96] font-bold hidden sm:block">UK Studio &middot; 09:00–18:00 GMT</span>
              </div>
              <div className="absolute left-[38%] top-0 bottom-0 w-[6%] bg-gradient-to-r from-[#18cb96]/20 via-[#52ffcb]/30 to-[#5B8DEF]/20 flex items-center justify-center z-10">
                <Zap className="w-3 h-3 text-white" />
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-[58%] bg-gradient-to-l from-[#5B8DEF]/30 to-[#5B8DEF]/10 flex items-center justify-center rounded-r-full">
                <span className="text-xs font-mono text-[#5B8DEF] font-bold hidden sm:block">PK Hub &middot; 14:00–03:00 PKT</span>
              </div>
            </div>
            <p className="text-center text-xs text-[#8B90A6] mt-4 font-mono">
              Seamless handoff window — your project is always moving forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 3: Team Roster (Dark Section)                            */
/* ------------------------------------------------------------------ */
function TeamRosterSection() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block mb-3">
          02 // The People
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-[var(--font-display)] max-w-2xl leading-tight">
          The {companyTeam.length}-person leadership roster
          <span className="text-gradient-emerald"> driving every delivery.</span>
        </h2>
        <p className="mt-6 text-sm sm:text-base text-[#A4A2B2] max-w-xl leading-relaxed">
          Leadership across our UK and Pakistan offices overseeing every client sprint.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Selectors */}
        <div className="lg:col-span-5 space-y-3">
          {companyTeam.map((member, idx) => (
            <button
              key={member.name}
              onClick={() => setActiveTeamMember(idx)}
              className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${activeTeamMember === idx
                  ? "bg-[#18cb96]/10 border-[#18cb96]/40 shadow-[0_0_30px_rgba(24,203,150,0.12)]"
                  : "bg-white/[0.03] border-white/8 hover:border-white/20 hover:bg-white/5"
                }`}
            >
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#18cb96]/10 border border-[#18cb96]/20 flex-shrink-0 flex items-center justify-center">
                {member.avatar ? (
                  <Image src={member.avatar} alt={member.name} fill sizes="56px" className="object-cover" />
                ) : (
                  <span className="text-lg font-bold font-mono text-[#18cb96]">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white truncate">{member.name}</div>
                <div className="text-xs text-[#18cb96] font-mono truncate">{member.role}</div>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-2.5 h-2.5 text-[#8B90A6]" />
                  <span className="text-[10px] text-[#8B90A6]">{member.location}</span>
                </div>
              </div>
              {activeTeamMember === idx && (
                <div className="w-2 h-2 rounded-full bg-[#18cb96] flex-shrink-0" />
              )}
            </button>
          ))}
        </div>

        {/* Right: Detail Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTeamMember}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/15 bg-[#090D18]/95 p-8 sm:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute right-6 top-6 text-[160px] font-black text-white/[0.03] font-mono leading-none pointer-events-none select-none">
                {companyTeam[activeTeamMember]?.name.split(" ").map((n) => n[0]).join("")}
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-6">
                  <div className="relative w-24 h-24 rounded-3xl overflow-hidden bg-[#18cb96]/10 border border-[#18cb96]/25 flex-shrink-0 flex items-center justify-center">
                    {companyTeam[activeTeamMember]?.avatar ? (
                      <Image
                        src={companyTeam[activeTeamMember].avatar!}
                        alt={companyTeam[activeTeamMember].name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold font-mono text-[#18cb96]">
                        {companyTeam[activeTeamMember]?.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-[var(--font-display)]">
                      {companyTeam[activeTeamMember]?.name}
                    </h3>
                    <div className="text-sm font-mono text-[#18cb96] mt-1">
                      {companyTeam[activeTeamMember]?.role}
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <MapPin className="w-3 h-3 text-[#8B90A6]" />
                      <span className="text-xs text-[#8B90A6]">
                        {companyTeam[activeTeamMember]?.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#D1CFDC] leading-relaxed font-[var(--font-body)]">
                  {companyTeam[activeTeamMember]?.bio}
                </p>

                <div className="pt-5 border-t border-white/10">
                  <div className="text-[11px] font-mono text-[#8B90A6] uppercase font-bold mb-3 tracking-wider">
                    Core Specialization:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {companyTeam[activeTeamMember]?.specialization.split(", ").map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[#18cb96]/10 border border-[#18cb96]/20 text-[#80E2C5]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 4: Engineering Manifesto (Light Section)                 */
/* ------------------------------------------------------------------ */
function ManifestoSection() {
  return (
    <section className="py-28 bg-[#F5F7F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#14af81] tracking-wider font-bold bg-[#14af81]/10 px-3.5 py-1.5 rounded-full border border-[#14af81]/25 mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Engineering Manifesto</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0918] font-[var(--font-display)] max-w-2xl leading-tight mt-4">
            How we build software — and why it matters.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {companyData.manifesto.map((principle, idx) => (
            <motion.div
              key={principle.number}
              className="relative p-8 rounded-3xl bg-white border border-[#e8e6f0] shadow-[0_4px_30px_-8px_rgba(0,0,0,0.07)] overflow-hidden group hover:border-[#14af81]/30 hover:shadow-[0_12px_40px_-10px_rgba(20,175,129,0.12)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute right-6 top-4 text-7xl font-black text-[#14af81]/[0.06] font-mono pointer-events-none select-none">
                {principle.number}
              </div>
              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-mono text-[#14af81] font-bold tracking-widest uppercase">
                  Principle {principle.number}
                </span>
                <h3 className="text-lg font-bold text-[#0B0918] font-[var(--font-display)] leading-snug">
                  {principle.title}
                </h3>
                <p className="text-sm text-[#444256] leading-relaxed">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 5: Company Pillars (Dark Section)                        */
/* ------------------------------------------------------------------ */
function PillarsSection() {
  const icons = [
    <Clock key="clock" className="w-5 h-5" />,
    <Layers key="layers" className="w-5 h-5" />,
    <Code2 key="code" className="w-5 h-5" />,
    <ShieldCheck key="shield" className="w-5 h-5" />,
  ];

  return (
    <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block mb-3">
          03 // Why DevCraft
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-[var(--font-display)] max-w-3xl leading-tight">
          The pillars that separate us from generic agencies.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {companyData.pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            className="rounded-3xl border border-white/10 bg-[#090D18]/80 p-8 relative overflow-hidden hover:border-[#18cb96]/30 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute right-6 bottom-6 text-4xl font-black text-[#18cb96]/[0.06] font-mono pointer-events-none select-none uppercase">
              {pillar.metric}
            </div>

            <div className="relative z-10 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#18cb96]/10 border border-[#18cb96]/20 flex items-center justify-center text-[#18cb96] mb-4">
                {icons[idx] ?? icons[0]}
              </div>
              {pillar.tagline && (
                <span className="text-[10px] font-mono text-[#52ffcb] uppercase tracking-widest font-bold">
                  {pillar.tagline}
                </span>
              )}
              <h3 className="text-xl font-bold text-white font-[var(--font-display)]">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#A4A2B2] leading-relaxed">{pillar.description}</p>

              <div className="pt-3 flex items-center gap-2 text-xs font-mono text-[#18cb96] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-8 h-px bg-[#18cb96] inline-block" />
                <span>{pillar.metric}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Root                                                         */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0B0918]">
        <ScrollProgressBar />
        <AboutHero />
        <FollowTheSunSection />
        <TeamRosterSection />
        <ManifestoSection />
        <PillarsSection />
        <div className="px-6 pb-28 max-w-7xl mx-auto border-t border-white/10 pt-16">
          <ContactSection />
        </div>
      </div>
    </MotionConfig>
  );
}
