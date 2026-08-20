import { motion, type Variants } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState, type ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      {eyebrow ? (
        <p className="font-mono text-xs tracking-[0.35em] text-cyan/80 uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

export function HyperButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "shine inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.04]";
  const styles =
    variant === "primary"
      ? "text-primary-foreground glow-border border border-cyan/40"
      : "glass text-foreground glow-border";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      style={variant === "primary" ? { background: "var(--gradient-hyper)" } : undefined}
    >
      {children}
    </a>
  );
}

export function CopyAddress({ address, compact = false }: { address: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="glass glow-border grid w-full max-w-xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-4 py-3">
      <div className="min-w-0">
        {!compact && (
          <p className="font-mono text-[10px] tracking-[0.3em] text-cyan/80 uppercase">CA</p>
        )}
        <p className="truncate font-mono text-xs text-foreground/90 sm:text-sm">{address}</p>
      </div>
      <button
        onClick={copy}
        aria-label="Copy contract address"
        className="shrink-0 inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-primary/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-cyan transition-colors hover:bg-primary/30"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Particles({ count = 18 }: { count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan/70 animate-float-slow"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            opacity: 0.25 + ((i % 4) * 0.15),
            animationDelay: `${i * 0.6}s`,
            boxShadow: "0 0 12px var(--cyan)",
          }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <span
          key={`s${i}`}
          className="absolute h-px w-1/2 animate-streak"
          style={{
            top: `${18 + i * 28}%`,
            background: "linear-gradient(90deg, transparent, var(--cyan), transparent)",
            animationDelay: `${i * 2.3}s`,
          }}
        />
      ))}
    </div>
  );
}
