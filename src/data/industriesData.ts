export interface IndustryDetail {
  slug: string;
  title: string;
  shortDesc: string;
  clientProblem: string;
  devcraftApproach: string;
  icon: string;
  heroImage: string;
  keySolutions: string[];
  proofPoints: {
    name: string;
    description: string;
    link: string;
  }[];
  techStack: string[];
}

export const industriesData: IndustryDetail[] = [
  {
    slug: "logistics-delivery",
    title: "Logistics & Delivery",
    shortDesc:
      "Rider and driver apps, real-time GPS tracking, automated dispatching, and global trade supply chain portals.",
    clientProblem:
      "Logistics operations struggle with disconnected third-party software, delayed driver tracking, manual order dispatching, and opaque international trade supply chain pipelines.",
    devcraftApproach:
      "We design and build bespoke logistics platforms from the ground up: low-latency GPS driver telemetry, multi-vendor marketplace dispatch engines, and international commodity indenting portals.",
    icon: "Truck",
    heroImage: "/assets/nexeat.png",
    keySolutions: [
      "Custom Driver & Rider Mobile Applications (iOS & Android)",
      "Real-Time Telemetry & Geofenced Dispatch Clustering",
      "Global Metal Scrap & Commodity Indenting Portals",
      "Live Order Tracking Customer Portals with WebSockets",
      "Automated Carrier Billing & Multi-Currency Settlement",
    ],
    proofPoints: [
      {
        name: "NexEats & NexRider Fleet",
        description:
          "Live multi-vendor food delivery marketplace and dedicated rider dispatch app with real-time GPS telemetry.",
        link: "/work/nexeats",
      },
      {
        name: "Kamraj Enterprises",
        description:
          "Global scrap metal indenting portal connecting suppliers across 5 continents with steel mills in South Asia.",
        link: "/work/kamraj-enterprises",
      },
      {
        name: "Prime Commodities FZE",
        description:
          "UAE-based international scrap metal trading corporation serving industrial foundries across global trade routes.",
        link: "/work/prime-commodities",
      },
    ],
    techStack: ["Next.js", "Flutter", "Kotlin", "WebSockets", "Node.js", "PostgreSQL", "Google Maps API"],
  },
  {
    slug: "procurement-compliance",
    title: "Procurement & Compliance",
    shortDesc:
      "Internal operations tools, vetting and compliance tracking, workflow automation, and auditable industrial supply systems.",
    clientProblem:
      "Regulated service companies and industrial contractors risk massive penalties and operational downtime through manual spreadsheet vetting, unverified vendor catalogs, and fragmented compliance records.",
    devcraftApproach:
      "We build secure, auditable enterprise portals with automated compliance verification, regulatory document verification, technical industrial sourcing catalogs, and rule-based approval pipelines.",
    icon: "ShieldCheck",
    heroImage: "/assets/duralean.jpg",
    keySolutions: [
      "BS 7858 & SIA 5-Year Background Vetting Engines",
      "Multi-Sector Technical Industrial Sourcing Catalogs",
      "Planned & Reactive Commercial Estate Maintenance Portals",
      "Civil Engineering & Geosynthetics Compliance Registries",
      "Role-Based Access Control (RBAC) with Full Audit Logging",
    ],
    proofPoints: [
      {
        name: "ProRota Workforce & Vetting Suite",
        description:
          "Enterprise compliance engine managing tens of thousands of staff vetting files and audit checks with zero compliance breaches.",
        link: "/work/prorota",
      },
      {
        name: "Duralean UK",
        description:
          "Global procurement and outsourcing platform sourcing 17+ industrial categories for energy and construction.",
        link: "/work/duralean-uk",
      },
      {
        name: "Corestone Facilities Management",
        description:
          "Commercial estate operations platform managing planned M&E maintenance and 24/7 emergency dispatch across Northern England.",
        link: "/work/corestone-facilities",
      },
      {
        name: "Taltex Geosynthetics",
        description:
          "Trilingual technical manufacturing portal presenting geotextile specifications aligned with ISO 9001 standards.",
        link: "/work/taltex-geosynthetics",
      },
    ],
    techStack: ["React", "Next.js", "Laravel", "Node.js", "PostgreSQL", "Tailscale", "Docker"],
  },
  {
    slug: "ecommerce-retail",
    title: "E-commerce & Retail",
    shortDesc:
      "Headless storefronts, custom checkout funnels, multi-vendor marketplaces, and luxury client visual experiences.",
    clientProblem:
      "Generic e-commerce templates suffer from sluggish mobile load speeds, rigid checkout experiences, high cart abandonment, and poor image fidelity on retina devices.",
    devcraftApproach:
      "We engineer sub-second headless commerce architectures, bespoke marketplace engines, and luxury media presentation platforms with edge CDN delivery and one-click checkout.",
    icon: "ShoppingBag",
    heroImage: "/assets/jay-samuel-studio.jpg",
    keySolutions: [
      "Sub-Second Headless Next.js Ordering Architectures",
      "Multi-Vendor Marketplace Infrastructure with Automated Payouts",
      "Edge-Optimized Luxury Media Galleries & Portfolios",
      "Bilingual and Multi-Currency International Commerce",
      "One-Click Mobile Payments (Apple Pay, Google Pay, Stripe Connect)",
    ],
    proofPoints: [
      {
        name: "NexEats Marketplace",
        description:
          "Bilingual restaurant ordering platform with multi-vendor menu management and instant dispatch.",
        link: "/work/nexeats",
      },
      {
        name: "Jay Samuel Studio",
        description:
          "High-performance luxury photography portfolio with Cloudinary edge CDN optimization and 0.4s load speed.",
        link: "/work/jay-samuel-studio",
      },
    ],
    techStack: ["Next.js", "React", "Vite", "Cloudinary CDN", "Stripe Connect", "Tailwind CSS"],
  },
  {
    slug: "fintech",
    title: "Fintech",
    shortDesc:
      "Secure, compliant web and mobile platforms for financial products — billing pipelines, advisory dashboards, and reporting.",
    clientProblem:
      "Financial businesses require banking-grade encryption, rigorous data protection, sub-second transaction visibility, and zero-downtime reliability that off-the-shelf software cannot provide.",
    devcraftApproach:
      "We engineer hardened financial portals, automated subscription and metering engines, real-time enterprise management terminals, and PCI-DSS-ready payment gateways with cryptographic audit logs.",
    icon: "CreditCard",
    heroImage: "/assets/tal-encia.png",
    keySolutions: [
      "Automated Recurring Subscription & Usage-Based Invoicing Engines",
      "Enterprise Digital Ecosystems & Advisory Dashboards",
      "PCI-DSS Compliant Payment Gateway & Stripe Connect Orchestration",
      "Hardware-Backed Key Storage & Encrypted Document Vaults",
      "Multi-Currency Financial Ledger & Settlement Systems",
    ],
    proofPoints: [
      {
        name: "Tal-encia Advisory & Systems",
        description:
          "360° enterprise strategic advisory and digital execution platform unifying marketing and digital systems.",
        link: "/work/tal-encia",
      },
      {
        name: "ProCRM Commercial Pipeline",
        description:
          "AI-powered CRM and billing automation engine for multi-site service operations.",
        link: "/work/prorota",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    shortDesc:
      "Compliant staff rostering, clinical credential vetting, biometric attendance, and HIPAA/GDPR record handling.",
    clientProblem:
      "Healthcare institutions face intense staffing shortages, complex shift rostering rules, high agency placement fees, and strict privacy laws governing medical personnel credentials.",
    devcraftApproach:
      "We design HIPAA and GDPR-compliant clinical management portals, intelligent shift matching engines, and encrypted biometric health applications that protect patient data while saving thousands of administrative hours.",
    icon: "Activity",
    heroImage: "/assets/Prorota.png",
    keySolutions: [
      "Automated Clinical Shift Scheduling & Ward Staff Allocation",
      "SIA & BS 7858 Compliance Vetting & DBS Document Verification",
      "Encrypted Clinician Dashboards with Role-Based Access",
      "Instant Credential Verification & Registration Tracking",
      "Low-Latency Biometric Telemetry & Mobile Health Apps",
    ],
    proofPoints: [
      {
        name: "ProRota Healthcare Workforce",
        description:
          "Clinical staffing and shift optimization engine eliminating administrative chaos with 99.4% automated allocation.",
        link: "/work/prorota",
      },
      {
        name: "Duralean Cleanroom & Medical Supplies",
        description:
          "Specialized procurement workflows for healthcare and cleanroom technical supplies.",
        link: "/work/duralean-uk",
      },
    ],
    techStack: ["React", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Tailscale"],
  },
];
