import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search, Megaphone, Share2, PenTool, Mail, Users, MousePointerClick,
  BarChart3, ShieldCheck, Zap, Youtube, Sparkles, ArrowUpRight, Check,
} from "lucide-react";
import { Section } from "./section";
import { Stagger, StaggerItem, Reveal } from "./reveal";
import { ParticlesCanvas } from "./particles-canvas";
import { useDetail } from "./detail-modal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  { icon: Search, t: "SEO", d: "Technical, on-page and off-page optimization for durable organic growth." },
  { icon: MousePointerClick, t: "Pay-Per-Click (PPC)", d: "Google Ads, Bing and performance campaigns engineered for ROAS." },
  { icon: Share2, t: "Social Media Marketing", d: "Content, community and paid social across every relevant platform." },
  { icon: PenTool, t: "Content Marketing", d: "Editorial strategy, articles, whitepapers and thought leadership." },
  { icon: Mail, t: "Email Marketing", d: "Lifecycle, drip and broadcast campaigns with automation." },
  { icon: Users, t: "Influencer Marketing", d: "Vetted creator partnerships and campaign execution end-to-end." },
  { icon: Megaphone, t: "Performance Marketing", d: "Full-funnel media buying tied to pipeline and revenue." },
  { icon: BarChart3, t: "Analytics & Reporting", d: "GA4, dashboards, attribution and executive reporting." },
  { icon: Youtube, t: "Video & YouTube Ads", d: "Short-form, long-form and paid video optimized for conversion." },
  { icon: Sparkles, t: "Conversion Rate Optimization", d: "Experimentation, A/B testing and funnel optimization." },
  { icon: ShieldCheck, t: "Online Reputation Management", d: "Brand monitoring, reviews and crisis response." },
  { icon: Zap, t: "Marketing Automation", d: "HubSpot, Marketo and custom workflows that scale outreach." },
];

const outcomes = [
  "Higher qualified traffic & conversions",
  "Lower cost per acquisition",
  "Better attribution & ROAS visibility",
  "Compounding organic growth",
  "Stronger brand recall & trust",
];

export function DigitalMarketing() {
  const { open } = useDetail();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const chars = headingRef.current.querySelectorAll<HTMLElement>("[data-char]");
        gsap.from(chars, {
          yPercent: 110,
          opacity: 0,
          stagger: 0.015,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            once: true,
          },
        });
      }
      if (cardsWrapRef.current) {
        const cards = cardsWrapRef.current.querySelectorAll<HTMLElement>("[data-dm-card]");
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsWrapRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const title = "Growth engineered with data.";
  const words = title.split(" ");

  return (
    <section id="digital-marketing" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle particle background */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <ParticlesCanvas density={40} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
            <span className="h-1 w-1 rounded-full bg-primary" /> Digital Marketing
          </div>
          <h2
            ref={headingRef}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            {words.map((w, wi) => (
              <span key={wi} className="inline-block overflow-hidden align-bottom mr-3">
                {Array.from(w).map((c, ci) => (
                  <span key={ci} data-char className="inline-block">
                    {wi === words.length - 1 ? (
                      <span className="text-gradient-brand">{c}</span>
                    ) : (
                      c
                    )}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Full-funnel digital marketing — from search and social to lifecycle and analytics —
            engineered around measurable business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4">
          <div ref={cardsWrapRef} className="lg:col-span-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {services.map((s) => (
              <button
                key={s.t}
                data-dm-card
                onClick={() => open(s.t)}
                className="text-left w-full rounded-2xl p-5 glass card-hover group h-full"
              >
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-xl bg-primary/15 border border-primary/25 grid place-items-center text-primary">
                    <s.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
              </button>
            ))}
          </div>

          <Reveal className="lg:col-span-4">
            <div className="relative rounded-2xl glass p-6 h-full overflow-hidden">
              <FunnelSVG />
              <h3 className="relative font-display text-lg font-semibold">Outcomes we drive</h3>
              <ul className="relative mt-4 space-y-3 text-sm text-muted-foreground">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <Stagger className="relative mt-6 grid grid-cols-3 gap-2 text-center">
                {[
                  { k: "ROAS", v: "3–8×" },
                  { k: "Traffic", v: "+120%" },
                  { k: "CAC", v: "-35%" },
                ].map((m) => (
                  <StaggerItem key={m.k}>
                    <div className="rounded-xl border border-border/60 py-3">
                      <div className="font-display text-lg font-semibold text-gradient-brand">
                        {m.v}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                        {m.k}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Animated SVG funnel — path draw + subtle pulse. Pure SVG/CSS. */
function FunnelSVG() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 200"
      className="absolute -top-6 -right-6 h-40 w-40 opacity-30 pointer-events-none"
    >
      <defs>
        <linearGradient id="dm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.19 245)" />
          <stop offset="100%" stopColor="oklch(0.68 0.22 300)" />
        </linearGradient>
        <style>{`
          @keyframes dm-draw { to { stroke-dashoffset: 0 } }
          @keyframes dm-pulse { 0%,100% { opacity:.4 } 50% { opacity:1 } }
          .dm-path { stroke-dasharray: 900; stroke-dashoffset: 900; animation: dm-draw 2.4s ease-out .3s forwards; }
          .dm-dot { animation: dm-pulse 2.2s ease-in-out infinite; transform-origin: center; }
        `}</style>
      </defs>
      <path
        className="dm-path"
        d="M20 30 L280 30 L200 100 L200 180 L120 180 L120 100 Z"
        fill="none"
        stroke="url(#dm-grad)"
        strokeWidth="2"
      />
      <circle className="dm-dot" cx="160" cy="180" r="4" fill="url(#dm-grad)" />
    </svg>
  );
}
