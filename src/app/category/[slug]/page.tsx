import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LibraryPage } from "@/components/library/library-page";
import { CATEGORIES, CATEGORY_BY_SLUG, SUBCATEGORY_BY_SLUG } from "@/data/taxonomy";
import { getAllPrompts } from "@/lib/prompts";

type Params = { params: Promise<{ slug: string }> };

function resolve(slug: string) {
  const category = CATEGORY_BY_SLUG.get(slug);
  if (category) {
    return {
      name: category.name,
      slug: category.slug,
      parent: category.slug,
      prompts: getAllPrompts().filter((p) => p.category === slug),
    };
  }
  const sub = SUBCATEGORY_BY_SLUG.get(slug);
  if (sub) {
    return {
      name: sub.name,
      slug: sub.slug,
      parent: sub.parent,
      prompts: getAllPrompts().filter((p) => p.subcategory === slug),
    };
  }
  return null;
}

export function generateStaticParams() {
  return CATEGORIES.flatMap((c) => [{ slug: c.slug }, ...c.children.map((s) => ({ slug: s.slug }))]);
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const found = resolve(slug);
  if (!found) return {};
  return {
    title: `${found.name} AI prompts`,
    description: `${found.prompts.length} free ${found.name.toLowerCase()} prompts for ChatGPT, Claude, Gemini and more.`,
    alternates: { canonical: `/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const found = resolve(slug);
  if (!found) notFound();

  return (
    <LibraryPage
      title={`${found.name} prompts,`}
      emphasis="ready to run"
      subtitle={`${found.prompts.length} free ${found.name.toLowerCase()} prompts. Copy one, fill in the placeholders, and run it on the model of your choice.`}
      scope={found.name}
      prompts={found.prompts}
      activeCategory={found.parent}
    />
  );
}
