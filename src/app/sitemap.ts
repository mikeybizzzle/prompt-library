import type { MetadataRoute } from "next";

import { SITE } from "@/data/site";
import { CATEGORIES, MODELS, ROLES } from "@/data/taxonomy";
import { getAllPrompts, getPopulatedFacets } from "@/lib/prompts";

export default function sitemap(): MetadataRoute.Sitemap {
  const prompts = getAllPrompts();
  const has = getPopulatedFacets();
  const url = (path: string) => `${SITE.url}${path}`;

  return [
    { url: url("/"), priority: 1 },
    ...["text", "image", "code"]
      .filter((t) => has.types.has(t))
      .map((t) => ({ url: url(`/type/${t}`), priority: 0.7 })),
    ...CATEGORIES.filter((c) => has.categories.has(c.slug)).flatMap((c) => [
      { url: url(`/category/${c.slug}`), priority: 0.8 },
      ...c.children
        .filter((s) => has.subcategories.has(s.slug))
        .map((s) => ({ url: url(`/category/${s.slug}`), priority: 0.6 })),
    ]),
    ...MODELS.filter((m) => has.models.has(m.slug)).map((m) => ({
      url: url(`/tool/${m.slug}`),
      priority: 0.6,
    })),
    ...ROLES.filter((r) => has.roles.has(r.slug)).map((r) => ({
      url: url(`/for/${r.slug}`),
      priority: 0.5,
    })),
    ...prompts.map((p) => ({
      url: url(`/p/${p.slug}`),
      lastModified: p.publishedAt || undefined,
      priority: 0.9,
    })),
  ];
}
