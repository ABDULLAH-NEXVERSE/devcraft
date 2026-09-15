"use client";

import React from "react";
import Image from "next/image";
import { homeData } from "@/data/homeData";

export const LogoTicker: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#0B0B10]/85 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-[#A4A2B2]">
          Organisations &amp; Platforms We Have Built For
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#0B0B10] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#0B0B10] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-14 whitespace-nowrap">
          {homeData.marqueeClients.concat(homeData.marqueeClients).map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center justify-center py-2 px-4 cursor-default group"
            >
              <div className="w-20 h-16 sm:w-24 sm:h-18 relative flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={90}
                  height={50}
                  className="object-contain filter grayscale brightness-0 invert opacity-65 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
