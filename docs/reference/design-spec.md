# godofprompt.ai/prompt-library — Exact Design Specification

Source of truth for this document:

- `ref/page.clean.html` — server-rendered DOM, scripts stripped (429 KB)
- `ref/page.html` — same page with scripts (JS chunk bodies are NOT included; only `<script src>` tags)
- `ref/b.css` — compiled Tailwind v4 output (utilities + `@theme` tokens)
- `ref/a.css` — Next.js font module CSS (`@font-face` for Roboto / Roboto Mono)
- `ref/gop-top.png`, `ref/gop-mid.png`, `ref/gop-bottom.png` — 1440×1000 viewport captures
- `ref/gop-structure.json`, `ref/gop-theme.json`, `ref/gop-classes.json`, `ref/gop-cards.json` — live-DOM measurements

Every class string below is copied verbatim from the source DOM. Where a value is deduced
rather than read directly, it is tagged **INFERRED**.

Target stack: Next.js 16 (App Router) + Tailwind CSS v4.

---

## 1. Global

### 1.1 Document root

```html
<html lang="en" class="roboto_d6a62a4e-module___nFYPa__variable roboto_mono_b7aa4946-module__53OQWW__variable h-full antialiased">
<body class="min-h-full flex flex-col bg-transparent">
```

The two module classes only inject font family variables:

```css
.roboto_d6a62a4e-module___nFYPa__variable      { --font-roboto: "Roboto", "Roboto Fallback" }
.roboto_mono_b7aa4946-module__53OQWW__variable { --font-roboto-mono: "Roboto Mono", "Roboto Mono Fallback" }
```

`<body>` is `bg-transparent` on purpose — the page background is painted by the fixed
canvas described in §1.3, which sits at `-z-10`.

Body children in order: hidden Next.js marker div, GTM `<noscript>` iframe, the background
`<canvas>`, `<nav aria-label="Primary">`, `<main class="flex-1">`, `<footer>`,
`<next-route-announcer>`.

### 1.2 Head / meta

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#f5f5f5">
<meta name="color-scheme" content="light">
<title>AI Prompt Library — 6,000+ Prompts for ChatGPT, Claude, Gemini &amp; Midjourney | God of Prompt</title>
<link rel="canonical" href="https://godofprompt.ai/prompt-library">
<link rel="manifest" href="/manifest.webmanifest">
```

Preloaded fonts (3 woff2 subsets) and `<link rel="preload" as="image" href="/images/brand/gop-logo.svg">`.

The page ships three JSON-LD blocks inside `<main>`: `CollectionPage`, `BreadcrumbList`, `ItemList`.

There is also an animated favicon injected as a 64×64 base64 PNG with the attribute
`data-gop-animated-favicon="true"`.

### 1.3 Page background + dot grid

```html
<canvas aria-hidden="true"
        class="fixed left-0 top-0 -z-10 h-screen w-screen pointer-events-none bg-gop-page"
        width="2880" height="2000"
        style="width: 1440px; height: 1000px;"></canvas>
```

- `.bg-gop-page { background-color: #f5f5f5 }` — the base page colour.
- Canvas backing store is 2× CSS size (`2880×2000` for `1440×1000`), i.e. DPR-2 aware.
- The canvas is `position: fixed`, full viewport, `z-index: -10`, `pointer-events: none`.

**Dot grid, measured from the screenshots (1440-wide, 1× capture):**

| Property | Value |
| --- | --- |
| Grid spacing | **16 px** on both axes (dots at x = 15, 31, 47, 63, 79, 95, … / y = 203, 219, 235, …) |
| Dot size | **2 × 2 px** — a hard square, no antialiasing ramp, so drawn with `fillRect`, not `arc()` |
| Dot colour (rendered) | **`rgb(230, 230, 230)` = `#e6e6e6`** (measured exactly, uniform, no edge softening) |
| Background behind dots | `#f5f5f5` |
| Effective alpha if painted as ink | ≈ `rgba(22, 20, 21, 0.067)` over `#f5f5f5` → `#e6e6e6` — **INFERRED** |

Reconstruction (CSS-only equivalent, **INFERRED** — the original is canvas-painted and the
JS chunk that draws it is not in the capture):

```css
background-color: #f5f5f5;
background-image: radial-gradient(#e6e6e6 0 0);      /* or: linear-gradient squares */
/* equivalent square-dot version: */
background-image:
  linear-gradient(#e6e6e6 2px, transparent 2px),
  linear-gradient(90deg, #e6e6e6 2px, transparent 2px);
background-size: 16px 16px;
background-position: 15px 15px;
```

Notes:
- The y-phase differs between `gop-top.png` (dots at y = 15/16) and `gop-mid.png` (y = 203/204).
  Either the grid offsets with scroll, or the full-page capture stitched a `position: fixed`
  layer at different scroll offsets. **INFERRED** — treat the grid as viewport-fixed and static;
  the phase drift is a capture artefact.
- No `getContext`, `fillRect`, `devicePixelRatio`, or dot-drawing source is present in any
  saved file. The drawing code lives in an un-captured `/_next/static/chunks/*.js`.
- The dot pattern is reused as a mask for the footer wordmark — see §9.5
  (`data-dots-mask="/images/brand/bg-text.svg"`).

### 1.4 Fonts

```css
--font-roboto:      "Roboto", "Roboto Fallback";
--font-roboto-mono: "Roboto Mono", "Roboto Mono Fallback";

--font-sans: var(--font-roboto), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--default-font-family: var(--font-roboto), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--default-mono-font-family: var(--font-roboto-mono), ui-monospace, "SF Mono", Menlo, monospace;
```

`a.css` ships `@font-face` blocks for **Roboto** in `font-style: normal` and `italic`,
`font-stretch: 100%`, `font-display: swap`, weights **300, 400, 500, 600, 700, 900**, split
across ~10 unicode-range subsets each. **Roboto Mono** is shipped the same way.

Weights actually used in the page markup:

| Token | Where |
| --- | --- |
| `font-light` (300) | `<h1>` |
| `font-normal` (400) | nav links, body copy, `Read more on the topic` `<h2>` |
| `font-medium` (500) | card `<h3>`, FAQ `<summary>`, article card `<h3>`, floating-pill labels, chips |
| `font-semibold` (600) | `<em>` in `<h1>`, `Browse by …` `<h2>`, footer column `<h3>` |
| `font-bold` (700) | `<strong>Prompt Engineering</strong>` inside the articles heading, `.prose-hub h2` |

Mono (`font-mono`) is used only in the card code-preview `<pre>`.

### 1.5 Container widths

| Context | Class / value |
| --- | --- |
| Main page container | `mx-auto w-full max-w-[1232px] px-4 py-10 sm:px-6 max-[640px]:py-6` |
| Navbar pill | `mx-auto … w-full max-w-[1200px]` inside `<nav class="… px-6 pt-6 max-[640px]:px-3 max-[640px]:pt-4">` |
| Footer | `mx-auto w-[90%] max-w-[1100px] max-[900px]:w-full max-[900px]:px-5` |
| SEO prose block | `max-w-[880px]` |
| Hero subtitle | `max-w-[520px]` |
| Hero search field | `w-full max-w-[480px]` |
| Filter popovers | `w-[280px] max-w-[calc(100vw-32px)]` |

Design tokens define container sizes that are declared but **not referenced by any utility
in the page markup**: `--gop-container-narrow: 720px`, `--gop-container-base: 1100px`,
`--gop-container-wide: 1280px`.

At 1440 px viewport: container is 1232 wide, centred (left edge x = 104), inner content
1232 − 2×24 = **1184 px**.

---

## 2. Design tokens

### 2.1 `@theme` layer (`:root, :host` in `b.css`)

```css
--color-gop-ink:              #161415;
--color-gop-ink-muted:        #161415a6;   /* 65% */
--color-gop-ink-soft:         #16141573;   /* 45% */
--color-gop-ink-faint:        #1614152e;   /* 18% */
--color-gop-gold:             #fdc302;
--color-gop-dark:             #2d2b2c;
--color-gop-accent-yellow:    #fcd94a;
--color-gop-on-dark:          #fff;
--color-gop-on-dark-muted:    #ffffffb3;   /* 70% */
--color-gop-menu-avatar-bg:   #242223;
--color-gop-card:             #242223;

--text-gop-h6:            40px;
--text-gop-h7:            32px;
--text-gop-subtitle-sm:   20px;
--text-gop-body:          16px;

--radius-gop-md:          12px;
```

### 2.2 Runtime tokens (`:root` in `b.css`, shadcn layer)

```css
--background: #f5f5f5;   --foreground: #161415;
--card: #fff;            --card-foreground: #161415;
--popover: #fff;         --popover-foreground: #161415;
--primary: #161415;      --primary-foreground: #fff;
--secondary: #fafafa;    --secondary-foreground: #161415;
--muted: #f5f5f5;        --muted-foreground: #161415a6;
--accent: #fcd94a;       --accent-foreground: #161415;
--destructive: #dc2626;
--border: #16141514;     --input: #16141514;   --ring: #fcd94a;
--chart-1: #fdc302;  --chart-2: #4da770;  --chart-3: #d97858;  --chart-4: #4d6bfe;  --chart-5: #615ced;
--radius: .625rem;       /* 10px */
--sidebar: #fff;                       --sidebar-foreground: #161415;
--sidebar-primary: #161415;            --sidebar-primary-foreground: #fff;
--sidebar-accent: #f5f5f5;             --sidebar-accent-foreground: #161415;
--sidebar-border: #16141514;           --sidebar-ring: #fcd94a;
```

### 2.3 `--gop-*` motion / layout tokens

```css
--gop-gradient-gold:   linear-gradient(to top, #fdc302 0%, #ffd83a 100%);

--gop-motion-fast:     .12s;
--gop-motion-base:     .2s;
--gop-motion-slow:     .32s;
--gop-ease-standard:   cubic-bezier(.4, 0, .2, 1);
--gop-ease-emphasized: cubic-bezier(.2, 0, 0, 1);
--gop-ease-spring:     cubic-bezier(.34, 1.56, .64, 1);

--gop-container-narrow: 720px;
--gop-container-base:   1100px;
--gop-container-wide:   1280px;
--gop-navbar-height:    72px;

--gop-z-base:     1;
--gop-z-raised:   10;
--gop-z-sticky:   20;
--gop-z-dropdown: 30;
--gop-z-overlay:  40;
--gop-z-modal:    50;
--gop-z-toast:    60;
```

Under `@media (prefers-reduced-motion: reduce)` all three motion durations are overridden to `1ms`.

### 2.4 Compiled `gop-*` utilities (colours not exposed as `--color-*` vars)

These exist only as compiled utility classes — they must be re-declared as `@theme` colours
in the rebuild:

```css
.bg-gop-capsule      { background-color: #eaeaea }   /* segmented-control / filter track */
.bg-gop-ink-deeper   { background-color: #100f0f }
.border-gop-ink-hairline { border-color: #16141514 } /* 8% */
.border-gop-ink-edge     { border-color: #1614150f } /* 6% */
.text-gop-mute       { color: #7f7f7f }
.text-gop-menu-icon  { color: #8f8e8f }
.text-gop-gold-dark  { color: #b88800 }
.hover\:bg-gop-dark-hover:hover { background-color: #292728 }
```

### 2.5 Radius scale

```css
.rounded-gop-sm  { border-radius:  8px }
.rounded-gop-md  { border-radius: 12px }   /* = --radius-gop-md */
.rounded-gop-lg  { border-radius: 18px }
.rounded-gop-xl  { border-radius: 24px }
```

Arbitrary radii used in markup: `rounded-[12px]` (category tiles), `rounded-[14px]` (FAQ),
`rounded-[16px]` (article cards, card preview well), `rounded-[20px]` (prompt cards),
`rounded-[8px]` (kbd, chevron chip), `rounded-3xl` (popovers, mobile drawer), `rounded-full`.

### 2.6 Typography utilities

```css
.text-gop-caption  { font-size: 12px; line-height: 16px; letter-spacing: .2px; font-weight: 400 }
.text-gop-body-sm  { font-size: 14px; line-height: 20px; letter-spacing: 0;    font-weight: 400 }
.text-gop-body     { font-size: 16px; line-height: 24px; letter-spacing: 0;    font-weight: 400 }
.text-gop-body-lg  { font-size: 18px; line-height: 28px; letter-spacing: 0;    font-weight: 400 }
```

### 2.7 Model chip colours (`gop-model-*`)

```css
.bg-gop-model-chatgpt      { background-color: #4da770 }
.bg-gop-model-claude       { background-color: #d97858 }
.bg-gop-model-claude-code  { background-color: #b6553d }
.bg-gop-model-cursor       { background-color: #1f1f1f }
.bg-gop-model-deepseek     { background-color: #4d6bfe }
.bg-gop-model-grok         { background-color: #000    }
.bg-gop-model-midjourney   { background-color: #344163 }
.bg-gop-model-nano-banana  { background-color: #ebc519 }
.bg-gop-model-notebooklm   { background-color: #1a73e8 }
.bg-gop-model-qwen         { background-color: #615ced }
.bg-gop-model-windsurf     { background-color: #00b4d8 }

/* Gemini is a gradient, not a flat colour: */
.from-gop-model-gemini-from { --tw-gradient-from: #f94342 }
.to-gop-model-gemini-to     { --tw-gradient-to:   #3789ff }
```

### 2.8 Raw hex values hardcoded in class strings

| Hex | Count | Usage |
| --- | --- | --- |
| `#f7f7f7` | 105 | navbar link text, popover row text |
| `#8f8e8f` | 69 | popover sub-icon / expand-chevron colour |
| `#4f4e4f` | 27 | category-tile label, "Sort by:" label, "All Articles" pill |
| `#1b1a1a` | 9 | `<h1>`, section `<h2>`, FAQ `<summary>` |
| `#eaeaea` | 7 | FAQ `open:bg-[#EAEAEA]` |
| `#2a2829` | 5 | card preview fade-out gradient end stop |
| `#fdc302` | 2 | Sign-In gold ring shadow |
| `#3f3000` | 2 | Sign-In button text |
| `#f5f5f5` | 1 | footer wordmark fade gradient |
| `#c7ccd4` | 1 | "Custom Prompts" floating pill icon |
| `#a8a7a8` | 1 | hero subtitle text |

---

## 3. Navbar — sticky floating pill

### 3.1 Outer shell

```html
<nav aria-label="Primary"
     class="w-full sticky top-0 z-50 px-6 pt-6 max-[640px]:px-3 max-[640px]:pt-4"
     data-figma-node="544:1465">
```

`z-50` (not the token `--gop-z-modal`). No blur / no scrolled-state class on the outer nav.

### 3.2 The pill

```html
<div class="relative z-20 mx-auto flex h-[60px] w-full max-w-[1200px] items-center justify-between rounded-full border border-gop-dark bg-gop-dark p-2 text-[#f7f7f7] shadow-[0_20px_25px_-5px_rgba(13,12,8,0.10),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
```

- Height **60 px**, `rounded-full` (30 px radius), padding **8 px**.
- Background and border both `#2d2b2c` (`gop-dark`). **No backdrop blur** on the pill itself —
  it is fully opaque. (Blur appears only on the filter popovers and the floating pills.)
- Shadow: `0 20px 25px -5px rgba(13,12,8,0.10), 0 10px 10px -5px rgba(0,0,0,0.04)`.

### 3.3 Logo

```html
<a aria-label="God of Prompt home"
   class="relative size-11 shrink-0 overflow-hidden rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gop-gold"
   href="/">
  <img alt="" width="44" height="44" decoding="async" data-nimg="1"
       class="size-11" style="color:transparent" src="/images/brand/gop-logo.svg">
</a>
```

### 3.4 Desktop nav cluster

```html
<div class="ml-auto flex items-center gap-8 max-[1080px]:hidden">
  <ul class="m-0 flex h-8 list-none items-center gap-3 p-0">
```

Item spacing: `gap-3` (12 px) between links, `gap-8` (32 px) between the `<ul>` and the Sign In button.

**Base link class (verbatim):**

```
inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full px-3 text-[14px] font-normal leading-5 tracking-normal text-[#f7f7f7] no-underline transition-colors duration-150 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gop-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gop-dark
```

**Active pill** appends `bg-white/[0.10]` and carries `aria-current="page"`:

```html
<a aria-current="page" class="… focus-visible:ring-offset-gop-dark bg-white/[0.10]" href="/prompt-library">Prompts</a>
```

**Tools link** (has a chevron; appends `w-[75px] pl-3 pr-2`):

```html
<li class="group/tools relative">
  <a class="… focus-visible:ring-offset-gop-dark w-[75px] pl-3 pr-2 " href="/tools">Tools<img alt="" loading="lazy" width="10" height="6" decoding="async" data-nimg="1" class="ml-1 h-[6px] w-[10px] transition-transform duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tools:rotate-180 motion-reduce:transition-none" style="color:transparent" src="/images/icons/navbar-chevron.svg"></a>
```

**Free Guides link** carries a gift icon:

```html
<img alt="" loading="lazy" width="14" height="14" decoding="async" data-nimg="1" class="ml-1 size-[14px]" style="color:transparent" src="/images/icons/navbar-gift.svg">
```

Nav order: `Prompts` (`/prompt-library`, active) · `Tools` (`/tools`, dropdown) ·
`Free Guides` (`/guides`) · `Products` (`/products`) · `Contact us` (`/contact`) · `Blog` (`/blog/`).

### 3.5 Tools dropdown

```html
<div class="invisible absolute left-1/2 top-full min-w-60 -translate-x-1/2 translate-y-1 pt-2 opacity-0 transition-[opacity,transform,visibility] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tools:visible group-hover/tools:translate-y-0 group-hover/tools:opacity-100 group-focus-within/tools:visible group-focus-within/tools:translate-y-0 group-focus-within/tools:opacity-100 motion-reduce:transition-none">
  <div class="flex flex-col gap-1 rounded-b-3xl bg-gop-dark p-2">
    <a class="group/row flex min-h-10 items-center gap-2.5 rounded-full px-3 text-[13.5px] text-[#f7f7f7] no-underline transition-colors duration-150 hover:bg-white/[0.08] hover:text-white " href="/prompt-generator">
      <svg … class="lucide lucide-wand-sparkles text-gop-menu-icon transition-colors group-hover/row:text-white" width="17" height="17" stroke-width="2" aria-hidden="true">…</svg>
      <span>Prompt Generator</span>
    </a>
    <a class="group/row flex min-h-10 items-center gap-2.5 rounded-full px-3 text-[13.5px] text-[#f7f7f7] no-underline transition-colors duration-150 hover:bg-white/[0.08] hover:text-white " href="/tools">
      <svg … class="lucide lucide-sparkles text-gop-menu-icon transition-colors group-hover/row:text-white" width="17" height="17" stroke-width="2" aria-hidden="true">…</svg>
      <span>Top AI Tools</span>
    </a>
  </div>
</div>
```

Opens on **hover** (`group-hover/tools`) and on **focus-within**. Duration 180 ms,
easing `cubic-bezier(0.16, 1, 0.3, 1)`. It is `rounded-b-3xl` only, so it reads as
hanging off the bottom of the pill.

### 3.6 Sign In button (desktop)

```html
<button type="button" aria-haspopup="dialog"
        class="relative inline-flex shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/40 bg-[image:var(--gop-gradient-gold)] text-[14px] font-normal leading-5 text-[#3f3000] no-underline shadow-[0_0_0_1px_#fdc302] transition-[filter,transform] hover:brightness-[1.03] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white h-8 w-[67px]">Sign In</button>
```

- Fill: `linear-gradient(to top, #fdc302 0%, #ffd83a 100%)`
- Text: `#3f3000` · border `rgba(255,255,255,0.4)` · outer ring `0 0 0 1px #fdc302`
- Size `h-8 w-[67px]` (desktop) — the mobile drawer variant is `h-10 w-full`.
- `aria-haspopup="dialog"` → opens an auth modal (modal markup is **not** in the capture).

### 3.7 Mobile trigger (`max-[1080px]`)

```html
<div class="ml-auto hidden items-center gap-1 max-[1080px]:flex">
  <button type="button" aria-label="Open menu" aria-expanded="false"
          class="relative inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-150 hover:bg-white/[0.08]">
    <svg … class="lucide lucide-menu absolute transition-[opacity,transform] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none rotate-0 scale-100 opacity-100" width="18" height="18" stroke-width="2">…</svg>
    <svg … class="lucide lucide-x absolute transition-[opacity,transform] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none -rotate-45 scale-75 opacity-0" width="18" height="18" stroke-width="2">…</svg>
  </button>
</div>
```

Both icons are stacked absolutely and cross-faded. Closed state = menu `rotate-0 scale-100 opacity-100`,
X `-rotate-45 scale-75 opacity-0`. Open state swaps those (**INFERRED** — mirrored values).

### 3.8 Mobile drawer

```html
<div aria-hidden="true"
     class="absolute inset-x-6 top-full z-10 -mt-8 hidden origin-top rounded-b-3xl bg-gop-dark p-2 pt-11 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none max-[1080px]:block max-[640px]:inset-x-3 pointer-events-none -translate-y-1 scale-[0.985] opacity-0">
  <ul class="m-0 list-none p-0">
```

Closed state: `pointer-events-none -translate-y-1 scale-[0.985] opacity-0`.
Open state: **INFERRED** `pointer-events-auto translate-y-0 scale-100 opacity-100`.
It tucks *under* the pill via `-mt-8 pt-11`, so it visually grows out of the navbar.

Row (link):

```html
<a class="flex items-center justify-between rounded-full px-3 py-2.5 text-[13.5px] text-[#F7F7F7] no-underline transition-colors duration-150 hover:bg-white/[0.08] hover:text-white" href="/prompt-library">
  <span class="inline-flex items-center gap-2">Prompts</span>
</a>
```

Row (expandable "Tools"):

```html
<button type="button" aria-expanded="false"
        class="flex w-full items-center justify-between rounded-full px-3 py-2.5 text-left text-[13.5px] text-[#F7F7F7] transition-colors duration-150 hover:bg-white/[0.08] hover:text-white">
  <span class="inline-flex items-center gap-2">Tools</span>
  <svg … class="lucide lucide-chevron-right opacity-50 transition-transform duration-200  motion-reduce:transition-none" width="17" height="17" stroke-width="2">…</svg>
</button>
```

The nested submenu `<ul>` is rendered only when expanded (not present in the capture).

Sign In row: `<li class="p-2"> <button … h-10 w-full>Sign In</button> </li>`.

---

## 4. Hero

Wrapper:

```html
<div class="mb-8 flex flex-col items-center gap-6 text-center">
  <div class="flex flex-col gap-2.5">
```

### 4.1 `<h1>`

```html
<h1 class="m-0 text-center text-[clamp(24px,3vw,32px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1B1A1A]">The #1 Most Powerful<!-- --> <em class="font-semibold italic">Open Prompt Library</em></h1>
```

- Font size: `clamp(24px, 3vw, 32px)` — a fluid clamp, **not** breakpoint classes.
  At 1440 px → 3vw = 43.2 px, clamped to **32 px**. Below 800 px viewport it starts shrinking; at
  800 px → 24 px floor.
- `font-light` = 400? No — **300** (`--font-weight-light: 300`).
- `line-height: 1.1`, `letter-spacing: -0.01em`, colour `#1B1A1A`.
- The emphasis is a real `<em class="font-semibold italic">` — **the same Roboto family**,
  weight 600, `font-style: italic`. It is *not* a serif face. The screenshot's "serif-ish"
  look comes from Roboto Italic Semibold. Roboto italic faces are shipped in `a.css` at
  weights 300/400/500/600/700/900.
- Note the `<!-- -->` text separator emitted by React between the plain text and the `<em>` —
  the rendered string is `The #1 Most Powerful Open Prompt Library` with a single space.

### 4.2 Subtitle

```html
<p class="m-0 mx-auto max-w-[520px] text-[14px] leading-5 text-[#A8A7A8]">Free, curated AI prompts for ChatGPT, Claude, Gemini, Midjourney &amp; every major model — browse by category, tool, or use case.</p>
```

Fixed 14 px / 20 px, no responsive variant. Colour `#A8A7A8`. Gap between h1 and p: `gap-2.5` (10 px).
Gap between the text stack and the search field: `gap-6` (24 px). Hero bottom margin `mb-8` (32 px).

---

## 5. Search

### 5.1 Hero search field (it is a `<button>`, not an `<input>`)

```html
<div class="flex w-full justify-center">
  <button type="button" aria-label="Search prompts (Command K)" aria-keyshortcuts="Meta+K Control+K"
          class="group relative inline-flex h-12 w-full max-w-[480px] items-center justify-between overflow-hidden rounded-full bg-white px-4 text-gop-body-sm text-gop-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_16px_-8px_rgba(0,0,0,0.08)] transition-[box-shadow,transform] duration-200 [transition-timing-function:var(--gop-ease-standard)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_24px_-10px_rgba(0,0,0,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gop-accent-yellow">

    <!-- top specular highlight -->
    <span aria-hidden="true" class="pointer-events-none absolute -top-2 left-1/2 h-6 w-[90%] -translate-x-1/2 rounded-full bg-white opacity-60 blur-[6px]"></span>

    <span class="relative flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search text-gop-ink-soft" aria-hidden="true">
        <path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
      </svg>
      <span>Search</span>
    </span>

    <kbd aria-hidden="true" class="relative inline-flex h-[26px] items-center rounded-[8px] border border-gop-ink-hairline bg-white px-1.5 font-sans text-[13px] text-gop-ink-soft shadow-[0_1px_1px_rgba(0,0,0,0.04)]">⌘K</kbd>
  </button>
</div>
```

Key values: height **48 px**, max width **480 px**, `rounded-full`, white fill,
14 px/20 px placeholder text at `#16141573`.
Rest shadow `0 1px 2px rgba(0,0,0,0.06), 0 8px 16px -8px rgba(0,0,0,0.08)`;
hover shadow `0 2px 4px rgba(0,0,0,0.06), 0 12px 24px -10px rgba(0,0,0,0.14)`;
transition `box-shadow, transform` 200 ms `var(--gop-ease-standard)`.

The `-top-2` blurred white span is a "specular glint" repeated on every white surface in the
design (also on category tiles — see §6).

`kbd`: 26 px tall, `rounded-[8px]`, `border-gop-ink-hairline` (`#16141514`), 13 px, `px-1.5`,
`font-sans` (deliberately not mono), literal glyph string `⌘K`.

### 5.2 Command palette / search modal

**Not determinable from the capture.** There is no `role="dialog"`, `aria-modal`, `cmdk-*`
attribute, or hidden modal template anywhere in `page.html`, `page.clean.html`, or `gop-full.html`.
The modal is mounted client-side by an un-captured JS chunk.

What *is* determinable — the contract the trigger declares:

- Two triggers exist and share identical ARIA: the hero button (§5.1) and the bottom-right
  floating pill (§11).
- `aria-label="Search prompts (Command K)"`, `aria-keyshortcuts="Meta+K Control+K"` →
  keyboard shortcut **⌘K on macOS, Ctrl+K elsewhere**.
- Neither trigger declares `aria-haspopup="dialog"` (unlike Sign In, which does), so the
  palette is likely an overlay/listbox rather than a strict modal dialog. **INFERRED**.
- Token `--gop-z-modal: 50` is the intended stacking level. **INFERRED**.
- Reusable animation keyframes exist in the compiled CSS that no captured element uses —
  strong candidates for the palette's enter animation:
  `@keyframes gop-menu-in { 0% { opacity:0; transform: translateY(-4px) scale(.985) } to { opacity:1; transform: translateY(0) scale(1) } }`
  and the utility `.motion-safe:animate-[gop-sheet-in_260ms_cubic-bezier(0.32,0.72,0,1)]`
  (mobile sheet variant). **INFERRED**.

---

## 6. Category icon nav

Wrapper + nav:

```html
<div class="mb-9 max-[640px]:mb-6">
  <nav aria-label="Browse categories" class="flex flex-wrap items-start justify-center gap-2 pb-1 max-[900px]:justify-start">
```

Measured height in the live DOM: **80 px** (one row).

### 6.1 Tile (link variant)

```html
<a class="group flex w-24 shrink-0 flex-col items-center gap-3 no-underline max-[640px]:w-[76px]" href="/prompt-library/category/marketing">
  <span class="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-[12px] transition-colors duration-200 bg-white text-gop-ink-muted shadow-[0_8px_12px_-4px_rgba(0,0,0,0.04),0_1px_4px_rgba(0,0,0,0.08)] group-hover:text-gop-ink">
    <span aria-hidden="true" class="pointer-events-none absolute -top-1.5 left-1/2 h-5 w-[85%] -translate-x-1/2 rounded-full bg-white opacity-60 blur-[5px]"></span>
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-megaphone relative" aria-hidden="true">…</svg>
  </span>
  <span class="flex items-center gap-0.5 whitespace-nowrap text-[13px] leading-4 text-[#4F4E4F]">Marketing</span>
</a>
```

| Property | Value |
| --- | --- |
| Tile column width | `w-24` = **96 px** · `max-[640px]:w-[76px]` |
| Icon tile | **48 × 48 px**, `rounded-[12px]`, white fill |
| Tile shadow | `0 8px 12px -4px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.08)` |
| Tile border | **none** (shadow only) |
| Icon | lucide, **23 × 23**, `stroke-width="1.8"`, round caps/joins |
| Icon colour | rest `text-gop-ink-muted` (`#161415a6`) → hover `group-hover:text-gop-ink` (`#161415`), `transition-colors duration-200` |
| Label | `text-[13px] leading-4 text-[#4F4E4F]` |
| Gap tile↔label | `gap-3` = 12 px |
| Gap between tiles | `gap-2` = 8 px |

Hover changes icon colour only — no background, transform, or shadow change.

### 6.2 Full tile list (SSR order, label · lucide icon · href)

| # | Label | Icon | Href |
| --- | --- | --- | --- |
| 1 | Marketing | `megaphone` | `/prompt-library/category/marketing` |
| 2 | Design | `palette` | `/prompt-library/category/art-and-design` |
| 3 | Education | `graduation-cap` | `/prompt-library/category/education` |
| 4 | Finance | `coins` | `/prompt-library/category/finance` |
| 5 | Sales | `trending-up` | `/prompt-library/category/sales` |
| 6 | Coding | `code-xml` | `/prompt-library/category/coding` |
| 7 | Writing | `pen-line` | `/prompt-library/category/writing` |
| 8 | SEO | `search` | `/prompt-library/category/seo` |
| 9 | Strategy | `target` | `/prompt-library/category/strategy` |
| 10 | Productivity | `zap` | `/prompt-library/category/productivity` |
| 11 | Operations | `workflow` | `/prompt-library/category/operations` |
| 12 | Human Resources | `users` | `/prompt-library/category/human-resources` |
| 13 | Research | `microscope` | `/prompt-library/category/research` |
| 14 | Legal | `scale` | `/prompt-library/category/legal` |
| 15 | Data Analysis | `chart-column` | `/prompt-library/category/data-analysis` |
| 16 | Real Estate | *(no `lucide-… relative` match — likely a custom/house icon)* | `/prompt-library/category/real-estate` |
| 17 | Customer Service | `headset` | `/prompt-library/category/customer-service` |
| 18 | Careers | `briefcase` | `/prompt-library/category/careers` |
| 19 | Audio | `audio-lines` | `/prompt-library/category/audio` |
| 20 | AI Agents | `bot` | `/prompt-library/category/ai-agents` |
| 21 | Video | `video` | `/prompt-library/category/video` |

### 6.3 "More (14)" toggle

```html
<button type="button" aria-expanded="false"
        class="group flex w-24 shrink-0 flex-col items-center gap-3 no-underline max-[640px]:w-[76px] cursor-pointer border-0 bg-transparent p-0">
  <span class="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-[12px] transition-colors duration-200 bg-white text-gop-ink-muted shadow-[0_8px_12px_-4px_rgba(0,0,0,0.04),0_1px_4px_rgba(0,0,0,0.08)] group-hover:text-gop-ink">
    <span aria-hidden="true" class="pointer-events-none absolute -top-1.5 left-1/2 h-5 w-[85%] -translate-x-1/2 rounded-full bg-white opacity-60 blur-[5px]"></span>
    <svg … class="lucide lucide-layout-grid relative" width="23" height="23" stroke-width="1.8">…</svg>
  </span>
  <span class="flex items-center gap-0.5 whitespace-nowrap text-[13px] leading-4 text-[#4F4E4F]">More (14)<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down transition-transform duration-200" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></span>
</button>
```

**Expand behaviour (INFERRED, but arithmetically confirmed):** the SSR HTML renders all 21
tiles; the hydrated DOM measures **80 px tall = one row**, and the label reads `More (14)`.
7 visible + 14 hidden = 21. So on the client the nav renders the first 7 tiles plus the More
button; toggling `aria-expanded` reveals the remaining 14, and the wrapping row grows.
The chevron uses `transition-transform duration-200` and rotates 180° when open.

---

## 7. Filter bar

Row:

```html
<div class="flex flex-col gap-5" data-prompt-dock-boundary="true">
  <div class="flex flex-wrap items-center justify-between gap-3 scroll-mt-24">
```

`scroll-mt-24` (96 px) reserves space for the sticky navbar when anchor-scrolling to the grid.

### 7.1 Left cluster — Category / Models / Roles

```html
<div class="relative inline-flex max-w-full">
  <div class="flex items-center gap-0.5 overflow-x-auto rounded-full bg-gop-capsule p-0.5 [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
```

Track: `#eaeaea`, `rounded-full`, 2 px padding, 2 px gap, horizontally scrollable with the
scrollbar hidden in both engines.

Trigger button (identical for all three, only icon + label differ):

```html
<button type="button" aria-expanded="false" aria-controls="lib-panel-category"
        class="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-white pl-4 pr-2 text-[14px] leading-5 text-gop-ink transition-colors hover:text-gop-ink">
  <svg … class="lucide lucide-layout-grid text-gop-ink-muted" width="16" height="16" stroke-width="1.8">…</svg>Category<span class="inline-flex h-6 w-6 items-center justify-center rounded-[8px] border border-gop-ink-hairline bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
    <svg … class="lucide lucide-chevron-down text-[#4F4E4F] transition-transform duration-200" width="14" height="14" stroke-width="2">…</svg>
  </span>
</button>
```

| Trigger | `aria-controls` | Leading icon |
| --- | --- | --- |
| Category | `lib-panel-category` | `lucide-layout-grid` |
| Models | `lib-panel-models` | `lucide-sparkles` |
| Roles | `lib-panel-roles` | `lucide-users` |

Trigger geometry: **40 px** tall, white pill, `pl-4 pr-2`, 14 px/20 px label,
trailing 24×24 chevron chip (`rounded-[8px]`, hairline border, `0 1px 1px rgba(0,0,0,0.05)`).
Chevron rotates 180° when open (`transition-transform duration-200`). **INFERRED** open class.

### 7.2 Popover panels

All three panels share the wrapper and the `<nav>` surface:

```html
<div id="lib-panel-category" hidden="" style="left:0"
     class="absolute top-[calc(100%+8px)] z-30 w-[280px] max-w-[calc(100vw-32px)] max-[640px]:!left-0">
  <nav class="max-h-[70vh] overflow-y-auto [scrollbar-width:thin] rounded-3xl bg-[rgba(20,20,20,0.8)] p-2 backdrop-blur-[24px] shadow-[0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.06),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09),inset_0_1px_1px_rgba(255,255,255,0.04),inset_0_1px_2px_rgba(255,255,255,0.08)]">
    <ul class="m-0 flex list-none flex-col p-0">
```

| Property | Value |
| --- | --- |
| Offset | `top: calc(100% + 8px)` |
| Z-index | **30** (= `--gop-z-dropdown`) |
| Width | 280 px, capped at `calc(100vw - 32px)` |
| Surface | `rgba(20,20,20,0.8)` + `backdrop-filter: blur(24px)` |
| Radius | `rounded-3xl` (24 px) |
| Padding | 8 px |
| Max height | `70vh`, thin scrollbar |
| Shadow | `0 -12px 30px rgba(0,0,0,0.12), 0 4px 6px rgba(0,0,0,0.06), 0 12px 13px rgba(0,0,0,0.17), 0 -3px 5px rgba(0,0,0,0.09), inset 0 1px 1px rgba(255,255,255,0.04), inset 0 1px 2px rgba(255,255,255,0.08)` |
| Closed state | native `hidden` attribute |
| Left position | inline `style="left:0"`, JS-positioned; `max-[640px]:!left-0` forces 0 on mobile |

#### 7.2.1 Category panel — multi-level tree with counts

Top-level row (link + separate expand button in one `<span>`):

```html
<li class="flex flex-col">
  <span class="flex items-center gap-1">
    <a class="flex h-9 items-center justify-between gap-3 rounded-full px-3 text-[14px] no-underline transition-colors min-w-0 flex-1 text-[15px] text-[#F7F7F7] hover:bg-white/[0.08]" href="/prompt-library/category/art-and-design">
      <span class="flex min-w-0 items-center gap-2.5">
        <svg … class="lucide lucide-palette shrink-0 text-white/80" width="16" height="16" stroke-width="1.8">…</svg>
        <span class="truncate">Art and Design</span>
      </span>
      <span class="shrink-0 tabular-nums text-white/50">770</span>
    </a>
    <button type="button" aria-label="Expand Art and Design subcategories" aria-expanded="false"
            class="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#8F8E8F] transition-colors hover:bg-white/[0.08] hover:text-white">
      <svg … class="lucide lucide-chevron-down transition-transform duration-200" width="14" height="14" stroke-width="2">…</svg>
    </button>
  </span>
  <ul hidden="" class="m-0 flex list-none flex-col gap-0.5 py-1 pl-2 pr-0">
    <li>
      <a class="flex h-9 items-center justify-between gap-3 rounded-full px-3 text-[14px] no-underline transition-colors text-white/75 hover:bg-white/[0.08] hover:text-white" href="/prompt-library/category/portrait-and-avatar">
        <span class="flex min-w-0 items-center gap-2">
          <svg … class="lucide lucide-corner-down-right shrink-0 text-[#8F8E8F]" width="14" height="14" stroke-width="2">…</svg>
          <span class="truncate">Portrait &amp; Avatar</span>
        </span>
        <span class="shrink-0 tabular-nums text-white/50">216</span>
      </a>
    </li>
    …
  </ul>
</li>
```

Row height **36 px** (`h-9`), `rounded-full`, `px-3`.
Top level = 15 px `#F7F7F7`; sub level = 14 px `text-white/75` → hover `text-white`.
Counts are `tabular-nums text-white/50`.
Subcategory `<ul>` uses the native `hidden` attribute and indents with `pl-2`.

SSR content: **6 top-level entries, 63 subcategory links total.**

| Top-level | Count | Href |
| --- | --- | --- |
| Art and Design | 770 | `/prompt-library/category/art-and-design` |
| Marketing | 734 | `/prompt-library/category/marketing` |
| SEO | 570 | `/prompt-library/category/seo` |
| Education | 493 | `/prompt-library/category/education` |
| Coding | 492 | `/prompt-library/category/coding` |
| Strategy | 462 | `/prompt-library/category/strategy` |

Panel footer — a "More" row that loads the remaining roots:

```html
<li class="flex flex-col">
  <span aria-hidden="true" class="mx-1 my-0.5 h-px bg-white/[0.06]"></span>
  <button type="button" aria-expanded="false"
          class="flex items-center justify-center gap-1.5 rounded-gop px-3 py-2.5 text-[14px] text-white/70 transition-colors hover:bg-white/[0.08] hover:text-white">More<svg … class="lucide lucide-chevron-down transition-transform duration-200" width="14" height="14" stroke-width="2">…</svg></button>
</li>
```

Note: `rounded-gop` (no size suffix) is used here but **has no definition in `b.css`** — it is a
dead class in the compiled output. Treat as a bug; use `rounded-gop-md` in the rebuild. **INFERRED**.

#### 7.2.2 Models panel — flat tool list

```html
<li class="flex flex-col">
  <span aria-hidden="true" class="mx-1 my-0.5 h-px bg-white/[0.06]"></span>  <!-- omitted on first item -->
  <a class="flex h-9 items-center justify-between gap-3 rounded-full px-3 text-[14px] no-underline transition-colors text-[#F7F7F7] hover:bg-white/[0.08]" href="/prompt-library/tool/chatgpt">
    <span class="flex min-w-0 items-center gap-2.5">
      <span class="shrink-0"><svg …><title>OpenAI</title>…</svg></span>
      <span class="truncate">ChatGPT</span>
    </span>
    <span aria-hidden="true" class="h-3 w-6 shrink-0 animate-pulse rounded-full bg-white/15"></span>
  </a>
</li>
```

The trailing `<span>` is a **skeleton placeholder for the count** — 12 × 24 px, `animate-pulse`,
`bg-white/15`. Counts are fetched client-side.
Rows are separated by a 1 px `bg-white/[0.06]` rule with `mx-1 my-0.5`.

60 tools in SSR order:
ChatGPT, Claude, DeepSeek, Gemini, Grok, Midjourney, Nano Banana, Mistral, Flux, DALL-E,
Ideogram, Krea, Sora, Veo, Runway, Kling, Pika, Higgsfield, ElevenLabs, Cartesia, Suno, Udio,
Cursor, Claude Code, Lovable, v0, Replit, Bolt, Windsurf, Perplexity, You.com, Exa, Phind,
NotebookLM, Meshy, Tripo, Luma Genie, Spline AI, Rodin, n8n, Zapier, Make, Pipedream,
LangChain, Notion, Linear, Slack, Asana, Airtable, Obsidian, Figma, Canva, Sketch, Adobe,
Framer, Gamma, Tome, Prompt Generator, Llama. Hrefs: `/prompt-library/tool/<slug>`.

#### 7.2.3 Roles panel

Identical markup to the models panel (same row class, same skeleton count span, same separators),
hrefs `/prompt-library/for/<slug>`. 25 entries:
Solopreneurs, Entrepreneurs, Business Owners, Freelancers, Agencies, Ecommerce Sellers,
Marketers, Sales Teams, Copywriters, Content Creators, Designers, Photographers, Developers,
AI Engineers, Lawyers, Doctors, Accountants, Real Estate Agents, Recruiters, Teachers,
Students, Coaches, Consultants, Virtual Assistants, Traders.

### 7.3 Right cluster

```html
<div class="flex items-center gap-2">
```

#### 7.3.1 Sort select

```html
<div class="relative">
  <button type="button" aria-haspopup="listbox" aria-expanded="false"
          class="inline-flex h-8 items-center gap-1 rounded-full bg-white px-3 text-[14px] leading-5 text-[#4F4E4F] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:text-gop-ink">Sort by: <span class="text-gop-ink">Shuffled</span>
    <svg … class="lucide lucide-chevron-down text-gop-dark transition-transform" width="14" height="14" stroke-width="2">…</svg>
  </button>
</div>
```

32 px tall, white, `rounded-full`, `px-3`, shadow `0 1px 2px rgba(0,0,0,0.06)`.
Label `#4F4E4F`, value `#161415`. The listbox itself is client-rendered and **not in the capture**.
Default value: **"Shuffled"**.

#### 7.3.2 All / Text / Image / Code segmented control

```html
<div class="inline-flex items-center rounded-full bg-gop-capsule p-0.5" role="group" aria-label="Output format">
```

Track `#eaeaea`, `rounded-full`, 2 px padding.

**Active segment** (`aria-current="true"`):

```html
<a aria-current="true"
   class="group/fmt inline-flex h-7 items-center rounded-full px-2.5 text-[14px] leading-5 no-underline transition-[background-color,color,box-shadow] duration-200 bg-white text-gop-ink shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
   href="/prompt-library">
  <svg … class="lucide lucide-file-text" width="14" height="14" stroke-width="1.9">…</svg>
  <span class="overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin-left] duration-200 ease-out ml-1 max-w-[72px] opacity-100">All</span>
</a>
```

**Inactive (icon-only) segment** — the label collapses to `max-w-0` and expands on hover:

```html
<a class="group/fmt inline-flex h-7 items-center rounded-full px-2.5 text-[14px] leading-5 no-underline transition-[background-color,color,box-shadow] duration-200 text-gop-ink-muted hover:text-gop-ink"
   href="/prompt-library/type/text">
  <svg width="14" height="10" viewBox="0 0 14.5335 10.7536" fill="none" aria-hidden="true">…</svg>
  <span class="overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin-left] duration-200 ease-out ml-0 max-w-0 opacity-0 group-hover/fmt:ml-1 group-hover/fmt:max-w-[72px] group-hover/fmt:opacity-100">Text</span>
</a>
```

| Segment | Href | Icon |
| --- | --- | --- |
| All | `/prompt-library` | lucide `file-text`, 14×14, `stroke-width="1.9"` |
| Text | `/prompt-library/type/text` | **custom** SVG `width="14" height="10" viewBox="0 0 14.5335 10.7536"`, `stroke-width="1.2"` — an "Aa" glyph. Path: `M0.600163 10.1238L4.17159 0.6L7.74302 10.1238M6.49302 6.79048H1.85016M9.35016 4.88571C9.71296 4.03185 10.5704 3.45714 11.5525 3.45714C12.9216 3.45714 13.9335 4.40952 13.9335 5.8381V10.1238` + `M9.17159 8.42738C9.17159 9.49881 9.971 10.1536 10.9573 10.1536C12.5644 10.1536 13.9335 9.35 13.9335 6.99881V6.55238C13.3383 6.55238 12.2073 6.58214 11.1954 6.70119C10.2201 6.81607 9.17159 7.26667 9.17159 8.42738Z` |
| Image | `/prompt-library/type/image` | **custom** SVG `width="14" height="14" viewBox="0 0 13 13"` |
| Code | `/prompt-library/type/code` | lucide `code-xml`, 14×14, `stroke-width="1.9"` |

Segment height **28 px** (`h-7`), `px-2.5`. Label max width when expanded: **72 px**.
All label transitions: `max-width, opacity, margin-left` · 200 ms · `ease-out`.

### 7.4 Active-filter slot

```html
<div class="-mt-1"></div>
```

Empty in the capture (measured height 0). It is where selected filter chips render. **INFERRED**.

---

## 8. Grid + cards

### 8.1 Grid

```html
<div aria-busy="false"
     class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:auto-rows-[234px] sm:grid-flow-dense transition-opacity duration-200 opacity-100">
```

| Property | Value |
| --- | --- |
| Columns | 1 → `sm:` 2 → `lg:` 3 |
| Gap | `gap-3` = **12 px** |
| Row height | `sm:auto-rows-[234px]` — **234 px** per implicit row (mobile rows are auto) |
| Flow | `sm:grid-flow-dense` — dense packing so short cards backfill holes left by tall cards |
| Loading state | `aria-busy` + `transition-opacity duration-200 opacity-100`; during a filter change it fades (`opacity-…`, value not captured — **INFERRED** `opacity-60` or `opacity-0`) |

At 1440 px: content 1184 px, 3 columns → each column `(1184 − 24) / 3 = 386.67 px`.
A tall card spans two rows: `234 × 2 + 12 = 480 px`.

### 8.2 Card variants observed (24 cards render initially)

| Variant | Count | Modifier suffix on `<article>` |
| --- | --- | --- |
| **Tall, 1 column** (with code preview) | 6 | `gap-4 p-4 sm:row-span-2 sm:h-full` |
| **Tall, 2 columns** (with code preview) | 5 | `gap-4 p-4 sm:row-span-2 lg:col-span-2 sm:h-full` |
| **Short** (no preview) | 13 | `gap-4 p-4 sm:h-full` |

11 cards total carry a code preview + fade gradient.

### 8.3 `<article>` base class (identical for all variants; only the suffix differs)

```
group relative flex flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-gop-card text-white transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_16px_34px_-14px_rgba(0,0,0,0.6)] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-gop-accent-yellow
```

- Radius **20 px**, fill `#242223`, border `rgba(255,255,255,0.08)`, padding **16 px**, inner gap **16 px**.
- Hover: lift `-2px`, border → `rgba(255,255,255,0.20)`, shadow `0 16px 34px -14px rgba(0,0,0,0.6)`.
- Transition: `transform, box-shadow, border-color` · 200 ms · `ease-out`.
- Focus-within: 2 px `#fcd94a` outline, 2 px offset.

### 8.4 Full-card link overlay

```html
<a aria-label="Contrarian Ideas Generator for Content Writing" class="absolute inset-0 z-[1] outline-none" href="/prompt-library/generate-contrarian-content-ideas"></a>
```

Interactive children sit at `z-[2]` so they beat the overlay.

### 8.5 Code preview (tall cards only)

```html
<div class="relative flex min-h-0 flex-col gap-3 flex-1">
  <div class="relative min-h-0 flex-1 overflow-hidden rounded-[16px] bg-white/[0.08] p-4">
    <pre class="m-0 max-h-[200px] overflow-hidden whitespace-pre-wrap break-words font-mono text-[12px] leading-[22px] text-white/50 sm:h-full sm:max-h-none">## Role …</pre>
    <span aria-hidden="true"
          class="pointer-events-none absolute inset-x-0 bottom-0 h-14 rounded-b-[16px]"
          style="background:linear-gradient(180deg, rgba(45,42,43,0) 0%, #2a2829 92%)"></span>
  </div>
</div>
```

- Well: `rounded-[16px]`, `bg-white/[0.08]`, 16 px padding.
- `<pre>`: Roboto Mono **12 px / 22 px**, `text-white/50`, `whitespace-pre-wrap break-words`,
  `max-h-[200px]` on mobile, `sm:h-full sm:max-h-none` from 640 px.
- **Fade-out gradient span**: 56 px tall (`h-14`), pinned to the bottom inset,
  `rounded-b-[16px]`, `pointer-events-none`, exact background
  `linear-gradient(180deg, rgba(45,42,43,0) 0%, #2a2829 92%)`.
  (Six instances in the capture were browser-normalized to
  `linear-gradient(rgba(45, 42, 43, 0) 0%, rgb(42, 40, 41) 92%)` — identical value.)
  Note the gradient end colour `#2a2829` is **not** the card fill `#242223`; it is slightly lighter,
  matching the `bg-white/[0.08]` well composited over the card.

### 8.6 Card body

```html
<div class="relative flex flex-col gap-3 ">                     <!-- tall variant -->
<div class="relative flex flex-col gap-3 min-h-0 flex-1">        <!-- short variant -->
```

**Title:**

```html
<h3 class="m-0 flex items-start gap-2 text-[19px] font-medium leading-6 tracking-[-0.01em] text-white">
  <span aria-hidden="true" class="shrink-0 leading-6">💡</span>
  <span class="line-clamp-2">Contrarian Ideas Generator for Content Writing</span>
</h3>
```

19 px / 24 px, weight 500, tracking −0.01em, white. Emoji is a plain text span, `aria-hidden`,
clamped title to 2 lines.

**Chips row:**

```html
<div class="relative z-[2] w-fit">
  <div class="flex flex-wrap items-center gap-1">
```

*Model chip* (full class, verbatim — note the double spaces are in the source):

```
inline-flex items-center justify-center whitespace-nowrap select-none font-sans font-medium tracking-tight no-underline border-0 overflow-hidden transition-[filter,box-shadow,transform] duration-150 [transition-timing-function:var(--gop-ease-standard)] bg-gop-model-chatgpt text-white h-[22px] gap-1 rounded-gop-sm px-1.5 text-[13px] leading-4  cursor-pointer hover:brightness-[1.06] active:translate-y-px active:brightness-95  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gop-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-white
```

Inner markup:

```html
<span class="inline-flex shrink-0 items-center justify-center">
  <svg fill="currentColor" fill-rule="evenodd" height="16" style="flex:none;line-height:1" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><title>OpenAI</title>…</svg>
</span>
<span>ChatGPT</span>
```

*Tag chip:*

```html
<a class="inline-flex h-[22px] items-center rounded-gop-sm bg-white/10 px-1.5 text-[13px] leading-4 text-white/90 no-underline transition-colors hover:bg-white/20" href="/prompt-library/category/productivity">Productivity</a>
```

Both chip types: **22 px tall**, `rounded-gop-sm` (8 px), `px-1.5` (6 px), 13 px / 16 px.
Chip gap `gap-1` (4 px).

**Description:**

```html
<p class="m-0 text-[14px] leading-5 text-white/60 line-clamp-2">Generates 20 contrarian content ideas by …</p>
```

### 8.7 Footer row

```html
<div class="relative z-[2] mt-auto pt-1">
  <div class="flex items-center justify-between gap-2">
    <div class="flex items-center gap-3">
```

**Like:**

```html
<button type="button" aria-pressed="false" aria-label="Like"
        class="group/like inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 -mx-1 text-gop-caption tabular-nums transition-colors duration-150 text-white/45 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gop-accent-yellow">
  <svg … class="lucide lucide-heart transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:!scale-100 fill-transparent group-hover/like:scale-110 scale-100" width="13" height="13" stroke-width="1.8">…</svg>
  <span>1</span>
</button>
```

**Bookmark:**

```html
<button type="button" aria-pressed="false" aria-label="Bookmark"
        class="group/bm inline-flex items-center gap-1 rounded-full p-1 -m-1 text-gop-caption tabular-nums transition-colors duration-150 text-white/45 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gop-accent-yellow">
  <svg … class="lucide lucide-bookmark transition-transform duration-200 ease-out motion-reduce:transition-none motion-reduce:!scale-100 fill-transparent group-hover/bm:scale-110 scale-100" width="13" height="13" stroke-width="1.8">…</svg>
  <span>2</span>
</button>
```

**Views (non-interactive pill):**

```html
<span class="inline-flex h-7 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 text-gop-caption tabular-nums text-white/60">
  <svg … class="lucide lucide-eye" width="13" height="13" stroke-width="1.7">…</svg>30</span>
```

**Share:**

```html
<button type="button" aria-label="Share prompt"
        class="inline-flex items-center rounded-full p-1 -m-1 transition-colors duration-150 text-white/45 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gop-accent-yellow">
  <svg … class="lucide lucide-share2 lucide-share-2" width="13" height="13" stroke-width="1.8">…</svg>
</button>
```

Footer summary: icons **13 × 13**; text `text-gop-caption` (12 px / 16 px / +0.2px tracking) with
`tabular-nums`; idle `text-white/45` → hover `text-white/80`; the like/bookmark glyphs scale to
`1.10` on group hover (200 ms `ease-out`, disabled under reduced motion via
`motion-reduce:!scale-100`); like/bookmark are toggles with `aria-pressed`; the fill state is
`fill-transparent` when off (**INFERRED**: `fill-current` when on).
Views pill is 28 px tall, `border-white/10`, `bg-white/[0.06]`, `px-2.5`.

### 8.8 Load-more / infinite scroll

Immediately after the grid:

```html
<div aria-hidden="true" class="h-px"></div>
<div class="flex min-h-10 items-center justify-center" aria-live="polite"></div>
```

- `div.h-px` = a 1 px **IntersectionObserver sentinel**. **INFERRED** from its zero-height,
  `aria-hidden`, and position directly under the grid.
- The `aria-live="polite"` slot (min 40 px) is the loader / "no more results" region — empty in
  the capture.
- There is **no "Load more" button** in the DOM, so pagination is scroll-driven.
- **24 cards render initially.**

New cards are almost certainly animated in with the unused utility
`.motion-safe:animate-[gop-card-in_360ms_cubic-bezier(0.23,1,0.32,1)_both]` — see §13. **INFERRED**
(the class is compiled into `b.css` but appears on no captured element).

---

## 9. Bottom content (`main > div > div.mt-16`)

```html
<div class="mt-16">
  <div class="flex flex-col gap-14">
```

Top margin 64 px, 56 px between sections.

### 9.1 "Read more on the topic" row

```html
<section aria-label="Articles about Prompt Engineering" class="flex flex-col gap-6">
  <div class="flex flex-wrap items-center justify-between gap-3">
    <h2 class="m-0 text-[clamp(22px,2.6vw,32px)] font-normal leading-tight tracking-[-0.01em] text-[#1B1A1A]">Read more on the topic: <strong class="font-bold">Prompt Engineering</strong></h2>
    <a class="inline-flex h-8 items-center gap-1 rounded-full bg-white px-3 text-[14px] leading-5 text-[#4F4E4F] no-underline shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:text-gop-ink" href="/blog/">All Articles<svg … class="lucide lucide-chevron-down -rotate-90 text-gop-dark" width="14" height="14" stroke-width="2">…</svg></a>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
```

Note the "All Articles" chevron is `lucide-chevron-down` rotated `-rotate-90` (i.e. pointing right).

Article card:

```html
<a class="group flex flex-col gap-3 overflow-hidden rounded-[16px] bg-white pb-4 no-underline shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(0,0,0,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gop-accent-yellow" href="/blog/…">
  <div class="relative h-[200px] w-full overflow-hidden bg-gop-ink">
    <img alt="" loading="lazy" decoding="async" data-nimg="fill"
         class="object-cover transition-transform duration-500 group-hover:scale-105"
         style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
         sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" srcset="…" src="…">
  </div>
  <div class="flex flex-1 flex-col gap-3 px-4">
    <h3 class="m-0 text-[19px] font-medium leading-6 tracking-[-0.01em] text-gop-ink line-clamp-2">Best DALL-E and Midjourney Prompt Resources Combined</h3>
    <span class="mt-auto inline-flex items-center gap-1 text-[15px] text-gop-ink-muted transition-colors group-hover:text-gop-ink">Read Article<svg … class="lucide lucide-chevron-right transition-transform duration-200 group-hover:translate-x-0.5" width="15" height="15" stroke-width="2">…</svg></span>
  </div>
</a>
```

Image slot 200 px tall on `bg-gop-ink` (`#161415`); image zooms to `1.05` over **500 ms** on hover.

### 9.2 FAQ accordion

```html
<section id="faq" aria-label="Frequently asked questions" class="flex flex-col gap-3">
  <details class="group rounded-[14px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] open:bg-[#EAEAEA] open:pb-1.5 open:shadow-none">
    <summary class="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-[14px] bg-white px-5 py-3 text-[17px] font-medium leading-6 text-[#1B1A1A] [&amp;::-webkit-details-marker]:hidden group-open:shadow-[0_1px_2px_rgba(0,0,0,0.04)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gop-accent-yellow">What is the God of Prompt AI prompt library?<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down shrink-0 text-gop-dark transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></summary>
    <div class="prose-hub px-5 py-4 [&amp;_li]:text-[14px] [&amp;_p]:text-[14px] [&amp;_p]:leading-[1.6]">
      <p>…</p>
    </div>
  </details>
  …
</section>
```

Native `<details>` / `<summary>` — no JS.

| State | Rendering |
| --- | --- |
| Closed | `<details>` white, `rounded-[14px]`, shadow `0 1px 2px rgba(0,0,0,0.04)`; summary white |
| Open | `<details>` becomes `#EAEAEA` with `pb-1.5` and **no** shadow; the summary keeps its white fill and *gains* the shadow (`group-open:shadow-[0_1px_2px_rgba(0,0,0,0.04)]`), so the header floats above a grey body |
| Chevron | lucide `chevron-down`, 18 × 18, `text-gop-dark`, `transition-transform duration-200 group-open:rotate-180` |

Summary: min height **56 px**, `px-5 py-3`, 17 px / 24 px, weight 500, `#1B1A1A`.
The native marker is suppressed with `list-none` + `[&::-webkit-details-marker]:hidden`.
Gap between items `gap-3` (12 px).

Six FAQ items in the capture:
1. What is the God of Prompt AI prompt library?
2. How is the library organised?
3. Is the library free?
4. Which AI tool should I use these prompts with?
5. How fast can I get useful output?
6. Are the prompts kept up to date?

### 9.3 `.prose-hub` (component CSS, must be ported as a plain stylesheet)

```css
.prose-hub          { color: var(--color-gop-ink-muted); font-size: var(--text-gop-body); line-height: 1.65 }
.prose-hub > * + *  { margin-top: 1rem }
.prose-hub h2       { font-size: var(--text-gop-h6); letter-spacing: -.01em; color: var(--color-gop-ink);
                      margin-top: 2.5rem; margin-bottom: .75rem; font-weight: 700; line-height: 1.2 }
.prose-hub h2       { font-size: var(--text-gop-h7) }   /* later override → 32px wins */
.prose-hub h3       { font-size: var(--text-gop-subtitle-sm); color: var(--color-gop-ink);
                      margin-top: 1.5rem; margin-bottom: .5rem; font-weight: 600 }
.prose-hub p        { color: var(--color-gop-ink-muted); margin: 0 }
.prose-hub strong   { color: var(--color-gop-ink); font-weight: 600 }
.prose-hub a        { color: var(--color-gop-ink); text-underline-offset: 2px; text-decoration: underline;
                      text-decoration-color: var(--color-gop-ink-faint);
                      transition: text-decoration-color var(--gop-motion-fast) var(--gop-ease-standard) }
.prose-hub a:hover  { text-decoration-color: var(--color-gop-gold) }
.prose-hub ul, .prose-hub ol { display: flex; flex-direction: column; gap: .5rem; margin: 0; padding-left: 1.25rem }
.prose-hub ul       { padding-left: 1.25rem; list-style: none }
.prose-hub ul > li  { padding-left: 1.25rem; position: relative }
.prose-hub ul > li::before { content: ""; background: var(--color-gop-ink-soft); border-radius: 50%;
                             width: 4px; height: 4px; position: absolute; top: .7em; left: .25rem }
.prose-hub ol       { padding-left: 1.5rem; list-style: decimal }
.prose-hub li       { color: var(--color-gop-ink) }
```

### 9.4 SEO copy block

This block does **not** use `.prose-hub` — it styles descendants entirely with arbitrary variants:

```html
<div class="max-w-[880px] text-[13px] leading-[1.75] text-gop-ink-soft [&amp;_p]:m-0 [&amp;_p]:mb-3 [&amp;_h2]:mb-2 [&amp;_h2]:mt-7 [&amp;_h2]:text-[15px] [&amp;_h2]:font-semibold [&amp;_h2]:leading-snug [&amp;_h2]:text-gop-ink-muted [&amp;_h2:first-child]:mt-0 [&amp;_h3]:mb-1.5 [&amp;_h3]:mt-5 [&amp;_h3]:text-[13.5px] [&amp;_h3]:font-semibold [&amp;_h3]:text-gop-ink-muted [&amp;_ul]:mb-3 [&amp;_ul]:flex [&amp;_ul]:list-disc [&amp;_ul]:flex-col [&amp;_ul]:gap-1 [&amp;_ul]:pl-5 [&amp;_ol]:mb-3 [&amp;_ol]:flex [&amp;_ol]:list-decimal [&amp;_ol]:flex-col [&amp;_ol]:gap-1 [&amp;_ol]:pl-5 [&amp;_strong]:font-semibold [&amp;_strong]:text-gop-ink-muted [&amp;_a]:text-gop-ink-muted [&amp;_a]:underline [&amp;_a]:underline-offset-2 hover:[&amp;_a]:text-gop-ink">
```

Headings inside (in order): *What's inside the library* · *How to use any prompt in the library* ·
*Why God of Prompt is different from a free prompt list* · *Who the library is for* ·
*Free to copy. Premium for everything.*

### 9.5 Browse-by link columns

```html
<div class="flex flex-col gap-10 border-t border-gop-ink-hairline pt-10">
  <section id="by-category">
    <h2 class="m-0 mb-4 text-[15px] font-semibold tracking-[-0.01em] text-gop-ink">Browse by category</h2>
    <ul class="m-0 grid list-none grid-cols-2 gap-x-8 gap-y-2 p-0 sm:grid-cols-3 lg:grid-cols-4">
      <li>
        <a class="text-[13px] leading-5 text-gop-ink-muted no-underline transition-colors hover:text-gop-ink hover:underline hover:underline-offset-2" href="/prompt-library/category/art-and-design">Art and Design</a>
      </li>
      …
    </ul>
  </section>
  <section id="by-tool">   <h2 class="m-0 mb-4 text-[15px] font-semibold tracking-[-0.01em] text-gop-ink">Browse by AI tool</h2>   … </section>
  <section id="by-type">   <h2 class="m-0 mb-4 text-[15px] font-semibold tracking-[-0.01em] text-gop-ink">Browse by prompt type</h2> … </section>
</div>
```

- Grid: 2 cols → `sm:` 3 → `lg:` 4; `gap-x-8` (32 px) / `gap-y-2` (8 px).
- Links: 13 px / 20 px, `text-gop-ink-muted`, hover → `text-gop-ink` + underline @ 2 px offset.
- **"soon" items** are non-links:

```html
<li class="text-[13px] leading-5 text-gop-ink-faint">Code Prompts<!-- --> <span class="text-[11px] uppercase tracking-wide">soon</span></li>
<li class="text-[13px] leading-5 text-gop-ink-faint">Search Prompts<!-- --> <span class="text-[11px] uppercase tracking-wide">soon</span></li>
```

`by-tool` lists: ChatGPT, Claude, Gemini, Grok, DeepSeek, Midjourney, Nano Banana.
`by-type` lists: Text Prompts, Image Prompts, Code Prompts (soon), Search Prompts (soon).

### 9.6 Giant outlined wordmark

It is **not** `-webkit-text-stroke` and **not** inline SVG markup. It is an `<img>` pointing at a
static SVG asset, rendered inside `<footer>` (not inside `main`):

```html
<div aria-hidden="true" class="relative z-[1] mx-auto w-[90%] max-w-[1100px] overflow-hidden border-b border-gop-ink-edge pointer-events-none max-[900px]:w-full">
  <img alt="" data-dots-mask="/images/brand/bg-text.svg" loading="lazy" width="1440" height="320"
       decoding="async" data-nimg="1" class="block h-auto w-full -mb-8 opacity-90"
       style="color:transparent" src="/images/brand/bg-text.svg">
  <span aria-hidden="true" class="pointer-events-none absolute inset-0"
        style="background:linear-gradient(to bottom, rgba(245,245,245,0) 30%, rgba(245,245,245,0.7) 80%, rgba(245,245,245,1) 100%)"></span>
</div>
```

Exact recipe:

- Asset: `/images/brand/bg-text.svg`, intrinsic **1440 × 320**, an outline ("God of Prompt"
  drawn as hairline strokes, no fill).
- Rendered at `w-full h-auto` inside a `w-[90%] max-w-[1100px]` container, `opacity-90`,
  pulled up by `-mb-8` (−32 px) so it tucks into the footer.
- Container clips with `overflow-hidden` and closes with `border-b border-gop-ink-edge` (`#1614150f`).
- A full-bleed span fades the bottom into the page:
  `linear-gradient(to bottom, rgba(245,245,245,0) 30%, rgba(245,245,245,0.7) 80%, rgba(245,245,245,1) 100%)`.
- The `data-dots-mask` attribute names the same SVG — the background dot grid is masked by this
  wordmark so the letters read as denser dots (visible in `gop-bottom.png`). The masking is done
  by the un-captured canvas JS. **INFERRED**.
- `z-[1]` here; the footer content block sits at `z-[2]` above it.

### 9.7 Two prose treatments, not one

The bottom of the page carries two long-form text treatments. They read as one style at a
glance and they are not the same rules. Reusing `.prose-hub` for the SEO copy block is the
mistake this section exists to prevent.

**`.prose-hub` styles FAQ answers only.** It is applied to the `<div>` inside each `<details>`
(§9.2), never to the SEO block:

```
class="prose-hub px-5 py-4 [&_li]:text-[14px] [&_p]:text-[14px] [&_p]:leading-[1.6]"
```

Base is 16 px body at line-height 1.65 in ink-muted, `h2` at 700 weight (declared 40 px, then
cut to 32 px by the later override recorded in §9.3), `h3` at 20 px / 600, and bullets drawn as
a 4 px `::before` dot. The rebuild's copy of the class matches the reference exactly.

**The SEO copy block is not `.prose-hub`.** The reference styles it with utility classes on a
wrapper `<div>` (§9.4). Measured at 1440 px:

| Element | Value |
| --- | --- |
| Wrapper | `max-w-[880px]`, body 13 px at line-height 1.75 in ink-soft (`rgba(22,20,21,0.45)`) |
| `h2` | 15 px / 600 in ink-muted, `mt-7 mb-2`, `mt-0` on the first one |
| `h3` | 13.5 px / 600 in ink-muted, `mt-5 mb-1.5` |
| `ul` / `ol` | native `list-disc` / `list-decimal` at `pl-5`, `gap-1`, `mb-3` |
| `strong` | 600 weight in ink-muted |
| `a` | ink-muted, underlined at `underline-offset-2`, full ink on hover |

Reference class string, verbatim:

```
max-w-[880px] text-[13px] leading-[1.75] text-gop-ink-soft [&_p]:m-0 [&_p]:mb-3 [&_h2]:mb-2 [&_h2]:mt-7 [&_h2]:text-[15px] [&_h2]:font-semibold [&_h2]:leading-snug [&_h2]:text-gop-ink-muted [&_h2:first-child]:mt-0 [&_h3]:mb-1.5 [&_h3]:mt-5 [&_h3]:text-[13.5px] [&_h3]:font-semibold [&_h3]:text-gop-ink-muted [&_ul]:mb-3 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1 [&_ul]:pl-5 [&_ol]:mb-3 [&_ol]:flex [&_ol]:list-decimal [&_ol]:flex-col [&_ol]:gap-1 [&_ol]:pl-5 [&_strong]:font-semibold [&_strong]:text-gop-ink-muted [&_a]:text-gop-ink-muted [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gop-ink
```

The rebuild uses the same string with the `gop-` token prefix replaced by `pl-`.

---

## 10. Footer

```html
<footer class="relative flex w-full flex-col text-gop-ink font-sans">
  <!-- 1. wordmark block (see §9.6) -->
  <div class="relative z-[2] mx-auto w-full bg-gop-page">
    <div class="mx-auto w-[90%] max-w-[1100px] max-[900px]:w-full max-[900px]:px-5">
      <div class="flex justify-between gap-12 py-8 pb-12 max-[900px]:flex-col max-[900px]:gap-10">
```

### 10.1 Brand column

```html
<div class="text-left">
  <img alt="God of Prompt" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" class="mb-4 block h-14 w-14" style="color:transparent" src="/images/brand/face.svg">
  <h3 class="m-0 mb-2 text-gop-body font-semibold text-gop-ink">About God of Prompt</h3>
  <p class="m-0 mb-5 max-w-[36ch] text-gop-body-sm text-gop-ink-muted max-[900px]:max-w-full">Cutting-edge AI products for streamlining<br>your workflow.</p>
  <div class="flex items-center gap-2" aria-label="Social media">…</div>
</div>
```

Note the literal `<br>` in the copy.

### 10.2 Social icon buttons

```html
<a href="https://x.com/godofprompt" target="_blank" rel="noopener noreferrer"
   class="grid size-9 place-items-center rounded-full border border-gop-ink-hairline text-gop-mute transition hover:border-gop-ink-faint hover:text-gop-ink" aria-label="X">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" class="gop-icon" role="img" aria-label="X"><title>X</title>…</svg>
</a>
```

36 × 36 (`size-9`), circular, 1 px `#16141514` border → hover `#1614152e`;
icon 18 × 18 filled with `currentColor`, colour `#7f7f7f` → hover `#161415`; `gap-2` (8 px).

Four links: X (`https://x.com/godofprompt`), LinkedIn
(`https://www.linkedin.com/company/god-of-prompt/`), YouTube
(`https://www.youtube.com/@god-of-prompt`), Instagram (`https://www.instagram.com/godofprompt/`).

### 10.3 Link columns

```html
<nav aria-label="Footer" class="flex gap-16 max-[640px]:gap-12">
  <div class="flex flex-col gap-3">
    <h3 class="m-0 text-gop-body font-semibold text-gop-ink">Platform</h3>
    <ul class="m-0 flex flex-col gap-2.5 p-0 list-none">
      <li><a class="text-gop-body-sm text-gop-mute no-underline transition-colors duration-150 ease-out hover:text-gop-ink focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gop-ink" href="/prompt-library">Prompt Library</a></li>
      …
    </ul>
  </div>
  <div class="flex flex-col gap-3"> … Team … </div>
</nav>
```

- **Platform**: Prompt Library `/prompt-library` · Free Guides `/guides` · Prompt Generator
  `/prompt-generator` · AI Tools `/tools` · Products `/products`
- **Team**: Support `/contact` · Partnerships `mailto:Partner@godofprompt.ai`

Column gap 64 px (`gap-16`), 48 px below 640 px. Item gap 10 px (`gap-2.5`).

### 10.4 Bottom bar

```html
<div class="flex w-full items-center justify-between border-t border-gop-ink-edge py-5 pb-8 max-[900px]:flex-col max-[900px]:gap-3 max-[900px]:text-center">
  <p class="m-0 text-gop-body-sm text-gop-mute">© 2026 God of Prompt. All rights reserved.</p>
  <nav class="flex flex-wrap items-center gap-6" aria-label="Legal">
    <a href="mailto:Partner@godofprompt.ai" class="text-gop-body-sm text-gop-mute no-underline transition-colors duration-150 ease-out hover:text-gop-ink">Partnerships: Partner@godofprompt.ai</a>
    <a class="text-gop-body-sm text-gop-mute no-underline transition-colors duration-150 ease-out hover:text-gop-ink focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gop-ink" href="/privacy">Privacy Policy</a>
    <a class="… " href="/terms">Terms &amp; Conditions</a>
  </nav>
</div>
```

---

## 11. Floating pills

Container (last child of `<main>`):

```html
<div aria-hidden="true" style="transform: translateY(0px); transition: opacity 200ms;"
     class="pointer-events-none fixed inset-x-0 bottom-6 z-40 flex items-center justify-between px-6 pointer-events-none opacity-0">
```

- `position: fixed`, `bottom-6` (24 px), full width, `px-6` (24 px), `z-40` (= `--gop-z-overlay`).
- Container is `pointer-events-none` (duplicated in the class list); each pill re-enables with
  `pointer-events-auto`.
- Hidden at rest: `opacity-0` + `aria-hidden="true"` + children `tabindex="-1"`. Inline style
  `transition: opacity 200ms` and `transform: translateY(0px)` are set by JS — the dock fades and
  slides in on scroll, and hides again when the in-page filter bar (`data-prompt-dock-boundary`)
  is on screen. **INFERRED**.

Shared pill class (identical on both, verbatim):

```
group pointer-events-auto flex h-12 items-center overflow-hidden rounded-full no-underline transition-transform duration-150 ease-out hover:-translate-y-px focus-within:-translate-y-px active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gop-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-none motion-reduce:hover:translate-y-0 border border-white/[0.08] bg-gop-card shadow-[inset_0_1px_0_rgba(255,255,255,0.09),inset_0_0.6px_2px_rgba(255,255,255,0.12),0_14px_30px_-12px_rgba(0,0,0,0.65)] backdrop-blur-[12px]
```

- Height **48 px**, `rounded-full`, fill `#242223`, border `rgba(255,255,255,0.08)`.
- Shadow: `inset 0 1px 0 rgba(255,255,255,0.09), inset 0 0.6px 2px rgba(255,255,255,0.12), 0 14px 30px -12px rgba(0,0,0,0.65)`.
- `backdrop-blur-[12px]`.
- Hover lifts 1 px; active scales to `0.97`; 150 ms `ease-out`.

### 11.1 Bottom-left — "Custom Prompts"

```html
<a aria-label="Build a custom prompt" class="…shared…" href="/prompt-generator" tabindex="-1">
  <span class="grid h-12 w-12 shrink-0 place-items-center">
    <svg … class="lucide lucide-wand-sparkles text-[#c7ccd4]" width="19" height="19" stroke-width="1.9">…</svg>
  </span>
  <span class="max-w-0 overflow-hidden whitespace-nowrap pr-0 text-[15px] leading-5 opacity-0 transition-[max-width,opacity,padding] duration-200 ease-out group-hover:max-w-[200px] group-hover:opacity-100 group-focus-visible:max-w-[200px] group-focus-visible:opacity-100 motion-reduce:transition-none font-medium text-white group-hover:pr-5 group-focus-visible:pr-5">Custom Prompts</span>
</a>
```

Icon puck 48 × 48. Label collapsed (`max-w-0 pr-0 opacity-0`) → expands to `max-w-[200px] pr-5 opacity-100`
on `group-hover` / `group-focus-visible`. Transition `max-width, opacity, padding` · 200 ms · `ease-out`.
Label 15 px / 20 px, weight 500, white. Icon colour `#c7ccd4`.

### 11.2 Bottom-right — "Search prompts…"

```html
<button type="button" aria-label="Search prompts (Command K)" aria-keyshortcuts="Meta+K Control+K" class="…shared…" tabindex="-1">
  <span class="max-w-0 overflow-hidden whitespace-nowrap pr-0 text-[15px] leading-5 opacity-0 transition-[max-width,opacity,padding] duration-200 ease-out group-hover:max-w-[200px] group-hover:opacity-100 group-focus-visible:max-w-[200px] group-focus-visible:opacity-100 motion-reduce:transition-none order-1 text-white/45 group-hover:pl-5 group-focus-visible:pl-5">Search prompts…</span>
  <span class="order-2 grid h-12 w-12 shrink-0 place-items-center">
    <svg … class="lucide lucide-search text-white/90" width="20" height="20" stroke-width="1.9">…</svg>
  </span>
</button>
```

Mirror image: label is `order-1`, puck is `order-2`, so it expands **leftwards** from the icon.
Label uses `pl-5` (not `pr-5`) and `text-white/45`. Search icon 20 × 20 at `text-white/90`.

---

## 12. Responsive

Tailwind v4 defaults are in force: `sm: 40rem/640px`, `md: 48rem/768px`, `lg: 64rem/1024px`,
`xl: 80rem/1280px`, `2xl: 96rem/1536px`. The page also uses four arbitrary max-width breakpoints.

### 12.1 Complete inventory of breakpoint-prefixed classes in the markup

| Class | Uses | Effect |
| --- | --- | --- |
| `sm:px-6` | 1 | Main container padding 16 px → 24 px at ≥640 |
| `sm:grid-cols-2` | 2 | Prompt grid and article grid go 1 → 2 columns at ≥640 |
| `sm:grid-cols-3` | 3 | Browse-by link columns 2 → 3 at ≥640 |
| `sm:auto-rows-[234px]` | 1 | Fixed 234 px implicit rows for the masonry-style prompt grid (≥640 only; auto below) |
| `sm:grid-flow-dense` | 1 | Dense packing enabled only at ≥640 |
| `sm:row-span-2` | 11 | Tall (preview) cards occupy two rows at ≥640 |
| `sm:h-full` | 35 | `<article>` and inner columns stretch to the row box at ≥640 |
| `sm:max-h-none` | 11 | `<pre>` drops its 200 px cap at ≥640 and fills the card |
| `lg:grid-cols-3` | 2 | Prompt grid and article grid go 3 columns at ≥1024 |
| `lg:grid-cols-4` | 3 | Browse-by link columns go 4 at ≥1024 |
| `lg:col-span-2` | 5 | Five feature cards become double-width at ≥1024 |
| `max-[640px]:py-6` | 1 | Main container vertical padding 40 px → 24 px below 640 |
| `max-[640px]:mb-6` | 1 | Category-nav bottom margin 36 px → 24 px below 640 |
| `max-[640px]:w-[76px]` | 22 | Every category tile column narrows 96 → 76 px below 640 |
| `max-[640px]:px-3` | 1 | Navbar horizontal padding 24 → 12 px below 640 |
| `max-[640px]:pt-4` | 1 | Navbar top padding 24 → 16 px below 640 |
| `max-[640px]:inset-x-3` | 1 | Mobile drawer inset 24 → 12 px below 640 |
| `max-[640px]:!left-0` | 3 | Filter popovers force-pin to the left edge below 640 |
| `max-[640px]:gap-12` | 1 | Footer nav column gap 64 → 48 px below 640 |
| `max-[900px]:justify-start` | 1 | Category nav left-aligns (instead of centred) below 900 |
| `max-[900px]:flex-col` | 2 | Footer main row and bottom bar stack below 900 |
| `max-[900px]:gap-10` | 1 | Footer main row gap 48 → 40 px below 900 |
| `max-[900px]:gap-3` | 1 | Footer bottom bar gap 12 px below 900 |
| `max-[900px]:w-full` | 2 | Wordmark block and footer inner go full-bleed below 900 |
| `max-[900px]:px-5` | 1 | Footer inner gains 20 px side padding below 900 |
| `max-[900px]:max-w-full` | 1 | Footer blurb drops its `36ch` cap below 900 |
| `max-[900px]:text-center` | 1 | Footer bottom bar centres below 900 |
| `max-[1080px]:hidden` | 1 | Desktop nav cluster hides below 1080 |
| `max-[1080px]:flex` | 1 | Hamburger cluster shows below 1080 |
| `max-[1080px]:block` | 1 | Mobile drawer becomes displayable below 1080 |

### 12.2 Fluid (non-breakpoint) responsive type

| Element | Value |
| --- | --- |
| `<h1>` | `text-[clamp(24px,3vw,32px)]` — 24 px floor at ≤800 px, 32 px ceiling at ≥1067 px |
| Section `<h2>` ("Read more on the topic") | `text-[clamp(22px,2.6vw,32px)]` — 22 px floor at ≤846 px, 32 px ceiling at ≥1231 px |

Also fluid: `w-[90%]` (footer), `max-w-[calc(100vw-32px)]` (popovers), `max-h-[70vh]` (popovers),
`sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"` (article images).

### 12.3 Layout summary per width

| Viewport | Navbar | Category nav | Prompt grid | Footer |
| --- | --- | --- | --- | --- |
| ≥1080 | Full pill nav + Sign In | Centred, 96 px tiles | 3 cols, dense, 234 px rows | 2-column row |
| 900–1079 | Hamburger + drawer | Centred, 96 px tiles | 3 cols (≥1024) / 2 cols | 2-column row |
| 641–899 | Hamburger + drawer | Left-aligned | 2 cols, dense | Stacked |
| ≤640 | Hamburger, tighter padding | Left-aligned, 76 px tiles | 1 col, auto rows, `<pre>` capped at 200 px | Stacked, 20 px gutters |

---

## 13. Motion

### 13.1 Global defaults

```css
--default-transition-duration: .15s;
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--ease-out:    cubic-bezier(0, 0, .2, 1);
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
```

### 13.2 Named tokens

| Token | Value |
| --- | --- |
| `--gop-motion-fast` | `.12s` (→ `1ms` under reduced motion) |
| `--gop-motion-base` | `.2s` (→ `1ms`) |
| `--gop-motion-slow` | `.32s` (→ `1ms`) |
| `--gop-ease-standard` | `cubic-bezier(.4, 0, .2, 1)` |
| `--gop-ease-emphasized` | `cubic-bezier(.2, 0, 0, 1)` |
| `--gop-ease-spring` | `cubic-bezier(.34, 1.56, .64, 1)` |

### 13.3 Every transition observed in the markup

| Element | Properties | Duration | Easing |
| --- | --- | --- | --- |
| Navbar links | `colors` | 150 ms | default |
| Navbar Tools chevron | `transform` | 180 ms | `cubic-bezier(0.16,1,0.3,1)` |
| Tools dropdown | `opacity, transform, visibility` | 180 ms | `cubic-bezier(0.16,1,0.3,1)` |
| Mobile drawer | `opacity, transform` | 200 ms | `cubic-bezier(0.16,1,0.3,1)` |
| Hamburger ↔ X icons | `opacity, transform` | 180 ms | `cubic-bezier(0.16,1,0.3,1)` |
| Sign In button | `filter, transform` | default (150 ms) | default |
| Hero search button | `box-shadow, transform` | 200 ms | `var(--gop-ease-standard)` |
| Category tile icon | `colors` | 200 ms | default |
| Filter trigger | `colors` | default | default |
| Filter chevrons | `transform` | 200 ms | default |
| Popover rows | `colors` | default | default |
| Sort button | `colors` | default | default |
| Sort chevron | `transform` | default | default |
| Segmented control segment | `background-color, color, box-shadow` | 200 ms | default |
| Segmented control label | `max-width, opacity, margin-left` | 200 ms | `ease-out` |
| Grid container | `opacity` | 200 ms | default |
| `<article>` card | `transform, box-shadow, border-color` | 200 ms | `ease-out` |
| Card model chip | `filter, box-shadow, transform` | 150 ms | `var(--gop-ease-standard)` |
| Card tag chip | `colors` | default | default |
| Card like/bookmark/share | `colors` | 150 ms | default |
| Card like/bookmark glyph scale | `transform` | 200 ms | `ease-out` |
| Article card | `transform, box-shadow` | 200 ms | default |
| Article card image | `transform` (`scale-105`) | **500 ms** | default |
| Article "Read Article" chevron | `transform` (`translate-x-0.5`) | 200 ms | default |
| FAQ chevron | `transform` (`rotate-180`) | 200 ms | default |
| Browse-by links | `colors` | default | default |
| `.prose-hub a` underline | `text-decoration-color` | `var(--gop-motion-fast)` = 120 ms | `var(--gop-ease-standard)` |
| Footer links | `colors` | 150 ms | `ease-out` |
| Footer social buttons | `transition` (all) | default | default |
| Floating pills | `transform` | 150 ms | `ease-out` |
| Floating pill labels | `max-width, opacity, padding` | 200 ms | `ease-out` |
| Floating pill dock | `opacity` (inline style) | 200 ms | default |

### 13.4 Keyframes compiled into `b.css`

```css
@keyframes gop-card-in { 0% { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
@keyframes gop-menu-in { 0% { opacity: 0; transform: translateY(-4px) scale(.985) } to { opacity: 1; transform: translateY(0) scale(1) } }
@keyframes pg-panel-in { 0% { opacity: 0; transform: translateY(10px) scale(.98) } to { opacity: 1; transform: translateY(0) scale(1) } }
@keyframes pg-halo     { 0% { opacity: 0; transform: scale(.4) } 20% { opacity: 1 } to { opacity: 0; transform: scale(1.15) } }
@keyframes pg-float    { 0%, to { transform: translateY(-4px) rotate(-2deg) } 50% { transform: translateY(4px) rotate(2deg) } }
@keyframes pg-dot      { 0%, 80%, to { opacity: .35; transform: translateY(0) } 40% { opacity: 1; transform: translateY(-5px) } }
@keyframes spin        { to { transform: rotate(360deg) } }
@keyframes pulse       { 50% { opacity: .5 } }
```

`--animate-spin: spin 1s linear infinite`, `--animate-pulse: pulse 2s cubic-bezier(.4,0,.6,1) infinite`.

### 13.5 `gop-card-in` usage

The animation is compiled only as one utility, gated behind `prefers-reduced-motion: no-preference`:

```css
@media (prefers-reduced-motion: no-preference) {
  .motion-safe\:animate-\[gop-card-in_360ms_cubic-bezier\(0\.23\,1\,0\.32\,1\)_both\] {
    animation: .36s cubic-bezier(.23, 1, .32, 1) both gop-card-in;
  }
}
@media (prefers-reduced-motion: reduce) {
  [class*=gop-card-in] { animation: none !important }
}
```

**Duration 360 ms, easing `cubic-bezier(0.23, 1, 0.32, 1)` (expo-out), `animation-fill-mode: both`.**

The class does **not** appear on any element in the captured DOM. **INFERRED:** it is applied
client-side to prompt cards appended by the infinite-scroll loader (and probably staggered
with a per-card `animation-delay`), which is why the 24 SSR cards do not carry it.

Sibling utilities in the same block that are compiled but unused in the capture — likely
belonging to the search palette and the prompt-generator page:

```
.motion-safe:animate-[gop-sheet-in_260ms_cubic-bezier(0.32,0.72,0,1)]
.motion-safe:animate-[pg-panel-in_180ms_ease-out]
.motion-safe:animate-[pg-panel-in_320ms_ease-out]
.motion-safe:animate-[pg-dot_1.2s_ease-in-out_infinite]
.motion-safe:animate-pulse
```

### 13.6 Reduced-motion policy

```css
@media (prefers-reduced-motion: reduce) {
  :root { --gop-motion-fast: 1ms; --gop-motion-base: 1ms; --gop-motion-slow: 1ms }
  [class*=gop-menu-in] { animation: none !important }
  [class*=gop-card-in] { animation: none !important }
  [class*=pg-halo], [class*=pg-float], [class*=pg-dot] { animation: none !important }
  .motion-reduce\:transition-none { transition-property: none }
  .motion-reduce\:animate-none    { animation: none }
  .motion-reduce\:\!scale-100     { scale: 100% 100% !important }
  @media (hover: hover) {
    .motion-reduce\:group-hover\:scale-100:is(:where(.group):hover *) { scale: 100% 100% }
    .motion-reduce\:hover\:translate-y-0:hover { translate: var(--tw-translate-x) 0 }
  }
}
```

Elements that opt in explicitly with `motion-reduce:*`: navbar chevron, Tools dropdown, mobile
drawer, hamburger icons, card like/bookmark glyphs, both floating pills, floating pill labels.

---

## 14. Closed investigations

Differences that were measured, explained, and closed. Do not re-open them.

### 14.1 Workbench sits 16 px higher on a prompt detail page

On a prompt detail page the rebuild's dark workbench starts at y = 340 against the reference's
y = 356 at 1440 px. This is not a defect.

- Every element between the `<h1>` and the workbench is class-for-class identical, and the
  arithmetic closes on both sides.
- The whole 16 px is one extra wrapped line in the description paragraph. The reference
  description is 214 characters and wraps to three lines at `text-[13px]` inside
  `max-w-[560px]`. The rebuild's prompt descriptions run 141 to 182 characters and wrap to two.
- Do not pin the offset with a `min-height`. That hardcodes the layout to another site's copy
  length.

---

## Appendix A — Items that could not be determined from the capture

1. **Search / command-palette modal markup.** No `role="dialog"`, `aria-modal`, `cmdk` attribute,
   or hidden template exists in any saved file. Only the two triggers and their ARIA contract
   (`⌘K` / `Ctrl+K`) are recoverable.
2. **Sign-In auth modal.** Trigger declares `aria-haspopup="dialog"`; the dialog is not in the DOM.
3. **Sort listbox options.** `aria-haspopup="listbox"` with default "Shuffled"; the option list is
   client-rendered. No other sort labels appear anywhere in the capture.
4. **Dot-grid drawing code.** The `<canvas>` is present and its rendered output is measured exactly
   (16 px pitch, 2 × 2 px squares, `#e6e6e6`), but the JS chunk that paints it — and the wordmark
   dot-mask logic implied by `data-dots-mask` — was not saved.
5. **Open-state classes** for: filter popovers, category-tile "More" expansion, mobile drawer,
   mobile Tools submenu, and the loading `opacity-*` on the grid. All are toggled by React and only
   the closed state was captured.
6. **The `Real Estate` category tile icon.** Its `<svg>` does not carry a
   `lucide lucide-<name> relative` class in the pattern the other 20 use, so the icon name is not
   recoverable from the class string.
7. **`.rounded-gop`** is referenced by the category-panel "More" button but has no rule in `b.css` —
   a dead class in the source.
