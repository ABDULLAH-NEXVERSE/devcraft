"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface BrandImageProps {
  src: string;
  alt: string;
  className?: string;
  tint?: "ink" | "green" | "emerald" | "amber" | "none";
  parallax?: boolean;
}

export function BrandImage({
  src,
  alt,
  className = "",
  tint = "green",
  parallax = true,
}: BrandImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? ["-8%", "8%"] : ["0%", "0%"]
  );

  const getTintOverlay = () => {
    if (tint === "none") return null;
    if (tint === "ink") {
      return "bg-[#0A0E17]/45";
    }
    // "green", "emerald", or legacy "amber" mapped to official logo green
    return "bg-[#18cb96]/15";
  };

  const overlayClass = getTintOverlay();

  return (
    <div
      ref={ref}
      className={`group/img relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 h-[130%] w-full object-cover grayscale-[35%] contrast-[1.06] saturate-[0.85] transition-[filter] duration-700 ease-out group-hover/img:grayscale-0 group-hover/img:saturate-100"
      />
      {overlayClass && (
        <div
          className={`pointer-events-none absolute inset-0 mix-blend-color transition-opacity duration-700 ease-out group-hover/img:opacity-0 ${overlayClass}`}
        />
      )}
    </div>
  );
}

export function FadeInWhenVisible({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
