"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Cpu,
  Smartphone,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Activity,
} from "lucide-react";

interface TechItem {
  name: string;
  category: "ai" | "frontend" | "backend" | "mobile";
  role: string;
  metric: string;
  status: "Core Stack" | "Production" | "Enterprise Edge";
  description: string;
}

const technologies: TechItem[] = [
  {
    name: "Next.js 15+ (App Router)",
    category: "frontend",
    role: "SSR & Streaming Core",
    metric: "Core Web Vitals 100",
    status: "Core Stack",
    description: "Concurrent React 19 server components with sub-second largest contentful paint and edge rendering.",
  },
  {
    name: "Tailwind CSS v4",
    category: "frontend",
    role: "Design Token Engine",
    metric: "Zero CSS Runtime",
    status: "Core Stack",
    description: "CSS variables-first atomic utility architecture derived from brand geometry and dark glassmorphic tokens.",
  },
  {
    name: "Three.js & WebGL",
    category: "frontend",
    role: "Kinetic 3D Visuals",
    metric: "60 FPS Hardware Render",
    status: "Production",
    description: "Physical material shaders, scroll inertia, and low-draw-call 3D geometries mirroring company brand marks.",
  },
  {
    name: "Framer Motion & GSAP",
    category: "frontend",
    role: "Choreographed Physics",
    metric: "Sub-16ms Frame Time",
    status: "Production",
    description: "ScrollTrigger synchronization with Lenis smooth scroll for seamless enterprise transitions.",
  },
  {
    name: "LangGraph Multi-Agent",
    category: "ai",
    role: "State Graph Orchestration",
    metric: "Cyclic Tool Loops",
    status: "Enterprise Edge",
    description: "Multi-agent coordinator state machines with human-in-the-loop validation and tool invocation.",
  },
  {
    name: "Claude 3.5 & GPT-4o",
    category: "ai",
    role: "Reasoning & Inference Engine",
    metric: "42ms First-Token SLA",
    status: "Enterprise Edge",
    description: "High-accuracy structured outputs, JSON schema enforcement, and intelligent context window management.",
  },
  {
    name: "Pinecone & pgvector",
    category: "ai",
    role: "Semantic Vector Memory",
    metric: "Million-Item Hybrid Index",
    status: "Enterprise Edge",
    description: "High-density vector indexing and hybrid keyword/dense semantic search across enterprise knowledge bases.",
  },
  {
    name: "FastAPI & Python",
    category: "ai",
    role: "Agent Execution Runtime",
    metric: "Async Concurrency",
    status: "Production",
    description: "Asynchronous agent runtime dispatching parallel tool executions with deterministic error recovery.",
  },
  {
    name: "TypeScript & Node.js",
    category: "backend",
    role: "Type-Safe Application APIs",
    metric: "100% Strict Null Check",
    status: "Core Stack",
    description: "End-to-end type safety spanning database models, server actions, and client interfaces.",
  },
  {
    name: "PostgreSQL & Supabase",
    category: "backend",
    role: "Relational Persistence",
    metric: "Row Level Security (RLS)",
    status: "Core Stack",
    description: "ACID-compliant relational database with connection pooling, automated backups, and real-time streaming.",
  },
  {
    name: "AWS & Vercel Edge",
    category: "backend",
    role: "Global Edge Infrastructure",
    metric: "99.99% Global Uptime",
    status: "Enterprise Edge",
    description: "Multi-region edge compute caching and serverless execution close to international users.",
  },
  {
    name: "Redis & BullMQ",
    category: "backend",
    role: "Distributed Queue & Caching",
    metric: "Sub-5ms Cache Latency",
    status: "Production",
    description: "High-throughput asynchronous job queues handling invoice batches, video renders, and webhooks.",
  },
  {
    name: "React Native & Expo",
    category: "mobile",
    role: "Cross-Platform iOS & Android",
    metric: "Native 60 FPS Threading",
    status: "Core Stack",
    description: "Single codebase compiling into performant iOS and Android apps with full native bridge access.",
  },
  {
    name: "Swift & Kotlin Bridges",
    category: "mobile",
    role: "Hardware Telemetry APIs",
    metric: "Direct Hardware Access",
    status: "Production",
    description: "Low-level Bluetooth BLE, biometric authentication, and offline background sync protocols.",
  },
];

const categoryIcons = {
  all: <Layers className="w-3.5 h-3.5" />,
  ai: <Cpu className="w-3.5 h-3.5" />,
  frontend: <Code2 className="w-3.5 h-3.5" />,
  backend: <Server className="w-3.5 h-3.5" />,
  mobile: <Smartphone className="w-3.5 h-3.5" />,
};

export const ArchitectureRadar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filtered = activeTab === "all"
    ? technologies
    : technologies.filter((t) => t.category === activeTab);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    }
  };

  useEffect(() => {
    checkScroll();
    const el = sliderRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, [filtered]);

  const slide = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 360;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="architecture" className="py-28 px-4 sm:px-6 max-w-7xl mx-auto relative">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#18CB96]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Header with Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Technology Radar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production-Tested Stacks.
          </h2>
          <p className="text-xs sm:text-sm text-[#A4A2B2] mt-2 max-w-xl">
            Swipe through our battle-tested technology landscape across AI agent runtimes, Next.js edge web platforms, and cloud infrastructure.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <button
            onClick={() => slide("left")}
            disabled={!canScrollLeft}
            aria-label="Previous Slide"
            className={`w-11 h-11 rounded-full glass-panel border flex items-center justify-center transition-all ${
              canScrollLeft
                ? "border-[#18CB96]/40 text-[#18CB96] hover:bg-[#18CB96] hover:text-[#0B0B10] shadow-[0_0_15px_rgba(24,203,150,0.2)] cursor-pointer"
                : "border-white/5 text-white/20 cursor-not-allowed opacity-40"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => slide("right")}
            disabled={!canScrollRight}
            aria-label="Next Slide"
            className={`w-11 h-11 rounded-full glass-panel border flex items-center justify-center transition-all ${
              canScrollRight
                ? "border-[#18CB96]/40 text-[#18CB96] hover:bg-[#18CB96] hover:text-[#0B0B10] shadow-[0_0_15px_rgba(24,203,150,0.2)] cursor-pointer"
                : "border-white/5 text-white/20 cursor-not-allowed opacity-40"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {[
          { id: "all", label: "All Layers (14)" },
          { id: "ai", label: "Agentic AI (4)" },
          { id: "frontend", label: "Frontend & WebGL (4)" },
          { id: "backend", label: "Backend & Cloud (4)" },
          { id: "mobile", label: "Mobile Apps (2)" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium font-mono transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#18CB96] text-[#0B0B10] font-semibold shadow-[0_0_15px_rgba(24,203,150,0.3)]"
                : "glass-panel text-[#A4A2B2] border border-white/10 hover:border-[#18CB96]/30 hover:text-white"
            }`}
          >
            {categoryIcons[tab.id as keyof typeof categoryIcons]}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Slider Carousel Container */}
      <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                key={item.name}
                className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start p-6 rounded-3xl glass-panel border border-white/10 hover:border-[#18CB96]/50 transition-all group flex flex-col justify-between relative overflow-hidden bg-[#0B0B10]/70 hover:shadow-[0_10px_30px_-10px_rgba(24,203,150,0.15)]"
              >
                {/* Radial Glow on Card Hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#18CB96]/10 rounded-full blur-2xl group-hover:bg-[#18CB96]/20 transition-all pointer-events-none" />

                <div>
                  {/* Top Metadata Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase text-[#18CB96] px-2.5 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30 font-semibold flex items-center gap-1">
                      <Zap className="w-2.5 h-2.5" />
                      <span>{item.status}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#80E2C5] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {item.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#18CB96] transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-xs font-mono text-[#4ED7AE] mb-3">
                    {item.role}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#A4A2B2] leading-relaxed line-clamp-3 mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Benchmark Pill */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-white">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#18CB96]" />
                    <span className="font-semibold">{item.metric}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6B697D]">
                    Verified SLA
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Progress Bar Indicator */}
        <div className="mt-4 flex items-center justify-between px-1">
          <div className="text-xs font-mono text-[#A4A2B2] flex items-center gap-2">
            <span>Showing {filtered.length} stack components</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-[11px] text-[#80E2C5]">Drag or use arrows to navigate</span>
          </div>

          <div className="w-32 sm:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#18CB96] rounded-full transition-all duration-300 shadow-[0_0_10px_#18CB96]"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
