import "server-only";

import { MODEL_BY_SLUG, SUBCATEGORY_BY_SLUG, CATEGORY_BY_SLUG } from "@/data/taxonomy";
import type { Prompt } from "@/lib/prompts";
import type { PromptCardData } from "@/lib/types";

const PREVIEW_CHARS = 700;

export function toCardData(p: Prompt): PromptCardData {
  const category = CATEGORY_BY_SLUG.get(p.category);
  const subcategory = SUBCATEGORY_BY_SLUG.get(p.subcategory);

  return {
    slug: p.slug,
    title: p.title,
    emoji: p.emoji,
    description: p.description,
    category: p.category,
    subcategory: p.subcategory,
    models: p.models
      .map((m) => MODEL_BY_SLUG.get(m))
      .filter((m) => m !== undefined)
      .map((m) => ({ slug: m.slug, name: m.name })),
    roles: p.roles,
    type: p.type,
    featured: p.featured,
    publishedAt: p.publishedAt,
    words: p.words,
    preview: p.body.slice(0, PREVIEW_CHARS),
    body: p.body,
    tags: [
      category && { label: category.name, href: `/category/${category.slug}` },
      subcategory && { label: subcategory.name, href: `/category/${subcategory.slug}` },
    ].filter((t) => t !== undefined && t !== null) as { label: string; href: string }[],
  };
}
