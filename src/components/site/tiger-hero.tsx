import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import faceImg from "@/assets/tiger-face.jpg";
import eyesImg from "@/assets/tiger-eyes.jpg";
import frontImg from "@/assets/tiger-front.jpg";
import walkImg from "@/assets/tiger-walk.jpg";

/**
 * Cinematic scroll-driven hero, recreated from the Primal reference:
 * full-body approach -> face close-up -> eye focus -> pull-back reveal -> snow walk.
 * Every stage is scrubbed by GSAP ScrollTrigger; reduced-motion devices get a
 * static hero without the pinned scroll runway.
 */
export function TigerHero() {
  const rootRef = useRef<HTMLElement>(null);
  const vpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const vp = vpRef.current;
    if (!root || !vp) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const q = gsap.utils.selector(vp);
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    /* Entrance (plays once, not scrubbed) */
    gsap
      .timeline({ delay: 0.15 })
      .from(q("[data-fade]"), { opacity: 0, y: 26, duration: 1.1, stagger: 0.14, ease: "power3.out" })
      .from(q("[data-letter]"), { opacity: 0, yPercent: 60, duration: 1, stagger: 0.05, ease: "power3.out" }, 0.1);

    /* Stage 1 — approach: full body walks toward camera */
    tl.fromTo(q("[data-layer='front']"), { scale: 1.02, yPercent: 0 }, { scale: 1.5, yPercent: 4, duration: 3 }, 0);
    tl.fromTo(q("[data-layer='face']"), { scale: 1.3 }, { scale: 1.05, duration: 3 }, 0);
    tl.to(q("[data-layer='face']"), { opacity: 1, duration: 1.6 }, 1.4);
    tl.to(q("[data-wordmark]"), { scale: 1.12, duration: 3 }, 0);

    /* Stage 2 — eye close-up focus */
    tl.fromTo(q("[data-layer='eyes']"), { scale: 1.08 }, { scale: 1.26, duration: 4 }, 2.6);
    tl.to(q("[data-layer='eyes']"), { opacity: 1, duration: 1.6 }, 2.8);
    tl.to(q("[data-layer='face']"), { opacity: 0, duration: 1.6 }, 3);
    tl.to(q("[data-wordmark]"), { opacity: 0.08, scale: 1.22, duration: 2.4 }, 2.8);
    tl.to(q("[data-stage1-copy]"), { opacity: 0, y: -30, duration: 1.4 }, 2.8);
    tl.to(q("[data-stage2-copy]"), { opacity: 1, y: 0, duration: 1.4 }, 4.2);

    /* Stage 3 — camera pulls away, body revealed */
    tl.to(q("[data-layer='eyes']"), { opacity: 0, duration: 1.8 }, 5.2);
    tl.fromTo(q("[data-layer='front']"), { opacity: 0, scale: 1.6 }, { opacity: 1, scale: 1, duration: 3 }, 5.4);
    tl.to(q("[data-wordmark]"), { opacity: 0, duration: 1.6 }, 5.2);
    tl.to(q("[data-stage2-copy]"), { opacity: 0, y: -24, duration: 1.2 }, 5.4);
    tl.to(q("[data-stage3-copy]"), { opacity: 1, y: 0, duration: 1.6 }, 7.2);

    /* Stage 4 — the walk through the snow */
    tl.fromTo(q("[data-layer='walk']"), { opacity: 0, xPercent: -3, scale: 1.06 }, { opacity: 1, xPercent: 3, scale: 1.02, duration: 3 }, 7.6);
    tl.to(q("[data-layer='front']"), { opacity: 0, duration: 1.8 }, 7.8);
    tl.to(q("[data-stage3-copy]"), { opacity: 0, y: -24, duration: 1.2 }, 8);
    tl.to(q("[data-stage4-copy]"), { opacity: 1, y: 0, duration: 1.6 }, 8.8);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      gsap.killTweensOf(q("*"));
    };
  }, []);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      id="top"
      ref={rootRef}
      className={reduced ? "relative" : "relative h-[560vh]"}
      aria-label="Thrive Tech Solutions — cinematic introduction"
    >
      <div ref={vpRef} className="sticky top-0 h-[100dvh] overflow-hidden bg-background noise">
        {/* Cinematic image layers */}
        <img
          data-layer="front"
          src={frontImg}
          alt=""
          aria-hidden="true"
          className="hero-layer"
          fetchPriority="high"
        />
        <img data-layer="face" src={faceImg} alt="" aria-hidden="true" className="hero-layer opacity-0" />
        <img data-layer="eyes" src={eyesImg} alt="" aria-hidden="true" className="hero-layer opacity-0" />
        <img data-layer="walk" src={walkImg} alt="" aria-hidden="true" className="hero-layer opacity-0" />

        {/* Atmospheric fog + drifting snow */}
        <div className="fog" aria-hidden="true" />
        <DriftingSnow />

        {/* Giant brand wordmark woven through the animal */}
        <div
          data-wordmark
          className="wordmark pointer-events-none absolute inset-x-0 top-[16%] z-10 text-center text-foreground"
        >
          <span className="block select-none px-2 text-[19vw] leading-[0.9] sm:text-[20vw]">
            {"THRIVE".split("").map((ch, i) => (
              <span data-letter key={i} className="inline-block">
                {ch}
              </span>
            ))}
          </span>
          <span className="mt-[1vw] block select-none text-[1.1vw] font-sans font-light uppercase tracking-[0.65em] text-foreground/80 sm:text-[0.9vw]">
            Tech Solutions
          </span>
        </div>

        {/* Stage 1 copy — mirrors the reference hero */}
        <div data-stage1-copy className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-6 px-5 pb-10 sm:px-10 sm:pb-14">
            <p className="max-w-[220px] text-lg font-light leading-snug text-foreground sm:max-w-[260px] sm:text-2xl">
              We turn ideas into{" "}
              <span className="font-normal text-primary">digital experiences.</span>
            </p>
            <a
              href="#services"
              className="pointer-events-auto group relative hidden h-28 w-28 items-center justify-center rounded-full bg-white/90 text-[11px] uppercase tracking-[0.2em] text-foreground shadow-[0_20px_60px_-20px_rgba(30,60,110,0.45)] transition hover:scale-105 sm:flex"
            >
              Explore
              <span className="absolute inset-[-10px] rounded-full border border-foreground/15" />
            </a>
            <p className="hidden max-w-[240px] text-xs font-light leading-relaxed text-foreground/70 sm:block">
              Creative thinking. Technical execution. Intelligent solutions — crafted
              for businesses, institutions and dreamers.
            </p>
          </div>
        </div>

        {/* Stage 2 copy — eye close-up */}
        <div data-stage2-copy className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0">
          <p className="px-6 text-center font-display text-2xl uppercase tracking-[0.5em] text-foreground sm:text-4xl">
            Craft. Clarity. Command.
          </p>
        </div>

        {/* Stage 3 copy — full reveal statement */}
        <div data-stage3-copy className="pointer-events-none absolute inset-0 z-20 flex items-end opacity-0">
          <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-10">
            <p className="max-w-4xl font-display text-4xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Every great idea deserves the right execution.
            </p>
          </div>
        </div>

        {/* Stage 4 copy — the walk + CTAs */}
        <div data-stage4-copy className="pointer-events-none absolute inset-x-0 bottom-0 z-20 opacity-0">
          <div className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-10 sm:pb-16">
            <p className="font-display text-3xl uppercase tracking-[0.28em] text-foreground sm:text-5xl">
              Unleash your ideas
            </p>
            <div className="pointer-events-auto mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn-primary rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em]"
              >
                Explore our work
              </a>
              <a
                href="#services"
                className="btn-ghost rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground"
              >
                Discover what we do
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          data-fade
          className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-foreground/60"
        >
          Scroll
        </div>
      </div>
    </section>
  );
}

function DriftingSnow() {
  const flakes = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {flakes.map((_, i) => {
        const size = 1.5 + (i % 3);
        const left = (i * 41) % 100;
        const delay = (i % 12) * 0.7;
        const dur = 9 + (i % 7);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/80"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: "-4%",
              animation: `snowfall ${dur}s linear ${delay}s infinite`,
              boxShadow: "0 0 6px rgba(255,255,255,0.9)",
            }}
          />
        );
      })}
      <style>{`@keyframes snowfall { 0% { transform: translateY(0); opacity: 0 } 10% { opacity: .9 } 100% { transform: translateY(110vh); opacity: 0 } }`}</style>
    </div>
  );
}
