import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#technology", label: "Technology" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "glass-strong" : "bg-transparent border border-transparent"
          }`}
          aria-label="Primary"
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple">
              <span className="absolute inset-0 rounded-lg blur-md bg-gradient-to-br from-primary to-purple opacity-60 group-hover:opacity-100 transition" />
              <span className="relative font-display text-sm font-bold text-primary-foreground">T</span>
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              Thrive<span className="text-primary">Tech</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors relative"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918072854541"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110 transition glow-primary"
            >
              <Phone className="h-3.5 w-3.5" />
              Call us
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="tel:+918072854541"
                  className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  <Phone className="h-4 w-4" /> Call +91 80728 54541
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
