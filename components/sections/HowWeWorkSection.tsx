"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/components/providers/LenisProvider";

const processSteps = [
  {
    step: "Discover",
    title: "Problem Discovery & Constraints",
    copy: "We get to the root of the problem — dissecting process bottlenecks, user personas, and technical constraints to lay a bulletproof foundation.",
  },
  {
    step: "Design",
    title: "UX Architecture & Interface",
    copy: "Wireframes and pixel-perfect high-fidelity designs shaped around real user interactions, validated with interactive prototypes.",
  },
  {
    step: "Build",
    title: "Iterative Multi-Team Engineering",
    copy: "Parallel development across front-end, back-end, and mobile teams with continuous delivery of active working builds.",
  },
  {
    step: "Test",
    title: "Rigorous Edge-Case QA",
    copy: "Deep scenario testing and automated QA against real-world operational stress cases, not just happy-path flows.",
  },
  {
    step: "Launch",
    title: "Deployment & Orchestration",
    copy: "Zero-downtime deployment, infrastructure orchestration, monitoring, and comprehensive developer documentation handover.",
  },
  {
    step: "Support",
    title: "24/7 Lifecycle Support",
    copy: "Continuous monitoring, security patches, performance tuning, and 24/7 emergency response guaranteed for every engagement.",
  },
];

export const HowWeWorkSection: React.FC = () => {
  const total = processSteps.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const currentStepRef = useRef(0);
  const { lenis } = useLenis();

  // ─── Direct scroll-to-step mapping (CSS Sticky + Natural Scroll) ───────────
  const updateStep = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const totalScroll = rect.height - window.innerHeight;
    if (totalScroll <= 0) return;

    // Scroll distance traveled inside the pinned container
    const currentScroll = -rect.top;
    const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));

    // Map progress (0 to 1) directly to step indices (0 to 5)
    const newStep = Math.min(total - 1, Math.max(0, Math.floor(progress * total)));

    if (newStep !== currentStepRef.current) {
      setDirection(newStep >= currentStepRef.current ? 1 : -1);
      currentStepRef.current = newStep;
      setCurrentStep(newStep);
    }
  }, [total]);

  // ─── Attach scroll listeners (both window scroll & Lenis scroll) ───────────
  useEffect(() => {
    updateStep();

    window.addEventListener("scroll", updateStep, { passive: true });
    window.addEventListener("resize", updateStep);

    if (lenis) {
      lenis.on("scroll", updateStep);
    }

    return () => {
      window.removeEventListener("scroll", updateStep);
      window.removeEventListener("resize", updateStep);
      if (lenis) {
        lenis.off("scroll", updateStep);
      }
    };
  }, [updateStep, lenis]);

  // ─── Click node: scroll directly to corresponding step ────────────────────
  const scrollToStep = (idx: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const currentScrollY = window.scrollY || window.pageYOffset;
    const containerTop = currentScrollY + rect.top;
    const totalScroll = el.offsetHeight - window.innerHeight;
    // Jump to middle of that step's slice
    const targetProgress = (idx + 0.5) / total;
    const targetY = containerTop + targetProgress * totalScroll;

    if (lenis) {
      lenis.scrollTo(targetY, { duration: 0.8 });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  // ─── Derived values ───────────────────────────────────────────────────────
  const progressPercent = total > 1 ? currentStep / (total - 1) : 0;

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <section
      ref={containerRef}
      id="how-we-work"
      className="relative w-full"
      style={{
        height: "300vh",
        backgroundColor: "#0A0E17",
        color: "#ECEEF5",
      }}
    >
      {/* 
        Sticky Viewport: Stays locked at top:0 for the entire 300vh scroll travel.
        This keeps the section perfectly centered on screen (Screenshot 1 position)
        and prevents it from ever cutting off behind the floating navbar.
      */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        {/* Noise texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "60vw",
            height: "60vw",
            background:
              "radial-gradient(ellipse at center, rgba(24,203,150,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative w-full max-w-6xl px-6 md:px-12">
          {/* ── Header ── */}
          <div className="mb-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              Our Engineering Process
            </span>
            <h2 className="mt-2 font-[var(--font-display)] text-4xl font-semibold text-[#ECEEF5] md:text-5xl">
              How We Work
            </h2>
          </div>

          {/* ── Step counter ── */}
          <div
            className="mb-4 flex items-center justify-between border-b pb-3"
            style={{ borderColor: "rgba(255,255,255,0.09)" }}
          >
            <div className="flex items-center gap-3">
              <span className="font-[var(--font-display)] text-2xl font-bold text-[var(--accent)]">
                0{currentStep + 1}
              </span>
              <span className="text-sm text-[#8B90A6]">/ 0{total}</span>
              <span className="ml-4 hidden font-[var(--font-display)] text-lg font-semibold uppercase tracking-wide text-[#ECEEF5] sm:inline">
                {processSteps[currentStep].step}
              </span>
            </div>
            <p className="hidden text-xs text-[#8B90A6] md:block">
              {currentStep < total - 1 ? "Scroll to advance →" : "All phases complete ✓"}
            </p>
          </div>

          {/* ── Zig-zag progress track ── */}
          <div className="relative h-12 w-full">
            <svg
              className="h-full w-full"
              viewBox="0 0 1000 56"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 28 L 200 6 L 400 50 L 600 6 L 800 50 L 1000 28"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="2.5"
                strokeDasharray="6 5"
              />
              <motion.path
                d="M 0 28 L 200 6 L 400 50 L 600 6 L 800 50 L 1000 28"
                stroke="var(--accent)"
                strokeWidth="3.5"
                strokeLinecap="round"
                animate={{ pathLength: progressPercent }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {/* Step nodes */}
            <div className="absolute inset-0 flex items-center justify-between">
              {processSteps.map((s, idx) => {
                const isActiveNode = idx === currentStep;
                const isPassed = idx < currentStep;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => scrollToStep(idx)}
                    className="flex flex-col items-center gap-1.5 cursor-pointer outline-none"
                    aria-label={`Go to step ${idx + 1}: ${s.step}`}
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                        isActiveNode
                          ? "scale-125 bg-[var(--accent)] text-[#0A0E17] shadow-[0_0_20px_rgba(24,203,150,0.55)]"
                          : isPassed
                          ? "bg-[var(--accent)] text-[#0A0E17]"
                          : "border border-[rgba(255,255,255,0.14)] bg-[#141a29] text-[#8B90A6]"
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span
                      className={`hidden text-[9px] font-semibold uppercase tracking-widest transition-colors md:block ${
                        isActiveNode || isPassed ? "text-[var(--accent)]" : "text-[#3a3f52]"
                      }`}
                    >
                      {s.step}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Step content ── */}
          <div className="relative mt-8 min-h-[160px]">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    opacity: 0,
                    x: dir >= 0 ? 40 : -40,
                  }),
                  center: {
                    opacity: 1,
                    x: 0,
                  },
                  exit: (dir: number) => ({
                    opacity: 0,
                    x: dir >= 0 ? -40 : 40,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-8 md:grid-cols-[1fr_2fr] md:items-start"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                    Phase {currentStep + 1}
                  </span>
                  <h3 className="mt-2 font-[var(--font-display)] text-3xl font-bold text-[#ECEEF5] md:text-4xl">
                    {processSteps[currentStep].title}
                  </h3>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-[#8B90A6] md:text-xl">
                    {processSteps[currentStep].copy}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-5">
                    <div
                      className="h-px w-full rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                      <motion.div
                        className="h-px rounded-full bg-[var(--accent)]"
                        animate={{ width: `${((currentStep + 1) / total) * 100}%` }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <p className="mt-3 text-xs text-[#8B90A6]">
                      Step {currentStep + 1} of {total} —{" "}
                      {currentStep < total - 1
                        ? `${total - currentStep - 1} phase${
                            total - currentStep - 1 > 1 ? "s" : ""
                          } remaining`
                        : "Scroll down to continue"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
