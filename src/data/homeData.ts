import { yearsInOperation } from "./companyData";

export interface HeroSection {
  badge: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  highlightMetrics: Array<{
    value: string;
    label: string;
    description: string;
  }>;
}

export interface MarqueeClient {
  name: string;
  logo: string;
  industry: string;
  featuredProject?: string;
}

export interface HomeProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyDevCraftPoint {
  title: string;
  badge: string;
  description: string;
  icon: string;
}

export interface CorePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface HomeTestimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface BentoFeature {
  id: string;
  category: string;
  title: string;
  description: string;
  metric?: string;
  image?: string;
  href: string;
  colSpan?: number;
}

export const homeData = {
  hero: {
    badge: "Two Teams · UK & Pakistan · 24/7 Delivery",
    headline: "Web, Mobile & AI Software — Crafted by Two Teams, Delivered Around the Clock",
    subheadline:
      "DevCraft designs, builds and maintains web platforms, mobile apps, custom software and AI-powered products for logistics, procurement, compliance, e-commerce, fintech and healthcare businesses. From first sketch to live support, one team sees it through.",
    primaryCta: {
      label: "Get a Free Quote",
      href: "/contact?type=quote",
    },
    secondaryCta: {
      label: "Book a Free Consultation",
      href: "/contact?type=consultation",
    },
    highlightMetrics: [
      {
        value: "2 Teams",
        label: "UK & Pakistan",
        description: "Sheffield and Lahore hubs delivering follow-the-sun progress",
      },
      {
        value: "3 Live Products",
        label: "ProRota, NexEats, NexRider",
        description: "Operating platforms proving real production capability",
      },
      {
        value: `${yearsInOperation}+ Years`,
        label: "Proven Engineering",
        description: "Full-stack software builds with zero compromise on quality",
      },
      {
        value: "24/7",
        label: "Round-the-Clock",
        description: "Continuous development & emergency incident support",
      },
    ],
  } as HeroSection,

  whatWeDo: {
    title: "What We Do",
    subtitle: "End-to-End Software Craftsmanship",
    description:
      "We design, build and support software end to end — websites and web apps, native and cross-platform mobile apps, custom backend systems, e-commerce platforms, and AI/ML features that make products smarter. Every engagement includes ongoing maintenance, not just a handover.",
  },

  howWeWork: {
    title: "How We Work",
    subtitle: "A Predictable, Transparent Delivery Engine",
    description:
      "We understand the problem, design the experience, build and test the product, launch it, and stay on to support it. Two coordinated teams mean design, development and support run without the usual overnight gap.",
    steps: [
      {
        step: "01",
        title: "Discover",
        description: "Deep dive into your business model, operational bottlenecks, compliance requirements, and technical scope.",
        icon: "Compass",
      },
      {
        step: "02",
        title: "Design",
        description: "Interactive Figma wireframes, component design systems, and responsive user journey architecture.",
        icon: "Layout",
      },
      {
        step: "03",
        title: "Build",
        description: "Clean, typed, high-performance engineering across web, mobile, and backend microservices.",
        icon: "Code2",
      },
      {
        step: "04",
        title: "Test",
        description: "Rigorous automated testing, security compliance checks, cross-browser validation, and load profiling.",
        icon: "CheckCircle2",
      },
      {
        step: "05",
        title: "Launch",
        description: "Zero-downtime deployment, DNS cutover, database migration, and smooth production onboarding.",
        icon: "Rocket",
      },
      {
        step: "06",
        title: "Support",
        description: "Continuous 24/7 monitoring, security patching, hosting management, and ongoing feature sprints.",
        icon: "ShieldCheck",
      },
    ] as HomeProcessStep[],
  },

  whyDevCraft: {
    title: "Why DevCraft",
    subtitle: "Built by Two Teams, Delivered Around the Clock",
    points: [
      {
        title: "Two-Team 24/7 Delivery",
        badge: "Follow-The-Sun",
        description: "With teams in Sheffield, UK and Lahore, Pakistan, work progresses seamlessly without the typical overnight freeze. Design in the UK transitions directly into development in Pakistan.",
        icon: "Clock",
      },
      {
        title: "Proven Production Track Record",
        badge: "Own Shipped Platforms",
        description: "We don't ask for trust on faith. We have designed, launched, and actively maintain our own live products — ProRota, NexEats, and NexRider — serving thousands of daily operations.",
        icon: "Layers",
      },
      {
        title: "Broad & Modern Tech Stack",
        badge: "Full-Stack Capabilities",
        description: "Expertise spanning Next.js, React, Flutter, Kotlin, Laravel, Node.js, Python, and WordPress. We pick the architecture that solves your specific problem best.",
        icon: "Cpu",
      },
      {
        title: "Transparent, Honest Pricing",
        badge: "No Surprises",
        description: "Clear, project-appropriate scoping with transparent milestones. No inflated hours, hidden licensing fees, or unverified claims.",
        icon: "Shield",
      },
    ] as WhyDevCraftPoint[],
  },

  pillars: [
    {
      id: "two-team-delivery",
      title: "Two-Team 24/7 Delivery",
      tagline: "UK & Pakistan Coordinated",
      description: "Coordinated sprints across UK and Pakistan time zones eliminate project stalls and provide around-the-clock incident response.",
      icon: "Sparkles",
    },
    {
      id: "real-shipped-products",
      title: "Real Shipped Products",
      tagline: "ProRota, NexEats & NexRider",
      description: "We build and operate our own software products, giving clients battle-tested architectural foundations and zero delivery risk.",
      icon: "ShieldCheck",
    },
    {
      id: "full-stack-specialists",
      title: "Full-Stack Specialists",
      tagline: "Web, Mobile, Cloud & AI",
      description: "End-to-end expertise spanning Next.js, React, Flutter, Kotlin, Laravel, Node.js, and Python machine learning models.",
      icon: "Users",
    },
    {
      id: "end-to-end-support",
      title: "Long-Term Maintenance",
      tagline: "Ongoing Partnership",
      description: "We don't hand over code and leave. We maintain, patch, monitor, and scale software platforms as an enduring technical partner.",
      icon: "Target",
    },
  ] as CorePillar[],

  testimonials: [
    {
      id: "testimonial-1",
      author: "David Hemmings",
      role: "Managing Director",
      company: "Ahlmark Shipping Logistics",
      avatar: "/assets/testimonials/testimonial-avatar-4.webp",
      quote: "DevCraft turned a massive maritime operations challenge into the fastest software launch in our company's history. Cargo throughput jumped by 400%.",
      rating: 5,
    },
    {
      id: "testimonial-2",
      author: "Sophie Campbell",
      role: "E-Commerce Director",
      company: "Coconut Cosmetics UK",
      avatar: "/assets/testimonials/testimonial-avatar-6.webp",
      quote: "Our Chain storefront conversion jumped 42% after launch. The headless architecture is blisteringly fast on mobile.",
      rating: 5,
    },
    {
      id: "testimonial-3",
      author: "Chief Medical Executive",
      role: "Clinical Director",
      company: "Pro-Rota Staffing Network",
      avatar: "/assets/testimonials/testimonial-avatar-5.webp",
      quote: "Pro-Rota went from an administrative nightmare to an automated machine that operates 24/7 with zero compliance breaches.",
      rating: 5,
    },
  ] as HomeTestimonial[],

  bentoFeatures: [
    {
      id: "bento-web-platforms",
      category: "Web Platforms",
      title: "Sub-Second Web Applications",
      description: "Marketing sites, portals, and web platforms built on Next.js, Laravel, and WordPress with built-in CMS control and Core Web Vitals SLA.",
      image: "/assets/webdevelopment.png",
      href: "/services/web-development",
      colSpan: 2,
    },
    {
      id: "bento-mobile-apps",
      category: "Mobile Apps",
      title: "Native & Cross-Platform",
      description: "Flutter, React Native, and Kotlin apps engineered for 60fps performance and real-time GPS telemetry.",
      metric: "iOS & Android",
      image: "/assets/mobiledevelopment.png",
      href: "/services/mobile-app-development",
      colSpan: 1,
    },
    {
      id: "bento-prorota-product",
      category: "Flagship Product",
      title: "ProRota Workforce Management",
      description: "Intelligent staff scheduling, BS 7858 vetting compliance, and AI workforce assistant.",
      image: "/assets/prorota1.png",
      href: "/products#prorota",
      colSpan: 1,
    },
    {
      id: "bento-nexeats-product",
      category: "Flagship Marketplace",
      title: "NexEats Food Delivery",
      description: "Multi-vendor food delivery marketplace and companion NexRider app with live order tracking.",
      image: "/assets/nexeat.png",
      href: "/products#nexeats",
      colSpan: 1,
    },
    {
      id: "bento-support-coverage",
      category: "24/7 Operations",
      title: "Follow-The-Sun Maintenance",
      description: "Continuous uptime monitoring, security patching, and hosting management across UK and Pakistan teams.",
      metric: "99.99% Uptime SLA",
      image: "/assets/maintenanceAndSupport.png",
      href: "/services/maintenance-support",
      colSpan: 1,
    },
  ] as BentoFeature[],

  finalCta: {
    headline: "Tell Us What You're Building",
    subheadline:
      "Get a free, no-obligation quote from our team, or book a free consultation to talk through your architecture and timeline first.",
    primaryCta: {
      label: "Request a Free Quote",
      href: "/contact?type=quote",
    },
    secondaryCta: {
      label: "Book a Free Consultation",
      href: "/contact?type=consultation",
    },
  },

  marqueeClients: [
    {
      name: "Odlings MCR",
      logo: "/assets/odlinglogo.png",
      industry: "Memorial Wholesalers",
      featuredProject: "Customer Portal",
    },
    {
      name: "Glasgow Training Academy",
      logo: "/assets/gtaLogo.png",
      industry: "Education & Compliance",
      featuredProject: "Academy CMS Portal",
    },
    {
      name: "Ahlmark Shipping",
      logo: "/assets/clients/ahlmark.svg",
      industry: "Maritime Logistics",
      featuredProject: "Fleet Management Portal",
    },
    {
      name: "Pro-Rota Healthcare",
      logo: "/assets/clients/prorota.svg",
      industry: "Clinical Staffing & Vetting",
      featuredProject: "Automated Shift Scheduling",
    },
    {
      name: "AB3 Medical",
      logo: "/assets/clients/ab3-medical.svg",
      industry: "Sports Biometrics",
      featuredProject: "Athlete Health Passport",
    },
    {
      name: "Airco Commercial",
      logo: "/assets/clients/airco.svg",
      industry: "Industrial Telemetry",
    },
    {
      name: "Lambson Building Products",
      logo: "/assets/clients/lambson.svg",
      industry: "Manufacturing ERP",
    },
    {
      name: "Coconut Cosmetics",
      logo: "/assets/clients/coconut-cosmetics-logo-full.png",
      industry: "E-Commerce",
      featuredProject: "Headless Storefront",
    },
    {
      name: "Limitless",
      logo: "/assets/clients/limitless.svg",
      industry: "Creative SaaS",
      featuredProject: "Subscription Billing Platform",
    },
    {
      name: "Virtually Golf",
      logo: "/assets/clients/virtually-golf.svg",
      industry: "Simulator Telemetry",
    },
    {
      name: "YMCA",
      logo: "/assets/clients/ymca.svg",
      industry: "Community & Non-Profit",
    },
    {
      name: "Unify Pro",
      logo: "/assets/clients/unify-pro.svg",
      industry: "Enterprise SaaS",
    },
    {
      name: "Westwood",
      logo: "/assets/clients/westwood.svg",
      industry: "Private Wealth",
    },
    {
      name: "Sirius Security",
      logo: "/assets/clients/sirius-security.svg",
      industry: "Security & Guarding",
    },
  ] as MarqueeClient[],
};
