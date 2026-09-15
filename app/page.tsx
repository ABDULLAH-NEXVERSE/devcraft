import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { OurProductsSection } from "@/components/sections/OurProductsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { MetricsImpactSection } from "@/components/sections/MetricsImpactSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyDevCraftSection } from "@/components/sections/WhyDevCraftSection";
import { TechStripSection } from "@/components/sections/TechStripSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07070A] text-[#F6F6F8] overflow-hidden">
      {/* Background Ambience Layer */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#18CB96]/10 blur-[180px] rounded-full" />
        <div className="absolute top-[40%] -left-40 w-[550px] h-[550px] bg-[#18CB96]/5 blur-[200px] rounded-full" />
        <div className="absolute top-[75%] -right-40 w-[650px] h-[650px] bg-[#18CB96]/7 blur-[220px] rounded-full" />
      </div>

      {/* 1. Hero Section (Rich dark gradient canvas + 72-deg V-Apex interactive particle mesh) */}
      <HeroSection />

      {/* 2. Client Proof Ticker */}
      <ScrollReveal direction="up" distance={25} duration={0.5}>
        <LogoTicker />
      </ScrollReveal>

      {/* 3. Proof in Numbers: Unboxed Canvas Metrics Section (No Card Wrappers) */}
      <ScrollReveal direction="up" distance={30} duration={0.6}>
        <MetricsImpactSection />
      </ScrollReveal>

      {/* 4. What We Do: Streamlined Capabilities */}
      <ScrollReveal direction="up" distance={30} duration={0.6}>
        <WhatWeDoSection />
      </ScrollReveal>

      {/* 5. Asymmetric Bento Flagship Proof (ProRota, NexEats, NexRider) */}
      <ScrollReveal direction="up" distance={35} duration={0.6}>
        <OurProductsSection />
      </ScrollReveal>

      {/* 6. Contrast Break: Editorial Process Storyline (Unboxed, Giant Numerals, SVG Vector Art) */}
      <div className="relative py-8 bg-gradient-to-b from-transparent via-[#0F0E15]/60 to-transparent border-y border-white/[0.04]">
        <ScrollReveal direction="up" distance={35} duration={0.6}>
          <HowWeWorkSection />
        </ScrollReveal>
      </div>

      {/* 7. Industries We Serve */}
      <ScrollReveal direction="up" distance={35} duration={0.6}>
        <IndustriesSection />
      </ScrollReveal>

      {/* 8. Why DevCraft (Two-team 24/7 delivery engine) */}
      <ScrollReveal direction="up" distance={35} duration={0.6}>
        <WhyDevCraftSection />
      </ScrollReveal>

      {/* 9. Technologies Core Stack Strip */}
      <ScrollReveal direction="up" distance={30} duration={0.5}>
        <TechStripSection />
      </ScrollReveal>

      {/* 10. Split-Screen Interactive Case Studies Showcase with Live Counter Metrics */}
      <ScrollReveal direction="up" distance={35} duration={0.6}>
        <CaseStudiesSection />
      </ScrollReveal>

      {/* 11. Contrast Break: Seamless Physics Infinite Marquee for Testimonials */}
      <div className="relative py-6 bg-gradient-to-b from-transparent via-[#0B0B12]/80 to-transparent border-t border-white/[0.04]">
        <ScrollReveal direction="up" distance={35} duration={0.6}>
          <TestimonialsSection />
        </ScrollReveal>
      </div>

      {/* 12. Final High-Impact Dual CTA Section */}
      <ScrollReveal direction="up" distance={35} duration={0.6}>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
