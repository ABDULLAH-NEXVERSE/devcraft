"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Layout,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Code2,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  "web-development": <Globe className="w-6 h-6 text-[#18CB96]" />,
  "mobile-app-development": <Smartphone className="w-6 h-6 text-[#4ED7AE]" />,
  "custom-software-development": <Cpu className="w-6 h-6 text-[#18CB96]" />,
  "ecommerce-development": <ShoppingBag className="w-6 h-6 text-[#80E2C5]" />,
  "ui-ux-design": <Layout className="w-6 h-6 text-[#18CB96]" />,
  "ai-ml-solutions": <Sparkles className="w-6 h-6 text-[#4ED7AE]" />,
  "maintenance-support": <ShieldCheck className="w-6 h-6 text-[#18CB96]" />,
};

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
          <Code2 className="w-3.5 h-3.5" />
          <span>Capability Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          What We Do
        </h2>
        <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed">
          We design, build and support software end to end — websites and web apps, native and cross-platform mobile apps, custom backend systems, e-commerce platforms, and AI/ML features that make products smarter. Every engagement includes ongoing maintenance, not just a handover.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, idx) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            whileHover={{ y: -4 }}
            className={`p-6 sm:p-7 rounded-3xl glass-panel brand-card-border relative overflow-hidden group flex flex-col justify-between bg-[#0B0B10]/90 ${
              idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#18CB96]/5 rounded-full blur-2xl group-hover:bg-[#18CB96]/15 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-[#18CB96]/10 text-[#18CB96] group-hover:bg-[#18CB96]/20 transition-colors">
                  {iconMap[service.slug] || <Code2 className="w-6 h-6 text-[#18CB96]" />}
                </div>
                {service.badge && (
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#18CB96]/15 text-[#18CB96] border border-[#18CB96]/25 font-semibold">
                    {service.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#18CB96] transition-colors font-display">
                {service.title}
              </h3>

              {/* Strict 2-Line Truncated Description */}
              <p
                className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed mb-4 line-clamp-2 min-h-[2.5rem]"
                title={service.shortDesc}
              >
                {service.shortDesc}
              </p>

              {/* Tag Strip: Top 2 tags + Pill badge */}
              <div className="tag-strip-nowrap mb-6">
                {service.techStack.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-[#80E2C5] border border-white/5 shrink-0"
                  >
                    {tech}
                  </span>
                ))}
                {service.techStack.length > 2 && (
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18CB96]/10 text-[#18CB96] border border-[#18CB96]/25 shrink-0"
                    title={service.techStack.slice(2).join(", ")}
                  >
                    +{service.techStack.length - 2} more
                  </span>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#6B697D]">
                {service.metrics[0]?.label}: <span className="text-white font-semibold">{service.metrics[0]?.value}</span>
              </span>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18CB96] hover:text-[#4ED7AE] group-hover:translate-x-1 transition-all"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
