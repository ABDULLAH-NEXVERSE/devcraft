"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { homeData } from "@/data/homeData";

// Bespoke SVG Vector Schematics for each phase
const StepGraphic: React.FC<{ stepIndex: number }> = ({ stepIndex }) => {
  switch (stepIndex) {
    case 0: // Discover: Architectural Radar & Scope Matrix
      return (
        <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[240px] stroke-[#18CB96]">
          <circle cx="120" cy="70" r="55" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="120" cy="70" r="35" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3" />
          <circle cx="120" cy="70" r="15" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="120" y1="15" x2="120" y2="125" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="65" y1="70" x2="175" y2="70" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="140" cy="52" r="3" fill="#18CB96" />
          <circle cx="102" cy="85" r="2.5" fill="#4ED7AE" />
          <circle cx="132" cy="92" r="2" fill="#18CB96" />
          <path d="M120 70 L155 35" strokeWidth="1.5" stroke="#18CB96" strokeLinecap="round" />
        </svg>
      );
    case 1: // Design: Component Geometry Wireframe
      return (
        <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[240px]">
          <rect x="40" y="25" width="160" height="90" rx="8" stroke="#18CB96" strokeWidth="1.5" strokeOpacity="0.4" />
          <rect x="52" y="38" width="50" height="28" rx="4" fill="#18CB96" fillOpacity="0.12" stroke="#18CB96" strokeWidth="1" />
          <line x1="114" y1="44" x2="185" y2="44" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
          <line x1="114" y1="54" x2="160" y2="54" stroke="#A4A2B2" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
          <rect x="52" y="76" width="136" height="24" rx="4" stroke="#4ED7AE" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="4 4" />
          <circle cx="62" cy="88" r="3" fill="#18CB96" />
          <line x1="72" y1="88" x2="120" y2="88" stroke="#18CB96" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 2: // Build: Branching Code & Pipeline Execution
      return (
        <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[240px]">
          <line x1="45" y1="70" x2="95" y2="70" stroke="#18CB96" strokeWidth="2" strokeLinecap="round" />
          <circle cx="95" cy="70" r="4" fill="#18CB96" />
          <path d="M95 70 C115 70 120 40 145 40 L190 40" stroke="#4ED7AE" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M95 70 C115 70 120 100 145 100 L190 100" stroke="#18CB96" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="190" cy="40" r="3" fill="#4ED7AE" />
          <circle cx="190" cy="100" r="3" fill="#18CB96" />
          <rect x="135" y="60" width="30" height="20" rx="4" fill="#131219" stroke="#18CB96" strokeWidth="1" strokeOpacity="0.4" />
          <text x="142" y="74" fill="#18CB96" fontSize="9" fontFamily="monospace">&lt;/&gt;</text>
        </svg>
      );
    case 3: // Test: Verification Suite & SLA Pass
      return (
        <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[240px]">
          <polygon points="120,20 170,45 170,95 120,120 70,95 70,45" stroke="#18CB96" strokeWidth="1.5" strokeOpacity="0.4" fill="#18CB96" fillOpacity="0.05" />
          <circle cx="120" cy="70" r="22" stroke="#18CB96" strokeWidth="1.5" strokeDasharray="3 2" />
          <path d="M110 70 L117 77 L132 62" stroke="#18CB96" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="96" y="105" fill="#80E2C5" fontSize="8" fontFamily="monospace">100% SLA PASS</text>
        </svg>
      );
    case 4: // Launch: Production Trajectory Vector
      return (
        <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[240px]">
          <line x1="40" y1="110" x2="200" y2="110" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.15" />
          <path d="M50 110 C90 110 120 80 180 30" stroke="#18CB96" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="185,25 172,30 178,38" fill="#18CB96" />
          <line x1="180" y1="30" x2="180" y2="110" stroke="#18CB96" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
          <circle cx="180" cy="110" r="3" fill="#18CB96" />
          <text x="145" y="123" fill="#18CB96" fontSize="8" fontFamily="monospace">PROD DEPLOY</text>
        </svg>
      );
    case 5: // Support: 24/7 Orbital Continuous Telemetry
      return (
        <svg viewBox="0 0 240 140" fill="none" className="w-full h-full max-w-[240px]">
          <ellipse cx="120" cy="70" rx="75" ry="32" stroke="#18CB96" strokeWidth="1.2" strokeOpacity="0.35" transform="rotate(-15 120 70)" />
          <ellipse cx="120" cy="70" rx="75" ry="32" stroke="#4ED7AE" strokeWidth="1.2" strokeOpacity="0.35" transform="rotate(25 120 70)" />
          <circle cx="120" cy="70" r="14" fill="#18CB96" fillOpacity="0.2" stroke="#18CB96" strokeWidth="1.5" />
          <circle cx="120" cy="70" r="4" fill="#18CB96" />
          <circle cx="60" cy="50" r="3" fill="#4ED7AE" />
          <circle cx="178" cy="85" r="3" fill="#18CB96" />
          <text x="96" y="118" fill="#A4A2B2" fontSize="8" fontFamily="monospace">24/7 SHIELD</text>
        </svg>
      );
    default:
      return null;
  }
};

export const HowWeWorkSection: React.FC = () => {
  const { howWeWork } = homeData;
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="how-we-work" className="py-32 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Editorial Split Layout: Sticky Title on Left, Flowing Storyline on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Sticky Editorial Context & Live Progress Track */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Delivery Engine</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
              How We <br />
              <span className="text-gradient-emerald">Deliver Software.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A4A2B2] mt-6 leading-relaxed">
              {howWeWork.description}
            </p>
          </div>

          {/* Editorial Step Jump Navigation */}
          <div className="space-y-2 pt-4 border-t border-white/10 hidden sm:block">
            {howWeWork.steps.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => {
                  setActiveStep(idx);
                  const el = document.getElementById(`process-step-${idx}`);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={`w-full flex items-center justify-between py-2 px-3 rounded-xl text-left transition-all cursor-pointer ${
                  activeStep === idx
                    ? "text-[#18CB96] bg-[#18CB96]/10 font-bold"
                    : "text-[#6B697D] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs opacity-75">{step.step}</span>
                  <span className="text-sm">{step.title}</span>
                </div>
                {activeStep === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
            <div className="text-xs font-mono text-[#18CB96] font-semibold uppercase">
              Two-Team Guarantee
            </div>
            <p className="text-xs text-[#A4A2B2] leading-relaxed">
              Sheffield UX &amp; Architecture synchronizes with Lahore full-stack engineering every single sprint. Zero overnight downtime.
            </p>
          </div>
        </div>

        {/* Right Column: Unboxed Editorial Storyline with Giant Watermark Numerals */}
        <div className="lg:col-span-7 space-y-24 sm:space-y-32">
          {howWeWork.steps.map((step, idx) => (
            <motion.div
              key={step.step}
              id={`process-step-${idx}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              onViewportEnter={() => setActiveStep(idx)}
              transition={{ duration: 0.5 }}
              className="relative group pt-4"
            >
              {/* Giant Watermark Typography Numeral (Unovo Style) */}
              <div
                className="absolute -top-12 -left-4 sm:-left-8 text-8xl sm:text-9xl font-extrabold font-mono text-white/[0.04] select-none pointer-events-none tracking-tighter"
                aria-hidden="true"
              >
                {step.step}
              </div>

              {/* Step Header */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#18CB96] tracking-widest uppercase px-2.5 py-1 rounded bg-[#18CB96]/10">
                    Phase {step.step}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {step.title}
                  </h3>
                </div>

                <span className="text-xs font-mono text-[#80E2C5] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96]" />
                  <span>Verified Deliverable</span>
                </span>
              </div>

              {/* Editorial Content Grid: Text Narrative + Interactive Graphic Schematics */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7 space-y-4">
                  <p className="text-sm sm:text-base text-[#D6D9EA] leading-relaxed">
                    {step.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#A4A2B2] pt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96]" />
                    <span>Continuous Two-Team Review Protocol</span>
                  </div>
                </div>

                {/* Bespoke Interactive Vector Schematics Canvas */}
                <div className="sm:col-span-5 flex items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#18CB96]/30 transition-colors">
                  <StepGraphic stepIndex={idx} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
