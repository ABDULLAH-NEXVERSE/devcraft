export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  technologies: string[];
}

export interface CareerPerk {
  title: string;
  description: string;
  icon: string;
}

export const careerPerks: CareerPerk[] = [
  {
    title: "Craft Digital Excellence Beyond Boundaries",
    description:
      "Join a culture where innovation isn't just a service—it's our defining passion. Push technological possibilities from Sheffield Epic House to global edge nodes.",
    icon: "Sparkles",
  },
  {
    title: "Remote-First Flexibility",
    description: "Work from anywhere across the UK and Europe with dedicated home-office stipends and flexible working cadences.",
    icon: "Laptop",
  },
  {
    title: "Deep Technical Craftsmanship",
    description: "Zero bureaucracy or technical debt. We write clean, strongly-typed codebases backed by automated CI/CD and rigorous peer pairing.",
    icon: "Code",
  },
  {
    title: "Cutting-Edge AI & Next-Gen Tooling",
    description: "Direct access to frontier AI models, specialized cloud clusters, and modern monorepo development environments.",
    icon: "Cpu",
  },
  {
    title: "Continuous Learning Budget",
    description: "£2,500 annual budget for conferences, technical certifications, books, and experimental venture side-projects.",
    icon: "GraduationCap",
  },
  {
    title: "Premium Health & Wellbeing",
    description: "Comprehensive private medical insurance, mental health support, gym memberships, and annual wellness sabbaticals.",
    icon: "HeartPulse",
  },
];

export const careersData: JobPosition[] = [
  {
    id: "lead-ai-engineer",
    title: "Principal Agentic AI & LLM Systems Engineer",
    department: "AI & Machine Learning",
    location: "London / Remote (UK & Europe)",
    type: "Full-Time",
    experience: "5+ Years in ML/AI Systems",
    summary:
      "Lead the design and implementation of autonomous multi-agent pipelines, LangGraph state machines, and high-density vector retrieval architectures for enterprise clients.",
    responsibilities: [
      "Architect cyclic tool-use workflows and multi-agent coordination topologies.",
      "Design robust evaluation benchmarks to detect and prevent LLM hallucinations.",
      "Integrate vector databases (Pinecone, pgvector) with multi-tenant data pipelines.",
      "Collaborate directly with enterprise client architects under strict SLAs.",
    ],
    requirements: [
      "Deep expertise with Python, FastAPI, LangGraph, and modern LLM APIs (Anthropic, OpenAI).",
      "Proven track record deploying RAG and autonomous agent systems to production.",
      "Strong understanding of embeddings, vector similarity search, and semantic re-ranking.",
      "Passion for building reliable, deterministic AI systems over proof-of-concept demos.",
    ],
    technologies: ["Python", "LangGraph", "FastAPI", "Pinecone", "Claude 3.5", "Docker"],
  },
  {
    id: "senior-nextjs-architect",
    title: "Staff Next.js & Full-Stack Platform Architect",
    department: "Platform Engineering",
    location: "Sheffield / Remote (UK & Europe)",
    type: "Full-Time",
    experience: "6+ Years Full-Stack",
    summary:
      "Own the technical architecture of high-scale web platforms built with Next.js App Router, React 19, TypeScript, and distributed edge cloud infrastructure.",
    responsibilities: [
      "Architect high-throughput web platforms achieving 100/100 Core Web Vitals.",
      "Implement design token systems using Tailwind CSS and modern component primitives.",
      "Design resilient backend APIs in TypeScript/Node.js or Go with Redis caching.",
      "Mentor senior engineers and lead technical sprint deliveries for agency partners.",
    ],
    requirements: [
      "Mastery of Next.js App Router, Server Components, Streaming SSR, and Turbopack.",
      "Expert knowledge of web performance tuning, CLS/LCP optimization, and edge networks.",
      "Strong proficiency with TypeScript, PostgreSQL, Prisma/Drizzle, and Redis.",
      "Experience leading Agile sprints in high-velocity agency or venture environments.",
    ],
    technologies: ["Next.js 15+", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
  },
  {
    id: "lead-mobile-engineer",
    title: "Lead Mobile Engineer (React Native & Expo)",
    department: "Product Craft",
    location: "Remote (UK & Europe)",
    type: "Full-Time",
    experience: "5+ Years Mobile",
    summary:
      "Build fluid, high-performance cross-platform mobile applications for healthcare, sports science, and fintech clients using React Native and native bridges.",
    responsibilities: [
      "Develop iOS and Android apps with 60fps gesture animations and offline-first storage.",
      "Write native modules in Swift (iOS) and Kotlin (Android) when hardware APIs require direct access.",
      "Set up automated CI/CD deployment pipelines to Apple TestFlight and Google Play Internal tracks.",
      "Ensure rigorous biometric data privacy and compliance across mobile builds.",
    ],
    requirements: [
      "Extensive experience shipping commercial mobile applications with React Native and Expo.",
      "Familiarity with native iOS/Android toolchains (Xcode, Android Studio).",
      "Strong grasp of state management, SQLite/WatermelonDB offline storage, and push notifications.",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Swift", "Kotlin", "Fastlane"],
  },
  {
    id: "delivery-manager-agencies",
    title: "Technical Delivery Lead (Agency Partnerships)",
    department: "Client Delivery",
    location: "London / Hybrid",
    type: "Full-Time",
    experience: "4+ Years in Technical Delivery",
    summary:
      "Manage client-facing delivery schedules, scope definitions, and sprint milestones for our embedded agency partnership accounts.",
    responsibilities: [
      "Act as the primary technical liaison between creative agency partners and DevCraft engineering squads.",
      "Translate agency creative briefs and Figma files into detailed sprint backlogs in Linear.",
      "Track sprint velocity, identify scope risks early, and ensure zero-delay delivery guarantees.",
    ],
    requirements: [
      "Background in digital agency project management, technical production, or Scrum leadership.",
      "Strong conversational understanding of modern web, mobile, and cloud architectures.",
      "Exceptional communication skills and high emotional intelligence.",
    ],
    technologies: ["Linear", "Slack", "Figma", "Notion", "GitHub"],
  },
];
