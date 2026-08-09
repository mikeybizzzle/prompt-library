# Project brief

## Goal

A clean, fast, public library for storing and sharing AI prompts. The library page is the whole site. There is no marketing funnel, no pricing, and no account.

## Design source

The interface is a deliberate 1:1 reconstruction of the layout, interaction model, and visual system of `godofprompt.ai/prompt-library`, rebuilt from measured values rather than copied assets. `docs/reference/design-spec.md` records the measurements: tokens, class strings, spacing, motion, and breakpoints.

Three things differ on purpose:

1. **Name and logo.** The site is Bizzzle Prompts. The mark is a stack of three gold plates, drawn in `src/components/brand/logo.tsx`.
2. **Footer.** Own copy, own links, own social accounts.
3. **Anything that pointed off the library.** The source site's navbar leads to a blog, a shop, a prompt generator, and a sign-in dialog. None of those exist here. The navbar instead exposes the library's own axes: Categories, Models, Roles, Types. The gold button links to the GitHub repo. The floating left pill opens a random prompt instead of a paid generator.

Prompt text is original. Nothing was copied from the source site.

## Content model

The repo is the database. One markdown file per prompt in `content/prompts/`, with YAML frontmatter for the taxonomy and the body for the prompt itself. `src/lib/prompts.ts` reads the directory at build time and throws on an unknown category or a missing field, so bad content fails the build instead of shipping.

`src/data/taxonomy.ts` is the single source of truth for categories, subcategories, models, and roles. Every facet count, filter panel, and route is derived from it.

Current library: 108 prompts. 63 seed prompts, three per top-level category, plus 45 e-commerce email campaign prompts under marketing / email-campaigns converted from an existing template set. 13 carry `featured: true`: eight seeds and five email prompts.

## Routes

| Route | Shows |
| --- | --- |
| `/` | The full library |
| `/category/[slug]` | One category or one subcategory |
| `/tool/[slug]` | Prompts written for one model |
| `/for/[slug]` | Prompts picked for one role |
| `/type/[slug]` | `text`, `image`, or `code` |
| `/p/[slug]` | One prompt, with the variable workbench |

Every route prerenders. The build produces 313 static pages.

## Interaction decisions

- **Grid.** A three-column dense CSS grid with a fixed 234px row height. Tall cards span two rows on a repeating nine-card cycle, which reproduces the source rhythm without a masonry library.
- **Sort order.** "Shuffled" uses a seeded shuffle so the server and the client agree. The order looks arbitrary to a reader and stays stable across hydration.
- **Search.** A ⌘K palette over the prompt titles, descriptions, and taxonomy. It runs on a small in-memory index shipped with the page, so there is no search backend.
- **Counts.** The card footer keeps the source layout but reports real numbers. Likes and saves persist to `localStorage`. The pill shows the prompt's word count and copies the prompt on click. Nothing displays an invented view count.
- **Long-form copy.** The prose below the grid and the FAQ answers use two different treatments on purpose. `docs/reference/design-spec.md` §9.7 records both.
- **Workbench.** The prompt page detects `{{placeholders}}`, renders one input per variable, substitutes as you type, and copies the filled result. "Open in ChatGPT" copies the prompt and opens that model in a new tab.

## Not in scope now

Blog and resource pages, prompt submission through the site, user accounts, and server-side analytics. The content model and routing leave room for the first two.

## Deployment

Static output. Not deployed yet. Point Vercel at `main` and set `NEXT_PUBLIC_SITE_URL` to the final domain, which canonicals, the sitemap, and the RSS feed all read. After that, adding a prompt is a commit.
