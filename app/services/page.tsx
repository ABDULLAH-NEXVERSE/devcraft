import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Layout,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Layers,
  Zap,
  Clock,
  Terminal,
  Activity,
  Check,
} from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Services | Web, Mobile, Custom Software & AI | DevCraft",
  description:
    "One partner for web, mobile, custom software, e-commerce, design and AI — plus the support to keep it running. Delivered by two teams across the UK and Pakistan.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  "web-development": <Globe className="w-6 h-6 text-[#18CB96]" />,
  "mobile-app-development": <Smartphone className="w-6 h-6 text-[#4ED7AE]" />,
  "custom-software-development": <Cpu className="w-6 h-6 text-[#18CB96]" />,
  "ecommerce-development": <ShoppingBag className="w-6 h-6 text-[#80E2C5]" />,
  "ui-ux-design": <Layout className="w-6 h-6 text-[#18CB96]" />,
  "ai-ml-solutions": <Sparkles className="w-6 h-6 text-[#4ED7AE]" />,
  "maintenance-support": <ShieldCheck className="w-6 h-6 text-[#18CB96]" />,
};

export default function ServicesPage() {
  const web = servicesData.find((s) => s.slug === "web-development") || servicesData[0];
  const mobile = servicesData.find((s) => s.slug === "mobile-app-development") || servicesData[1];
  const custom = servicesData.find((s) => s.slug === "custom-software-development") || servicesData[2];
  const ecommerce = servicesData.find((s) => s.slug === "ecommerce-development") || servicesData[3];
  const uiux = servicesData.find((s) => s.slug === "ui-ux-design") || servicesData[4];
  const aiml = servicesData.find((s) => s.slug === "ai-ml-solutions") || servicesData[5];
  const support = servicesData.find((s) => s.slug === "maintenance-support") || servicesData[6];

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#18CB96]/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-5 shadow-[0_0_12px_rgba(24,203,150,0.12)]">
          <Layers className="w-3.5 h-3.5" />
          <span>Full-Lifecycle Engineering Partner</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 font-display">
          Capabilities &amp; <span className="text-gradient-emerald">Architecture.</span>
        </h1>
        <p className="text-base sm:text-lg font-body text-[#A4A2B2] leading-relaxed max-w-3xl mx-auto">
          From rapid front-end interfaces to resilient enterprise backends, applied machine learning, and continuous 24/7 SLA maintenance. Built with intent by our UK and Pakistan engineering centers.
        </p>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {servicesData.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] text-[#A4A2B2] hover:text-[#18CB96] hover:bg-white/[0.08] border border-white/[0.06] transition-all"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* =========================================================================
          TIER 1: FLAGSHIP CORE APPS (Web & Native Mobile Dual-Canvas Split)
          ========================================================================= */}
      <div className="mb-24 space-y-8">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#18CB96] uppercase font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#18CB96] animate-pulse" />
            <span>Tier 01 · Client-Facing Platforms</span>
          </div>
          <span className="text-xs font-mono text-[#6B697D]">Sub-Second Performance Guarantee</span>
        </div>

        {/* Web Development Showcase */}
        <div
          id="web-development"
          className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/[0.12] bg-[#0A0910]/95 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#18CB96]/15 border border-[#18CB96]/30 text-[#18CB96]">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#18CB96] font-bold">
                    {web.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    {web.title}
                  </h2>
                </div>
              </div>

              <p className="text-base text-[#D6D9EA] leading-relaxed">
                {web.shortDesc}
              </p>

              {/* Problem Solved Callout */}
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] border-l-2 border-l-[#18CB96]">
                <div className="text-[10px] font-mono uppercase text-[#18CB96] font-bold mb-1">
                  Problem We Solve:
                </div>
                <p className="text-xs text-[#A4A2B2] leading-relaxed">
                  {web.problemSolved}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {web.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[#A4A2B2]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {web.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-[#80E2C5] border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${web.slug}`}
                  className="btn-primary-halo px-7 py-3 rounded-full text-xs font-bold flex items-center gap-2 group cursor-pointer"
                >
                  <span>Deep-Dive Web Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/contact?type=quote"
                  className="btn-secondary-halo px-6 py-3 rounded-full text-xs font-semibold"
                >
                  Request Web Quote
                </Link>
              </div>
            </div>

            {/* Right: Architectural Console Preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#07070A] shadow-xl">
                <Image
                  src={web.heroImage}
                  alt={web.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0910] via-transparent to-transparent opacity-80" />
              </div>

              {/* Benchmark Stat Ribbon */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-black/40 border border-white/[0.06] text-center">
                <div>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#18CB96]">&lt;0.35s</div>
                  <div className="text-[10px] text-[#A4A2B2]">Load Speed</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white">100/100</div>
                  <div className="text-[10px] text-[#A4A2B2]">Lighthouse</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#80E2C5]">+42%</div>
                  <div className="text-[10px] text-[#A4A2B2]">Conversion Lift</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Development Showcase */}
        <div
          id="mobile-app-development"
          className="rounded-3xl glass-panel-elevated p-8 sm:p-12 border border-white/[0.12] bg-[#0A0910]/95 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Viewport on Left */}
            <div className="lg:col-span-5 space-y-4 order-2 lg:order-1">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-[#07070A] shadow-xl">
                <Image
                  src={mobile.heroImage}
                  alt={mobile.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0910] via-transparent to-transparent opacity-80" />
              </div>

              {/* Benchmark Stat Ribbon */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-black/40 border border-white/[0.06] text-center">
                <div>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#18CB96]">4.9★</div>
                  <div className="text-[10px] text-[#A4A2B2]">Store Rating</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white">&lt;15ms</div>
                  <div className="text-[10px] text-[#A4A2B2]">Telemetry Lag</div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#80E2C5]">100%</div>
                  <div className="text-[10px] text-[#A4A2B2]">Offline Sync</div>
                </div>
              </div>
            </div>

            {/* Narrative on Right */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#18CB96]/15 border border-[#18CB96]/30 text-[#18CB96]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#4ED7AE] font-bold">
                    {mobile.badge}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    {mobile.title}
                  </h2>
                </div>
              </div>

              <p className="text-base text-[#D6D9EA] leading-relaxed">
                {mobile.shortDesc}
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] border-l-2 border-l-[#4ED7AE]">
                <div className="text-[10px] font-mono uppercase text-[#4ED7AE] font-bold mb-1">
                  Problem We Solve:
                </div>
                <p className="text-xs text-[#A4A2B2] leading-relaxed">
                  {mobile.problemSolved}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {mobile.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-[#A4A2B2]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {mobile.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-[#80E2C5] border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={`/services/${mobile.slug}`}
                  className="btn-primary-halo px-7 py-3 rounded-full text-xs font-bold flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Mobile App Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/contact?type=quote"
                  className="btn-secondary-halo px-6 py-3 rounded-full text-xs font-semibold"
                >
                  Request App Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TIER 2: ENTERPRISE LOGIC & APPLIED AI (Asymmetric Bento Showcase)
          ========================================================================= */}
      <div className="mb-24 space-y-8">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#18CB96] uppercase font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#18CB96] animate-pulse" />
            <span>Tier 02 · Complex Business Logic &amp; Machine Learning</span>
          </div>
          <span className="text-xs font-mono text-[#6B697D]">Enterprise-Grade Security &amp; Accuracy</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Custom Software (8 Columns) */}
          <div
            id="custom-software-development"
            className="lg:col-span-8 rounded-3xl glass-panel-elevated p-8 sm:p-10 border border-white/[0.1] bg-[#0A0910]/95 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-[#18CB96]/15 text-[#18CB96] w-fit">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#18CB96]/10 text-[#18CB96] border border-[#18CB96]/20">
                  {custom.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                  {custom.title}
                </h3>
                <p className="text-sm text-[#D6D9EA] leading-relaxed">
                  {custom.shortDesc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <span className="text-[10px] font-mono uppercase text-[#18CB96] font-bold block mb-1">
                  Problem We Solve:
                </span>
                <p className="text-xs text-[#A4A2B2]">
                  {custom.problemSolved}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {custom.deliverables.slice(0, 4).map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-[#A4A2B2]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96] shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div className="text-xs font-mono text-[#80E2C5]">
                Key Outcome: <span className="text-white font-bold">{custom.metrics[0]?.value}</span> {custom.metrics[0]?.label}
              </div>
              <Link
                href={`/services/${custom.slug}`}
                className="btn-primary-halo px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5"
              >
                <span>Explore Architecture</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Applied AI & ML Solutions (4 Columns) */}
          <div
            id="ai-ml-solutions"
            className="lg:col-span-4 rounded-3xl glass-panel-elevated p-8 border border-white/[0.1] bg-[#0A0910]/95 flex flex-col justify-between"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-[#4ED7AE]/15 text-[#4ED7AE] w-fit">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#4ED7AE]/10 text-[#4ED7AE] border border-[#4ED7AE]/20">
                  {aiml.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  {aiml.title}
                </h3>
                <p className="text-xs text-[#D6D9EA] leading-relaxed">
                  {aiml.shortDesc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#18CB96]/5 border border-[#18CB96]/15">
                <div className="text-lg font-mono font-bold text-[#18CB96]">{aiml.metrics[0]?.value}</div>
                <div className="text-[10px] text-[#A4A2B2] uppercase tracking-wider">{aiml.metrics[0]?.label}</div>
              </div>

              <ul className="space-y-2">
                {aiml.deliverables.slice(0, 3).map((d) => (
                  <li key={d} className="text-xs text-[#A4A2B2] flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#18CB96] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <Link
                href={`/services/${aiml.slug}`}
                className="btn-primary-halo w-full py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <span>AI Engineering Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TIER 3: E-COMMERCE, UI/UX & 24/7 SUPPORT (Command Strip Layout)
          ========================================================================= */}
      <div className="mb-28 space-y-8">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#18CB96] uppercase font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#18CB96] animate-pulse" />
            <span>Tier 03 · Commerce, Design Systems &amp; 24/7 Support</span>
          </div>
          <span className="text-xs font-mono text-[#6B697D]">End-to-End Operational Lifecycle</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {/* E-Commerce Development */}
          <div
            id="ecommerce-development"
            className="rounded-3xl glass-panel p-7 sm:p-8 border border-white/[0.08] hover:border-[#18CB96]/35 transition-all flex flex-col justify-between bg-[#0B0B10]/90"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-[#80E2C5]/10 text-[#80E2C5] w-fit">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {ecommerce.title}
              </h3>
              <p className="text-xs text-[#A4A2B2] leading-relaxed">
                {ecommerce.shortDesc}
              </p>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#18CB96] font-mono">
                {ecommerce.metrics[0]?.value} {ecommerce.metrics[0]?.label}
              </div>
            </div>
            <div className="pt-5 border-t border-white/5 mt-5">
              <Link
                href={`/services/${ecommerce.slug}`}
                className="text-xs font-bold text-[#18CB96] hover:text-[#4ED7AE] flex items-center gap-1"
              >
                <span>Explore Commerce &rarr;</span>
              </Link>
            </div>
          </div>

          {/* UI/UX Design Systems */}
          <div
            id="ui-ux-design"
            className="rounded-3xl glass-panel p-7 sm:p-8 border border-white/[0.08] hover:border-[#18CB96]/35 transition-all flex flex-col justify-between bg-[#0B0B10]/90"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-[#18CB96]/10 text-[#18CB96] w-fit">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {uiux.title}
              </h3>
              <p className="text-xs text-[#A4A2B2] leading-relaxed">
                {uiux.shortDesc}
              </p>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#18CB96] font-mono">
                {uiux.metrics[0]?.value} {uiux.metrics[0]?.label}
              </div>
            </div>
            <div className="pt-5 border-t border-white/5 mt-5">
              <Link
                href={`/services/${uiux.slug}`}
                className="text-xs font-bold text-[#18CB96] hover:text-[#4ED7AE] flex items-center gap-1"
              >
                <span>Explore Design Systems &rarr;</span>
              </Link>
            </div>
          </div>

          {/* 24/7 Maintenance & Support */}
          <div
            id="maintenance-support"
            className="rounded-3xl glass-panel p-7 sm:p-8 border border-white/[0.08] hover:border-[#18CB96]/35 transition-all flex flex-col justify-between bg-[#0B0B10]/90"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-[#18CB96]/10 text-[#18CB96] w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                {support.title}
              </h3>
              <p className="text-xs text-[#A4A2B2] leading-relaxed">
                {support.shortDesc}
              </p>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#18CB96] font-mono">
                {support.metrics[0]?.value} {support.metrics[0]?.label}
              </div>
            </div>
            <div className="pt-5 border-t border-white/5 mt-5">
              <Link
                href={`/services/${support.slug}`}
                className="text-xs font-bold text-[#18CB96] hover:text-[#4ED7AE] flex items-center gap-1"
              >
                <span>Explore 24/7 Shield &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dual CTA */}
      <ContactSection />
    </div>
  );
}
