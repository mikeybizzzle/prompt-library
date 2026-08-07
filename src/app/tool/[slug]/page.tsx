import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LibraryPage } from "@/components/library/library-page";
import { MODELS, MODEL_BY_SLUG } from "@/data/taxonomy";
import { getAllPrompts } from "@/lib/prompts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const model = MODEL_BY_SLUG.get(slug);
  if (!model) return {};
  return {
    title: `${model.name} prompts`,
    description: `Free prompts written for ${model.name}. Copy, fill in the placeholders, and run.`,
    alternates: { canonical: `/tool/${slug}` },
  };
}

export default async function ToolPage({ params }: Params) {
  const { slug } = await params;
  const model = MODEL_BY_SLUG.get(slug);
  if (!model) notFound();

  const prompts = getAllPrompts().filter((p) => p.models.includes(slug));

  return (
    <LibraryPage
      title="Prompts written for"
      emphasis={model.name}
      subtitle={`${prompts.length} free prompts tuned to ${model.name}${
        model.vendor ? ` from ${model.vendor}` : ""
      }. Most of them port to other models with small edits.`}
      prompts={prompts}
    />
  );
}
