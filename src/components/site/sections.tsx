import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight, Phone,
  ShieldCheck, Sparkles, Users, Rocket, HeartHandshake, Layers,
  Globe, Code2, Smartphone, Palette, Database, Cloud, Cpu, GitBranch, Megaphone, PenTool, Video, LineChart,
  GraduationCap, HeartPulse, Factory, ShoppingBag, UtensilsCrossed, Truck, Landmark, Building2, Home, Briefcase,
  ChevronDown, Plus, Minus, Check, Star, Quote,
  Boxes, Workflow, Server, Lock, Zap, FileCode,
} from "lucide-react";
import { Section } from "./section";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { Counter } from "./counter";
import { useDetail } from "./detail-modal";

/* -------------------- ABOUT -------------------- */
export function About() {
  const items = [
    { icon: Sparkles, t: "Who we are", d: "A senior team of engineers, designers and strategists shipping enterprise-grade digital products." },
    { icon: Layers, t: "What we do", d: "End-to-end software, cloud, AI and design — engineered around clear business outcomes." },
    { icon: Rocket, t: "Why we exist", d: "To help ambitious organizations move faster with technology that compounds in value." },
    { icon: ShieldCheck, t: "How we build", d: "Business-first thinking, modern architecture, and future-ready engineering as a default." },
  ];
  return (
    <Section
      id="about"
      eyebrow="About Thrive Tech"
      title={<>An enterprise partner for the <span className="text-gradient-brand">next decade</span> of software.</>}
      description="We combine deep product engineering with modern architecture to help organizations design, build and scale digital platforms that support long-term growth."
    >
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <StaggerItem key={it.t}>
            <div className="glass rounded-2xl p-6 h-full card-hover">
              <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/25 grid place-items-center text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* -------------------- VISION -------------------- */
export function Vision() {
  return (
    <Section id="vision" className="!py-24">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
            <span className="h-1 w-1 rounded-full bg-primary" /> Vision
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            To be the <span className="text-gradient-brand">technology backbone</span> for
            forward-thinking businesses worldwide.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            We envision a future where every organization — regardless of size —
            can access world-class engineering, elegant design and intelligent
            automation as competitive advantage.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-6">
          <VisionOrb />
        </Reveal>
      </div>
    </Section>
  );
}

function VisionOrb() {
  return (
    <div className="relative aspect-square max-w-lg mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-cyan/20 to-purple/30 blur-2xl" />
      <div className="absolute inset-6 rounded-full border border-white/10 glass-strong" />
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-primary/25"
          style={{ margin: `${i * 24}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_currentColor] text-primary" />
        </motion.div>
      ))}
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-display text-6xl font-semibold text-gradient-brand">2030</div>
          <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">Future-Ready</div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- MISSION -------------------- */
export function Mission() {
  const items = [
    { icon: Rocket, t: "Ship faster", d: "Reduce time-to-market with modern engineering practices and pragmatic delivery." },
    { icon: ShieldCheck, t: "Build securely", d: "Bake security, privacy and compliance into every layer of the stack." },
    { icon: LineChart, t: "Scale confidently", d: "Design systems that grow with the business — from MVP to enterprise." },
    { icon: HeartHandshake, t: "Partner long-term", d: "Stay engaged beyond launch with support, iteration and continuous improvement." },
  ];
  return (
    <Section
      id="mission"
      eyebrow="Mission"
      title={<>Engineering software that moves the business <span className="text-gradient-brand">forward</span>.</>}
      description="Every engagement is measured against the outcomes it creates — faster operations, better decisions, happier customers, stronger revenue."
    >
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <StaggerItem key={it.t}>
            <div className="relative rounded-2xl p-6 h-full glass card-hover overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <it.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* -------------------- CORE VALUES -------------------- */
export function CoreValues() {
  const values = [
    { icon: Sparkles, t: "Innovation", d: "We look ahead, experiment deliberately, and adopt what genuinely improves outcomes." },
    { icon: ShieldCheck, t: "Integrity", d: "Straight talk, honest estimates, and code we're proud to put our name on." },
    { icon: Star, t: "Quality", d: "Craft is non-negotiable. Every interface, API and pipeline is engineered with care." },
    { icon: Users, t: "Customer Success", d: "Your business outcomes define ours. We win when your product wins." },
    { icon: Rocket, t: "Continuous Improvement", d: "Retrospectives, telemetry and iteration make every sprint better than the last." },
    { icon: HeartHandshake, t: "Collaboration", d: "We embed with your team — transparent, communicative, and easy to work with." },
  ];
  return (
    <Section
      id="values"
      eyebrow="Core Values"
      title={<>The principles behind <span className="text-gradient-brand">every line of code</span>.</>}
    >
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {values.map((v) => (
          <StaggerItem key={v.t}>
            <div className="group relative rounded-2xl p-8 glass card-hover overflow-hidden h-full">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-purple/10" />
              <div className="relative">
                <v.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 font-display text-xl font-semibold">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* -------------------- WHY CHOOSE -------------------- */
export function WhyChoose() {
  const items = [
    "Enterprise Architecture", "Business-first Approach", "Modern Technologies",
    "Cloud Ready", "Scalable Systems", "Secure Development",
    "Agile Delivery", "Comprehensive Documentation", "Ongoing Support",
    "Long-term Partnership",
  ];
  return (
    <Section
      id="why"
      eyebrow="Why Thrive Tech"
      title={<>Built to be your <span className="text-gradient-brand">long-term technology partner</span>.</>}
      description="We don't ship code and disappear. We architect for the next five years — and stay engaged for them."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((it, i) => (
          <Reveal key={it} delay={i * 0.04}>
            <div className="flex items-center gap-4 rounded-xl glass px-5 py-4 card-hover">
              <div className="h-9 w-9 rounded-lg bg-primary/15 border border-primary/25 grid place-items-center">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <div className="font-medium">{it}</div>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* -------------------- INDUSTRIES -------------------- */
const industries = [
  { icon: GraduationCap, t: "Education", d: "School ERP, LMS, admissions, e-learning platforms and campus operations." },
  { icon: HeartPulse, t: "Healthcare", d: "Hospital management, patient records, appointments and telemedicine." },
  { icon: Factory, t: "Manufacturing", d: "Production planning, inventory, quality and shop-floor automation." },
  { icon: ShoppingBag, t: "Retail", d: "E-commerce, POS, loyalty, supply chain and omnichannel experiences." },
  { icon: UtensilsCrossed, t: "Hospitality", d: "Bookings, PMS, guest experience apps and F&B operations." },
  { icon: Truck, t: "Logistics", d: "Fleet, warehouse, dispatch, tracking and route optimization." },
  { icon: Landmark, t: "Finance", d: "Secure portals, dashboards, KYC workflows and reporting systems." },
  { icon: Building2, t: "Government", d: "Citizen services, digital forms, GIS dashboards and secure portals." },
  { icon: Home, t: "Real Estate", d: "Listings, CRM, project management and property analytics." },
  { icon: Briefcase, t: "Professional Services", d: "CRM, project management, billing and knowledge platforms." },
];

export function Industries() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title={<>Deep experience across <span className="text-gradient-brand">regulated & complex</span> domains.</>}
      description="We adapt our engineering to the realities of your industry — regulation, scale, compliance and customer expectations."
    >
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries.map((ind, i) => {
          const open = active === i;
          return (
            <StaggerItem key={ind.t}>
              <button
                onClick={() => setActive(open ? null : i)}
                className="text-left w-full rounded-2xl p-6 glass card-hover group"
                aria-expanded={open}
              >
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-purple/20 border border-white/10 grid place-items-center text-primary">
                    <ind.icon className="h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{ind.t}</h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.p
                      key="d"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-2 text-sm text-muted-foreground leading-relaxed overflow-hidden"
                    >
                      {ind.d}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

/* -------------------- SERVICES -------------------- */
const services = [
  { icon: Globe, t: "Website Development", o: "Marketing, corporate and enterprise websites engineered for performance and SEO.", tech: ["Next.js", "React", "TypeScript", "Tailwind"], v: "Higher conversions, better brand perception." },
  { icon: Code2, t: "Software Development", o: "Custom SaaS platforms and internal tools built for scale and reliability.", tech: ["Node.js", "NestJS", "PostgreSQL"], v: "Automated operations, faster decisions." },
  { icon: Smartphone, t: "Mobile Applications", o: "Native-quality iOS and Android apps with shared codebases.", tech: ["React Native", "Swift", "Kotlin"], v: "Reach customers wherever they are." },
  { icon: Boxes, t: "ERP Development", o: "Modular ERP tailored to your workflows across finance, ops and inventory.", tech: ["Node.js", "PostgreSQL", "React"], v: "Unified operations, one source of truth." },
  { icon: Users, t: "CRM Development", o: "Sales, marketing and service CRMs with automation and reporting.", tech: ["React", "Node.js", "Redis"], v: "Predictable pipeline, higher retention." },
  { icon: LineChart, t: "HRMS", o: "People systems for hiring, onboarding, payroll and performance.", tech: ["Next.js", "Prisma", "PostgreSQL"], v: "Empowered HR, engaged employees." },
  { icon: Cpu, t: "Artificial Intelligence", o: "LLM apps, ML models, NLP and computer vision solutions.", tech: ["OpenAI", "PyTorch", "LangChain"], v: "Automation and insight at scale." },
  { icon: Cloud, t: "Cloud Solutions", o: "Architecture, migration and modernization on AWS, Azure and GCP.", tech: ["AWS", "Azure", "GCP"], v: "Elastic scale, lower TCO." },
  { icon: GitBranch, t: "DevOps", o: "CI/CD, containers, IaC and observability that ship confidently.", tech: ["Docker", "Kubernetes", "Terraform"], v: "Reliable releases, less downtime." },
  { icon: Palette, t: "UI/UX Design", o: "Research-driven product design with polished, accessible interfaces.", tech: ["Figma", "Design Systems"], v: "Products people love to use." },
  { icon: Sparkles, t: "Branding", o: "Identity systems, guidelines and brand experiences that resonate.", tech: ["Figma", "Illustrator"], v: "A brand that stands out and lasts." },
  { icon: Megaphone, t: "Digital Marketing", o: "SEO, performance marketing, content and lifecycle campaigns.", tech: ["GA4", "Meta Ads", "SEO"], v: "Measurable growth, better ROAS." },
  { icon: PenTool, t: "Content Writing", o: "Strategic content for websites, product, blogs and campaigns.", tech: ["SEO", "Editorial"], v: "Clarity that converts." },
  { icon: Video, t: "Video Production", o: "Corporate films, product videos and motion graphics.", tech: ["4K", "Motion", "Post"], v: "Stories that build authority." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>A full-stack studio for <span className="text-gradient-brand">digital transformation</span>.</>}
      description="From strategy to shipping, our specialists cover every layer of a modern digital business."
    >
      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <StaggerItem key={s.t}>
            <article className="relative rounded-2xl p-6 glass card-hover h-full overflow-hidden group">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(120deg, transparent, color-mix(in oklab, var(--primary) 22%, transparent), transparent)" }} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-primary/15 border border-primary/25 grid place-items-center text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.o}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tech.map((t) => (
                    <span key={t} className="text-[10.5px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border/70 text-xs text-muted-foreground">
                  <span className="text-foreground/80 font-medium">Business value:</span> {s.v}
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* -------------------- SUBSERVICES: WEBSITES + SOFTWARE -------------------- */
export function WebsiteTypes() {
  const items = [
    "Landing Pages", "Business Websites", "Corporate Websites", "Startup Websites",
    "Portfolio Websites", "Agency Websites", "E-Commerce", "Educational Websites",
    "Healthcare Websites", "Hospitality Websites", "Professional Websites",
    "Company Profile Websites", "Enterprise Websites",
  ];
  return (
    <Section
      id="websites"
      eyebrow="Website Development"
      title={<>Websites engineered for <span className="text-gradient-brand">performance & growth</span>.</>}
      description="From high-converting landing pages to global enterprise platforms — designed and engineered end-to-end."
    >
      <div className="grid lg:grid-cols-12 gap-4">
        <Stagger className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((it) => (
            <StaggerItem key={it}>
              <div className="rounded-xl glass px-4 py-3.5 flex items-center gap-3 card-hover">
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{it}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="lg:col-span-4">
          <div className="rounded-2xl glass p-6 h-full">
            <h3 className="font-display text-lg font-semibold">What you get</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Custom design & animation",
                "SEO-first architecture",
                "CMS or headless integration",
                "Analytics & performance",
                "Ongoing maintenance",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-primary mt-0.5" /> <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function SoftwareTypes() {
  const modules = [
    "ERP", "CRM", "HRMS", "Inventory", "Payroll", "Attendance",
    "Fleet Management", "Warehouse", "Hospital Management",
    "School ERP", "Manufacturing ERP", "Helpdesk", "Project Management",
  ];
  const capabilities = [
    { icon: Workflow, t: "Workflow Automation" },
    { icon: LineChart, t: "Reporting & Analytics" },
    { icon: Lock, t: "Role-based Security" },
    { icon: Server, t: "API-first Architecture" },
  ];
  return (
    <Section
      id="software"
      eyebrow="Software Development"
      title={<>Business platforms that run your <span className="text-gradient-brand">operations</span>.</>}
      description="Modular, secure and integration-ready software tailored to how your organization actually works."
    >
      <div className="grid lg:grid-cols-12 gap-4">
        <Stagger className="lg:col-span-7 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {modules.map((m) => (
            <StaggerItem key={m}>
              <div className="rounded-xl glass px-4 py-3.5 flex items-center gap-3 card-hover">
                <Boxes className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{m}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Stagger className="lg:col-span-5 grid sm:grid-cols-2 gap-3">
          {capabilities.map((c) => (
            <StaggerItem key={c.t}>
              <div className="rounded-2xl glass p-5 card-hover h-full">
                <c.icon className="h-5 w-5 text-primary" />
                <div className="mt-4 font-display text-base font-semibold">{c.t}</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Built into every module — enterprise-grade by default.
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

/* -------------------- TECHNOLOGY STACK -------------------- */
const stackGroups = [
  { g: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { g: "Backend", items: ["Node.js", "Express", "NestJS", "Laravel", "Django", "Spring Boot"] },
  { g: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"] },
  { g: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { g: "DevOps", items: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"] },
  { g: "AI", items: ["OpenAI", "Machine Learning", "NLP", "Computer Vision"] },
  { g: "Security", items: ["JWT", "OAuth", "SSL", "OWASP", "Encryption"] },
];

export function TechnologyStack() {
  const [active, setActive] = useState(0);
  return (
    <Section
      id="technology"
      eyebrow="Technology Stack"
      title={<>A modern stack, <span className="text-gradient-brand">purpose-picked</span> for every problem.</>}
      description="We choose the right tools for your architecture — proven, well-supported, and built to scale."
    >
      <div className="grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <div className="glass rounded-2xl p-3">
            {stackGroups.map((g, i) => (
              <button
                key={g.g}
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition flex items-center justify-between ${
                  active === i ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <span>{g.g}</span>
                <span className="text-xs text-muted-foreground">{g.items.length}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <div className="glass rounded-2xl p-6 min-h-[280px]">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              {stackGroups[active].g}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-4 flex flex-wrap gap-2.5"
              >
                {stackGroups[active].items.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass rounded-xl px-4 py-2.5 text-sm font-medium border border-white/10 hover:border-primary/40 transition"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------- PROCESS -------------------- */
const phases = [
  { t: "Requirement Gathering", d: "Deep discovery — stakeholders, users, systems and business context." },
  { t: "Business Analysis", d: "Translating needs into scope, KPIs and acceptance criteria." },
  { t: "Planning", d: "Architecture, roadmap, sprint plan, risks and milestones." },
  { t: "UI/UX", d: "Design system, wireframes, prototypes and usability testing." },
  { t: "Development", d: "Agile sprints with weekly demos and continuous integration." },
  { t: "Testing", d: "Unit, integration, load, security and UAT with clear sign-off." },
  { t: "Deployment", d: "Automated release, monitoring, rollback and observability." },
  { t: "Maintenance", d: "SLAs, iteration, feature evolution and long-term ownership." },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="Development Process"
      title={<>A transparent, <span className="text-gradient-brand">enterprise-grade</span> delivery model.</>}
      description="Every phase is visible, measurable and designed to reduce risk while maximizing delivery velocity."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="space-y-8">
          {phases.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className={`relative grid sm:grid-cols-2 gap-6 items-center ${i % 2 ? "sm:direction-rtl" : ""}`}>
                <div className={`${i % 2 ? "sm:order-2 sm:text-left" : "sm:text-right"} pl-12 sm:pl-0 sm:pr-10`}>
                  <div className="text-xs uppercase tracking-[0.2em] text-primary">Phase {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display text-xl font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
                <div className={`${i % 2 ? "sm:order-1" : ""} relative hidden sm:block`}>
                  <div className="glass rounded-2xl p-5 mx-6 card-hover">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/15 border border-primary/25 grid place-items-center text-primary text-xs font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="text-sm text-muted-foreground">Deliverables, timeline & sign-off documented per phase.</div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_16px] text-primary" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------- METHODOLOGY -------------------- */
export function Methodology() {
  const steps = ["Sprint Planning", "Development", "Testing", "Deployment", "Continuous Improvement"];
  return (
    <Section
      id="methodology"
      eyebrow="Methodology"
      title={<>Agile delivery, <span className="text-gradient-brand">engineered discipline</span>.</>}
      description="Short cycles. Clear demos. Measurable progress. We combine agile flexibility with the rigor of enterprise engineering."
    >
      <Stagger className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
        {steps.map((s, i) => (
          <StaggerItem key={s}>
            <div className="glass rounded-2xl p-5 card-hover h-full">
              <div className="text-xs uppercase tracking-widest text-primary">Step {i + 1}</div>
              <div className="mt-3 font-display text-base font-semibold">{s}</div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* -------------------- ENTERPRISE FEATURES -------------------- */
export function EnterpriseFeatures() {
  const feats = [
    { icon: Cloud, t: "Cloud Ready" }, { icon: FileCode, t: "API Integration" },
    { icon: LineChart, t: "Analytics" }, { icon: Boxes, t: "Scalable" },
    { icon: Server, t: "Admin Dashboard" }, { icon: ShieldCheck, t: "Security" },
    { icon: PenTool, t: "Documentation" }, { icon: Sparkles, t: "SEO Ready" },
    { icon: Smartphone, t: "Responsive" }, { icon: Cpu, t: "AI Ready" },
    { icon: Zap, t: "High Performance" }, { icon: Database, t: "Data Modeling" },
  ];
  return (
    <Section
      id="enterprise"
      eyebrow="Enterprise Features"
      title={<>What <span className="text-gradient-brand">enterprise-ready</span> actually means.</>}
    >
      <Stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {feats.map((f) => (
          <StaggerItem key={f.t}>
            <div className="rounded-2xl glass p-5 card-hover">
              <f.icon className="h-5 w-5 text-primary" />
              <div className="mt-4 font-medium">{f.t}</div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* -------------------- EXCELLENCE COUNTERS -------------------- */
export function Excellence() {
  const stats = [
    { n: 14, s: "+", l: "Solutions" },
    { n: 30, s: "+", l: "Technologies" },
    { n: 10, s: "+", l: "Industries" },
    { n: 50, s: "+", l: "Projects" },
    { n: 24, s: "/7", l: "Support" },
    { n: 100, s: "%", l: "Innovation" },
  ];
  return (
    <Section id="excellence" className="!py-24">
      <div className="glass-strong rounded-3xl p-10 sm:p-14 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-purple/20 blur-3xl" />
        <div className="relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Technology Excellence</div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              Numbers that reflect our <span className="text-gradient-brand">commitment</span>.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */
const testimonials = [
  { q: "Thrive Tech felt like an internal engineering team from day one — pragmatic, senior and outcome-driven.", a: "CTO, Retail Group" },
  { q: "They redesigned and re-engineered our platform in a single quarter. Performance and conversions both jumped.", a: "Head of Product, EdTech Startup" },
  { q: "The best documentation and handover process we've seen from any vendor. Zero surprises.", a: "VP Engineering, Logistics Company" },
  { q: "Our ERP finally works the way our business does. That's the difference custom software makes.", a: "Operations Director, Manufacturing" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title={<>Trusted by teams building <span className="text-gradient-brand">what's next</span>.</>}
    >
      <div className="glass-strong rounded-3xl p-8 sm:p-14 relative overflow-hidden">
        <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/30" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-display text-2xl sm:text-3xl leading-relaxed">
              "{testimonials[i].q}"
            </p>
            <footer className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">
              — {testimonials[i].a}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* -------------------- FAQ -------------------- */
const faqs = [
  { q: "How long does a typical project take?", a: "Discovery to launch typically ranges from 6 to 20 weeks depending on scope. We share a detailed timeline after the requirement phase." },
  { q: "Do you provide ongoing support and maintenance?", a: "Yes. We offer support tiers covering monitoring, bug fixes, security patches, updates and iterative improvements." },
  { q: "Do you handle hosting and cloud infrastructure?", a: "We architect and deploy on AWS, Azure or GCP, and can fully manage your infrastructure, DevOps and observability." },
  { q: "How customizable are your solutions?", a: "Every engagement is bespoke. We build to your business processes, not the other way around." },
  { q: "How do you handle security?", a: "OWASP standards, encrypted data in transit and at rest, role-based access, audit logs and regular security reviews." },
  { q: "Can you take over an existing project?", a: "Yes. We routinely audit, stabilize and take ownership of existing codebases with a structured handover process." },
  { q: "Which methodologies do you follow?", a: "Agile with 1–2 week sprints, weekly demos, transparent tracking and continuous deployment where appropriate." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Answers to common questions."
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* -------------------- CONTACT -------------------- */
export function Contact() {
  return (
    <Section id="contact" className="!py-32">
      <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-14">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple/25 blur-3xl" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.2em] text-primary">Contact</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
              Let's build something <span className="text-gradient-brand">extraordinary</span> together.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg">
              Talk to our team about your product, platform or transformation
              roadmap. We typically respond within a business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+918072854541"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground glow-primary hover:brightness-110 transition"
              >
                <Phone className="h-4 w-4" /> Call us now
              </a>
              <a
                href="https://wa.me/918072854541"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            <ContactCard label="Primary line" number="+91 80728 54541" />
            <ContactCard label="Secondary line" number="+91 76048 71241" />
            <div className="glass rounded-2xl p-6 sm:col-span-2">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Business hours</div>
              <div className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between"><span>Monday – Saturday</span><span className="text-muted-foreground">9:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-muted-foreground">Closed</span></div>
              </div>
              <div className="mt-5 pt-5 border-t border-border/70 text-xs uppercase tracking-widest text-muted-foreground">
                Office · <span className="text-foreground">Coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactCard({ label, number }: { label: string; number: string }) {
  const tel = number.replace(/\s+/g, "");
  return (
    <a
      href={`tel:${tel}`}
      className="group glass rounded-2xl p-6 card-hover flex flex-col"
    >
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary/15 border border-primary/25 grid place-items-center text-primary">
          <Phone className="h-4 w-4" />
        </div>
        <div className="font-display text-xl font-semibold tracking-tight">{number}</div>
      </div>
      <div className="mt-6 text-xs text-muted-foreground group-hover:text-primary transition inline-flex items-center gap-1">
        Tap to call <ArrowUpRight className="h-3 w-3" />
      </div>
    </a>
  );
}
