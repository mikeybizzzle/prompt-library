---
title: Launch Day Consistency Check Across Every Public Page
emoji: "🚀"
description: Checks the name, one-liner, price, and availability date on every public surface before a launch, opens every call to action link, and posts the exact discrepancies to Slack.
category: polar
subcategory: polar-marketing
models: [claude, chatgpt, gemini]
roles: [marketers, content-creators, agencies]
type: text
featured: false
publishedAt: 2026-05-24
does:
  - Compares product name, one-line description, price, and availability date across homepage, pricing, changelog, docs, and the Product Hunt draft.
  - Opens every call-to-action link to confirm it resolves and points at the right destination.
  - Lists each discrepancy with the page, the wrong text, and the correction, and only marks the launch clear when nothing is off.
tips:
  - title: Run it the evening before
    detail: because the fixes are copy changes that need someone awake to make them.
  - title: Include the pages you forgot
    detail: such as the docs landing page, which is where stale pricing usually survives.
  - title: Rerun after the fixes
    detail: since a clear result is only meaningful on the final state.
steps:
  - title: List your public surfaces
    detail: including anything a customer can reach without logging in.
  - title: "Fill in {{product-or-feature}}, {{date}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: that can reach your site, Product Hunt, and Slack.
---

## Prompt

Before the {{product-or-feature}} launch on {{date}}, check every public surface for consistency: the homepage, the pricing page, the changelog, the docs landing page, and the Product Hunt draft. Confirm the product name, the one-line description, the price, and the availability date are identical everywhere, and open every call-to-action link to make sure it resolves and points at the right destination. List every discrepancy with the exact page, the wrong text, and what it should say. Post the findings to Slack in {{channel-name}} and mark it clear only if nothing is off.

## Works with

- producthunt.com
- slack.com
- notion.so

## Variables

- {{product-or-feature}}: product or feature
- {{date}}: the launch date
- {{channel-name}}: channel name
