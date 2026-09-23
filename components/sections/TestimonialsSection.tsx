"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import { homeData } from "@/data/homeData";

export const TestimonialsSection: React.FC = () => {
  const testimonials = homeData.testimonials;
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to create seamless infinite loop
  const marqueeList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="w-full bg-[#e4f9f3] text-[#0B091D] py-24 sm:py-32 overflow-hidden relative border-y border-[#14af81]/20">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#14af81]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14af81]/15 border border-[#14af81]/30 text-[#14af81] text-xs font-mono uppercase tracking-wider mb-4 font-bold shadow-sm">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Operator Endorsements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B091D] mb-4 font-display">
          Trusted by <span className="text-[#14af81]">Industry Leaders.</span>
        </h2>
        <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-medium">
          Hear from the operators and executives who rely on DevCraft to engineer and maintain their mission-critical software platforms.
        </p>
      </div>

      {/* Infinite Seamless Physics Marquee Container */}
      <div
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            },
          }}
          drag="x"
          dragConstraints={{ left: -1200, right: 0 }}
          dragElastic={0.08}
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing select-none py-4"
        >
          {marqueeList.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[340px] sm:w-[420px] shrink-0 group"
            >
              <div className="p-7 sm:p-8 h-full flex flex-col justify-between rounded-3xl bg-white/95 border border-[#14af81]/25 shadow-[0_6px_20px_rgba(0,0,0,0.05)] group-hover:border-[#14af81] group-hover:shadow-[0_16px_36px_rgba(20,175,129,0.16)] transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-[#14af81] fill-[#14af81]"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#14af81] bg-[#e4f9f3] px-2.5 py-0.5 rounded-full border border-[#14af81]/30">
                      Verified Client
                    </span>
                  </div>

                  {/* Clean 3-Line Clamped Quote */}
                  <p className="text-[#1F2937] text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#14af81]/15">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#e4f9f3] shrink-0 border border-[#14af81]/25">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-[#0B091D] truncate">
                      {t.author}
                    </div>
                    <div className="text-[11px] text-[#6B7280] truncate font-medium">
                      {t.role} {t.company ? `· ${t.company}` : ""}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 text-center relative z-10">
        <span className="text-xs font-mono text-[#6B7280] font-medium">
          Hover to pause · Drag to explore
        </span>
      </div>
    </section>
  );
};
