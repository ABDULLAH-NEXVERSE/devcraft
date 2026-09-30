"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState, useMemo, useRef, useEffect, type PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  MotionConfig,
} from "framer-motion";
import { portfolioData, type CaseStudyDetail } from "@/data/portfolioData";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FALLBACK_IMG, onImgError } from "@/components/dc/Kit";
import {
  ArrowUpRight,
  ExternalLink,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Activity,
  Check,
  Quote,
  Search,
  ArrowRight,
  Clock,
  Terminal,
  Globe2,
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
/*  Hero Section: The Live Production Ledger & Spatial Focal Filmstrip */
/* ------------------------------------------------------------------ */
function WorkHero({ projects }: { projects: CaseStudyDetail[] }) {
  const [activeFocal, setActiveFocal] = useState(0);
  const focalProject = projects[activeFocal] || projects[0];

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 w-full max-w-[96rem] mx-auto">
      {/* Ambient Radial Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-[#18cb96]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Telemetry Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18cb96] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#18cb96]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold">
            Live Production Ledger // UK &bull; PK &bull; Global
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-[#8B90A6]">
          <span>{projects.length} ENTERPRISE SYSTEMS SHIPPED</span>
          <span className="text-white/40">&bull;</span>
          <span className="text-[#52ffcb]">100% SLA PRODUCTION VERIFIED</span>
        </div>
      </div>

      {/* Typographic Centerpiece - Reduced to balanced, modern size */}
      <div className="max-w-4xl mb-12 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-[var(--font-display)] leading-[1.08] text-white">
          Proof of code.{" "}
          <span className="text-gradient-emerald">Delivered at scale.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#A4A2B2] font-[var(--font-body)] leading-relaxed">
          We engineer platforms that carry the daily operations of businesses — from real-time fleet delivery and AI-driven compliance vetting to multi-continent industrial trading portals.
        </p>
      </div>

      {/* Spatial Focal Matrix - FULL WIDTH & SLIGHTLY LARGER & ROUNDED-3XL CORNERS */}
      <div className="w-full rounded-3xl border border-white/15 bg-[#090D18]/95 p-8 sm:p-12 md:p-14 relative overflow-hidden min-h-[520px] shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {/* Background Ghost Art with HIGH TRANSPARENCY (85-90% transparent, soft, non-clashing) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 pointer-events-none opacity-[0.12] transition-opacity duration-700 overflow-hidden">
          <img
            src={focalProject.heroImage}
            alt={focalProject.title}
            className="w-full h-full object-cover object-center filter grayscale contrast-150 scale-105"
            onError={onImgError}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090D18] via-[#090D18]/80 to-transparent" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Active Focal Spotlight Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#18cb96]/15 border border-[#18cb96]/30 text-[#18cb96] font-bold">
                0{activeFocal + 1} // FOCAL DEPLOYMENT
              </span>
              <span className="text-xs font-mono text-[#8B90A6]">
                {focalProject.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-[var(--font-display)] text-white leading-tight">
              {focalProject.client}: {focalProject.title}
            </h2>

            <p className="text-sm sm:text-base text-[#D1CFDC] leading-relaxed font-[var(--font-body)] max-w-2xl">
              {focalProject.summary}
            </p>

            {focalProject.results && focalProject.results[0] && (
              <div className="pt-2 flex items-center gap-4">
                <div className="text-3xl sm:text-4xl font-mono font-extrabold text-[#18cb96]">
                  {focalProject.results[0].metric}
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#A4A2B2]">
                  {focalProject.results[0].label}
                </div>
              </div>
            )}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/work/${focalProject.slug}`}
                className="btn-primary-halo px-6 py-3 rounded-full text-xs font-bold text-[#06120E] inline-flex items-center gap-2"
              >
                <span>Inspect Technical Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              {focalProject.liveUrl && (
                <a
                  href={focalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-halo px-5 py-3 rounded-full text-xs font-mono text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Launch Live System</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#18cb96]" />
                </a>
              )}
            </div>
          </div>

          {/* Interactive Project Coordinate Filmstrip */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10 space-y-3">
            <div className="text-[11px] font-mono uppercase text-[#8B90A6] tracking-wider mb-2 font-bold">
              FOCAL TRAJECTORY // HOVER OR CLICK TO SHIFT TARGET:
            </div>

            <div className="space-y-1.5">
              {projects.slice(0, 5).map((p, idx) => {
                const isActive = idx === activeFocal;
                return (
                  <button
                    key={p.slug}
                    onClick={() => setActiveFocal(idx)}
                    onMouseEnter={() => setActiveFocal(idx)}
                    className={`w-full text-left py-3 px-4 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#18cb96]/15 border border-[#18cb96]/40 text-white shadow-[0_0_20px_rgba(24,203,150,0.15)]"
                        : "text-[#8B90A6] hover:text-white hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono text-white/40">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-bold font-[var(--font-display)]">
                        {p.client}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-[#18cb96] font-semibold">
                      {p.results && p.results[0] ? p.results[0].metric : p.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 1: The Asymmetric Architecture Viewport Curtain (Dark Void)*/
/*  (Sticky architectural HUD on left, cinematic viewports on right)  */
/* ------------------------------------------------------------------ */
function ArchitectureViewportCurtain({ projects }: { projects: CaseStudyDetail[] }) {
  const [focalIndex, setFocalIndex] = useState(0);
  const featured = projects.slice(0, 4);

  return (
    <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-20">
        <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block mb-3">
          01 // Architectural Deep Dives
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-[var(--font-display)] max-w-3xl leading-tight">
          How each platform was engineered from the foundation up.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Sticky Architectural Spec Sheet HUD */}
        <div className="lg:col-span-5 sticky top-32 space-y-6 hidden lg:block">
          <div className="rounded-3xl border border-white/15 bg-[#090D18] p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-mono text-[#8B90A6]">
                SPEC SHEET // SYSTEM 0{focalIndex + 1} OF 0{featured.length}
              </span>
              <span className="text-xs font-mono text-[#18cb96] font-bold">
                {featured[focalIndex].category}
              </span>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#52ffcb] font-bold block">
                {featured[focalIndex].client}
              </span>

              <h3 className="text-2xl font-bold font-[var(--font-display)] text-white leading-snug">
                {featured[focalIndex].title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed font-[var(--font-body)]">
                {featured[focalIndex].summary}
              </p>

              {/* Challenge vs Solution Summary */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div>
                  <div className="text-[11px] font-mono text-amber-400 uppercase font-bold mb-1">
                    Operational Bottleneck:
                  </div>
                  <div className="text-xs text-[#A4A2B2] line-clamp-2">
                    {featured[focalIndex].challenge}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-[#18cb96] uppercase font-bold mb-1">
                    Engineered Solution:
                  </div>
                  <div className="text-xs text-[#D1CFDC] line-clamp-2">
                    {featured[focalIndex].solution}
                  </div>
                </div>
              </div>

              {/* Quantified Metrics */}
              {featured[focalIndex].results && featured[focalIndex].results.length > 0 && (
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                  {featured[focalIndex].results.slice(0, 2).map((r, i) => (
                    <div key={i}>
                      <div className="text-2xl font-mono font-extrabold text-[#18cb96]">
                        {r.metric}
                      </div>
                      <div className="text-[10px] font-mono text-[#8B90A6]">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Stack Chips */}
              <div className="pt-4 flex flex-wrap gap-1.5">
                {featured[focalIndex].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#52ffcb]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href={`/work/${featured[focalIndex].slug}`}
                  className="w-full py-3 rounded-xl bg-[#18cb96] text-[#06120E] text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-[#52ffcb] transition-colors"
                >
                  <span>Read Full Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Cinematic Viewport Cascade */}
        <div className="lg:col-span-7 space-y-28">
          {featured.map((p, idx) => (
            <div
              key={p.slug}
              onMouseEnter={() => setFocalIndex(idx)}
              className="space-y-4 group"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold font-mono text-white/30">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    {p.client}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#18cb96]">
                  {p.category}
                </span>
              </div>

              {/* Large Viewport Window with Rounded Corners */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#070A12] shadow-2xl">
                <div className="h-7 bg-[#0A0E18] border-b border-white/10 px-4 flex items-center justify-between text-[11px] font-mono text-[#8B90A6]">
                  <span>DEPLOYMENT // {p.slug.toUpperCase()}</span>
                  {p.liveUrl && (
                    <span className="text-[#18cb96] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18cb96] animate-pulse" />
                      <span>LIVE</span>
                    </span>
                  )}
                </div>

                <div className="relative h-[340px] sm:h-[420px] md:h-[480px] w-full overflow-hidden">
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-104 transition-all duration-700"
                    onError={onImgError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17]/85 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Mobile View Summary */}
              <div className="lg:hidden space-y-3 pt-2">
                <h4 className="text-xl font-bold font-[var(--font-display)] text-white">
                  {p.title}
                </h4>
                <p className="text-xs text-[#A4A2B2] leading-relaxed">
                  {p.summary}
                </p>
                <Link
                  href={`/work/${p.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#18cb96] font-bold"
                >
                  <span>Explore Case Study</span>
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
/*  Section 2: The Shipped Register (HIGH-CONTRAST LIGHT THEME #ffffff)*/
/*  (Clean full-bleed horizontal rows - zero cards, zero tabs)        */
/* ------------------------------------------------------------------ */
function ShippedRegisterLight({ projects }: { projects: CaseStudyDetail[] }) {
  const [search, setSearch] = useState("");
  const [hoveredProject, setHoveredProject] = useState<CaseStudyDetail | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const q = search.trim().toLowerCase();
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [projects, search]);

  const activePreview = hoveredProject || filtered[0] || projects[0];

  return (
    <section className="bg-[#ffffff] text-[#0f1117] py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#10946d] font-bold block mb-2">
              02 // The Production Register
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-[var(--font-display)] text-[#0f1117] tracking-tight">
              Every verified system shipped to date.
            </h2>
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-[#8B90A6] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by client, stack, domain..."
              className="w-full pl-9 pr-3 py-2 text-xs font-mono bg-black/[0.04] border border-black/15 text-[#0f1117] placeholder-[#8B90A6] focus:outline-none focus:border-[#10946d]"
            />
          </div>
        </div>

        {/* Full-Bleed Architectural Slit-Scan Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-black/15">
          {/* Main Table Column */}
          <div className="lg:col-span-8 divide-y divide-black/10">
            {filtered.map((p, idx) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                onMouseEnter={() => setHoveredProject(p)}
                className="group py-6 block hover:bg-black/[0.02] transition-colors -mx-4 px-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#8B90A6]">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#10946d]">
                        {p.client}
                      </span>
                      <span className="text-[11px] font-mono text-[#6B6558]">
                        &bull; {p.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-[var(--font-display)] text-[#0f1117] group-hover:text-[#10946d] transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    {p.results && p.results[0] && (
                      <div className="text-right">
                        <div className="text-base font-mono font-bold text-[#0f1117]">
                          {p.results[0].metric}
                        </div>
                        <div className="text-[10px] font-mono text-[#6B6558]">
                          {p.results[0].label}
                        </div>
                      </div>
                    )}
                    <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center text-[#0f1117] group-hover:bg-[#10946d] group-hover:border-[#10946d] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Sticky Architectural Peek Column (Rounded-3xl blueprint frame) */}
          <div className="lg:col-span-4 sticky top-32 hidden lg:block rounded-3xl border border-black/15 bg-[#FAFAF8] p-6 shadow-sm space-y-4 overflow-hidden">
            <div className="flex items-center justify-between border-b border-black/10 pb-2 text-xs font-mono text-[#6B6558]">
              <span>PEEK INSPECTOR</span>
              <span className="text-[#10946d] font-bold">HOVER PREVIEW</span>
            </div>

            <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-black/15 bg-black">
              <img
                src={activePreview.heroImage}
                alt={activePreview.title}
                className="w-full h-full object-cover object-top"
                onError={onImgError}
              />
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-[#10946d] font-bold">
                {activePreview.client}
              </span>
              <h4 className="text-base font-bold font-[var(--font-display)] text-[#0f1117] mt-1 leading-snug">
                {activePreview.title}
              </h4>
              <p className="text-xs text-[#6B6558] mt-2 line-clamp-3 leading-relaxed">
                {activePreview.summary}
              </p>
            </div>

            <div className="pt-2 border-t border-black/10 flex flex-wrap gap-1">
              {activePreview.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/5 border border-black/10 text-[#0f1117]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/work/${activePreview.slug}`}
              className="w-full py-2.5 rounded-xl bg-[#0f1117] hover:bg-[#10946d] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors mt-2"
            >
              <span>View System Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3: The Operational Shift (WARM SURFACE LIGHT THEME #F3EFE7)*/
/*  (Editorial side-by-side comparison of Legacy vs Engineered)       */
/* ------------------------------------------------------------------ */
function OperationalShiftSurface() {
  const comparisons = [
    {
      client: "ProRota",
      domain: "Workforce & Compliance",
      legacyTitle: "14-Day Paper Vetting & Spreadsheets",
      legacyDetails: "Candidate onboarding stalled in multi-week email threads; manual SIA licence monitoring exposed operations to compliance fines; unverified paper timesheets created billing disputes.",
      solutionTitle: "Automated Multi-Tenant Compliance Suite",
      solutionDetails: "A proprietary constraint solver schedules 99.4% of shifts automatically; native iOS and Android apps enforce biometric GPS geofenced check-ins; vetting cycle slashed from 14 days to under 3 days.",
      metric: "99.4%",
      metricLabel: "Automated Allocation",
    },
    {
      client: "NexEats & NexRider",
      domain: "Food Delivery & Fleet",
      legacyTitle: "High-Concurrency Dispatch Latency",
      legacyDetails: "Orders delayed during dinner peaks by manual telephone dispatch; zero real-time telemetry left diners guessing with >45min delivery windows; single-language interface alienated Algerian markets.",
      solutionTitle: "Sub-Second Fleet Mesh & Dual RTL/LTR",
      solutionDetails: "Sub-18 minute end-to-end dispatch latency powered by low-latency WebSocket event streams; native companion rider apps with turn-by-turn routing; dual-engine RTL/LTR localized architecture.",
      metric: "<18min",
      metricLabel: "Dispatch Latency",
    },
    {
      client: "Duralean UK",
      domain: "Industrial Sourcing",
      legacyTitle: "17+ Product Sectors Locked in Offline PDFs",
      legacyDetails: "Complex industrial categories (from ATEX explosion-proof systems to specialized materials) trapped in unstructured documents, causing slow multi-week procurement response times.",
      solutionTitle: "Structured Multi-Sector Engineering Hub",
      solutionDetails: "Instantaneous technical datasheet and compliance certificate download portal with direct procurement routing and WhatsApp enterprise telemetry.",
      metric: "17+",
      metricLabel: "Procured Categories",
    },
  ];

  return (
    <section className="bg-[#F3EFE7] text-[#191510] py-28 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#10946d] font-bold block mb-2">
            03 // The Operational Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-[var(--font-display)] text-[#191510] tracking-tight leading-tight">
            How code eliminates business friction.
          </h2>
          <p className="text-sm sm:text-base text-[#6B6558] mt-4 font-[var(--font-body)] leading-relaxed">
            The proof of software is not the aesthetic alone — it is the measurable collapse of operational latency, human error, and regulatory liability.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix (Hairline division, zero card boxes) */}
        <div className="divide-y divide-black/15 border-y border-black/15">
          {comparisons.map((c) => (
            <div key={c.client} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Client & Metric Column */}
              <div className="lg:col-span-3 space-y-2">
                <span className="text-xs font-mono uppercase text-[#10946d] font-bold">
                  {c.domain}
                </span>
                <h3 className="text-2xl font-bold font-[var(--font-display)] text-[#191510]">
                  {c.client}
                </h3>
                <div className="pt-2">
                  <div className="text-3xl font-mono font-extrabold text-[#10946d]">
                    {c.metric}
                  </div>
                  <div className="text-xs font-mono text-[#6B6558]">
                    {c.metricLabel}
                  </div>
                </div>
              </div>

              {/* Legacy Friction Column */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-red-500/[0.04] border-l-2 border-red-500/40 space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold text-red-700 tracking-wider">
                  Legacy Bottleneck
                </span>
                <h4 className="text-base font-bold text-[#191510]">
                  {c.legacyTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#4A453C] leading-relaxed">
                  {c.legacyDetails}
                </p>
              </div>

              {/* DevCraft Architecture Column */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#10946d]/[0.05] border-l-2 border-[#10946d] space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold text-[#10946d] tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DevCraft Architecture</span>
                </span>
                <h4 className="text-base font-bold text-[#191510]">
                  {c.solutionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#191510] leading-relaxed">
                  {c.solutionDetails}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4: The Leadership Accounts (DARK VOID #0A0E17)             */
/*  (Oversized Typographic Quote Statement - NO cards, NO tabs)       */
/* ------------------------------------------------------------------ */
function LeadershipAccountsDark({ projects }: { projects: CaseStudyDetail[] }) {
  const testimonials = useMemo(() => {
    return projects.filter((p) => p.testimonial);
  }, [projects]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeQuote = testimonials[activeIndex] || testimonials[0];

  return (
    <section className="bg-[#0A0E17] text-white py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block mb-2">
              04 // Production Accounts
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-[var(--font-display)] text-white tracking-tight">
              Words from leadership in production.
            </h2>
          </div>

          {/* Client Monogram Selector */}
          <div className="flex flex-wrap items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.slug}
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1.5 text-xs font-mono transition-colors cursor-pointer ${
                  idx === activeIndex
                    ? "bg-[#18cb96] text-[#06120E] font-bold"
                    : "bg-white/5 text-[#8B90A6] hover:text-white hover:bg-white/10"
                }`}
              >
                {t.client}
              </button>
            ))}
          </div>
        </div>

        {/* Oversized Typographic Quote Statement */}
        <div className="min-h-[260px] flex flex-col justify-between py-6">
          <div className="space-y-6">
            <Quote className="w-10 h-10 text-[#18cb96]/40" />
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-[var(--font-display)] text-white leading-tight max-w-5xl">
              &ldquo;{activeQuote.testimonial?.quote}&rdquo;
            </blockquote>
          </div>

          <div className="pt-10 flex items-center justify-between border-t border-white/10 mt-8">
            <div>
              <div className="text-base font-bold font-mono text-white">
                {activeQuote.testimonial?.author}
              </div>
              <div className="text-xs font-mono text-[#8B90A6]">
                {activeQuote.testimonial?.role} &bull; {activeQuote.client}
              </div>
            </div>

            <Link
              href={`/work/${activeQuote.slug}`}
              className="text-xs font-mono text-[#18cb96] hover:underline flex items-center gap-1.5"
            >
              <span>Read Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5: Dual-Shore Sprint Availability & Conversion Callout     */
/* ------------------------------------------------------------------ */
function DualShoreConversion() {
  const [ukTime, setUkTime] = useState("");
  const [pkTime, setPkTime] = useState("");

  useEffect(() => {
    const updateClocks = () => {
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
        // Fallback
        setUkTime("Active GMT");
        setPkTime("Active PKT");
      }
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#070A12] text-white py-28 md:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Dual-Shore Real-Time Telemetry Clocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-b border-white/10 pb-12 mb-16">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02] flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#8B90A6] uppercase">
                UK
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
                {ukTime || "12:00:00"}
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18cb96]/15 text-[#18cb96] border border-[#18cb96]/30">
                ACTIVE SPRINT
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/[0.02] flex items-center justify-between">
            <div>
              <div className="text-[11px] font-mono text-[#8B90A6] uppercase">
                LAHORE ENGINEERING LAB // PK
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white mt-1">
                {pkTime || "17:00:00"}
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#52ffcb]/15 text-[#52ffcb] border border-[#52ffcb]/30">
                CONTINUOUS BUILD
              </span>
            </div>
          </div>
        </div>

        {/* Conversion Action */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#18cb96] font-bold block">
            Ship With Intent
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-display)] text-white tracking-tight leading-tight">
            Ready to engineer your next{" "}
            <span className="text-gradient-emerald">flagship platform?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A4A2B2] max-w-xl mx-auto leading-relaxed font-[var(--font-body)]">
            Schedule an architectural review and receive fixed delivery milestones from our dual-shore engineering teams in Sheffield and Lahore.
          </p>

          <div className="pt-6 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary-halo px-8 py-3.5 rounded-full text-sm font-bold text-[#06120E] inline-flex items-center gap-2"
            >
              <span>Request a Technical Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact#consultation"
              className="btn-secondary-halo px-7 py-3.5 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2"
            >
              <span>Book Engineering Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Master Work Page Export                                            */
/* ------------------------------------------------------------------ */
export default function WorkPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#0A0E17] text-[#F6F6F8] overflow-x-clip selection:bg-[#18cb96] selection:text-[#07070A]">
        <ScrollProgressBar />

        {/* Hero: The Live Production Ledger & Spatial Matrix */}
        <WorkHero projects={portfolioData} />

        {/* Section 1: Asymmetric Architecture Viewport Curtain (Dark #0A0E17) */}
        <ArchitectureViewportCurtain projects={portfolioData} />

        {/* Section 2: The Shipped Register (Light Theme #ffffff) */}
        <ShippedRegisterLight projects={portfolioData} />

        {/* Section 3: The Operational Shift (Surface Light Theme #F3EFE7) */}
        <OperationalShiftSurface />

        {/* Section 4: Leadership Accounts (Dark Theme #0A0E17) */}
        <LeadershipAccountsDark projects={portfolioData} />

        {/* Section 5: Dual-Shore Sprint Clocks & Final Conversion CTA */}
        <DualShoreConversion />
      </div>
    </MotionConfig>
  );
}
