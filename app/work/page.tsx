"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import {
  TrendingUp,
  ArrowUpRight,
  ExternalLink,
  Filter,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { ContactSection } from "@/components/sections/ContactSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const serviceFilters = [
  { label: "All Services", value: "all" },
  { label: "Web Development", value: "web-development" },
  { label: "Mobile App", value: "mobile-app-development" },
  { label: "Custom Software", value: "custom-software-development" },
  { label: "E-commerce", value: "ecommerce-development" },
  { label: "UI/UX Design", value: "ui-ux-design" },
  { label: "AI & ML", value: "ai-ml-solutions" },
];

const industryFilters = [
  { label: "All Industries", value: "all" },
  { label: "Logistics & Delivery", value: "logistics-delivery" },
  { label: "Procurement & Compliance", value: "procurement-compliance" },
  { label: "E-commerce & Retail", value: "ecommerce-retail" },
  { label: "Fintech", value: "fintech" },
  { label: "Healthcare", value: "healthcare" },
];

export default function WorkPage() {
  const [selectedService, setSelectedService] = useState("all");
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  const filteredProjects = useMemo(() => {
    return portfolioData.filter((p) => {
      const matchService =
        selectedService === "all" || p.serviceSlug === selectedService;
      const matchIndustry =
        selectedIndustry === "all" || p.industrySlug === selectedIndustry;
      return matchService && matchIndustry;
    });
  }, [selectedService, selectedIndustry]);

  const featuredProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1);

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background Ambience */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[420px] bg-[#18CB96]/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-5 shadow-[0_0_15px_rgba(24,203,150,0.12)]">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Case Studies &amp; Verified Delivery</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-display">
          Our Work — <span className="text-gradient-emerald">Delivered &amp; Proven.</span>
        </h1>
        <p className="text-base sm:text-lg font-body text-[#A4A2B2] leading-relaxed max-w-3xl mx-auto">
          Explore mission-critical web applications, enterprise portals, and mobile platforms engineered by DevCraft across the UK and globally.
        </p>

        {/* Live Stat Ribbon */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div>
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#18CB96]">
              {portfolioData.length}+
            </div>
            <div className="text-xs text-[#A4A2B2] mt-0.5">Enterprise Deployments</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
              99.4%
            </div>
            <div className="text-xs text-[#A4A2B2] mt-0.5">Algorithm Accuracy</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#80E2C5]">
              &lt;0.35s
            </div>
            <div className="text-xs text-[#A4A2B2] mt-0.5">Sub-Second Load Times</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-mono font-extrabold text-white">
              24/7
            </div>
            <div className="text-xs text-[#A4A2B2] mt-0.5">Continuous Monitoring</div>
          </div>
        </div>
      </div>

      {/* Client Logos Ribbon */}
      <div className="mb-14 rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0B0B10]/60 backdrop-blur-md">
        <LogoTicker />
      </div>

      {/* Interactive Filters Bar */}
      <div className="p-6 rounded-3xl glass-panel-elevated border border-white/[0.09] mb-14 bg-[#0A0910]/90 space-y-4">
        {/* Service Filters */}
        <div>
          <div className="text-[11px] font-mono text-[#18CB96] uppercase font-bold mb-2 flex items-center gap-1.5">
            <Filter className="w-3 h-3" />
            <span>Filter by Core Capability:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {serviceFilters.map((sf) => (
              <button
                key={sf.value}
                onClick={() => setSelectedService(sf.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedService === sf.value
                    ? "bg-[#18CB96] text-[#07070A] font-bold shadow-[0_0_15px_rgba(24,203,150,0.4)]"
                    : "bg-white/[0.03] text-[#A4A2B2] hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
                }`}
              >
                {sf.label}
              </button>
            ))}
          </div>
        </div>

        {/* Industry Filters */}
        <div className="pt-3 border-t border-white/5">
          <div className="text-[11px] font-mono text-[#80E2C5] uppercase font-bold mb-2 flex items-center gap-1.5">
            <Filter className="w-3 h-3" />
            <span>Filter by Vertical Sector:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {industryFilters.map((inf) => (
              <button
                key={inf.value}
                onClick={() => setSelectedIndustry(inf.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedIndustry === inf.value
                    ? "bg-[#18CB96] text-[#07070A] font-bold shadow-[0_0_15px_rgba(24,203,150,0.4)]"
                    : "bg-white/[0.03] text-[#A4A2B2] hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
                }`}
              >
                {inf.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Presentation Canvas */}
      {filteredProjects.length === 0 ? (
        <div className="p-16 text-center rounded-3xl glass-panel border border-white/10 my-12">
          <p className="text-base text-[#A4A2B2] mb-4">
            No projects match this specific filter combination.
          </p>
          <button
            onClick={() => {
              setSelectedService("all");
              setSelectedIndustry("all");
            }}
            className="btn-primary-halo px-6 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      ) : (
        <div className="space-y-12 mb-28">
          {/* 1. HERO FEATURE SHOWCASE (Wide Split-Screen Masterpiece) */}
          {featuredProject && (
            <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-white/[0.12] bg-[#0C0B12]/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden group">
              <div className="absolute -right-24 -top-24 w-80 h-80 bg-[#18CB96]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#18CB96]/20 transition-all duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left: Deep Dive Editorial Story */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30 text-xs font-mono font-bold uppercase text-[#18CB96] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Flagship Showcase</span>
                    </span>
                    <span className="text-xs font-mono text-[#A4A2B2] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      {featuredProject.category}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0">
                        <Image
                          src={featuredProject.clientLogo}
                          alt={featuredProject.client}
                          width={22}
                          height={22}
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-mono font-bold text-white uppercase tracking-wide">
                        {featuredProject.client}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display leading-tight">
                      {featuredProject.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed">
                    {featuredProject.summary}
                  </p>

                  {/* Highlight Metrics */}
                  {featuredProject.results && featuredProject.results.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/[0.08]">
                      {featuredProject.results.map((r) => (
                        <div key={r.label}>
                          <div className="text-lg sm:text-xl font-bold font-mono text-[#18CB96]">
                            <AnimatedCounter value={r.metric} />
                          </div>
                          <div className="text-[10px] text-[#A4A2B2] mt-0.5 leading-tight">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-[#80E2C5] border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/work/${featuredProject.slug}`}
                      className="btn-primary-halo px-7 py-3 rounded-full text-xs font-bold flex items-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Read Full Technical Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>

                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary-halo px-6 py-3 rounded-full text-xs font-semibold flex items-center gap-1.5"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: High-Res Viewport Mockup */}
                <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#07070A] shadow-2xl">
                  <Image
                    src={featuredProject.heroImage}
                    alt={featuredProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B12] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#07070A]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#18CB96] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] animate-pulse" />
                    <span>Production Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. ASYMMETRIC SECONDARY SHOWCASE (Varied styles, not uniform boxes) */}
          {secondaryProjects.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
              {secondaryProjects.map((project, idx) => {
                const isWide = idx % 3 === 0;

                return (
                  <div
                    key={project.slug}
                    className={`${
                      isWide ? "lg:col-span-8" : "lg:col-span-4"
                    } flex flex-col justify-between p-7 sm:p-8 rounded-3xl glass-panel border border-white/[0.08] hover:border-[#18CB96]/40 transition-all duration-300 relative overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-1 bg-[#0A0910]/90`}
                  >
                    <div>
                      {/* Visual Header */}
                      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-[#07070A] border border-white/10">
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0910] via-transparent to-transparent opacity-70" />

                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07070A]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#18CB96] font-semibold">
                          <span>{project.category}</span>
                        </div>
                      </div>

                      {/* Client info */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0">
                          <Image
                            src={project.clientLogo}
                            alt={project.client}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                          {project.client}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-[#18CB96] transition-colors font-display">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed mb-5 line-clamp-2">
                        {project.summary}
                      </p>

                      {/* Metrics bar */}
                      {project.results && project.results.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mb-5 p-3 rounded-2xl bg-black/40 border border-white/[0.06]">
                          {project.results.slice(0, 2).map((r) => (
                            <div key={r.label}>
                              <div className="text-sm font-bold font-mono text-[#18CB96]">
                                {r.metric}
                              </div>
                              <div className="text-[10px] text-[#A4A2B2] truncate">
                                {r.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[#80E2C5] border border-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Links */}
                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-[#A4A2B2] hover:text-white flex items-center gap-1 transition-colors"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-[10px] font-mono text-[#6B697D]">
                          Enterprise Blueprint
                        </span>
                      )}

                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18CB96] hover:text-[#4ED7AE] group/arrow transition-colors"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Dual CTA */}
      <ContactSection />
    </div>
  );
}
