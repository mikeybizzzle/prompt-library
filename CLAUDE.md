@AGENTS.md

# Prompt Atlas

A static prompt library. The repo is the database: one markdown file per prompt in `content/prompts/`, read at build time.

Read `docs/project-brief.md` before you change behavior, and `docs/reference/design-spec.md` before you change anything visual.

## Ground rules

1. **`src/data/taxonomy.ts` is the single source of truth** for categories, subcategories, models, and roles. Never hardcode a category name, model name, or slug anywhere else.
2. **Prompt content lives only in `content/prompts/`.** Do not move prompt text into TypeScript.
3. **The design is a reconstruction of a reference.** `docs/reference/design-spec.md` holds the measured values. When you touch layout, spacing, color, or motion, match the spec instead of improvising. If the spec and the code disagree, the spec is right and the code is a bug.
4. **Design tokens are `--color-pl-*`, `--text-pl-*`, `--radius-pl-*`** in `src/app/globals.css`. Use the Tailwind classes they generate (`bg-pl-card`, `text-pl-ink-muted`, `rounded-pl-sm`). Do not add raw hex values to components unless the spec records that exact literal.
5. **Never invent metrics.** No fake view counts, ratings, or download numbers. Likes and saves are `localStorage` only.
6. **Every route must prerender.** `npm run build` is the gate. It fails on unknown taxonomy slugs and missing frontmatter, which is intended.

## Adding things

- **A prompt:** follow `CONTRIBUTING.md`. Do not change the schema to fit one prompt.
- **A category or model:** edit `src/data/taxonomy.ts`. A category also needs its lucide icon registered in `src/components/library/icon.tsx`. A model also needs a `.model-chip-<slug>` rule in `globals.css`.
- **A page:** the library shape lives in `src/components/library/library-page.tsx`. A new facet route should reuse it and pass a narrowed prompt list.

## Client and server split

`src/lib/prompts.ts` and `src/lib/card-data.ts` are `server-only`. Components that need interactivity take a serialized `PromptCardData`, not a `Prompt`. Keep the client payload small: `preview` is a truncated body, not the whole file.

## Conventions

- Comments explain why, never what. Most files need none.
- No defensive `try`/`catch` around code that cannot fail. Content errors should throw at build time.
- Prose in the UI and in docs: plain English, no hype words, no em dashes.

## Checks

```bash
npm run build     # the real gate: type-checks and prerenders all routes
npm run lint
```

For visual work, run `npm run build && npm start`, open the page, and compare against the spec at 1440px, 900px, and 390px.
