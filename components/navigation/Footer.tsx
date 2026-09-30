"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";
import { productsData } from "@/data/productsData";
import { companyData } from "@/data/companyData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B10] pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-10 sm:w-36 sm:h-12 flex items-center justify-center">
                <Image
                  src="/newlogo.png"
                  alt="DevCraft"
                  width={130}
                  height={48}
                  className="object-contain drop-shadow-[0_0_8px_rgba(24,203,150,0.3)]"
                />
              </div>
            </Link>

            <p className="text-xs text-[#A4A2B2] max-w-sm leading-relaxed">
              {companyData.footerStatement}
            </p>

            <div className="space-y-1 text-xs text-[#A4A2B2] pt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#18CB96] animate-pulse" />
                <span className="font-mono text-[#18CB96]">Two Teams · 24/7 Follow-the-Sun Delivery</span>
              </div>
              <p className="text-[11px] text-[#6B697D]">
                United Kingdom &bull; Pakistan
              </p>
              <p className="text-[11px] text-[#A4A2B2]">
                Contact: <a href="mailto:contact@nexverse.co.uk" className="text-[#18CB96] hover:underline">contact@nexverse.co.uk</a>
              </p>
            </div>
          </div>

          {/* Col 2: Services (Dynamic from servicesData) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-[#A4A2B2]">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[#18CB96] transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="text-[#18CB96] font-semibold hover:underline">
                  All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries & Products */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider mb-3">
                Industries
              </h4>
              <ul className="space-y-1.5 text-xs text-[#A4A2B2]">
                {industriesData.map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="hover:text-[#18CB96] transition-colors"
                    >
                      {ind.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider mb-2">
                Our Products
              </h4>
              <ul className="space-y-1.5 text-xs text-[#A4A2B2]">
                {productsData.map((p) => (
                  <li key={p.id}>
                    <Link href={`/products#${p.id}`} className="hover:text-[#18CB96] transition-colors flex items-center gap-1.5">
                      <span>{p.name}</span>
                      <span className="text-[9px] font-mono text-[#18CB96]">({p.tagline.split(",")[0]})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 4: Company & Next Steps */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono uppercase text-white font-semibold tracking-wider mb-4">
              DevCraft
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A4A2B2]">
              <li>
                <Link href="/about" className="hover:text-[#18CB96] transition-colors">
                  About Us &amp; Teams
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[#18CB96] transition-colors">
                  Work &amp; Portfolio
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-[#18CB96] transition-colors">
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/contact?type=quote" className="hover:text-[#18CB96] transition-colors">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link href="/contact?type=consultation" className="hover:text-[#18CB96] transition-colors">
                  Book Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B697D]">
          <div>
            &copy; {new Date().getFullYear()} DevCraft (part of Nexverse). All rights reserved. Software, Crafted With Intent.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#18CB96]">Status: 24/7 ACTIVE</span>
            {/* <span>Sheffield &bull; Lahore</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
