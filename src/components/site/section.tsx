import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {(eyebrow || title || description) && (
          <div className={`max-w-3xl mb-14 sm:mb-20 ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
                <span className="h-1 w-1 rounded-full bg-primary" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
