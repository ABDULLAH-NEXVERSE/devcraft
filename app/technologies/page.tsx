import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { technologiesData } from "@/data/technologiesData";
import { Cpu, ArrowRight, CheckCircle2, Sparkles, Layers } from "lucide-react";
import { TechLogo } from "@/components/icons/TechLogos";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Technologies & Engineering Stack | DevCraft",
  description:
    "Explore DevCraft's core technology stack across Next.js, React, Flutter, Kotlin, Node.js, Laravel, Python AI/ML, and WordPress with clear deployment applications.",
};

export default function TechnologiesPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#18CB96]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Architecture Stack</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
          Selected Technologies, <span className="text-gradient-emerald">Applied With Intent.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed">
          We don&apos;t chase fads or force every problem into a single framework. We vet and select modern, battle-tested technologies suited to your platform&apos;s concurrency, speed, and maintenance requirements.
        </p>
      </div>

      {/* Categorized Tech Grid */}
      <div className="space-y-12 mb-24">
        {technologiesData.map((category) => (
          <div
            key={category.title}
            className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 bg-[#0B0B10]/80"
          >
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {category.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#A4A2B2]">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((tech) => (
                <div
                  key={tech.name}
                  className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#18CB96]/40 hover:bg-white/10 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center shrink-0 group-hover:border-[#18CB96]/40 group-hover:bg-[#18CB96]/10 transition-colors">
                          <TechLogo name={tech.name} className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-[#18CB96] transition-colors font-mono">
                          {tech.name}
                        </h3>
                      </div>
                      {tech.badge && (
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#18CB96]/15 text-[#18CB96] border border-[#18CB96]/20 shrink-0">
                          {tech.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#A4A2B2] leading-relaxed mt-2">
                      {tech.whatWeUseItFor}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#18CB96]">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Production Battle-Tested</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dual CTA */}
      <ContactSection />
    </div>
  );
}
