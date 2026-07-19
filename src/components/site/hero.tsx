import { motion } from "motion/react";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { Counter } from "./counter";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-28 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute top-40 -right-40 h-[520px] w-[520px] rounded-full bg-purple/25 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[900px] rounded-full bg-cyan/15 blur-[120px]" />
      </div>

      {/* Particles */}
      <Particles />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Enterprise Technology Partner
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] tracking-tight">
            Building{" "}
            <span className="text-gradient-brand">Intelligent</span>
            <br />
            Digital Solutions.
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Thrive Tech partners with ambitious teams to design, engineer and scale
            enterprise-grade software, cloud platforms and AI systems — built for
            performance, security and long-term business growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+918072854541"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition glow-primary"
            >
              <Phone className="h-4 w-4" />
              Talk to an engineer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition"
            >
              Explore services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl">
            {[
              { n: 14, s: "+", l: "Services" },
              { n: 30, s: "+", l: "Technologies" },
              { n: 10, s: "+", l: "Industries" },
              { n: 100, s: "%", l: "Client focus" },
            ].map((s) => (
              <div key={s.l} className="border-l border-border/60 pl-4">
                <div className="font-display text-3xl sm:text-4xl font-semibold text-gradient">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs"
      >
        <span className="uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const size = 1 + (i % 3);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 10) * 0.3;
        const dur = 8 + (i % 6);
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.8, 0], y: [-20, -120] }}
            transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            className="absolute rounded-full bg-primary/70"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              boxShadow: "0 0 8px currentColor",
            }}
          />
        );
      })}
    </div>
  );
}
