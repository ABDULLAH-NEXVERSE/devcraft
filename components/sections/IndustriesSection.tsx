"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Activity,
  ArrowRight,
  Layers,
} from "lucide-react";
import { industriesData } from "@/data/industriesData";

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-6 h-6 text-[#18CB96]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#4ED7AE]" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#80E2C5]" />,
  CreditCard: <CreditCard className="w-6 h-6 text-[#18CB96]" />,
  Activity: <Activity className="w-6 h-6 text-[#4ED7AE]" />,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Vertical Domain Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base text-[#A4A2B2] max-w-2xl">
            We don't just write generic code. We engineer mission-critical systems for operationally complex, highly regulated industries.
          </p>
        </div>

        <Link
          href="/industries"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono text-[#18CB96] hover:text-[#4ED7AE] transition-colors"
        >
          <span>All 5 Industry Sectors &rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industriesData.map((ind, idx) => (
          <motion.div
            key={ind.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className={`p-7 rounded-3xl glass-panel border border-white/10 relative overflow-hidden group flex flex-col justify-between hover:border-[#18CB96]/30 transition-all ${
              idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              <div className="p-3 rounded-2xl bg-[#18CB96]/10 text-[#18CB96] w-fit mb-5 group-hover:bg-[#18CB96]/20 transition-colors">
                {iconMap[ind.icon] || <Layers className="w-6 h-6 text-[#18CB96]" />}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#18CB96] transition-colors">
                {ind.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed mb-4">
                {ind.shortDesc}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-mono text-[#18CB96] uppercase font-semibold">
                  Proven Platforms:
                </div>
                <ul className="space-y-1">
                  {ind.proofPoints.map((pp) => (
                    <li key={pp.name} className="text-xs text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96]" />
                      <span className="font-medium">{pp.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#6B697D]">
                Tailored Systems
              </span>
              <Link
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18CB96] hover:text-[#4ED7AE] group-hover:translate-x-1 transition-all"
              >
                <span>Industry Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
