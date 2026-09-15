import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "@/data/blogData";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((p) => ({
    slug: p.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A4A2B2] hover:text-[#18CB96] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono uppercase text-[#18CB96] px-3 py-1 rounded-full bg-[#18CB96]/15 border border-[#18CB96]/30">
            {post.category}
          </span>
          <span className="text-xs font-mono text-[#A4A2B2] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-[#4ED7AE] font-mono leading-relaxed mb-8">
          {post.subtitle}
        </p>

        {/* Author box */}
        <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-white/10">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#131219]">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">{post.author.name}</div>
            <div className="text-xs text-[#A4A2B2] font-mono">{post.author.role}</div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="space-y-6 text-sm sm:text-base text-[#D6D5E0] leading-relaxed mb-16 p-8 sm:p-10 rounded-3xl glass-panel border border-white/10">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-16">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-3 py-1 rounded-xl bg-[#0B0B10] text-[#18CB96] border border-white/10"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center p-10 rounded-3xl glass-panel border border-white/10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Discuss This Architecture With Our Team
        </h3>
        <p className="text-xs sm:text-sm text-[#A4A2B2] mb-6">
          Schedule a direct technical session to explore how these principles apply to your systems.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#18CB96] text-[#0B0B10] hover:bg-[#14AF81] transition-all"
        >
          <span>Connect with Principal Architect</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
