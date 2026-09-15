export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Engagement & Pricing" | "Technical & AI" | "Security & SLA";
}

export interface EngagementModel {
  title: string;
  tagline: string;
  description: string;
  bestFor: string;
  icon: string;
}

export const faqData = {
  headline: "Robust Software. Surprisingly Simple Pricing.",
  subheadline:
    "Nexverse-inspired product tiers for forms, invoicing, and automation—plus enterprise sprints and embedded squads for agency and venture-scale delivery.",

  pricingTiers: [
    {
      id: "starter-automation",
      name: "Starter",
      badge: "Product Tier",
      price: "£200",
      cadence: "per year (or monthly)",
      description:
        "Forms designed to save time. Essential lead capture, smart form templates, and core invoicing for growing teams clearing their plate.",
      features: [
        "Interactive lead capture forms & templates",
        "Core invoicing & payment reminders",
        "Basic CRM webhook sync",
        "Email notifications & conversion tracking",
        "Secure hosting with automated backups",
        "Email support during UK business hours",
      ],
      ctaLabel: "Get Started — Starter",
      ctaHref: "/contact",
      popular: false,
    },
    {
      id: "premier-automation",
      name: "Premier",
      badge: "Most Popular",
      price: "£400",
      cadence: "per year (or monthly)",
      description:
        "Everything in Starter, plus advanced automation—get paid on time with full reporting, multi-step qualification, and priority support.",
      features: [
        "Everything in Starter",
        "Advanced multi-step qualification funnels",
        "Full invoicing, reporting & reconciliation",
        "Multi-channel CRM & Slack orchestration",
        "Custom branding & white-label forms",
        "Priority support & quarterly optimisation review",
      ],
      ctaLabel: "Get Started — Premier",
      ctaHref: "/contact",
      popular: true,
    },
    {
      id: "rapid-mvp-sprint",
      name: "Rapid MVP Sprint",
      badge: "Fixed Timeline",
      price: "£24,500",
      cadence: "fixed 8-week delivery",
      description:
        "From architecture blueprint to de-risked production release—ideal for venture pitches, client pilots, and rapid market validation.",
      features: [
        "Dedicated 3-engineer cross-functional squad",
        "Interactive high-fidelity prototype in Week 2",
        "Production Next.js 15 frontend with responsive UX",
        "PostgreSQL / Supabase backend with auth & roles",
        "Automated CI/CD with 100/100 Core Web Vitals",
        "30-day post-launch warranty & technical handover",
      ],
      ctaLabel: "Schedule Blueprint Sprint",
      ctaHref: "/contact",
      popular: false,
    },
    {
      id: "embedded-squad",
      name: "Embedded Engineering Squad",
      badge: "Agency Retainer",
      price: "£14,500",
      cadence: "per month / dedicated retainer",
      description:
        "A senior full-stack team plugged into your Slack, Linear, and GitHub—eliminate hiring overhead and delivery risk.",
      features: [
        "Lead Architect + 2 Senior Full-Stack Engineers",
        "White-label delivery behind your agency brand",
        "Direct Slack & Linear integration with daily syncs",
        "Continuous feature shipping & PR reviews",
        "Monthly architecture reviews & tech radar",
        "30-day flexible cancellation notice",
      ],
      ctaLabel: "Embed a Squad",
      ctaHref: "/contact",
      popular: false,
    },
    {
      id: "enterprise-safeguard",
      name: "Enterprise Custom Architecture",
      badge: "Full Scale",
      price: "Custom",
      cadence: "tailored scope & enterprise SLA",
      description:
        "High-throughput microservices, multi-region databases, agentic AI clusters, and 24/7 SRE incident response.",
      features: [
        "Bespoke multi-disciplinary engineering org",
        "99.99% uptime with sub-15min emergency SLA",
        "SOC2, HIPAA, and ISO27001 readiness",
        "Custom Agentic AI & vector search clusters",
        "Dedicated SRE incident desk",
        "CTO-as-a-Service quarterly roadmaps",
      ],
      ctaLabel: "Request Enterprise Consultation",
      ctaHref: "/contact",
      popular: false,
    },
  ] as PricingTier[],

  engagementModels: [
    {
      title: "Online Presence Review (OPR) & Architecture Audit",
      tagline: "Uncover Bottlenecks",
      description:
        "A rigorous, diagnostic audit of your existing codebase, API performance, Core Web Vitals, and cloud infrastructure with an actionable remediation blueprint.",
      bestFor: "Platforms experiencing slow load times, high cloud bills, or technical debt.",
      icon: "SearchCode",
    },
    {
      title: "Fixed-Scope Sprint Delivery",
      tagline: "Predictable Outcomes",
      description:
        "Guaranteed delivery dates with clearly documented acceptance criteria. We absorb scope risk so you launch on time and on budget.",
      bestFor: "New product launches, MVP prototypes, and discrete platform migrations.",
      icon: "CalendarCheck",
    },
    {
      title: "White-Label Agency Delivery",
      tagline: "Invisible Technical Engine",
      description:
        "We act as your agency's confidential engineering wing under strict mutual NDAs. You maintain full client ownership while we guarantee technical execution.",
      bestFor: "Creative, branding, and marketing agencies winning high-complexity tech pitches.",
      icon: "ShieldAlert",
    },
  ] as EngagementModel[],

  faqs: [
    {
      category: "General",
      question: "Who owns the source code and intellectual property?",
      answer:
        "You do—100%. Upon settlement of project milestones or sprint cycles, all intellectual property, repository commits, design assets, and deployment keys transfer completely and unconditionally to your organization.",
    },
    {
      category: "General",
      question: "How does DevCraft maintain whitelabel confidentiality for agency partners?",
      answer:
        "We operate under ironclad bilateral NDAs. Our engineers join your client Slack channels with company emails (@youragency.com) or communicate strictly through your account directors. We never publicly claim your work without explicit written authorization.",
    },
    {
      category: "Engagement & Pricing",
      question: "What's the difference between Starter, Premier, and enterprise sprints?",
      answer:
        "Starter (£200/yr) and Premier (£400/yr) are productised automation tiers for forms, invoicing, and lead capture—robust software with surprisingly simple pricing. Rapid MVP sprints and embedded squads are bespoke engineering engagements for full platforms, agency white-label delivery, and enterprise SLAs.",
    },
    {
      category: "Engagement & Pricing",
      question: "How do your fixed-price sprints work?",
      answer:
        "During discovery we map user stories, schemas, and wireframes. Once scope is locked, we commit to a fixed delivery price and launch date. If a feature takes longer than estimated, we absorb the cost—not you.",
    },
    {
      category: "Engagement & Pricing",
      question: "Can we transition from an MVP sprint into an ongoing embedded squad?",
      answer:
        "Yes, seamlessly. Most of our clients begin with an 8-Week MVP sprint or initial architecture audit. Once live, the same squad that built the platform continues forward on a flexible monthly retainer to ship new features and maintain momentum.",
    },
    {
      category: "Technical & AI",
      question: "Why do you specialize in Next.js 15 and TypeScript?",
      answer:
        "TypeScript eliminates runtime errors through strict compile-time checks, ensuring robust enterprise platforms. Next.js 15 App Router combines React Server Components with edge caching, enabling sub-second global page loads and near-instant Core Web Vitals.",
    },
    {
      category: "Technical & AI",
      question: "How do you ensure enterprise Agentic AI systems don't hallucinate?",
      answer:
        "We never connect raw LLM text outputs directly to production databases. We engineer LangGraph cyclic graphs with deterministic validator nodes, JSON schema validation, and hybrid vector retrieval layers that ground responses strictly in verified proprietary data.",
    },
    {
      category: "Security & SLA",
      question: "What is included in the 24/7 Safeguard SLA?",
      answer:
        "Our Safeguard SLA guarantees 99.99% operational uptime, real-time APM telemetry monitoring (Datadog/Prometheus), automated multi-region daily backups, vulnerability patching, and a contractually backed sub-15-minute response time for critical incidents.",
    },
  ] as FaqItem[],
};
