"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiFlutter,
  SiNodedotjs,
  SiPython,
  SiWordpress,
  SiTypescript,
  SiFigma,
} from "react-icons/si";
import { FadeInWhenVisible } from "@/components/ui/BrandImage";

const stack = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Flutter", Icon: SiFlutter, color: "#27AEE3" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#4B8BBE" },
  { name: "WordPress", Icon: SiWordpress, color: "#3894C7" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

function TechOrbit() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-[400px] items-center justify-center sm:h-[460px] sm:max-w-[460px] md:h-[540px] md:max-w-[540px]" style={{ overflow: "visible" }}>
      {/* Central static anchor with logo green ambient glow */}
      <div className="z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--bg)]/90 text-center backdrop-blur-md shadow-[0_0_40px_rgba(24,203,150,0.2)] sm:h-32 sm:w-32 md:h-40 md:w-40">
        <span className="font-[var(--font-display)] text-sm font-bold tracking-wider text-[var(--accent)] uppercase sm:text-base md:text-lg">
          Technology
        </span>
        <span className="font-[var(--font-display)] text-[10px] tracking-widest text-[var(--ink-soft)] uppercase sm:text-xs">
          Stack
        </span>
      </div>

      {/* Orbit Track Lines */}
      <div className="absolute h-[220px] w-[220px] rounded-full border border-dashed border-[var(--line)] sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px]" />
      <div className="absolute h-[320px] w-[320px] rounded-full border border-[var(--line)]/50 sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px]" />

      {/* Rotating Ring 1 (Inner Stack - 5 items) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px]"
        style={{ overflow: "visible" }}
      >
        {stack.slice(0, 5).map(({ name, Icon, color }, i) => {
          const innerPositions = [
            { left: "100%", top: "50%" },
            { left: "65.45%", top: "97.55%" },
            { left: "9.55%", top: "79.39%" },
            { left: "9.55%", top: "20.61%" },
            { left: "65.45%", top: "2.45%" },
          ];
          const pos = innerPositions[i];
          return (
            <div
              key={name}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto"
              style={{ left: pos.left, top: pos.top, zIndex: 20 }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[#0f1523]/90 text-white shadow-lg transition-transform hover:scale-125 cursor-pointer hover:border-[var(--accent)]"
                style={{ overflow: "visible" }}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-colors shrink-0" style={{ color }} />
                {/* Tooltip above the icon — avoids clipping by any ancestor */}
                <span
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-[#0A1220] px-2.5 py-1 text-[11px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 shadow-xl border border-[var(--accent)]/30 font-mono font-medium"
                  style={{ zIndex: 9999 }}
                >
                  {name}
                  {/* tiny caret */}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-2 h-2 bg-[#0A1220] border-b border-r border-[var(--accent)]/30 rotate-45" />
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Rotating Ring 2 (Outer Stack - 4 items - Counter Rotation) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px]"
        style={{ overflow: "visible" }}
      >
        {stack.slice(5).map(({ name, Icon, color }, i) => {
          const outerPositions = [
            { left: "100%", top: "50%" },
            { left: "50%", top: "100%" },
            { left: "0%", top: "50%" },
            { left: "50%", top: "0%" },
          ];
          const pos = outerPositions[i];
          return (
            <div
              key={name}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto"
              style={{ left: pos.left, top: pos.top, zIndex: 20 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
                className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[#0f1523]/90 text-white shadow-lg transition-transform hover:scale-125 cursor-pointer hover:border-[var(--accent)]"
                style={{ overflow: "visible" }}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-colors shrink-0" style={{ color }} />
                {/* Tooltip above the icon — avoids clipping by any ancestor */}
                <span
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-[#0A1220] px-2.5 py-1 text-[11px] text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 shadow-xl border border-[var(--accent)]/30 font-mono font-medium"
                  style={{ zIndex: 9999 }}
                >
                  {name}
                  {/* tiny caret */}
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-2 h-2 bg-[#0A1220] border-b border-r border-[var(--accent)]/30 rotate-45" />
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export const TechStripSection: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 overflow-hidden">
      <FadeInWhenVisible className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          Engineered For Performance
        </span>
        <h2 className="mt-3 font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">
          Our Technology Stack
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-[var(--ink-soft)]">
          We utilize high-performance modern frameworks and tools engineered for
          speed, scalability, and long-term security.
        </p>
      </FadeInWhenVisible>

      <div className="mt-14 md:mt-16">
        <TechOrbit />
      </div>
    </section>
  );
};
