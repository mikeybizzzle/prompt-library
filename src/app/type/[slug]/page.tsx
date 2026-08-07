import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LibraryPage } from "@/components/library/library-page";
import { getAllPrompts } from "@/lib/prompts";

type Params = { params: Promise<{ slug: string }> };

const COPY: Record<string, { title: string; emphasis: string; subtitle: string }> = {
  text: {
    title: "Text prompts, built for",
    emphasis: "chat models",
    subtitle:
      "Structured briefs for ChatGPT, Claude, Gemini and Grok. Each one sets a role, context, task, and an exact output format.",
  },
  image: {
    title: "Image prompts for",
    emphasis: "generation models",
    subtitle:
      "Dense scene descriptions for Midjourney, Nano Banana, Flux and friends, with the variables you will want to swap.",
  },
  code: {
    title: "Code prompts for",
    emphasis: "your editor",
    subtitle:
      "Prompts whose output is source code: refactors, tests, migrations, and review passes for Claude Code, Cursor and the rest.",
  },
};

export function generateStaticParams() {
  return Object.keys(COPY).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const copy = COPY[slug];
  if (!copy) return {};
  return {
    title: `${slug[0].toUpperCase()}${slug.slice(1)} prompts`,
    description: copy.subtitle,
    alternates: { canonical: `/type/${slug}` },
  };
}

export default async function TypePage({ params }: Params) {
  const { slug } = await params;
  const copy = COPY[slug];
  if (!copy) notFound();

  return (
    <LibraryPage
      {...copy}
      prompts={getAllPrompts().filter((p) => p.type === slug)}
      activeType={slug}
    />
  );
}
