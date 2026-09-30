"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring, MotionConfig } from "framer-motion";
import { industriesData, type IndustryDetail } from "@/data/industriesData";
import { FALLBACK_IMG, onImgError } from "@/components/dc/Kit";
import {
  Truck,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Lock,
  Server,
  Smartphone,
  FileCheck2,
  ExternalLink,
  Layers,
  Radio,
  Clock,
  Compass,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Scroll Progress Bar Component                                     */
/* ------------------------------------------------------------------ */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#18cb96] via-[#52ffcb] to-[#5B8DEF] origin-left z-50 pointer-events-none"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Icon Mapping for Industries                                       */
/* ------------------------------------------------------------------ */
const ICON_MAP: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />,
};

/* Regulatory standards per domain */
const REGULATORY_MATRIX = [
  {
    domain: "Logistics & Fleet Ops",
    mandate: "Real-Time Telemetry & Cross-Border Customs",
    standard: "Sub-Second GPS Geofencing, WebSocket Telemetry, Multi-Currency Escrow Settlement",
    scope: "Field driver applications operating under erratic mobile connectivity with automated dispatch.",
    primarySystem: "NexEats & NexRider Fleet // Kamraj Global",
    slug: "logistics-delivery",
  },
  {
    domain: "Procurement & Compliance",
    mandate: "British Standard BS 7858 & SIA 5-Year Vetting",
    standard: "Continuous SIA Licence Monitoring, 5-Year Employment Verification, Role-Based Access Control",
    scope: "Auditable candidate screening engines slashing multi-week vetting delays to under 3 days.",
    primarySystem: "ProRota Vetting Suite // Duralean UK",
    slug: "procurement-compliance",
  },
  {
    domain: "E-Commerce & Retail",
    mandate: "PSD2 SCA & High-Concurrency Marketplace Payouts",
    standard: "PCI-DSS Level 1 Encryption, Automated Multi-Vendor Escrow Splits, Edge Image Optimization",
    scope: "Headless ordering storefronts engineered for sub-second page loads during peak checkout traffic.",
    primarySystem: "NexEats Ordering Engine // Jay Samuel Studio",
    slug: "ecommerce-retail",
  },
  {
    domain: "Fintech & Advisory",
    mandate: "Cryptographic Data Protection & Banking Gateways",
    standard: "Hardware-Backed Key Vaults, Automated Recurring Ledger Billing, End-to-End Audit Logs",
    scope: "Institutional financial advisory portals and usage-based automated subscription billing pipelines.",
    primarySystem: "Tal-encia Advisory // ProCRM Enterprise",
    slug: "fintech",
  },
  {
    domain: "Healthcare & Clinical",
    mandate: "HIPAA, GDPR Article 9 & Clinical Rostering",
    standard: "Encrypted Biometric Check-ins, Enhanced DBS Verification, Shift Constraint Solver",
    scope: "Multi-ward healthcare staff scheduling resolving complex union constraints with zero administrative chaos.",
    primarySystem: "ProRota Healthcare // Duralean Cleanroom",
    slug: "healthcare",
  },
];

/* ------------------------------------------------------------------ */
/*  Movement 1: The Kinetic Sector Horizon (Interactive Spatial Hero) */
/*  (5 towering vertical monoliths that expand smoothly on hover)     */
/* ------------------------------------------------------------------ */
function KineticSectorHorizon({ industries }: { industries: IndustryDetail[] }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section className="relative pt-36 sm:pt-44 pb-20 px-6 max-w-7xl mx-auto">
      {/* Top Telemetry Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-12">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18cb96] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#18cb96]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold">
            Sector Cartography // 5 Regulated Verticals
          </span>
        </div>

        <div className="text-xs font-mono text-[#8B90A6]">
          ZERO GENERIC CODE &bull; FIELD-TESTED DOMAIN BLUEPRINTS
        </div>
      </div>

      {/* Hero Headline */}
      <div className="max-w-5xl mb-16">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-[var(--font-display)] leading-[1.02] text-white">
          Software that speaks <br />
          <span className="text-gradient-emerald">the domain.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base sm:text-lg text-[#A4A2B2] font-[var(--font-body)] leading-relaxed">
          Generic web agencies stumble when confronted with BS 7858 compliance vetting, low-latency fleet dispatch, or high-concurrency marketplace settlement. DevCraft engineers custom vertical architectures shaped around how each industry actually operates.
        </p>
      </div>

      {/* Interactive Spatial Horizon Monoliths (With rounded-3xl corners & increased image transparency) */}
      <div className="h-[460px] sm:h-[520px] md:h-[580px] w-full flex flex-col md:flex-row rounded-3xl border border-white/15 bg-[#070A12] overflow-hidden shadow-2xl">
        {industries.map((ind, idx) => {
          const isHovered = hoveredIdx === idx;
          const isDefault = hoveredIdx === null && idx === 0;
          const isActive = isHovered || isDefault;

          return (
            <div
              key={ind.slug}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 overflow-hidden cursor-pointer flex flex-col justify-between p-6 sm:p-8 ${
                isActive ? "md:flex-[3] bg-[#0A0F1F]" : "md:flex-[1] bg-[#070A12] hover:bg-[#090D18]"
              }`}
            >
              {/* Atmospheric Background Image with 85-90% TRANSPARENCY (soft, delicate, see-through) */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                  isActive ? "opacity-[0.14]" : "opacity-[0.08]"
                }`}
              >
                <img
                  src={ind.heroImage}
                  alt={ind.title}
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 scale-105"
                  onError={onImgError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/80 to-transparent" />
              </div>

              {/* Top Header of Monolith */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white/40">
                  0{idx + 1}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#18cb96]">
                  {ICON_MAP[ind.icon]}
                </div>
              </div>

              {/* Rotated Vertical Title on Inactive, Expanded Content on Active */}
              <div className="relative z-10">
                {isActive ? (
                  <div className="space-y-4 max-w-lg">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#52ffcb] font-bold block">
                      Vertical Domain Blueprint
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-display)] text-white leading-tight">
                      {ind.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#D1CFDC] leading-relaxed font-[var(--font-body)] line-clamp-3">
                      {ind.shortDesc}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {ind.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-black/60 border border-white/15 text-[#80E2C5]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <a
                        href={`#domain-${ind.slug}`}
                        className="btn-primary-halo px-5 py-2 rounded-full text-xs font-bold text-[#06120E] inline-flex items-center gap-1.5"
                      >
                        <span>Explore Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="text-xs font-mono text-[#A4A2B2] hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Full Specification</span>
                        <ArrowUpRight className="w-3 h-3 text-[#18cb96]" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block">
                    <h3 className="text-xl font-bold font-[var(--font-display)] text-white/60 whitespace-nowrap">
                      {ind.title}
                    </h3>
                    <div className="mt-2 text-[10px] font-mono text-[#8B90A6]">
                      0{idx + 1} // DOMAIN
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 2: Domain Cartography Chapters (Dark Void #0A0E17)       */
/*  (Each of the 5 industries has its own bespoke spatial layout)     */
/* ------------------------------------------------------------------ */
function DomainCartographyChapters({ industries }: { industries: IndustryDetail[] }) {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-40">
      {industries.map((ind, idx) => {
        const isReversed = idx % 2 === 1;

        return (
          <div
            key={ind.slug}
            id={`domain-${ind.slug}`}
            className="pt-16 border-t border-white/10 scroll-mt-28"
          >
            {/* Sector Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div className="flex items-center gap-4">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white/20">
                  0{idx + 1}
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block">
                    Domain Exploration // {ind.slug.toUpperCase()}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold font-[var(--font-display)] text-white mt-1">
                    {ind.title}
                  </h3>
                </div>
              </div>

              <Link
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#52ffcb] hover:underline"
              >
                <span>Read Detailed Vertical Whitepaper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Asymmetric Spatial Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Visual Telemetry Window Column */}
              <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="border border-white/15 bg-[#070A12] shadow-2xl relative overflow-hidden group">
                  {/* Subtle Top Status Bar */}
                  <div className="h-8 bg-[#090D18] border-b border-white/10 px-4 flex items-center justify-between text-[11px] font-mono text-[#8B90A6]">
                    <span>SYS_ARCHITECTURE // {ind.slug}</span>
                    <span className="text-[#18cb96] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18cb96]" />
                      <span>PRODUCTION ACTIVE</span>
                    </span>
                  </div>

                  <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden">
                    <img
                      src={ind.heroImage}
                      alt={ind.title}
                      className="w-full h-full object-cover object-top filter grayscale-[25%] group-hover:grayscale-0 group-hover:scale-104 transition-all duration-700"
                      onError={onImgError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/90 via-transparent to-transparent" />
                  </div>

                  {/* Shipped Systems in this Domain */}
                  <div className="p-6 border-t border-white/10 bg-[#0A0E1A] space-y-3">
                    <span className="text-[11px] font-mono uppercase text-[#8B90A6] tracking-wider block font-bold">
                      Verified Field Deployments in this Vertical:
                    </span>
                    <div className="space-y-2">
                      {ind.proofPoints.map((pp) => (
                        <div
                          key={pp.name}
                          className="flex items-start justify-between gap-4 py-2 border-b border-white/5 last:border-b-0"
                        >
                          <div>
                            <div className="text-xs font-mono font-bold text-white">
                              {pp.name}
                            </div>
                            <div className="text-[11px] text-[#8B90A6] line-clamp-1">
                              {pp.description}
                            </div>
                          </div>
                          <Link
                            href={pp.link}
                            className="text-[10px] font-mono text-[#18cb96] hover:underline shrink-0 flex items-center gap-1"
                          >
                            <span>Case</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Architectural Narrative Column */}
              <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"} space-y-8`}>
                <p className="text-base sm:text-lg text-[#D6D9EA] leading-relaxed font-[var(--font-body)]">
                  {ind.shortDesc}
                </p>

                {/* The Two-Tone Operational Challenge vs DevCraft Architecture */}
                <div className="border border-white/10 bg-[#090D18] divide-y divide-white/10">
                  <div className="p-6 bg-red-500/[0.04]">
                    <span className="text-[11px] font-mono uppercase font-bold text-red-400 tracking-wider block mb-2">
                      The Operational Friction in this Vertical:
                    </span>
                    <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
                      {ind.clientProblem}
                    </p>
                  </div>

                  <div className="p-6 bg-[#18cb96]/[0.05]">
                    <span className="text-[11px] font-mono uppercase font-bold text-[#18cb96] tracking-wider flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>DevCraft Architectural Blueprint:</span>
                    </span>
                    <p className="text-xs sm:text-sm text-[#F6F6F8] leading-relaxed">
                      {ind.devcraftApproach}
                    </p>
                  </div>
                </div>

                {/* Key Verified Deliverables Checklist */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-[#8B90A6] tracking-wider font-bold block">
                    Core Solutions Engineered for {ind.title}:
                  </span>
                  <div className="space-y-2">
                    {ind.keySolutions.map((sol) => (
                      <div key={sol} className="flex items-start gap-3 text-xs sm:text-sm text-[#D1CFDC]">
                        <span className="w-4 h-4 rounded-full bg-[#18cb96]/15 text-[#18cb96] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-[#8B90A6] uppercase tracking-wider block mb-2 font-bold">
                    Primary Production Frameworks &amp; Protocols:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {ind.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 text-[#52ffcb]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 3: The Cross-Industry Regulatory Matrix (LIGHT #ffffff)   */
/*  (Stark precision table with zero cards and generous whitespace)    */
/* ------------------------------------------------------------------ */
function RegulatoryMatrixLight() {
  return (
    <section className="bg-[#ffffff] text-[#0f1117] py-28 md:py-36 border-t border-black/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#10946d] font-bold block mb-2">
            03 // The Regulatory Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-[var(--font-display)] text-[#0f1117] tracking-tight leading-tight">
            Compliance engineered directly into the database schema.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6558] mt-4 font-[var(--font-body)] leading-relaxed">
            In regulated domains, security and compliance cannot be bolted on at launch. We embed audit trails, encryption, and statutory vetting into the data models before a single line of frontend code is written.
          </p>
        </div>

        {/* Full-Bleed Precision Table (No cards) */}
        <div className="border-t border-black/15 divide-y divide-black/15">
          {REGULATORY_MATRIX.map((item, idx) => (
            <div
              key={item.domain}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-black/[0.02] transition-colors -mx-4 px-4"
            >
              {/* Domain & Index */}
              <div className="lg:col-span-3 space-y-1">
                <span className="text-xs font-mono text-[#8B90A6]">
                  0{idx + 1} // DOMAIN
                </span>
                <h3 className="text-xl font-bold font-[var(--font-display)] text-[#0f1117]">
                  {item.domain}
                </h3>
                <span className="text-xs font-mono text-[#10946d] font-bold block">
                  {item.mandate}
                </span>
              </div>

              {/* Engineered Standards */}
              <div className="lg:col-span-5 space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#6B6558] font-bold block">
                  Engineered Architectural Standard:
                </span>
                <p className="text-sm text-[#0f1117] font-medium leading-relaxed">
                  {item.standard}
                </p>
                <p className="text-xs text-[#6B6558] leading-relaxed">
                  {item.scope}
                </p>
              </div>

              {/* Primary System & Link */}
              <div className="lg:col-span-4 lg:text-right space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#6B6558] font-bold block">
                  Primary Live Deployments:
                </span>
                <div className="text-xs font-mono font-bold text-[#0f1117]">
                  {item.primarySystem}
                </div>
                <Link
                  href={`/industries/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#10946d] hover:underline font-bold pt-1"
                >
                  <span>Explore Sector Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 4: Field Operations vs Command Center (SURFACE #F3EFE7)   */
/*  (The physical reality of why generic software fails)              */
/* ------------------------------------------------------------------ */
function FieldRealitySurface() {
  return (
    <section className="bg-[#F3EFE7] text-[#191510] py-28 md:py-36 border-t border-black/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#10946d] font-bold block mb-2">
            04 // The Field Operations Reality
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-[var(--font-display)] text-[#191510] tracking-tight leading-tight">
            Desktop code breaks when taken into the field.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6558] mt-4 font-[var(--font-body)] leading-relaxed">
            Most software agencies design in air-conditioned design studios for 4K desktop screens. Real industry platforms operate under erratic 3G cellular signals, rain on mobile screens, noisy scrap metal yards, and fast-paced restaurant kitchens.
          </p>
        </div>

        {/* Dual-Environment Comparison Architecture */}
        <div className="border border-black/15 bg-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/15">
            {/* Left: The Field Operations Reality */}
            <div className="p-8 sm:p-12 space-y-6 bg-amber-500/[0.03]">
              <div className="flex items-center gap-3 border-b border-black/10 pb-4">
                <Smartphone className="w-5 h-5 text-amber-700" />
                <span className="text-xs font-mono uppercase font-bold text-amber-800 tracking-wider">
                  The Field Reality // Mobile &amp; Edge
                </span>
              </div>

              <h3 className="text-2xl font-bold font-[var(--font-display)] text-[#191510]">
                Unforgiving Edge Conditions
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-[#4A453C] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>
                    <strong>Offline-First Resilience:</strong> Check-ins and GPS coordinates must queue locally when mobile signals drop in basement facilities or remote delivery routes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>
                    <strong>High-Contrast Sunlight Readability:</strong> Delivery riders and scrap yard inspectors require high-contrast UI elements legible under blinding daylight.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <span>
                    <strong>Zero-Friction Biometrics:</strong> FaceID and fingerprint clock-ins eliminate manual PIN entry errors during high-volume shift turnarounds.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: The Operations Command Architecture */}
            <div className="p-8 sm:p-12 space-y-6 bg-[#10946d]/[0.04]">
              <div className="flex items-center gap-3 border-b border-black/10 pb-4">
                <Server className="w-5 h-5 text-[#10946d]" />
                <span className="text-xs font-mono uppercase font-bold text-[#10946d] tracking-wider">
                  The Command Center // Web Portal
                </span>
              </div>

              <h3 className="text-2xl font-bold font-[var(--font-display)] text-[#191510]">
                High-Concurrency Command Portals
              </h3>

              <ul className="space-y-4 text-xs sm:text-sm text-[#191510] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10946d] mt-2 shrink-0" />
                  <span>
                    <strong>Real-Time WebSocket Mesh:</strong> Operations dispatchers view live fleet movements with sub-second telemetry updates and zero manual page refreshes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10946d] mt-2 shrink-0" />
                  <span>
                    <strong>Automated Constraint Solvers:</strong> Shift allocation algorithms instantly match qualified, SIA-vetted staff against complex customer site requirements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10946d] mt-2 shrink-0" />
                  <span>
                    <strong>Exportable Statutory Audit Logs:</strong> Instant CSV and PDF generation for regulatory inspectors and client SLA compliance reporting.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Movement 5: Dual-Shore Engineering Availability & Conversion Callout*/
/* ------------------------------------------------------------------ */
function DualShoreIndustryConversion() {
  const [ukTime, setUkTime] = useState("");
  const [pkTime, setPkTime] = useState("");

  useEffect(() => {
    const update = () => {
      try {
        setUkTime(
          new Date().toLocaleTimeString("en-GB", {
            timeZone: "Europe/London",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
        );
        setPkTime(
          new Date().toLocaleTimeString("en-GB", {
            timeZone: "Asia/Karachi",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
        );
      } catch {
        setUkTime("Active GMT");
        setPkTime("Active PKT");
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#070A12] text-white py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Dual Clocks Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-white/10 pb-12 mb-16">
          <div className="border border-white/10 p-6 bg-white/[0.02] flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#8B90A6] uppercase">
                SHEFFIELD ARCHITECTURE SPRINT // UK
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
                {ukTime || "12:00:00"}
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-[#18cb96]/15 text-[#18cb96] border border-[#18cb96]/30">
              ACTIVE SPRINT
            </span>
          </div>

          <div className="border border-white/10 p-6 bg-white/[0.02] flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#8B90A6] uppercase">
                LAHORE ENGINEERING LAB // PK
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
                {pkTime || "17:00:00"}
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-[#52ffcb]/15 text-[#52ffcb] border border-[#52ffcb]/30">
              CONTINUOUS BUILD
            </span>
          </div>
        </div>

        {/* Conversion Action */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block">
            Scope Your Domain
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-display)] text-white tracking-tight leading-tight">
            Building in a complex or <br />
            <span className="text-gradient-emerald">regulated industry?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A4A2B2] max-w-xl mx-auto leading-relaxed font-[var(--font-body)]">
            Schedule an architectural scoping consultation with our engineering team to review regulatory requirements, hardware integrations, and delivery timelines.
          </p>

          <div className="pt-6 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact?type=industry-scoping"
              className="btn-primary-halo px-8 py-3.5 rounded-full text-sm font-bold text-[#06120E] inline-flex items-center gap-2"
            >
              <span>Schedule Industry Scoping Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="btn-secondary-halo px-7 py-3.5 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2"
            >
              <span>Explore Verified Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Master Industries Page Export                                     */
/* ------------------------------------------------------------------ */
export default function IndustriesPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0A0E17] text-[#F6F6F8] overflow-x-clip selection:bg-[#18cb96] selection:text-[#07070A]">
        <ScrollProgressBar />

        {/* Movement 1: Kinetic Sector Horizon (Interactive Spatial Hero Monoliths) */}
        <KineticSectorHorizon industries={industriesData} />

        {/* Movement 2: Domain Cartography Chapters (Dark Void #0A0E17) */}
        <DomainCartographyChapters industries={industriesData} />

        {/* Movement 3: Cross-Industry Regulatory Matrix (Stark Light Theme #ffffff) */}
        <RegulatoryMatrixLight />

        {/* Movement 4: Field Operations vs Command Center (Surface Light Theme #F3EFE7) */}
        <FieldRealitySurface />

        {/* Movement 5: Dual-Shore Availability Clocks & Conversion Action */}
        <DualShoreIndustryConversion />
      </div>
    </MotionConfig>
  );
}
