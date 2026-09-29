"use client";

import React from "react";
import Link from "next/link";
import { BrandImage, FadeInWhenVisible } from "@/components/ui/BrandImage";

const work = [
  {
    name: "Kamraj Enterprises",
    industry: "Logistics / Trade",
    copy: "Global scrap-metal indenting house sourcing for steel mills across South Asia.",
    img: "/assets/kamrajenterprises.jpg",
  },
  {
    name: "Prime Commodities FZE",
    industry: "Logistics / Trade",
    copy: "UAE-based scrap-metal trading company serving mills and foundries across the Middle East.",
    img: "/assets/primecommodities.jpg",
  },
  {
    name: "Duralean UK",
    industry: "Procurement & Compliance",
    copy: "UK procurement and outsourcing company automating high-volume vendor compliance.",
    img: "/assets/duralean.jpg",
  },
];

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="py-36 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInWhenVisible>
          <h2 className="font-[var(--font-display)] text-4xl font-semibold md:text-5xl">
            Recent work.
          </h2>
        </FadeInWhenVisible>
      </div>

      <div className="mt-16 space-y-4">
        {work.map((w) => (
          <div key={w.name} className="group relative overflow-hidden">
            <BrandImage
              src={w.img}
              alt={w.name}
              className="h-[55vh] md:h-[72vh] w-full"
              tint="green"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-14">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                {w.industry}
              </p>
              <h3 className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-white md:text-5xl">
                {w.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                {w.copy}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Link
          href="/work"
          className="mt-10 inline-block text-sm font-semibold tracking-wide text-[var(--accent)] transition hover:underline"
        >
          See all our work &rarr;
        </Link>
      </div>
    </section>
  );
};
