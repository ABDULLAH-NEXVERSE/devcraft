export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  avatar?: string;
  specialization: string;
}

export interface CompanyPillar {
  title: string;
  tagline?: string;
  description: string;
  metric: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  email: string;
  type: string;
}

export interface ManifestoPrinciple {
  number: string;
  title: string;
  description: string;
}

// Dynamic founding year computation
const FOUNDING_YEAR = 2021;
export const yearsInOperation = Math.max(5, new Date().getFullYear() - FOUNDING_YEAR);

export const companyTeam: TeamMember[] = [
  {
    name: "Sir Usman",
    role: "Founder of Nexverse (Developer & Designer)",
    location: "Sheffield, United Kingdom",
    bio: "Visionary design and engineering leader heading the UK delivery arm of DevCraft / Nexverse. Specializing in high-performance digital product architectures, brand-aligned interface design, and client commercial delivery.",
    avatar: "/assets/team/usman-devops-lead.png",
    specialization: "Next.js Platforms, Product & UI/UX Design, Enterprise Systems Architecture",
  },
  {
    name: "Haider",
    role: "Chief Executive Officer (CEO)",
    location: "Lahore, Pakistan",
    bio: "Directing technical operations and full-stack delivery across the Pakistan engineering center. Ensuring precision execution, disciplined code standards, and seamless cross-timezone client coordination.",
    avatar: "/assets/team/haider.png",
    specialization: "Engineering Leadership, Technical Operations, Full-Stack Delivery Governance",
  },
  {
    name: "Abdullah",
    role: "Senior Full-Stack & Mobile Developer",
    location: "Lahore, Pakistan",
    bio: "Full-stack developer building robust mobile applications, backend microservices, and reactive web applications across React, Flutter, Node.js, and Laravel.",
    avatar: "/assets/team/abdullah.png",
    specialization: "Mobile Apps (Flutter/React Native), Node.js Microservices, Custom Web Engineering",
  },
];

export const companyData = {
  name: "DevCraft",
  parentEntity: "Nexverse",
  tagline: "Software, Crafted With Intent.",
  secondaryTagline: "Built by Two Teams, Delivered Around the Clock.",
  foundingYear: FOUNDING_YEAR,
  yearsInOperation: `${yearsInOperation} Years`,
  teamSize: `${companyTeam.length}-person team`,
  headcount: companyTeam.length,

  primaryCorporateStatement:
    "DevCraft is a full-stack software development company building web, mobile, custom software, e-commerce and AI/ML-powered products for logistics, procurement, compliance, e-commerce, fintech and healthcare businesses, delivered by two teams across the UK and Pakistan.",

  simpleStatement:
    "Tell us what you're building — we design, develop and support it, end to end.",

  footerStatement:
    "DevCraft designs, builds and maintains web, mobile and AI-powered software. Two teams, one delivery standard, around-the-clock support.",

  mission:
    "To deliver uncompromising software craftsmanship through a coordinated follow-the-sun model: designing with intent, engineering for scale, and supporting every product around the clock.",

  story:
    `DevCraft, part of Nexverse, has been building production software for ${yearsInOperation} years from Lahore, Pakistan, paired with design and development leadership in Sheffield, UK. We are not a disconnected freelance studio or an overseas outsource shop with no accountability; we are a unified, two-team development partner that ships and operates real, live software. Our own products—ProRota, NexEats, and NexRider—prove every day that we build software that works under real production pressure.`,

  twoTeamModel: {
    headline: "Two Teams. One Delivery Standard. 24/7 Coverage.",
    description:
      "By coordinating our engineering center in Lahore, Pakistan with our product and design studio in Sheffield, UK, DevCraft operates without the typical overnight downtime. When design and scoping wind down in the UK, engineering and testing continue in Pakistan—enabling round-the-clock progress and instantaneous support response.",
    ukOffice: {
      location: "Sheffield, United Kingdom",
      lead: "Sir Usman (Founder of Nexverse, Developer & Designer)",
      focus: "Client Strategy, Product UI/UX Design & Architectural Governance",
    },
    pakistanOffice: {
      location: "Lahore, Pakistan",
      lead: "Haider (CEO) & Abdullah (Developer)",
      focus: "Full-Stack Development, Mobile Engineering & 24/7 Support Operations",
    },
  },

  manifesto: [
    {
      number: "01",
      title: "Real Shipped Products, Not Just Mockups",
      description:
        "We build and maintain our own live platforms (ProRota, NexEats). Our clients benefit from battle-tested codebases and production-proven patterns.",
    },
    {
      number: "02",
      title: "Follow-The-Sun Delivery",
      description:
        "Two coordinated teams across UK and Pakistan time zones provide seamless development momentum and 24/7 technical incident response.",
    },
    {
      number: "03",
      title: "Honest, Transparent Scoping",
      description:
        "Tell us what you are building. We scope it accurately, provide honest architecture feedback, and execute without hidden costs or unverified promises.",
    },
    {
      number: "04",
      title: "Long-Term Partnership & Maintenance",
      description:
        "Every engagement includes a path to continuous maintenance, security patching, hosting management, and feature enhancements long past launch.",
    },
  ] as ManifestoPrinciple[],

  stats: [
    { value: `${yearsInOperation}+`, label: "Years in Operation" },
    { value: "2", label: "Global Hubs (UK & PK)" },
    { value: "24/7", label: "Follow-the-Sun Coverage" },
    { value: "99.99%", label: "Platform Uptime SLA" },
  ],

  pillars: [
    {
      title: "Two-Team 24/7 Delivery",
      tagline: "UK & Pakistan Coordinated Hubs",
      description:
        "Design and engineering run seamlessly across time zones, keeping development moving and support active around the clock.",
      metric: "24/7 Delivery",
    },
    {
      title: "Proven Production Track Record",
      tagline: "Own Shipped Platforms",
      description:
        "We build and operate ProRota, NexEats, and NexRider alongside client software. Proof we build real, live products, not prototypes.",
      metric: "Live Products",
    },
    {
      title: "Broad & Modern Tech Stack",
      tagline: "Next.js, Flutter, Laravel, Python",
      description:
        "From native mobile to high-concurrency backends and machine learning, we select the right tool for the problem, not a one-size-fits-all hammer.",
      metric: "Full-Stack",
    },
    {
      title: "Design-to-Support Handoff",
      tagline: "End-to-End Partnership",
      description:
        "We don't hand over code and disappear. We maintain, patch, monitor, and scale software as an enduring technical partner.",
      metric: "Full Lifecycle",
    },
  ] as CompanyPillar[],

  team: companyTeam,

  locations: [
    {
      city: "Sheffield",
      country: "United Kingdom",
      address: "Sheffield, UK (Nexverse HQ)",
      email: "contact@nexverse.co.uk",
      type: "Product Design, Architecture & Commercial Hub",
    },
    {
      city: "Lahore",
      country: "Pakistan",
      address: "Lahore, Pakistan (DevCraft Engineering Hub)",
      email: "contact@nexverse.co.uk",
      type: "Full-Stack Engineering & 24/7 Technical Operations",
    },
  ],

  contact: {
    primaryEmail: "contact@nexverse.co.uk",
    generalInquiry: "contact@nexverse.co.uk",
    sheffieldHub: "Sheffield, United Kingdom",
    lahoreHub: "Lahore, Pakistan",
  },
};
