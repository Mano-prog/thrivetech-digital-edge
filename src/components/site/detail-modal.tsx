import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";
import { getDetail, type DetailContent } from "./detail-data";

type Ctx = { open: (key: string, fallback?: Partial<DetailContent>) => void; close: () => void };
const DetailCtx = createContext<Ctx | null>(null);

export function useDetail() {
  const ctx = useContext(DetailCtx);
  if (!ctx) throw new Error("useDetail must be used within DetailProvider");
  return ctx;
}

export function DetailProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<DetailContent | null>(null);

  const open = useCallback((key: string, fallback?: Partial<DetailContent>) => {
    const found = getDetail(key);
    setCurrent(found ?? { title: key, eyebrow: "Overview", overview: fallback?.overview ?? "Detailed information coming soon. Contact us to learn more about how this applies to your business.", ...fallback });
  }, []);
  const close = useCallback(() => setCurrent(null), []);

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [current, close]);

  return (
    <DetailCtx.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute inset-0 bg-background/70 backdrop-blur-md"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={current.title}
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[86vh] overflow-y-auto glass-strong border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 pb-4 bg-gradient-to-b from-background/95 to-background/60 backdrop-blur-md border-b border-white/5">
                <div className="min-w-0">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-primary">
                    {current.eyebrow ?? "Detail"}
                  </div>
                  <h2 className="mt-1.5 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                    {current.title}
                  </h2>
                </div>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="shrink-0 h-9 w-9 grid place-items-center rounded-full glass hover:bg-white/10 transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="px-6 sm:px-8 py-6 space-y-8">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {current.overview}
                </p>

                {current.whatWeDeliver?.length ? (
                  <Block title="What we deliver">
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {current.whatWeDeliver.map((x) => (
                        <li key={x} className="flex items-start gap-2.5 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                ) : null}

                {current.capabilities?.length ? (
                  <Block title="Key capabilities">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {current.capabilities.map((c) => (
                        <div key={c} className="glass rounded-xl px-4 py-3 text-sm flex items-center gap-2.5">
                          <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </Block>
                ) : null}

                {current.technologies?.length ? (
                  <Block title="Technologies we use">
                    <div className="flex flex-wrap gap-2">
                      {current.technologies.map((t) => (
                        <span key={t} className="text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Block>
                ) : null}

                {current.useCases?.length ? (
                  <Block title="Common use cases">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {current.useCases.map((u) => (
                        <li key={u} className="flex items-start gap-2.5">
                          <ArrowRight className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                ) : null}

                {current.benefits?.length ? (
                  <Block title="Business benefits">
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {current.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Block>
                ) : null}

                <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-border/60">
                  <a
                    href="#contact"
                    onClick={close}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110 transition glow-primary"
                  >
                    Discuss your project <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+918072854541"
                    onClick={close}
                    className="inline-flex items-center justify-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
                  >
                    Call an expert
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DetailCtx.Provider>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="font-display text-sm uppercase tracking-[0.18em] text-foreground/80 mb-4">
        {title}
      </h3>
      {children}
    </section>
  );
}
