import { Github, Linkedin, Twitter, Instagram, Phone } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const groups = [
    {
      t: "Company", links: [
        { l: "About", h: "#about" }, { l: "Vision", h: "#vision" }, { l: "Mission", h: "#mission" },
        { l: "Values", h: "#values" }, { l: "Why us", h: "#why" },
      ],
    },
    {
      t: "Services", links: [
        { l: "Website Development", h: "#websites" }, { l: "Software Development", h: "#software" },
        { l: "Cloud & DevOps", h: "#services" }, { l: "AI Solutions", h: "#services" }, { l: "UI/UX Design", h: "#services" },
      ],
    },
    {
      t: "Explore", links: [
        { l: "Industries", h: "#industries" }, { l: "Technology Stack", h: "#technology" },
        { l: "Process", h: "#process" }, { l: "FAQ", h: "#faq" }, { l: "Contact", h: "#contact" },
      ],
    },
    {
      t: "Legal", links: [
        { l: "Privacy Policy", h: "#" }, { l: "Terms of Service", h: "#" }, { l: "Security", h: "#" },
      ],
    },
  ];
  return (
    <footer className="relative border-t border-border/60 mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple">
                <span className="relative font-display text-sm font-bold text-primary-foreground">T</span>
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                Thrive<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Building intelligent digital solutions — enterprise software,
              cloud platforms and AI systems for ambitious organizations.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+918072854541" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
                <Phone className="h-3.5 w-3.5 text-primary" /> +91 80728 54541
              </a>
              <a href="tel:+917604871241" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
                <Phone className="h-3.5 w-3.5 text-primary" /> +91 76048 71241
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-9 w-9 grid place-items-center rounded-lg glass hover:border-primary/40 transition"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {groups.map((g) => (
              <div key={g.t}>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{g.t}</div>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {g.links.map((l) => (
                    <li key={l.l}>
                      <a href={l.h} className="text-foreground/80 hover:text-primary transition">{l.l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {year} Thrive Tech. All rights reserved.</div>
          <div>Building Intelligent Digital Solutions.</div>
        </div>
      </div>
    </footer>
  );
}
