import React from "react";
import Link from "next/link";
import { Cpu } from "lucide-react";
import { TechLogo } from "@/components/icons/TechLogos";

interface TechPill {
  name: string;
  category: string;
  usage: string;
}

const coreTech: TechPill[] = [
  { name: "Next.js", category: "Frontend", usage: "Sub-Second Web Apps" },
  { name: "React", category: "Frontend", usage: "Dynamic Client Portals" },
  { name: "Flutter", category: "Mobile", usage: "Cross-Platform Apps" },
  { name: "Kotlin", category: "Mobile", usage: "Native Android Telemetry" },
  { name: "Laravel", category: "Backend", usage: "Enterprise Business Logic" },
  { name: "Node.js", category: "Backend", usage: "High-Concurrency APIs" },
  { name: "Python", category: "AI/ML", usage: "Applied Machine Learning" },
  { name: "WordPress", category: "CMS", usage: "Custom Themes & Widgets" },
];

export const TechStripSection: React.FC = () => {
  return (
    <section className="w-full bg-[#14af81] text-[#0B091D] py-16 sm:py-20 relative overflow-hidden shadow-inner">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B091D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#0B091D] bg-white/25 px-3 py-1 rounded-full tracking-wider mb-3 font-bold border border-white/30">
              <Cpu className="w-4 h-4" />
              <span>Modern Technology Stack</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
              Engineered with the Right Tools for Every Layer
            </h3>
          </div>

          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0B091D] bg-white hover:bg-[#e4f9f3] px-5 py-2.5 rounded-full transition-all shadow-sm self-start lg:self-auto group"
          >
            <span>Full Technology Architecture</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        {/* Core Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
          {coreTech.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-2xl bg-white/95 border border-white/50 hover:bg-white hover:-translate-y-1 transition-all duration-300 text-center group cursor-default flex flex-col items-center justify-between min-h-[120px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_24px_rgba(11,9,29,0.15)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e4f9f3] border border-[#14af81]/25 p-2 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-[#14af81]/15 transition-all duration-300">
                <TechLogo name={tech.name} className="w-5 h-5 text-[#0B091D]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0B091D] font-mono">
                  {tech.name}
                </div>
                <div className="text-[10px] text-[#4B5563] mt-0.5 font-medium">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
