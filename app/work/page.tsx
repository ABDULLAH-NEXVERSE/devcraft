"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import {
  TrendingUp,
  ArrowUpRight,
  ExternalLink,
  Filter,
  CheckCircle2,
} from "lucide-react";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { ContactSection } from "@/components/sections/ContactSection";

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

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-[#18CB96]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Case Studies &amp; Verified Proof</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Our Work — <span className="text-gradient-emerald">Delivered &amp; Proven.</span>
        </h1>
        <p className="text-sm sm:text-base font-body text-[#A4A2B2] leading-relaxed max-w-3xl mx-auto">
          Explore production software, web portals, and mobile platforms engineered by DevCraft across logistics, procurement, clinical healthcare, institutional finance, and commerce.
        </p>
      </div>

      {/* Client Logos Wall */}
      <div className="mb-14 rounded-3xl overflow-hidden border border-white/10">
        <LogoTicker />
      </div>

      {/* Filters Section */}
      <div className="p-6 rounded-3xl glass-panel border border-white/10 mb-12 bg-[#0B0B10]/80 space-y-4">
        {/* Service Filters */}
        <div>
          <div className="text-[11px] font-mono text-[#18CB96] uppercase font-semibold mb-2 flex items-center gap-1.5">
            <Filter className="w-3 h-3" />
            <span>Filter by Service:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {serviceFilters.map((sf) => (
              <button
                key={sf.value}
                onClick={() => setSelectedService(sf.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedService === sf.value
                    ? "bg-[#18CB96] text-[#0B0B10] font-bold shadow-[0_0_12px_rgba(24,203,150,0.3)]"
                    : "bg-white/5 text-[#A4A2B2] hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {sf.label}
              </button>
            ))}
          </div>
        </div>

        {/* Industry Filters */}
        <div className="pt-2 border-t border-white/5">
          <div className="text-[11px] font-mono text-[#80E2C5] uppercase font-semibold mb-2 flex items-center gap-1.5">
            <Filter className="w-3 h-3" />
            <span>Filter by Industry:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {industryFilters.map((inf) => (
              <button
                key={inf.value}
                onClick={() => setSelectedIndustry(inf.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedIndustry === inf.value
                    ? "bg-[#18CB96] text-[#0B0B10] font-bold shadow-[0_0_12px_rgba(24,203,150,0.3)]"
                    : "bg-white/5 text-[#A4A2B2] hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {inf.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Cards Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center rounded-3xl glass-panel border border-white/10 my-10">
          <p className="text-sm text-[#A4A2B2] mb-3">
            No projects match the selected combination of service and industry filters.
          </p>
          <button
            onClick={() => {
              setSelectedService("all");
              setSelectedIndustry("all");
            }}
            className="text-xs font-bold text-[#18CB96] underline"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-[#18CB96]/40 transition-all flex flex-col justify-between bg-[#0B0B10]/85 group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-44 rounded-2xl overflow-hidden mb-5 bg-[#131219] border border-white/10">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-60" />

                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B0B10]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#18CB96]">
                    <span>{project.category}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 p-1 flex items-center justify-center shrink-0">
                    <Image
                      src={project.clientLogo}
                      alt={project.client}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    {project.client}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#18CB96] transition-colors leading-snug font-display">
                  {project.title}
                </h3>

                {/* Strict 2-Line Truncation */}
                <p className="text-xs text-[#A4A2B2] leading-relaxed mb-4 line-clamp-2 min-h-[2rem]" title={project.summary}>
                  {project.summary}
                </p>

                {/* Outcome Metrics */}
                {project.results && project.results.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 mb-4 p-2 rounded-xl bg-white/5 border border-white/5">
                    {project.results.slice(0, 2).map((r) => (
                      <div key={r.label}>
                        <div className="text-xs font-bold font-mono text-[#18CB96]">
                          {r.metric}
                        </div>
                        <div className="text-[9px] text-[#A4A2B2] truncate">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Tags: Top 2 tags + Pill badge */}
                <div className="tag-strip-nowrap mb-4">
                  {project.techStack.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#80E2C5] shrink-0"
                    >
                      {t}
                    </span>
                  ))}
                  {project.techStack.length > 2 && (
                    <span
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#18CB96]/10 text-[#18CB96] border border-[#18CB96]/25 shrink-0"
                      title={project.techStack.slice(2).join(", ")}
                    >
                      +{project.techStack.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#A4A2B2] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-[#6B697D]">
                    Enterprise System
                  </span>
                )}

                <Link
                  href={`/work/${project.slug}`}
                  className="text-xs font-bold text-[#18CB96] hover:text-[#4ED7AE] flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dual CTA */}
      <ContactSection />
    </div>
  );
}
