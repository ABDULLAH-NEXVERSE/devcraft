"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Layers, Cpu, Shield, Sparkles, ArrowRight, Check } from "lucide-react";
import { homeData } from "@/data/homeData";
import { companyData } from "@/data/companyData";

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
};

const numerals = ["01", "02", "03", "04"];

export const WhyDevCraftSection: React.FC = () => {
  const { whyDevCraft } = homeData;

  return (
    <section className="py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Full-bleed canvas contrast band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#18CB96]/30 to-transparent"
      />

      {/* Editorial Split Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-20">
        {/* Left: Sticky headline */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Delivery Advantage</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display mb-6">
            {whyDevCraft.title}
            <br />
            <span className="text-gradient-emerald">Different By Design.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed mb-10">
            {whyDevCraft.subtitle} — we offer the strategic guidance of a UK product studio combined
            with the engineering velocity of our Lahore technical center.
          </p>

          {/* Two-Team live signal */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#18CB96] uppercase tracking-widest font-bold mb-3">
              Follow-The-Sun Model · Active Now
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#18CB96] animate-pulse" />
              <div>
                <div className="text-xs font-bold text-white">Sheffield, UK Hub</div>
                <div className="text-[11px] text-[#A4A2B2]">
                  Product Architecture, UI/UX Design &amp; Strategy
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#4ED7AE] animate-pulse" />
              <div>
                <div className="text-xs font-bold text-white">Lahore, Pakistan Hub</div>
                <div className="text-[11px] text-[#A4A2B2]">
                  Full-Stack Engineering, QA &amp; 24/7 Live Monitoring
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#18CB96] hover:text-[#4ED7AE] transition-colors"
            >
              <span>Meet the team &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right: Editorial numbered list — NO card containers */}
        <div className="lg:col-span-7">
          <div className="divide-y divide-white/10">
            {whyDevCraft.points.map((pt, idx) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative py-8 sm:py-10 flex items-start gap-6 sm:gap-10 hover:bg-[#18CB96]/[0.03] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl"
              >
                {/* Giant watermark numeral */}
                <div
                  aria-hidden="true"
                  className="absolute -top-2 -left-2 text-7xl sm:text-8xl font-extrabold font-mono text-white/[0.03] select-none pointer-events-none tracking-tighter"
                >
                  {numerals[idx]}
                </div>

                {/* Step number + icon */}
                <div className="relative z-10 flex-shrink-0 flex flex-col items-center gap-2 pt-1">
                  <span className="text-xs font-mono font-bold text-[#18CB96]/60 tracking-widest">
                    {numerals[idx]}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#18CB96]/10 text-[#18CB96] group-hover:bg-[#18CB96]/20 transition-colors">
                    {iconMap[pt.icon] || <Cpu className="w-5 h-5 text-[#18CB96]" />}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-[#18CB96] transition-colors">
                      {pt.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#18CB96]/10 text-[#18CB96] border border-[#18CB96]/20">
                      {pt.badge}
                    </span>
                  </div>
                  <p className="text-sm text-[#A4A2B2] leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                {/* Arrow accent */}
                <div className="relative z-10 flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-[#18CB96]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Bleed SLA Strip — no card box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-white/10 pt-12 grid grid-cols-2 sm:grid-cols-4 gap-8"
      >
        {[
          { label: "No overnight dev lag", sub: "Continuous handoffs between hubs" },
          { label: "Direct Slack / Teams", sub: "No ticket systems or gatekeepers" },
          { label: "Transparent milestones", sub: "Weekly reviews with full visibility" },
          { label: "24/7 SLA Coverage", sub: "Emergency incident response included" },
        ].map((item, i) => (
          <div key={item.label} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#18CB96] mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">{item.label}</div>
              <div className="text-[11px] text-[#A4A2B2] mt-0.5">{item.sub}</div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom canvas hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </section>
  );
};
