"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, Check, ArrowRight, Shield } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  weeks: number;
  sprints: number;
}

const services: ServiceOption[] = [
  { id: "ai", name: "Agentic AI & LLM Workflow System", weeks: 4, sprints: 2 },
  { id: "web", name: "Enterprise Next.js Web Platform", weeks: 6, sprints: 3 },
  { id: "agency", name: "Dedicated White-Label Squad (Monthly)", weeks: 4, sprints: 2 },
  { id: "mobile", name: "React Native Mobile Application", weeks: 8, sprints: 4 },
  { id: "security", name: "Safeguard 24/7 DevOps & Security", weeks: 2, sprints: 1 },
];

export const ProjectEstimator: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>(["ai", "web"]);
  const [velocity, setVelocity] = useState<"standard" | "accelerated">("accelerated");

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const totalSprints = selectedServices.reduce((acc, curr) => {
    const s = services.find((srv) => srv.id === curr);
    return acc + (s ? s.sprints : 0);
  }, 0);

  const estimatedWeeks = velocity === "accelerated"
    ? Math.max(3, Math.ceil(totalSprints * 1.5))
    : Math.max(4, totalSprints * 2);

  return (
    <section id="estimator" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#18CB96]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Calculate Delivery Sprint Timeline
          </h2>
          <p className="text-xs sm:text-sm text-[#A4A2B2]">
            Select your technical requirements to generate an instant architecture blueprint and delivery estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Options */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono uppercase text-[#A4A2B2] mb-1">
              Select Architecture Pillars:
            </div>
            {services.map((srv) => {
              const isSelected = selectedServices.includes(srv.id);
              return (
                <button
                  key={srv.id}
                  onClick={() => toggleService(srv.id)}
                  className={`w-full text-left p-3.5 rounded-2xl flex items-center justify-between transition-all ${
                    isSelected
                      ? "bg-[#18CB96]/15 border border-[#18CB96]/40 text-white"
                      : "bg-[#0B0B10]/50 border border-white/5 text-[#A4A2B2] hover:border-white/20"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-medium">{srv.name}</span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? "bg-[#18CB96] text-[#0B0B10]" : "bg-white/5 text-transparent"
                    }`}
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                </button>
              );
            })}

            <div className="pt-3">
              <div className="text-xs font-mono uppercase text-[#A4A2B2] mb-2">
                Sprint Cadence:
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setVelocity("standard")}
                  className={`py-2 rounded-full text-xs font-medium transition-all ${
                    velocity === "standard"
                      ? "bg-white/20 text-white border border-white/30"
                      : "bg-white/5 text-[#A4A2B2] border border-transparent"
                  }`}
                >
                  Standard 2-Week Sprints
                </button>
                <button
                  onClick={() => setVelocity("accelerated")}
                  className={`py-2 rounded-full text-xs font-medium transition-all ${
                    velocity === "accelerated"
                      ? "bg-[#18CB96] text-[#0B0B10] font-semibold shadow-[0_0_15px_rgba(24,203,150,0.3)]"
                      : "bg-white/5 text-[#A4A2B2] border border-transparent"
                  }`}
                >
                  ⚡ Dedicated Rapid Squad
                </button>
              </div>
            </div>
          </div>

          {/* Right Summary Output Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B0B10] border border-white/10 flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-mono uppercase text-[#18CB96] mb-1">
                Estimated Delivery Window
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono my-2">
                ~{estimatedWeeks} <span className="text-lg text-[#18CB96]">Weeks</span>
              </div>
              <div className="text-xs text-[#A4A2B2]">
                Includes technical discovery blueprint, production code write, automated E2E tests, and production deploy.
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs font-mono text-[#A4A2B2]">
                <div className="flex justify-between">
                  <span>Pillars Selected:</span>
                  <span className="text-white">{selectedServices.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Sprint Units:</span>
                  <span className="text-white">{totalSprints} Sprints</span>
                </div>
                <div className="flex justify-between">
                  <span>Code Coverage SLA:</span>
                  <span className="text-[#18CB96]">&gt; 90%</span>
                </div>
                <div className="flex justify-between">
                  <span>NDA Protection:</span>
                  <span className="text-[#18CB96]">Guaranteed</span>
                </div>
              </div>
            </div>

            <Link
              href="/contact?type=quote"
              className="mt-6 w-full py-3 rounded-full text-xs font-semibold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(24,203,150,0.3)]"
            >
              <span>Lock In Sprint Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
