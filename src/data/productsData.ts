export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  badge?: string;
  status: "Live & Operating" | "Production" | "Public App";
  description: string;
  longDescription: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  ctaText: string;
  tags: string[];
  mockupImage: string;
  dashboardImage?: string;
  features: ProductFeature[];
  metrics: {
    value: string;
    label: string;
  }[];
}

export const productsData: ProductDetail[] = [
  {
    id: "prorota",
    slug: "prorota",
    name: "ProRota",
    tagline: "Workforce Management, HR Vetting & CRM",
    category: "Workforce & Compliance Platform",
    badge: "Flagship Enterprise Product",
    status: "Live & Operating",
    description:
      "An all-in-one platform suite for service businesses: intelligent staff scheduling, GPS attendance, SIA/BS7858 compliance and vetting tracking, payroll integration, and an AI workforce assistant, plus native mobile apps for employees and managers.",
    longDescription:
      "ProRota is DevCraft's flagship workforce management platform built from the ground up to solve complex staffing, compliance, and scheduling bottlenecks in security, facilities, healthcare, and field service companies. Featuring automated shift allocation, BS7858 and SIA security vetting workflows, biometric clock-in, and automated timesheet reconciliation, ProRota proves DevCraft builds mission-critical production software.",
    liveUrl: "https://prorota.app",
    ctaText: "Explore ProRota",
    tags: [
      "Workforce Scheduling",
      "Compliance & Vetting",
      "AI Assistant",
      "Mobile Apps",
      "CRM",
      "GPS Time & Attendance",
    ],
    mockupImage: "/assets/Prorota.png",
    dashboardImage: "/assets/Prorota.png",
    features: [
      {
        title: "Intelligent Shift Scheduling",
        description:
          "Automated shift allocation algorithms matching staff skills, availability, and overtime rules to eliminate scheduling friction.",
      },
      {
        title: "SIA & BS7858 Compliance Vetting",
        description:
          "Full 5-year employment vetting and criminal record check tracking with automated document verification workflows.",
      },
      {
        title: "AI Workforce Assistant",
        description:
          "Embedded conversational AI for managers to query rota coverage, absenteeism, and contractor costs in real time.",
      },
      {
        title: "Native iOS & Android Apps",
        description:
          "Mobile check-in, geofenced GPS attendance verification, and instant shift pickup for field employees.",
      },
    ],
    metrics: [
      { value: "99.4%", label: "Automated Shift Match" },
      { value: "Zero", label: "Compliance Breaches" },
      { value: "£850K+", label: "Admin Hours Saved" },
    ],
  },
  {
    id: "nexeats",
    slug: "nexeats",
    name: "NexEats",
    tagline: "Multi-Vendor Food Delivery Marketplace",
    category: "Consumer Food Delivery Marketplace",
    badge: "Consumer Marketplace",
    status: "Live & Operating",
    description:
      "A consumer food-delivery app connecting diners with local restaurants: browsing by cuisine, live order tracking, restaurant partner onboarding, and a rider network — built for the Algerian market with a bilingual (French/Arabic) experience.",
    longDescription:
      "NexEats is a complete multi-vendor consumer food delivery ecosystem designed, engineered, and maintained by DevCraft. It includes a high-traffic consumer mobile application, real-time kitchen tablet portal, automated rider dispatch system, and administrative analytics console, supporting multi-currency and multi-language operations.",
    liveUrl: "https://nexeats.app",
    ctaText: "Explore NexEats",
    tags: [
      "Marketplace",
      "Live Order Tracking",
      "Restaurant Dashboard",
      "iOS & Android",
      "Bilingual (FR/AR)",
      "Instant Dispatch",
    ],
    mockupImage: "/assets/nexeat.png",
    dashboardImage: "/assets/nexeat.png",
    features: [
      {
        title: "Bilingual Mobile Ordering",
        description:
          "Tailored native consumer app supporting fluid Right-to-Left (RTL) Arabic and French UI, instant basket updates, and checkout.",
      },
      {
        title: "Live GPS Order Tracking",
        description:
          "Sub-second WebSockets order status telemetry from kitchen prep to customer doorstep.",
      },
      {
        title: "Restaurant Partner Portal",
        description:
          "Real-time kitchen display terminal, menu catalog management, and automated sales payout reconciliation.",
      },
      {
        title: "Automated Dispatch Routing",
        description:
          "Smart geolocation clustering assigning active delivery orders to the closest available riders.",
      },
    ],
    metrics: [
      { value: "<18min", label: "Average Dispatch Latency" },
      { value: "99.95%", label: "Checkout Success Rate" },
      { value: "100%", label: "Live Telemetry Visibility" },
    ],
  },
  {
    id: "nexrider",
    slug: "nexrider",
    name: "NexRider",
    tagline: "Companion Delivery Rider App",
    category: "Logistics & Fleet App",
    badge: "Logistics App",
    status: "Public App",
    description:
      "The companion rider app for NexEats: active delivery management, real-time earnings tracking, and rider profile/vehicle details, built for on-the-go use by delivery riders.",
    longDescription:
      "NexRider powers the logistics backbone of the NexEats platform. Engineered for low battery consumption and high GPS accuracy, riders accept dispatch requests, navigate turn-by-turn routes, verify delivery proofs, and track daily payouts instantly.",
    liveUrl: "https://nexeats.app",
    appStoreUrl: "https://apps.apple.com",
    ctaText: "See in Action",
    tags: [
      "Rider Ops",
      "Earnings Tracking",
      "iOS & Android",
      "Turn-by-Turn GPS",
      "Offline Sync",
    ],
    mockupImage: "/assets/nexrider.jpg",
    dashboardImage: "/assets/nexrider.jpg",
    features: [
      {
        title: "Active Delivery Telemetry",
        description:
          "One-tap pickup and drop-off confirmation with in-app customer calling and routing.",
      },
      {
        title: "Real-Time Earnings Dashboard",
        description:
          "Instant breakdown of completed trips, delivery tips, daily earnings, and automated weekly deposits.",
      },
      {
        title: "Vehicle & Profile Verification",
        description:
          "Document upload, driving license vetting, and vehicle status management.",
      },
      {
        title: "Resilient Offline Sync",
        description:
          "Queue delivery actions seamlessly even in weak cellular connectivity areas.",
      },
    ],
    metrics: [
      { value: "<15ms", label: "GPS Telemetry Ping" },
      { value: "99.8%", label: "Delivery Accuracy" },
      { value: "24/7", label: "Rider Ops Support" },
    ],
  },
];
