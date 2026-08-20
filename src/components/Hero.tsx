import { motion } from "framer-motion";
import { ASSETS, BUY_URL, CA, CHART_URL } from "@/lib/hyper";
import { CopyAddress, HyperButton, Particles } from "@/components/ui/hyper-bits";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <img
        src={ASSETS.banner}
        alt="HyperBull cinematic banner with blue bull mascot and USDC coins"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      <div className="absolute inset-0 grid-glow opacity-40" />
      <Particles count={22} />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[11px] tracking-[0.4em] text-cyan uppercase"
          >
            The Hyper Era Begins.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-4 text-[clamp(3.5rem,13vw,9rem)] font-black uppercase leading-[0.85]"
          >
            Hyper
            <br />
            <span className="text-hyper">Bull</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 font-display text-sm font-bold uppercase tracking-[0.22em] text-foreground/90 sm:text-base"
          >
            Community driven. <span className="text-cyan">Meme fueled.</span> Hyper future.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-5 max-w-lg text-base text-muted-foreground"
          >
            The bull was found. The community gave him a name. Now the Hyper Era begins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.54 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <HyperButton href={BUY_URL}>Buy $HYPERBULL</HyperButton>
            <HyperButton href={CHART_URL} variant="ghost">
              View Chart
            </HyperButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.66 }}
            className="mt-8"
          >
            <CopyAddress address={CA} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-6 rounded-full bg-primary/40 blur-3xl animate-pulse-glow" />
          <img
            src={ASSETS.logo}
            alt="HyperBull logo emblem"
            className="relative w-full rounded-full border border-cyan/40 object-cover animate-float-slow"
            style={{ boxShadow: "var(--shadow-glow-strong)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
