# DevCraft Project Analysis & Activity Tracker (`track activity.md`)

> **Purpose:** Detailed reference containing complete analysis of `build_guide (1).html`, current codebase architecture, assets inventory, component mapping, and transformation plan. Use this file to avoid re-reading or re-analyzing the full codebase.

---

## 1. Executive Summary & Core Positioning

### Real Company Background & Structure
- **Entity:** DevCraft (part of Nexverse). 5 years in operation from Lahore, Pakistan (founding date ~2021).
- **Two Delivery Teams:**
  1. **Sheffield, UK:** Usman, Founder of Nexverse (Developer & Designer).
  2. **Lahore, Pakistan:** Haider (Co-Founder), Abdullah (Developer).
- **Core Model:** Follow-the-sun 24/7 delivery and support across UK and Pakistan time zones.
- **Approved Tagline:** `"Software, Crafted With Intent."`
- **Secondary Tagline:** `"Built by Two Teams, Delivered Around the Clock."`
- **Primary Positioning Statement:**
  > *"DevCraft is a full-stack software development company building web, mobile, custom software, e-commerce and AI/ML-powered products for logistics, procurement, compliance, e-commerce, fintech and healthcare businesses, delivered by two teams across the UK and Pakistan."*
- **Simple Homepage Statement:**
  > *"Tell us what you're building — we design, develop and support it, end to end."*
- **Footer Statement:**
  > *"DevCraft designs, builds and maintains web, mobile and AI-powered software. Two teams, one delivery standard, around-the-clock support."*

---

## 2. Flagship Own Products (Top Proof Points)

Live, operating software built and operated by DevCraft/Nexverse:
1. **ProRota** (`prorota.app`)
   - **Tagline:** Workforce Management, HR Vetting & CRM
   - **Summary:** All-in-one platform for service businesses (security, cleaning, healthcare, field services): intelligent staff scheduling, GPS attendance, SIA/BS7858 compliance and vetting tracking, payroll integration, AI workforce assistant, native mobile apps.
   - **Tags:** Workforce Scheduling, Compliance & Vetting, AI Assistant, Mobile Apps, CRM
   - **Primary CTA:** Explore ProRota (`https://prorota.app`) / Talk to us about a similar platform.
2. **NexEats** (`nexeats.app`)
   - **Tagline:** Food Delivery Marketplace
   - **Summary:** Consumer food-delivery app connecting diners with local restaurants: cuisine browsing, live order tracking, restaurant partner onboarding, rider network. Built for Algerian market with bilingual (French/Arabic) experience.
   - **Tags:** Marketplace, Live Order Tracking, Restaurant Dashboard, iOS & Android
   - **Primary CTA:** Explore NexEats (`https://nexeats.app`) / Talk to us about a similar marketplace.
3. **NexRider** (App Store / Companion)
   - **Tagline:** Delivery Rider App
   - **Summary:** Companion rider app for NexEats: active delivery management, real-time earnings tracking, rider profile and vehicle details.
   - **Tags:** Rider Ops, Earnings Tracking, iOS & Android
   - **Primary CTA:** See it in action / Talk to us about a similar logistics app.

---

## 3. Confirmed Client & Reference Projects

### Confirmed Client Logos already present in `public/assets/clients/`:
- `ab3-medical.svg` (AB3 Medical — Sports Biometrics & Clinical Passport)
- `ahlmark.svg` (Ahlmark Shipping — Maritime Logistics)
- `airco.svg` (Airco Commercial — Industrial Telemetry & Refrigeration)
- `coconut-cosmetics-logo-full.png` / `.png` (Coconut Cosmetics — E-Commerce)
- `lambson.svg` (Lambson Building Products — Manufacturing ERP)
- `limitless.svg` (Limitless — Creative SaaS & Billing)
- `odlings.svg` (Odlings)
- `prorota.svg` (ProRota Healthcare / Staffing)
- `sirius-security.svg` (Sirius Security)
- `unify-pro.svg` (Unify Pro)
- `virtually-golf.svg` (Virtually Golf — Simulator Telemetry)
- `westwood.svg` (Westwood / Atelyra Wealth)
- `ymca.svg` (YMCA — Community & Non-Profit)
- `nexverse-client-1.webp` through `nexverse-client-8.webp`

### Confirmed Live Reference Projects from Build Guide Section 9:
1. **Kamraj Enterprises Pvt. Ltd.** (`kamrajenterprises.com`): Global scrap metal indenting house (ferrous & non-ferrous scrap since 1985, sourcing USA/UK/Europe/Africa/Brazil for steel mills across South Asia). WordPress/Elementor build. Industry: Logistics / Trade.
2. **Prime Commodities FZE** (`primecommoditiesfze.com`): UAE-based (Ajman Free Zone) global scrap metal trading serving steel mills and foundries. WordPress/Elementor build. Industry: Logistics / Trade.
3. **Duralean UK** (`duraleanuk.com`): UK procurement/outsourcing company. Industry: Procurement & Compliance.
4. **fasai.uk** (`fasai.uk`): WordPress/Elementor client site with custom widgets.
5. **Proforce Technical** (`proforce-technical.vercel.app`): Next.js build.
6. **Jay Capture Studio** (`jay-capture-studio.vercel.app`): Next.js build.
7. **Taltex** (`taltex-website.vercel.app/en`): Next.js build, multi-language.
8. **Corestone** (`corestone-website-blue.vercel.app`): Next.js build.

---

## 4. Required Navigation & Site Architecture

### Top Navigation:
- **Logo:** DevCraft (`/newlogo.png`)
- **Services** (`/services` with hover megamenu/dropdown for 7 services)
- **Industries** (`/industries` with dropdown for 5 industries)
- **Products** (`/products` — ProRota, NexEats, NexRider)
- **Work / Portfolio** (`/work`)
- **Technologies** (`/technologies`)
- **About Us** (`/about` or `/about-us`)
- **Contact** (`/contact`)
- **Persistent Header Button:** `"Get a Quote"` (accent emerald `#18CB96`, visible on desktop and mobile).

---

## 5. Required 7 Services Specification (Section 6)

1. **Web Development** (`/services/web-development`)
   - Marketing sites, web apps, and portals built on WordPress, Laravel, Next.js, and Vite/React with CMS and performance built in.
2. **Mobile App Development** (`/services/mobile-app-development`)
   - Native (Kotlin) and cross-platform (Flutter, React Native) apps for iOS and Android; reference NexRider and client apps as proof.
3. **Custom Software Development** (`/services/custom-software-development`)
   - Bespoke backend systems, internal tools, and enterprise platforms; reference ProRota (scheduling, compliance, CRM) as proof.
4. **E-commerce Development** (`/services/ecommerce-development`)
   - Storefronts, marketplaces, and ordering platforms; reference NexEats (multi-vendor marketplace) and Coconut Cosmetics as proof.
5. **UI/UX Design** (`/services/ui-ux-design`)
   - Research, wireframes, and high-fidelity design in Figma and Canva, handed off design-system-ready for development.
6. **AI & ML Solutions** (`/services/ai-ml-solutions`)
   - Model training and applied AI features (Python) embedded into products — recommendation, automation, and assistant-style features.
7. **Maintenance & Support** (`/services/maintenance-support`)
   - Ongoing updates, monitoring, security patching, hosting/cPanel management, and 24/7 issue response across both teams.

---

## 6. Required 5 Industries Specification (Section 7)

1. **Logistics & Delivery** (`/industries/logistics-delivery`)
   - Rider and driver apps, real-time GPS tracking, delivery marketplaces. References: NexEats, NexRider, Ahlmark Shipping.
2. **Procurement & Compliance** (`/industries/procurement-compliance`)
   - Internal tools, vetting/compliance tracking, workflow & documentation systems. References: ProRota (BS7858/SIA vetting), Duralean UK.
3. **E-commerce & Retail** (`/industries/ecommerce-retail`)
   - Storefronts, checkout, inventory, and multi-vendor marketplace builds. References: NexEats, Coconut Cosmetics.
4. **Fintech** (`/industries/fintech`)
   - Secure, compliant web & mobile platforms for financial products — payments, dashboards, reporting. References: Limitless, Atelyra Wealth.
5. **Healthcare** (`/industries/healthcare`)
   - Scheduling, patient/staff management, and compliant record-handling systems. References: ProRota Healthcare, AB3 Medical.

---

## 7. Required Technologies Specification (Section 10)

- **Frontend:** React, Next.js, Vite
- **Backend:** Node.js, Laravel
- **Mobile:** Flutter, React Native, Kotlin
- **CMS / Web platforms:** WordPress
- **AI / ML:** Python (model training and applied AI features)
- **Infrastructure:** cPanel hosting & deployment, AWS, Cloudflare
- **Design:** Figma, Canva
- **Growth:** Technical SEO

---

## 8. Dynamic Data Rules (Crucial Developer Instruction)

1. **Dynamic Services:** Driven from single array in `data/servicesData.ts` (slug, title, subtitle, summary, icon, tech tags, problem, process, case study, deliverables).
2. **Dynamic Products:** Driven from single array in `data/productsData.ts` (slug, name, tagline, description, tags, features, screenshots/mockups, live links).
3. **Dynamic Industries:** Driven from single array in `data/industriesData.ts` (slug, title, icon, summary, client problem, DevCraft approach, related products/case studies).
4. **Dynamic Team:** Single team array in `data/companyData.ts`.
   - Team headcount is derived dynamically from `team.length` (never hardcoded as a static string).
   - Years in operation dynamically computed from founding year (2021).
   - Core members:
     - Sir Usman (Founder of Nexverse, Developer & Designer — Sheffield, UK)
     - Haider (CEO, DevCraft — Lahore, Pakistan)
     - Abdullah (Developer, DevCraft — Lahore, Pakistan)
5. **Dynamic Technologies:** Single array in `data/technologiesData.ts` (categories, items, icon, description/what we use it for).

---

## 9. Contact & Lead Generation Requirements (Appendix B)

Two distinct conversion paths:
1. **Quote Request Form:**
   - Name (Required)
   - Company name (Optional)
   - Email (Required)
   - Phone number (Optional)
   - Country (Required)
   - Project type: Web / Mobile / Custom Software / E-commerce / UI-UX / AI-ML / Maintenance (Required)
   - Industry: Logistics / Procurement / E-commerce / Fintech / Healthcare / Other (Optional)
   - Budget range (Required)
   - Timeline / target launch date (Required)
   - Project description (Required)
   - Upload brief/spec/reference files (Optional file upload)
   - How did you hear about us? (Optional)
   - Consent / privacy checkbox (Required)
2. **Free Consultation Booking:**
   - Name (Required)
   - Email (Required)
   - Preferred date & time picker (Required)
   - Time zone (Auto-detected, editable) (Required)
   - What would you like to discuss? (Optional)
   - Consent / privacy checkbox (Required)
3. **Direct Channels:**
   - Email: `contact@nexverse.co.uk`
   - Offices: Lahore, Pakistan & Sheffield, UK.

---

## 10. Activity Log & Findings: Verified Public Work, Industry Mapping & Tech Logos

> **Update Date:** September 2026  
> **Status:** Completed & Verified  

### A. Technology Logos & Symbols Integration
- **Objective:** Add official technology logos/symbols (Next.js, Python, React, Vite, Node.js, Laravel, Flutter, Kotlin, WordPress, Figma, Canva, cPanel, AWS, etc.) across the site.
- **Component Created:** `components/icons/TechLogos.tsx`
  - Encapsulates pixel-accurate SVG vector symbols for all primary stack technologies:
    - **Frontend:** Next.js (`NextjsLogo`), React (`ReactLogo`), Vite (`ViteLogo`), Tailwind CSS (`TailwindLogo`), TypeScript (`TypeScriptLogo`)
    - **Backend & AI:** Python (`PythonLogo`), Node.js (`NodeLogo`), Laravel (`LaravelLogo`)
    - **Mobile:** Flutter (`FlutterLogo`), Kotlin (`KotlinLogo`)
    - **Platforms & Infrastructure:** WordPress (`WordPressLogo`), cPanel (`CPanelLogo`), AWS (`AWSLogo`)
    - **Design:** Figma (`FigmaLogo`), Canva (`CanvaLogo`)
- **Pages & Sections Enhanced:**
  - `app/technologies/page.tsx`: Each technology card in every category (Frontend, Backend, Mobile, CMS, AI/ML, Cloud & Infrastructure, Design) renders its official brand logo alongside its description and capabilities.
  - `components/sections/TechStripSection.tsx`: Homepage interactive tech marquee/strip displays authentic brand symbols within each pill tag.

---

### B. Live Public URL Research & Industry Categorization Matrix

All 9 public URLs provided were fetched, analyzed, and categorized into DevCraft's 5 core service industries. All previous placeholder/dummy projects (Ahlmark, Airco, Lambson, Limitless, PeakMind, Postvix) have been completely removed from the active Work portfolio.

| # | Project Name | Live URL | Assigned Industry | Technical Stack | Authentic Asset Path | Core Value Delivered & Findings |
|---|---|---|---|---|---|---|
| 1 | **Kamraj Enterprises** | `https://kamrajenterprises.com/` | **Logistics & Delivery** (Trade & Supply Chain) | WordPress, Porto Theme, PHP, Custom Post Types | `/assets/kamrajenterprises.jpg` | Established in 1985. Leading scrap metal indenting house connecting steel mills in South Asia with suppliers across 5 continents (USA, UK, Europe, Africa, Brazil). High-volume ferrous and non-ferrous international commodities trading. |
| 2 | **Prime Commodities FZE** | `https://www.primecommoditiesfze.com/` | **Logistics & Delivery** (Global Commodities Trade) | WordPress, Elementor, PHP, CSS Modules | `/assets/primecommodities.jpg` | Ajman Free Zone (UAE) based multinational trading firm supplying prime foundries and secondary steelmakers with heavy melting scrap, stainless steel, and non-ferrous commodities. Includes full specification inquiry and shipment quote engine. |
| 3 | **Duralean UK** | `https://duraleanuk.com/` | **Procurement & Compliance** (Industrial Sourcing) | WordPress, Elementor, PHP, Form Engine | `/assets/duralean.jpg` | Global procurement & engineering outsourcing partner. Manages cross-border vendor vetting, ISO compliance, and supply chain fulfillment across 17+ heavy industrial categories (ATEX equipment, specialized building materials, and geosynthetics). |
| 4 | **Jay Samuel Studio** | `https://jay-capture-studio.vercel.app/` | **E-commerce & Retail** (Luxury Creative Studio) | Vite, React, Tailwind CSS, Cloudinary CDN | `/assets/jay-samuel-studio.jpg` | Bespoke UK wedding, commercial, and editorial photography platform. Features dynamic masonry galleries, editorial client lookbooks, and high-conversion booking workflows powered by cloud media delivery. |
| 5 | **Tal-encia** | `https://tal-encia.com/` | **Fintech** (Strategic Advisory & ERP) | WordPress, Elementor, PHP, SVG Animations | `/assets/tal-encia.png` | Global business advisory and digital transformation firm operating across three key pillars: Strategic Advisory, Digital Ecosystems (ERP/CRM/automation), and Performance Marketing. Serves international enterprises in financial structuring and operational scaling. |
| 6 | **Taltex Geosynthetics** | `https://taltex-website.vercel.app/en` | **Procurement & Compliance** (Industrial Manufacturing) | Next.js, React, Tailwind CSS, i18n | `/assets/taltex.jpg` | Algerian industrial manufacturer of high-tenacity non-woven geotextiles (100–1200 g/m²) aligned with ISO 9001 standards. Trilingual platform (English, French, Arabic) engineered with technical spec sheets, civil engineering product catalogs, and RFQ generation. |
| 7 | **Corestone Facilities Management** | `https://corestone-website-blue.vercel.app/` | **Procurement & Compliance** (Estates & Compliance) | Next.js, React, Tailwind CSS, Lucide Icons | `/assets/corestone.png` | Commercial facilities management across Northern England (Sheffield, Leeds, Manchester). Manages M&E maintenance, fire safety compliance, 24/7 helpdesk dispatch, and estates security for corporate clients. |
| 8 | **ProRota** | `https://www.prorota.app/` | **Procurement & Compliance** / **Healthcare** | Next.js, React, Node.js, Python AI, PostgreSQL | `/assets/Prorota.png` | Flagship DevCraft workforce operating system. Features BS 7858 background vetting, SIA license verification, GPS geofenced clock-in, automated shift scheduling, and AI-driven staff allocation for security, healthcare, and facility contractors. |
| 9 | **NexEats** | `https://www.nexeats.app/` | **Logistics & Delivery** / **E-commerce & Retail** | Next.js, Flutter, Kotlin, WebSockets | `/assets/nexeat.png` & `/assets/nexrider.jpg` | Full-scale food marketplace ecosystem with real-time GPS courier tracking, multi-vendor merchant dashboards, and companion native Android/iOS rider dispatch system (NexRider). Built for high-volume multi-lingual local delivery. |

---

### C. Codebase & Data Layer Modifications

1. **`src/data/portfolioData.ts`**:
   - Stripped all legacy dummy projects.
   - Inserted the 9 live projects with comprehensive technical documentation: problem statement, technical solution, quantifiable results, live URLs, client brand assets, and technology tags.
2. **`src/data/productsData.ts`**:
   - Replaced placeholder assets with user-provided high-res product files:
     - ProRota: `/assets/Prorota.png`
     - NexEats: `/assets/nexeat.png`
     - NexRider: `/assets/nexrider.jpg`
3. **`src/data/industriesData.ts`**:
   - Re-aligned all 5 core industry pages (`logistics-delivery`, `procurement-compliance`, `ecommerce-retail`, `fintech`, `healthcare`) to directly reference and showcase the 9 verified live client sites.
4. **`src/data/homeData.ts`**:
   - Marquee client logos (`marqueeClients`) reverted back to the previous established client logos list (`Ahlmark Shipping`, `Pro-Rota Healthcare`, `AB3 Medical`, `Airco Commercial`, `Lambson Building Products`, `Coconut Cosmetics`, `Limitless`, `Virtually Golf`, `YMCA`, `Unify Pro`, `Westwood`, `Sirius Security`) per user preference for the homepage ticker.
5. **`app/work/page.tsx` & `app/work/[slug]/page.tsx`**:
   - Enhanced project cards with live client logo chips, industry category badges, direct "Visit Live" links (`target="_blank"`), and technical deep-dive case study links.
6. **`components/sections/CaseStudiesSection.tsx`**:
   - Made case study counts dynamic (`portfolioData.length`).
   - Integrated custom client SVG logos and expanded the tab filter to support all 9 projects seamlessly.


