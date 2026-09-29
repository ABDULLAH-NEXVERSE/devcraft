"use client";

import React from "react";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { TechStripSection } from "@/components/sections/TechStripSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { OurProductsSection } from "@/components/sections/OurProductsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyDevCraftSection } from "@/components/sections/WhyDevCraftSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { VSlabDivider } from "@/components/theme/VSlabDivider";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export default function Home() {
  return (
    <div
      className={`${display.variable} ${body.variable} relative font-[var(--font-body)] overflow-x-clip`}
      style={{
        ["--bg" as string]: "#0A0E17",
        ["--surface" as string]: "#F3EFE7",
        ["--ink" as string]: "#ECEEF5",
        ["--ink-soft" as string]: "#8B90A6",
        ["--ink-dark" as string]: "#191510",
        ["--muted-dark" as string]: "#6B6558",
        ["--accent" as string]: "#18cb96",
        ["--accent-2" as string]: "#5B8DEF",
        ["--line" as string]: "rgba(255,255,255,0.09)",
        backgroundColor: "var(--bg)",
        color: "var(--ink)",
      }}
    >
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 34s linear infinite; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        a:focus-visible, button:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 2px; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }
        }
      `}</style>

      {/* SVG Noise Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* 1. Hero Section (with 3D V Background & ProRota Visual) */}
      <HeroSection />

      {/* 2. Partner Organisations Marquee */}
      <LogoTicker />

      {/* ── 3D V-Cut Slab Divider 1: Deep Asymmetric Downward V ── */}
      <VSlabDivider
        variant="v-down-deep"
        topColor="#0A0E17"
        bottomColor="#0A0E17"
        glowIntensity="medium"
      />

      {/* 3. Technology Stack Orbit */}
      <TechStripSection />

      {/* ── 3D V-Cut Slab Divider 2: Inverted Asymmetric Upward Chevron ── */}
      <VSlabDivider
        variant="v-up-asymmetric"
        topColor="#0A0E17"
        bottomColor="#ffffff"
        glowIntensity="vibrant"
      />

      {/* 4. Full-Lifecycle Services */}
      <WhatWeDoSection />

      {/* ── 3D V-Cut Slab Divider 3: Sculpted Multi-Facet Downward V ── */}
      <VSlabDivider
        variant="v-down-sculpted"
        topColor="#ffffff"
        bottomColor="#F3EFE7"
        glowIntensity="subtle"
      />

      {/* 5. In-House Products (ProRota, NexEats, NexRider) */}
      <OurProductsSection />

      {/* ── 3D V-Cut Slab Divider 4: Sharp DevCraft Chevron Crest (Upward V) ── */}
      <VSlabDivider
        variant="v-up-steep"
        topColor="#F3EFE7"
        bottomColor="#0A0E17"
        glowIntensity="vibrant"
      />

      {/* 6. Interactive Engineering Process (Zig-Zag Step Progression) */}
      <HowWeWorkSection />

      {/* ── 3D V-Cut Slab Divider 5: Asymmetric Carved Shelf V ── */}
      <VSlabDivider
        variant="v-down-carved"
        topColor="#0A0E17"
        bottomColor="#0A0E17"
        glowIntensity="medium"
      />

      {/* 7. Industries We Serve (Accordion Showcase) */}
      <IndustriesSection />

      {/* ── 3D V-Cut Slab Divider 6: Inverted Broad Asymmetric V ── */}
      <VSlabDivider
        variant="v-up-wide"
        topColor="#0A0E17"
        bottomColor="#ffffff"
        glowIntensity="medium"
      />

      {/* 8. Why DevCraft (Core Operational Advantages) */}
      <WhyDevCraftSection />

      {/* ── 3D V-Cut Slab Divider 7: Deep Plunging Asymmetric V ── */}
      <VSlabDivider
        variant="v-down-deep"
        topColor="#ffffff"
        bottomColor="#0A0E17"
        glowIntensity="vibrant"
      />

      {/* 9. Recent Work Showcase */}
      <CaseStudiesSection />

      {/* ── 3D V-Cut Slab Divider 8: Wide Horizon Chevron V ── */}
      <VSlabDivider
        variant="v-chevron-horizon"
        topColor="#0A0E17"
        bottomColor="#0A0E17"
        glowIntensity="vibrant"
      />

      {/* 10. High-Impact Final Conversion CTA */}
      <ContactSection />
    </div>
  );
}