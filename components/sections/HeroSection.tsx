"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Hero3DCanvas } from "../3d/Hero3DCanvas";
import { homeData } from "@/data/homeData";

export const HeroSection: React.FC = () => {
  const { hero } = homeData;

  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-20 px-4 sm:px-6 overflow-hidden flex flex-col justify-center bg-[#07070A]">
      {/* Rich Dark Gradient Canvas Anchored by Darkest Brand Shade */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(24,203,150,0.14),transparent_75%)]" />
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#18CB96]/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#0F0E15] blur-[100px]" />
      </div>

      {/* 3D Canvas / Logo Motif Background */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none opacity-85">
        <div className="w-full max-w-6xl h-[320px] sm:h-[420px] lg:h-[520px]">
          <Hero3DCanvas />
        </div>
      </div>

      {/* Gradient overlays for crisp text contrast */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07070A] via-[#07070A]/85 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-transparent to-transparent opacity-70" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Eyebrow Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18CB96] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#18CB96]" />
              </span>
              <span>{hero.badge}</span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold tracking-tight text-white leading-[1.12] mb-5 max-w-3xl"
            >
              Web, Mobile &amp; AI Software —{" "}
              <span className="text-gradient-emerald">Crafted by Two Teams,</span> Delivered Around the Clock
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-sm sm:text-base md:text-lg font-body text-[#A4A2B2] max-w-2xl leading-relaxed mb-8"
            >
              {hero.subheadline}
            </motion.p>

            {/* Dual CTAs: High-contrast brand neon reserved strictly for action */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-3"
            >
              <Link
                href={hero.primaryCta.href}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#18CB96] text-[#07070A] hover:bg-[#14AF81] transition-all duration-300 shadow-[0_0_25px_rgba(24,203,150,0.35)] hover:shadow-[0_0_35px_rgba(24,203,150,0.6)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={hero.secondaryCta.href}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white glass-panel hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 border border-white/15"
              >
                <MessageSquare className="w-4 h-4 text-[#18CB96]" />
                <span>{hero.secondaryCta.label}</span>
              </Link>

              <div className="flex items-center gap-3 text-xs font-mono text-[#A4A2B2] pt-2 sm:pt-0 sm:pl-3">
                <Link href="/products" className="hover:text-[#18CB96] transition-colors underline decoration-white/20 underline-offset-4">
                  Our Products &rarr;
                </Link>
                <span className="text-white/20">&bull;</span>
                <Link href="/services" className="hover:text-[#18CB96] transition-colors underline decoration-white/20 underline-offset-4">
                  Explore Services &rarr;
                </Link>
              </div>
            </motion.div>

            {/* Highlight Metrics with High-Contrast Neon Accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 pt-6 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {hero.highlightMetrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center gap-1">
                    <span className="text-[#18CB96]">{m.value}</span>
                  </div>
                  <div className="text-xs text-white font-semibold mt-0.5">{m.label}</div>
                  <div className="text-[11px] text-[#A4A2B2] mt-0.5 leading-tight hidden sm:block">
                    {m.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block" />
        </div>
      </div>

      {/* Brand Logo V-Apex Custom Section Divider */}
      <div className="brand-v-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};
