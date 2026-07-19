export type DetailContent = {
  title: string;
  eyebrow?: string;
  overview: string;
  whatWeDeliver?: string[];
  capabilities?: string[];
  technologies?: string[];
  useCases?: string[];
  benefits?: string[];
};

const data: Record<string, DetailContent> = {
  /* -------- WHY CHOOSE -------- */
  "Enterprise Architecture": {
    title: "Enterprise Architecture",
    eyebrow: "Why Thrive Tech",
    overview:
      "We design software the way enterprises actually run — layered, modular, secure, and built to evolve for the next decade. Every solution is engineered on proven architectural patterns that decouple concerns, isolate risk and make change safe.",
    whatWeDeliver: [
      "Domain-driven design & bounded contexts",
      "Microservices or modular monolith — right-sized for you",
      "Event-driven & message-based integration",
      "Clear API contracts and versioning strategy",
      "Reference architecture, ADRs and diagrams",
      "Scalability, resilience and DR planning",
    ],
    capabilities: [
      "Multi-tenant SaaS foundations",
      "Zero-trust security model",
      "Observability by default",
      "Cloud-native infrastructure",
    ],
    benefits: [
      "Systems that scale without rewrites",
      "Faster onboarding for new engineers",
      "Lower total cost of ownership",
      "Confidence when the business changes",
    ],
  },
  "Business-first Approach": {
    title: "Business-first Approach",
    eyebrow: "Why Thrive Tech",
    overview:
      "Technology only matters if it moves business metrics. Every engagement starts with your outcomes — revenue, cost, retention, speed — and every decision traces back to them.",
    whatWeDeliver: [
      "Outcome-driven discovery workshops",
      "KPI mapping and success metrics",
      "Prioritized backlog aligned to ROI",
      "Executive dashboards and progress reporting",
    ],
    benefits: ["Investment tied to measurable value", "Fewer wasted sprints", "Clear go/no-go decisions"],
  },
  "Modern Technologies": {
    title: "Modern Technologies",
    eyebrow: "Why Thrive Tech",
    overview:
      "We use proven, well-supported modern stacks — never bleeding-edge for its own sake. Our choices maximize hiring pool, community support and long-term maintainability.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    benefits: ["Future-proof codebase", "Easy hiring & handover", "Fast feature delivery"],
  },
  "Cloud Ready": {
    title: "Cloud Ready",
    eyebrow: "Why Thrive Tech",
    overview:
      "Every system we build is cloud-native from day one — containerized, horizontally scalable, and designed to run on AWS, Azure or GCP with equal ease.",
    capabilities: ["Auto-scaling infrastructure", "Managed databases & caching", "Multi-region deployment", "Serverless where it fits"],
    benefits: ["Pay only for what you use", "Elastic scale during peaks", "Global low-latency delivery"],
  },
  "Scalable Systems": {
    title: "Scalable Systems",
    eyebrow: "Why Thrive Tech",
    overview:
      "We architect for the load you'll have in three years, not just today. Horizontal scaling, caching layers, async processing and database partitioning are baked in.",
    capabilities: ["Load testing & capacity planning", "Read replicas & sharding", "CDN & edge caching", "Queue-based workloads"],
    benefits: ["Zero-downtime growth", "Predictable performance at scale"],
  },
  "Secure Development": {
    title: "Secure Development",
    eyebrow: "Why Thrive Tech",
    overview:
      "Security isn't a phase — it's a discipline applied at every commit. We follow OWASP guidelines, run static and dynamic analysis, and design with least-privilege by default.",
    whatWeDeliver: [
      "Threat modeling & security reviews",
      "OWASP Top 10 mitigations",
      "Encrypted data in transit and at rest",
      "Role-based access control & audit logs",
      "Secret management & key rotation",
      "Penetration testing coordination",
    ],
    benefits: ["Reduced breach risk", "Compliance readiness", "Customer trust"],
  },
  "Agile Delivery": {
    title: "Agile Delivery",
    eyebrow: "Why Thrive Tech",
    overview:
      "One or two-week sprints with weekly demos, transparent tracking and continuous deployment. You always know what's being built and what's shipping next.",
    whatWeDeliver: ["Sprint planning & backlog grooming", "Weekly demos & retrospectives", "Live delivery dashboards", "Continuous integration & deployment"],
    benefits: ["Predictable velocity", "Early feedback loops", "No end-of-project surprises"],
  },
  "Comprehensive Documentation": {
    title: "Comprehensive Documentation",
    eyebrow: "Why Thrive Tech",
    overview:
      "Every project ships with architecture diagrams, API references, runbooks and onboarding guides — so your team can own the system with confidence.",
    whatWeDeliver: ["Architecture Decision Records", "OpenAPI / Swagger specs", "Runbooks & operational playbooks", "Onboarding & developer guides"],
    benefits: ["Zero-friction handover", "Fewer support incidents"],
  },
  "Ongoing Support": {
    title: "Ongoing Support",
    eyebrow: "Why Thrive Tech",
    overview:
      "SLA-backed monitoring, patching, bug fixes and iterative improvements. We stay on-call so your team can focus on the business.",
    capabilities: ["24/7 monitoring & alerting", "Guaranteed response SLAs", "Security patch management", "Feature evolution & tuning"],
    benefits: ["Higher uptime", "Faster incident resolution"],
  },
  "Long-term Partnership": {
    title: "Long-term Partnership",
    eyebrow: "Why Thrive Tech",
    overview:
      "We measure success in years, not sprints. Many of our clients are five-year partners — because we invest in understanding their business as deeply as our own.",
    benefits: ["Institutional knowledge that compounds", "Faster iteration over time", "A true extension of your team"],
  },

  /* -------- SERVICES -------- */
  "Website Development": {
    title: "Website Development",
    eyebrow: "Service",
    overview:
      "Websites are your always-on storefront. We design and engineer high-performance sites — from landing pages to global enterprise platforms — that load fast, rank well and convert.",
    whatWeDeliver: [
      "Custom design & motion",
      "SEO-first information architecture",
      "Headless CMS or static generation",
      "Analytics, A/B testing & conversion tracking",
      "Multi-language & multi-region support",
      "Accessibility (WCAG) compliance",
    ],
    capabilities: ["Core Web Vitals optimization", "Edge & CDN delivery", "Third-party integrations", "Ongoing content workflows"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Sanity", "Contentful", "Vercel"],
    useCases: ["Corporate & marketing sites", "E-commerce storefronts", "Product & campaign launches", "Investor & enterprise portals"],
    benefits: ["Higher conversions", "Stronger brand perception", "Better search visibility", "Lower cost-per-acquisition"],
  },
  "Software Development": {
    title: "Software Development",
    eyebrow: "Service",
    overview:
      "Custom SaaS platforms and internal tools engineered for scale, reliability and long-term evolution. We ship production-grade systems, not prototypes.",
    whatWeDeliver: ["Full-stack SaaS platforms", "Internal admin & operations tools", "Multi-tenant architectures", "Integration & data pipelines"],
    capabilities: ["API-first design", "Role-based access control", "Automated testing", "Continuous deployment"],
    technologies: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "React", "Docker"],
    benefits: ["Automated operations", "Faster decisions", "Systems that fit your workflow"],
  },
  "Mobile Applications": {
    title: "Mobile Applications",
    eyebrow: "Service",
    overview:
      "Native-quality iOS and Android apps built with shared codebases where it makes sense, and fully native when performance demands it.",
    whatWeDeliver: ["Cross-platform apps (React Native)", "Native iOS (Swift) & Android (Kotlin)", "Offline-first data sync", "Push notifications & deep linking", "App Store & Play Store submission"],
    technologies: ["React Native", "Swift", "Kotlin", "Expo", "Firebase"],
    benefits: ["Reach customers on any device", "Higher engagement via push", "Offline productivity"],
  },
  "ERP Development": {
    title: "ERP Development",
    eyebrow: "Service",
    overview:
      "Modular ERP systems tailored to your workflows — finance, operations, inventory, HR — with a unified data model and role-based access.",
    whatWeDeliver: ["Finance & accounting modules", "Inventory & warehouse management", "Procurement & vendor management", "Production planning", "Reporting & analytics"],
    benefits: ["One source of truth", "Reduced manual work", "Real-time visibility across the business"],
  },
  "CRM Development": {
    title: "CRM Development",
    eyebrow: "Service",
    overview:
      "Custom CRMs for sales, marketing and service teams — with automation, pipeline tracking and reporting tailored to how your team actually sells.",
    whatWeDeliver: ["Lead & pipeline management", "Marketing automation & campaigns", "Ticketing & service workflows", "Reporting dashboards"],
    benefits: ["Predictable pipeline", "Higher retention", "Data-driven sales decisions"],
  },
  "HRMS": {
    title: "HRMS",
    eyebrow: "Service",
    overview:
      "End-to-end people systems covering hiring, onboarding, payroll, attendance and performance — with self-service portals for employees.",
    whatWeDeliver: ["Applicant tracking", "Onboarding workflows", "Payroll & compliance", "Attendance & leave", "Performance reviews"],
    benefits: ["Empowered HR teams", "Engaged employees", "Compliance built-in"],
  },
  "Artificial Intelligence": {
    title: "Artificial Intelligence",
    eyebrow: "Service",
    overview:
      "Practical AI that ships to production — LLM applications, ML models, NLP pipelines and computer vision solutions engineered for reliability and cost control.",
    whatWeDeliver: ["LLM-powered assistants & agents", "RAG over your private data", "Custom ML models", "Document intelligence & OCR", "Computer vision pipelines"],
    technologies: ["OpenAI", "Anthropic", "LangChain", "PyTorch", "Hugging Face", "Pinecone"],
    benefits: ["Automation at scale", "Insight from unstructured data", "Better customer experiences"],
  },
  "Cloud Solutions": {
    title: "Cloud Solutions",
    eyebrow: "Service",
    overview:
      "Architecture, migration and modernization on AWS, Azure and GCP — with cost optimization and governance built in.",
    whatWeDeliver: ["Cloud architecture & landing zones", "Legacy migration", "Cost optimization audits", "Multi-region & DR setup"],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
    benefits: ["Elastic scale", "Lower TCO", "Global reach"],
  },
  "DevOps": {
    title: "DevOps",
    eyebrow: "Service",
    overview:
      "CI/CD pipelines, containerization, infrastructure-as-code and observability — so your team can ship confidently, many times per day.",
    whatWeDeliver: ["CI/CD pipelines", "Containerization & orchestration", "Infrastructure-as-code", "Monitoring & alerting"],
    technologies: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog", "Grafana"],
    benefits: ["Reliable releases", "Faster recovery", "Less downtime"],
  },
  "UI/UX Design": {
    title: "UI/UX Design",
    eyebrow: "Service",
    overview:
      "Research-led product design that balances user needs and business goals — with polished, accessible interfaces and design systems that scale.",
    whatWeDeliver: ["User research & personas", "Information architecture", "Wireframes & prototypes", "Design systems", "Usability testing"],
    technologies: ["Figma", "Framer", "Principle"],
    benefits: ["Products people love", "Lower support burden", "Higher retention"],
  },
  "Branding": {
    title: "Branding",
    eyebrow: "Service",
    overview:
      "Identity systems and brand experiences that resonate — logo, typography, color, voice and guidelines that translate to every touchpoint.",
    whatWeDeliver: ["Logo & identity", "Brand guidelines", "Collateral & templates", "Brand rollout across digital & print"],
    benefits: ["A brand that stands out", "Consistent presence", "Higher perceived value"],
  },
  "Digital Marketing": {
    title: "Digital Marketing",
    eyebrow: "Service",
    overview:
      "Full-funnel digital marketing — SEO, paid media, content and lifecycle campaigns — measured against revenue, not vanity metrics.",
    whatWeDeliver: ["SEO strategy & execution", "Paid search & social", "Content & email campaigns", "Analytics & attribution"],
    technologies: ["GA4", "Google Ads", "Meta Ads", "HubSpot", "SEMrush"],
    benefits: ["Measurable growth", "Better ROAS", "Predictable pipeline"],
  },
  "Content Writing": {
    title: "Content Writing",
    eyebrow: "Service",
    overview:
      "Strategic content for websites, product, blogs and campaigns — written by specialists who understand SEO, conversion and your industry.",
    whatWeDeliver: ["Website & landing page copy", "Product & UX copy", "Long-form SEO content", "Case studies & whitepapers"],
    benefits: ["Clarity that converts", "Better search rankings", "Stronger brand voice"],
  },
  "Video Production": {
    title: "Video Production",
    eyebrow: "Service",
    overview:
      "Corporate films, product videos and motion graphics — from scripting and storyboarding through 4K shoot and post-production.",
    whatWeDeliver: ["Concept & scripting", "4K production & direction", "Motion graphics & animation", "Editing, color & sound"],
    benefits: ["Stories that build authority", "Higher engagement", "Reusable content assets"],
  },
};

/* -------- INDUSTRIES -------- */
const industriesData: Record<string, DetailContent> = {
  "Education": {
    title: "Education",
    eyebrow: "Industry",
    overview:
      "Digital platforms for schools, colleges, coaching institutes and universities — from admissions and LMS to campus operations and parent engagement.",
    whatWeDeliver: ["School & College ERP", "Learning Management Systems", "Admission & fee portals", "Attendance & timetable", "E-learning & assessments"],
    useCases: ["K-12 school automation", "Higher education portals", "Online course platforms", "Coaching institute management"],
    benefits: ["Better student outcomes", "Lower administrative overhead", "Real-time parent visibility"],
  },
  "Healthcare": {
    title: "Healthcare",
    eyebrow: "Industry",
    overview:
      "Secure, compliant systems for hospitals, clinics and diagnostic labs — with patient-first design and interoperability at the core.",
    whatWeDeliver: ["Hospital Management Systems", "Electronic Medical Records", "Appointment & OPD portals", "Telemedicine platforms", "Lab & pharmacy integration"],
    benefits: ["Better patient outcomes", "Streamlined operations", "Compliance-ready workflows"],
  },
  "Manufacturing": {
    title: "Manufacturing",
    eyebrow: "Industry",
    overview:
      "Shop-floor to boardroom systems — production planning, quality, inventory, maintenance and IoT-connected operations.",
    whatWeDeliver: ["Manufacturing ERP", "Production planning & MES", "Quality management", "Inventory & warehouse", "IoT & machine integration"],
    benefits: ["Higher throughput", "Lower waste", "Real-time visibility"],
  },
  "Retail": {
    title: "Retail",
    eyebrow: "Industry",
    overview:
      "Omnichannel commerce — e-commerce, POS, inventory, loyalty and supply chain — unified around the customer.",
    whatWeDeliver: ["E-commerce platforms", "POS & billing", "Inventory & supply chain", "Loyalty & CRM", "Marketplace integrations"],
    benefits: ["Unified customer view", "Higher basket size", "Reduced stockouts"],
  },
  "Hospitality": {
    title: "Hospitality",
    eyebrow: "Industry",
    overview:
      "Guest-first systems for hotels, resorts and F&B — bookings, PMS, guest apps and food ordering built for delight.",
    whatWeDeliver: ["Property Management Systems", "Online booking engines", "Guest experience apps", "F&B & KOT systems"],
    benefits: ["Better guest experience", "Higher direct bookings", "Streamlined operations"],
  },
  "Logistics": {
    title: "Logistics",
    eyebrow: "Industry",
    overview:
      "End-to-end supply chain — fleet, warehouse, dispatch, tracking and route optimization with real-time visibility.",
    whatWeDeliver: ["Fleet management", "Warehouse management", "Dispatch & routing", "Real-time tracking", "Driver & customer apps"],
    benefits: ["Lower fuel & delivery costs", "On-time delivery", "Complete shipment visibility"],
  },
  "Finance": {
    title: "Finance",
    eyebrow: "Industry",
    overview:
      "Secure, compliant systems for banks, NBFCs and fintechs — portals, dashboards, KYC workflows and reporting engines.",
    whatWeDeliver: ["Customer portals", "KYC & onboarding", "Loan origination", "Compliance reporting", "Executive dashboards"],
    benefits: ["Faster onboarding", "Regulatory readiness", "Fraud reduction"],
  },
  "Government": {
    title: "Government",
    eyebrow: "Industry",
    overview:
      "Citizen-facing digital services — forms, portals, GIS dashboards and secure workflows — built for accessibility and scale.",
    whatWeDeliver: ["Citizen service portals", "Digital forms & workflows", "GIS dashboards", "Secure document systems"],
    benefits: ["Better citizen experience", "Reduced processing time", "Transparent operations"],
  },
  "Real Estate": {
    title: "Real Estate",
    eyebrow: "Industry",
    overview:
      "Digital tools for developers, brokers and property managers — listings, CRM, project management and analytics.",
    whatWeDeliver: ["Property listings & search", "Broker & lead CRM", "Project & construction tracking", "Property analytics"],
    benefits: ["Higher lead conversion", "Better project visibility", "Data-driven pricing"],
  },
  "Professional Services": {
    title: "Professional Services",
    eyebrow: "Industry",
    overview:
      "Systems for consultancies, law firms and agencies — CRM, project management, billing and knowledge platforms.",
    whatWeDeliver: ["Client CRM", "Project & time tracking", "Billing & invoicing", "Knowledge management"],
    benefits: ["Higher utilization", "Faster billing cycles", "Institutional knowledge retention"],
  },
};

/* -------- WEBSITE TYPES -------- */
const websiteTypes = [
  ["Landing Pages", "High-converting single-page experiences engineered for a specific campaign, product launch or lead-gen goal — with A/B testing and analytics built in."],
  ["Business Websites", "Multi-page sites for SMBs that establish credibility, showcase services and capture leads with a modern, mobile-first design."],
  ["Corporate Websites", "Enterprise-grade sites with global content management, multi-language support, investor sections and accessibility compliance."],
  ["Startup Websites", "Fast, opinionated launch sites that tell your story, capture waitlists and convert investor interest into product traction."],
  ["Portfolio Websites", "Visually striking showcases for creatives and consultancies — with case studies, animations and rich media."],
  ["Agency Websites", "Bold, brand-forward sites that demonstrate your capability through work, thinking and process."],
  ["E-Commerce", "Full-stack storefronts with catalog, checkout, payments, inventory and marketing tools — headless or platform-based."],
  ["Educational Websites", "Course catalogs, enrollment funnels, LMS integration and student portals for schools, colleges and edtechs."],
  ["Healthcare Websites", "Compliant, accessible sites for hospitals and clinics — with appointment booking, doctor profiles and patient resources."],
  ["Hospitality Websites", "Booking engines, room galleries and destination storytelling for hotels, resorts and travel brands."],
  ["Professional Websites", "Trust-building sites for lawyers, consultants and financial advisors — with case studies and clear service offerings."],
  ["Company Profile Websites", "Concise, elegant profile sites for corporations that need presence without complexity."],
  ["Enterprise Websites", "Global platforms with multi-region, multi-language, CMS-driven architecture and enterprise governance."],
];
for (const [t, o] of websiteTypes) {
  data[t] = {
    title: t,
    eyebrow: "Website Development",
    overview: o,
    whatWeDeliver: ["Custom design & animation", "SEO-first architecture", "CMS or headless integration", "Analytics & performance tuning", "Ongoing maintenance"],
    benefits: ["Higher conversions", "Better search visibility", "Faster page loads", "Stronger brand perception"],
  };
}

/* -------- SOFTWARE MODULES -------- */
const softwareModules: Array<[string, string, string[]?]> = [
  ["ERP", "A unified system for finance, inventory, procurement, sales and reporting — built to match your business processes, not force you into someone else's.", ["Finance & accounting", "Inventory & warehouse", "Procurement", "Sales & CRM", "Reporting & analytics"]],
  ["CRM", "Sales, marketing and service in one place — with pipeline tracking, automation and reporting tailored to your team.", ["Lead & deal pipelines", "Marketing automation", "Ticketing & support", "Reporting dashboards"]],
  ["HRMS", "People operations from hire to retire — hiring, onboarding, payroll, attendance and performance in one system.", ["Applicant tracking", "Onboarding workflows", "Payroll & compliance", "Attendance & leave", "Performance reviews"]],
  ["Inventory", "Real-time stock visibility across warehouses, stores and channels — with barcode, batch and expiry tracking.", ["Multi-warehouse stock", "Barcode & QR support", "Stock transfers", "Low-stock alerts"]],
  ["Payroll", "Automated payroll with statutory compliance, payslips, tax computation and bank integration.", ["Salary structures", "Statutory compliance (PF, ESI, TDS)", "Payslips & Form 16", "Bank file generation"]],
  ["Attendance", "Biometric, RFID or geo-fenced attendance with shift management, leave tracking and payroll integration.", ["Biometric & mobile check-in", "Shift & roster management", "Leave workflows", "Overtime tracking"]],
  ["Fleet Management", "Vehicle tracking, driver management, fuel and maintenance — all on one dashboard.", ["Live GPS tracking", "Driver & trip management", "Fuel & maintenance logs", "Route optimization"]],
  ["Warehouse", "Pick, pack, ship and receive with barcode workflows, bin management and integration to your ERP.", ["Bin & location management", "Pick-pack-ship workflows", "Cycle counts", "Carrier integrations"]],
  ["Hospital Management", "Complete hospital operations — OPD, IPD, pharmacy, lab, billing and EMR — with role-based access.", ["OPD & IPD management", "Pharmacy & lab", "Billing & insurance", "Electronic Medical Records"]],
  ["School ERP", "Admissions, fees, attendance, timetable, exams and parent communication in one platform.", ["Admissions & enrollment", "Fee management", "Timetable & attendance", "Exams & report cards", "Parent portal"]],
  ["Manufacturing ERP", "Shop-floor to boardroom — production planning, BOM, quality and machine integration.", ["Production planning & MRP", "Bill of Materials", "Quality control", "Machine & IoT integration"]],
  ["Helpdesk", "Multi-channel ticketing with SLAs, automation and a customer portal.", ["Ticket routing & SLAs", "Knowledge base", "Customer portal", "Reporting & CSAT"]],
  ["Project Management", "Plan, execute and track projects with tasks, timesheets, budgets and Gantt views.", ["Task & sprint management", "Timesheets & billing", "Gantt & Kanban", "Budget tracking"]],
];
for (const [t, o, capabilities] of softwareModules) {
  data[t] = {
    title: t,
    eyebrow: "Software Development",
    overview: o,
    capabilities,
    whatWeDeliver: ["Custom workflows", "Role-based security", "Reporting & analytics", "API integrations", "Training & documentation"],
    benefits: ["Unified operations", "Automation of repetitive work", "Real-time visibility", "Better decisions"],
  };
}

/* -------- TECH STACK GROUPS -------- */
const stackGroups: Record<string, { overview: string; items: string[] }> = {
  "Frontend": { overview: "Modern component-driven UIs with type safety, design systems and lightning-fast performance.", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  "Backend": { overview: "Robust, scalable backends with clean architecture, strong typing and battle-tested frameworks.", items: ["Node.js", "Express", "NestJS", "Laravel", "Django", "Spring Boot"] },
  "Database": { overview: "Relational, document and in-memory data stores — chosen to fit the shape of your data and workload.", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"] },
  "Cloud": { overview: "Cloud-native architecture on AWS, Azure or GCP — with cost optimization and multi-region readiness.", items: ["AWS", "Azure", "Google Cloud"] },
  "DevOps": { overview: "Automation for build, test, deploy and observability — so releases are boring, and that's a good thing.", items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"] },
  "AI": { overview: "Production AI — LLM apps, ML models, NLP and vision — engineered for cost, latency and reliability.", items: ["OpenAI", "Machine Learning", "NLP", "Computer Vision"] },
  "Security": { overview: "Defence in depth — authentication, authorization, encryption and secure coding practices at every layer.", items: ["JWT", "OAuth", "SSL", "OWASP", "Encryption"] },
};
for (const [k, v] of Object.entries(stackGroups)) {
  data[k] = {
    title: k,
    eyebrow: "Technology Stack",
    overview: v.overview,
    technologies: v.items,
    benefits: ["Proven, well-supported tools", "Easy hiring & handover", "Long-term maintainability"],
  };
}

/* -------- ENTERPRISE FEATURES -------- */
const enterpriseFeatures: Record<string, string> = {
  "Cloud Ready": "Deployable to AWS, Azure or GCP with containerization, auto-scaling and managed services from day one.",
  "API Integration": "REST and GraphQL APIs with clear contracts, versioning and rate-limiting — ready to connect with any system.",
  "Analytics": "Built-in event tracking, dashboards and BI integrations so you can measure what matters.",
  "Scalable": "Horizontal scaling, caching and async workloads engineered for load you'll have three years from now.",
  "Admin Dashboard": "Powerful admin interfaces with role-based access, audit trails and configurable workflows.",
  "Security": "OWASP-aligned, encrypted, audited — with authentication, authorization and monitoring baked in.",
  "Documentation": "Architecture diagrams, API references, runbooks and onboarding guides shipped with every project.",
  "SEO Ready": "Server-side rendering, structured data and Core Web Vitals optimization for maximum search visibility.",
  "Responsive": "Pixel-perfect experiences across mobile, tablet and desktop with accessibility built in.",
  "AI Ready": "Architected for LLM integrations, vector search and ML pipelines — future-proofed for AI features.",
  "High Performance": "Sub-second page loads, optimized queries and edge caching — because speed is a feature.",
  "Data Modeling": "Well-designed schemas, migrations and data contracts that scale with your business.",
};
for (const [k, o] of Object.entries(enterpriseFeatures)) {
  data[k] = {
    title: k,
    eyebrow: "Enterprise Feature",
    overview: o,
    benefits: ["Enterprise-ready by default", "Reduced risk", "Faster time-to-value"],
  };
}

/* -------- CORE VALUES -------- */
const coreValues: Record<string, string> = {
  "Innovation": "We look ahead, experiment deliberately, and adopt what genuinely improves outcomes — never chasing hype for its own sake.",
  "Integrity": "Straight talk, honest estimates, transparent progress and code we're proud to put our name on.",
  "Quality": "Craft is non-negotiable. Every interface, API and pipeline is engineered with the same rigor as our own product.",
  "Customer Success": "Your business outcomes define ours. We win only when your product wins in the market.",
  "Continuous Improvement": "Retrospectives, telemetry and iteration make every sprint better than the last — for you and for us.",
  "Collaboration": "We embed with your team — transparent, communicative and easy to work with across time zones.",
};
for (const [k, o] of Object.entries(coreValues)) {
  data[k] = { title: k, eyebrow: "Core Value", overview: o };
}

/* -------- MISSION -------- */
const missionItems: Record<string, string> = {
  "Ship faster": "Reduce time-to-market with modern engineering practices, pragmatic delivery, automation and tight feedback loops.",
  "Build securely": "Bake security, privacy and compliance into every layer of the stack — from code to infrastructure.",
  "Scale confidently": "Design systems that grow with the business — from MVP to enterprise — without painful rewrites.",
  "Partner long-term": "Stay engaged beyond launch with support, iteration and continuous improvement over years.",
};
for (const [k, o] of Object.entries(missionItems)) {
  data[k] = { title: k, eyebrow: "Mission", overview: o, benefits: ["Faster outcomes", "Lower risk", "Sustainable growth"] };
}

/* -------- ABOUT -------- */
const aboutItems: Record<string, string> = {
  "Who we are": "A senior team of engineers, designers and strategists shipping enterprise-grade digital products for organizations that value craft, reliability and long-term thinking.",
  "What we do": "End-to-end software, cloud, AI and design — engineered around clear business outcomes and delivered with the discipline of an internal team.",
  "Why we exist": "To help ambitious organizations move faster with technology that compounds in value — turning software into a durable competitive advantage.",
  "How we build": "Business-first thinking, modern architecture and future-ready engineering as a default — with transparent process every step of the way.",
};
for (const [k, o] of Object.entries(aboutItems)) {
  data[k] = { title: k, eyebrow: "About", overview: o };
}

/* -------- PROCESS PHASES -------- */
const processPhases: Record<string, string> = {
  "Requirement Gathering": "Deep discovery with stakeholders, users and existing systems — understanding the real business context before proposing solutions.",
  "Business Analysis": "Translating needs into concrete scope, KPIs, user stories and acceptance criteria that everyone can align on.",
  "Planning": "Architecture, technology choices, roadmap, sprint plan, risk register and milestones — all documented and signed off.",
  "UI/UX": "Design system, wireframes, interactive prototypes and usability testing before a single line of production code.",
  "Development": "Agile sprints with weekly demos, code reviews, automated tests and continuous integration.",
  "Testing": "Unit, integration, load, security and user acceptance testing — with clear pass/fail criteria and sign-off.",
  "Deployment": "Automated release pipelines, blue-green or canary deploys, monitoring, alerting and rollback ready.",
  "Maintenance": "SLA-backed support, iteration, feature evolution and long-term ownership — we don't disappear after launch.",
};
for (const [k, o] of Object.entries(processPhases)) {
  data[k] = { title: k, eyebrow: "Delivery Phase", overview: o, whatWeDeliver: ["Documented deliverables", "Clear timeline", "Stakeholder sign-off"] };
}

/* -------- METHODOLOGY STEPS -------- */
const methodologySteps: Record<string, string> = {
  "Sprint Planning": "Every sprint starts with a clear plan — scoped stories, capacity, dependencies and success criteria agreed with stakeholders.",
  "Development": "Feature branches, code reviews, pair programming where useful, and automated tests on every commit.",
  "Testing": "Continuous automated testing plus dedicated QA cycles for critical paths — unit, integration, E2E and manual.",
  "Deployment": "Automated pipelines push tested code to staging and production with monitoring and rollback in place.",
  "Continuous Improvement": "Retrospectives, telemetry and customer feedback feed directly into the next sprint's backlog.",
};
for (const [k, o] of Object.entries(methodologySteps)) {
  data[k] = { title: k, eyebrow: "Agile Methodology", overview: o };
}

Object.assign(data, industriesData);

export function getDetail(key: string): DetailContent | undefined {
  return data[key];
}
