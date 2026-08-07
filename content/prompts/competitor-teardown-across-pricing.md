---
title: Competitor Teardown Across Pricing, Product, and Messaging
emoji: "🔬"
description: Produces a side by side teardown of three competitors covering pricing structure, positioning, proof, onboarding, and the gap your product can credibly claim.
category: research
subcategory: competitor-analysis
models: [perplexity, claude, chatgpt, gemini]
roles: [founders, marketers, analysts]
type: text
featured: false
publishedAt: 2025-10-16
does:
  - "Documents each competitor across positioning, pricing, product surface, proof, onboarding, and weak points."
  - "Returns a comparison matrix and a pricing table of structure, entry price, price drivers, and whether it is public."
  - "Maps every stated loss reason to the competitor winning it and marks each claim verified, inferred, or unknown."
tips:
  - title: "Limit it to three competitors"
    detail: "you genuinely lose deals to, since the matrix compares across all of them and extra columns dilute it."
  - title: "Paste the buying criteria verbatim"
    detail: "from a recent won or lost deal, because the comparison is scored against those, not your feature list."
  - title: "Follow up on the consensus section"
    detail: "by asking which shared assumption is weakest, then have it sketch the positioning that breaks it."
steps:
  - title: "Gather the source pages first"
    detail: "then paste the prompt in, since the teardown is only as good as the material it can read."
  - title: "Name your product and rivals"
    detail: "in {{our-product}}, {{competitors}}, {{segment}}, {{loss-reasons}}, and {{buying-criteria}}."
  - title: "Run it in Perplexity"
    detail: "and check the evidence log before you circulate anything marked inferred as if it were fact."
---

## Role

You are a competitive analyst. You separate what a competitor claims from what they actually do, and you flag the difference between the two.

## Context

**Our product:** {{our-product}}
**Competitors to examine:** {{competitors}}
**Source material available:** {{source-material}}
**Segment we care about:** {{segment}}
**Where we lose deals today:** {{loss-reasons}}
**Decision criteria buyers use:** {{buying-criteria}}

## Task

For each competitor, document these dimensions.

1. **Positioning.** The category they claim, the alternative they position against, and the one line they lead with on their home page.
2. **Pricing.** Structure, entry price, what drives the price up, what is gated behind higher tiers, and whether pricing is public.
3. **Product surface.** The three capabilities they showcase, the ones they hide behind a demo request, and what the interface implies about who it is built for.
4. **Proof.** Named customers, the type of evidence they lean on, and how specific their claims are.
5. **Onboarding and activation.** How a buyer gets started, whether self serve exists, and where friction appears.
6. **Weak points.** What their own marketing avoids mentioning, and what their public reviews complain about consistently.

Then compare across all three and answer: where do they all agree, and is that agreement a genuine requirement or an unexamined convention.

## Constraints

- Mark every claim as verified from source, inferred, or unknown. Never present an inference as a fact.
- Do not compare on features we happen to have. Compare on the buying criteria listed.
- Do not describe a competitor as inferior without naming the dimension and the evidence.

## Output

**Comparison matrix** — competitors as columns, the six dimensions as rows.

**Pricing detail** — a table of Competitor, Structure, Entry price, Price drivers, Public.

**Consensus and convention** — where all three agree and whether that is a real constraint.

**Our gap** — two openings we could credibly claim, each with what we would need to prove it.

**Loss reason mapping** — for each stated loss reason, which competitor wins on it and what would change that.

**Evidence log** — every claim with its source and confidence.
