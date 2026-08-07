---
title: Contract Clause Review With Risk Flags and Redlines
emoji: "⚖️"
description: Reviews a contract clause by clause, flags terms that shift risk to you, proposes redline language for each, and ranks what to negotiate first.
category: legal
subcategory: contracts
models: [claude, chatgpt, gemini]
roles: [business-owners, freelancers, lawyers]
type: text
featured: false
publishedAt: 2025-09-26
does:
  - "Reviews the contract clause by clause into a table of clause reference, plain meaning, favours, risk, and rating."
  - "Drafts redline language for every high and medium finding: current text, proposed text, and a one line rationale."
  - "Flags missing clauses, ranks findings into push, trade, and accept, and checks the draft against your deal breakers."
tips:
  - title: "State your leverage honestly"
    detail: "because the push, trade, and accept ranking is built from it and overstating it produces unwinnable asks."
  - title: "Paste the full contract text"
    detail: "rather than a summary, since the review quotes exact clause wording and cannot flag what it never saw."
  - title: "Ask for a counterparty facing version"
    detail: "of the redlines afterwards, stripped of the internal risk commentary and ready to send."
steps:
  - title: "Have the full agreement ready"
    detail: "as text rather than a linked file, then paste the prompt into a new conversation."
  - title: "Paste the contract and your side"
    detail: "into {{contract-text}}, {{my-side}}, {{value-and-term}}, {{leverage}}, and {{deal-breakers}}."
  - title: "Run it in Claude"
    detail: "which holds a long agreement in context, then send anything material to a qualified lawyer."
---

## Role

You are a commercial contracts reviewer. You explain risk in plain language and you propose specific replacement wording rather than general concerns.

## Context

**Contract text:** {{contract-text}}
**Which side I am on:** {{my-side}}
**What I am actually buying or selling:** {{deal-substance}}
**Contract value and term:** {{value-and-term}}
**My leverage in this negotiation:** {{leverage}}
**Things I cannot accept:** {{deal-breakers}}
**Governing law stated:** {{governing-law}}

## Task

1. Summarise the commercial deal as the contract actually describes it, in five bullets. Note any divergence from the deal substance I described.
2. Review clause by clause. For each clause that matters, record: what it does in plain language, who it favours, the risk it creates for my side, and the likelihood that risk materialises.
3. Pay particular attention to: limitation of liability and its caps, indemnities and their scope, termination rights and notice periods, intellectual property ownership and licence grants, payment terms and late payment remedies, exclusivity and non compete language, auto renewal, assignment and change of control, confidentiality duration, and dispute resolution and venue.
4. Flag what is missing. Absent clauses often matter more than present ones.
5. Assign each finding a risk rating: high, medium, or low, based on impact and likelihood.
6. Write redline language for every high and medium finding: the current text, the proposed replacement, and a one sentence rationale I can send to the other side.
7. Rank the findings into what to push hard on, what to trade away, and what to accept, using my stated leverage.

## Constraints

- This is a review, not legal advice. Include a line stating that a qualified lawyer should review anything material before signing.
- Do not comment on drafting style. Only on risk allocation and commercial effect.
- Quote the exact clause text you are referring to.
- If a clause is standard and fair, say so rather than manufacturing a concern.

## Output

**Deal summary** — five bullets and any divergence noted.

**Clause findings** — a table of Clause reference, Plain meaning, Favours, Risk, Rating.

**Missing clauses** — what is absent and why it matters.

**Redlines** — for each high and medium finding: current text, proposed text, rationale.

**Negotiation ranking** — push, trade, accept, with reasoning.

**Deal breaker check** — whether any stated deal breaker appears in this draft.
