export interface TechnologyItem {
  name: string;
  category: string;
  icon?: string;
  badge?: string;
  whatWeUseItFor: string;
}

export interface TechnologyCategory {
  title: string;
  description: string;
  items: TechnologyItem[];
}

export const technologiesData: TechnologyCategory[] = [
  {
    title: "Frontend Development",
    description: "High-performance, sub-second rendering web applications and component design systems.",
    items: [
      {
        name: "Next.js",
        category: "Frontend",
        badge: "Core Framework",
        whatWeUseItFor:
          "Enterprise production web apps, streaming server-side rendering (SSR), edge computing, and sub-second SEO storefronts.",
      },
      {
        name: "React",
        category: "Frontend",
        badge: "Core UI",
        whatWeUseItFor:
          "Complex reactive user interfaces, component-driven client portals, and dynamic interactive dashboards.",
      },
      {
        name: "Vite",
        category: "Frontend",
        whatWeUseItFor:
          "Lightning-fast SPA web applications, internal administration tools, and rapid prototyping workflows.",
      },
    ],
  },
  {
    title: "Backend & Systems Architecture",
    description: "Scalable APIs, relational databases, distributed message queues, and high-concurrency backends.",
    items: [
      {
        name: "Node.js & TypeScript",
        category: "Backend",
        badge: "High Concurrency",
        whatWeUseItFor:
          "High-throughput microservices, real-time WebSockets dispatch engines, and event-driven API backends.",
      },
      {
        name: "Laravel (PHP)",
        category: "Backend",
        badge: "Enterprise MVC",
        whatWeUseItFor:
          "Robust enterprise business applications, rapid CRM/ERP development, and secure multi-tenant portals.",
      },
    ],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android with offline sync and hardware telemetry.",
    items: [
      {
        name: "Flutter",
        category: "Mobile",
        badge: "Cross-Platform",
        whatWeUseItFor:
          "Multi-platform consumer apps, unified iOS & Android codebases with native 60fps performance.",
      },
      {
        name: "React Native",
        category: "Mobile",
        whatWeUseItFor:
          "Scalable mobile apps sharing component logic with React web platforms and mobile health passports.",
      },
      {
        name: "Kotlin",
        category: "Mobile",
        badge: "Native Android",
        whatWeUseItFor:
          "High-performance native Android solutions requiring deep device telemetry, Bluetooth, and hardware sensor integration.",
      },
    ],
  },
  {
    title: "CMS & Web Platforms",
    description: "Flexible, scalable content management systems and headless publishing architectures.",
    items: [
      {
        name: "WordPress & Elementor",
        category: "CMS",
        badge: "Custom Themes & Headless",
        whatWeUseItFor:
          "Custom enterprise themes, bespoke Elementor widgets, content publishing engines, and client-editable commercial marketing sites.",
      },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Model training, intelligent automation, and production LLM integrations with deterministic guardrails.",
    items: [
      {
        name: "Python",
        category: "AI/ML",
        badge: "Core AI",
        whatWeUseItFor:
          "Applied AI features, model fine-tuning, automated recommendation engines, predictive scheduling, and intelligent workforce assistants.",
      },
    ],
  },
  {
    title: "Infrastructure & Deployment",
    description: "Rock-solid cloud infrastructure, automated CI/CD pipelines, and manageable hosting environments.",
    items: [
      {
        name: "cPanel & Managed Hosting",
        category: "Infrastructure",
        whatWeUseItFor:
          "Streamlined client hosting management, email server orchestration, database backups, and accessible client maintenance.",
      },
      {
        name: "AWS & Cloudflare Edge",
        category: "Infrastructure",
        whatWeUseItFor:
          "Global content delivery, DDoS mitigation, serverless edge caching, and scalable object storage.",
      },
    ],
  },
  {
    title: "UI/UX & Product Design",
    description: "Design-system-first wireframing, interactive prototypes, and production-ready visual design.",
    items: [
      {
        name: "Figma",
        category: "Design",
        badge: "Design Systems",
        whatWeUseItFor:
          "High-fidelity interactive prototypes, responsive UI component libraries, user journey mapping, and seamless developer handoff.",
      },
      {
        name: "Canva",
        category: "Design",
        whatWeUseItFor:
          "Rapid social media collateral, client-editable marketing assets, and brand guide presentation decks.",
      },
    ],
  },
  {
    title: "Growth & Technical SEO",
    description: "Search engine optimization, semantic metadata structuring, and sub-second Core Web Vitals.",
    items: [
      {
        name: "Technical SEO & Schema Markup",
        category: "Growth",
        whatWeUseItFor:
          "Structured data schemas, crawl budget optimization, performance auditing, and targeted industry search ranking.",
      },
    ],
  },
];
