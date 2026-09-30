"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Clock, Users } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface MetricStatement {
  number: string;
  label: string;
  statement: string;
  footnote: string;
  icon: React.ElementType;
}

const keyMetrics: MetricStatement[] = [
  {
    number: "99.4%",
    label: "Production Accuracy",
    statement: "Automated match algorithms operating on real client rota & dispatch platforms.",
    footnote: "Validated on live ProRota instances",
    icon: ShieldCheck,
  },
  {
    number: "24/7",
    label: "Continuous Coverage",
    statement: "Zero overnight development lag through coordinated UK and Pakistan engineering hubs.",
    footnote: "UK & Pakistan synchronized",
    icon: Clock,
  },
  {
    number: "2 Teams",
    label: "Dual-Hub Model",
    statement: "Strategic product direction in the UK paired with high-velocity full-stack engineering.",
    footnote: "Next.js, Flutter & Cloud scale",
    icon: Users,
  },
  {
    number: "£850K+",
    label: "Operational Value",
    statement: "Cumulative hours and recurring contractor costs saved across client deployments.",
    footnote: "Verified across live contracts",
    icon: TrendingUp,
  },
];

export const MetricsImpactSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-white/10 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Throughput</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            Proof in <span className="text-gradient-emerald">Numbers.</span>
          </h2>
          <p className="text-[#A4A2B2] text-sm sm:text-base mt-3 leading-relaxed">
            Software is judged by operational results, not slides. We engineer systems that deliver measurable commercial leverage.
          </p>
        </div>

        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#18CB96] hover:text-[#4ED7AE] transition-colors py-2 group"
          >
            <span>Explore technical case studies</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Luxury 4-Card Glassmorphism Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#12111A]/90 via-[#0B0A12]/85 to-[#07070A]/95 border border-white/[0.08] backdrop-blur-xl hover:border-[#18CB96]/40 hover:shadow-[0_20px_50px_-15px_rgba(24,203,150,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Corner ambient glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#18CB96]/0 rounded-full blur-2xl pointer-events-none group-hover:bg-[#18CB96]/15 transition-all duration-500" />

              <div className="relative z-10">
                {/* Header: Category Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#18CB96]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] group-hover:scale-125 transition-transform" />
                    <span>{m.label}</span>
                  </span>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[#A4A2B2] group-hover:text-[#18CB96] group-hover:border-[#18CB96]/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Giant Metric Numeral with Emerald Gradient */}
                <div className="text-4xl sm:text-5xl font-mono font-extrabold tracking-tight leading-none mb-4 group-hover:translate-x-0.5 transition-transform duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E8FAF5] to-[#18CB96]">
                    <AnimatedCounter value={m.number} />
                  </span>
                </div>

                {/* Narrative Statement */}
                <p className="text-xs sm:text-sm text-[#D6D9EA] font-medium leading-relaxed mb-6">
                  {m.statement}
                </p>
              </div>

              {/* Verified Proof Footnote */}
              <div className="pt-3.5 border-t border-white/[0.07] text-[11px] font-mono text-[#6B697D] group-hover:text-[#A4A2B2] transition-colors flex items-center gap-1.5 relative z-10">
                <CheckCircle2 className="w-3 h-3 text-[#18CB96]/80 shrink-0" />
                <span className="truncate">{m.footnote}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
