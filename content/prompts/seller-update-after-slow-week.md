---
title: Seller Update Email After a Slow Listing Week
emoji: "✉️"
description: Drafts a direct seller update covering the week's activity data, what the feedback signals, three options with tradeoffs, and a clear recommendation to decide on.
category: real-estate
subcategory: buyer-and-seller-comms
models: [claude, chatgpt, gemini]
roles: [real-estate-agents, coaches, consultants]
type: text
featured: false
publishedAt: 2026-01-25
does:
  - "Drafts a send ready email under 350 words that opens with the week's showings, views, saves, enquiries, and offers."
  - Groups showing feedback into themes with a count, what each theme means, and whether it is fixable.
  - Presents hold, marketing, and price options with effect, cost, and risk, then names one decision and its date.
tips:
  - title: Paste showing feedback verbatim
    detail: instead of summarising it, so the theme table reflects the words buyers actually used.
  - title: "Include last week's numbers too"
    detail: so the activity table can show the trend rather than a single week in isolation.
  - title: Ask for a shorter follow up
    detail: version of the email to send by text once the seller has read the full update.
steps:
  - title: Open the prompt in a blank chat
    detail: and keep the 350 word limit, since detail belongs below the sign off.
  - title: Add your listing details
    detail: "to {{property-and-price}}, {{days-on-market}}, {{activity-data}}, {{feedback}}, {{recent-comps}}, and {{seller-context}}."
  - title: Send the filled prompt to Claude
    detail: then paste the draft into your email client and check the numbers against the MLS.
---

## Role

You are the listing agent. You deliver news the seller does not want to hear, early, with the data behind it and a decision to make.

## Context

**Property and list price:** {{property-and-price}}
**Days on market:** {{days-on-market}}
**This week's activity:** {{activity-data}}
**Showing feedback verbatim:** {{feedback}}
**Comparable properties that sold or went under contract:** {{recent-comps}}
**Competing active listings:** {{competing-listings}}
**Seller's stated timeline and motivation:** {{seller-context}}
**What we changed last week:** {{recent-changes}}

## Task

1. Open with the facts for the week: showings, online views, saves, enquiries, and offers, each compared to the previous week and to the listing average. Two sentences maximum before the numbers.
2. Interpret the feedback. Group comments into themes and state what each theme is really saying. Distinguish between objections about price, presentation, condition, and location. Note that location objections cannot be fixed.
3. Compare the property against the competing listings and the recent sales on the specific dimensions buyers mentioned.
4. State the diagnosis in one sentence. Traffic without offers is usually a price problem. No traffic is usually a marketing or price problem. Say which pattern this is.
5. Present three options: hold, adjust presentation or marketing, or adjust price. For each give the specific action, the expected effect, the cost, and the risk of doing it.
6. Make a recommendation and say why, tied to the seller's stated timeline.
7. Close with one decision to make and a date by which it should be made.

## Constraints

- No reassurance without evidence. Do not say the right buyer is out there.
- Do not bury the recommendation below the options.
- Quote feedback verbatim where it is useful, anonymised.
- Keep the email under 350 words. Put detail in an attached summary section beneath the sign off.

## Output

**Email**: subject line and body under 350 words, ready to send.

**Activity summary**: a table of Metric, This week, Last week, Listing average.

**Feedback themes**: a table of Theme, Count, What it means, Fixable.

**Options**: three with action, expected effect, cost, and risk.

**Recommendation**: one paragraph with the decision date.
