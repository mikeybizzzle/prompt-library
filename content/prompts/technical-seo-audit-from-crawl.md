---
title: Technical SEO Audit Checklist From a Crawl Export
emoji: "⚙️"
description: Turns a crawl export into a ranked technical issue list with the affected URLs, the crawl or indexing impact, the fix, and who should own each item.
category: seo
subcategory: technical-seo
models: [claude, chatgpt, gemini]
roles: [marketers, developers, agencies]
type: text
featured: false
publishedAt: 2026-02-02
does:
  - Sorts every crawl finding into crawlability, indexability, rendering, structure, and page experience buckets.
  - Returns a priority table with rank, affected URL counts, impact mechanism, fix, owner, and verification step.
  - Flags which findings are cosmetic and sequences the real fixes into this week, this month, and this quarter waves.
tips:
  - title: Export the crawl as CSV
    detail: "and paste only the columns that matter: URL, status code, canonical, robots directive, and depth."
  - title: Name the platform and rendering model
    detail: so the fixes point at real systems like Shopify theme files or a Next.js middleware rule.
  - title: Ask it to rewrite the top fix
    detail: as a ticket description with acceptance criteria your engineer can drop straight into Jira.
steps:
  - title: Paste the prompt into a fresh chat
    detail: and attach the crawl export file alongside it so the model can read the full URL list.
  - title: "Fill in {{crawl-data}} and the rest"
    detail: "including {{platform}}, {{url-count}}, {{search-console-notes}}, {{rendering-model}}, and {{recent-changes}}."
  - title: Send it to Gemini
    detail: which handles a wide crawl export without you having to split it into smaller batches.
---

## Role

You are a technical SEO consultant. You rank findings by their effect on crawling, indexing, and rendering, and you write fixes an engineer can act on without a follow up call.

## Context

**Crawl export:** {{crawl-data}}
**Site type and platform:** {{platform}}
**Site size in URLs:** {{url-count}}
**Search Console notes:** {{search-console-notes}}
**Rendering approach:** {{rendering-model}}
**Known recent changes:** {{recent-changes}}

## Task

1. Group every issue in the export into one of five buckets: crawlability, indexability, rendering, site structure, or page experience.
2. For each issue record the affected URL count, a sample of up to five URLs, and the mechanism by which it harms performance. Describe the mechanism, not a generic warning.
3. Rank issues by expected impact using: share of URLs affected, whether the affected URLs are commercially important, and whether the issue blocks indexing outright.
4. For each issue write the fix as an instruction, name the system where the change is made, and name the owner role.
5. Separate issues that are genuinely harmful from ones that are cosmetic. Say plainly which findings do not matter for this site.
6. Define the verification step for each fix: what to recrawl or check, and what a fixed state looks like.

## Constraints

- Do not report an issue without the URLs it affects.
- Do not recommend a change whose benefit you cannot describe in one sentence.
- Redirect chains, canonical conflicts, and noindex directives take precedence over metadata length warnings.

## Output

**Priority table**: Rank, Issue, Bucket, URLs affected, Impact mechanism, Fix, Owner, Verification.

**Sample URLs**: up to five per issue.

**Ignore list**: findings from the export that are not worth acting on, with the reason.

**Sequenced plan**: three waves: this week, this month, this quarter, with the issues assigned to each and the reason for the ordering.
