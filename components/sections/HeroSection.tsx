"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { HeroVisual } from "../hero/HeroVisual";
import { homeData } from "@/data/homeData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 sm:pt-36 pb-24 px-4 sm:px-6 overflow-hidden flex flex-col justify-center bg-[#0b091d]">
      {/* Layer 1: Dark Hero Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(24,203,150,0.12),transparent_75%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#18CB96]/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0E0D15] blur-[100px]" />
      </div>

      {/* Layer 2: Central 3D V Video Background */}
      <HeroVisual />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Focused, Masterclass Typography & Clear CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#14af81]/15 border border-[#14af81]/30 text-[#14af81] text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(20,175,129,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14af81] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14af81]" />
              </span>
              <span className="font-semibold tracking-wide">Full-Stack Engineering · UK &amp; Pakistan</span>
            </motion.div>

            {/* H1 Headline - Masterclass Clarity */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-2xl"
            >
              Web, Mobile &amp; AI Software —{" "}
              <span className="text-gradient-emerald">Crafted with Intent.</span>
            </motion.h1>

            {/* Subheadline with optimal line height and cognitive calmness */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg font-body text-[#A4A2B2] max-w-xl leading-relaxed mb-10"
            >
              Built by two coordinated teams across Sheffield, UK and Lahore, Pakistan. We design, engineer, and operate mission-critical digital products around the clock with zero overnight lag.
            </motion.p>

            {/* Focused Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8"
            >
              <Link
                href="/contact?type=quote"
                className="btn-primary-halo w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="/work"
                className="btn-secondary-halo w-full sm:w-auto px-7 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#18CB96]" />
                <span>Explore Our Work</span>
              </Link>
            </motion.div>

            {/* Subtle trust signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 text-xs font-mono text-[#6B697D] pt-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96]" />
              <span>Production-tested across Logistics, FinTech, E-Commerce &amp; Compliance</span>
            </motion.div>
          </div>

          {/* Right Column: High-Craftsmanship Live Delivery Telemetry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm lg:max-w-[400px] p-5 sm:p-6 rounded-3xl bg-[#0b091d]/90 backdrop-blur-2xl border border-[#14af81]/20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              {/* Subtle ambient corner light */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#14af81]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#14af81]/25 transition-all duration-500" />

              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#14af81] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    Two-Team Delivery Engine
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#14af81]/15 text-[#14af81] border border-[#14af81]/30">
                  Follow-The-Sun
                </span>
              </div>

              {/* Hub 1: UK */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-2.5 hover:border-[#14af81]/30 transition-all">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white">Sheffield, United Kingdom</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-[#A4A2B2]">GMT / BST</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#18CB96] font-semibold">Active</span>
                </div>
                <p className="text-[11px] text-[#A4A2B2]">Product Strategy, UI/UX Systems &amp; Client Direction</p>
              </div>

              {/* Hub 2: Pakistan */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-3.5 hover:border-[#14af81]/30 transition-all">
                <div className="flex items-center justify-between mb-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white">Lahore, Pakistan</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/10 text-[#A4A2B2]">PKT (UTC+5)</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#14af81] font-semibold">Active</span>
                </div>
                <p className="text-[11px] text-[#A4A2B2]">Full-Stack Engineering, AI Pipelines &amp; 24/7 Operations</p>
              </div>

              {/* Metrics micro-strip inside card */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                  <div className="text-base font-mono font-extrabold text-[#14af81]">24/7</div>
                  <div className="text-[9px] text-[#A4A2B2] uppercase tracking-wider mt-0.5">Zero Overnight Lag</div>
                </div>
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/[0.05]">
                  <div className="text-base font-mono font-extrabold text-white">99.4%</div>
                  <div className="text-[9px] text-[#A4A2B2] uppercase tracking-wider mt-0.5">Algorithm Accuracy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand Logo V-Apex Custom Section Divider */}
      <div className="brand-v-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};
