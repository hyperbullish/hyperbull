import { CHART_URL } from "@/lib/hyper";
import { HyperButton, Reveal } from "@/components/ui/hyper-bits";

export function LiveChart() {
  return (
    <section id="chart" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-cyan">Live market</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="wordmark mt-3 text-[clamp(2rem,6vw,3.75rem)] leading-[0.95]">
            <span className="wordmark-chrome">Live</span> <span className="text-hyper">Chart</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Track $HYPERBULL price action in real time, straight from RadarDex.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="mt-10 overflow-hidden rounded-2xl border border-cyan/30 bg-background/60 backdrop-blur"
            style={{ boxShadow: "var(--shadow-glow-strong)" }}
          >
            <iframe
              src={CHART_URL}
              title="HyperBull ($HYPERBULL) live chart on RadarDex"
              loading="lazy"
              className="h-[520px] w-full border-0 sm:h-[640px]"
              allow="clipboard-write"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <HyperButton href={CHART_URL} variant="ghost">
              Open on RadarDex
            </HyperButton>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Chart not loading? Open it in a new tab.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
