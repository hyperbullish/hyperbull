import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Thesis } from "@/components/Thesis";
import { BornHistory } from "@/components/BornHistory";
import { MemeGallery } from "@/components/MemeGallery";
import { CommunityTweet } from "@/components/CommunityTweet";
import { TokenSection } from "@/components/TokenSection";
import { BuyCTA } from "@/components/BuyCTA";
import { Footer } from "@/components/Footer";
import { BUY_URL } from "@/lib/hyper";

const TITLE = "HyperBull ($HYPERBULL) — The Hyper Era Begins";
const DESC =
  "HyperBull is a community-driven memecoin fueled by USDC-blue bullish energy on Arc. Community driven. Meme fueled. Hyper future.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/assets/hyperlogo.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: "/assets/hyperlogo.jpeg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Thesis />
        <BornHistory />
        <MemeGallery />
        <CommunityTweet />
        <TokenSection />
        <BuyCTA />
      </main>
      <Footer />
      <a
        href={BUY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-4 bottom-4 z-40 rounded-full border border-cyan/40 py-3.5 text-center text-xs font-black uppercase tracking-[0.2em] text-primary-foreground sm:hidden"
        style={{ background: "var(--gradient-hyper)", boxShadow: "var(--shadow-glow-strong)" }}
      >
        Buy $HYPERBULL
      </a>
    </div>
  );
}
