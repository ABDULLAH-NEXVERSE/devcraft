import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import {
  Truck,
  ShieldCheck,
  ShoppingBag,
  CreditCard,
  Activity,
  ArrowRight,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Industries We Serve | Logistics, Fintech, Healthcare & Commerce | DevCraft",
  description:
    "DevCraft engineers bespoke web, mobile, and automated compliance platforms for operationally complex industries: Logistics & Delivery, Procurement & Compliance, E-commerce, Fintech, and Healthcare.",
};

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-8 h-8 text-[#18CB96]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#4ED7AE]" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8 text-[#80E2C5]" />,
  CreditCard: <CreditCard className="w-8 h-8 text-[#18CB96]" />,
  Activity: <Activity className="w-8 h-8 text-[#4ED7AE]" />,
};

export default function IndustriesPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#18CB96]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Industry Solutions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Specialised Software for <span className="text-gradient-emerald">Regulated Sectors.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed">
          Generic software agencies struggle when confronted with real-world regulatory boundaries, complex shift rotas, multi-vendor commission splits, or biometric compliance. DevCraft brings proven sector blueprints across 5 core verticals.
        </p>
      </div>

      {/* Industries Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {industriesData.map((ind) => (
          <div
            key={ind.slug}
            className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-[#18CB96]/30 transition-all bg-[#0B0B10]/80 group"
          >
            <div>
              <div className="p-3.5 rounded-2xl bg-[#18CB96]/10 text-[#18CB96] w-fit mb-6 group-hover:bg-[#18CB96]/20 transition-colors">
                {iconMap[ind.icon] || <Layers className="w-8 h-8 text-[#18CB96]" />}
              </div>

              <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#18CB96] transition-colors">
                {ind.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed mb-6">
                {ind.shortDesc}
              </p>

              {/* Client Problem vs Approach */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-[#ff8b8b] uppercase block font-semibold mb-1">
                    Industry Challenge
                  </span>
                  <p className="text-xs text-[#d6d9ea] leading-relaxed">
                    {ind.clientProblem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#18CB96]/10 border border-[#18CB96]/20">
                  <span className="text-[10px] font-mono text-[#18CB96] uppercase block font-semibold mb-1">
                    DevCraft Approach
                  </span>
                  <p className="text-xs text-white leading-relaxed">
                    {ind.devcraftApproach}
                  </p>
                </div>
              </div>

              {/* Solutions List */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-mono text-[#18CB96] uppercase font-semibold">
                  Delivered Architectures:
                </div>
                <ul className="space-y-1.5">
                  {ind.keySolutions.slice(0, 3).map((sol) => (
                    <li key={sol} className="text-xs text-[#A4A2B2] flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96] shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-5 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {ind.techStack.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#80E2C5]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18CB96] hover:text-[#4ED7AE] transition-all"
              >
                <span>Read Sector Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Generation */}
      <ContactSection />
    </div>
  );
}
