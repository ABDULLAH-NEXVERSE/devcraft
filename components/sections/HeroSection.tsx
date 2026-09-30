"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrandImage, FadeInWhenVisible } from "@/components/ui/BrandImage";

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroProgress, [0, 1], ["0%", "18%"]);
  const cardAY = useTransform(heroProgress, [0, 1], ["0%", "-10%"]);
  const cardBY = useTransform(heroProgress, [0, 1], ["0%", "12%"]);

  return (
    <section ref={heroRef} className="relative pt-24 md:pt-32 overflow-hidden">
      {/* 3D Artwork Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/hero/hero-3d-v-poster.png"
          alt="DevCraft 3D Visual"
          className="h-full w-full object-cover object-center opacity-30 mix-blend-screen scale-105"
        />
        {/* Soft edge ambient wash to guarantee high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/75 via-[var(--bg)]/40 to-[var(--bg)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)]/85 via-[var(--bg)]/50 to-transparent" />
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeInWhenVisible className="max-w-4xl">
          <h1 className="font-[var(--font-display)] text-[2.9rem] font-semibold leading-[1.04] tracking-tight md:text-[5.2rem]">
            We build the software running your operation.
          </h1>
          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-[var(--ink-soft)] md:text-[17px]">
            Web platforms, mobile apps, custom systems and AI products — designed,
            built and supported by two teams working around the clock, for
            logistics, procurement, e-commerce, fintech and healthcare
            businesses.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#06120E] transition hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(24,203,150,0.35)]"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact#consultation"
              className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Book a Free Consultation
            </Link>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Hero Visual Card Showcase */}
      <div className="relative z-10 mx-auto mt-16 h-[380px] max-w-7xl px-6 md:mt-20 md:h-[560px]">
        <motion.div
          style={{ y: heroImgY }}
          className="absolute right-6 top-0 h-full w-[82%] overflow-hidden rounded-[28px] border border-[var(--line)] md:w-[74%]"
        >
          <BrandImage
            src="/assets/prorota1.png"
            alt="DevCraft product interface"
            className="h-full w-full"
            tint="green"
            parallax={false}
          />
        </motion.div>

        <motion.div
          style={{ y: cardAY }}
          className="absolute left-0 top-6 w-[220px] rotate-[-3deg] rounded-2xl border border-[var(--line)] bg-[var(--bg)]/90 p-4 backdrop-blur md:top-10 md:w-[260px]"
        >
          <p className="text-xs text-[var(--ink-soft)]">Live product</p>
          <p className="mt-1 font-[var(--font-display)] text-lg font-semibold">
            ProRota
          </p>
          <p className="mt-1 text-xs text-[var(--ink-soft)]">
            Workforce &amp; compliance platform
          </p>
        </motion.div>

        <motion.div
          style={{ y: cardBY }}
          className="absolute bottom-4 left-4 rotate-[2deg] rounded-2xl border border-[var(--line)] bg-[var(--bg)]/90 px-5 py-3 backdrop-blur md:bottom-10 md:left-8"
        >
          <p className="font-[var(--font-display)] text-2xl font-semibold text-[var(--accent)]">
            24/7
          </p>
          {/* <p className="text-xs text-[var(--ink-soft)]">Sheffield &amp; Lahore</p> */}
        </motion.div>
      </div>
    </section>
  );
};
