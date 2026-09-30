"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useId, useRef, useState, type CSSProperties, type SyntheticEvent } from "react";
import Link from "next/link";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { MotionConfig, motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Check, CheckCircle2, Code2, Compass, LifeBuoy, PenTool, Rocket } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiFigma,
  SiFlutter,
  SiKotlin,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

/* ------------------------------------------------------------------ */
/*  Fonts — same pairing as the home page                              */
/* ------------------------------------------------------------------ */
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body", display: "swap" });

/* ------------------------------------------------------------------ */
/*  Config                                                             */
/* ------------------------------------------------------------------ */
const CONTACT_EMAIL = "contact@nexverse.co.uk"; // same address as the home page — confirm before launch
const FALLBACK_IMG = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Process", href: "/#how-we-work" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
];

/* Official brand marks (Simple Icons via react-icons) */
type TechKey = "react" | "reactnative" | "next" | "typescript" | "laravel" | "wordpress" | "node" | "python" | "flutter" | "kotlin" | "figma";
const TECH: Record<TechKey, { name: string; Icon: IconType; color: string }> = {
  react: { name: "React", Icon: SiReact, color: "#61DAFB" },
  reactnative: { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  next: { name: "Next.js", Icon: SiNextdotjs, color: "#0f1117" },
  typescript: { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  laravel: { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  wordpress: { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  node: { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  python: { name: "Python", Icon: SiPython, color: "#3776AB" },
  flutter: { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  kotlin: { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
  figma: { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
};

type Service = {
  id: string;
  name: string;
  kicker: string;
  lede: string;
  builds: string[];
  stack: TechKey[];
  img: string;
};

const SERVICE_SLUGS: Record<string, string> = {
  web: "web-development",
  mobile: "mobile-app-development",
  "custom-software": "custom-software-development",
  ecommerce: "ecommerce-development",
  design: "ui-ux-design",
  "ai-ml": "ai-ml-solutions",
  support: "maintenance-support",
};

const SERVICES: Service[] = [
  {
    id: "web",
    name: "Web Development",
    kicker: "Sites and platforms that carry the business",
    lede: "Marketing sites, web apps and customer portals built on the stack that fits the job — WordPress where your content team needs control, Laravel for application logic, Next.js and React for fast, interactive front ends.",
    builds: [
      "Marketing and brand websites",
      "Web applications and customer portals",
      "CMS builds your own team can edit",
      "Performance, SEO and accessibility groundwork",
      "Integrations with the tools you already run",
    ],
    stack: ["wordpress", "laravel", "next", "react", "typescript"],
    img: "/assets/webdevelopment.png",
  },
  {
    id: "mobile",
    name: "Mobile App Development",
    kicker: "Native and cross-platform, built for the field",
    lede: "Native Kotlin and cross-platform Flutter apps engineered for performance — the same approach behind our own workforce and delivery-rider apps.",
    builds: [
      "iOS and Android apps",
      "Real-time features — live tracking, GPS attendance, push notifications",
      "Companion admin dashboards on the web",
      "Store submission and release management",
      "Ongoing updates as your product grows",
    ],
    stack: ["kotlin", "flutter", "reactnative"],
    img: "/assets/mobiledevelopment.png",
  },
  {
    id: "custom-software",
    name: "Custom Software",
    kicker: "Systems shaped around how you operate",
    lede: "Bespoke backend systems and internal tools built around how your organisation actually works — not the other way round.",
    builds: [
      "Internal tools and operations dashboards",
      "Workflow, scheduling and approval systems",
      "Compliance, vetting and audit-trail tooling",
      "APIs and third-party integrations, including payroll",
      "Data models designed to scale with you",
    ],
    stack: ["laravel", "node", "python", "typescript"],
    img: "/assets/procurement.png",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    kicker: "Storefronts and marketplaces that handle real volume",
    lede: "Storefronts and marketplaces that handle real transaction volume, with as much checkout friction engineered out as we can manage.",
    builds: [
      "Custom storefronts and streamlined checkout",
      "Multi-vendor marketplaces",
      "Order management and live order tracking",
      "Vendor and restaurant dashboards",
      "Catalogue and inventory management",
    ],
    stack: ["next", "react", "laravel", "node"],
    img: "/assets/e-commerce.png",
  },
  {
    id: "design",
    name: "UI/UX Design",
    kicker: "Design that developers can build exactly",
    lede: "Research and high-fidelity design, handed off design-system-ready so what ships is what was designed.",
    builds: [
      "User research and journey mapping",
      "Wireframes and interactive prototypes",
      "High-fidelity interface design in Figma",
      "Design systems and component libraries",
      "Usability reviews of existing products",
    ],
    stack: ["figma"],
    img: "/assets/UIandUX.png",
  },
  {
    id: "ai-ml",
    name: "AI & ML Solutions",
    kicker: "Applied AI inside products people already use",
    lede: "Model training and applied AI features embedded in real products — recommendation engines, automated workflows and conversational assistants, like the AI workforce assistant inside ProRota.",
    builds: [
      "Recommendation and ranking features",
      "Workflow automation",
      "Conversational, assistant-style interfaces",
      "Model training and evaluation",
      "AI features added to existing web and mobile products",
    ],
    stack: ["python", "node", "typescript"],
    img: "/assets/AIandML.png",
  },
  {
    id: "support",
    name: "Maintenance & Support",
    kicker: "Someone is always watching",
    lede: "Continuous monitoring, security patching and 24/7 issue response across Sheffield and Lahore — part of every engagement, not an afterthought.",
    builds: [
      "Uptime and performance monitoring",
      "Security patching and dependency updates",
      "24/7 issue response",
      "Continued feature work and iteration",
      "Documentation and clean handover",
    ],
    stack: [],
    img: "/assets/maintenanceAndSupport.png",
  },
];

type Step = { step: string; title: string; copy: string; icon: IconLucide };
type IconLucide = typeof Compass;
const STEPS: Step[] = [
  { step: "Discover", title: "Problem Discovery & Constraints", copy: "We get to the root of the problem — process bottlenecks, user personas and technical constraints — before anyone opens an editor.", icon: Compass },
  { step: "Design", title: "UX Architecture & Interface", copy: "Wireframes and high-fidelity designs shaped around real user interactions, validated with interactive prototypes.", icon: PenTool },
  { step: "Build", title: "Iterative Multi-Team Engineering", copy: "Parallel development across front-end, back-end and mobile, with working builds delivered continuously.", icon: Code2 },
  { step: "Test", title: "Rigorous Edge-Case QA", copy: "Scenario testing against real operating conditions, not just the happy path.", icon: CheckCircle2 },
  { step: "Launch", title: "Deployment & Handover", copy: "Deployment, monitoring and documentation handed over cleanly, so you are never locked in the dark.", icon: Rocket },
  { step: "Support", title: "24/7 Lifecycle Support", copy: "Monitoring, security patches, performance tuning and round-the-clock response for every engagement.", icon: LifeBuoy },
];

const MARQUEE_A: TechKey[] = ["react", "next", "typescript", "laravel", "wordpress"];
const MARQUEE_B: TechKey[] = ["node", "python", "flutter", "kotlin", "figma"];

const HEADLINE: { w: string; a?: boolean }[] = [
  { w: "Seven" }, { w: "disciplines." }, { w: "One" }, { w: "team" }, { w: "that" },
  { w: "owns", a: true }, { w: "the", a: true }, { w: "whole", a: true }, { w: "build.", a: true },
];

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */
function onImgError(e: SyntheticEvent<HTMLImageElement>) {
  const el = e.currentTarget;
  if (el.dataset.fb) return;
  el.dataset.fb = "1";
  el.src = FALLBACK_IMG;
}

function Reveal({ children, delay = 0, y = 28, className }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className="sv-progress" style={{ scaleX }} aria-hidden="true" />;
}

/* Shared pieces — lift Slab into components/ when you add the next pages */

function Slab({ from, to, light = false }: { from: string; to: string; light?: boolean }) {
  const uid = useId().replace(/:/g, "");
  const lipL = light ? ["#e4ede8", "#cedad3"] : ["#17263b", "#0a121d"];
  const lipR = light ? ["#dbe5df", "#c2d0c8"] : ["#0d1724", "#04070c"];
  return (
    <div className="sv-slab" aria-hidden="true" style={{ background: to }}>
      <svg viewBox="0 0 1440 240" preserveAspectRatio="none">
        <defs>
          <filter id={`g${uid}`} x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="8" result="b1" />
            <feGaussianBlur stdDeviation="3" result="b2" />
            <feMerge>
              <feMergeNode in="b1" />
              <feMergeNode in="b2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id={`r${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18cb96" stopOpacity=".15" />
            <stop offset="50%" stopColor="#52ffcb" stopOpacity="1" />
            <stop offset="100%" stopColor="#18cb96" stopOpacity=".15" />
          </linearGradient>
          <linearGradient id={`ll${uid}`} x1="0%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor={lipL[0]} />
            <stop offset="100%" stopColor={lipL[1]} />
          </linearGradient>
          <linearGradient id={`lr${uid}`} x1="30%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={lipR[0]} />
            <stop offset="100%" stopColor={lipR[1]} />
          </linearGradient>
          <linearGradient id={`s${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,.35)" />
            <stop offset="45%" stopColor="rgba(0,0,0,.14)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path d="M0 0 L1440 0 L1440 75 L520 195 L0 45 Z" fill={from} />
        <path d="M0 70 L520 220 L1440 100 L1440 240 L0 240 Z" fill={to} />
        <path d="M0 70 L520 220 L1440 100 L1440 135 L520 240 L0 100 Z" fill={`url(#s${uid})`} />
        <path d="M0 45 L520 195 L520 220 L0 70 Z" fill={`url(#ll${uid})`} />
        <path d="M520 195 L1440 75 L1440 100 L520 220 Z" fill={`url(#lr${uid})`} />
        <path d="M0 45 L520 195 L1440 75" fill="none" stroke="#18cb96" strokeWidth="6" strokeOpacity=".45" filter={`url(#g${uid})`} vectorEffect="non-scaling-stroke" />
        <path d="M0 45 L520 195 L1440 75" fill="none" stroke={`url(#r${uid})`} strokeWidth="1.75" strokeOpacity=".85" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="sv-slab-dot" />
    </div>
  );
}



/* Parallax image with the site's signature desaturate → colour-on-hover treatment */
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  return (
    <div ref={ref} className="sv-img">
      <motion.img src={src} alt={alt} style={{ y }} onError={onImgError} loading="lazy" />
    </div>
  );
}

/* 3D Spiral Staircase Process Component */
function SpiralStep({ step, i, total, scrollYProgress }: { step: Step; i: number; total: number; scrollYProgress: any }) {
  const Icon = step.icon;

  // Use callback-based useTransform to avoid WAAPI "monotonically non-decreasing" errors
  // that occur when input arrays contain values outside [0, 1] range.
  const center = total > 1 ? i / (total - 1) : 0.5;
  const half = 0.5 / total; // visible window for each step

  const opacity = useTransform(scrollYProgress, (v: number) => {
    const dist = Math.abs(v - center);
    if (dist >= half) return 0;
    // Ease in/out within the window
    const t = 1 - dist / half;
    return Math.min(1, t * t * (3 - 2 * t)); // smoothstep
  });

  const rotateY = useTransform(scrollYProgress, (v: number) => {
    const dist = v - center; // negative = incoming, positive = outgoing
    return dist * -360; // full 360° spiral per step window
  });

  const z = useTransform(scrollYProgress, (v: number) => {
    const dist = Math.abs(v - center);
    const t = Math.max(0, 1 - dist / half);
    return (t - 1) * 800; // -800 when off-screen, 0 when centered
  });

  const y = useTransform(scrollYProgress, (v: number) => {
    const dist = v - center;
    return dist * -600; // moves up as you scroll (entering from bottom, exiting top)
  });

  const scale = useTransform(scrollYProgress, (v: number) => {
    const dist = Math.abs(v - center);
    const t = Math.max(0, 1 - dist / half);
    return 0.6 + t * 0.4; // 0.6 → 1.0
  });

  return (
    <motion.div
      className="absolute flex flex-col gap-5 rounded-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.7)]"
      style={{
        width: "min(90vw, 440px)",
        padding: "2rem 2.25rem",
        background: "rgba(10, 14, 23, 0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        opacity,
        rotateY,
        z,
        y,
        scale,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Step counter bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center bg-[var(--accent)] text-[#06120E] shadow-[0_0_24px_rgba(24,203,150,0.4)]">
            <Icon size={22} />
          </div>
          <span className="sv-overline" style={{ margin: 0, letterSpacing: "0.1em", fontSize: "0.8rem" }}>
            {step.step}
          </span>
        </div>
        <span style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#3d4460", letterSpacing: "0.1em" }}>
          {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.2, color: "#fff" }}>
        {step.title}
      </h3>
      <p style={{ fontSize: "0.97rem", color: "#8B90A6", lineHeight: 1.7, margin: 0 }}>
        {step.copy}
      </p>

      {/* Bottom dot indicator */}
      <div className="flex gap-2 pt-1">
        {Array.from({ length: total }).map((_, dot) => (
          <span
            key={dot}
            style={{
              width: dot === i ? "1.5rem" : "0.4rem",
              height: "0.4rem",
              borderRadius: "9999px",
              background: dot === i ? "var(--accent)" : "rgba(255,255,255,0.12)",
              transition: "width 0.3s",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ProcessStaircase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section ref={containerRef} className="relative w-full bg-[#0A0E17]" id="process" style={{ height: `${STEPS.length * 100}vh` }}>
      <div
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        style={{ perspective: "1400px", perspectiveOrigin: "50% 50%" }}
      >
        {/* Header */}
        <div className="sv-center absolute top-20 sm:top-24 z-20 w-full px-4">
          <span className="sv-overline">One process, every service</span>
          <h2 className="sv-h2" style={{ marginTop: "0.5rem" }}>How every project moves.</h2>
          <p className="sv-p sv-p-center" style={{ color: "#8B90A6" }}>Scroll to step through our engineering lifecycle.</p>
        </div>

        {/* Glowing axis line */}
        <div className="absolute inset-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#52ffcb]/30 to-transparent" />
        <div className="absolute inset-x-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-gradient-to-b from-transparent via-[#18cb96]/15 to-transparent blur-sm" />

        {/* Card stage */}
        <div
          className="relative flex items-center justify-center mt-16"
          style={{ width: "min(90vw, 440px)", height: "320px", transformStyle: "preserve-3d" }}
        >
          {STEPS.map((step, i) => (
            <SpiralStep
              key={step.step}
              step={step}
              i={i}
              total={STEPS.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Scroll hint at bottom */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          style={{ pointerEvents: "none" }}
        >
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#8B90A6" }}>Scroll</span>
          <div style={{ width: "1px", height: "2rem", background: "linear-gradient(to bottom, #52ffcb, transparent)" }} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ServicesPage() {
  const [active, setActive] = useState(0);

  // Hero numeral drifts slower than the page
  const { scrollY } = useScroll();
  const numeralY = useTransform(scrollY, [0, 700], [0, -90]);

  // Zigzag line fills as you scroll through the timeline
  const zzRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: zzProgress } = useScroll({ target: zzRef, offset: ["start 0.65", "end 0.6"] });
  const zzScale = useSpring(zzProgress, { stiffness: 100, damping: 30 });

  // Highlight the matching item in the sticky index rail
  useEffect(() => {
    const els = SERVICES.map((s) => document.getElementById(`svc-${s.id}`)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const i = SERVICES.findIndex((s) => `svc-${s.id}` === en.target.id);
          if (i >= 0) setActive(i);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

  return (
    <MotionConfig reducedMotion="user">
      <div className={`dc ${display.variable} ${body.variable}`}>
        <style>{CSS}</style>
        <div className="sv-noise" aria-hidden="true" />
        <ScrollBar />

        {/* ------------------------------ HERO ------------------------------ */}
        <section className="sv-hero">
          <div className="sv-hero-bg" aria-hidden="true">
            <div className="sv-hero-grid" />
            <div className="sv-hero-glow" />
            <div className="sv-hero-glow sv-hero-glow-2" />
          </div>
          <motion.div className="sv-numeral-hero" style={{ y: numeralY }} aria-hidden="true">
            07
            <span>Disciplines</span>
          </motion.div>

          <div className="sv-hero-in">
            <motion.span className="sv-overline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              Services
            </motion.span>

            <h1 className="sv-h1" aria-label="Seven disciplines. One team that owns the whole build.">
              {HEADLINE.map((h, i) => (
                <span key={i} className="sv-word" aria-hidden="true">
                  <motion.span
                    className={h.a ? "sv-accent" : undefined}
                    style={{ display: "inline-block" }}
                    initial={{ y: "115%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.75, delay: 0.15 + i * 0.055, ease: "easeOut" }}
                  >
                    {h.w}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p className="sv-hero-sub" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}>
              Web, mobile, custom software, e-commerce, design, AI and long-term support — delivered by two coordinated teams in Sheffield and Lahore, so nothing gets lost between the people who design it, build it and keep it running.
            </motion.p>

            <motion.div className="sv-cta-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}>
              <a href={mailto("Free quote request")} className="sv-btn-primary">
                Get a Free Quote
              </a>
              <a href={mailto("Free consultation request")} className="sv-btn-outline">
                Book a Free Consultation
              </a>
            </motion.div>

            <div className="sv-chips-wrap">
              <p className="sv-mono-label">Jump to</p>
              <div className="sv-chips">
                {SERVICES.map((s, i) => (
                  <motion.a
                    key={s.id}
                    href={`#svc-${s.id}`}
                    className="sv-chip"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.05 + i * 0.05, ease: "easeOut" }}
                  >
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Slab from="#0A0E17" to="#F3EFE7" light />

        {/* --------------------------- DEEP DIVE --------------------------- */}
        <section className="sv-dive" id="services">
          <div className="sv-wrap">
            <Reveal>
              <span className="sv-overline">What we deliver</span>
              <h2 className="sv-h2">Every service, in detail.</h2>
              <p className="sv-p">Pick the one you need, or combine them — the same team carries the work from the first sketch to the 3 a.m. alert.</p>
            </Reveal>

            <div className="sv-dive-grid">
              <aside className="sv-rail" aria-label="Services index">
                <p className="sv-mono-label sv-mono-dark">Index</p>
                <ul>
                  {SERVICES.map((s, i) => (
                    <li key={s.id}>
                      <a href={`#svc-${s.id}`} className={`sv-rail-item ${active === i ? "on" : ""}`}>
                        {active === i && <motion.span layoutId="sv-rail-bar" className="sv-rail-bar" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                        <small>{String(i + 1).padStart(2, "0")}</small>
                        {s.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>

              <div>
                {SERVICES.map((s, i) => (
                  <article key={s.id} id={`svc-${s.id}`} className="sv-block">
                    <span className="sv-numeral" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <Reveal>
                      <span className="sv-overline">{s.kicker}</span>
                      <h3 className="sv-h3">{s.name}</h3>
                      <p className="sv-lede">{s.lede}</p>
                    </Reveal>

                    <Reveal delay={0.05}>
                      <ParallaxImage src={s.img} alt={s.name} />
                    </Reveal>

                    <div className="sv-cols">
                      <div>
                        <h4 className="sv-h4">What we build</h4>
                        <ul className="sv-list">
                          {s.builds.map((b, k) => (
                            <motion.li
                              key={b}
                              initial={{ opacity: 0, x: -12 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-60px" }}
                              transition={{ duration: 0.5, delay: k * 0.06, ease: "easeOut" }}
                            >
                              <Check size={16} />
                              <span>{b}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="sv-h4">{s.stack.length ? "Built with" : "Covered from"}</h4>
                        <div className="sv-stack">
                          {s.stack.length
                            ? s.stack.map((k) => {
                                const t = TECH[k];
                                const Ico = t.Icon;
                                return (
                                  <span key={k} className="sv-tech">
                                    <Ico size={17} style={{ color: t.color }} />
                                    {t.name}
                                  </span>
                                );
                              })
                            : ["Sheffield, UK", "Lahore, Pakistan", "Around the clock"].map((t) => (
                                <span key={t} className="sv-tech sv-tech-plain">
                                  {t}
                                </span>
                              ))}
                        </div>

                        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center", marginTop: "1.5rem" }}>
                          {SERVICE_SLUGS[s.id] && (
                            <Link href={`/services/${SERVICE_SLUGS[s.id]}`} className="sv-link" style={{ marginTop: 0 }}>
                              Explore full details <ArrowUpRight size={16} />
                            </Link>
                          )}
                          <a href={mailto(`Enquiry: ${s.name}`)} className="sv-link" style={{ marginTop: 0, opacity: 0.85 }}>
                            Talk to us <ArrowUpRight size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Slab from="#F3EFE7" to="#0A0E17" light />

        {/* --------------------------- 3D STAIRCASE PROCESS --------------------------- */}
        <ProcessStaircase />

        <Slab from="#0A0E17" to="#ffffff" light />

        {/* --------------------------- TECH MARQUEE --------------------------- */}
        <section className="sv-tech-sec">
          <Reveal className="sv-center sv-wrap">
            <span className="sv-overline">Engineered for the job</span>
            <h2 className="sv-h2">The right tool for each problem.</h2>
            <p className="sv-p sv-p-center">We choose the stack that fits your team, your budget and your roadmap — then build it to be maintained for years, not demoed for weeks.</p>
          </Reveal>

          {[MARQUEE_A, MARQUEE_B].map((row, r) => (
            <div key={r} className={`sv-mq ${r === 1 ? "rev" : ""}`} aria-hidden="true">
              <div className="sv-mq-track">
                {[...row, ...row, ...row, ...row].map((k, i) => {
                  const t = TECH[k];
                  const Ico = t.Icon;
                  return (
                    <div key={i} className="sv-mq-item">
                      <Ico size={34} style={{ color: t.color }} />
                      <span>{t.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <Slab from="#ffffff" to="#0A0E17" light />

        {/* --------------------------- CONTACT --------------------------- */}
        <section className="sv-contact">
          <div className="sv-contact-grid" aria-hidden="true" />
          <Reveal>
            <h2 className="sv-contact-h2">Not sure which service you need?</h2>
            <p className="sv-contact-p">Describe the problem — we&apos;ll tell you honestly what it takes to solve it, and which of these it actually is.</p>
            <div className="sv-cta-row sv-cta-center">
              <a href={mailto("Free quote request")} className="sv-btn-primary">
                Request a Quote
              </a>
              <a href={mailto("Free consultation request")} className="sv-btn-outline">
                Book a Consultation
              </a>
            </div>
          </Reveal>
        </section>

      </div>
    </MotionConfig>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles — tokens and treatments copied from the home page preview   */
/* ------------------------------------------------------------------ */
const CSS = `
html{scroll-behavior:smooth}
body{background:#0A0E17}
.dc{--bg:#0A0E17;--surface:#F3EFE7;--ink:#ECEEF5;--ink-soft:#8B90A6;--ink-dark:#191510;--muted-dark:#6B6558;--accent:#18cb96;--accent-2:#5B8DEF;--line:rgba(255,255,255,.09);
  --font-display:var(--f-display),system-ui,sans-serif;--font-body:var(--f-body),system-ui,sans-serif;
  background:var(--bg);color:var(--ink);font-family:var(--font-body);line-height:1.65;overflow-x:clip;min-height:100vh}
.dc *,.dc *::before,.dc *::after{box-sizing:border-box;margin:0;padding:0}
.dc a{color:inherit}
.dc ul{list-style:none}
.dc ::selection{background:#18cb96;color:#07070a}
.sv-wrap{max-width:80rem;margin:0 auto}
.sv-center{text-align:center}

/* grain + progress */
.sv-noise{pointer-events:none;position:fixed;inset:0;z-index:40;opacity:.03;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.sv-progress{position:fixed;top:0;left:0;right:0;height:2px;transform-origin:0 50%;background:linear-gradient(90deg,var(--accent),var(--accent-2));z-index:100}

/* nav */
.sv-nav-wrap{position:fixed;top:1rem;left:0;right:0;z-index:50;display:flex;justify-content:center;padding:0 1.5rem;pointer-events:none}
.sv-nav{pointer-events:auto;width:100%;max-width:80rem;background:rgba(7,7,10,.85);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,.09);border-radius:9999px;padding:.625rem 1.5rem;display:flex;align-items:center;justify-content:space-between;box-shadow:0 8px 32px rgba(0,0,0,.5)}
.sv-logo{font-family:var(--font-display);font-weight:800;font-size:1.25rem;color:var(--ink);text-decoration:none;letter-spacing:-.02em;display:flex;align-items:center;gap:.5rem}
.sv-logo img{height:2rem;width:auto}
.sv-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent)}
.sv-links{display:flex;align-items:center;gap:.125rem}
.sv-links a{color:var(--ink-soft);text-decoration:none;font-size:.875rem;font-weight:500;padding:.4rem .85rem;border-radius:9999px;transition:color .2s,background .2s;display:inline-block}
.sv-links a:hover,.sv-links a.is-active{color:var(--ink);background:rgba(255,255,255,.06)}
.sv-links a.sv-cta{background:var(--accent);color:#06120E;font-weight:600;transition:transform .2s,box-shadow .2s}
.sv-links a.sv-cta:hover{transform:scale(1.03);box-shadow:0 0 24px rgba(24,203,150,.35)}
@media(max-width:768px){.sv-link-li{display:none}}

/* shared type + buttons */
.sv-overline{display:inline-block;font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--accent)}
.sv-h2{font-family:var(--font-display);font-size:clamp(2rem,4vw,3rem);font-weight:600;line-height:1.15;margin-top:.75rem}
.sv-p{margin-top:1rem;max-width:40rem;font-size:1rem;color:var(--ink-soft);line-height:1.65}
.sv-p-center{margin-left:auto;margin-right:auto}
.sv-mono-label{font-family:monospace;font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ink-soft)}
.sv-mono-dark{color:#8a8474}
.sv-cta-row{margin-top:2.5rem;display:flex;flex-wrap:wrap;gap:1rem;align-items:center}
.sv-cta-center{justify-content:center}
.sv-btn-primary{border-radius:9999px;background:var(--accent);padding:.75rem 1.5rem;font-size:.875rem;font-weight:600;color:#06120E;text-decoration:none;transition:transform .2s,box-shadow .2s;display:inline-block}
.sv-btn-primary:hover{transform:scale(1.03);box-shadow:0 0 28px rgba(24,203,150,.35)}
.sv-btn-outline{border-radius:9999px;border:1px solid var(--line);padding:.75rem 1.5rem;font-size:.875rem;font-weight:500;color:var(--ink);text-decoration:none;transition:border-color .2s,color .2s;display:inline-block}
.sv-btn-outline:hover{border-color:var(--accent);color:var(--accent)}

/* hero */
.sv-hero{position:relative;padding:9.5rem 1.5rem 6rem;overflow:hidden}
.sv-hero-bg{position:absolute;inset:0;pointer-events:none}
.sv-hero-grid{position:absolute;inset:0;opacity:.07;background-image:linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse 70% 70% at 70% 30%,#000,transparent);mask-image:radial-gradient(ellipse 70% 70% at 70% 30%,#000,transparent)}
.sv-hero-glow{position:absolute;top:-6rem;right:15%;width:520px;height:520px;border-radius:50%;background:rgba(24,203,150,.12);filter:blur(160px)}
.sv-hero-glow-2{top:auto;right:auto;left:-8rem;bottom:-6rem;width:420px;height:420px;background:rgba(91,141,239,.1)}
.sv-numeral-hero{position:absolute;right:2rem;top:8rem;z-index:1;font-family:var(--font-display);font-weight:700;font-size:clamp(9rem,26vw,24rem);line-height:.8;color:transparent;-webkit-text-stroke:1px rgba(24,203,150,.32);pointer-events:none;user-select:none;text-align:right}
.sv-numeral-hero span{display:block;margin-top:1.25rem;font-family:monospace;font-size:.8rem;font-weight:400;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);-webkit-text-stroke:0}
@media(max-width:900px){.sv-numeral-hero{opacity:.45;top:6.5rem;right:-.5rem;font-size:9rem}}
.sv-hero-in{position:relative;z-index:2;max-width:80rem;margin:0 auto}
.sv-h1{font-family:var(--font-display);font-size:clamp(2.6rem,6.2vw,5.4rem);font-weight:600;line-height:1.04;letter-spacing:-.028em;max-width:56rem;margin-top:1.25rem}
.sv-word{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.14em;margin-bottom:-.14em;margin-right:.26em}
.sv-accent{background:linear-gradient(90deg,#18cb96,#52ffcb);-webkit-background-clip:text;background-clip:text;color:transparent}
.sv-hero-sub{margin-top:2rem;max-width:36rem;font-size:1.0625rem;line-height:1.65;color:var(--ink-soft)}
.sv-chips-wrap{margin-top:5rem}
.sv-chips{margin-top:1rem;display:flex;flex-wrap:wrap;gap:.6rem}
.sv-chip{display:inline-flex;align-items:center;gap:.6rem;padding:.55rem 1.05rem;border:1px solid var(--line);border-radius:9999px;font-size:.85rem;font-weight:500;color:var(--ink);text-decoration:none;background:rgba(255,255,255,.02);transition:border-color .25s,color .25s,background .25s,transform .25s}
.sv-chip span{font-family:monospace;font-size:.7rem;color:var(--accent)}
.sv-chip:hover{border-color:var(--accent);background:rgba(24,203,150,.08);transform:translateY(-2px)}

/* slab divider */
.sv-slab{position:relative;width:100%;overflow:hidden;height:clamp(90px,12vw,210px);display:block;margin:-1px 0;pointer-events:none;user-select:none;z-index:20}
.sv-slab svg{width:100%;height:100%;display:block}
.sv-slab-dot{position:absolute;left:36.11%;top:81.25%;width:44px;height:44px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,#fff 0%,rgba(82,255,203,.8) 25%,rgba(24,203,150,.35) 60%,transparent 100%);opacity:.9}

/* deep dive */
.sv-dive{background:var(--surface);color:var(--ink-dark);padding:5rem 1.5rem 9rem}
.sv-dive .sv-overline{color:#10946d}
.sv-dive .sv-p{color:var(--muted-dark)}
.sv-dive-grid{display:grid;grid-template-columns:15rem 1fr;gap:5rem;margin-top:5rem;align-items:start}
@media(max-width:1024px){.sv-dive-grid{grid-template-columns:1fr;margin-top:3rem}.sv-rail{display:none}}
.sv-rail{position:sticky;top:7rem;border-left:1px solid rgba(0,0,0,.12);padding-left:0}
.sv-rail .sv-mono-label{padding-left:1.1rem;margin-bottom:.75rem}
.sv-rail-item{position:relative;display:flex;align-items:baseline;gap:.9rem;padding:.6rem 0 .6rem 1.1rem;color:#9a9484;font-family:var(--font-display);font-size:.98rem;text-decoration:none;transition:color .25s}
.sv-rail-item small{font-family:monospace;font-size:.68rem;opacity:.8}
.sv-rail-item:hover{color:var(--ink-dark)}
.sv-rail-item.on{color:var(--ink-dark)}
.sv-rail-bar{position:absolute;left:-1px;top:.3rem;bottom:.3rem;width:3px;border-radius:2px;background:var(--accent)}
.sv-block{position:relative;padding:0 0 9rem;scroll-margin-top:6rem}
.sv-block+.sv-block{padding-top:9rem;border-top:1px solid rgba(0,0,0,.1)}
.sv-block:last-child{padding-bottom:0}
.sv-numeral{position:absolute;right:0;top:-.4rem;font-family:var(--font-display);font-weight:700;font-size:clamp(5rem,11vw,8.5rem);line-height:.8;color:transparent;-webkit-text-stroke:1px rgba(0,0,0,.13);pointer-events:none;user-select:none}
.sv-block+.sv-block .sv-numeral{top:8.6rem}
@media(max-width:640px){.sv-numeral{display:none}}
.sv-h3{font-family:var(--font-display);font-size:clamp(2rem,4vw,3rem);font-weight:600;line-height:1.1;margin-top:.7rem;color:var(--ink-dark)}
.sv-lede{margin-top:1.25rem;max-width:38rem;font-size:1.0625rem;color:var(--muted-dark);line-height:1.7}
.sv-img{position:relative;overflow:hidden;border-radius:1rem;border:1px solid rgba(0,0,0,.1);height:clamp(240px,32vw,400px);margin-top:2.5rem;box-shadow:0 24px 60px rgba(0,0,0,.15);background:#dcd7cb}
.sv-img img{position:absolute;left:0;top:-15%;width:100%;height:130%;object-fit:cover;filter:grayscale(35%) contrast(1.06) saturate(.85);transition:filter .7s}
.sv-img:hover img{filter:none}
.sv-img::after{content:'';position:absolute;inset:0;background:rgba(24,203,150,.12);mix-blend-mode:color;pointer-events:none;transition:opacity .7s}
.sv-img:hover::after{opacity:0}
.sv-cols{display:grid;grid-template-columns:1.3fr 1fr;gap:3.5rem;margin-top:3rem}
@media(max-width:768px){.sv-cols{grid-template-columns:1fr;gap:2.5rem}}
.sv-h4{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#10946d;margin-bottom:.6rem}
.sv-list li{display:flex;gap:.8rem;align-items:flex-start;padding:.85rem 0;border-bottom:1px solid rgba(0,0,0,.08);color:var(--muted-dark);font-size:.97rem}
.sv-list li svg{flex-shrink:0;margin-top:.3rem;color:var(--accent)}
.sv-stack{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:.9rem}
.sv-tech{display:inline-flex;align-items:center;gap:.5rem;padding:.42rem .95rem .42rem .75rem;border:1px solid rgba(0,0,0,.14);border-radius:9999px;font-size:.82rem;font-weight:500;color:var(--muted-dark);background:rgba(0,0,0,.03);transition:transform .2s,background .2s}
.sv-tech:hover{transform:translateY(-2px);background:rgba(255,255,255,.7)}
.sv-tech-plain{padding-left:.95rem}
.sv-link{display:inline-flex;align-items:center;gap:.4rem;margin-top:2rem;font-family:var(--font-display);font-size:.9rem;font-weight:600;color:#10946d;text-decoration:none;transition:color .2s,gap .2s}
.sv-link:hover{color:#0f1117;gap:.65rem}

/* process zigzag */
.sv-process{background:var(--bg);color:var(--ink);padding:5rem 1.5rem 7rem}
.sv-zz{position:relative;margin-top:6rem}
.sv-zz-line,.sv-zz-fill{position:absolute;left:50%;top:0;bottom:0;width:1px;transform:translateX(-50%)}
.sv-zz-line{background:var(--line)}
.sv-zz-fill{background:linear-gradient(to bottom,var(--accent),var(--accent-2));transform-origin:top;box-shadow:0 0 14px rgba(24,203,150,.5)}
.sv-zz-item{position:relative;display:grid;grid-template-columns:1fr 1fr;margin-bottom:6.5rem}
.sv-zz-item:last-child{margin-bottom:0}
.sv-zz-copy{grid-column:1;text-align:right;padding-right:5rem}
.sv-zz-item.is-right .sv-zz-copy{grid-column:2;text-align:left;padding-right:0;padding-left:5rem}
.sv-zz-copy h3{font-family:var(--font-display);font-size:clamp(1.3rem,2.2vw,1.7rem);font-weight:600;margin:.55rem 0 .6rem}
.sv-zz-copy p{font-size:.95rem;color:var(--ink-soft);max-width:26rem;margin-left:auto}
.sv-zz-item.is-right .sv-zz-copy p{margin-left:0}
.sv-zz-copy::after{content:'';position:absolute;top:1.55rem;right:1.7rem;width:3rem;height:1px;background:linear-gradient(to left,rgba(24,203,150,.5),transparent)}
.sv-zz-item.is-right .sv-zz-copy::after{right:auto;left:1.7rem;background:linear-gradient(to right,rgba(24,203,150,.5),transparent)}
.sv-marker{position:absolute;left:50%;top:0;z-index:2;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;background:var(--bg);border:1px solid rgba(24,203,150,.35);color:var(--accent);transform:translateX(-50%);transition:background .4s,color .4s,box-shadow .4s,border-color .4s}
.sv-marker.circle{border-radius:50%}
.sv-marker.diamond{border-radius:.7rem;transform:translateX(-50%) rotate(45deg)}
.sv-marker.diamond svg{transform:rotate(-45deg)}
.sv-zz-item.is-on .sv-marker{background:var(--accent);color:#06120E;border-color:var(--accent);box-shadow:0 0 30px rgba(24,203,150,.45)}
@media(max-width:768px){
  .sv-zz-line,.sv-zz-fill{left:1.5rem}
  .sv-zz-item,.sv-zz-item.is-right{grid-template-columns:1fr}
  .sv-zz-copy,.sv-zz-item.is-right .sv-zz-copy{grid-column:1;text-align:left;padding:0 0 0 4.5rem}
  .sv-zz-copy p{margin-left:0}
  .sv-zz-copy::after,.sv-zz-item.is-right .sv-zz-copy::after{display:none}
  .sv-marker,.sv-marker.diamond{left:1.5rem}
}

/* tech marquee */
.sv-tech-sec{background:#fff;color:#0f1117;padding:4rem 0 6rem;overflow:hidden}
.sv-tech-sec .sv-wrap{padding:0 1.5rem}
.sv-tech-sec .sv-overline{color:#10946d}
.sv-tech-sec .sv-p{color:#5b6068}
.sv-mq{position:relative;overflow:hidden;margin-top:3.5rem;-webkit-mask-image:linear-gradient(to right,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(to right,transparent,#000 10%,#000 90%,transparent)}
.sv-mq+.sv-mq{margin-top:1.75rem}
.sv-mq-track{display:flex;width:max-content;animation:svMarquee 42s linear infinite}
.sv-mq.rev .sv-mq-track{animation-direction:reverse;animation-duration:48s}
.sv-mq:hover .sv-mq-track{animation-play-state:paused}
.sv-mq-item{display:flex;align-items:center;gap:1rem;padding:0 2.6rem;font-family:var(--font-display);font-size:1.4rem;font-weight:500;color:#9ea4ba;white-space:nowrap;filter:grayscale(1);opacity:.7;transition:filter .3s,opacity .3s,color .3s}
.sv-mq-item:hover{filter:none;opacity:1;color:#0f1117}
@keyframes svMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* contact + footer */
.sv-contact{position:relative;overflow:hidden;padding:6rem 1.5rem 9rem;text-align:center;background:var(--bg)}
.sv-contact-grid{pointer-events:none;position:absolute;inset:0;opacity:.06;background-image:linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse 60% 60% at 50% 50%,#000,transparent);mask-image:radial-gradient(ellipse 60% 60% at 50% 50%,#000,transparent)}
.sv-contact-h2{position:relative;font-family:var(--font-display);font-size:clamp(2.5rem,5vw,4rem);font-weight:600;line-height:1.1;max-width:40rem;margin:0 auto}
.sv-contact-p{position:relative;margin:1.25rem auto 0;max-width:30rem;font-size:.9375rem;color:var(--ink-soft)}
.sv-contact .sv-cta-row{position:relative}
.sv-footer{background:var(--bg);border-top:1px solid var(--line);padding:3rem 1.5rem}
.sv-footer-in{max-width:80rem;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.sv-footer-brand{font-family:var(--font-display);font-size:1rem;font-weight:700}
.sv-footer-copy{font-size:.8125rem;color:var(--ink-soft)}

@media(prefers-reduced-motion:reduce){.dc *,.dc *::before,.dc *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
`;
