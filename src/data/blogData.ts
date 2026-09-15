export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
  tags: string[];
}

export const blogData: BlogPost[] = [
  {
    slug: "architecting-production-agentic-ai",
    title: "Architecting Production-Grade Agentic AI: Beyond Simple RAG with LangGraph",
    subtitle: "Why naive retrieval pipelines fail in enterprise settings and how multi-agent cyclic loops solve deterministic execution.",
    excerpt: "Moving from proof-of-concept chatbots to autonomous AI agents that can reliably execute database transactions and multi-step workflows requires deterministic state machines.",
    category: "AI Engineering",
    date: "September 2026",
    readTime: "7 min read",
    author: {
      name: "Elena V.",
      role: "Head of Agentic AI",
      avatar: "/assets/team/team-head-ai.png",
    },
    tags: ["Agentic AI", "LangGraph", "RAG", "Enterprise AI", "Python"],
    content: [
      "The initial gold rush of simple semantic search and retrieval-augmented generation (RAG) proved that language models could synthesize unstructured documents. However, enterprise organizations quickly discovered that naive RAG fails when faced with multi-step reasoning, ambiguous schema lookups, or strict audit constraints.",
      "At DevCraft, our production deployments utilize cyclic multi-agent graphs rather than linear chains. In a cyclic architecture, an orchestrator agent delegates subtasks to specialized worker nodes—such as a database query specialist, a semantic verification agent, and a compliance critic.",
      "By implementing deterministic checkpoints and structured tool calling via modern JSON schemas, errors can be detected and self-corrected in real time before reaching the user or production database.",
    ],
  },
  {
    slug: "automating-operations-lead-capture-loops",
    title: "Automating Operations: Turning Lead Capture & Invoicing into Autonomous Growth Loops",
    subtitle: "How modern high-growth businesses eliminate administrative friction and 10x pipeline conversion speed.",
    excerpt: "Stop losing revenue to slow quotation cycles and manual data entry. Discover how deterministic webhook triggers and smart forms automate customer intake.",
    category: "Operations & Automation",
    date: "August 2026",
    readTime: "6 min read",
    author: {
      name: "Stephen Clark",
      role: "Enterprise Client Delivery Director",
      avatar: "/assets/team/stephen-client-success.jpg",
    },
    tags: ["Automation", "Lead Capture", "Invoicing", "Webhooks", "CRM Sync"],
    content: [
      "In modern commerce, speed to lead is the single highest predictor of closed revenue. Prospects expect instant quotes, seamless digital agreements, and automated invoice delivery.",
      "By combining interactive multi-step intake questionnaires with automated Stripe and accounting APIs, our clients reduce quote turnaround times from days to seconds while eliminating human error completely.",
      "The result is a self-sustaining operational pipeline where inbound inquiries are scored, qualified, routed, and billed with zero manual intervention required.",
    ],
  },
  {
    slug: "8-weeks-to-mvp-pragmatic-roadmap",
    title: "8 Weeks to MVP: The Pragmatic Engineering Blueprint for Rapid Product Launches",
    subtitle: "A step-by-step framework to scope, build, and de-risk digital ventures without bloated budgets or delivery delays.",
    excerpt: "Shipping a viable product in two months requires relentless prioritization, reusable design tokens, and battle-tested Next.js starter templates.",
    category: "Product Strategy",
    date: "August 2026",
    readTime: "8 min read",
    author: {
      name: "Rean K.",
      role: "Founder & Chief Architect",
      avatar: "/assets/team/rean-founder.png",
    },
    tags: ["MVP", "Rapid Prototyping", "Next.js", "Venture Building", "Agile"],
    content: [
      "The biggest hazard facing founders and innovation teams is building too much before validating with paying customers. Scope creep turns agile four-week sprints into six-month marathons.",
      "Our 8-Week MVP blueprint isolates the core value hypothesis in Week 1, builds interactive clickable prototypes in Week 2, and focuses Weeks 3 through 7 on the critical primary user journey using Next.js and Supabase.",
      "By standardizing on proven architectural patterns and automated CI/CD test pipelines, teams launch with complete confidence and real customer validation.",
    ],
  },
  {
    slug: "sub-second-web-vitals-nextjs-15",
    title: "Mastering Next.js 15 App Router & React 19 Streaming SSR for 100/100 Web Vitals",
    subtitle: "A deep architectural breakdown of server components, image optimization pipelines, and zero-runtime CSS in Tailwind.",
    excerpt: "Achieving a perfect 100 on Google Lighthouse is not just an aesthetic trophy; it directly multiplies conversion rates and search rankings.",
    category: "Platform Architecture",
    date: "July 2026",
    readTime: "6 min read",
    author: {
      name: "Tariq A.",
      role: "Lead Solutions Architect",
      avatar: "/assets/team/team-lead-eng.png",
    },
    tags: ["Next.js", "React 19", "Web Vitals", "Performance", "Tailwind CSS"],
    content: [
      "With the release of Next.js 15 and React 19, web architecture has fundamentally shifted toward server-first rendering paradigms. By executing heavy computation and database queries at the server level, client bundles are reduced to minimal interactive shells.",
      "In our engineering benchmarks, combining streaming server components with modern zero-runtime CSS engines cuts Largest Contentful Paint (LCP) down to less than 800 milliseconds worldwide.",
      "When coupled with responsive image preloading and fixed-dimension aspect ratio containers, Cumulative Layout Shift (CLS) is entirely eliminated, guaranteeing an instantaneous, rock-solid browsing experience.",
    ],
  },
  {
    slug: "embedded-agency-delivery-model",
    title: "How Modern Agencies Eliminate Delivery Risk Through Embedded Technical Partnerships",
    subtitle: "Why world-class creative and marketing agencies are shifting away from internal dev departments in favor of white-label engineering squads.",
    excerpt: "Maintaining an in-house engineering team capable of building complex web platforms, AI tools, and mobile apps is economically inefficient for most creative agencies.",
    category: "Agency Insights",
    date: "June 2026",
    readTime: "5 min read",
    author: {
      name: "Tanvir Hassan",
      role: "Strategic Delivery Advisor",
      avatar: "/assets/team/tanvir-advisor.jpg",
    },
    tags: ["Agencies", "Embedded Squads", "White-Label", "Delivery SLAs"],
    content: [
      "Creative, branding, and digital agencies excel at strategy, brand positioning, and breathtaking visual design. Yet, when pitch victories demand high-complexity Next.js architectures, secure HIPAA healthcare platforms, or custom generative AI integrations, traditional agency staffing models fracture.",
      "The embedded delivery model provides agencies with an on-demand, white-label technical wing. Because our engineers plug directly into the agency's Slack channels and project boards under strict mutual NDAs, the agency presents a cohesive, full-service powerhouse to enterprise clients.",
      "Fixed sprint velocity guarantees and rigorous automated testing mean agency partners never bear the reputational risk of missed launch deadlines or brittle production code.",
    ],
  },
];
