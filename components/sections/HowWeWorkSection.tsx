"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
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

  const totalSteps = howWeWork.steps.length;
  const currentStep = howWeWork.steps[activeStep] || howWeWork.steps[0];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
  };

  return (
    <section id="how-we-work" className="w-full bg-[#0b091da1] py-24 sm:py-32 relative border-y border-white/[0.05] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#14af81]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start w-full relative z-10">
        {/* Left Column: Header & Interactive Progress Step Track */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_12px_rgba(24,203,150,0.12)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Delivery Engine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1] font-display">
              How We <br />
              <span className="text-gradient-emerald">Deliver Software.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A4A2B2] mt-3.5 leading-relaxed max-w-md">
              {howWeWork.description}
            </p>
          </div>

          {/* Interactive Step Jump Navigation with Active Highlighting */}
          <div className="space-y-1.5 pt-4 border-t border-white/10">
            {howWeWork.steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full flex items-center justify-between py-2.5 px-4 rounded-xl text-left transition-all duration-200 cursor-pointer outline-none focus:outline-none ${
                    isActive
                      ? "text-[#18CB96] bg-[#18CB96]/15 font-bold shadow-[0_0_20px_rgba(24,203,150,0.12)] border border-[#18CB96]/35 translate-x-1"
                      : "text-[#8E8CA0] hover:text-white hover:bg-white/[0.04] border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs ${isActive ? "text-[#18CB96] font-bold" : "text-[#6B697D]"}`}>
                      {step.step}
                    </span>
                    <span className="text-xs sm:text-sm tracking-wide">{step.title}</span>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#18CB96] animate-pulse shadow-[0_0_8px_#18cb96]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Two-Team Guarantee Card */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.07] space-y-1">
            <div className="text-[11px] font-mono text-[#18CB96] font-semibold uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96]" />
              <span>Two-Team Guarantee</span>
            </div>
            <p className="text-xs text-[#A4A2B2] leading-relaxed">
              Sheffield UX synchronizes with Lahore engineering every sprint with zero overnight lag.
            </p>
          </div>
        </div>

        {/* Right Column: Single Dynamic Spotlight Stage Card */}
        <div className="lg:col-span-7 w-full">
          <div className="relative min-h-[420px] sm:min-h-[460px] rounded-3xl bg-gradient-to-b from-[#12111A]/95 via-[#0B0A12]/95 to-[#07070A]/95 border border-white/[0.1] p-7 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between">
            {/* Corner ambient glow */}
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#18CB96]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Giant Background Watermark Numeral */}
            <div
              className="absolute -top-4 -right-2 text-8xl sm:text-9xl font-extrabold font-mono text-white/[0.03] select-none pointer-events-none tracking-tighter"
              aria-hidden="true"
            >
              {currentStep.step}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.step}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 space-y-6"
              >
                {/* Step Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#18CB96] tracking-widest uppercase px-3 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30">
                      Phase {currentStep.step}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                      {currentStep.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-[#80E2C5] flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#18CB96]" />
                    <span>Verified Deliverable</span>
                  </span>
                </div>

                {/* Content Grid: Narrative & Bespoke Vector Schematics */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-7 space-y-4">
                    <p className="text-sm sm:text-base text-[#D6D9EA] leading-relaxed">
                      {currentStep.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-mono text-[#18CB96] pt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] animate-pulse" />
                      <span>Continuous Two-Team Review Protocol</span>
                    </div>
                  </div>

                  {/* Vector Schematics */}
                  <div className="sm:col-span-5 flex items-center justify-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] shadow-inner">
                    <StepGraphic stepIndex={activeStep} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stage Footer Progress Controls */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between relative z-10 mt-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#6B697D]">
                  Step {activeStep + 1} of {totalSteps}
                </span>
                <div className="flex gap-1.5">
                  {howWeWork.steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer outline-none focus:outline-none ${
                        i === activeStep
                          ? "w-7 bg-[#18CB96]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Jump to step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#A4A2B2] hover:text-white hover:border-[#18CB96]/40 hover:bg-white/[0.08] transition-all cursor-pointer outline-none focus:outline-none"
                  aria-label="Previous Phase"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#A4A2B2] hover:text-white hover:border-[#18CB96]/40 hover:bg-white/[0.08] transition-all cursor-pointer outline-none focus:outline-none"
                  aria-label="Next Phase"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
