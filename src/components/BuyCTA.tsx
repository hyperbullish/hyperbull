import { ASSETS, BUY_URL, CHART_URL } from "@/lib/hyper";
import { HyperButton, Particles, Reveal } from "@/components/ui/hyper-bits";

export function BuyCTA() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      <img
        src={ASSETS.memeStrip}
        alt="HyperBull meme panels"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/35 blur-[120px] animate-pulse-glow" />
      <Particles count={14} />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black uppercase leading-[0.9]">
            Ready to go <span className="text-hyper">hyper?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 font-display text-sm font-bold uppercase tracking-[0.3em] text-cyan sm:text-base">
            The bull is running.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <HyperButton href={BUY_URL}>Buy $HYPERBULL</HyperButton>
            <HyperButton href={CHART_URL} variant="ghost">
              View Chart
            </HyperButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
