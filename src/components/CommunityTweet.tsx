import { useEffect, useRef, useState } from "react";
import { X_POST_URL, X_URL } from "@/lib/hyper";
import { HyperButton, Reveal, SectionHeading, XIcon } from "@/components/ui/hyper-bits";

declare global {
  interface Window {
    twttr?: { widgets: { load: (el?: HTMLElement) => void } };
  }
}

export function CommunityTweet() {
  const holder = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const run = () => {
      window.twttr?.widgets.load(holder.current ?? undefined);
    };
    if (window.twttr) {
      run();
    } else {
      const s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      s.charset = "utf-8";
      s.onload = run;
      document.body.appendChild(s);
    }
    const t = setTimeout(() => {
      setLoaded(!!holder.current?.querySelector("iframe"));
    }, 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="community" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="04 — Community"
          title={
            <>
              From the <span className="text-hyper">Community</span>
            </>
          }
          subtitle="The HyperBull story on X."
        />

        <Reveal delay={0.1}>
          <div className="glass glow-border mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl p-4 sm:p-6">
            <div ref={holder} className="[&_.twitter-tweet]:!mx-auto">
              <blockquote className="twitter-tweet" data-theme="dark" data-dnt="true">
                <a href={X_POST_URL}>HyperBull on X</a>
              </blockquote>
            </div>

            {!loaded && (
              <div className="mt-4 flex flex-col items-center gap-4 border-t border-border/60 pt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Post not loading? Read it directly on X.
                </p>
                <HyperButton href={X_POST_URL}>View Post on X</HyperButton>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glow-border inline-flex items-center gap-3 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.18em]"
            >
              <XIcon /> @HyperBullArc
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
