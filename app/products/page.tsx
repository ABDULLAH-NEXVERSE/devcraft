"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ContactBand, DcPage, Reveal, Slab, mailto, onImgError } from "@/components/dc/Kit";

/* ------------------------------------------------------------------ */
/*  Content                                                            */
/* ------------------------------------------------------------------ */
type Product = {
  id: string;
  name: string;
  tag: string;
  copy: string;
  tags: string[];
  img: string;
  color: string; // each product owns a hue
  glow: string;
  kind: "browser" | "phone";
};

const PRODUCTS: Product[] = [
  {
    id: "prorota",
    name: "ProRota",
    tag: "Workforce Management, HR Vetting & CRM",
    copy: "An all-in-one platform for service businesses — intelligent scheduling, GPS attendance, SIA/BS7858 compliance tracking, payroll integration and an AI workforce assistant.",
    tags: ["Scheduling", "Compliance", "AI Assistant", "Mobile Apps"],
    img: "/assets/prorota1.png",
    color: "#18cb96",
    glow: "rgba(24,203,150,1)",
    kind: "browser",
  },
  {
    id: "nexeats",
    name: "NexEats",
    tag: "Food Delivery Marketplace",
    copy: "A consumer food-delivery app connecting diners with local restaurants — live order tracking and restaurant onboarding, built bilingual for the Algerian market.",
    tags: ["Marketplace", "Live Tracking", "Restaurant Dashboard"],
    img: "/assets/nexeat.png",
    color: "#F5A524",
    glow: "rgba(245,165,36,1)",
    kind: "phone",
  },
  {
    id: "nexrider",
    name: "NexRider",
    tag: "Delivery Rider App",
    copy: "The companion rider app for NexEats — active delivery management, real-time earnings and vehicle details, built for on-the-go use.",
    tags: ["Rider Ops", "Earnings Tracking", "iOS"],
    img: "/assets/nexrider.webp",
    color: "#5B8DEF",
    glow: "rgba(91,141,239,1)",
    kind: "phone",
  },
  {
    id: "odlings",
    name: "Odlings Portal",
    tag: "Wholesale Ordering & Trade Operations",
    copy: "A B2B trade portal, digital catalogue, and order tracking platform engineered for UK memorial wholesaler Odlings — streamlining custom orders and invoice reconciliation.",
    tags: ["Trade Portal", "Wholesale Ops", "Live Tracking", "Invoicing"],
    img: "/assets/odlings.png",
    color: "#2DD4BF",
    glow: "rgba(45,212,191,1)",
    kind: "browser",
  },
  {
    id: "glasgow-training-academy",
    name: "GTA Academy CMS",
    tag: "Course Management & Compliance Training",
    copy: "Centralised educational content management, student compliance tracking, and accreditation management portal for Glasgow Training Academy.",
    tags: ["Academy CMS", "Accreditations", "Student Tracking", "Course Management"],
    img: "/assets/gta1.png",
    color: "#818CF8",
    glow: "rgba(129,140,248,1)",
    kind: "browser",
  },
];
const N = PRODUCTS.length;

/* Order-flow swimlane (illustrative — confirm the flow with the product team) */
const LANES = [
  { name: "Diner", app: "NexEats" },
  { name: "Restaurant", app: "NexEats" },
  { name: "Rider", app: "NexRider" },
];
const LANE_Y = [60, 170, 280];
const NODES = [
  { x: 110, lane: 0, t: "Diner places an order", d: "Browse, choose, order." },
  { x: 300, lane: 1, t: "Restaurant confirms", d: "The order lands on the restaurant dashboard." },
  { x: 490, lane: 2, t: "Rider accepts", d: "The delivery is assigned in NexRider." },
  { x: 680, lane: 0, t: "Diner tracks live", d: "Follow the order in real time." },
  { x: 880, lane: 2, t: "Delivered", d: "Rider earnings update." },
];
const FLOW_PATH =
  "M110 60 C205 60 205 170 300 170 C395 170 395 280 490 280 C585 280 585 60 680 60 C780 60 780 280 880 280";

const FEATURES = [
  { id: "schedule", name: "Intelligent scheduling", desc: "Rotas built around who is available and who is qualified to work — gaps surface before they become missed shifts." },
  { id: "gps", name: "GPS attendance", desc: "Check-ins verified by location, so timesheets reflect where people actually were." },
  { id: "compliance", name: "Compliance tracking", desc: "SIA and BS7858 vetting records and licence status in one place, with the audit trail intact." },
  { id: "payroll", name: "Payroll integration", desc: "Approved hours flow through to payroll without being re-keyed." },
  { id: "ai", name: "AI workforce assistant", desc: "Ask in plain language who is free, what is overdue or where the gap is — and get an answer from your own workforce data." },
] as const;

/* ------------------------------------------------------------------ */
/*  Device frames                                                      */
/* ------------------------------------------------------------------ */
function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="pr-browser">
      <div className="pr-browser-bar">
        <i />
        <i />
        <i />
        <span />
      </div>
      <div className="pr-browser-screen">
        <img src={src} alt={alt} onError={onImgError} />
      </div>
    </div>
  );
}

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="pr-phone">
      <span className="pr-phone-notch" />
      <div className="pr-phone-screen">
        <img src={src} alt={alt} onError={onImgError} />
      </div>
    </div>
  );
}

/* Hero composition: three products floating in 3D, reacting to the pointer */
function HeroStage() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const rotX = useTransform(sy, [-0.5, 0.5], [7, -7]);
  const bx = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const by = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const ax = useTransform(sx, [-0.5, 0.5], [-34, 34]);
  const ay = useTransform(sy, [-0.5, 0.5], [-24, 24]);
  const cx = useTransform(sx, [-0.5, 0.5], [26, -26]);
  const cy = useTransform(sy, [-0.5, 0.5], [18, -18]);

  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="pr-stage-wrap" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="pr-rings" aria-hidden="true">
        <span />
        <span />
      </div>
      <motion.div className="pr-stage" style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}>
        <motion.div className="pr-l pr-l-back" style={{ x: bx, y: by, z: 0 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }}>
          <div className="pr-float">
            <BrowserFrame src={PRODUCTS[0].img} alt="ProRota" />
          </div>
        </motion.div>
        <motion.div className="pr-l pr-l-a" style={{ x: ax, y: ay, z: 70 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.5 }}>
          <div className="pr-float pr-float-2">
            <PhoneFrame src={PRODUCTS[1].img} alt="NexEats" />
          </div>
        </motion.div>
        <motion.div className="pr-l pr-l-b" style={{ x: cx, y: cy, z: 120 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.7 }}>
          <div className="pr-float pr-float-3">
            <PhoneFrame src={PRODUCTS[2].img} alt="NexRider" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pinned horizontal chapter                                          */
/* ------------------------------------------------------------------ */
function Chapter({ p, i, progress }: { p: Product; i: number; progress: MotionValue<number> }) {
  const d = useTransform(progress, (v) => v * (N - 1) - i); // 0 when this chapter is centred
  const numX = useTransform(d, (v) => v * -280);
  const visX = useTransform(d, (v) => v * -150);
  const textX = useTransform(d, (v) => v * -50);
  const fade = useTransform(d, (v) => 1 - Math.min(Math.abs(v), 1) * 0.75);

  return (
    <div id={`pr-${p.id}`} className="pr-panel" style={{ "--pc": p.color } as CSSProperties}>
      <motion.span className="pr-panel-num pr-par" style={{ x: numX }} aria-hidden="true">
        {`0${i + 1}`}
      </motion.span>

      <div className="pr-panel-in">
        <motion.div className="pr-panel-copy pr-par" style={{ x: textX, opacity: fade }}>
          <span className="pr-kicker">
            <i />
            Product 0{i + 1}
          </span>
          <h2 className="pr-name">{p.name}</h2>
          <p className="pr-tag">{p.tag}</p>
          <p className="pr-copy">{p.copy}</p>
          <div className="pr-tags">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <a href={mailto(`Enquiry: ${p.name}`)} className="pr-link">
            Talk to us about {p.name} <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div className={`pr-panel-vis pr-par ${p.kind}`} style={{ x: visX, opacity: fade }}>
          <div className="pr-vis-halo" aria-hidden="true" />
          {p.kind === "browser" ? <BrowserFrame src={p.img} alt={p.name} /> : <PhoneFrame src={p.img} alt={p.name} />}
          <span className="pr-floater pr-floater-a">{p.tags[0]}</span>
          <span className="pr-floater pr-floater-b">{p.tags[1]}</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Order-flow swimlane                                                */
/* ------------------------------------------------------------------ */
function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.45"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const [on, setOn] = useState(1);

  useMotionValueEvent(p, "change", (v) => {
    const c = Math.min(Math.max(v, 0), 1);
    const path = pathRef.current;
    const dot = dotRef.current;
    if (path && dot) {
      const pt = path.getPointAtLength(path.getTotalLength() * c);
      dot.setAttribute("cx", String(pt.x));
      dot.setAttribute("cy", String(pt.y));
    }
    setOn(Math.min(NODES.length, Math.floor(c * (NODES.length - 1) + 0.02) + 1));
  });

  return (
    <div ref={ref}>
      <div className="pr-eco-plot">
        <svg className="pr-eco-svg" viewBox="0 -50 1000 400" aria-hidden="true">
          <defs>
            <linearGradient id="prEcoGrad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1000" y2="0">
              <stop offset="0%" stopColor="#F5A524" />
              <stop offset="55%" stopColor="#18cb96" />
              <stop offset="100%" stopColor="#5B8DEF" />
            </linearGradient>
          </defs>
          {LANE_Y.map((y, k) => (
            <rect key={k} className="pr-lane-band" x="0" y={y - 42} width="1000" height="84" rx="14" />
          ))}
          <path ref={pathRef} className="pr-eco-track" d={FLOW_PATH} />
          <motion.path className="pr-eco-fill" d={FLOW_PATH} style={{ pathLength: p }} />
          {NODES.map((n, i) => (
            <g key={i}>
              <circle className={`pr-node ${on > i ? "on" : ""}`} cx={n.x} cy={LANE_Y[n.lane]} r={11} />
              {on === i + 1 && <circle className="pr-node-ping" cx={n.x} cy={LANE_Y[n.lane]} r={11} />}
            </g>
          ))}
          <circle ref={dotRef} className="pr-dot" cx={110} cy={60} r={6} />
        </svg>

        {LANES.map((l, k) => (
          <div key={l.name} className="pr-lane-name" style={{ top: `${((LANE_Y[k] + 50) / 400) * 100}%` }}>
            <b>{l.name}</b>
            {l.app}
          </div>
        ))}

        {NODES.map((n, i) => (
          <div key={i} className={`pr-eco-label ${on > i ? "on" : ""}`} style={{ left: `${n.x / 10}%`, top: `${((LANE_Y[n.lane] + 50 - 20) / 400) * 100}%` }}>
            <b>{n.t}</b>
            <span>{n.d}</span>
          </div>
        ))}
      </div>

      {/* small screens: plain ordered list */}
      <ol className="pr-eco-list">
        {NODES.map((n, i) => (
          <li key={i}>
            <em>{String(i + 1).padStart(2, "0")}</em>
            <div>
              <small>
                {LANES[n.lane].name} · {LANES[n.lane].app}
              </small>
              <b>{n.t}</b>
              <span>{n.d}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ProRota capability explorer                                        */
/* ------------------------------------------------------------------ */
function VisSchedule() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const grid = [
    [1, 1, 0, 2, 1],
    [2, 0, 1, 1, 3],
    [1, 2, 2, 0, 1],
    [0, 1, 1, 2, 1],
  ];
  return (
    <div>
      <div className="pr-sched">
        {days.map((d) => (
          <span key={d} className="pr-sched-h">
            {d}
          </span>
        ))}
        {grid.flat().map((t, k) => (
          <motion.i key={k} className={`pr-cell t${t}`} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.06 + k * 0.028, duration: 0.35 }} />
        ))}
      </div>
      <p className="pr-legend">
        <i className="t1" /> Filled <i className="t3" /> Needs cover
      </p>
    </div>
  );
}

function VisGps() {
  return (
    <div className="pr-gps">
      <div className="pr-gps-grid" />
      {[0, 1, 2].map((k) => (
        <span key={k} className="pr-ring" style={{ animationDelay: `${k * 0.8}s` }} />
      ))}
      <div className="pr-fence" />
      <div className="pr-pin" />
      <motion.div className="pr-pill" initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
        <Check size={14} /> Checked in · on site
      </motion.div>
    </div>
  );
}

function VisCompliance() {
  const rows = [
    { t: "Vetting record", s: "Complete", ok: true },
    { t: "Licence on file", s: "Valid", ok: true },
    { t: "Documents", s: "Verified", ok: true },
    { t: "Renewal", s: "Due soon", ok: false },
  ];
  return (
    <div className="pr-comp">
      <div className="pr-comp-chips">
        <span>SIA</span>
        <span>BS7858</span>
      </div>
      {rows.map((r, k) => (
        <motion.div key={r.t} className="pr-comp-row" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + k * 0.14, duration: 0.45 }}>
          <span className={`pr-tick ${r.ok ? "ok" : "warn"}`}>{r.ok ? <Check size={13} /> : <i />}</span>
          <b>{r.t}</b>
          <em className={r.ok ? "ok" : "warn"}>{r.s}</em>
        </motion.div>
      ))}
    </div>
  );
}

function VisPayroll() {
  const bars = [42, 58, 50, 72, 64, 88, 76];
  return (
    <div className="pr-pay">
      <div className="pr-bars">
        {bars.map((h, k) => (
          <motion.i key={k} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.1 + k * 0.07, duration: 0.6, ease: "easeOut" }} />
        ))}
      </div>
      <motion.div className="pr-pill pr-pill-static" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
        <Check size={14} /> Approved hours synced to payroll
      </motion.div>
    </div>
  );
}

function VisAi() {
  return (
    <div className="pr-chat">
      <motion.p className="pr-bub me" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.45 }}>
        Who can cover Friday nights?
      </motion.p>
      <div className="pr-chat-slot">
        <motion.div className="pr-typing" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ delay: 0.7, duration: 1.1, times: [0, 0.15, 0.85, 1] }}>
          <i />
          <i />
          <i />
        </motion.div>
        <motion.p className="pr-bub ai" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.45 }}>
          Three people are available and fully compliant. Want me to draft the swap?
        </motion.p>
      </div>
    </div>
  );
}

function Visual({ id }: { id: (typeof FEATURES)[number]["id"] }) {
  switch (id) {
    case "schedule":
      return <VisSchedule />;
    case "gps":
      return <VisGps />;
    case "compliance":
      return <VisCompliance />;
    case "payroll":
      return <VisPayroll />;
    default:
      return <VisAi />;
  }
}

function Explorer() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setI((v) => (v + 1) % FEATURES.length), 6000);
    return () => clearTimeout(t);
  }, [i, paused, reduced]);

  return (
    <div className="pr-exp-grid" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div role="tablist" aria-label="ProRota capabilities">
        {FEATURES.map((f, k) => (
          <button key={f.id} role="tab" aria-selected={i === k} className={`pr-tab ${i === k ? "on" : ""}`} onClick={() => setI(k)}>
            <span className="pr-tab-head">
              <small>{String(k + 1).padStart(2, "0")}</small>
              <h3>{f.name}</h3>
            </span>
            <AnimatePresence initial={false}>
              {i === k && (
                <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} style={{ overflow: "hidden" }}>
                  {f.desc}
                </motion.p>
              )}
            </AnimatePresence>
            {i === k && <i key={`${k}-${paused}`} className={`pr-tab-fill ${paused || reduced ? "hold" : "run"}`} />}
          </button>
        ))}
      </div>

      <div className="pr-stage2">
        <div className="pr-stage-bar">
          <i />
          <i />
          <i />
          <span>Illustrative interface</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={FEATURES[i].id} initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
            <Visual id={FEATURES[i].id} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
function ProductsBody() {
  const chapRef = useRef<HTMLElement>(null);
  const { scrollYProgress: cp } = useScroll({ target: chapRef, offset: ["start start", "end end"] });
  const x = useTransform(cp, [0, 1], ["0vw", `-${(N - 1) * 100}vw`]);
  const cpRange = PRODUCTS.map((_, i) => (N > 1 ? i / (N - 1) : 0));
  const glow = useTransform(cp, cpRange, PRODUCTS.map((p) => p.glow));
  const [idx, setIdx] = useState(0);
  useMotionValueEvent(cp, "change", (v) => setIdx(Math.min(N - 1, Math.max(0, Math.round(v * (N - 1))))));

  const goTo = (k: number) => {
    const el = chapRef.current;
    if (!el) return;
    if (window.innerWidth <= 1024) {
      document.getElementById(`pr-${PRODUCTS[k].id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + travel * (k / (N - 1)), behavior: "smooth" });
  };

  return (
    <>
      <style>{CSS}</style>

      {/* ------------------------------ HERO ------------------------------ */}
      <section className="pr-hero">
        <div className="pr-hero-bg" aria-hidden="true">
          <div className="pr-hero-glow" />
          <div className="pr-hero-glow pr-hero-glow-2" />
        </div>
        <div className="pr-hero-in">
          <div>
            <motion.span className="dc-overline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              Products
            </motion.span>
            <h1 className="pr-h1" aria-label="Software we build, run and answer for.">
              {["Software we build,", "run and answer for."].map((l, k) => (
                <motion.span
                  key={l}
                  className={k === 1 ? "dc-accent" : undefined}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.15 + k * 0.18, ease: "easeOut" }}
                >
                  {l}
                </motion.span>
              ))}
            </h1>
            <motion.p className="pr-hero-sub" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}>
              ProRota, NexEats, NexRider, Odlings Portal, and GTA Academy CMS are live platforms we engineer, operate, and maintain. When we tell you how something will behave in production, we speak from real production experience.
            </motion.p>
            <motion.div className="dc-cta-row" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}>
              <button className="dc-btn-primary" onClick={() => goTo(0)}>
                Explore the products
              </button>
              <a href={mailto("Free consultation request")} className="dc-btn-outline">
                Talk to us
              </a>
            </motion.div>
            <div className="pr-chips">
              {PRODUCTS.map((p, k) => (
                <motion.button
                  key={p.id}
                  className="pr-chip"
                  style={{ "--pc": p.color } as CSSProperties}
                  onClick={() => goTo(k)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.95 + k * 0.08, ease: "easeOut" }}
                >
                  <i />
                  {p.name}
                </motion.button>
              ))}
            </div>
          </div>
          <HeroStage />
        </div>
      </section>

      <Slab from="#0A0E17" to="#0A0E17" />

      {/* ------------------- PINNED HORIZONTAL CHAPTERS ------------------- */}
      <section ref={chapRef} className="pr-chap" id="products" style={{ "--n": N } as CSSProperties}>
        <div className="pr-chap-stick">
          <motion.div className="pr-glow" style={{ backgroundColor: glow }} aria-hidden="true" />
          <div className="pr-count" aria-hidden="true">
            0{idx + 1} / 0{N}
          </div>
          <motion.div className="pr-track" style={{ x }}>
            {PRODUCTS.map((p, i) => (
              <Chapter key={p.id} p={p} i={i} progress={cp} />
            ))}
          </motion.div>
          <div className="pr-hud">
            <div className="pr-hud-bar">
              <motion.i style={{ scaleX: cp }} />
            </div>
            <div className="pr-hud-items">
              {PRODUCTS.map((p, k) => (
                <button key={p.id} className={idx === k ? "on" : ""} style={{ "--pc": p.color } as CSSProperties} onClick={() => goTo(k)}>
                  0{k + 1} {p.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Slab from="#0A0E17" to="#F3EFE7" light />

      {/* ------------------------- ORDER FLOW ------------------------- */}
      <section className="pr-eco">
        <div className="dc-wrap">
          <Reveal>
            <span className="dc-overline">The NexEats ecosystem</span>
            <h2 className="dc-h2">One order, three screens, no dropped hand-offs.</h2>
            <p className="dc-p">NexRider is the companion to NexEats. The diner&apos;s app, the restaurant&apos;s dashboard and the rider&apos;s app each show one order from a different side — scroll to follow it through.</p>
          </Reveal>
          <Ecosystem />
        </div>
      </section>

      <Slab from="#F3EFE7" to="#0A0E17" light />

      {/* ------------------------- PROROTA EXPLORER ------------------------- */}
      <section className="pr-exp">
        <div className="dc-wrap">
          <Reveal>
            <span className="dc-overline">Inside ProRota</span>
            <h2 className="dc-h2">Everything a service business schedules, checks and pays.</h2>
            <p className="dc-p">Five capabilities, one platform. Pick one — or watch them cycle.</p>
          </Reveal>
        </div>
        <div className="pr-exp-wrap">
          <Explorer />
        </div>
      </section>

      <Slab from="#0A0E17" to="#0A0E17" />

      <ContactBand
        title="Building something like this?"
        text="Tell us about the product you have in mind — we'll tell you honestly what it takes to build, launch and run."
        subject="Product enquiry"
        extra={
          <p className="pr-more">
            <Link href="/services">See everything we build →</Link>
          </p>
        }
      />
    </>
  );
}

export default function ProductsPage() {
  return (
    <DcPage>
      <ProductsBody />
    </DcPage>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */
const CSS = `
/* hero */
.pr-hero{position:relative;padding:9rem 1.5rem 4rem;overflow:hidden}
.pr-hero-bg{position:absolute;inset:0;pointer-events:none}
.pr-hero-glow{position:absolute;top:-4rem;right:8%;width:560px;height:560px;border-radius:50%;background:rgba(24,203,150,.12);filter:blur(160px)}
.pr-hero-glow-2{top:auto;right:auto;left:-6rem;bottom:-8rem;width:440px;height:440px;background:rgba(245,165,36,.09)}
.pr-hero-in{position:relative;z-index:2;max-width:80rem;margin:0 auto;display:grid;grid-template-columns:.95fr 1.15fr;gap:2rem;align-items:center}
@media(max-width:1024px){.pr-hero-in{grid-template-columns:1fr;gap:4rem}}
.pr-h1{font-family:var(--font-display);font-size:clamp(2.6rem,5.4vw,4.9rem);font-weight:600;line-height:1.05;letter-spacing:-.028em;margin-top:1.25rem}
.pr-h1 span{display:block;width:fit-content}
.pr-hero-sub{margin-top:1.75rem;max-width:32rem;font-size:1.0625rem;color:var(--ink-soft)}
.pr-chips{margin-top:3.5rem;display:flex;flex-wrap:wrap;gap:.6rem}
.pr-chip{display:inline-flex;align-items:center;gap:.6rem;padding:.55rem 1.1rem;border:1px solid var(--line);border-radius:9999px;background:rgba(255,255,255,.02);color:var(--ink);font:inherit;font-size:.85rem;font-weight:500;cursor:pointer;transition:border-color .25s,background .25s,transform .25s}
.pr-chip i{width:8px;height:8px;border-radius:50%;background:var(--pc);box-shadow:0 0 10px var(--pc)}
.pr-chip:hover{border-color:var(--pc);transform:translateY(-2px);background:rgba(255,255,255,.05)}

.pr-stage-wrap{position:relative;perspective:1400px;min-height:clamp(340px,46vw,620px)}
.pr-stage{position:absolute;inset:0}
.pr-l{position:absolute}
.pr-l-back{width:82%;right:0;top:6%}
.pr-l-a{width:26%;left:1%;bottom:0}
.pr-l-b{width:23%;right:5%;bottom:-4%}
.pr-rings{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
.pr-rings span{position:absolute;border-radius:50%;border:1px dashed rgba(255,255,255,.09);animation:prSpin 60s linear infinite}
.pr-rings span:first-child{width:78%;aspect-ratio:1}
.pr-rings span:last-child{width:104%;aspect-ratio:1;border-style:solid;border-color:rgba(255,255,255,.045);animation-direction:reverse;animation-duration:90s}
@keyframes prSpin{to{transform:rotate(360deg)}}
.pr-float{animation:prFloat 7s ease-in-out infinite}
.pr-float-2{animation-duration:8.5s;animation-delay:-2s}
.pr-float-3{animation-duration:6.5s;animation-delay:-4s}
@keyframes prFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}

/* frames */
.pr-browser{border-radius:14px;border:1px solid rgba(255,255,255,.14);background:#0d1320;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.55)}
.pr-browser-bar{display:flex;align-items:center;gap:.4rem;height:34px;padding:0 .9rem;background:#111a2b;border-bottom:1px solid rgba(255,255,255,.08)}
.pr-browser-bar i{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.18)}
.pr-browser-bar span{margin-left:.8rem;height:14px;width:34%;border-radius:9999px;background:rgba(255,255,255,.07)}
.pr-browser-screen{aspect-ratio:16/10;background:#0b1220}
.pr-browser-screen img,.pr-phone-screen img{width:100%;height:100%;object-fit:cover;object-position:top;display:block}
.pr-phone{position:relative;width:100%;aspect-ratio:9/19;padding:6px;border-radius:2.1rem;background:#05070c;border:1px solid rgba(255,255,255,.16);box-shadow:0 36px 80px rgba(0,0,0,.6)}
.pr-phone-notch{position:absolute;top:11px;left:50%;transform:translateX(-50%);width:32%;height:14px;border-radius:9999px;background:#05070c;z-index:2}
.pr-phone-screen{width:100%;height:100%;border-radius:1.7rem;overflow:hidden;background:#0b1220}

/* pinned chapters */
.pr-chap{position:relative;height:calc(var(--n)*100vh);background:var(--bg)}
.pr-chap-stick{position:sticky;top:0;height:100vh;overflow:hidden}
.pr-glow{position:absolute;left:50%;top:50%;width:60vw;height:60vw;max-width:900px;max-height:900px;transform:translate(-50%,-50%);border-radius:50%;filter:blur(150px);opacity:.26;pointer-events:none}
.pr-track{position:relative;z-index:1;display:flex;height:100%;width:calc(var(--n)*100vw);will-change:transform}
.pr-panel{position:relative;flex:0 0 100vw;height:100%;display:flex;align-items:center;padding:6rem 1.5rem 7rem}
.pr-panel-num{position:absolute;left:2vw;bottom:-6vh;font-family:var(--font-display);font-weight:700;font-size:clamp(14rem,34vw,34rem);line-height:.8;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,.07);-webkit-text-stroke:1px color-mix(in srgb,var(--pc) 26%,transparent);pointer-events:none;user-select:none}
.pr-panel-in{position:relative;z-index:2;max-width:80rem;width:100%;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.pr-kicker{display:inline-flex;align-items:center;gap:.6rem;font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--pc)}
.pr-kicker i{width:8px;height:8px;border-radius:50%;background:var(--pc);box-shadow:0 0 12px var(--pc)}
.pr-name{font-family:var(--font-display);font-size:clamp(3.2rem,8vw,7rem);font-weight:600;letter-spacing:-.035em;line-height:.95;margin-top:1rem}
.pr-tag{margin-top:1rem;color:var(--pc);font-weight:500}
.pr-copy{margin-top:1.25rem;max-width:34rem;color:var(--ink-soft);font-size:1.02rem}
.pr-tags{margin-top:1.75rem;display:flex;flex-wrap:wrap;gap:.5rem}
.pr-tags span{padding:.3rem .9rem;border-radius:9999px;font-size:.75rem;color:var(--ink);border:1px solid rgba(255,255,255,.14);border:1px solid color-mix(in srgb,var(--pc) 40%,transparent);background:rgba(255,255,255,.03)}
.pr-link{display:inline-flex;align-items:center;gap:.4rem;margin-top:2rem;font-family:var(--font-display);font-size:.95rem;font-weight:600;color:var(--pc);text-decoration:none;transition:gap .2s,color .2s}
.pr-link:hover{gap:.7rem;color:var(--ink)}
.pr-panel-vis{position:relative;display:flex;align-items:center;justify-content:center}
.pr-panel-vis.browser{padding:0 0 0 1rem}
.pr-panel-vis.browser .pr-browser{width:100%}
.pr-panel-vis.phone .pr-phone{width:min(16rem,calc((100vh - 14rem) * .4737))}
.pr-panel-vis.phone .pr-phone{transform:rotate(-3deg)}
.pr-vis-halo{position:absolute;inset:8%;border-radius:50%;background:var(--pc);opacity:.13;filter:blur(90px)}
.pr-floater{position:absolute;padding:.4rem 1rem;border-radius:9999px;font-size:.78rem;font-weight:500;background:rgba(10,14,23,.88);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);animation:prFloat 6s ease-in-out infinite;white-space:nowrap}
.pr-floater::before{content:'';display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--pc);margin-right:.5rem;vertical-align:middle}
.pr-floater-a{left:2%;top:14%}
.pr-floater-b{right:0;bottom:16%;animation-delay:-3s}
.pr-count{position:absolute;right:1.5rem;top:6.2rem;z-index:5;font-family:monospace;font-size:.8rem;color:var(--ink-soft);letter-spacing:.08em}
.pr-hud{position:absolute;left:0;right:0;bottom:2rem;z-index:5;display:flex;flex-direction:column;align-items:center;gap:.9rem;padding:0 1.5rem}
.pr-hud-bar{width:min(28rem,80%);height:2px;background:var(--line);border-radius:2px;overflow:hidden}
.pr-hud-bar i{display:block;height:100%;transform-origin:0 50%;background:linear-gradient(90deg,var(--accent),var(--accent-2))}
.pr-hud-items{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center}
.pr-hud-items button{font-family:monospace;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;padding:.4rem .9rem;border-radius:9999px;border:1px solid var(--line);background:none;color:var(--ink-soft);cursor:pointer;transition:color .25s,border-color .25s,background .25s}
.pr-hud-items button:hover{color:var(--ink)}
.pr-hud-items button.on{color:var(--ink);border-color:var(--pc);background:rgba(255,255,255,.05)}
@media(max-width:1024px){
  .pr-chap{height:auto}
  .pr-chap-stick{position:static;height:auto;overflow:visible}
  .pr-track{flex-direction:column;width:100%;transform:none!important}
  .pr-panel{flex:none;width:100%;height:auto;padding:5rem 1.5rem;overflow:hidden}
  .pr-panel-in{grid-template-columns:1fr;gap:3rem}
  .pr-par{transform:none!important;opacity:1!important}
  .pr-hud,.pr-count,.pr-glow{display:none}
  .pr-panel-num{font-size:12rem;bottom:auto;top:1rem;left:auto;right:-1rem}
  .pr-panel-vis.phone .pr-phone{width:15rem}
}

/* order flow */
.pr-eco{background:var(--surface);color:var(--ink-dark);padding:5rem 1.5rem 9rem}
.pr-eco .dc-overline{color:#10946d}
.pr-eco .dc-p{color:var(--muted-dark)}
.pr-eco-plot{position:relative;margin-top:4.5rem;aspect-ratio:1000/400}
.pr-eco-svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.pr-lane-band{fill:rgba(0,0,0,.04)}
.pr-eco-track{fill:none;stroke:rgba(0,0,0,.2);stroke-width:2;stroke-dasharray:3 7;stroke-linecap:round}
.pr-eco-fill{fill:none;stroke:url(#prEcoGrad);stroke-width:3.5;stroke-linecap:round;filter:drop-shadow(0 0 6px rgba(24,203,150,.5))}
.pr-node{fill:#F3EFE7;stroke:rgba(0,0,0,.28);stroke-width:2;transition:fill .4s,stroke .4s}
.pr-node.on{fill:#18cb96;stroke:#18cb96}
.pr-node-ping{fill:none;stroke:#18cb96;stroke-width:2;transform-box:fill-box;transform-origin:center;animation:prPing 1.8s ease-out infinite}
@keyframes prPing{from{transform:scale(1);opacity:.7}to{transform:scale(3);opacity:0}}
.pr-dot{fill:#fff;stroke:#18cb96;stroke-width:2;filter:drop-shadow(0 0 8px #18cb96)}
.pr-lane-name{position:absolute;left:.4%;transform:translateY(-50%);font-family:monospace;font-size:clamp(.58rem,.9vw,.74rem);text-transform:uppercase;letter-spacing:.08em;color:#8a8474;line-height:1.5}
.pr-lane-name b{display:block;color:var(--ink-dark);font-weight:600}
.pr-eco-label{position:absolute;transform:translate(-50%,-100%);text-align:center;width:15%;min-width:6.5rem;opacity:.3;transition:opacity .5s}
.pr-eco-label.on{opacity:1}
.pr-eco-label b{display:block;font-family:var(--font-display);font-size:clamp(.74rem,1.2vw,1.02rem);font-weight:600;line-height:1.25}
.pr-eco-label span{display:block;margin-top:.2rem;font-size:clamp(.62rem,.9vw,.8rem);color:var(--muted-dark);line-height:1.35}
.pr-eco-list{display:none}
@media(max-width:900px){
  .pr-eco-plot{display:none}
  .pr-eco-list{display:block;margin-top:3rem;border-left:1px solid rgba(0,0,0,.14);padding-left:1.5rem}
  .pr-eco-list li{position:relative;display:flex;gap:1rem;padding:0 0 2rem}
  .pr-eco-list li:last-child{padding-bottom:0}
  .pr-eco-list em{position:absolute;left:-2.55rem;top:0;width:2.1rem;height:2.1rem;border-radius:50%;background:var(--surface);border:1px solid rgba(24,203,150,.6);color:#10946d;display:flex;align-items:center;justify-content:center;font-style:normal;font-family:monospace;font-size:.7rem}
  .pr-eco-list small{display:block;font-family:monospace;font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:#8a8474}
  .pr-eco-list b{display:block;font-family:var(--font-display);font-size:1.1rem;font-weight:600}
  .pr-eco-list span{display:block;color:var(--muted-dark);font-size:.92rem}
}

/* explorer */
.pr-exp{background:var(--bg);padding:5rem 1.5rem 7rem}
.pr-exp-wrap{max-width:80rem;margin:4.5rem auto 0}
.pr-exp-grid{display:grid;grid-template-columns:1fr 1.05fr;gap:5rem;align-items:center}
@media(max-width:1024px){.pr-exp-grid{grid-template-columns:1fr;gap:3rem}}
.pr-tab{position:relative;display:block;width:100%;text-align:left;background:none;border:0;border-top:1px solid var(--line);color:inherit;font:inherit;cursor:pointer;padding:1.35rem 0}
.pr-tab:last-child{border-bottom:1px solid var(--line)}
.pr-tab-head{display:flex;align-items:baseline;gap:1rem}
.pr-tab small{font-family:monospace;font-size:.72rem;color:#4f556d;transition:color .3s}
.pr-tab h3{font-family:var(--font-display);font-size:clamp(1.3rem,2.3vw,1.9rem);font-weight:500;color:#5b6180;transition:color .3s}
.pr-tab.on small{color:var(--accent)}
.pr-tab.on h3,.pr-tab:hover h3{color:var(--ink)}
.pr-tab p{color:var(--ink-soft);font-size:.95rem;max-width:30rem;padding:.7rem 0 0 2.15rem}
.pr-tab-fill{position:absolute;left:0;bottom:-1px;height:2px;width:100%;transform-origin:0 50%;background:linear-gradient(90deg,var(--accent),var(--accent-2))}
.pr-tab-fill.run{animation:prFill 6s linear forwards}
.pr-tab-fill.hold{opacity:.4}
@keyframes prFill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.pr-stage2{position:relative;border-radius:1.25rem;border:1px solid var(--line);background:linear-gradient(160deg,rgba(255,255,255,.055),rgba(255,255,255,.012));min-height:25rem;padding:1.5rem;box-shadow:0 30px 80px rgba(0,0,0,.45);overflow:hidden}
.pr-stage2::before{content:'';position:absolute;top:-30%;right:-20%;width:70%;aspect-ratio:1;border-radius:50%;background:rgba(24,203,150,.12);filter:blur(90px);pointer-events:none}
.pr-stage-bar{position:relative;display:flex;align-items:center;gap:.4rem;margin-bottom:1.5rem}
.pr-stage-bar i{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.14)}
.pr-stage-bar span{margin-left:auto;font-family:monospace;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;color:#5b6180}
.pr-stage2>div:last-child{position:relative}

.pr-sched{display:grid;grid-template-columns:repeat(5,1fr);gap:.6rem}
.pr-sched-h{font-family:monospace;font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:#5b6180;text-align:center}
.pr-cell{display:block;height:3.3rem;border-radius:.65rem;border:1px dashed rgba(255,255,255,.12)}
.pr-cell.t1{background:rgba(24,203,150,.22);border:1px solid rgba(24,203,150,.45)}
.pr-cell.t2{background:rgba(91,141,239,.2);border:1px solid rgba(91,141,239,.42)}
.pr-cell.t3{background:rgba(245,165,36,.18);border:1px solid rgba(245,165,36,.6);animation:prGap 1.8s ease-in-out infinite}
@keyframes prGap{0%,100%{box-shadow:0 0 0 0 rgba(245,165,36,.4)}50%{box-shadow:0 0 0 7px rgba(245,165,36,0)}}
.pr-legend{margin-top:1.25rem;font-size:.75rem;color:#6b7190;display:flex;align-items:center;gap:.5rem}
.pr-legend i{display:inline-block;width:10px;height:10px;border-radius:3px;margin-left:.6rem}
.pr-legend i.t1{background:rgba(24,203,150,.6);margin-left:0}
.pr-legend i.t3{background:rgba(245,165,36,.75)}

.pr-gps{position:relative;height:18rem;border-radius:1rem;overflow:hidden;background:#0c1322;border:1px solid rgba(255,255,255,.06)}
.pr-gps-grid{position:absolute;inset:0;opacity:.09;background-image:linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px);background-size:34px 34px}
.pr-ring{position:absolute;left:50%;top:46%;width:8rem;height:8rem;margin:-4rem 0 0 -4rem;border-radius:50%;border:1.5px solid rgba(24,203,150,.6);animation:prRadar 2.6s ease-out infinite}
@keyframes prRadar{from{transform:scale(.3);opacity:.9}to{transform:scale(2.4);opacity:0}}
.pr-fence{position:absolute;left:50%;top:46%;width:11rem;height:11rem;margin:-5.5rem 0 0 -5.5rem;border-radius:50%;border:1px dashed rgba(255,255,255,.28)}
.pr-pin{position:absolute;left:50%;top:46%;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 5px rgba(24,203,150,.25),0 0 22px var(--accent)}
.pr-pill{position:absolute;left:50%;bottom:1.1rem;transform:translateX(-50%);display:inline-flex;align-items:center;gap:.45rem;padding:.45rem 1rem;border-radius:9999px;font-size:.8rem;font-weight:500;background:rgba(24,203,150,.14);border:1px solid rgba(24,203,150,.45);color:#7ff0cb;white-space:nowrap}
.pr-pill-static{position:static;transform:none;margin-top:1.4rem}

.pr-comp-chips{display:flex;gap:.5rem;margin-bottom:1rem}
.pr-comp-chips span{font-family:monospace;font-size:.7rem;letter-spacing:.08em;padding:.25rem .7rem;border-radius:9999px;border:1px solid rgba(91,141,239,.5);color:#9db9f5;background:rgba(91,141,239,.1)}
.pr-comp-row{display:flex;align-items:center;gap:.9rem;padding:.95rem 0;border-bottom:1px solid rgba(255,255,255,.07)}
.pr-comp-row b{font-weight:500;font-size:.95rem}
.pr-comp-row em{margin-left:auto;font-style:normal;font-size:.78rem}
.pr-comp-row em.ok{color:#7ff0cb}
.pr-comp-row em.warn{color:#f7bd5a}
.pr-tick{width:1.5rem;height:1.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.pr-tick.ok{background:rgba(24,203,150,.18);color:#7ff0cb}
.pr-tick.warn{background:rgba(245,165,36,.16)}
.pr-tick.warn i{width:7px;height:7px;border-radius:50%;background:#f5a524;animation:prGap 1.8s ease-in-out infinite}

.pr-bars{display:flex;align-items:flex-end;gap:.7rem;height:12.5rem;padding:0 .25rem;border-bottom:1px solid rgba(255,255,255,.1)}
.pr-bars i{flex:1;display:block;border-radius:.45rem .45rem 0 0;background:linear-gradient(to top,rgba(24,203,150,.25),var(--accent))}

.pr-chat{display:flex;flex-direction:column;gap:1rem;padding-top:.5rem}
.pr-bub{max-width:82%;padding:.8rem 1.1rem;border-radius:1.1rem;font-size:.92rem;line-height:1.5}
.pr-bub.me{align-self:flex-end;background:rgba(255,255,255,.08);border-bottom-right-radius:.3rem}
.pr-bub.ai{background:rgba(24,203,150,.14);border:1px solid rgba(24,203,150,.35);border-bottom-left-radius:.3rem}
.pr-chat-slot{display:grid}
.pr-chat-slot>*{grid-area:1/1}
.pr-typing{align-self:start;display:flex;gap:.3rem;padding:.9rem 1.1rem;width:fit-content;border-radius:1.1rem;background:rgba(24,203,150,.1)}
.pr-typing i{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:prBounce 1s ease-in-out infinite}
.pr-typing i:nth-child(2){animation-delay:.15s}
.pr-typing i:nth-child(3){animation-delay:.3s}
@keyframes prBounce{0%,100%{transform:translateY(0);opacity:.5}50%{transform:translateY(-4px);opacity:1}}

.pr-more{position:relative;margin-top:2.25rem;font-size:.9rem}
.pr-more a{color:var(--accent);text-decoration:none;font-family:var(--font-display);font-weight:600}
.pr-more a:hover{text-decoration:underline}
`;
