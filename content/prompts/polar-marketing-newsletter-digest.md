---
title: Industry Newsletter Digest Posted to Slack Each Morning
emoji: "📰"
description: Reads the newsletters that landed since yesterday, strips sponsorships and duplicate coverage, and posts a one-line-per-item digest to Slack grouped into news, launches, and analysis.
category: polar
subcategory: polar-marketing
models: [claude, chatgpt, gemini]
roles: [marketers, content-creators, agencies]
type: text
featured: false
publishedAt: 2026-05-18
does:
  - Pulls every item genuinely about your topic and skips sponsorships, job ads, and repeats of another newsletter in the batch.
  - Summarizes each surviving item in one sentence with a link and the source newsletter name.
  - Posts the digest to Slack grouped under news, launches, and analysis, then archives the source emails.
tips:
  - title: Filter newsletters into one label
    detail: because the digest quality depends entirely on what lands under it.
  - title: Let it archive the sources
    detail: since the point is to stop opening twelve emails to find three items.
  - title: Narrow the topic if it runs long
    detail: as a digest of forty items is the same problem in a new place.
steps:
  - title: Route your subscriptions
    detail: to a single Gmail label with a filter.
  - title: "Fill in {{newsletter-label}}, {{industry-or-topic}}, and {{channel-name}}"
    detail: then run it.
  - title: Run it in a browser agent
    detail: signed in to Gmail and Slack.
---

## Prompt

Open the Gmail messages under the {{newsletter-label}} label received since yesterday. Pull out every item that is genuinely about {{industry-or-topic}} and skip sponsorships, job ads, and anything already covered by another newsletter in the same batch. Summarize each surviving item in one sentence with a link and the source newsletter name, grouped under headings for news, launches, and analysis. Post the digest to Slack in {{channel-name}} and archive the source emails.

## Works with

- gmail.com
- slack.com

## Suggested cadence

Every day at 7:00am.

## Variables

- {{newsletter-label}}: newsletter label
- {{industry-or-topic}}: industry or topic
- {{channel-name}}: the Slack channel the digest is posted to
