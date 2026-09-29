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
    <div className="relative mx-auto flex h-[360px] w-full max-w-[360px] items-center justify-center sm:h-[420px] sm:max-w-[420px] md:h-[500px] md:max-w-[500px]">
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
        className="absolute h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px]"
      >
        {stack.slice(0, 5).map(({ name, Icon, color }, i) => {
          const angle = (i / 5) * (2 * Math.PI);
          return (
            <div
              key={name}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{
                left: `calc(50% + ${Math.cos(angle) * 50}%)`,
                top: `calc(50% + ${Math.sin(angle) * 50}%)`,
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[#0f1523]/90 text-white shadow-lg transition-transform hover:scale-125"
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-colors" style={{ color }} />
                <span className="pointer-events-none absolute -bottom-7 whitespace-nowrap rounded bg-[#182032] px-2 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                  {name}
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
        className="absolute h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px]"
      >
        {stack.slice(5).map(({ name, Icon, color }, i) => {
          const angle = (i / 4) * (2 * Math.PI);
          return (
            <div
              key={name}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
              style={{
                left: `calc(50% + ${Math.cos(angle) * 50}%)`,
                top: `calc(50% + ${Math.sin(angle) * 50}%)`,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
                className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[#0f1523]/90 text-white shadow-lg transition-transform hover:scale-125"
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-colors" style={{ color }} />
                <span className="pointer-events-none absolute -bottom-7 whitespace-nowrap rounded bg-[#182032] px-2 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100 z-20">
                  {name}
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
