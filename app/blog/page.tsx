import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blogData";
import { BookOpen, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Engineering Blog & Insights | DevCraft Systems",
  description:
    "Technical articles, deep dives, and architectural guides on Agentic AI, Next.js 15, embedded agency delivery, and web performance optimization.",
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#18CB96]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Insights &amp; Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
          The DevCraft <span className="text-gradient-emerald">Engineering Journal.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#A4A2B2] leading-relaxed">
          Deep architectural breakdowns, lessons from production agentic AI rollouts, and strategies for modern high-performance web engineering.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {blogData.map((post) => (
          <article
            key={post.slug}
            className="p-8 rounded-3xl glass-panel brand-card-border transition-all flex flex-col justify-between group bg-[#0B0B10]/90"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#18CB96]/15 text-[#18CB96] font-semibold">
                  {post.category}
                </span>
                <span className="text-[10px] font-mono text-[#6B697D]">
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#18CB96] transition-colors leading-snug font-display">
                {post.title}
              </h2>

              {/* Strict 2-Line Truncation */}
              <p className="text-xs sm:text-sm text-[#A4A2B2] leading-relaxed mb-6 line-clamp-2 min-h-[2.5rem]" title={post.excerpt}>
                {post.excerpt}
              </p>
            </div>

            <div>
              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5 mb-6">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#131219]">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">{post.author.name}</div>
                  <div className="text-[10px] text-[#6B697D] font-mono">{post.author.role}</div>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="w-full py-2.5 rounded-full text-xs font-semibold glass-panel hover:bg-white/10 text-white flex items-center justify-center gap-1.5 transition-all group-hover:border-[#18CB96]/40"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#18CB96]" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
