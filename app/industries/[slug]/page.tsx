import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { industriesData } from "@/data/industriesData";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry | DevCraft" };

  return {
    title: `${industry.title} App & Software Development | DevCraft`,
    description: industry.shortDesc,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A4A2B2] hover:text-[#18CB96] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Industries</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 relative overflow-hidden mb-14 bg-[#0B0B10]/90">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#18CB96]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30 text-[#18CB96] text-xs font-mono">
            <Layers className="w-3 h-3" />
            <span>Sector Architecture Blueprint</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {industry.title} Software Development
          </h1>

          <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed">
            {industry.shortDesc}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            {industry.techStack.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-[#80E2C5] border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge vs DevCraft Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-3">
          <div className="text-xs font-mono uppercase text-[#ff8b8b] font-bold">
            The Industry Problem
          </div>
          <h3 className="text-xl font-bold text-white">
            Operational Drag &amp; Compliance Risks
          </h3>
          <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
            {industry.clientProblem}
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-[#18CB96]/30 bg-[#18CB96]/5 space-y-3">
          <div className="text-xs font-mono uppercase text-[#18CB96] font-bold">
            The DevCraft Solution
          </div>
          <h3 className="text-xl font-bold text-white">
            Purpose-Built Scalable Architecture
          </h3>
          <p className="text-xs sm:text-sm text-[#d6d9ea] leading-relaxed">
            {industry.devcraftApproach}
          </p>
        </div>
      </div>

      {/* Key Deliverables & Systems */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 mb-14">
        <h3 className="text-xl font-bold text-white mb-6">
          Architectural Capabilities for {industry.title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industry.keySolutions.map((sol) => (
            <div key={sol} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#18CB96] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-[#d6d9ea] font-medium">{sol}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products / Proof Points */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 mb-16">
        <h3 className="text-xl font-bold text-white mb-2">
          Shipped Proof in this Sector
        </h3>
        <p className="text-xs text-[#A4A2B2] mb-6">
          Real live software platforms engineered by DevCraft operating in {industry.title.toLowerCase()}.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {industry.proofPoints.map((pp) => (
            <div key={pp.name} className="p-6 rounded-2xl bg-[#0B0B10] border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white mb-1.5">{pp.name}</h4>
                <p className="text-xs text-[#A4A2B2] leading-relaxed mb-4">
                  {pp.description}
                </p>
              </div>
              <Link
                href={pp.link}
                className="text-xs font-semibold text-[#18CB96] hover:text-[#4ED7AE] flex items-center gap-1"
              >
                <span>View Shipped Platform</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dual CTA */}
      <ContactSection />
    </div>
  );
}
