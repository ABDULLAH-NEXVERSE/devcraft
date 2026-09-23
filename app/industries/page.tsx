"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { industriesData } from "@/data/industriesData";
import {
  Truck,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Activity,
  ArrowRight,
  Layers,
  CheckCircle2,
  Check,
  Zap,
  Lock,
  Compass,
} from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
};

export default function IndustriesPage() {
  const [activeSlug, setActiveSlug] = useState<string>(industriesData[0].slug);
  const activeIndustry =
    industriesData.find((ind) => ind.slug === activeSlug) || industriesData[0];

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#18CB96]/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-5 shadow-[0_0_12px_rgba(24,203,150,0.12)]">
          <Layers className="w-3.5 h-3.5" />
          <span>Specialised Vertical Architectures</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-display">
          Engineered for <span className="text-gradient-emerald">Regulated Sectors.</span>
        </h1>
        <p className="text-base sm:text-lg font-body text-[#A4A2B2] leading-relaxed max-w-3xl mx-auto">
          Generic software agencies struggle when confronted with biometric vetting, continuous driver dispatch, multi-vendor escrow splits, or clinical data confidentiality. DevCraft brings battle-tested engineering blueprints across 5 complex verticals.
        </p>

        {/* Interactive Vertical Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
          {industriesData.map((ind) => {
            const isSelected = ind.slug === activeSlug;

            return (
              <button
                key={ind.slug}
                onClick={() => setActiveSlug(ind.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#18CB96] text-[#07070A] font-bold shadow-[0_0_20px_rgba(24,203,150,0.4)] scale-105"
                    : "bg-white/[0.03] text-[#A4A2B2] hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
                }`}
              >
                <span className={isSelected ? "text-[#07070A]" : "text-[#18CB96]"}>
                  {iconMap[ind.icon]}
                </span>
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE DEEP-DIVE STAGE (Dynamic Spotlight on Selected Sector)
          ========================================================================= */}
      <div className="mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/[0.12] bg-[#0A0910]/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {/* Background Corner Glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#18CB96]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Sector Narrative & Engineering Approach */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#18CB96]/15 border border-[#18CB96]/30 text-[#18CB96]">
                    {iconMap[activeIndustry.icon]}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#18CB96] font-bold">
                      Domain Blueprint
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                      {activeIndustry.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base text-[#D6D9EA] leading-relaxed">
                  {activeIndustry.shortDesc}
                </p>

                {/* Challenge vs Solution Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] border-t-2 border-t-red-400/80">
                    <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider block mb-1.5">
                      The Operational Challenge:
                    </span>
                    <p className="text-xs text-[#A4A2B2] leading-relaxed">
                      {activeIndustry.clientProblem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] border-t-2 border-t-[#18CB96]">
                    <span className="text-[10px] font-mono text-[#18CB96] font-bold uppercase tracking-wider block mb-1.5">
                      DevCraft Architecture:
                    </span>
                    <p className="text-xs text-[#D6D9EA] leading-relaxed">
                      {activeIndustry.devcraftApproach}
                    </p>
                  </div>
                </div>

                {/* Delivered Architectures */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase text-[#A4A2B2] font-semibold block">
                    Core Verified Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeIndustry.keySolutions.map((sol) => (
                      <div key={sol} className="flex items-start gap-2 text-xs text-[#D6D9EA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/industries/${activeIndustry.slug}`}
                    className="btn-primary-halo px-7 py-3 rounded-full text-xs font-bold flex items-center gap-2 group cursor-pointer"
                  >
                    <span>Inspect {activeIndustry.title} Blueprint</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact?type=quote"
                    className="btn-secondary-halo px-6 py-3 rounded-full text-xs font-semibold"
                  >
                    Request Sector Scoping
                  </Link>
                </div>
              </div>

              {/* Right Column: Live Production Systems & Proof Points */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.08] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono text-[#18CB96] uppercase font-bold tracking-wider">
                      Verified Production Proof
                    </span>
                    <span className="text-[10px] font-mono text-[#A4A2B2]">Live Fleet Active</span>
                  </div>

                  <div className="space-y-3">
                    {activeIndustry.proofPoints.map((pp) => (
                      <div
                        key={pp.name}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-[#18CB96]/30 transition-colors"
                      >
                        <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#18CB96]" />
                          <span>{pp.name}</span>
                        </div>
                        <p className="text-xs text-[#A4A2B2]">{pp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-[10px] font-mono text-[#6B697D] uppercase block mb-2 font-semibold">
                    Core Technical Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeIndustry.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-[#80E2C5] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================================================
          ALL 5 SECTORS AT A GLANCE (Compact Architectural Comparison Strip)
          ========================================================================= */}
      <div className="mb-28 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="text-xs font-mono text-[#18CB96] uppercase font-bold tracking-wider">
            All 5 Verticals Overview
          </span>
          <span className="text-xs font-mono text-[#6B697D]">Select to inspect details above</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industriesData.map((ind) => (
            <button
              key={ind.slug}
              onClick={() => {
                setActiveSlug(ind.slug);
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between min-h-[160px] ${
                activeSlug === ind.slug
                  ? "bg-[#161520] border-[#18CB96]/60 shadow-[0_0_20px_rgba(24,203,150,0.18)] translate-y-[-2px]"
                  : "bg-[#0B0B10]/70 border-white/[0.06] hover:bg-white/[0.04] hover:border-white/20"
              }`}
            >
              <div className="space-y-2">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    activeSlug === ind.slug
                      ? "bg-[#18CB96]/20 text-[#18CB96]"
                      : "bg-white/5 text-[#A4A2B2]"
                  }`}
                >
                  {iconMap[ind.icon]}
                </div>
                <div className="text-sm font-bold text-white">{ind.title}</div>
              </div>

              <div className="text-[10px] font-mono text-[#18CB96] pt-2 border-t border-white/5 flex items-center justify-between">
                <span>View Specs</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Dual CTA */}
      <ContactSection />
    </div>
  );
}
