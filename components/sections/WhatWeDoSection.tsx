"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Layout,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Code2,
  ChevronDown,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ElementType> = {
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "custom-software-development": Cpu,
  "ecommerce-development": ShoppingBag,
  "ui-ux-design": Layout,
  "ai-ml-solutions": Sparkles,
  "maintenance-support": ShieldCheck,
};

export const WhatWeDoSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#e4f9f3] text-[#0B091D] py-24 sm:py-32 relative overflow-hidden border-y border-[#14af81]/20">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14af81]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14af81]/15 border border-[#14af81]/30 text-[#14af81] text-xs font-mono uppercase tracking-wider mb-5 font-bold shadow-sm">
              <Code2 className="w-3.5 h-3.5" />
              <span>Full-Lifecycle Capabilities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B091D] mb-5 font-display leading-[1.08]">
              What We <br />
              <span className="text-[#14af81]">Build &amp; Operate.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#374151] leading-relaxed max-w-md font-medium">
              We architect, engineer, and support digital products end-to-end.
              From intuitive user interfaces and resilient backend systems to
              applied machine learning and continuous production operations.
            </p>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#14af81] hover:text-[#0B091D] transition-colors py-1 group"
              >
                <span>Explore all 7 service lines</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Accordion list */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#14af81]/25">
              {servicesData.map((service, idx) => {
                const Icon = iconMap[service.slug] || Code2;
                const isOpen = openIdx === idx;

                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="group w-full text-left flex items-center gap-5 py-6 sm:py-7 transition-all duration-200 cursor-pointer outline-none"
                    >
                      {/* Step number */}
                      <span className="font-mono text-xs font-bold text-[#14af81] w-6 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Icon */}
                      <div
                        className={`p-2.5 rounded-xl transition-all duration-300 shrink-0 ${
                          isOpen
                            ? "bg-[#14af81] text-white shadow-md shadow-[#14af81]/30"
                            : "bg-white text-[#14af81] shadow-sm border border-[#14af81]/20 group-hover:bg-[#14af81] group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Title + badge */}
                      <div className="flex-1 min-w-0 flex items-center gap-3">
                        <h3
                          className={`text-base sm:text-lg font-bold transition-colors ${
                            isOpen
                              ? "text-[#14af81]"
                              : "text-[#0B091D] group-hover:text-[#14af81]"
                          }`}
                        >
                          {service.title}
                        </h3>
                        {service.badge && (
                          <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-[#14af81]/15 text-[#14af81] border border-[#14af81]/30 font-bold uppercase hidden sm:block">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Chevron */}
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 text-[#14af81]"
                            : "text-[#6B7280] group-hover:text-[#14af81]"
                        }`}
                      />
                    </button>

                    {/* Expandable detail */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[4.25rem] pb-6 space-y-4">
                            <p className="text-sm text-[#374151] leading-relaxed max-w-xl font-medium">
                              {service.shortDesc}
                            </p>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2">
                              {service.techStack.slice(0, 5).map((tech) => (
                                <span
                                  key={tech}
                                  className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-white text-[#0B091D] border border-[#14af81]/30 shadow-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Metric + CTA */}
                            <div className="flex items-center justify-between pt-1">
                              {service.metrics[0] && (
                                <span className="text-xs font-mono text-[#4B5563]">
                                  {service.metrics[0].label}:{" "}
                                  <span className="text-[#0B091D] font-bold">
                                    {service.metrics[0].value}
                                  </span>
                                </span>
                              )}
                              <Link
                                href={`/services/${service.slug}`}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14af81] hover:text-[#0B091D] transition-all group/link"
                              >
                                <span>Full service brief</span>
                                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
