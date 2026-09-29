"use client";

import React, { useState } from "react";
import { Truck, ShieldCheck, Store, Landmark, HeartPulse } from "lucide-react";
import { BrandImage, FadeInWhenVisible } from "@/components/ui/BrandImage";

const industries = [
  {
    name: "Logistics & Delivery",
    copy: "Rider and driver apps, real-time fleet telemetry, route optimization, and delivery marketplaces.",
    icon: Truck,
    img: "/assets/hero/industry-showcase-1.jpg",
  },
  {
    name: "Procurement & Compliance",
    copy: "Vetting platforms, BS7858/SIA compliance automation, audit trails, and supplier management workflows.",
    icon: ShieldCheck,
    img: "/assets/portfolio/prorota-commercial-win.jpg",
  },
  {
    name: "E-commerce & Retail",
    copy: "High-throughput storefronts, dynamic inventory synchronization, checkout optimization, and multi-vendor hubs.",
    icon: Store,
    img: "/assets/portfolio/coconut-cosmetics-branding.png",
  },
  {
    name: "Fintech",
    copy: "Secure, regulatory-compliant platforms for cross-border settlements, payment rails, and ledger analytics.",
    icon: Landmark,
    img: "/assets/portfolio/atelyra-fintech.webp",
  },
  {
    name: "Healthcare",
    copy: "Secure clinician scheduling, HIPAA/GDPR-compliant health record handling, and patient engagement portals.",
    icon: HeartPulse,
    img: "/assets/portfolio/ab3-featured-hero.jpg",
  },
];

export const IndustriesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInWhenVisible>
          <h2 className="max-w-xl font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">
            Industries we serve.
          </h2>
        </FadeInWhenVisible>
      </div>

      {/* Desktop Dynamic Accordion */}
      <div className="mx-auto mt-16 hidden max-w-7xl gap-2 px-6 md:flex md:h-[460px]">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          const active = activeIndustry === i;
          return (
            <div
              key={ind.name}
              onMouseEnter={() => setActiveIndustry(i)}
              style={{ flexGrow: active ? 4 : 1 }}
              className="relative cursor-pointer overflow-hidden rounded-2xl transition-[flex-grow] duration-500 ease-out"
            >
              <BrandImage
                src={ind.img}
                alt={ind.name}
                className="h-full w-full"
                tint="green"
                parallax={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />
              <Icon className="absolute right-5 top-5 h-5 w-5 text-[var(--accent)]" />
              <div className="absolute bottom-0 left-0 p-5">
                {active ? (
                  <>
                    <h3 className="font-[var(--font-display)] text-xl font-semibold">
                      {ind.name}
                    </h3>
                    <p className="mt-1 max-w-[240px] text-sm text-[var(--ink-soft)]">
                      {ind.copy}
                    </p>
                  </>
                ) : (
                  <h3 className="whitespace-nowrap font-[var(--font-display)] text-sm font-medium [writing-mode:vertical-rl]">
                    {ind.name}
                  </h3>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Snap Carousel */}
      <div className="mx-auto mt-12 flex max-w-7xl snap-x gap-4 overflow-x-auto px-6 md:hidden">
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <div
              key={ind.name}
              className="relative h-[340px] w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl"
            >
              <BrandImage
                src={ind.img}
                alt={ind.name}
                className="h-full w-full"
                tint="green"
                parallax={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />
              <Icon className="absolute right-4 top-4 h-5 w-5 text-[var(--accent)]" />
              <div className="absolute bottom-0 p-4">
                <h3 className="font-[var(--font-display)] text-lg font-semibold">
                  {ind.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--ink-soft)]">{ind.copy}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
