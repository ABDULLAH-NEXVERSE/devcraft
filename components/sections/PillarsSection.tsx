"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Users, ShieldCheck, Target } from "lucide-react";
import { homeData } from "@/data/homeData";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
};

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Pillars</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          Built on <span className="text-gradient-emerald">Principle.</span>
        </h2>
        <p className="text-[#A4A2B2] max-w-2xl mx-auto text-base sm:text-lg">
          The core tenets that guide every sprint, architecture decision, and client partnership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {homeData.pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden group flex flex-col cutout-corner"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#18CB96]/10 rounded-full blur-2xl group-hover:bg-[#18CB96]/20 transition-all duration-500 pointer-events-none" />

            <div className="p-3 rounded-2xl bg-[#18CB96]/10 text-[#18CB96] w-fit mb-5">
              {iconMap[pillar.icon] || <Sparkles className="w-5 h-5" />}
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{pillar.title}</h3>
            <p className="text-xs font-mono text-[#18CB96] uppercase tracking-wider mb-3">
              {pillar.tagline}
            </p>
            <p className="text-sm text-[#A4A2B2] leading-relaxed flex-1">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
