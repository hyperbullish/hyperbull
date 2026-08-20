import { ASSETS } from "@/lib/hyper";
import { Reveal, SectionHeading } from "@/components/ui/hyper-bits";

const CARDS = [
  { name: "USDC", role: "The Money", img: ASSETS.memeLove, copy: "The digital dollar powering the internet economy." },
  { name: "ARC", role: "The Infrastructure", img: ASSETS.banner, copy: "The rails the bull runs on, built for onchain speed." },
  { name: "HyperBull", role: "The Energy", img: ASSETS.logo, copy: "The community, the memes, the hyper momentum." },
];

export function Thesis() {
  return (
    <section id="thesis" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="01 — Thesis"
          title={
            <>
              The Hyper <span className="text-hyper">Thesis</span>
            </>
          }
          subtitle="HyperBull is a community-driven memecoin built around the bullish energy surrounding USDC, Arc and the next generation of onchain finance."
        />

        <Reveal delay={0.1}>
          <p className="mt-10 text-center font-display text-xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            USDC is the money.
            <br />
            <span className="text-cyan">Arc is the infrastructure.</span>
            <br />
            HyperBull is the energy.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.name} delay={0.1 * i}>
              <article className="glass glow-border group h-full overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={c.img}
                    alt={`${c.name} visual`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase">{c.name}</h3>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.28em] text-cyan uppercase">{c.role}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{c.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground/70">
            HyperBull is a community-driven memecoin and is not affiliated with or endorsed by Circle or Jeremy Allaire.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
