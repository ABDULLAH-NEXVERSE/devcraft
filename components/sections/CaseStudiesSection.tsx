"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const CaseStudiesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeStudy = portfolioData[activeIdx] || portfolioData[0];

  return (
    <section id="case-studies" className="py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Delivery Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Engineered for <span className="text-gradient-emerald">Commercial Impact.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A4A2B2] max-w-2xl mt-2">
            Select any enterprise build below to inspect verified production SLAs, technical architecture, and live operational throughput.
          </p>
        </div>

        <Link
          href="/work"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono text-[#18CB96] hover:text-[#4ED7AE] transition-colors"
        >
          <span>View All {portfolioData.length} Case Studies &rarr;</span>
        </Link>
      </div>

      {/* Interactive Split-Screen Live Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* LEFT COLUMN: Interactive Tabs with Animated Incrementing Metrics */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-[#A4A2B2] px-2 mb-2 flex items-center justify-between">
            <span>Client Deployment</span>
            <span>Live Result Benchmark</span>
          </div>

          <div className="space-y-2.5 max-h-[640px] overflow-y-auto pr-1 scrollbar-thin">
            {portfolioData.map((study, idx) => {
              const isActive = idx === activeIdx;

              return (
                <button
                  key={study.slug}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between border cursor-pointer ${
                    isActive
                      ? "bg-[#161520] border-[#18CB96]/60 shadow-[0_0_25px_rgba(24,203,150,0.18)] translate-x-1"
                      : "bg-[#0B0B10]/80 border-white/5 hover:border-white/20 hover:bg-white/5 text-[#A4A2B2]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0">
                        <Image
                          src={study.clientLogo}
                          alt={study.client}
                          width={18}
                          height={18}
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <div
                          className={`text-xs font-mono font-bold truncate ${
                            isActive ? "text-[#18CB96]" : "text-white"
                          }`}
                        >
                          {study.client}
                        </div>
                        <div className="text-[10px] text-[#A4A2B2] truncate">
                          {study.category}
                        </div>
                      </div>
                    </div>

                    {/* Animated Incrementing Metric Counter */}
                    {study.results[0] && (
                      <div className="text-right shrink-0 pl-2">
                        <div className="text-sm font-bold font-mono text-[#18CB96]">
                          {isActive ? (
                            <AnimatedCounter value={study.results[0].metric} />
                          ) : (
                            study.results[0].metric
                          )}
                        </div>
                        <div className="text-[9px] text-[#A4A2B2] truncate max-w-[100px]">
                          {study.results[0].label}
                        </div>
                      </div>
                    )}
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 border-t border-white/10 mt-1"
                    >
                      <p className="text-[11px] text-[#A4A2B2] line-clamp-2 leading-relaxed mb-2">
                        {study.summary}
                      </p>
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#18CB96]">
                        <span>Inspect Full Blueprint</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Spatial 3D Preview Viewport & Live Counter Board */}
        <div className="lg:col-span-7 sticky top-28">
          <SpotlightCard
            enableTilt={true}
            chamfer={true}
            className="p-6 sm:p-8 space-y-6"
          >
            {/* Viewport Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shrink-0">
                  <Image
                    src={activeStudy.clientLogo}
                    alt={activeStudy.client}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                    {activeStudy.title}
                  </h3>
                  <span className="text-xs font-mono text-[#18CB96]">
                    {activeStudy.client} · {activeStudy.category}
                  </span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30 text-xs font-mono text-[#18CB96] flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Production Verified</span>
              </span>
            </div>

            {/* Visual Viewport with Smooth Crossfade */}
            <div className="relative h-[280px] sm:h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-[#07070A]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStudy.slug}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeStudy.heroImage}
                    alt={`${activeStudy.client} System Screen`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Live Counter Metrics Bar with AnimatedCounter */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#0B0B10]/95 border border-white/5">
              {activeStudy.results.map((r) => (
                <div key={r.label} className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-[#18CB96]">
                    <AnimatedCounter value={r.metric} />
                  </div>
                  <div className="text-[10px] text-[#A4A2B2] mt-0.5 leading-tight">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack & Action Button */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="tag-strip-nowrap">
                {activeStudy.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#80E2C5] border border-white/5 shrink-0"
                  >
                    {tech}
                  </span>
                ))}
                {activeStudy.techStack.length > 3 && (
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18CB96]/10 text-[#18CB96] border border-[#18CB96]/25 shrink-0"
                    title={activeStudy.techStack.slice(3).join(", ")}
                  >
                    +{activeStudy.techStack.length - 3} more
                  </span>
                )}
              </div>

              <Link
                href={`/work/${activeStudy.slug}`}
                className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#18CB96] text-[#07070A] hover:bg-[#14AF81] transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(24,203,150,0.3)] hover:shadow-[0_0_30px_rgba(24,203,150,0.5)] cursor-pointer"
              >
                <span>Read Technical Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
