import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Layers } from "lucide-react";
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
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden bg-[#0B0B10]/90">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#18CB96] tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              <span>Modern Technology Stack</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Engineered with the Right Tools for Every Layer
            </h3>
          </div>

          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#18CB96] hover:text-[#4ED7AE] transition-colors"
          >
            <span>View Full Technology Architecture &rarr;</span>
          </Link>
        </div>

        {/* Core Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {coreTech.map((tech) => (
            <div
              key={tech.name}
              className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#18CB96]/40 hover:bg-white/10 transition-all text-center group cursor-default flex flex-col items-center justify-between min-h-[110px]"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center mb-2 group-hover:border-[#18CB96]/30 group-hover:bg-[#18CB96]/10 transition-all">
                <TechLogo name={tech.name} className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white group-hover:text-[#18CB96] transition-colors font-mono">
                  {tech.name}
                </div>
                <div className="text-[10px] text-[#A4A2B2] mt-0.5">
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
