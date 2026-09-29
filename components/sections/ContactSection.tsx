"use client";

import React from "react";
import Link from "next/link";
import { FadeInWhenVisible } from "@/components/ui/BrandImage";

export const ContactSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-36 text-center md:py-44">
      {/* Subtle Logo Green Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, black, transparent)",
        }}
      />

      <FadeInWhenVisible>
        <h2 className="relative mx-auto max-w-2xl px-6 font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-6xl">
          Tell us what you&apos;re building.
        </h2>
        <p className="relative mx-auto mt-5 max-w-md px-6 text-[15px] leading-relaxed text-[var(--ink-soft)]">
          Get a free, no-obligation quote — or book a consultation and talk it
          through with us first.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#06120E] transition hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(24,203,150,0.35)]"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact#consultation"
            className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Book a Consultation
          </Link>
        </div>
      </FadeInWhenVisible>
    </section>
  );
};
