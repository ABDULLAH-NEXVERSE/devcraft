export interface CaseStudyDetail {
  slug: string;
  client: string;
  clientLogo: string;
  title: string;
  liveUrl?: string;
  serviceSlug?:
    | "web-development"
    | "mobile-app-development"
    | "custom-software-development"
    | "ecommerce-development"
    | "ui-ux-design"
    | "ai-ml-solutions"
    | "maintenance-support";
  industrySlug?:
    | "logistics-delivery"
    | "procurement-compliance"
    | "ecommerce-retail"
    | "fintech"
    | "healthcare";
  nexverseCode?: "Cloud" | "Chain" | "Flash";
  category:
    | "Creative Studio & Publishing"
    | "Enterprise Platform"
    | "Workflow Automation"
    | "Healthcare Tech"
    | "FinTech & SaaS"
    | "Agentic AI & Media"
    | "Industrial & Supply Chain"
    | "E-Commerce & Retail"
    | "Brand Identity & Product Design"
    | "Logistics & Trade";
  heroImage: string;
  mockupImage: string;
  winBanner?: string;
  caseFeatureImage?: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  deliverables: string[];
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const portfolioData: CaseStudyDetail[] = [
  {
    slug: "prorota",
    client: "ProRota",
    clientLogo: "/assets/clients/prorota.svg",
    title: "AI-Powered Workforce Management, BS 7858 Vetting & CRM Platform Suite",
    liveUrl: "https://www.prorota.app/",
    serviceSlug: "custom-software-development",
    industrySlug: "procurement-compliance",
    category: "Workflow Automation",
    heroImage: "/assets/Prorota.png",
    mockupImage: "/assets/Prorota.png",
    winBanner: "/assets/Prorota.png",
    caseFeatureImage: "/assets/Prorota.png",
    summary:
      "All-in-one platform suite for regulated service businesses: intelligent staff scheduling, biometric GPS attendance, BS 7858 background vetting, SIA licence monitoring, and AI workforce assistant.",
    challenge:
      "Service businesses in security, cleaning, and healthcare suffered from scheduling friction, spreadsheet vetting errors, SIA compliance breaches, and slow 14-day candidate onboarding cycles.",
    solution:
      "DevCraft engineered an end-to-end multi-tenant platform with automated shift constraint solvers, BS 7858 candidate vetting workflows, live GPS clock-ins, native mobile apps, and an embedded conversational AI assistant.",
    results: [
      { metric: "99.4%", label: "Automated Shift Allocation" },
      { metric: "Zero", label: "Compliance Breaches" },
      { metric: "<3 Days", label: "Candidate Onboarding (Down from 14)" },
    ],
    deliverables: [
      "AI Workforce Scheduling & Shift Allocation Engine",
      "ProRota Screening BS 7858 Background Vetting System",
      "ProCRM Service Business Pipeline & Proposal Generator",
      "Native iOS & Android GPS Attendance Apps",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "Python AI", "PostgreSQL", "Redis"],
    testimonial: {
      quote:
        "ProRota completely transformed our operations from manual spreadsheets to an automated system running around the clock.",
      author: "Director of Operations",
      role: "Regulated Field Services Group",
    },
  },
  {
    slug: "nexeats",
    client: "NexEats",
    clientLogo: "/assets/clients/nexeats.svg",
    title: "Multi-Vendor On-Demand Delivery Marketplace & NexRider Fleet Ops",
    liveUrl: "https://www.nexeats.app/",
    serviceSlug: "ecommerce-development",
    industrySlug: "logistics-delivery",
    category: "E-Commerce & Retail",
    heroImage: "/assets/nexeat.png",
    mockupImage: "/assets/nexeat.png",
    winBanner: "/assets/nexeat.png",
    caseFeatureImage: "/assets/nexrider.jpg",
    summary:
      "Consumer food delivery marketplace connecting diners with local restaurants, featuring live GPS driver dispatch, bilingual ordering (French/Arabic), and companion NexRider fleet ops app.",
    challenge:
      "Operating a high-concurrency food delivery platform requires sub-second order dispatching, low-latency live GPS telemetry, dual-language RTL/LTR interface support, and automated partner payouts.",
    solution:
      "DevCraft built the entire ecosystem from scratch: a lightning-fast consumer ordering marketplace, interactive restaurant kitchen portal, automated dispatch algorithm, and dedicated native driver application.",
    results: [
      { metric: "<18min", label: "Average Dispatch Latency" },
      { metric: "99.95%", label: "Checkout Reliability" },
      { metric: "500+", label: "Active Restaurant Partners" },
    ],
    deliverables: [
      "High-Traffic Consumer Web & Mobile Marketplace",
      "Kitchen Display & Menu Catalog Terminal",
      "NexRider GPS Turn-by-Turn Mobile Dispatch App",
      "Bilingual (French/Arabic) Real-Time Ordering",
    ],
    techStack: ["Next.js", "Flutter", "Kotlin", "WebSockets", "Node.js", "PostgreSQL", "Google Maps API"],
    testimonial: {
      quote:
        "DevCraft built a marketplace that rivals global apps in performance, speed, and real-time telemetry.",
      author: "Product Director",
      role: "NexEats Network",
    },
  },
  {
    slug: "kamraj-enterprises",
    client: "Kamraj Enterprises",
    clientLogo: "/assets/clients/kamraj.svg",
    title: "Global Scrap Metal Indenting & International Supply Chain Portal",
    liveUrl: "https://kamrajenterprises.com/",
    serviceSlug: "web-development",
    industrySlug: "logistics-delivery",
    category: "Logistics & Trade",
    heroImage: "/assets/kamrajenterprises.jpg",
    mockupImage: "/assets/kamrajenterprises.jpg",
    winBanner: "/assets/kamrajenterprises.jpg",
    caseFeatureImage: "/assets/kamrajenterprises.jpg",
    summary:
      "Connecting trusted global scrap metal suppliers across North America, Europe, Africa, and South America with premier steel mills and foundries throughout South Asia backed by 40+ years of domain expertise.",
    challenge:
      "Operating an international scrap metal indenting house across five continents required establishing absolute corporate credibility, clear metallurgical grades, and structured inquiry routing for steel mill clients.",
    solution:
      "DevCraft engineered an enterprise-grade international web presence with structured ferrous and non-ferrous material specifications, mill procurement request workflows, and international SEO.",
    results: [
      { metric: "40+ Yrs", label: "Industry Heritage" },
      { metric: "5 Continents", label: "Global Sourcing Network" },
      { metric: "100%", label: "Digital Inquiry Capture" },
    ],
    deliverables: [
      "Enterprise Corporate Web Architecture",
      "Ferrous & Non-Ferrous Grade Directory",
      "International Steel Mill Procurement Channel",
      "Global Trade Search Engine Optimization",
    ],
    techStack: ["WordPress", "Porto Framework", "PHP", "LiteSpeed Cache", "Global Edge CDN"],
    testimonial: {
      quote:
        "The new digital presence positions Kamraj as the international indenting leader we have been for four decades.",
      author: "Managing Director",
      role: "Kamraj Enterprises Pvt. Ltd.",
    },
  },
  {
    slug: "prime-commodities",
    client: "Prime Commodities FZE",
    clientLogo: "/assets/clients/primecommodities.svg",
    title: "International Metal Scrap Trading & Industrial Materials Portal",
    liveUrl: "https://www.primecommoditiesfze.com/",
    serviceSlug: "web-development",
    industrySlug: "logistics-delivery",
    category: "Logistics & Trade",
    heroImage: "/assets/primecommodities.jpg",
    mockupImage: "/assets/primecommodities.jpg",
    winBanner: "/assets/primecommodities.jpg",
    caseFeatureImage: "/assets/primecommodities.jpg",
    summary:
      "UAE-based globally active scrap metal trading company operating from Ajman Free Zone, supplying steel mills, foundries, and industrial consumers across international trade routes.",
    challenge:
      "To keep steel mills and foundries fed with feedstock, Prime Commodities needed a multi-channel portal to acquire scrap metal from global suppliers while showcasing inspection standards and volume capabilities.",
    solution:
      "DevCraft architected an international trading presence highlighting scrap acquisition funnels, physical quality inspection standards, and high-conversion procurement intake forms.",
    results: [
      { metric: "Global", label: "Trading Reach" },
      { metric: "Sub-Second", label: "Mobile Page Speed" },
      { metric: "+35%", label: "Supplier Inbound Flow" },
    ],
    deliverables: [
      "International Commodities Trading Web Portal",
      "Multi-Category Scrap Material Directory",
      "Supplier Sourcing & Buying Intake Engine",
      "International Trade Performance SEO",
    ],
    techStack: ["WordPress", "Elementor", "PHP", "LiteSpeed Cache", "Global Edge CDN"],
    testimonial: {
      quote:
        "Our digital reach expanded significantly across Middle Eastern and international scrap trading markets.",
      author: "Head of Trading",
      role: "Prime Commodities FZE",
    },
  },
  {
    slug: "duralean-uk",
    client: "Duralean UK",
    clientLogo: "/assets/clients/duralean.svg",
    title: "Global Procurement, Technical Sourcing & Industrial Supply Hub",
    liveUrl: "https://duraleanuk.com/",
    serviceSlug: "custom-software-development",
    industrySlug: "procurement-compliance",
    category: "Industrial & Supply Chain",
    heroImage: "/assets/duralean.jpg",
    mockupImage: "/assets/duralean.jpg",
    winBanner: "/assets/duralean.jpg",
    caseFeatureImage: "/assets/duralean.jpg",
    summary:
      "Comprehensive global procurement, technical supply, and professional outsourcing platform for construction, industrial manufacturing, and oil & gas energy sectors across the UK and international markets.",
    challenge:
      "Organizing and presenting over 17 distinct technical industrial categories—ranging from specialized building materials to ATEX explosion-proof systems—in an accessible, client-ready technical repository.",
    solution:
      "DevCraft engineered a structured multi-sector procurement hub with interactive technical specification downloads, categorized sourcing directories, and direct inquiry orchestration.",
    results: [
      { metric: "17+", label: "Product Categories Procured" },
      { metric: "4 Core", label: "Industries Supported" },
      { metric: "Global", label: "Outsourcing Capabilities" },
    ],
    deliverables: [
      "Multi-Sector Industrial Procurement Platform",
      "Specialized Building Materials & ATEX Catalog",
      "Technical Datasheet & Compliance Download Center",
      "Direct Contractor & Supplier Messaging Integrations",
    ],
    techStack: ["WordPress", "Elementor Pro", "PHP", "Responsive Design", "WhatsApp Telemetry"],
    testimonial: {
      quote:
        "DevCraft built a procurement platform that clearly communicates our complex international sourcing capabilities.",
      author: "Commercial Director",
      role: "Duralean UK",
    },
  },
  {
    slug: "taltex-geosynthetics",
    client: "Taltex Geosynthetics",
    clientLogo: "/assets/clients/taltex.svg",
    title: "Multi-Language Civil Infrastructure & Geotextile Manufacturing Portal",
    liveUrl: "https://taltex-website.vercel.app/en",
    serviceSlug: "web-development",
    industrySlug: "procurement-compliance",
    category: "Industrial & Supply Chain",
    heroImage: "/assets/taltex.jpg",
    mockupImage: "/assets/taltex.jpg",
    winBanner: "/assets/taltex.jpg",
    caseFeatureImage: "/assets/taltex.jpg",
    summary:
      "Algerian manufacturer of needle-punched non-woven geotextiles (100 to 1200 g/m²) for roads, civil works, containment, and hydraulic infrastructure, delivered in English, French, and Arabic.",
    challenge:
      "Presenting rigorous technical civil engineering specifications and ISO 9001 compliance standards seamlessly across French, Arabic (RTL), and English engineering audiences.",
    solution:
      "DevCraft engineered a sub-second Next.js multi-language platform with dynamic grammage selectors, interactive civil application matrices, and instantaneous datasheet download workflows.",
    results: [
      { metric: "2,400t", label: "Annual Capacity Profiled" },
      { metric: "3 Languages", label: "English, French & Arabic (RTL)" },
      { metric: "11 Standard", label: "Geotextile Grades Cataloged" },
    ],
    deliverables: [
      "Next.js Trilingual Enterprise Architecture",
      "Fluid Right-to-Left (RTL) Layout Engine",
      "Civil Engineering Application Interactive Matrix",
      "Technical Datasheet & Spec Sheet Distribution Portal",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "i18n Multi-Language", "Vercel Edge"],
    testimonial: {
      quote:
        "The trilingual platform allows our engineers to present technical geotextile specs to international contractors effortlessly.",
      author: "Technical Director",
      role: "Taltex Geosynthetics",
    },
  },
  {
    slug: "corestone-facilities",
    client: "Corestone Facilities Management",
    clientLogo: "/assets/clients/corestone.svg",
    title: "Commercial Estate Operations, 24/7 M&E & Helpdesk Platform",
    liveUrl: "https://corestone-website-blue.vercel.app/",
    serviceSlug: "web-development",
    industrySlug: "procurement-compliance",
    category: "Workflow Automation",
    heroImage: "/assets/corestone.png",
    mockupImage: "/assets/corestone.png",
    winBanner: "/assets/corestone.png",
    caseFeatureImage: "/assets/corestone.png",
    summary:
      "Commercial facilities management platform engineered for estates across Northern England (Sheffield, Leeds, Manchester), managing planned maintenance, M&E compliance, manned security, and 24/7 emergency dispatch.",
    challenge:
      "Commercial property managers and tenants required total transparency into statutory compliance schedules, service-charge budgets, and round-the-clock emergency response with zero friction.",
    solution:
      "DevCraft created a modern Next.js platform showcasing Corestone's multi-sector FM services, 24/7 helpdesk integration, and rapid quote estimation workflows.",
    results: [
      { metric: "24/7/365", label: "Continuous Helpdesk Availability" },
      { metric: "3 Cities", label: "Northern England Estate Coverage" },
      { metric: "100%", label: "Statutory Compliance Testing" },
    ],
    deliverables: [
      "Next.js Commercial Facilities Platform",
      "Interactive Services & Sector Portals",
      "Emergency Dispatch & Helpdesk Call Routing",
      "Commercial Quote Estimation Funnel",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel Edge"],
    testimonial: {
      quote:
        "The web platform reflects the exact professionalism and responsiveness our commercial property clients expect.",
      author: "Operations Manager",
      role: "Corestone FM",
    },
  },
  {
    slug: "jay-samuel-studio",
    client: "Jay Samuel Studio",
    clientLogo: "/assets/clients/jay-samuel.svg",
    title: "Luxury Fashion & Wedding Photography Portfolio Experience",
    liveUrl: "https://jay-capture-studio.vercel.app/",
    serviceSlug: "ui-ux-design",
    industrySlug: "ecommerce-retail",
    category: "Creative Studio & Publishing",
    heroImage: "/assets/jay-samuel-studio.jpg",
    mockupImage: "/assets/jay-samuel-studio.jpg",
    winBanner: "/assets/jay-samuel-studio.jpg",
    caseFeatureImage: "/assets/jay-samuel-studio.jpg",
    summary:
      "Editorial wedding, fashion, and portrait photography studio platform engineered with fluid image lazy-loading, artistic typography, and client engagement galleries.",
    challenge:
      "Displaying heavy ultra-high-resolution wedding and fashion photography collections without degrading mobile scroll performance or compromising visual fidelity.",
    solution:
      "DevCraft developed a modern, ultra-fast client portfolio featuring Cloudinary edge image transformation, progressive blur-up rendering, and bespoke typography.",
    results: [
      { metric: "0.4s", label: "Media Load Velocity" },
      { metric: "100%", label: "Retina Asset Fidelity" },
      { metric: "+60%", label: "Client Inquiries Generated" },
    ],
    deliverables: [
      "Interactive Photojournalism Gallery",
      "Cloudinary CDN Edge Image Pipeline",
      "Editorial Layouts with Cormorant Garamond Typography",
      "Direct Booking & Consultation Flow",
    ],
    techStack: ["Vite", "React", "Cloudinary CDN", "Tailwind CSS", "Vercel Edge"],
    testimonial: {
      quote:
        "The portfolio speed and luxury presentation have directly elevated our booking rate for high-end wedding commissions.",
      author: "Lead Photographer",
      role: "Jay Samuel Studio",
    },
  },
  {
    slug: "tal-encia",
    client: "Tal-encia",
    clientLogo: "/assets/clients/talencia.svg",
    title: "360° Enterprise Strategic Advisory, Digital Systems & Ecosystems",
    liveUrl: "https://tal-encia.com/",
    serviceSlug: "custom-software-development",
    industrySlug: "fintech",
    category: "Enterprise Platform",
    heroImage: "/assets/tal-encia.png",
    mockupImage: "/assets/tal-encia.png",
    winBanner: "/assets/tal-encia.png",
    caseFeatureImage: "/assets/tal-encia.png",
    summary:
      "Strategic communication, technology, and business advisory platform providing enterprises with digital platforms, ERP/CRM implementations, and market scaling strategies.",
    challenge:
      "Unifying four distinct enterprise service pillars (Marketing & Communication, Technology & Digital, Business Advisory, and Digital Platforms) into an authoritative digital presence.",
    solution:
      "DevCraft engineered a multi-pillar advisory platform with interactive capability explorers, consulting inquiry funnels, and enterprise visual styling.",
    results: [
      { metric: "4 Pillars", label: "Unified Digital Architecture" },
      { metric: "360°", label: "Business Transformation Scope" },
      { metric: "<1.2s", label: "Initial Interactive Time" },
    ],
    deliverables: [
      "Enterprise Multi-Pillar Advisory Portal",
      "Strategic Advisory Lead Generation Funnel",
      "Interactive Capability Explorer Architecture",
      "Bilingual Corporate Communication",
    ],
    techStack: ["WordPress", "Elementor", "Custom CSS", "Modern Web Architecture"],
    testimonial: {
      quote:
        "DevCraft structured our diverse capabilities into a cohesive platform that immediately resonates with corporate clients.",
      author: "Managing Partner",
      role: "Tal-encia Advisory",
    },
  },
];
