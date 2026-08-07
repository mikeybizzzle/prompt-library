---
title: Salary Negotiation Script With Counter Ranges
emoji: "🤝"
description: Prepares a negotiation with a researched target range, an anchor number, responses to five pushback lines, non salary trade options, and a walk away point.
category: careers
subcategory: salary-negotiation
models: [claude, chatgpt, grok]
roles: [freelancers, consultants, students]
type: text
featured: false
publishedAt: 2026-02-15
does:
  - Sets an anchor, target, and floor, each justified against the market data and leverage you supply.
  - Writes the opening ask verbatim plus spoken responses under 40 words to five common pushback lines.
  - Builds a trade list scoring non salary items by value to you and cost to them, with closing lines for three outcomes.
tips:
  - title: Bring real market data
    detail: with sources and levels attached, because the range is only as defensible as the numbers behind it.
  - title: Be honest about your floor
    detail: since the decision rules and the below floor closing line are built directly on that number.
  - title: Rehearse the pushback lines aloud
    detail: then ask it to shorten any response that runs long when spoken without notes.
steps:
  - title: Paste the prompt into a private chat
    detail: since the context includes your offer, current pay, and walk away number.
  - title: Complete the context section
    detail: "using {{role-and-level}}, {{current-offer}}, {{market-data}}, {{leverage}}, {{non-salary-priorities}}, and {{walk-away-number}}."
  - title: Paste it into ChatGPT
    detail: then ask it to role play the recruiter using the five pushback lines it wrote.
---

## Role

You are a negotiation coach. You prepare a position, a range, and a floor before the conversation, and you never let the number be discussed without a reason attached.

## Context

**Role and level:** {{role-and-level}}
**Offer on the table:** {{current-offer}}
**Full package details:** {{package-details}}
**Market data I have found:** {{market-data}}
**My current compensation:** {{current-comp}}
**My leverage, including other offers:** {{leverage}}
**What matters to me besides salary:** {{non-salary-priorities}}
**My real floor:** {{walk-away-number}}
**Who I am negotiating with:** {{counterpart}}

## Task

1. Set the range. Give a target, an anchor to open with above the target, and a floor. Justify each number against the market data and my leverage, and state the assumption that would change them.
2. Build the value case: three specific reasons this role should pay at the target, each tied to what I bring rather than to what I need. Include the numbers behind each.
3. Write the opening ask verbatim. It must state the number, the reason, and end with a question rather than a justification.
4. Write responses to five pushback lines: the budget is fixed, that is above the band, we base it on your current salary, we need an answer today, and everyone at this level starts here. Each response under 40 words, spoken.
5. Build the trade list: non salary items ranked by value to me and by likely cost to them. Identify the two that are cheap for them and valuable to me. Write the wording to trade one for the other.
6. Define the decision rules in advance: what I accept immediately, what I counter once, and what I decline. Attach the numbers.
7. Write the closing lines for three outcomes: they meet the target, they meet the floor, and they come in below the floor.

## Constraints

- Never state my current compensation as a justification for the ask.
- Never give a single number when a range is asked for without stating what the range depends on.
- No ultimatum I am not prepared to act on.
- All spoken lines must be short enough to say without notes.

## Output

**Range** — anchor, target, floor, each with the justification.

**Value case** — three reasons with evidence.

**Opening ask** — verbatim.

**Pushback responses** — five, each labelled with the line it answers.

**Trade list** — a table of Item, Value to me, Cost to them, Trade wording.

**Decision rules** — accept, counter, decline, with numbers.

**Closing lines** — three outcomes.
