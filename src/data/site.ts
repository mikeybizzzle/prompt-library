export const SITE = {
  name: "Prompt Atlas",
  shortName: "Atlas",
  tagline: "The Open Prompt Library",
  description:
    "A free, curated library of AI prompts for ChatGPT, Claude, Gemini, Midjourney and every major model. Browse by category, model, or role.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prompt-atlas.vercel.app",
  repo: "https://github.com/mikeybizzzle/prompt-library",
  author: "Mike Bernard",
  social: {
    github: "https://github.com/mikeybizzzle",
    x: "https://x.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;
