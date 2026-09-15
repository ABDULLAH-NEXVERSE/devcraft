"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { homeData } from "@/data/homeData";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const BentoGrid: React.FC = () => {
  return (
    <section id="solutions" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#18CB96]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
          Integrated Systems. Zero Delivery Risk.
        </h2>
        <p className="text-[#A4A2B2] max-w-2xl mx-auto text-base sm:text-lg">
          We bring together enterprise cloud engineering, autonomous AI workflows, and agency partnership models into one cohesive technical delivery engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {homeData.bentoFeatures.map((feature) => (
          <div
            key={feature.id}
            className={`${
              feature.colSpan === 2 ? "md:col-span-8" : "md:col-span-4"
            } group`}
          >
            <SpotlightCard
              enableTilt={true}
              chamfer={true}
              className="p-8 sm:p-10 h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-[#18CB96] font-semibold tracking-wider flex items-center gap-1.5">
                    <span>{feature.category}</span>
                  </span>
                  {feature.metric && (
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#18CB96]/15 text-[#18CB96] border border-[#18CB96]/30">
                      {feature.metric}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#A4A2B2] text-xs sm:text-sm font-body leading-relaxed max-w-2xl line-clamp-2 min-h-[2.5rem]">
                  {feature.description}
                </p>

                {feature.image && (
                  <div className="relative w-full h-40 sm:h-48 rounded-xl overflow-hidden border border-white/10 mb-4 bg-[#0B0B10] mt-6">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10]/70 via-transparent to-transparent" />
                  </div>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-[#A4A2B2]">
                  {feature.category}
                </div>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18CB96] hover:text-[#4ED7AE] group-hover:translate-x-1 transition-all"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
};
