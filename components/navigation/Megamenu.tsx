"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  Layout,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Layers,
  Truck,
  CreditCard,
  Activity,
  Code2,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { industriesData } from "@/data/industriesData";

interface ServiceMenuItem {
  slug: string;
  title: string;
  shortDesc: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  heroImage: string;
  metric: string;
}

const serviceIcons: Record<string, React.ReactNode> = {
  "web-development": <Globe className="w-5 h-5 text-[#18CB96]" />,
  "mobile-app-development": <Smartphone className="w-5 h-5 text-[#4ED7AE]" />,
  "custom-software-development": <Cpu className="w-5 h-5 text-[#18CB96]" />,
  "ecommerce-development": <ShoppingBag className="w-5 h-5 text-[#80E2C5]" />,
  "ui-ux-design": <Layout className="w-5 h-5 text-[#18CB96]" />,
  "ai-ml-solutions": <Sparkles className="w-5 h-5 text-[#4ED7AE]" />,
  "maintenance-support": <ShieldCheck className="w-5 h-5 text-[#18CB96]" />,
};

const industryIcons: Record<string, React.ReactNode> = {
  "logistics-delivery": <Truck className="w-4 h-4 text-[#18CB96]" />,
  "procurement-compliance": <ShieldCheck className="w-4 h-4 text-[#4ED7AE]" />,
  "ecommerce-retail": <ShoppingBag className="w-4 h-4 text-[#80E2C5]" />,
  "fintech": <CreditCard className="w-4 h-4 text-[#18CB96]" />,
  "healthcare": <Activity className="w-4 h-4 text-[#4ED7AE]" />,
};

export const Megamenu: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  // Derive dynamic services list from data
  const servicesList: ServiceMenuItem[] = servicesData.map((s) => ({
    slug: s.slug,
    title: s.title,
    shortDesc: s.shortDesc,
    href: `/services/${s.slug}`,
    icon: serviceIcons[s.slug] || <Code2 className="w-5 h-5 text-[#18CB96]" />,
    badge: s.badge,
    heroImage: s.heroImage,
    metric: s.metrics[0] ? `${s.metrics[0].value} ${s.metrics[0].label}` : "Production Ready",
  }));

  const [hoveredService, setHoveredService] = useState<ServiceMenuItem>(servicesList[0]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav className="glass-panel w-full max-w-7xl rounded-full px-5 sm:px-6 py-2.5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/[0.09] bg-[#07070A]/85 backdrop-blur-2xl pointer-events-auto">
        {/* Brand Logo with subtle hover halo */}
        <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative w-28 h-9 sm:w-32 sm:h-11 flex items-center justify-center">
            <Image
              src="/newlogo.png"
              alt="DevCraft"
              width={124}
              height={44}
              className="object-contain drop-shadow-[0_0_12px_rgba(24,203,150,0.35)]"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A4A2B2]">
          {/* Services Megamenu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1.5 hover:text-white transition-all py-2 rounded-full group"
            >
              <span className="group-hover:text-white transition-colors">Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  activeDropdown === "services" ? "rotate-180 text-[#18CB96]" : "text-[#6B697D] group-hover:text-white"
                }`}
              />
            </Link>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[760px] max-w-[95vw] p-5 rounded-3xl glass-panel-elevated shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/[0.1] bg-[#0A0910]/98"
                >
                  <div className="grid grid-cols-12 gap-5 items-stretch">
                    {/* Left Column: Services list — clean single column */}
                    <div className="col-span-7 flex flex-col">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#18CB96] font-bold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#18CB96] animate-pulse" />
                          <span>Engineering Capabilities</span>
                        </span>
                        <Link
                          href="/services"
                          className="text-[10px] font-mono text-[#A4A2B2] hover:text-[#18CB96] transition-colors"
                        >
                          All 7 services &rarr;
                        </Link>
                      </div>

                      {/* Single-column clean list */}
                      <div className="flex flex-col gap-1">
                        {servicesList.map((item) => (
                          <Link
                            key={item.slug}
                            href={item.href}
                            onMouseEnter={() => setHoveredService(item)}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                              hoveredService.slug === item.slug
                                ? "bg-white/[0.07] text-white"
                                : "text-[#A4A2B2] hover:bg-white/[0.04] hover:text-white"
                            }`}
                          >
                            <div
                              className={`p-2 rounded-lg transition-colors shrink-0 ${
                                hoveredService.slug === item.slug
                                  ? "bg-[#18CB96]/20 text-[#18CB96]"
                                  : "bg-white/5 text-[#6B697D]"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-semibold block leading-tight">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-mono text-[#18CB96] mt-0.5 block">{item.badge}</span>
                              )}
                            </div>
                            {hoveredService.slug === item.slug && (
                              <ArrowRight className="w-3 h-3 text-[#18CB96] shrink-0" />
                            )}
                          </Link>
                        ))}
                      </div>

                      <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-[#6B697D] font-mono">
                        <span>Sheffield &bull; Lahore (24/7)</span>
                        <Link href="/contact?type=quote" className="text-[#18CB96] hover:text-[#4ED7AE] transition-colors font-semibold">
                          Get a Quote &rarr;
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Dynamic Preview */}
                    <div className="col-span-5 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#131219] p-4 flex flex-col gap-4">
                      <div className="relative w-full h-36 rounded-xl overflow-hidden bg-[#0B0B10]">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={hoveredService.slug}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={hoveredService.heroImage}
                              alt={hoveredService.title}
                              fill
                              sizes="300px"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#131219] via-[#131219]/20 to-transparent" />
                          </motion.div>
                        </AnimatePresence>
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#0B0B10]/80 backdrop-blur-md border border-white/10 text-[8px] font-mono text-[#18CB96] font-semibold flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-[#18CB96] animate-pulse" />
                          <span>Live</span>
                        </div>
                      </div>

                      <div className="flex-1 space-y-2">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={hoveredService.slug + "-text"}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                          >
                            <div className="text-xs font-bold text-white mb-1">{hoveredService.title}</div>
                            <div className="text-[10px] font-mono text-[#18CB96] mb-2">{hoveredService.metric}</div>
                            <p className="text-[11px] text-[#A4A2B2] leading-relaxed line-clamp-2">
                              {hoveredService.shortDesc}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <Link
                        href={hoveredService.href}
                        className="btn-primary-halo w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Explore Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/industries"
              className="flex items-center gap-1.5 hover:text-white transition-colors py-2 focus-ring-emerald rounded-full"
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "industries" ? "rotate-180 text-[#18CB96]" : ""
                }`}
              />
            </Link>

            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[420px] p-4 rounded-3xl glass-panel shadow-2xl border border-white/15 overflow-hidden bg-[#0B0B10]/95"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-white/5 px-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#18CB96] font-semibold">
                      Industries We Serve
                    </span>
                    <Link
                      href="/industries"
                      className="text-[10px] font-mono text-[#A4A2B2] hover:text-[#18CB96]"
                    >
                      View All &rarr;
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {industriesData.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        className="p-2.5 rounded-2xl flex items-center gap-3 hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#18CB96]/20 transition-colors">
                          {industryIcons[ind.slug] || <Layers className="w-4 h-4 text-[#18CB96]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#18CB96] transition-colors">
                            {ind.title}
                          </div>
                          <p className="text-[10px] text-[#A4A2B2] line-clamp-1">
                            {ind.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products link */}
          <Link
            href="/products"
            className="hover:text-white transition-colors flex items-center gap-1.5 focus-ring-emerald rounded-full"
          >
            <span>Products</span>
            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#18CB96]/15 text-[#18CB96] border border-[#18CB96]/20">
              Live
            </span>
          </Link>

          {/* Work / Portfolio */}
          <Link href="/work" className="hover:text-white transition-colors focus-ring-emerald rounded-full">
            Work
          </Link>

          {/* Technologies */}
          <Link href="/technologies" className="hover:text-white transition-colors focus-ring-emerald rounded-full">
            Technologies
          </Link>

          {/* About Us */}
          <Link href="/about" className="hover:text-white transition-colors focus-ring-emerald rounded-full">
            About Us
          </Link>

          {/* Contact */}
          <Link href="/contact" className="hover:text-white transition-colors focus-ring-emerald rounded-full">
            Contact
          </Link>
        </div>

        {/* Persistent "Get a Quote" CTA Button in Accent Emerald */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact?type=quote"
            className="btn-primary-halo px-5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 cursor-pointer group"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden absolute top-20 left-4 right-4 glass-panel rounded-3xl p-6 shadow-2xl border border-white/15 bg-[#0B0B10]/95 max-h-[80vh] overflow-y-auto no-scrollbar"
          >
            <div className="flex flex-col gap-4">
              <div className="text-[11px] font-mono uppercase text-[#18CB96] tracking-wider">
                Services
              </div>
              <div className="grid grid-cols-1 gap-2">
                {servicesList.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 text-xs font-medium text-white hover:text-[#18CB96] p-1.5 rounded-xl hover:bg-white/5"
                  >
                    <div className="p-1 rounded-md bg-white/5">{item.icon}</div>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/10 my-1" />

              <div className="text-[11px] font-mono uppercase text-[#18CB96] tracking-wider">
                Industries
              </div>
              <div className="grid grid-cols-1 gap-2">
                {industriesData.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 text-xs font-medium text-white hover:text-[#18CB96] p-1.5 rounded-xl hover:bg-white/5"
                  >
                    <div className="p-1 rounded-md bg-white/5">{industryIcons[ind.slug]}</div>
                    <span>{ind.title}</span>
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/10 my-1" />

              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between text-sm font-medium text-white hover:text-[#18CB96]"
              >
                <span>Our Products (ProRota, NexEats, NexRider)</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#18CB96]/15 text-[#18CB96]">
                  Live
                </span>
              </Link>

              <Link
                href="/work"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white hover:text-[#18CB96]"
              >
                Work &amp; Case Studies
              </Link>

              <Link
                href="/technologies"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white hover:text-[#18CB96]"
              >
                Technologies Stack
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white hover:text-[#18CB96]"
              >
                About Us (UK + Pakistan Teams)
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white hover:text-[#18CB96]"
              >
                Contact Us
              </Link>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/contact?type=quote"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-3 rounded-full text-xs font-bold bg-[#18CB96] text-[#0B0B10] shadow-[0_0_15px_rgba(24,203,150,0.3)]"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/contact?type=consultation"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-3 rounded-full text-xs font-semibold glass-panel text-white hover:bg-white/10 border border-white/10"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
