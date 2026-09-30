"use client";
/* eslint-disable @next/next/no-img-element */

import { useId, useState, type ReactNode, type SyntheticEvent } from "react";
import Link from "next/link";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  DevCraft shared kit — used by every marketing page                 */
/* ------------------------------------------------------------------ */

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-body", display: "swap" });

export const CONTACT_EMAIL = "contact@nexverse.co.uk"; // same address as the home page — confirm before launch
export const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const FALLBACK_IMG = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80";
export function onImgError(e: SyntheticEvent<HTMLImageElement>) {
    const el = e.currentTarget;
    if (el.dataset.fb) return;
    el.dataset.fb = "1";
    el.src = FALLBACK_IMG;
}

const NAV = [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Process", href: "/#how-we-work" },
    { label: "Industries", href: "/industries" },
    { label: "Work", href: "/work" },
];

/* Fade + rise on scroll */
export function Reveal({ children, delay = 0, y = 28, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
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
    return <motion.div className="dc-progress" style={{ scaleX }} aria-hidden="true" />;
}

function SiteNav({ active }: { active: string }) {
    const [logoOk, setLogoOk] = useState(true);
    return (
        <div className="dc-nav-wrap">
            <nav className="dc-nav" aria-label="Primary">
                <Link href="/" className="dc-logo">
                    {logoOk ? (
                        <img src="/newlogo.png" alt="DevCraft" onError={() => setLogoOk(false)} />
                    ) : (
                        <>
                            <span className="dc-dot" />
                            DevCraft
                        </>
                    )}
                </Link>
                <ul className="dc-links">
                    {NAV.map((n) => (
                        <li key={n.label} className="dc-link-li">
                            <Link href={n.href} className={n.href === active ? "is-active" : undefined}>
                                {n.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/contact" className="dc-cta">
                            Get a Quote
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

function SiteFooter() {
    return (
        <footer className="dc-footer">
            <div className="dc-footer-in">
                <span className="dc-footer-brand">DevCraft</span>
                <span className="dc-footer-copy">&copy; {new Date().getFullYear()} DevCraft. Sheffield, UK &amp; Lahore, Pakistan.</span>
            </div>
        </footer>
    );
}

/* Angled glowing divider between sections. `from` = colour above, `to` = colour below */
export function Slab({ from, to, light = false }: { from: string; to: string; light?: boolean }) {
    const uid = useId().replace(/:/g, "");
    const lipL = light ? ["#e4ede8", "#cedad3"] : ["#17263b", "#0a121d"];
    const lipR = light ? ["#dbe5df", "#c2d0c8"] : ["#0d1724", "#04070c"];
    return (
        <div className="dc-slab" aria-hidden="true" style={{ background: to }}>
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
            <span className="dc-slab-dot" />
        </div>
    );
}

/* Closing call-to-action band */
export function ContactBand({ title, text, subject, extra }: { title: string; text: string; subject: string; extra?: ReactNode }) {
    return (
        <section className="dc-contact">
            <div className="dc-contact-grid" aria-hidden="true" />
            <Reveal>
                <h2 className="dc-contact-h2">{title}</h2>
                <p className="dc-contact-p">{text}</p>
                <div className="dc-cta-row dc-cta-center">
                    <a href={mailto(subject)} className="dc-btn-primary">
                        Request a Quote
                    </a>
                    <a href={mailto(`Consultation: ${subject}`)} className="dc-btn-outline">
                        Book a Consultation
                    </a>
                </div>
                {extra}
            </Reveal>
        </section>
    );
}

/* Page shell: fonts, tokens, grain, progress bar, nav, footer */
export function DcShell({ active, children }: { active: string; children: ReactNode }) {
    return (
        <MotionConfig reducedMotion="user">
            <div className={`dc ${display.variable} ${body.variable}`}>
                <style>{BASE_CSS}</style>
                <div className="dc-noise" aria-hidden="true" />
                <ScrollBar />
                <SiteNav active={active} />
                {children}
                <SiteFooter />
            </div>
        </MotionConfig>
    );
}

/* Page shell without standalone nav and footer (used in app directory with root layout) */
export function DcPage({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <MotionConfig reducedMotion="user">
            <div className={`dc ${display.variable} ${body.variable} ${className}`}>
                <style>{BASE_CSS}</style>
                <div className="dc-noise" aria-hidden="true" />
                {children}
            </div>
        </MotionConfig>
    );
}

const BASE_CSS = `
html{scroll-behavior:smooth}
body{background:#0A0E17}
.dc{--bg:#0A0E17;--surface:#F3EFE7;--ink:#ECEEF5;--ink-soft:#8B90A6;--ink-dark:#191510;--muted-dark:#6B6558;--accent:#18cb96;--accent-2:#5B8DEF;--line:rgba(255,255,255,.09);
  --font-display:var(--f-display),system-ui,sans-serif;--font-body:var(--f-body),system-ui,sans-serif;
  background:var(--bg);color:var(--ink);font-family:var(--font-body);line-height:1.65;overflow-x:clip;min-height:100vh}
.dc *,.dc *::before,.dc *::after{box-sizing:border-box;margin:0;padding:0}
.dc a{color:inherit}
.dc ul,.dc ol{list-style:none}
.dc ::selection{background:#18cb96;color:#07070a}
.dc-wrap{max-width:80rem;margin:0 auto}
.dc-center{text-align:center}

.dc-noise{pointer-events:none;position:fixed;inset:0;z-index:40;opacity:.03;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
.dc-progress{position:fixed;top:0;left:0;right:0;height:2px;transform-origin:0 50%;background:linear-gradient(90deg,var(--accent),var(--accent-2));z-index:100}

.dc-nav-wrap{position:fixed;top:1rem;left:0;right:0;z-index:50;display:flex;justify-content:center;padding:0 1.5rem;pointer-events:none}
.dc-nav{pointer-events:auto;width:100%;max-width:80rem;background:rgba(7,7,10,.85);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,.09);border-radius:9999px;padding:.625rem 1.5rem;display:flex;align-items:center;justify-content:space-between;box-shadow:0 8px 32px rgba(0,0,0,.5)}
.dc-logo{font-family:var(--font-display);font-weight:800;font-size:1.25rem;color:var(--ink);text-decoration:none;letter-spacing:-.02em;display:flex;align-items:center;gap:.5rem}
.dc-logo img{height:2rem;width:auto}
.dc-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent)}
.dc-links{display:flex;align-items:center;gap:.125rem}
.dc-links a{color:var(--ink-soft);text-decoration:none;font-size:.875rem;font-weight:500;padding:.4rem .85rem;border-radius:9999px;transition:color .2s,background .2s;display:inline-block}
.dc-links a:hover,.dc-links a.is-active{color:var(--ink);background:rgba(255,255,255,.06)}
.dc-links a.dc-cta{background:var(--accent);color:#06120E;font-weight:600;transition:transform .2s,box-shadow .2s}
.dc-links a.dc-cta:hover{transform:scale(1.03);box-shadow:0 0 24px rgba(24,203,150,.35)}
@media(max-width:768px){.dc-link-li{display:none}}

.dc-overline{display:inline-block;font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--accent)}
.dc-h2{font-family:var(--font-display);font-size:clamp(2rem,4vw,3rem);font-weight:600;line-height:1.15;margin-top:.75rem}
.dc-p{margin-top:1rem;max-width:40rem;font-size:1rem;color:var(--ink-soft);line-height:1.65}
.dc-p-center{margin-left:auto;margin-right:auto}
.dc-mono{font-family:monospace;font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ink-soft)}
.dc-accent{background:linear-gradient(90deg,#18cb96,#52ffcb);-webkit-background-clip:text;background-clip:text;color:transparent}
.dc-cta-row{margin-top:2.5rem;display:flex;flex-wrap:wrap;gap:1rem;align-items:center}
.dc-cta-center{justify-content:center}
.dc-btn-primary{border-radius:9999px;background:var(--accent);padding:.75rem 1.5rem;font-size:.875rem;font-weight:600;color:#06120E;text-decoration:none;transition:transform .2s,box-shadow .2s;display:inline-block;border:0;cursor:pointer;font-family:inherit}
.dc-btn-primary:hover{transform:scale(1.03);box-shadow:0 0 28px rgba(24,203,150,.35)}
.dc-btn-outline{border-radius:9999px;border:1px solid var(--line);padding:.75rem 1.5rem;font-size:.875rem;font-weight:500;color:var(--ink);text-decoration:none;transition:border-color .2s,color .2s;display:inline-block;background:none;cursor:pointer;font-family:inherit}
.dc-btn-outline:hover{border-color:var(--accent);color:var(--accent)}

.dc-slab{position:relative;width:100%;overflow:hidden;height:clamp(90px,12vw,210px);display:block;margin:-1px 0;pointer-events:none;user-select:none;z-index:20}
.dc-slab svg{width:100%;height:100%;display:block}
.dc-slab-dot{position:absolute;left:36.11%;top:81.25%;width:44px;height:44px;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,#fff 0%,rgba(82,255,203,.8) 25%,rgba(24,203,150,.35) 60%,transparent 100%);opacity:.9}

.dc-contact{position:relative;overflow:hidden;padding:6rem 1.5rem 9rem;text-align:center;background:var(--bg)}
.dc-contact-grid{pointer-events:none;position:absolute;inset:0;opacity:.06;background-image:linear-gradient(var(--accent) 1px,transparent 1px),linear-gradient(90deg,var(--accent) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:radial-gradient(ellipse 60% 60% at 50% 50%,#000,transparent);mask-image:radial-gradient(ellipse 60% 60% at 50% 50%,#000,transparent)}
.dc-contact-h2{position:relative;font-family:var(--font-display);font-size:clamp(2.5rem,5vw,4rem);font-weight:600;line-height:1.1;max-width:40rem;margin:0 auto}
.dc-contact-p{position:relative;margin:1.25rem auto 0;max-width:30rem;font-size:.9375rem;color:var(--ink-soft)}
.dc-contact .dc-cta-row{position:relative}
.dc-footer{background:var(--bg);border-top:1px solid var(--line);padding:3rem 1.5rem}
.dc-footer-in{max-width:80rem;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.dc-footer-brand{font-family:var(--font-display);font-size:1rem;font-weight:700}
.dc-footer-copy{font-size:.8125rem;color:var(--ink-soft)}

@media(prefers-reduced-motion:reduce){.dc *,.dc *::before,.dc *::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
`;