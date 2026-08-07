import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import {
  CATEGORY_BY_SLUG,
  MODEL_BY_SLUG,
  ROLE_BY_SLUG,
  SUBCATEGORY_BY_SLUG,
  type PromptType,
} from "@/data/taxonomy";

export type Prompt = {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  category: string;
  subcategory: string;
  models: string[];
  roles: string[];
  type: PromptType;
  featured: boolean;
  publishedAt: string;
  body: string;
  /** Estimated word count of the prompt body, shown on the card. */
  words: number;
  /** Optional guide content shown below the workbench. */
  does: string[];
  tips: { title: string; detail: string }[];
  steps: { title: string; detail: string }[];
};

type GuideEntry = { title?: string; detail?: string } | string;

function toEntries(input: unknown): { title: string; detail: string }[] {
  if (!Array.isArray(input)) return [];
  return (input as GuideEntry[])
    .map((e) => (typeof e === "string" ? { title: e, detail: "" } : { title: e.title ?? "", detail: e.detail ?? "" }))
    .filter((e) => e.title);
}

const CONTENT_DIR = path.join(process.cwd(), "content", "prompts");

function parseFile(file: string): Prompt {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.mdx?$/, "");

  const missing = (["title", "description", "category", "subcategory"] as const).filter(
    (k) => !data[k],
  );
  if (missing.length) {
    throw new Error(`content/prompts/${file} is missing frontmatter: ${missing.join(", ")}`);
  }
  if (!CATEGORY_BY_SLUG.has(data.category)) {
    throw new Error(`content/prompts/${file} has unknown category "${data.category}"`);
  }
  if (!SUBCATEGORY_BY_SLUG.has(data.subcategory)) {
    throw new Error(`content/prompts/${file} has unknown subcategory "${data.subcategory}"`);
  }

  const body = content.trim();

  return {
    slug,
    title: data.title,
    emoji: data.emoji ?? "✨",
    description: data.description,
    category: data.category,
    subcategory: data.subcategory,
    models: (data.models ?? []).filter((m: string) => MODEL_BY_SLUG.has(m)),
    roles: (data.roles ?? []).filter((r: string) => ROLE_BY_SLUG.has(r)),
    type: (data.type ?? "text") as PromptType,
    featured: Boolean(data.featured),
    // YAML parses an unquoted date into a Date, so normalise both shapes to ISO.
    publishedAt:
      data.publishedAt instanceof Date
        ? data.publishedAt.toISOString().slice(0, 10)
        : String(data.publishedAt ?? "").slice(0, 10),
    body,
    words: body.split(/\s+/).length,
    does: Array.isArray(data.does) ? data.does.filter((d: unknown) => typeof d === "string") : [],
    tips: toEntries(data.tips),
    steps: toEntries(data.steps),
  };
}

let cache: Prompt[] | null = null;

export function getAllPrompts(): Prompt[] {
  if (cache) return cache;
  if (!fs.existsSync(CONTENT_DIR)) return (cache = []);

  cache = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(parseFile)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));

  return cache;
}

export function getPrompt(slug: string) {
  return getAllPrompts().find((p) => p.slug === slug);
}

export function getRelatedPrompts(prompt: Prompt, limit = 3) {
  return getAllPrompts()
    .filter((p) => p.slug !== prompt.slug)
    .map((p) => {
      let score = 0;
      if (p.subcategory === prompt.subcategory) score += 3;
      if (p.category === prompt.category) score += 2;
      if (p.models.some((m) => prompt.models.includes(m))) score += 1;
      if (p.roles.some((r) => prompt.roles.includes(r))) score += 1;
      return { p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}

/** Counts keyed by category, subcategory, model, role and type slug. */
export function getFacetCounts() {
  const prompts = getAllPrompts();
  const bump = (m: Record<string, number>, k: string) => (m[k] = (m[k] ?? 0) + 1);

  const categories: Record<string, number> = {};
  const subcategories: Record<string, number> = {};
  const models: Record<string, number> = {};
  const roles: Record<string, number> = {};
  const types: Record<string, number> = {};

  for (const p of prompts) {
    bump(categories, p.category);
    bump(subcategories, p.subcategory);
    bump(types, p.type);
    p.models.forEach((m) => bump(models, m));
    p.roles.forEach((r) => bump(roles, r));
  }

  return { categories, subcategories, models, roles, types, total: prompts.length };
}
