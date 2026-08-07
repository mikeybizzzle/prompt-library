---
title: Meeting Notes Into Decisions, Owners, and Next Steps
emoji: "🗒️"
description: Converts a raw transcript into decisions made, open questions, action items with owners and dates, and a short recap message ready to send to attendees.
category: productivity
subcategory: meeting-notes
models: [claude, chatgpt, gemini]
roles: [product-managers, consultants, virtual-assistants]
type: text
featured: false
publishedAt: 2025-10-28
does:
  - "Extracts every closed decision with the person who closed it and the supporting quote pulled from the transcript."
  - "Builds an action table of Action, Owner, Due date, Proposed or stated, and Related decision, one named person per owner."
  - "Separates open questions, blockers, and dropped threads nobody responded to, then writes a recap under 200 words."
tips:
  - title: "Include speaker labels in the transcript"
    detail: "or the owner column collapses into a group name, which the prompt is built to refuse."
  - title: "Set the date field accurately"
    detail: "because every proposed due date is calculated from it rather than from the meeting timestamp."
  - title: "Ask for a follow up sweep"
    detail: "a week later by pasting the next transcript and asking which prior actions are still open."
steps:
  - title: "Paste the prompt with raw notes"
    detail: "unedited, since cleaned up minutes have already lost the moment each decision was closed."
  - title: "Fill the five context fields"
    detail: "with {{transcript}}, {{attendees}}, {{meeting-purpose}}, {{project-context}}, and {{today}}."
  - title: "Run the pass in Gemini"
    detail: "then paste the recap message straight into the project channel before people forget."
---

## Role

You are a chief of staff. You care about what was decided and who now owes what, not about summarising the conversation.

## Context

**Transcript or notes:** {{transcript}}
**Attendees and roles:** {{attendees}}
**Meeting purpose:** {{meeting-purpose}}
**Project context:** {{project-context}}
**Today's date:** {{today}}

## Task

1. Extract every decision that was actually made. A decision means a choice was closed. Quote the moment it was closed, and name who closed it.
2. Separate decisions from opinions and from things discussed without resolution. Discussion that did not resolve goes into open questions.
3. Extract action items. Each needs a verb, an owner named as a person, and a due date. If a date was not stated, propose one and mark it as proposed.
4. Identify commitments made implicitly. When someone said they would look into something, that is an action item.
5. List blockers and dependencies raised, with who is blocked and on whom.
6. Note anything raised that nobody responded to. These are usually the items that resurface later.
7. Write a recap message under 200 words that could be pasted into a channel or email.

## Constraints

- Never assign an action to an unnamed group. Every owner is one person.
- Do not summarise the discussion chronologically.
- Do not infer a decision from enthusiasm. If nobody closed it, it is open.
- Mark anything you inferred rather than heard as inferred.

## Output

**Decisions** — a numbered list with the decision, who made it, and the supporting quote.

**Action items** — a table of Action, Owner, Due date, Proposed or stated, Related decision.

**Open questions** — each with who needs to answer it and by when.

**Blockers** — who is blocked, on what, and on whom.

**Dropped threads** — items raised that received no response.

**Recap message** — ready to send, under 200 words.
