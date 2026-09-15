import React from "react";
import Image from "next/image";
import Link from "next/link";
import { careersData } from "@/data/careersData";
import { Users, Briefcase, CheckCircle2, ArrowRight, Laptop, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Careers & Culture | DevCraft Global Engineering",
  description:
    "Join DevCraft's elite engineering squad. Open roles in Agentic AI, Next.js Platform Architecture, React Native Mobile, and Technical Delivery Management.",
};

const perks = [
  {
    title: "M-Series Silicon & Tools",
    desc: "Top-spec Apple hardware, multi-monitor setups, and full access to premier dev tools and AI models.",
    icon: Laptop,
  },
  {
    title: "True Autonomy & Ownership",
    desc: "Direct architectural decision-making with zero layers of non-technical product management.",
    icon: Sparkles,
  },
  {
    title: "Global Edge Remote",
    desc: "Work from anywhere with core collaboration hours aligned to the UK/European business day.",
    icon: HeartHandshake,
  },
  {
    title: "Health & Equity Participation",
    desc: "Comprehensive health coverage, competitive compensation, and long-term venture equity.",
    icon: ShieldCheck,
  },
];

export default function CareersPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#18CB96]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>Engineering Culture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          Build for Impact. <span className="text-gradient-emerald">Master the Craft.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#A4A2B2] leading-relaxed">
          We operate as an agile, highly-skilled engineering studio where craftsmanship is celebrated, bureaucracy is dismantled, and every engineer shapes mission-critical architectures.
        </p>
      </div>

      {/* Culture Dual Visual Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-3xl overflow-hidden glass-panel border border-white/10 bg-[#0B0B10]">
          <Image
            src="/assets/hero/engineering-culture-team.webp"
            alt="DevCraft Collaborative Engineering Sprint"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-mono text-[#18CB96] uppercase tracking-wider">
              Studio Culture
            </span>
            <h3 className="text-xl font-bold text-white mt-1">High-Caliber Engineering Pairings</h3>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-3xl overflow-hidden glass-panel border border-white/10 bg-[#0B0B10]">
          <Image
            src="/assets/hero/systems-lab-office.jpg"
            alt="DevCraft Systems Laboratory Office"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] font-mono text-[#80E2C5] uppercase tracking-wider">
              Systems Lab
            </span>
            <h3 className="text-xl font-bold text-white mt-1">Dedicated Testing &amp; Research Hubs</h3>
          </div>
        </div>
      </div>

      {/* Engineering Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-3">
          <div className="text-xs font-mono text-[#18CB96]">01 // AUTONOMY</div>
          <h3 className="text-xl font-bold text-white">Direct Architectural Ownership</h3>
          <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
            Engineers own systems from initial architectural RFC to production edge deployment. No layers of non-technical management.
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-3">
          <div className="text-xs font-mono text-[#18CB96]">02 // HIGHEST BAR</div>
          <h3 className="text-xl font-bold text-white">Zero Technical Debt Policy</h3>
          <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
            We prioritize strict typing, automated test coverage (&gt;90%), and clean documentation over quick-and-dirty hackery.
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-3">
          <div className="text-xs font-mono text-[#18CB96]">03 // CUTTING EDGE</div>
          <h3 className="text-xl font-bold text-white">Modern Tooling Exclusively</h3>
          <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
            We work with Next.js 15, React 19, LangGraph, Claude 3.5, and distributed edge cloud systems daily.
          </p>
        </div>
      </div>

      {/* Perks Grid */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase text-[#18CB96] tracking-wider font-semibold">
            Squad Benefits
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Engineered for Focus</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-[#18CB96]/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#18CB96]/15 border border-[#18CB96]/30 flex items-center justify-center text-[#18CB96]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{p.title}</h4>
                <p className="text-xs text-[#A4A2B2] leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Open Positions */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase text-[#18CB96] tracking-wider font-semibold">
            Active Openings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Current Opportunities
          </h2>
        </div>

        <div className="space-y-6">
          {careersData.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#18CB96]/40 transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#18CB96]/15 text-[#18CB96]">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-mono text-[#A4A2B2]">
                      {job.type} &bull; {job.location}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                </div>

                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(24,203,150,0.3)] self-start md:self-auto"
                >
                  <span>Apply for Position</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
                {job.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div>
                  <h4 className="text-xs font-mono uppercase text-white font-semibold mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#A4A2B2]">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <span className="text-[#18CB96]">&bull;</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-white font-semibold mb-2">
                    Primary Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {job.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0B0B10] text-[#80E2C5] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
