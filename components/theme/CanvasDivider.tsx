"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface CanvasDividerProps {
  theme?: "dark" | "light";
  className?: string;
}

export const CanvasDivider: React.FC<CanvasDividerProps> = ({
  theme = "dark",
  className = "",
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const bg =
    theme === "dark"
      ? "linear-gradient(90deg, transparent 0%, rgba(24,203,150,0.3) 30%, rgba(24,203,150,0.5) 50%, rgba(24,203,150,0.3) 70%, transparent 100%)"
      : "linear-gradient(90deg, transparent 0%, rgba(15,153,120,0.4) 30%, rgba(15,153,120,0.6) 50%, rgba(15,153,120,0.4) 70%, transparent 100%)";

  return (
    <motion.div
      style={{ scaleX, background: bg }}
      className={`fixed top-0 left-0 right-0 h-[2px] origin-left z-40 pointer-events-none ${className}`}
    />
  );
};

interface SectionTransitionProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  theme = "dark",
  className = "",
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        backgroundColor: theme === "dark" ? "#07070A" : "#F4F5F7",
      }}
    >
      {children}
    </div>
  );
};
