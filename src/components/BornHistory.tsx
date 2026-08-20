import { ASSETS } from "@/lib/hyper";
import { Reveal, SectionHeading } from "@/components/ui/hyper-bits";

export function BornHistory() {
  return (
    <section id="history" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 grid-glow opacity-25" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="02 — Origin"
          title={
            <>
              Born <span className="text-hyper">History</span>
            </>
          }
          subtitle="The bull was found. HyperBull was born."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <Reveal>
            <figure className="glass glow-border group overflow-hidden rounded-3xl">
              <img
                src={ASSETS.history}
                alt="HyperBull born history timeline infographic"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass glow-border rounded-3xl p-8">
              <p className="font-mono text-[11px] tracking-[0.3em] text-cyan uppercase">The Story</p>
              <div className="mt-5 space-y-4 text-base text-foreground/90">
                <p>It started with a $USDC Bull post.</p>
                <p>The community saw the bull.</p>
                <p>We gave him a name.</p>
                <p className="font-display text-xl font-black uppercase">HyperBull was born.</p>
                <p className="text-muted-foreground">Now the bull runs into the Hyper Era.</p>
              </div>
              <ol className="mt-8 space-y-3 border-t border-border/60 pt-6">
                {["The signal was posted", "The community saw the bull", "We gave him a name", "Now he runs on Arc"].map(
                  (step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-cyan/40 font-mono text-[10px] text-cyan">
                        {i + 1}
                      </span>
                      <span className="min-w-0">{step}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
