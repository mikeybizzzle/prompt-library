import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { LibraryPage } from "@/components/library/library-page";
import { ROLES, ROLE_BY_SLUG } from "@/data/taxonomy";
import { getAllPrompts } from "@/lib/prompts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ROLES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const role = ROLE_BY_SLUG.get(slug);
  if (!role) return {};
  return {
    title: `AI prompts for ${role.name.toLowerCase()}`,
    description: `Free AI prompts picked for ${role.name.toLowerCase()}.`,
    alternates: { canonical: `/for/${slug}` },
  };
}

export default async function RolePage({ params }: Params) {
  const { slug } = await params;
  const role = ROLE_BY_SLUG.get(slug);
  if (!role) notFound();

  const prompts = getAllPrompts().filter((p) => p.roles.includes(slug));

  return (
    <LibraryPage
      title="Prompts for"
      emphasis={role.name}
      subtitle={`${prompts.length} free prompts picked for ${role.name.toLowerCase()}. Copy one, fill in the placeholders, and run it.`}
      prompts={prompts}
    />
  );
}
