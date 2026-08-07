---
title: SEO Content Brief With Outline and Entity Checklist
emoji: "📝"
description: Produces a writer ready content brief covering search intent, a heading outline, entities to cover, internal links, and the questions the page must answer.
category: seo
subcategory: content-briefs
models: [chatgpt, claude, perplexity]
roles: [marketers, copywriters, agencies]
type: text
featured: false
publishedAt: 2025-12-11
does:
  - States the dominant search intent and the page format the SERP demands, then justifies both in three sentences.
  - Builds a nested H2 and H3 outline where every heading names the question it answers and the content required.
  - Returns an entity checklist marked mandatory or optional, ten searcher questions mapped to headings, and link anchors.
tips:
  - title: Paste real notes on the top five
    detail: results, including their format and depth, so the intent call is based on the live SERP.
  - title: Name a genuine differentiator
    detail: such as proprietary data or first hand testing, so the gap section has somewhere to land.
  - title: Ask for the meta variants
    detail: as a set of three title tags under 60 characters so you can test them against each other.
steps:
  - title: Load the prompt into a browsing model
    detail: so it can look at the pages currently ranking rather than guessing at the SERP.
  - title: Replace the brief variables
    detail: "{{primary-keyword}}, {{secondary-keywords}}, {{serp-notes}}, {{differentiator}}, {{audience}}, and {{internal-pages}}."
  - title: Run it in Perplexity
    detail: so the outline is grounded in pages that rank today, then hand the brief to the writer.
---

## Role

You are an SEO editor who writes briefs specific enough that two different writers would produce the same structure.

## Context

**Primary keyword:** {{primary-keyword}}
**Secondary keywords:** {{secondary-keywords}}
**What currently ranks in the top five:** {{serp-notes}}
**Our unique angle or data:** {{differentiator}}
**Audience and expertise level:** {{audience}}
**Target word count:** {{word-count}}
**Pages available to link to:** {{internal-pages}}
**Conversion goal for this page:** {{conversion-goal}}

## Task

1. State the dominant search intent in one sentence, based on what already ranks rather than on the keyword wording.
2. Define the page format the SERP demands: guide, listicle, comparison, tutorial, or definition page. Justify it in one line.
3. Build the heading outline. For each H2 and H3, state the specific question it answers and the minimum content required to answer it well.
4. List the entities the page must mention to be considered complete: people, tools, standards, concepts, and related terms. Mark which are mandatory and which are optional.
5. List ten questions real searchers ask around this topic and where in the outline each is answered.
6. Specify the coverage gap: what the current top five all fail to address, and where our differentiator goes.
7. Assign internal links with the anchor text and the section they belong in.

## Constraints

- Keyword density targets are not allowed. Specify coverage, not repetition.
- Every heading must be answerable. Remove any heading that exists only to hold a keyword.
- Do not recommend content the site cannot credibly claim expertise in.

## Output

**Intent and format** — three sentences.

**Outline** — nested H2 and H3 with question answered and required content per heading.

**Entity checklist** — a table of Entity, Type, Mandatory or optional.

**Questions to answer** — ten, each mapped to a heading.

**Gap and angle** — what competitors miss and where our angle lands.

**Internal links** — Target URL, Anchor text, Section.

**Meta** — title tag under 60 characters and meta description under 155 characters.
