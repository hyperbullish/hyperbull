import { ASSETS, BUY_URL, CA, CHART_URL, X_URL } from "@/lib/hyper";
import { XIcon } from "@/components/ui/hyper-bits";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={ASSETS.logo}
                alt="HyperBull logo"
                className="h-12 w-12 shrink-0 rounded-full border border-cyan/40 object-cover"
                style={{ boxShadow: "var(--shadow-glow)" }}
              />
              <div className="min-w-0">
                <p className="wordmark truncate text-2xl">
                  <span className="wordmark-chrome">Hyper</span>
                  <span className="text-hyper">Bull</span>
                </p>
                <p className="font-mono text-[10px] tracking-[0.28em] text-cyan uppercase">
                  The Hyper Era Begins.
                </p>
              </div>
            </div>
            <p className="mt-6 font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Contract
            </p>
            <p className="mt-1 break-all font-mono text-xs text-foreground/80">{CA}</p>
          </div>

          <div className="flex flex-wrap items-start gap-x-10 gap-y-4">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-cyan"
            >
              <XIcon className="h-3.5 w-3.5" /> X
            </a>
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-cyan"
            >
              Buy
            </a>
            <a
              href={CHART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-cyan"
            >
              Chart
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-border/60 pt-6 text-xs leading-relaxed text-muted-foreground/70">
          HyperBull is a community-driven memecoin. This website is for informational and entertainment
          purposes only. HyperBull is not affiliated with or endorsed by Circle or Jeremy Allaire.
        </p>
      </div>
    </footer>
  );
}
