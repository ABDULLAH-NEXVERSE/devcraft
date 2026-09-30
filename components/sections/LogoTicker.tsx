"use client";

import React from "react";

const partners = [
  { name: "Kamraj Enterprises", logo: "/assets/clients/kamraj.svg" },
  { name: "Prime Commodities", logo: "/assets/clients/primecommodities.svg" },
  { name: "Duralean UK", logo: "/assets/clients/duralean.svg" },
  { name: "ProRota", logo: "/assets/clients/prorota.svg" },
  { name: "NexEats", logo: "/assets/clients/nexeats.svg" },
  { name: "Odlings MCR", logo: "/assets/clients/odlings.svg" },
  { name: "Westwood", logo: "/assets/clients/westwood.svg" },
  { name: "Unify Pro", logo: "/assets/clients/unify-pro.svg" },
  { name: "Limitless", logo: "/assets/clients/limitless.svg" },
  { name: "Ahlmark Lines", logo: "/assets/clients/ahlmark.svg" },
  { name: "Airco", logo: "/assets/clients/airco.svg" },
  { name: "AB3 Medical", logo: "/assets/clients/ab3-medical.svg" },
  { name: "Sirius Security", logo: "/assets/clients/sirius-security.svg" },
  { name: "Virtually Golf", logo: "/assets/clients/virtually-golf.svg" },
  { name: "Lambson", logo: "/assets/clients/lambson.svg" },
  { name: "YMCA", logo: "/assets/clients/ymca.svg" },
];

export const LogoTicker: React.FC = () => {
  // Double the list so the seamless loop works
  const displayPartners = [...partners, ...partners];

  return (
    <section className="mt-20 py-8 md:mt-28 overflow-hidden">
      <p className="mx-auto mb-5 max-w-7xl px-6 text-xs font-mono uppercase tracking-wider text-[var(--ink-soft)]">
        Organisations we&apos;ve worked with
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap">
          {displayPartners.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center opacity-50 transition-opacity duration-300 hover:opacity-90"
            >
              <img
                src={p.logo}
                alt={p.name}
                title={p.name}
                className="h-7 w-auto max-w-[120px] object-contain brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
