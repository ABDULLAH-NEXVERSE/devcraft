import React from "react";
import Image from "next/image";
import Link from "next/link";
import { faqData } from "@/data/faqData";
import { CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import { ScrollReveal, ScrollStaggerContainer, ScrollStaggerItem } from "@/components/motion/ScrollReveal";
import { PricingFaqAccordion } from "@/components/sections/PricingFaqAccordion";

export const metadata = {
  title: "Pricing & Engagement Models | DevCraft",
  description:
    "Transparent pricing for automation products, rapid MVP sprints, embedded squads, and enterprise architecture. Starter £200/yr, Premier £400/yr.",
};

export default function PricingPage() {
  const { pricingTiers, faqs, headline, subheadline } = faqData;

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-[#18CB96]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <ScrollReveal direction="up" distance={30} duration={0.6}>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Pricing &amp; Engagement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            {headline}
          </h1>
          <p className="text-base sm:text-lg text-[#A4A2B2] leading-relaxed max-w-3xl mx-auto">
            {subheadline}
          </p>
        </div>
      </ScrollReveal>

      {/* Pricing Tiers */}
      <ScrollStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {pricingTiers.map((tier) => (
          <ScrollStaggerItem key={tier.id} className="h-full">
            <div className={`p-8 rounded-3xl border flex flex-col justify-between h-full transition-all cutout-corner ${
              tier.popular
                ? "glass-panel border-[#18CB96] bg-[#18CB96]/5 shadow-[0_0_30px_rgba(24,203,150,0.15)]"
                : "glass-panel border-white/10 bg-[#0B0B10]"
            }`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-[#18CB96] font-semibold tracking-wider">
                    {tier.name}
                  </span>
                  {tier.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#18CB96]/15 text-[#18CB96] border border-[#18CB96]/20">
                      {tier.badge}
                    </span>
                  )}
                </div>

                 <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white font-mono">{tier.price}</span>
                  <span className="text-xs text-[#A4A2B2] ml-2">{tier.cadence}</span>
                </div>

                <p className="text-xs sm:text-sm font-body text-[#A4A2B2] leading-relaxed mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#A4A2B2]">
                      <CheckCircle2 className="w-4 h-4 text-[#18CB96] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={tier.ctaHref}
                className={`w-full py-3 rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  tier.popular
                    ? "bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] shadow-[0_0_20px_rgba(24,203,150,0.3)]"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                }`}
              >
                <span>{tier.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerContainer>

      {/* FAQ Accordion */}
      <ScrollReveal direction="up" distance={30} duration={0.6}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
              Clarity Before <span className="text-gradient-emerald">Commitment.</span>
            </h2>
          </div>

          <PricingFaqAccordion faqs={faqs} />
        </div>
      </ScrollReveal>

      {/* Bottom CTA */}
      <ScrollReveal direction="up" distance={30} duration={0.6}>
        <div className="text-center p-12 rounded-3xl glass-panel border border-[#18CB96]/30 relative overflow-hidden mt-20">
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Need a Custom Engagement Model?
            </h2>
            <p className="text-xs sm:text-sm text-[#A4A2B2] mb-6">
              Every enterprise engagement is unique. Let&apos;s discuss your specific requirements and craft a tailored proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all shadow-[0_0_20px_rgba(24,203,150,0.3)]"
            >
              <span>Discuss Custom Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
