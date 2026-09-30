"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Compass,
  Server,
  Cloud,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiVite,
  SiWordpress,
  SiLaravel,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiKotlin,
  SiFirebase,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiShopify,
  SiStripe,
  SiFigma,
  SiPython,
  SiFastapi,
  SiPytorch,
  SiCloudflare,
  SiLinux,
  SiMysql,
} from "react-icons/si";

import { DcPage, Reveal, Slab, ContactBand, mailto, onImgError } from "@/components/dc/Kit";
import type { ServiceDetail } from "@/src/data/servicesData";

/* Tech icon lookup with brand colors */
const TECH_ICONS: Record<string, { Icon: IconType; color: string }> = {
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  React: { Icon: SiReact, color: "#61DAFB" },
  Vite: { Icon: SiVite, color: "#BD34FE" },
  WordPress: { Icon: SiWordpress, color: "#21759B" },
  "WordPress / WooCommerce": { Icon: SiWordpress, color: "#21759B" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Tailwind Design Tokens": { Icon: SiTailwindcss, color: "#06B6D4" },
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Redis: { Icon: SiRedis, color: "#DC382D" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "Shopify API": { Icon: SiShopify, color: "#95BF47" },
  "Stripe Connect": { Icon: SiStripe, color: "#635BFF" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Python: { Icon: SiPython, color: "#3776AB" },
  FastAPI: { Icon: SiFastapi, color: "#05998B" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  Cloudflare: { Icon: SiCloudflare, color: "#F38020" },
  Linux: { Icon: SiLinux, color: "#FCC624" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
};

interface Props {
  service: ServiceDetail;
  allServices: { slug: string; title: string }[];
}

export function ServiceDetailClient({ service, allServices }: Props) {
  const currentIndex = allServices.findIndex((s) => s.slug === service.slug);
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : allServices[allServices.length - 1];
  const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : allServices[0];

  return (
    <DcPage>
      <style>{DETAIL_CSS}</style>

      {/* ------------------------------ TOP BREADCRUMB ------------------------------ */}
      <section className="sd-nav-bar">
        <div className="dc-wrap sd-nav-inner">
          <Link href="/services" className="sd-back-btn">
            <ArrowLeft size={16} />
            <span>All Services</span>
          </Link>
          <div className="sd-nav-meta">
            <span className="sd-nav-counter">
              {String(currentIndex + 1).padStart(2, "0")} / {String(allServices.length).padStart(2, "0")}
            </span>
            <span className="sd-nav-sep">·</span>
            <span className="sd-nav-title">{service.title}</span>
          </div>
        </div>
      </section>

      {/* ------------------------------ HERO ------------------------------ */}
      <section className="sd-hero">
        <div className="sd-hero-glow" aria-hidden="true" />
        <div className="sd-hero-glow sd-hero-glow-2" aria-hidden="true" />

        <div className="dc-wrap sd-hero-grid">
          <div>
            <div className="sd-badge">
              <i />
              <span>{service.badge || "Core Service"}</span>
            </div>

            <h1 className="sd-h1">
              {service.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="dc-accent">{service.title.split(" ").slice(-1)}</span>
            </h1>

            <p className="sd-subtitle">{service.subtitle}</p>
            <p className="sd-overview">{service.overview}</p>

            {/* Metrics */}
            <div className="sd-metrics-grid">
              {service.metrics.map((m, i) => (
                <div key={i} className="sd-metric-card">
                  <div className="sd-metric-val">{m.value}</div>
                  <div className="sd-metric-lbl">{m.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="dc-cta-row">
              <a href={mailto(`Enquiry: ${service.title}`)} className="dc-btn-primary">
                Request a Quote
              </a>
              <a href={mailto(`Consultation: ${service.title}`)} className="dc-btn-outline">
                Book a Consultation
              </a>
            </div>
          </div>

          {/* Hero Visual Frame */}
          <div className="sd-hero-visual">
            <div className="sd-frame">
              <div className="sd-frame-bar">
                <i />
                <i />
                <i />
                <span>devcraft.co.uk/services/{service.slug}</span>
              </div>
              <div className="sd-frame-screen">
                <img src={service.heroImage} alt={service.title} onError={onImgError} />
                <div className="sd-frame-overlay" />
                <div className="sd-frame-tag">
                  <Zap size={14} className="text-[#18cb96]" />
                  <span>Production-Grade Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Slab from="#0A0E17" to="#0A0E17" />

      {/* ------------------------------ PROBLEM & TRANSFORMATION ------------------------------ */}
      <section className="sd-problem-sec">
        <div className="dc-wrap">
          <Reveal>
            <div className="sd-problem-box">
              <div className="sd-problem-tag">
                <Shield size={14} />
                <span>The Operational Bottleneck</span>
              </div>
              <h2 className="sd-problem-h2">The problem this service permanently solves.</h2>
              <p className="sd-problem-text">{service.problemSolved}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Slab from="#0A0E17" to="#F3EFE7" light />

      {/* ------------------------------ DELIVERABLES & CAPABILITIES ------------------------------ */}
      <section className="sd-deliv-sec">
        <div className="dc-wrap">
          <Reveal>
            <span className="dc-overline">What We Deliver</span>
            <h2 className="dc-h2">Bespoke deliverables built to scale.</h2>
            <p className="dc-p">
              Every deliverable is crafted from first principles — clean source code, fully documented, and built to be owned by your business.
            </p>
          </Reveal>

          {/* Deliverables Checklist Grid */}
          <div className="sd-deliv-grid">
            {service.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                className="sd-deliv-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="sd-check-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 className="sd-deliv-title">{item}</h3>
                  <span className="sd-deliv-sub">Engineered to specification</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deep-dive Capabilities */}
          {service.capabilities && service.capabilities.length > 0 && (
            <div className="sd-caps-block">
              <div className="sd-caps-head">
                <span className="dc-overline">Deep Technical Capabilities</span>
                <h3 className="sd-caps-h3">Specialized engineering modules</h3>
              </div>

              <div className="sd-caps-grid">
                {service.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="sd-cap-card">
                    <div className="sd-cap-num">0{cIdx + 1}</div>
                    <h4 className="sd-cap-title">{cap.name}</h4>
                    <p className="sd-cap-desc">{cap.description}</p>
                    {cap.technologies && cap.technologies.length > 0 && (
                      <div className="sd-cap-techs">
                        {cap.technologies.map((t) => (
                          <span key={t} className="sd-cap-chip">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Slab from="#F3EFE7" to="#0A0E17" light />

      {/* ------------------------------ 4-STEP DELIVERY PIPELINE ------------------------------ */}
      <section className="sd-pipeline-sec">
        <div className="dc-wrap">
          <Reveal>
            <span className="dc-overline">Methodical Delivery</span>
            <h2 className="dc-h2">Our 4-step delivery pipeline.</h2>
            <p className="dc-p">
              No black boxes. No surprises. Every project runs through a battle-tested milestone model with total transparency.
            </p>
          </Reveal>

          <div className="sd-steps-grid">
            {service.workflowSteps.map((step, sIdx) => (
              <motion.div
                key={step.step}
                className="sd-step-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
              >
                <div className="sd-step-top">
                  <span className="sd-step-num">Step {step.step}</span>
                  <span className="sd-step-pill">Phase 0{sIdx + 1}</span>
                </div>
                <h3 className="sd-step-title">{step.title}</h3>
                <p className="sd-step-desc">{step.desc}</p>
                <div className="sd-step-bar" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Slab from="#0A0E17" to="#0A0E17" />

      {/* ------------------------------ PRODUCTION TECH STACK ------------------------------ */}
      <section className="sd-tech-sec">
        <div className="dc-wrap">
          <Reveal>
            <span className="dc-overline">Engineered for the job</span>
            <h2 className="dc-h2">Technologies we deploy for {service.title.toLowerCase()}.</h2>
            <p className="dc-p">
              We select tooling based on runtime speed, developer ergonomics, security track record, and long-term maintainability.
            </p>
          </Reveal>

          <div className="sd-tech-grid">
            {service.techStack.map((tech) => {
              const info = TECH_ICONS[tech];
              const IconComp = info?.Icon;
              return (
                <div key={tech} className="sd-tech-badge">
                  {IconComp ? (
                    <IconComp size={22} style={{ color: info.color }} />
                  ) : (
                    <Code2 size={20} className="text-[#18cb96]" />
                  )}
                  <span>{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------ RELATED PROJECT / PROOF ------------------------------ */}
      {service.relatedProject && (
        <section className="sd-proof-sec">
          <div className="dc-wrap">
            <div className="sd-proof-card">
              <div className="sd-proof-inner">
                <div>
                  <span className="dc-overline">Proven In Production</span>
                  <h3 className="sd-proof-title">{service.relatedProject.name}</h3>
                  <p className="sd-proof-desc">{service.relatedProject.description}</p>
                </div>
                <Link href={service.relatedProject.link} className="sd-proof-btn">
                  <span>Explore Project</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------ PREV / NEXT SERVICE QUICK SWITCHER ------------------------------ */}
      <section className="sd-switch-sec">
        <div className="dc-wrap sd-switch-grid">
          <Link href={`/services/${prevService.slug}`} className="sd-switch-link prev">
            <ArrowLeft size={18} />
            <div>
              <small>Previous Service</small>
              <b>{prevService.title}</b>
            </div>
          </Link>
          <Link href={`/services/${nextService.slug}`} className="sd-switch-link next">
            <div>
              <small>Next Service</small>
              <b>{nextService.title}</b>
            </div>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ------------------------------ CLOSING CTA BAND ------------------------------ */}
      <ContactBand
        title={`Ready to build your ${service.title.toLowerCase()} platform?`}
        text="Tell us what you want to achieve — we'll give you a frank assessment of the architecture, stack, timeline, and investment."
        subject={`Enquiry: ${service.title}`}
        extra={
          <p className="sd-more-services">
            <Link href="/services">← Back to all services</Link>
          </p>
        }
      />
    </DcPage>
  );
}

/* ------------------------------------------------------------------ */
/*  CSS Styles                                                         */
/* ------------------------------------------------------------------ */
const DETAIL_CSS = `
/* Top bar */
.sd-nav-bar{padding:6.5rem 1.5rem 1.5rem;border-bottom:1px solid var(--line)}
.sd-nav-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.sd-back-btn{display:inline-flex;align-items:center;gap:.5rem;font-family:monospace;font-size:.8rem;color:var(--ink-soft);text-decoration:none;transition:color .2s}
.sd-back-btn:hover{color:var(--accent)}
.sd-nav-meta{display:flex;align-items:center;gap:.6rem;font-family:monospace;font-size:.78rem;color:var(--ink-soft)}
.sd-nav-counter{color:var(--accent);font-weight:600}
.sd-nav-sep{opacity:.4}
.sd-nav-title{color:var(--ink);font-weight:500}

/* Hero */
.sd-hero{position:relative;padding:4rem 1.5rem 5rem;overflow:hidden}
.sd-hero-glow{position:absolute;top:-4rem;right:8%;width:500px;height:500px;border-radius:50%;background:rgba(24,203,150,.12);filter:blur(150px);pointer-events:none}
.sd-hero-glow-2{top:auto;right:auto;left:-4rem;bottom:-6rem;width:400px;height:400px;background:rgba(91,141,239,.08);filter:blur(140px);pointer-events:none}
.sd-hero-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:3.5rem;align-items:center}
@media(max-width:1024px){.sd-hero-grid{grid-template-columns:1fr}}

.sd-badge{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem .85rem;border-radius:9999px;font-family:monospace;font-size:.75rem;background:rgba(24,203,150,.1);border:1px solid rgba(24,203,150,.3);color:var(--accent);margin-bottom:1.25rem}
.sd-badge i{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent)}
.sd-h1{font-family:var(--font-display);font-size:clamp(2.5rem,5vw,4.2rem);font-weight:700;line-height:1.08;letter-spacing:-.03em;margin:0 0 1rem}
.sd-subtitle{font-family:monospace;font-size:.875rem;text-transform:uppercase;letter-spacing:.08em;color:#52ffcb;margin-bottom:1.25rem;font-weight:600}
.sd-overview{font-size:1.05rem;line-height:1.7;color:var(--ink-soft);max-width:38rem}

.sd-metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.9rem;margin-top:2.25rem;max-width:34rem}
@media(max-width:600px){.sd-metrics-grid{grid-template-columns:1fr}}
.sd-metric-card{padding:1rem 1.15rem;border-radius:1rem;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07)}
.sd-metric-val{font-family:monospace;font-size:1.55rem;font-weight:700;color:var(--accent);line-height:1.2}
.sd-metric-lbl{font-size:.75rem;color:var(--ink-soft);margin-top:.25rem;line-height:1.3}

/* Hero Frame */
.sd-hero-visual{position:relative}
.sd-frame{background:#07090e;border:1px solid rgba(255,255,255,.14);border-radius:1.5rem;overflow:hidden;box-shadow:0 30px 80px -20px rgba(0,0,0,.8)}
.sd-frame-bar{display:flex;align-items:center;gap:.45rem;padding:.75rem 1.25rem;border-bottom:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.02)}
.sd-frame-bar i{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.2)}
.sd-frame-bar span{margin-left:.75rem;font-family:monospace;font-size:.72rem;color:var(--ink-soft);letter-spacing:.03em}
.sd-frame-screen{position:relative;aspect-ratio:16/11;overflow:hidden}
.sd-frame-screen img{width:100%;height:100%;object-fit:cover;object-position:top;display:block}
.sd-frame-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(10,14,23,.85) 0%,transparent 60%)}
.sd-frame-tag{position:absolute;bottom:1.15rem;left:1.15rem;display:inline-flex;align-items:center;gap:.5rem;padding:.4rem .9rem;border-radius:9999px;font-family:monospace;font-size:.72rem;background:rgba(10,14,23,.85);border:1px solid rgba(24,203,150,.4);color:var(--ink);backdrop-filter:blur(10px)}

/* Problem Section */
.sd-problem-sec{padding:3.5rem 1.5rem 4.5rem}
.sd-problem-box{padding:2.5rem 2.5rem;border-radius:1.75rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);position:relative;overflow:hidden}
.sd-problem-box::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(to bottom,var(--accent),var(--accent-2))}
.sd-problem-tag{display:inline-flex;align-items:center;gap:.5rem;font-family:monospace;font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:var(--accent);margin-bottom:.75rem}
.sd-problem-h2{font-family:var(--font-display);font-size:clamp(1.5rem,3vw,2.2rem);font-weight:600;margin-bottom:.85rem;line-height:1.2}
.sd-problem-text{font-size:1.05rem;line-height:1.75;color:var(--ink-soft);max-width:56rem}

/* Deliverables Section (Light Surface) */
.sd-deliv-sec{background:var(--surface);color:var(--ink-dark);padding:5.5rem 1.5rem 7rem}
.sd-deliv-sec .dc-overline{color:#10946d}
.sd-deliv-sec .dc-p{color:var(--muted-dark)}
.sd-deliv-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:3.5rem}
@media(max-width:768px){.sd-deliv-grid{grid-template-columns:1fr}}
.sd-deliv-item{display:flex;align-items:flex-start;gap:1rem;padding:1.25rem 1.4rem;border-radius:1rem;background:#ffffff;border:1px solid rgba(0,0,0,.08);box-shadow:0 4px 18px rgba(0,0,0,.03);transition:transform .2s,box-shadow .2s}
.sd-deliv-item:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.06)}
.sd-check-icon{width:2rem;height:2rem;border-radius:50%;background:rgba(24,203,150,.15);color:#10946d;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:.15rem}
.sd-deliv-title{font-family:var(--font-display);font-size:1.02rem;font-weight:600;color:var(--ink-dark);margin-bottom:.2rem}
.sd-deliv-sub{font-size:.78rem;color:var(--muted-dark);font-family:monospace}

/* Deep-dive capabilities */
.sd-caps-block{margin-top:4.5rem;padding-top:3.5rem;border-top:1px solid rgba(0,0,0,.09)}
.sd-caps-head{margin-bottom:2rem}
.sd-caps-h3{font-family:var(--font-display);font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:600;margin-top:.3rem}
.sd-caps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
@media(max-width:1024px){.sd-caps-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:680px){.sd-caps-grid{grid-template-columns:1fr}}
.sd-cap-card{padding:1.6rem 1.6rem;border-radius:1.25rem;background:#ffffff;border:1px solid rgba(0,0,0,.08);display:flex;flex-direction:column;justify-content:space-between}
.sd-cap-num{font-family:monospace;font-size:.78rem;font-weight:700;color:#10946d;letter-spacing:.08em;margin-bottom:.75rem}
.sd-cap-title{font-family:var(--font-display);font-size:1.15rem;font-weight:600;margin-bottom:.5rem;color:var(--ink-dark)}
.sd-cap-desc{font-size:.9rem;line-height:1.6;color:var(--muted-dark);margin-bottom:1.25rem}
.sd-cap-techs{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:auto}
.sd-cap-chip{font-family:monospace;font-size:.7rem;padding:.2rem .6rem;border-radius:9999px;background:rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.08);color:var(--ink-dark)}

/* 4-Step Pipeline */
.sd-pipeline-sec{padding:5.5rem 1.5rem 6.5rem}
.sd-steps-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;margin-top:3.5rem}
@media(max-width:1024px){.sd-steps-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.sd-steps-grid{grid-template-columns:1fr}}
.sd-step-card{padding:1.75rem 1.5rem;border-radius:1.25rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;position:relative}
.sd-step-card:hover{border-color:rgba(24,203,150,.35)}
.sd-step-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}
.sd-step-num{font-family:monospace;font-size:.78rem;font-weight:700;color:var(--accent);letter-spacing:.06em}
.sd-step-pill{font-family:monospace;font-size:.7rem;padding:.15rem .55rem;border-radius:9999px;background:rgba(255,255,255,.05);color:var(--ink-soft)}
.sd-step-title{font-family:var(--font-display);font-size:1.2rem;font-weight:600;margin-bottom:.55rem}
.sd-step-desc{font-size:.875rem;line-height:1.6;color:var(--ink-soft);flex:1}
.sd-step-bar{margin-top:1.5rem;height:2px;width:100%;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden;position:relative}
.sd-step-card:hover .sd-step-bar::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,var(--accent),var(--accent-2))}

/* Tech Stack */
.sd-tech-sec{padding:4rem 1.5rem 5rem}
.sd-tech-grid{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:2.75rem}
.sd-tech-badge{display:inline-flex;align-items:center;gap:.65rem;padding:.65rem 1.25rem;border-radius:9999px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);font-family:var(--font-display);font-size:.95rem;font-weight:500;color:var(--ink);transition:border-color .2s,background .2s,transform .2s}
.sd-tech-badge:hover{border-color:var(--accent);background:rgba(255,255,255,.06);transform:translateY(-2px)}

/* Proof / Related Project */
.sd-proof-sec{padding:2rem 1.5rem 5rem}
.sd-proof-card{padding:2.5rem;border-radius:1.75rem;background:linear-gradient(135deg,rgba(24,203,150,.07),rgba(91,141,239,.05));border:1px solid rgba(24,203,150,.25)}
.sd-proof-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:2rem}
.sd-proof-title{font-family:var(--font-display);font-size:clamp(1.4rem,2.5vw,1.9rem);font-weight:600;margin:.4rem 0 .5rem}
.sd-proof-desc{font-size:.95rem;color:var(--ink-soft);max-width:38rem;line-height:1.6}
.sd-proof-btn{display:inline-flex;align-items:center;gap:.6rem;padding:.75rem 1.5rem;border-radius:9999px;background:var(--accent);color:#06120E;font-weight:600;font-size:.875rem;text-decoration:none;transition:transform .2s,box-shadow .2s;white-space:nowrap}
.sd-proof-btn:hover{transform:scale(1.03);box-shadow:0 0 24px rgba(24,203,150,.35)}

/* Prev/Next Switcher */
.sd-switch-sec{padding:0 1.5rem 4rem;border-top:1px solid var(--line)}
.sd-switch-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;padding-top:2.5rem}
@media(max-width:600px){.sd-switch-grid{grid-template-columns:1fr}}
.sd-switch-link{display:flex;align-items:center;gap:1rem;padding:1.25rem 1.5rem;border-radius:1.25rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);text-decoration:none;transition:border-color .2s,background .2s}
.sd-switch-link:hover{border-color:rgba(24,203,150,.4);background:rgba(255,255,255,.05)}
.sd-switch-link.next{justify-content:flex-end;text-align:right}
.sd-switch-link small{display:block;font-family:monospace;font-size:.72rem;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.06em}
.sd-switch-link b{display:block;font-family:var(--font-display);font-size:1.05rem;font-weight:600;color:var(--ink);margin-top:.2rem}

.sd-more-services{margin-top:2rem;font-size:.9rem}
.sd-more-services a{color:var(--accent);text-decoration:none;font-weight:600}
.sd-more-services a:hover{text-decoration:underline}
`;
