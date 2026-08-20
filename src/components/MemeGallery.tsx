import { useState } from "react";
import { X as Close } from "lucide-react";
import { ASSETS } from "@/lib/hyper";
import { Reveal, SectionHeading } from "@/components/ui/hyper-bits";

const MEMES = [
  { src: ASSETS.memeStrip, alt: "HyperBull four panel comic meme", span: "sm:col-span-2 sm:row-span-2" },
  { src: ASSETS.memeLove, alt: "Hyper Love HyperBull mascot meme", span: "" },
  { src: ASSETS.memeRide, alt: "Let's go HyperBull rocket ride meme", span: "sm:col-span-2" },
  { src: ASSETS.banner, alt: "HyperBull banner artwork", span: "" },
  { src: ASSETS.logo, alt: "HyperBull logo emblem", span: "" },
  { src: ASSETS.history, alt: "HyperBull born history infographic", span: "sm:col-span-2" },
];

export function MemeGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="memes" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="03 — Gallery"
          title={
            <>
              The Meme <span className="text-hyper">Vault</span>
            </>
          }
          subtitle="Where the bull gets hyper."
        />

        <div className="mt-14 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[170px]">
          {MEMES.map((m, i) => (
            <Reveal key={m.src + i} delay={0.05 * i} className={m.span}>
              <button
                onClick={() => setActive(i)}
                className="group glass glow-border relative h-full w-full overflow-hidden rounded-2xl"
                aria-label={`Open ${m.alt}`}
              >
                <img
                  src={m.src}
                  alt={m.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1.5deg]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-30" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="glass absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full"
            aria-label="Close lightbox"
            onClick={() => setActive(null)}
          >
            <Close className="h-5 w-5" />
          </button>
          <img
            src={MEMES[active]?.src}
            alt={MEMES[active]?.alt ?? "HyperBull meme"}
            className="max-h-[85vh] w-auto max-w-full rounded-2xl border border-cyan/40"
            style={{ boxShadow: "var(--shadow-glow-strong)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
