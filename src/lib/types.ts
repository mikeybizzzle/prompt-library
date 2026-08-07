import type { PromptType } from "@/data/taxonomy";

/** The slice of a prompt that is serialised to the client for the grid. */
export type PromptCardData = {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  category: string;
  subcategory: string;
  models: { slug: string; name: string }[];
  roles: string[];
  type: PromptType;
  featured: boolean;
  publishedAt: string;
  words: number;
  /** First lines of the prompt, shown in the code preview on tall cards. */
  preview: string;
  /** Full prompt text, used by the copy button. */
  body: string;
  tags: { label: string; href: string }[];
};
