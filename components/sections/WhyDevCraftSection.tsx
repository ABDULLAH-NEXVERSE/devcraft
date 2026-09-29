"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Clock, Layers } from "lucide-react";
import { FadeInWhenVisible } from "@/components/ui/BrandImage";

const advantages = [
  {
    n: "2",
    icon: Globe2,
    title: "Global Synergy",
    l: "Coordinated teams working seamlessly across Sheffield, UK and Lahore, Pakistan for continuous execution.",
  },
  {
    n: "24/7",
    icon: Clock,
    title: "Continuous Response",
    l: "Real-time system monitoring, rapid issue response, and proactive maintenance built into every project.",
  },
  {
    n: "3",
    icon: Layers,
    title: "In-House Products",
    l: "Live platforms we actively own, build, and scale ourselves — ProRota, NexEats, and NexRider.",
  },
];

export const WhyDevCraftSection: React.FC = () => {
  return (
    <section
      className="relative py-28 md:py-36"
      style={{ backgroundColor: "#ffffff", color: "#0f1117" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <FadeInWhenVisible>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            Our Key Advantages
          </span>
          <h2 className="mt-2 font-[var(--font-display)] text-4xl font-semibold md:text-5xl" style={{ color: "#0f1117" }}>
            Why DevCraft.
          </h2>
        </FadeInWhenVisible>

        <div className="mt-24 grid gap-x-12 gap-y-16 md:grid-cols-3">
          {advantages.map((f, i) => {
            const SymbolIcon = f.icon;
            return (
              <motion.div
                key={f.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="group relative border-l pl-8 transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: "rgba(0,0,0,0.12)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-[var(--font-display)] text-6xl font-bold text-[var(--accent)] md:text-7xl">
                    {f.n}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#f0faf6] text-[var(--accent)] transition-colors group-hover:border-[var(--accent)]">
                    <SymbolIcon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-6 font-[var(--font-display)] text-xl font-semibold" style={{ color: "#0f1117" }}>
                  {f.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "#4b5563" }}>
                  {f.l}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
