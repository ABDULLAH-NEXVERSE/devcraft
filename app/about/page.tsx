"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData, companyTeam, yearsInOperation } from "@/data/companyData";
import {
  Sparkles,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Code2,
  Users,
  Play,
  Pause,
} from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#18CB96]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The DevCraft Story</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
          Software, Crafted With Intent —{" "}
          <span className="text-gradient-emerald">Delivered by Two Teams.</span>
        </h1>
        <p className="text-sm sm:text-base font-body text-[#A4A2B2] leading-relaxed max-w-3xl mx-auto">
          {companyData.primaryCorporateStatement}
        </p>
      </div>

      {/* Dynamic Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 mb-20 bg-[#0B0B10]/80">
        <div className="text-center p-4">
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#18CB96] mb-1">
            {yearsInOperation}+ Years
          </div>
          <div className="text-xs text-[#A4A2B2]">In Active Operation</div>
        </div>

        <div className="text-center p-4">
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1">
            2 Hubs
          </div>
          <div className="text-xs text-[#A4A2B2]">Sheffield, UK &amp; Lahore, PK</div>
        </div>

        <div className="text-center p-4">
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-1">
            {companyTeam.length} Key Leads
          </div>
          <div className="text-xs text-[#A4A2B2]">Dynamic Core Roster</div>
        </div>

        <div className="text-center p-4">
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#18CB96] mb-1">
            24/7
          </div>
          <div className="text-xs text-[#A4A2B2]">Round-the-Clock Delivery</div>
        </div>
      </div>

      {/* Two-Team Follow-The-Sun Delivery Narrative */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 mb-20 relative overflow-hidden bg-gradient-to-br from-[#0B0B10] to-[#131219]">
        <div className="max-w-3xl space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#18CB96] tracking-wider font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Follow-The-Sun Delivery Model</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {companyData.twoTeamModel.headline}
          </h2>
          <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
            {companyData.twoTeamModel.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white font-mono">
              <MapPin className="w-4 h-4 text-[#18CB96]" />
              <span>United Kingdom Hub (Sheffield)</span>
            </div>
            <div className="text-xs text-[#18CB96] font-semibold">
              {companyData.twoTeamModel.ukOffice.lead}
            </div>
            <p className="text-xs text-[#A4A2B2] leading-relaxed">
              {companyData.twoTeamModel.ukOffice.focus}. Operating on UK time, leading direct client communications, discovery wireframes, brand-aligned interfaces, and strategic milestones.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white font-mono">
              <MapPin className="w-4 h-4 text-[#18CB96]" />
              <span>Pakistan Hub (Lahore)</span>
            </div>
            <div className="text-xs text-[#18CB96] font-semibold">
              {companyData.twoTeamModel.pakistanOffice.lead}
            </div>
            <p className="text-xs text-[#A4A2B2] leading-relaxed">
              {companyData.twoTeamModel.pakistanOffice.focus}. Delivering full-stack backend APIs, mobile development, testing regressions, and 24/7 infrastructure uptime support.
            </p>
          </div>
        </div>
      </div>

      {/* Dynamic Team Roster (Derived from companyTeam array) */}
      <div className="mb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Our People ({companyTeam.length}-Person Leadership Roster)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            The Team Driving DevCraft
          </h2>
          <p className="text-xs sm:text-sm text-[#A4A2B2]">
            Leadership across our UK and Pakistan offices overseeing every client sprint and proprietary platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyTeam.map((member) => (
            <div
              key={member.name}
              className="p-7 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between hover:border-[#18CB96]/40 transition-all bg-[#0B0B10]/90 group"
            >
              <div>
                {/* Avatar with placeholder initials fallback */}
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-5 bg-[#18CB96]/15 border border-[#18CB96]/30 flex items-center justify-center">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-xl font-bold font-mono text-[#18CB96]">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#18CB96] transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-[#80E2C5] mb-2">
                  {member.role}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A4A2B2] mb-4">
                  <MapPin className="w-3 h-3 text-[#18CB96]" />
                  <span>{member.location}</span>
                </div>

                <p className="text-xs text-[#A4A2B2] leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-mono text-[#6B697D] uppercase block mb-1">
                  Specialization:
                </span>
                <span className="text-xs font-mono text-[#d6d9ea]">
                  {member.specialization}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Manifesto */}
      <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 mb-20 bg-[#0B0B10]/80">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono text-[#18CB96] uppercase font-semibold block mb-2">
            The DevCraft Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            How We Build Software
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {companyData.manifesto.map((m) => (
            <div key={m.number} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-[#18CB96] font-bold">
                {m.number}
              </span>
              <h3 className="text-base font-bold text-white">{m.title}</h3>
              <p className="text-xs text-[#A4A2B2] leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dual CTA */}
      <ContactSection />
    </div>
  );
}
