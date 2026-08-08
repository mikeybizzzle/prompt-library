# Bizzzle Prompts

An open library of AI prompts. Every prompt is a markdown file in this repo, and the site builds straight from those files.

Not deployed yet. To publish it, point Vercel at this repo and set `NEXT_PUBLIC_SITE_URL` to the final domain so canonical URLs, the sitemap, and the RSS feed resolve correctly.

## What this is

A personal, public collection of prompts for ChatGPT, Claude, Gemini, Midjourney and other models. Browse by category, by model, by role, or by output type. Copy any prompt, fill in its placeholders, and run it.

There is no account, no paywall, and no database. The repo is the database.

## Stack

| Piece | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, tokens defined in `src/app/globals.css` |
| Content | Markdown files with YAML frontmatter, parsed by `gray-matter` |
| Icons | `lucide-react`, plus hand-written brand marks |
| Rendering | Fully static. Every route is prerendered at build time. |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # prerenders every route
npm start        # serves the build
npm run lint
```

Node 20 or later.

## Layout

```
content/prompts/        one markdown file per prompt (the content database)
docs/                   project brief, design reference
src/app/                routes
  page.tsx              the library itself
  category/[slug]/      one category or subcategory
  tool/[slug]/          one model
  for/[slug]/           one role
  type/[slug]/          text, image, or code
  p/[slug]/             a single prompt
src/components/
  brand/                logo and social marks
  layout/               navbar, footer
  library/              hero, category rail, filters, grid, cards, search
  prompt/               the prompt workbench and its stats row
src/data/
  taxonomy.ts           categories, models, roles (the single source of truth)
  site.ts               site name, URLs, social links
src/lib/                content loader, types, helpers
```

## Add a prompt

Write one markdown file in `content/prompts/`. See [CONTRIBUTING.md](CONTRIBUTING.md) for the frontmatter fields and the house style.

## License

Prompts and code are free to use. Attribution is welcome but not required.
