"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface MetricStatement {
  number: string;
  label: string;
  statement: string;
  footnote: string;
}

const keyMetrics: MetricStatement[] = [
  {
    number: "99.4%",
    label: "Production Accuracy",
    statement: "Automated match algorithms operating on real client rota & dispatch platforms.",
    footnote: "Validated on live production ProRota instances.",
  },
  {
    number: "24/7",
    label: "Continuous Coverage",
    statement: "Zero overnight development lag through coordinated UK and Pakistan engineering centers.",
    footnote: "Sheffield design sprints hand off to Lahore build teams.",
  },
  {
    number: "2 Teams",
    label: "Dual-Hub Architecture",
    statement: "Strategic product direction in the UK paired with high-velocity full-stack engineering.",
    footnote: "Full-stack Next.js, Flutter, and cloud microservices.",
  },
  {
    number: "£850K+",
    label: "Operational Value",
    statement: "Cumulative hours and recurring contractor costs saved across client deployments.",
    footnote: "Verified across logistics, staffing, and compliance contracts.",
  },
];

export const MetricsImpactSection: React.FC = () => {
  return (
    <section className="py-32 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 pb-8 border-b border-white/10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commercial Throughput</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            Proof in <span className="text-gradient-emerald">Numbers.</span>
          </h2>
          <p className="text-[#A4A2B2] text-base sm:text-lg mt-4 leading-relaxed">
            Software is judged by operational results, not slides. We engineer systems that deliver measurable commercial leverage.
          </p>
        </div>

        <div className="mt-6 lg:mt-0">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#18CB96] hover:text-[#4ED7AE] transition-colors"
          >
            <span>Explore technical case studies &rarr;</span>
          </Link>
        </div>
      </div>

      {/* Unboxed Canvas Typography Grid: No Card Containers, Giant Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
        {keyMetrics.map((m, idx) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative flex flex-col justify-between"
          >
            <div>
              {/* Category Label */}
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#18CB96] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96]" />
                <span>{m.label}</span>
              </div>

              {/* Giant Editorial Typography directly on canvas background */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-mono font-extrabold text-white tracking-tight leading-none mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4F9F3] to-[#18CB96]">
                  <AnimatedCounter value={m.number} />
                </span>
              </div>

              {/* Bold Narrative Statement */}
              <p className="text-base sm:text-lg text-[#F6F6F8] font-medium leading-relaxed max-w-lg mb-3">
                {m.statement}
              </p>
            </div>

            {/* Footnote Proof */}
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#6B697D]">
              {m.footnote}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
