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
import { BUY_URL, CA, X_URL, ASSETS } from "@/lib/hyper";
import { getRequestOrigin } from "@/lib/origin.functions";

const TITLE = "HyperBull ($HYPERBULL) — The Hyper Era Begins";
const DESC =
  "HyperBull is a community-driven memecoin fueled by USDC-blue bullish energy on Arc. Community driven. Meme fueled. Hyper future.";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const image = `${origin}${ASSETS.banner}`;
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESC },
        {
          name: "keywords",
          content:
            "HyperBull, HYPERBULL, memecoin, Arc, USDC, crypto, community token, RadarDex, bull market",
        },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "author", content: "HyperBull Community" },
        { property: "og:site_name", content: "HyperBull" },
        { property: "og:locale", content: "en_US" },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESC },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${origin}/` },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "HyperBull cyberpunk blue bull mascot banner" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@HyperBullArc" },
        { name: "twitter:creator", content: "@HyperBullArc" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESC },
        { name: "twitter:image", content: image },
        { name: "twitter:image:alt", content: "HyperBull cyberpunk blue bull mascot banner" },
      ],
      links: [{ rel: "canonical", href: `${origin}/` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${origin}/#website`,
                url: `${origin}/`,
                name: "HyperBull",
                alternateName: "$HYPERBULL",
                description: DESC,
                inLanguage: "en",
                publisher: { "@id": `${origin}/#organization` },
              },
              {
                "@type": "Organization",
                "@id": `${origin}/#organization`,
                name: "HyperBull",
                url: `${origin}/`,
                logo: `${origin}${ASSETS.logo}`,
                image,
                description: DESC,
                sameAs: [X_URL, BUY_URL],
              },
              {
                "@type": "WebPage",
                "@id": `${origin}/#webpage`,
                url: `${origin}/`,
                name: TITLE,
                description: DESC,
                isPartOf: { "@id": `${origin}/#website` },
                primaryImageOfPage: { "@type": "ImageObject", url: image },
                about: {
                  "@type": "Product",
                  name: "HyperBull",
                  alternateName: "$HYPERBULL",
                  description: DESC,
                  image,
                  brand: { "@type": "Brand", name: "HyperBull" },
                  category: "Cryptocurrency",
                  identifier: CA,
                },
              },
              {
                "@type": "FAQPage",
                "@id": `${origin}/#faq`,
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is HyperBull ($HYPERBULL)?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "HyperBull is a community-driven memecoin inspired by the USDC and Arc ecosystem, built around meme culture and bullish energy.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the HyperBull contract address?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: `The official HyperBull contract address is ${CA}. Always verify before buying.`,
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How can I buy $HYPERBULL?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "You can buy $HYPERBULL on RadarDex using the official contract address linked on this site.",
                    },
                  },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
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
