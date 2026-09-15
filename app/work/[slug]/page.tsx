import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote, ShieldCheck, Layers, Cpu } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Next project for recommendations
  const currentIndex = portfolioData.findIndex((p) => p.slug === slug);
  const nextProject = portfolioData[(currentIndex + 1) % portfolioData.length];

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A4A2B2] hover:text-[#18CB96] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center">
            <Image
              src={project.clientLogo}
              alt={project.client}
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <span className="text-xs font-mono uppercase text-[#18CB96] px-3 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30 font-semibold">
            {project.client}
          </span>
          <span className="text-xs font-mono text-[#A4A2B2] px-3 py-1 rounded-full bg-white/5 border border-white/5">
            {project.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {project.title}
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="text-base sm:text-lg text-[#A4A2B2] leading-relaxed max-w-2xl">
            {project.summary}
          </p>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#18CB96] text-[#0B0B10] font-bold text-xs hover:bg-[#14AF81] transition-all shadow-[0_0_20px_rgba(24,203,150,0.3)] shrink-0 self-start sm:self-auto"
            >
              <span>Visit Live Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Featured Full-Width Hero Screenshot */}
      <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden glass-panel border border-white/10 mb-14 bg-[#0B0B10]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 1200px) 100vw, 1024px"
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Results Metric Callouts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 mb-16">
        {project.results.map((res) => (
          <div key={res.label} className="p-4 rounded-2xl bg-[#0B0B10]/70 border border-white/5 text-center sm:text-left">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#18CB96] mb-1">
              {res.metric}
            </div>
            <div className="text-xs text-[#A4A2B2]">{res.label}</div>
          </div>
        ))}
      </div>

      {/* Challenge & Solution Side-by-Side Visual Rhythm */}
      <div className="space-y-12 mb-16">
        {/* Section 1: The Challenge (Text Left / Mockup Right) */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase text-[#4ED7AE] font-semibold">
                01 // Operational Challenge
              </span>
              <h2 className="text-2xl font-bold text-white">
                System Bottlenecks &amp; Scaling Limits
              </h2>
              <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="md:col-span-6 relative h-60 sm:h-72 rounded-2xl overflow-hidden glass-panel border border-white/15 bg-[#0B0B10]">
              <Image
                src={project.mockupImage}
                alt={`${project.client} System Diagnostic View`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Section 2: The Solution (Architecture Visual Left / Text Right) */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:order-2 space-y-4">
              <span className="text-xs font-mono uppercase text-[#18CB96] font-semibold">
                02 // Architectural Solution
              </span>
              <h2 className="text-2xl font-bold text-white">
                Engineered for High-Throughput Reliability
              </h2>
              <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div className="md:col-span-6 md:order-1 relative h-60 sm:h-72 rounded-2xl overflow-hidden glass-panel border border-white/15 bg-[#0B0B10]">
              <Image
                src={project.caseFeatureImage || "/assets/portfolio/enterprise-architecture-solution.jpg"}
                alt={`${project.client} Production Architecture Blueprint`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Win Banner (If Available) */}
      {project.winBanner && (
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#18CB96]/30 mb-16 bg-[#0B0B10]">
          <div className="relative w-full h-[220px] sm:h-[300px]">
            <Image
              src={project.winBanner}
              alt={`${project.client} Verified Impact Banner`}
              fill
              sizes="(max-width: 1200px) 100vw, 1024px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-black/40 to-transparent" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-[#18CB96] uppercase tracking-wider font-semibold">
                Commercial Win Verification
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">Production Performance &amp; ROI Audited</h3>
            </div>
            <span className="text-xs font-mono text-[#80E2C5] bg-[#0B0B10]/80 px-3 py-1 rounded-full border border-[#18CB96]/30 w-fit">
              100% Contract SLA Met
            </span>
          </div>
        </div>
      )}

      {/* Deliverables & Technology Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 mb-16">
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#18CB96]" />
            <span>Key Engineering Deliverables</span>
          </h3>
          <ul className="space-y-3">
            {project.deliverables.map((del) => (
              <li key={del} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A4A2B2]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] shrink-0 mt-2" />
                <span>{del}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#18CB96]" />
            <span>Production Stack &amp; Infrastructure</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#80E2C5]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-[#0B0B10]/70 border border-white/5 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#18CB96] shrink-0" />
            <div className="text-xs text-[#A4A2B2]">
              Protected under mutual strict confidentiality agreements. All production intellectual property belongs to the client.
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial (If Available) */}
      {project.testimonial && (
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#18CB96]/25 mb-16 relative overflow-hidden">
          <Quote className="w-12 h-12 text-[#18CB96]/20 absolute top-6 right-6 pointer-events-none" />
          <p className="text-base sm:text-lg text-white font-medium italic mb-6 leading-relaxed">
            &ldquo;{project.testimonial.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#18CB96]/20 border border-[#18CB96]/40 flex items-center justify-center text-sm font-bold text-[#18CB96]">
              {project.testimonial.author[0]}
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {project.testimonial.author}
              </div>
              <div className="text-xs font-mono text-[#A4A2B2]">
                {project.testimonial.role}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Next Project Recommendation */}
      <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <span className="text-[10px] font-mono uppercase text-[#A4A2B2] block mb-1">
            Next Case Study
          </span>
          <h4 className="text-xl font-bold text-white hover:text-[#18CB96] transition-colors">
            {nextProject.title}
          </h4>
          <span className="text-xs font-mono text-[#18CB96]">
            {nextProject.client} &bull; {nextProject.category}
          </span>
        </div>

        <Link
          href={`/work/${nextProject.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-[#18CB96] hover:text-[#0B0B10] text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] w-fit"
        >
          <span>View Next Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
