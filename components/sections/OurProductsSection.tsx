"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BrandImage, FadeInWhenVisible } from "@/components/ui/BrandImage";

const products = [
  {
    name: "ProRota",
    tag: "Workforce Management, HR Vetting & CRM",
    copy: "An all-in-one platform for service businesses — intelligent scheduling, GPS attendance, SIA/BS7858 compliance tracking, payroll integration and an AI workforce assistant.",
    tags: ["Scheduling", "Compliance", "AI Assistant", "Mobile Apps"],
    img: "/assets/Prorota.png",
  },
  {
    name: "NexEats",
    tag: "Food Delivery Marketplace",
    copy: "A consumer food-delivery app connecting diners with local restaurants — live order tracking and restaurant onboarding, built bilingual for the Algerian market.",
    tags: ["Marketplace", "Live Tracking", "Restaurant Dashboard"],
    img: "/assets/nexeat.png",
  },
  {
    name: "NexRider",
    tag: "Delivery Rider App",
    copy: "The companion rider app for NexEats — active delivery management, real-time earnings and vehicle details, built for on-the-go use.",
    tags: ["Rider Ops", "Earnings Tracking", "iOS"],
    img: "/assets/nexrider.jpg",
  },
];

export const OurProductsSection: React.FC = () => {
  return (
    <section
      className="py-40 md:py-52"
      style={{
        backgroundColor: "var(--surface)",
        color: "var(--ink-dark)",
      }}
    >
      <div className="mx-auto max-w-7xl px-8 md:px-12">
        <FadeInWhenVisible>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#10946d]">
            In-House Products
          </span>
          <h2 className="mt-2 max-w-2xl font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">
            We don&apos;t just build software for clients. We run our own.
          </h2>
        </FadeInWhenVisible>

        <div className="mt-28 space-y-36 md:mt-36 md:space-y-48">
          {products.map((p, i) => {
            const leftImage = i % 2 === 0;
            return (
              <div
                key={p.name}
                className="grid items-center gap-12 md:grid-cols-2 md:gap-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`${leftImage ? "md:order-1" : "md:order-2"}`}
                >
                  <BrandImage
                    src={p.img}
                    alt={p.name}
                    className="h-[360px] rounded-2xl border border-black/10 md:h-[480px] shadow-xl"
                    tint="green"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`px-2 md:px-0 ${
                    leftImage ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#10946d]">
                    Product 0{i + 1}
                  </span>
                  <h3 className="mt-1 font-[var(--font-display)] text-3xl font-semibold md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#10946d]">
                    {p.tag}
                  </p>
                  <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--muted-dark)]">
                    {p.copy}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/15 bg-black/5 px-3.5 py-1 text-xs font-medium text-[var(--muted-dark)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/products"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#10946d] transition-colors hover:text-black"
                  >
                    Explore {p.name}{" "}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
