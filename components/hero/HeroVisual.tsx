"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";

interface HeroVisualProps {
  className?: string;
}

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const getServerReducedMotionSnapshot = () => false;

export const HeroVisual: React.FC<HeroVisualProps> = ({ className = "" }) => {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  return (
    <div
      className={`absolute inset-0 z-[1] w-full h-full pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Full-width 3D visual container */}
      <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]">
        {prefersReducedMotion ? (
          <Image
            src="/assets/hero/hero-3d-v-poster.webp"
            alt="DevCraft 3D Visual"
            fill
            priority
            className="object-cover object-center"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero/hero-3d-v-poster.webp"
            className="w-full h-full object-cover object-center pointer-events-none opacity-90"
          >
            <source src="/assets/hero/hero-3d-v.mp4" type="video/mp4" />
          </video>
        )}
        {/* Soft edge ambient wash to guarantee high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b091d]/85 via-transparent to-[#0b091d]/60 pointer-events-none" />
      </div>
    </div>
  );
};
