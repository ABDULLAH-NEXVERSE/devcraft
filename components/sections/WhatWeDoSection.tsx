"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Boxes,
  ShoppingCart,
  PenTool,
  BrainCircuit,
  LifeBuoy,
} from "lucide-react";
import { BrandImage, FadeInWhenVisible } from "@/components/ui/BrandImage";

const services = [
  {
    name: "Web Development",
    copy: "Marketing sites, web apps and portals on WordPress, Laravel, Next.js and React.",
    icon: Code2,
    img: "/assets/services/web-platform-banner.webp",
  },
  {
    name: "Mobile App Development",
    copy: "Native Kotlin and cross-platform Flutter apps engineered for high performance.",
    icon: Smartphone,
    img: "/assets/services/mobile-app-engineering.webp",
  },
  {
    name: "Custom Software",
    copy: "Bespoke backend systems and internal tools built around how your organization operates.",
    icon: Boxes,
    img: "/assets/services/internal-systems-hero.jpg",
  },
  {
    name: "E-commerce",
    copy: "Storefronts and marketplaces that handle real transaction volume with zero checkout friction.",
    icon: ShoppingCart,
    img: "/assets/portfolio/alif-web-store.webp",
  },
  {
    name: "UI/UX Design",
    copy: "Research and high-fidelity design, handed off design-system-ready with pixel perfection.",
    icon: PenTool,
    img: "/assets/services/design-service-craft.jpg",
  },
  {
    name: "AI & ML Solutions",
    copy: "Applied AI — recommendation engines, automated workflows, and conversational assistants.",
    icon: BrainCircuit,
    img: "/assets/services/agentic-ai-neural-core.webp",
  },
  {
    name: "Maintenance & Support",
    copy: "Continuous monitoring, security patching and 24/7 issue response across Sheffield and Lahore.",
    icon: LifeBuoy,
    img: "/assets/services/safeguard-security-hero.jpg",
  },
];

export const WhatWeDoSection: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      className="px-6 py-28 md:py-36"
      style={{ backgroundColor: "#ffffff", color: "#0f1117" }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeInWhenVisible>
          <h2
            className="max-w-xl font-[var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl"
            style={{ color: "#0f1117" }}
          >
            One partner for the whole build.
          </h2>
        </FadeInWhenVisible>

        <div className="mt-20 grid gap-14 md:grid-cols-[1.3fr_1fr]">
          <div onMouseLeave={() => setActiveService(0)}>
            {services.map((s, i) => {
              const Icon = s.icon;
              const active = activeService === i;
              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onMouseEnter={() => setActiveService(i)}
                  className={`group flex cursor-pointer items-center gap-5 py-7 transition-colors border-t ${
                    i === services.length - 1 ? "border-b" : ""
                  }`}
                  style={{ borderColor: "rgba(0,0,0,0.1)" }}
                >
                  <Icon
                    className={`h-5 w-5 shrink-0 transition-colors ${
                      active ? "text-[var(--accent)]" : "text-[#b0b5c8]"
                    }`}
                  />
                  <h3
                    className={`font-[var(--font-display)] text-2xl font-medium transition-colors md:text-[1.9rem] ${
                      active ? "text-[#0f1117]" : "text-[#9ea4ba]"
                    }`}
                  >
                    {s.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          <div className="relative hidden md:block">
            <div
              className="sticky top-28 overflow-hidden rounded-2xl border bg-[#f7faf9]"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <BrandImage
                    src={services[activeService].img}
                    alt={services[activeService].name}
                    className="h-80 w-full"
                    tint="green"
                    parallax={false}
                  />
                  <div className="p-5">
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#5b6068" }}
                    >
                      {services[activeService].copy}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
