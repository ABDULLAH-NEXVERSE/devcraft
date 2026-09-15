"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  Layers,
  X,
  CheckCircle2,
  ArrowRight,
  Activity,
  Zap,
} from "lucide-react";
import { productsData, ProductDetail } from "@/data/productsData";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const OurProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [activeTagPopover, setActiveTagPopover] = useState<string | null>(null);

  const prorota = productsData.find((p) => p.id === "prorota") || productsData[0];
  const nexeats = productsData.find((p) => p.id === "nexeats") || productsData[1];
  const nexrider = productsData.find((p) => p.id === "nexrider") || productsData[2];

  return (
    <section id="our-products" className="py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#18CB96]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Flagship Delivery Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 font-display">
            Our Products — <span className="text-gradient-emerald">Live &amp; Operating.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A4A2B2] max-w-2xl">
            Beyond client builds, DevCraft conceives, ships, and actively operates its own production platforms. Real software with real users—proof we build for the real world.
          </p>
        </div>

        <Link
          href="/products"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono text-[#18CB96] hover:text-[#4ED7AE] transition-colors"
        >
          <span>Explore All Products &rarr;</span>
        </Link>
      </div>

      {/* Asymmetric Bento Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* TILE 1: Wide 2-Column Feature Span (ProRota) */}
        <div className="lg:col-span-8 group">
          <SpotlightCard
            enableTilt={true}
            chamfer={true}
            className="p-7 sm:p-9 h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30 text-xs font-mono font-bold uppercase text-[#18CB96]">
                    {prorota.badge || prorota.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#A4A2B2] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] animate-pulse" />
                    {prorota.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#18CB96] bg-[#18CB96]/10 px-3 py-1 rounded-full border border-[#18CB96]/20">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Enterprise Fleet Active</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {prorota.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#80E2C5]">
                    {prorota.tagline}
                  </p>
                  <p
                    className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed line-clamp-2 min-h-[2.5rem]"
                    title={prorota.description}
                  >
                    {prorota.description}
                  </p>

                  {/* Nowrap Tag Strip with +N more pill */}
                  <div className="tag-strip-nowrap pt-1">
                    {prorota.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#d6d9ea] border border-white/5 shrink-0"
                      >
                        {t}
                      </span>
                    ))}
                    {prorota.tags.length > 2 && (
                      <div
                        className="relative shrink-0"
                        onMouseEnter={() => setActiveTagPopover("prorota")}
                        onMouseLeave={() => setActiveTagPopover(null)}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveTagPopover(
                              activeTagPopover === "prorota" ? null : "prorota"
                            )
                          }
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18CB96]/10 text-[#18CB96] border border-[#18CB96]/25 hover:bg-[#18CB96]/20 transition-colors cursor-pointer"
                        >
                          +{prorota.tags.length - 2} more
                        </button>
                        <AnimatePresence>
                          {activeTagPopover === "prorota" && (
                            <motion.div
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 3 }}
                              className="absolute bottom-full left-0 mb-2 z-30 p-2.5 rounded-xl bg-[#161520] border border-white/15 shadow-2xl flex flex-wrap gap-1.5 w-48 backdrop-blur-xl"
                            >
                              {prorota.tags.slice(2).map((st) => (
                                <span
                                  key={st}
                                  className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#80E2C5]"
                                >
                                  {st}
                                </span>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spatial Mockup Image Viewport */}
                <div className="md:col-span-5 relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 bg-[#07070A]">
                  <Image
                    src={prorota.mockupImage}
                    alt={prorota.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-70" />
                </div>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(prorota)}
                  className="text-xs font-semibold text-[#A4A2B2] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-[#18CB96]" />
                  <span>Specs &amp; Architecture</span>
                </button>

                {prorota.liveUrl && (
                  <a
                    href={prorota.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white hover:text-[#18CB96] flex items-center gap-1 transition-colors"
                  >
                    <span>{prorota.ctaText}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

              <Link
                href={`/contact?type=quote&product=${prorota.id}`}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(24,203,150,0.3)] hover:shadow-[0_0_25px_rgba(24,203,150,0.5)] cursor-pointer"
              >
                <span>Build Similar Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </SpotlightCard>
        </div>

        {/* TILE 2: Tall Vertical Spotlight Card (NexEats) */}
        <div className="lg:col-span-4 group">
          <SpotlightCard
            enableTilt={true}
            chamfer={true}
            className="p-7 h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30 text-[10px] font-mono font-bold uppercase text-[#18CB96]">
                  {nexeats.badge || nexeats.category}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-[#A4A2B2] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] animate-pulse" />
                  {nexeats.status}
                </span>
              </div>

              {/* Mockup */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 mb-4 bg-[#07070A]">
                <Image
                  src={nexeats.mockupImage}
                  alt={nexeats.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-75" />
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-1">
                {nexeats.name}
              </h3>
              <p className="text-xs font-semibold text-[#80E2C5] mb-2">
                {nexeats.tagline}
              </p>
              <p
                className="text-xs text-[#A4A2B2] leading-relaxed line-clamp-2 min-h-[2.5rem] mb-3"
                title={nexeats.description}
              >
                {nexeats.description}
              </p>

              {/* Nowrap Tag Strip */}
              <div className="tag-strip-nowrap mb-4">
                {nexeats.tags.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#d6d9ea] border border-white/5 shrink-0"
                  >
                    {t}
                  </span>
                ))}
                {nexeats.tags.length > 2 && (
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18CB96]/10 text-[#18CB96] border border-[#18CB96]/25 shrink-0"
                    title={nexeats.tags.slice(2).join(", ")}
                  >
                    +{nexeats.tags.length - 2} more
                  </span>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setSelectedProduct(nexeats)}
                className="text-xs font-semibold text-[#A4A2B2] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-[#18CB96]" />
                <span>Specs</span>
              </button>

              <Link
                href={`/contact?type=quote&product=${nexeats.id}`}
                className="text-xs font-bold text-[#18CB96] hover:text-[#4ED7AE] flex items-center gap-1 transition-colors"
              >
                <span>Build Marketplace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </SpotlightCard>
        </div>

        {/* TILE 3: Full-Width Focus Tile (NexRider Companion Platform) */}
        {nexrider && (
          <div className="lg:col-span-12 group">
            <SpotlightCard
              enableTilt={true}
              chamfer={true}
              className="p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30 text-[10px] font-mono font-bold uppercase text-[#18CB96]">
                      {nexrider.badge || nexrider.category}
                    </span>
                    <span className="text-xs font-mono text-[#80E2C5] flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-[#18CB96]" />
                      <span>60fps Real-Time Driver Telemetry</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white">
                    {nexrider.name} —{" "}
                    <span className="text-[#80E2C5] text-lg font-normal">
                      {nexrider.tagline}
                    </span>
                  </h3>

                  <p
                    className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed line-clamp-2 max-w-3xl"
                    title={nexrider.description}
                  >
                    {nexrider.description}
                  </p>

                  <div className="tag-strip-nowrap pt-1">
                    {nexrider.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-[#d6d9ea] border border-white/5 shrink-0"
                      >
                        {t}
                      </span>
                    ))}
                    {nexrider.tags.length > 3 && (
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18CB96]/10 text-[#18CB96] border border-[#18CB96]/25 shrink-0"
                        title={nexrider.tags.slice(3).join(", ")}
                      >
                        +{nexrider.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(nexrider)}
                    className="px-5 py-2 rounded-full text-xs font-semibold glass-panel border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer w-full sm:w-auto text-center justify-center"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#18CB96]" />
                    <span>View Architecture Specs</span>
                  </button>

                  <Link
                    href={`/contact?type=quote&product=${nexrider.id}`}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(24,203,150,0.3)] w-full sm:w-auto"
                  >
                    <span>Inquire Platform Build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </div>
        )}
      </div>

      {/* Progressive Disclosure Slide-Over Drawer for Secondary Specs & Metrics */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              className="relative z-10 w-full max-w-md sm:max-w-lg bg-[#0F0E15] h-full p-6 sm:p-8 border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-xs font-mono text-[#18CB96] uppercase font-semibold">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-0.5">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs text-[#80E2C5] font-semibold mt-0.5">
                      {selectedProduct.tagline}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 rounded-full hover:bg-white/10 text-[#A4A2B2] hover:text-white transition-colors cursor-pointer"
                    aria-label="Close specifications panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-[#A4A2B2] leading-relaxed mb-6">
                  {selectedProduct.longDescription || selectedProduct.description}
                </p>

                {/* Live Verified Benchmarks */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold mb-3">
                    Live Operational Metrics
                  </div>
                  <div className="grid grid-cols-3 gap-2.5">
                    {selectedProduct.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3 rounded-2xl bg-white/5 border border-white/5 text-center"
                      >
                        <div className="text-base font-bold font-mono text-[#18CB96]">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-[#A4A2B2] mt-0.5 leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complete Tech Stack */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold mb-2.5">
                    Complete Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#80E2C5] border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architectural Features */}
                {selectedProduct.features && selectedProduct.features.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                      Architectural Pillars
                    </div>
                    <div className="space-y-2">
                      {selectedProduct.features.map((feat) => (
                        <div
                          key={feat.title}
                          className="p-3 rounded-2xl bg-white/5 border border-white/5"
                        >
                          <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96] shrink-0" />
                            <span>{feat.title}</span>
                          </div>
                          <p className="text-[11px] text-[#A4A2B2] leading-normal">
                            {feat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Action in Drawer */}
              <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
                {selectedProduct.liveUrl && (
                  <a
                    href={selectedProduct.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/15 transition-all flex items-center justify-center gap-2 border border-white/10"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <Link
                  href={`/contact?type=quote&product=${selectedProduct.id}`}
                  className="w-full py-3 rounded-full text-xs font-semibold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(24,203,150,0.35)]"
                >
                  <span>Build Similar Enterprise Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
