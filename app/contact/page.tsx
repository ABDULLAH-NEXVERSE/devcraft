import React from "react";
import { Metadata } from "next";
import { companyData } from "@/data/companyData";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapPin, Mail, ShieldCheck, Lock, Clock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact DevCraft | Get a Quote or Book a Consultation",
  description:
    "Whether you have a full spec ready or just an idea, tell us what you're building. Request a quote if you know the scope, or book a free consultation to talk it through with our team.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#18CB96]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Header per Section 12 */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>Follow-The-Sun Response</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Contact DevCraft
        </h1>
        <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed">
          Whether you have a full spec ready or just an idea, tell us what you&apos;re building. Request a quote if you know the scope, or book a free consultation if you&apos;d rather talk it through first — our team will get back to you from whichever office is awake.
        </p>
      </div>

      {/* Interactive Dual Form */}
      <ContactSection />

      {/* Direct Contact Channels & Hub Locations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-3 bg-[#0B0B10]/80">
          <div className="w-10 h-10 rounded-2xl bg-[#18CB96]/15 flex items-center justify-center text-[#18CB96] mb-2">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Direct Email</h3>
          <p className="text-xs text-[#A4A2B2]">
            General inquiries &amp; project briefs:
          </p>
          <div className="text-xs font-mono text-[#18CB96]">
            <a href="mailto:contact@nexverse.co.uk" className="hover:underline">
              contact@nexverse.co.uk
            </a>
          </div>
          <p className="text-[11px] text-[#6B697D] pt-1">
            Checked 24/7 by our on-call project leads.
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-3 bg-[#0B0B10]/80">
          <div className="w-10 h-10 rounded-2xl bg-[#18CB96]/15 flex items-center justify-center text-[#18CB96] mb-2">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">United Kingdom Studio</h3>
          <p className="text-xs text-white font-medium">
            Sheffield, United Kingdom
          </p>
          <p className="text-xs text-[#A4A2B2]">
            Nexverse Studio — Product strategy, UI/UX architecture &amp; commercial management.
          </p>
          <span className="inline-block text-[10px] font-mono text-[#80E2C5] bg-white/5 px-2 py-0.5 rounded">
            GMT / BST Time Zone
          </span>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-3 bg-[#0B0B10]/80">
          <div className="w-10 h-10 rounded-2xl bg-[#18CB96]/15 flex items-center justify-center text-[#18CB96] mb-2">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">Pakistan Engineering Hub</h3>
          <p className="text-xs text-white font-medium">
            Lahore, Pakistan
          </p>
          <p className="text-xs text-[#A4A2B2]">
            DevCraft Development Center — Full-stack software engineering, mobile development &amp; 24/7 support.
          </p>
          <span className="inline-block text-[10px] font-mono text-[#80E2C5] bg-white/5 px-2 py-0.5 rounded">
            PKT Time Zone
          </span>
        </div>
      </div>
    </div>
  );
}
