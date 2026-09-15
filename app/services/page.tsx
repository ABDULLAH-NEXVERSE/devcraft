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
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-[#18CB96]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Page Header per Section 6 */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Full-Stack Development Partner</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Services
        </h1>
        <p className="text-base sm:text-lg font-body text-[#A4A2B2] leading-relaxed max-w-3xl mx-auto">
          One partner for web, mobile, custom software, e-commerce, design and AI — plus the ongoing support to keep it running smoothly around the clock.
        </p>
      </div>

      {/* Services List */}
      <div className="space-y-16 mb-24">
        {servicesData.map((srv, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={srv.slug}
              id={srv.slug}
              className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 hover:border-[#18CB96]/30 transition-all overflow-hidden bg-[#0B0B10]/85"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Text Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#18CB96]/15 border border-[#18CB96]/30 flex items-center justify-center">
                      {serviceIcons[srv.slug] || <Layers className="w-6 h-6 text-[#18CB96]" />}
                    </div>
                    {srv.badge && (
                      <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#18CB96]/15 text-[#18CB96] border border-[#18CB96]/20 font-medium">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1.5">
                      {srv.title}
                    </h2>
                    <div className="text-xs font-mono text-[#4ED7AE] uppercase tracking-wider">
                      {srv.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-body text-[#A4A2B2] leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  {/* Problem solved */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-[#18CB96] font-semibold block mb-1">
                      Problem We Solve:
                    </span>
                    <p className="text-xs text-[#d6d9ea]">
                      {srv.problemSolved}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-white font-semibold block mb-2">
                      What&apos;s Included:
                    </span>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {srv.deliverables.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#A4A2B2]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {srv.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-[#80E2C5] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="px-6 py-3 rounded-full text-xs font-bold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(24,203,150,0.3)]"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/contact?type=quote&service=${srv.slug}`}
                      className="px-6 py-3 rounded-full text-xs font-semibold glass-panel text-white hover:bg-white/10 transition-all border border-white/15"
                    >
                      <span>Request Quote</span>
                    </Link>
                  </div>
                </div>

                {/* Visual Column */}
                <div className={`lg:col-span-6 space-y-4 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden glass-panel border border-white/15 bg-[#0B0B10]">
                    <Image
                      src={srv.heroImage}
                      alt={`${srv.title} Architecture`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Metrics bar */}
                  <div className="grid grid-cols-3 gap-3">
                    {srv.metrics.map((m) => (
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
          );
        })}
      </div>

      {/* Dual CTA */}
      <ContactSection />
    </div>
  );
}
