import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";

import { FloatingDock } from "@/components/library/floating-dock";
import { SearchProvider } from "@/components/library/search-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SITE } from "@/data/site";
import { getAllPrompts } from "@/lib/prompts";

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `AI Prompt Library: prompts for ChatGPT, Claude, Gemini & Midjourney | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name}: ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const prompts = getAllPrompts();
  const docs = prompts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    emoji: p.emoji,
    keywords: [p.category, p.subcategory, ...p.models, ...p.roles, p.type].join(" ").toLowerCase(),
  }));

  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-transparent">
        {/*
          Resolves the theme before the first paint, so a dark visitor never
          sees a light flash. localStorage throws in some privacy modes, hence
          the catch.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("pl-theme");document.documentElement.dataset.theme=t==="dark"||t==="light"?t:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch(e){document.documentElement.dataset.theme="light"}})()`,
          }}
        />
        {/* Fixed dot-grid canvas sitting behind every page. */}
        <div
          aria-hidden="true"
          className="pl-dot-canvas pointer-events-none fixed left-0 top-0 -z-10 h-screen w-screen"
        />
        <SearchProvider docs={docs}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingDock slugs={prompts.map((p) => p.slug)} />
        </SearchProvider>
      </body>
    </html>
  );
}
