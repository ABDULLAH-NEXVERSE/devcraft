"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote } from "lucide-react";
import { homeData } from "@/data/homeData";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export const TestimonialsSection: React.FC = () => {
  const testimonials = homeData.testimonials;
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to create seamless infinite loop
  const marqueeList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-28 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#18CB96]/8 blur-[160px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18CB96]/10 border border-[#18CB96]/25 text-[#18CB96] text-xs font-mono uppercase tracking-wider mb-4">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Operator Endorsements</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
          Trusted by <span className="text-gradient-emerald">Industry Leaders.</span>
        </h2>
        <p className="text-[#A4A2B2] text-sm sm:text-base leading-relaxed">
          Hear from the operators and executives who rely on DevCraft to engineer and maintain their mission-critical software platforms.
        </p>
      </div>

      {/* Infinite Seamless Physics Marquee Container */}
      <div
        className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={isPaused ? {} : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
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
              <SpotlightCard
                enableTilt={true}
                chamfer={true}
                className="p-7 sm:p-8 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-[#18CB96] fill-[#18CB96]"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#80E2C5] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      Verified Client
                    </span>
                  </div>

                  {/* Clean 3-Line Clamped Quote */}
                  <p className="text-white text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#131219] shrink-0 border border-white/10">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-white truncate">
                      {t.author}
                    </div>
                    <div className="text-[11px] text-[#A4A2B2] truncate">
                      {t.role} {t.company ? `· ${t.company}` : ""}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 text-center">
        <span className="text-xs font-mono text-[#A4A2B2]">
          Hover to pause · Drag to explore
        </span>
      </div>
    </section>
  );
};
