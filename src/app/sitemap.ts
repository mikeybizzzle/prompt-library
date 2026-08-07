import type { MetadataRoute } from "next";

import { SITE } from "@/data/site";
import { CATEGORIES, MODELS, ROLES } from "@/data/taxonomy";
import { getAllPrompts } from "@/lib/prompts";

export default function sitemap(): MetadataRoute.Sitemap {
  const prompts = getAllPrompts();
  const url = (path: string) => `${SITE.url}${path}`;

  return [
    { url: url("/"), priority: 1 },
    ...["text", "image", "code"].map((t) => ({ url: url(`/type/${t}`), priority: 0.7 })),
    ...CATEGORIES.flatMap((c) => [
      { url: url(`/category/${c.slug}`), priority: 0.8 },
      ...c.children.map((s) => ({ url: url(`/category/${s.slug}`), priority: 0.6 })),
    ]),
    ...MODELS.map((m) => ({ url: url(`/tool/${m.slug}`), priority: 0.6 })),
    ...ROLES.map((r) => ({ url: url(`/for/${r.slug}`), priority: 0.5 })),
    ...prompts.map((p) => ({
      url: url(`/p/${p.slug}`),
      lastModified: p.publishedAt || undefined,
      priority: 0.9,
    })),
  ];
}
