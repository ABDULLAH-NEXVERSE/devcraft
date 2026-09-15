import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Layout,
  Sparkles,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service | DevCraft" };

  return {
    title: `${service.title} Company | DevCraft`,
    description: service.shortDesc,
  };
}

const serviceIcons: Record<string, React.ReactNode> = {
  "web-development": <Globe className="w-6 h-6 text-[#18CB96]" />,
  "mobile-app-development": <Smartphone className="w-6 h-6 text-[#4ED7AE]" />,
  "custom-software-development": <Cpu className="w-6 h-6 text-[#18CB96]" />,
  "ecommerce-development": <ShoppingBag className="w-6 h-6 text-[#80E2C5]" />,
  "ui-ux-design": <Layout className="w-6 h-6 text-[#18CB96]" />,
  "ai-ml-solutions": <Sparkles className="w-6 h-6 text-[#4ED7AE]" />,
  "maintenance-support": <ShieldCheck className="w-6 h-6 text-[#18CB96]" />,
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Top Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A4A2B2] hover:text-[#18CB96] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* 1. Hero Heading & Subheading */}
      <div className="p-8 sm:p-14 rounded-3xl glass-panel border border-white/10 relative overflow-hidden mb-12 bg-[#0B0B10]/90">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#18CB96]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-2xl bg-[#18CB96]/15 border border-[#18CB96]/30 flex items-center justify-center">
                {serviceIcons[service.slug] || <Layers className="w-6 h-6 text-[#18CB96]" />}
              </div>
              {service.badge && (
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#18CB96]/15 text-[#18CB96] border border-[#18CB96]/25 font-medium">
                  {service.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {service.title}
            </h1>

            <div className="text-xs sm:text-sm font-mono text-[#4ED7AE] uppercase tracking-wider">
              {service.subtitle}
            </div>

            <p className="text-sm sm:text-base text-[#A4A2B2] leading-relaxed">
              {service.overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {service.techStack.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-[#80E2C5] border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden glass-panel border border-white/10 bg-[#0B0B10]">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent opacity-60" />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
              {service.metrics.map((m) => (
                <div key={m.label} className="p-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <div className="text-base sm:text-lg font-bold font-mono text-[#18CB96]">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-[#A4A2B2] mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Client Problem Statement */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 mb-12 bg-white/5">
        <span className="text-xs font-mono uppercase text-[#18CB96] font-semibold block mb-2">
          The Problem This Service Solves
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Eliminating Operational Friction &amp; Inefficiencies
        </h3>
        <p className="text-sm text-[#d6d9ea] leading-relaxed">
          {service.problemSolved}
        </p>
      </div>

      {/* 3. What DevCraft Does (Deliverables) */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 mb-12">
        <h3 className="text-xl font-bold text-white mb-6">
          What DevCraft Delivers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.deliverables.map((del) => (
            <div key={del} className="p-4 rounded-2xl bg-[#0B0B10] border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#18CB96] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-[#d6d9ea] font-medium">{del}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Process for this Specific Service */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 mb-12">
        <h3 className="text-xl font-bold text-white mb-6">
          Our {service.title} Delivery Process
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.workflowSteps.map((ws) => (
            <div key={ws.step} className="p-5 rounded-2xl bg-[#0B0B10] border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#18CB96] mb-2 block">
                  Step {ws.step}
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">{ws.title}</h4>
                <p className="text-xs text-[#A4A2B2] leading-relaxed">{ws.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Tech Stack & 6. Related Case Study or Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white">
            Technologies Used
          </h3>
          <p className="text-xs text-[#A4A2B2]">
            Production-grade stack vetted for security, speed, and maintainability.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {service.techStack.map((t) => (
              <span key={t} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#80E2C5]">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-xs font-mono text-[#18CB96] uppercase font-semibold block mb-1">
              Related Proof &amp; Live Project
            </span>
            <h3 className="text-lg font-bold text-white mb-2">
              {service.relatedProject.name}
            </h3>
            <p className="text-xs text-[#A4A2B2] leading-relaxed">
              {service.relatedProject.description}
            </p>
          </div>
          <Link
            href={service.relatedProject.link}
            className="text-xs font-bold text-[#18CB96] hover:text-[#4ED7AE] flex items-center gap-1.5 transition-colors pt-2"
          >
            <span>View Related Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 7. CTA: Get a Quote / Book a Consultation */}
      <ContactSection />
    </div>
  );
}
