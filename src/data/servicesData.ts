export interface ServiceCapability {
  name: string;
  description: string;
  technologies: string[];
  image?: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  problemSolved: string;
  icon: string;
  badge?: string;
  heroImage: string;
  diagramImage: string;
  mockupImage: string;
  overview: string;
  deliverables: string[];
  capabilities: ServiceCapability[];
  workflowSteps: {
    step: string;
    title: string;
    desc: string;
  }[];
  techStack: string[];
  relatedProject: {
    name: string;
    description: string;
    link: string;
  };
  metrics: {
    value: string;
    label: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    subtitle: "Marketing Sites, Web Apps & Portals with Sub-Second Performance",
    shortDesc:
      "Marketing sites, web applications, and customer portals built on Next.js, React/Vite, Laravel, and custom WordPress, engineered for sub-second speeds and built-in CMS control.",
    problemSolved:
      "Slow load times, inflexible CMS templates, high bounce rates, and broken responsive layouts that prevent businesses from converting qualified organic traffic.",
    icon: "Globe",
    badge: "Core Service",
    heroImage: "/assets/portfolio/enterprise-architecture-solution.jpg",
    diagramImage: "/assets/services/dev-programming-terminal.png",
    mockupImage: "/assets/portfolio/case-study-deepdive-banner.jpg",
    overview:
      "At DevCraft, our web development service bridges marketing impact with rigorous engineering. Whether you need a high-converting marketing site on WordPress, an edge-rendered Next.js web platform, or a secure multi-tenant portal on Laravel, we build with clean architecture, strict accessibility, and sub-second Core Web Vitals from day one.",
    deliverables: [
      "Custom Next.js & React Web Applications",
      "Bespoke WordPress & Elementor Themes & Custom Plugins",
      "Laravel Enterprise Business Portals & Dashboards",
      "Mobile-First Responsive Design & Strict Accessibility (WCAG)",
      "Technical SEO Structuring & Sub-Second Core Web Vitals SLA",
    ],
    capabilities: [
      {
        name: "Headless Next.js & Edge Rendering",
        description:
          "Modern web applications with streaming server-side rendering, edge caching, and instantaneous page navigation.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Edge"],
      },
      {
        name: "Custom WordPress Engineering",
        description:
          "Lightweight, secure custom WordPress themes and bespoke Elementor widgets that empower marketing teams without technical bloat.",
        technologies: ["WordPress", "PHP", "Elementor", "MySQL"],
      },
      {
        name: "Enterprise Web Portals",
        description:
          "Secure customer and partner portals with role-based permissions, automated document generation, and CRM sync.",
        technologies: ["Laravel", "React", "PostgreSQL", "Docker"],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Discover & Scope",
        desc: "Information architecture mapping, technical stack selection, and milestone definition.",
      },
      {
        step: "02",
        title: "UI/UX & Prototyping",
        desc: "Wireframing and Figma design system handoff aligned with brand identity.",
      },
      {
        step: "03",
        title: "Full-Stack Build",
        desc: "Clean component development, backend integration, and rigorous cross-browser QA.",
      },
      {
        step: "04",
        title: "Launch & Support",
        desc: "DNS cutover, SSL verification, SEO indexing, and round-the-clock maintenance handoff.",
      },
    ],
    techStack: ["Next.js", "React", "Vite", "WordPress", "Laravel", "TypeScript", "Tailwind CSS"],
    relatedProject: {
      name: "Kamraj Enterprises & Prime Commodities",
      description: "Custom global scrap metal trading and indenting portals built for international steel mill networks.",
      link: "/work",
    },
    metrics: [
      { value: "<0.35s", label: "Page Load Velocity" },
      { value: "100/100", label: "Lighthouse Performance" },
      { value: "+42%", label: "Conversion Lift" },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Native & Cross-Platform iOS & Android Applications",
    shortDesc:
      "Native (Kotlin) and cross-platform (Flutter, React Native) mobile applications with real-time GPS telemetry, offline sync, and fluid 60fps performance.",
    problemSolved:
      "High development costs from maintaining disjointed iOS and Android codebases, sluggish performance, offline data loss, and poor App Store approval rates.",
    icon: "Smartphone",
    badge: "iOS & Android",
    heroImage: "/assets/portfolio/alif-android-app.webp",
    diagramImage: "/assets/portfolio/alif-mobile-app.webp",
    mockupImage: "/assets/portfolio/alif-ios-app.webp",
    overview:
      "We design, build, and publish consumer and enterprise mobile applications that users love. From real-time food delivery dispatch in NexRider to clinical athlete biometric passports, our mobile squads engineer resilient apps with offline data synchronization, hardware-accelerated rendering, and bi-directional API backends.",
    deliverables: [
      "Cross-Platform Flutter & React Native Applications",
      "Native Android (Kotlin) Development for Deep Hardware Integration",
      "Real-Time Geolocation, GPS Telemetry & Turn-by-Turn Routing",
      "Offline-First Data Storage with Seamless Background Sync",
      "End-to-End App Store & Google Play Store Submission Management",
    ],
    capabilities: [
      {
        name: "Cross-Platform Velocity",
        description:
          "Unified codebases delivering native 60fps performance on both iOS and Android, cutting delivery timelines by 40%.",
        technologies: ["Flutter", "React Native", "Expo", "Dart"],
      },
      {
        name: "Real-Time Telemetry & Tracking",
        description:
          "Low-battery GPS telemetry, background geofencing, and live driver-to-customer status synchronization.",
        technologies: ["WebSockets", "Google Maps API", "CoreLocation", "WorkManager"],
      },
      {
        name: "Biometrics & Hardware Security",
        description:
          "Hardware-backed FaceID/TouchID authentication, cryptographic key storage, and HIPAA/GDPR health data encryption.",
        technologies: ["Keychain", "BiometricPrompt", "SQLCipher"],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "User Flow Mapping",
        desc: "Wireframing mobile interaction patterns, tap states, and offline edge conditions.",
      },
      {
        step: "02",
        title: "Component Architecture",
        desc: "Reusable mobile UI design system engineered for iOS Human Interface & Material Design.",
      },
      {
        step: "03",
        title: "Feature Sprints",
        desc: "Bi-weekly test flights on physical test devices with automated end-to-end testing.",
      },
      {
        step: "04",
        title: "Store Submission & Launch",
        desc: "App Store & Google Play approval compliance, analytics tracking, and OTA updates.",
      },
    ],
    techStack: ["Flutter", "React Native", "Kotlin", "TypeScript", "Firebase", "WebSockets"],
    relatedProject: {
      name: "NexRider Fleet App",
      description: "Active delivery rider application featuring live GPS tracking and instant earnings dashboard.",
      link: "/products#nexrider",
    },
    metrics: [
      { value: "4.9★", label: "App Store Velocity" },
      { value: "<15ms", label: "Telemetry Latency" },
      { value: "100%", label: "Offline Sync Accuracy" },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    subtitle: "Bespoke Enterprise Systems, Internal Tools & Scalable Platforms",
    shortDesc:
      "Bespoke backend systems, operational ERPs, compliance vetting suites, and automated workflow engines tailored to your exact business rules.",
    problemSolved:
      "Rigid off-the-shelf software with steep licensing fees, disconnected spreadsheets, manual copy-pasting across tools, and lack of enterprise customization.",
    icon: "Cpu",
    badge: "Enterprise Grade",
    heroImage: "/assets/services/internal-systems-hero.jpg",
    diagramImage: "/assets/services/dev-programming-terminal.png",
    mockupImage: "/assets/portfolio/prorota-commercial-win.jpg",
    overview:
      "When off-the-shelf SaaS limits your growth, DevCraft engineers custom software that molds directly to your operational processes. We architect multi-tenant SaaS platforms, internal staff portals, and high-concurrency database systems that eliminate manual overhead and give leadership real-time operational visibility.",
    deliverables: [
      "Custom Multi-Tenant ERP & Operational Workflow Engines",
      "Role-Based Access Control (RBAC) & Audit Trail Compliance",
      "High-Concurrency Database Optimization & Indexing",
      "Legacy System Migration via Strangler-Fig Patterns",
      "Automated PDF Invoicing, Timesheets, and Reporting Pipelines",
    ],
    capabilities: [
      {
        name: "Enterprise Workflow Automation",
        description:
          "Replace disjointed spreadsheets and manual email approvals with centralized software pipelines.",
        technologies: ["Node.js", "Laravel", "PostgreSQL", "Redis"],
      },
      {
        name: "High-Throughput Concurrency",
        description:
          "Process millions of monthly records with sub-50ms API response latencies and zero database locking.",
        technologies: ["BullMQ", "Redis", "Docker", "PostgreSQL"],
      },
      {
        name: "Compliance & Vetting Engines",
        description:
          "Automate regulatory background checks, certification tracking, and automated document expiration alerts.",
        technologies: ["TypeScript", "Prisma", "AWS S3", "Docker"],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Process Discovery",
        desc: "In-depth audit of business bottlenecks, operational workflows, and data relationships.",
      },
      {
        step: "02",
        title: "Schema & Architecture",
        desc: "Relational database modeling, API contract definition, and permission matrices.",
      },
      {
        step: "03",
        title: "Sprint Delivery",
        desc: "Iterative two-week builds with rigorous unit testing and continuous client review.",
      },
      {
        step: "04",
        title: "Cutover & Training",
        desc: "Zero-downtime data migration, staff onboarding, and 24/7 technical monitoring.",
      },
    ],
    techStack: ["Node.js", "Laravel", "TypeScript", "PostgreSQL", "Redis", "Docker", "Next.js"],
    relatedProject: {
      name: "ProRota Workforce & Vetting Suite",
      description: "All-in-one staff rostering, BS7858 vetting compliance, and CRM suite deployed across service businesses.",
      link: "/products#prorota",
    },
    metrics: [
      { value: "400%", label: "Throughput Boost" },
      { value: "90%", label: "Manual Effort Cut" },
      { value: "99.99%", label: "Production Uptime" },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    subtitle: "Storefronts, Marketplaces & Ordering Platforms That Convert",
    shortDesc:
      "High-conversion storefronts, multi-vendor marketplaces, and customized ordering platforms with sub-second checkout, live inventory sync, and multi-currency support.",
    problemSolved:
      "Clunky checkout flows, high cart abandonment, slow mobile loading, and inflexible product configurations that restrict sales growth.",
    icon: "ShoppingBag",
    badge: "High Conversion",
    heroImage: "/assets/portfolio/coconut-cosmetics-branding.png",
    diagramImage: "/assets/portfolio/lead-capture-cta-preview.webp",
    mockupImage: "/assets/portfolio/case-example-mockup.jpg",
    overview:
      "DevCraft builds e-commerce platforms engineered for revenue. From multi-vendor consumer marketplaces like NexEats to custom headless Shopify and WooCommerce experiences, we optimize every touchpoint from product discovery and basket additions to one-click payment processing.",
    deliverables: [
      "Custom Multi-Vendor Marketplace Platforms",
      "Headless E-Commerce Storefronts (Next.js + Shopify / WooCommerce)",
      "Instant Checkout Funnels with Apple Pay, Google Pay & Stripe",
      "Multi-Warehouse Inventory & Real-Time Stock Telemetry",
      "Bilingual and Multi-Currency Localization",
    ],
    capabilities: [
      {
        name: "Marketplace Infrastructure",
        description:
          "Multi-vendor seller portals, automated commission splits, customer ordering, and kitchen display terminals.",
        technologies: ["Next.js", "Node.js", "Stripe Connect", "PostgreSQL"],
      },
      {
        name: "Headless Storefront Engineering",
        description:
          "Sub-second page navigation and cart interactions using Next.js on edge networks, boosting SEO and conversion.",
        technologies: ["Shopify Storefront API", "Next.js", "Tailwind CSS"],
      },
      {
        name: "Payment Gateway Integration",
        description:
          "Secure, PCI-DSS compliant checkout integrations with support for card payments, digital wallets, and cash-on-delivery.",
        technologies: ["Stripe", "PayPal", "Apple Pay", "Google Pay"],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Catalog & Checkout Architecture",
        desc: "Product taxonomy mapping, shipping rules, tax requirements, and payment flow design.",
      },
      {
        step: "02",
        title: "Conversion UI/UX",
        desc: "Mobile-first shopping interface optimized for rapid filtering, cart additions, and one-tap checkout.",
      },
      {
        step: "03",
        title: "Integration & Sync",
        desc: "Connecting payment gateways, ERP inventory feeds, shipping carriers, and CRM tools.",
      },
      {
        step: "04",
        title: "Load Testing & Launch",
        desc: "Simulating peak traffic, checkout stress testing, and real-time transaction monitoring.",
      },
    ],
    techStack: ["Next.js", "Shopify API", "WordPress / WooCommerce", "Node.js", "Stripe Connect", "Redis"],
    relatedProject: {
      name: "NexEats Food Delivery Marketplace",
      description: "Consumer food ordering platform with restaurant partner onboarding and live driver dispatch.",
      link: "/products#nexeats",
    },
    metrics: [
      { value: "+42%", label: "Storefront Conversion" },
      { value: "0.28s", label: "Cart Add Latency" },
      { value: "99.95%", label: "Checkout Reliability" },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Research-Driven Interface Design & Design Systems in Figma",
    shortDesc:
      "User research, interactive wireframes, and high-fidelity design systems crafted in Figma and Canva, delivered ready for seamless developer implementation.",
    problemSolved:
      "Confusing user navigation, inconsistent visual branding across products, slow user onboarding, and designs that look good in mockups but fail in real code.",
    icon: "Layout",
    badge: "Design Systems",
    heroImage: "/assets/portfolio/creative-studio-showcase-1.webp",
    diagramImage: "/assets/portfolio/creative-studio-showcase-2.webp",
    mockupImage: "/assets/portfolio/creative-studio-showcase-3.webp",
    overview:
      "Great software starts with intentional design. At DevCraft, our UI/UX team creates interfaces that feel effortless to use. We combine deep user journey mapping with comprehensive design systems, component libraries, and interactive Figma prototypes, ensuring an exact translation from visual concept to production code.",
    deliverables: [
      "Interactive High-Fidelity Prototypes in Figma",
      "Comprehensive Component Design Systems & Style Guides",
      "User Journey Mapping, Wireframes & Information Architecture",
      "Responsive Desktop, Tablet & Mobile Breakpoint Specifications",
      "Developer-Ready Asset Kits & Token Documentation",
    ],
    capabilities: [
      {
        name: "Design System Architecture",
        description:
          "Unified color palettes, typography scales, spacing tokens, and accessible interactive states for long-term scalability.",
        technologies: ["Figma", "Design Tokens", "Auto Layout", "Zeroheight"],
      },
      {
        name: "Complex Dashboard & Data UX",
        description:
          "Transforming dense operational data and telemetry into intuitive, scannable dashboards with clear visual hierarchy.",
        technologies: ["Data Viz", "Micro-Interactions", "Figma Components"],
      },
      {
        name: "Usability Audits & Redesigns",
        description:
          "Heuristic evaluation of existing platforms to identify cognitive load hotspots, friction points, and drop-offs.",
        technologies: ["User Testing", "Heatmaps", "Accessibility Audits"],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "User & Competitor Research",
        desc: "Analyzing user mental models, competitive landscape, and functional requirements.",
      },
      {
        step: "02",
        title: "Wireframes & Information Flow",
        desc: "Low-fidelity wireframes mapping core user tasks with zero visual distraction.",
      },
      {
        step: "03",
        title: "High-Fidelity Visual Design",
        desc: "Full brand expression, custom iconography, micro-animations, and responsive screens.",
      },
      {
        step: "04",
        title: "Interactive Prototype & Handoff",
        desc: "Clickable Figma prototypes, design token exports, and direct collaboration with engineering.",
      },
    ],
    techStack: ["Figma", "Canva", "Adobe Creative Suite", "Tailwind Design Tokens"],
    relatedProject: {
      name: "Flash Creative Publishing Studio",
      description: "Interactive media showcase platform built with sub-second immersion and visual excellence.",
      link: "/work/flash-creative-studio",
    },
    metrics: [
      { value: "3.2x", label: "User Task Speedup" },
      { value: "100%", label: "Design-to-Code Fidelity" },
      { value: "Zero", label: "Visual Inconsistencies" },
    ],
  },
  {
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    subtitle: "Model Training & Applied AI Embedded Directly into Products",
    shortDesc:
      "Python-driven machine learning, custom model fine-tuning, automated recommendation engines, and assistant-style features embedded into production software.",
    problemSolved:
      "Manual data processing bottlenecks, lack of predictive intelligence, repetitive customer inquiries, and generic off-the-shelf AI tools that hallucinate.",
    icon: "Sparkles",
    badge: "Applied AI",
    heroImage: "/assets/services/workflow-lead-capture.png",
    diagramImage: "/assets/services/workflow-automation-engine.png",
    mockupImage: "/assets/portfolio/dailyworld-ai-news.webp",
    overview:
      "We build practical, production-grade AI that drives measurable business outcomes. Instead of superficial AI wrappers, we embed Python models, automated recommendation engines, predictive scheduling, and intelligent conversational assistants with strict deterministic guardrails directly into your core product.",
    deliverables: [
      "Custom Model Training & Parameter Fine-Tuning in Python",
      "Embedded AI Workforce & Operations Assistants",
      "Automated Document Data Extraction & OCR Classification",
      "Predictive Scheduling & Demand Forecasting Algorithms",
      "Deterministic Prompt Engineering with Hallucination Guardrails",
    ],
    capabilities: [
      {
        name: "Applied Machine Learning Models",
        description:
          "Develop and deploy regression, classification, and clustering models tailored to proprietary operational datasets.",
        technologies: ["Python", "PyTorch", "scikit-learn", "FastAPI"],
      },
      {
        name: "Conversational Assistants & RAG",
        description:
          "Domain-specific assistants querying internal knowledge bases and operational databases with zero hallucinations.",
        technologies: ["LangGraph", "Vector Databases", "OpenAI", "Pinecone"],
      },
      {
        name: "Intelligent Automation Pipelines",
        description:
          "Automate document ingestion, bill-of-lading verification, and invoice classification with OCR models.",
        technologies: ["Python", "Tesseract OCR", "Pandas", "Docker"],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Feasibility & Data Audit",
        desc: "Assessing data quality, defining evaluation metrics, and architecting guardrails.",
      },
      {
        step: "02",
        title: "Model Development & Tuning",
        desc: "Data preprocessing, feature engineering, and model training in Python.",
      },
      {
        step: "03",
        title: "API & Embedded Integration",
        desc: "Packaging models into low-latency REST/gRPC endpoints connected to web and mobile apps.",
      },
      {
        step: "04",
        title: "Evaluation & Monitoring",
        desc: "Continuous accuracy validation, drift detection, and automated retraining pipelines.",
      },
    ],
    techStack: ["Python", "FastAPI", "PyTorch", "scikit-learn", "Docker", "Next.js"],
    relatedProject: {
      name: "DailyWorld Autonomous AI News Engine",
      description: "Multi-agent semantic fact-checking and synthesis pipeline processing thousands of articles daily.",
      link: "/work/dailyworld-ai-news",
    },
    metrics: [
      { value: "450ms", label: "Inference Velocity" },
      { value: "Zero", label: "Confirmed Hallucinations" },
      { value: "85%", label: "Manual Analysis Saved" },
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    subtitle: "24/7 Follow-the-Sun Monitoring, Security Patching & cPanel Hosting",
    shortDesc:
      "Ongoing updates, continuous uptime monitoring, security patching, hosting/cPanel management, and 24/7 issue response across our UK and Pakistan teams.",
    problemSolved:
      "Unpatched software vulnerabilities, unexpected server downtime, slow emergency bug fixes, and agencies that disappear immediately after product launch.",
    icon: "ShieldCheck",
    badge: "24/7 Coverage",
    heroImage: "/assets/services/internal-systems-hero.jpg",
    diagramImage: "/assets/services/dev-programming-terminal.png",
    mockupImage: "/assets/portfolio/case-study-deepdive-banner.jpg",
    overview:
      "Software requires continuous care to stay fast, secure, and competitive. DevCraft's two-team delivery model in Sheffield, UK and Lahore, Pakistan provides round-the-clock follow-the-sun maintenance. We actively monitor your servers, apply security patches, manage cPanel and cloud hosting, and resolve issues before they impact your business.",
    deliverables: [
      "24/7 Follow-the-Sun Uptime Monitoring & Rapid Incident Response",
      "Proactive Security Patching, Dependency Updates & Vulnerability Audits",
      "cPanel, VPS & Cloud Server Management with Automated Backups",
      "Continuous Performance Profiling & Database Optimization",
      "Dedicated Monthly Engineering Hours for Feature Enhancements",
    ],
    capabilities: [
      {
        name: "Two-Team 24/7 Follow-the-Sun Support",
        description:
          "With teams in Sheffield, UK and Lahore, Pakistan, our support coverage runs continuously without overnight coverage gaps.",
        technologies: ["24/7 On-Call", "SLA Incident Command", "Follow-the-Sun"],
      },
      {
        name: "Security & Vulnerability Patching",
        description:
          "Regular updates for Next.js, WordPress plugins, PHP versions, and npm packages to protect against emerging exploits.",
        technologies: ["Patch Management", "SSL/TLS Audits", "Firewall Rules"],
      },
      {
        name: "Hosting & cPanel Orchestration",
        description:
          "Complete management of cPanel accounts, DNS records, database snapshots, email servers, and disaster recovery.",
        technologies: ["cPanel", "AWS", "Cloudflare", "Automated Backups"],
      },
    ],
    workflowSteps: [
      {
        step: "01",
        title: "Infrastructure Audit",
        desc: "Baseline health check of hosting, security vulnerabilities, database performance, and dependencies.",
      },
      {
        step: "02",
        title: "Telemetry & Alert Setup",
        desc: "Deploying automated 24/7 uptime monitors, error logging, and emergency SMS alerts.",
      },
      {
        step: "03",
        title: "Scheduled Maintenance Sprints",
        desc: "Weekly off-peak security updates, package patches, and backup integrity tests.",
      },
      {
        step: "04",
        title: "Continuous Optimization",
        desc: "Monthly performance reviews, database indexing, and priority feature improvements.",
      },
    ],
    techStack: ["cPanel", "AWS", "Cloudflare", "Linux", "Docker", "PostgreSQL", "MySQL"],
    relatedProject: {
      name: "Enterprise SLA Client Deployments",
      description: "Continuous 99.99% operational uptime and zero-downtime patch management across all managed platforms.",
      link: "/contact",
    },
    metrics: [
      { value: "99.99%", label: "Operational Uptime" },
      { value: "<15min", label: "Incident Response Time" },
      { value: "24/7", label: "Two-Team Coverage" },
    ],
  },
];
