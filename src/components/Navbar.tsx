import { useEffect, useState } from "react";
import { Menu, X as Close } from "lucide-react";
import { ASSETS, BUY_URL, X_URL } from "@/lib/hyper";
import { XIcon } from "@/components/ui/hyper-bits";

const LINKS = [
  { label: "Thesis", href: "#thesis" },
  { label: "History", href: "#history" },
  { label: "Memes", href: "#memes" },
  { label: "Community", href: "#community" },
  { label: "Token", href: "#token" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={ASSETS.logo}
            alt="HyperBull logo"
            className="h-10 w-10 shrink-0 rounded-full border border-cyan/40 object-cover"
            style={{ boxShadow: "var(--shadow-glow)" }}
          />
          <span className="truncate text-lg font-black uppercase tracking-[0.18em]">
            Hyper<span className="text-hyper">Bull</span>
          </span>
        </a>

        <ul className="hidden items-center justify-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-cyan"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="HyperBull on X"
            className="glass glow-border hidden h-10 w-10 items-center justify-center rounded-full text-foreground sm:inline-flex"
          >
            <XIcon />
          </a>
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shine hidden rounded-full border border-cyan/40 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:scale-105 sm:inline-flex"
            style={{ background: "var(--gradient-hyper)" }}
          >
            Buy $HYPERBULL
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-border/70 px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs tracking-[0.22em] uppercase text-foreground/90"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan/40 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground"
              style={{ background: "var(--gradient-hyper)" }}
            >
              Buy $HYPERBULL
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex h-10 w-10 items-center justify-center rounded-full"
              aria-label="HyperBull on X"
            >
              <XIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
