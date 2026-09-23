"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Activity,
  ArrowUpRight,
  Layers,
  ChevronRight,
} from "lucide-react";
import { industriesData } from "@/data/industriesData";

const iconMap: Record<string, React.ElementType> = {
  Truck: Truck,
  ShieldCheck: ShieldCheck,
  ShoppingBag: ShoppingBag,
  CreditCard: CreditCard,
  Activity: Activity,
};

const accentColors = [
  { glow: "#18CB96", text: "text-[#18CB96]", bg: "bg-[#18CB96]", border: "border-[#18CB96]/30", fill: "bg-[#18CB96]/10" },
  { glow: "#4ED7AE", text: "text-[#4ED7AE]", bg: "bg-[#4ED7AE]", border: "border-[#4ED7AE]/30", fill: "bg-[#4ED7AE]/10" },
  { glow: "#80E2C5", text: "text-[#80E2C5]", bg: "bg-[#80E2C5]", border: "border-[#80E2C5]/30", fill: "bg-[#80E2C5]/10" },
  { glow: "#18CB96", text: "text-[#18CB96]", bg: "bg-[#18CB96]", border: "border-[#18CB96]/30", fill: "bg-[#18CB96]/10" },
  { glow: "#4ED7AE", text: "text-[#4ED7AE]", bg: "bg-[#4ED7AE]", border: "border-[#4ED7AE]/30", fill: "bg-[#4ED7AE]/10" },
];

export const IndustriesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const active = industriesData[activeIdx];

  return (
    <section
      id="industries"
      className="relative py-28 sm:py-36 overflow-hidden"
    >
      {/* Full bleed background — different from other sections */}
      <div className="absolute inset-0 bg-[#0A0910]" />
      {/* Ambient emerald gradient top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#18CB96]/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4ED7AE]/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-5">
              <Layers className="w-3.5 h-3.5" />
              <span>Vertical Domain Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
              Industries{" "}
              <span className="text-gradient-emerald">We Serve.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A4A2B2] mt-3 max-w-2xl leading-relaxed">
              We don&apos;t build generic cookie-cutter templates. We engineer
              mission-critical systems for operationally complex, highly
              regulated verticals.
            </p>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#18CB96] hover:text-[#4ED7AE] transition-colors shrink-0"
          >
            <span>Explore All Industry Sectors</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Interactive selector + detail panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left — vertical tab list */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {industriesData.map((ind, idx) => {
              const Icon = iconMap[ind.icon] || Layers;
              const accent = accentColors[idx];
              const isActive = idx === activeIdx;

              return (
                <button
                  key={ind.slug}
                  onClick={() => setActiveIdx(idx)}
                  className={`group w-full text-left flex items-center gap-4 py-4 px-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#131219] border-[#18CB96]/40 shadow-[0_0_30px_rgba(24,203,150,0.12)]"
                      : "bg-transparent border-white/[0.06] hover:border-white/15 hover:bg-white/[0.03]"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl transition-all duration-300 ${
                      isActive
                        ? `${accent.fill} ${accent.text}`
                        : "bg-white/5 text-[#6B697D] group-hover:bg-white/8 group-hover:text-[#A4A2B2]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-sm font-bold transition-colors ${
                        isActive ? "text-white" : "text-[#A4A2B2] group-hover:text-white"
                      }`}
                    >
                      {ind.title}
                    </div>
                    <div className="text-[11px] text-[#6B697D] truncate mt-0.5">
                      {ind.proofPoints.length} proven platforms
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-300 ${
                      isActive
                        ? "text-[#18CB96] translate-x-0.5"
                        : "text-[#6B697D] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right — animated detail panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-full rounded-3xl bg-[#131219] border border-white/[0.09] overflow-hidden p-8 sm:p-10 flex flex-col justify-between min-h-[460px]"
              >
                {/* Ambient corner glow matching accent */}
                <div
                  className="absolute -right-16 -top-16 w-56 h-56 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${accentColors[activeIdx].glow}44 0%, transparent 70%)`,
                  }}
                />

                {/* Watermark industry numeral */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-6 right-8 text-[9rem] font-extrabold font-mono text-white/[0.03] select-none pointer-events-none leading-none"
                >
                  {String(activeIdx + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3 ${accentColors[activeIdx].fill} ${accentColors[activeIdx].text} border ${accentColors[activeIdx].border}`}
                      >
                        {(() => {
                          const Icon = iconMap[active.icon] || Layers;
                          return <Icon className="w-3.5 h-3.5" />;
                        })()}
                        <span>{active.title}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        {active.title} Engineering
                      </h3>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#A4A2B2]">
                      Bespoke Architecture
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#C4C2D2] leading-relaxed max-w-2xl">
                    {active.shortDesc}
                  </p>

                  {/* Proof points grid */}
                  <div>
                    <div
                      className={`text-[10px] font-mono uppercase tracking-wider font-bold mb-3 ${accentColors[activeIdx].text}`}
                    >
                      Proven Production Platforms
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {active.proofPoints.map((pp) => (
                        <div
                          key={pp.name}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accentColors[activeIdx].bg}`}
                          />
                          <span className="text-xs font-semibold text-[#D6D9EA]">
                            {pp.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA footer */}
                <div className="relative z-10 pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#6B697D]">
                    Zero-template engineering
                  </span>
                  <Link
                    href={`/industries/${active.slug}`}
                    className={`inline-flex items-center gap-2 text-xs font-bold transition-all ${accentColors[activeIdx].text} hover:gap-3`}
                  >
                    <span>Explore Full Case Brief</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
