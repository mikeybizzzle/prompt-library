export const SITE = {
  name: "Bizzzle Prompts",
  shortName: "Bizzzle",
  tagline: "The Open Prompt Library",
  description:
    "A free, curated library of AI prompts for ChatGPT, Claude, Gemini, Midjourney and every major model. Browse by category, model, or role.",
  // Set NEXT_PUBLIC_SITE_URL once deployed; canonicals, sitemap, and RSS use it.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  repo: "https://github.com/mikeybizzzle/prompt-library",
  author: "Mike Bernard",
  // Only list an account that actually exists. The footer renders whatever is
  // here, so an empty entry removes its icon rather than linking to a homepage.
  social: {
    github: "https://github.com/mikeybizzzle",
  },
} as const;
