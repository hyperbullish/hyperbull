import { ASSETS, CA } from "@/lib/hyper";
import { CopyAddress, Reveal, SectionHeading } from "@/components/ui/hyper-bits";

const FACTS = [
  { label: "Network", value: "ARC" },
  { label: "Token", value: "$HYPERBULL" },
  { label: "Status", value: "LIVE" },
];

export function TokenSection() {
  return (
    <section id="token" className="relative overflow-hidden py-24 sm:py-28">
      <img
        src={ASSETS.memeRide}
        alt="HyperBull mascot charging through space"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading eyebrow="05 — Token" title={<span className="text-hyper">$HYPERBULL</span>} />

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="font-mono text-[11px] tracking-[0.3em] text-cyan uppercase">Contract Address</p>
            <CopyAddress address={CA} compact />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {FACTS.map((f, i) => (
            <Reveal key={f.label} delay={0.08 * i}>
              <div className="glass glow-border h-full rounded-3xl p-7 text-center transition-transform duration-300 hover:-translate-y-1.5">
                <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{f.label}</p>
                <p className="mt-3 font-display text-2xl font-black uppercase text-foreground">{f.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
