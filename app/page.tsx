import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { OurProductsSection } from "@/components/sections/OurProductsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { MetricsImpactSection } from "@/components/sections/MetricsImpactSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechStripSection } from "@/components/sections/TechStripSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0b091d] text-[#F6F6F8] overflow-hidden">
      {/* Background Ambience Layer */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#14af81]/10 blur-[180px] rounded-full" />
        <div className="absolute top-[40%] -left-40 w-[550px] h-[550px] bg-[#14af81]/5 blur-[200px] rounded-full" />
        <div className="absolute top-[75%] -right-40 w-[650px] h-[650px] bg-[#14af81]/7 blur-[220px] rounded-full" />
      </div>

      {/* 1. Hero Section (Centred 3D V Animation + Refined Telemetry Card) */}
      <HeroSection />

      {/* 2. Client Proof Ticker */}
      <ScrollReveal direction="up" distance={25} duration={0.5}>
        <LogoTicker />
      </ScrollReveal>

      {/* 3. Proof in Numbers: 4-Card Luxury Glassmorphism Grid */}
      <ScrollReveal direction="up" distance={30} duration={0.6}>
        <MetricsImpactSection />
      </ScrollReveal>

      {/* 4. What We Do: Full-Lifecycle Capabilities */}
      <ScrollReveal direction="up" distance={30} duration={0.6}>
        <WhatWeDoSection />
      </ScrollReveal>

      {/* 5. Asymmetric Bento Flagship Proof (ProRota, NexEats, NexRider) */}
      <ScrollReveal direction="up" distance={35} duration={0.6}>
        <OurProductsSection />
      </ScrollReveal>

      {/* 6. Engineering Delivery Engine (Interactive 6-Phase Pipeline) */}
      <ScrollReveal direction="up" distance={30} duration={0.6}>
        <HowWeWorkSection />
      </ScrollReveal>

      {/* 7. Industries We Serve — Vertical Domain Expertise */}
      <IndustriesSection />

      {/* 8. Modern Technology Core Stack */}
      <ScrollReveal direction="up" distance={30} duration={0.5}>
        <TechStripSection />
      </ScrollReveal>

      {/* 9. Interactive Case Studies Showcase */}
      <ScrollReveal direction="up" distance={35} duration={0.6}>
        <CaseStudiesSection />
      </ScrollReveal>

      {/* 10. Seamless Testimonials Marquee */}
      <div className="relative py-6 bg-gradient-to-b from-transparent via-[#0B0B12]/80 to-transparent border-t border-white/[0.04]">
        <ScrollReveal direction="up" distance={35} duration={0.6}>
          <TestimonialsSection />
        </ScrollReveal>
      </div>

      {/* 11. Final High-Impact Conversion CTA */}
      <ScrollReveal direction="up" distance={35} duration={0.6}>
        <ContactSection />
      </ScrollReveal>
    </div>
  );
}
