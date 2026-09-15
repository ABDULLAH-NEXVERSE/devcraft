import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { productsData } from "@/data/productsData";
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Layers,
} from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Our Products | ProRota, NexEats & NexRider | DevCraft",
  description:
    "DevCraft conceives, ships, and actively operates its own live software products: ProRota (workforce & compliance platform), NexEats (food delivery marketplace), and NexRider (logistics rider app).",
};

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Ambience glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#18CB96]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real, Shipped Production Platforms</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Software We Build, Operate &amp; <span className="text-gradient-emerald">Stand Behind.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed">
          The strongest proof of technical capability is live, operating software with real daily users. DevCraft conceives, architects, and actively maintains its own suite of proprietary platforms alongside client projects.
        </p>
      </div>

      {/* Flagship Products Grid */}
      <div className="space-y-16 mb-24">
        {productsData.map((product, idx) => (
          <div
            key={product.id}
            id={product.id}
            className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 relative overflow-hidden bg-[#0B0B10]/80"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Product Info Col */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold uppercase text-[#18CB96] px-3 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30">
                    {product.badge || product.category}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-[#A4A2B2] border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] animate-pulse" />
                    {product.status}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2">
                    {product.name}
                  </h2>
                  <div className="text-sm sm:text-base font-semibold text-[#80E2C5]">
                    {product.tagline}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
                  {product.longDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono text-[#18CB96] uppercase font-semibold">
                    Core Architectural Features:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feat) => (
                      <div key={feat.title} className="p-3 rounded-2xl bg-white/5 border border-white/5">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96] shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-[11px] text-[#A4A2B2] leading-tight">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {product.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#80E2C5] border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {product.liveUrl && (
                    <a
                      href={product.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full text-xs font-bold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(24,203,150,0.3)]"
                    >
                      <span>{product.ctaText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <Link
                    href={`/contact?type=quote&product=${product.id}`}
                    className="px-6 py-3 rounded-full text-xs font-semibold glass-panel text-white hover:bg-white/10 transition-all border border-white/15 flex items-center gap-2"
                  >
                    <span>Talk to Us About a Similar Platform</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Product Visual Mockup Col */}
              <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden glass-panel border border-white/15 bg-[#0B0B10]">
                  <Image
                    src={product.mockupImage}
                    alt={`${product.name} App Interface`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-60" />
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3">
                  {product.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <div className="text-base sm:text-lg font-bold font-mono text-[#18CB96]">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[#A4A2B2] mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Conversion Section */}
      <ContactSection />
    </div>
  );
}
