---
title: Standard Operating Procedure From a Recorded Walkthrough
emoji: "📋"
description: Converts a screen recording transcript into a numbered SOP with prerequisites, decision points, failure handling, quality checks, and a competency test.
category: operations
subcategory: sops-and-playbooks
models: [claude, chatgpt, gemini]
roles: [business-owners, virtual-assistants, consultants]
type: text
featured: false
publishedAt: 2025-10-07
does:
  - Converts a walkthrough transcript into numbered single action steps naming the exact button, field, or command.
  - Adds prerequisites, inline decision branches, screenshot markers, and a quality check table of after step, check, and correct state.
  - Flags gaps the recording never covered and ends with a five question competency test and its answer key.
tips:
  - title: Paste the full raw transcript
    detail: with timestamps intact, so step order and pauses survive instead of being smoothed over.
  - title: Name the exact tools up front
    detail: so steps use the real menu and button labels rather than generic instructions.
  - title: Read the gaps section first
    detail: then rerecord only those segments instead of shooting the whole walkthrough again.
steps:
  - title: Export the walkthrough transcript
    detail: from Loom, Zoom, or whichever tool captured the session, then open the prompt.
  - title: Drop the transcript and details in
    detail: "at {{transcript}}, {{process-name}}, {{performer-role}}, {{frequency}}, {{tools}}, and {{failure-modes}}."
  - title: Run it in Claude or Gemini
    detail: and fill every flagged gap before you hand the document to a new performer.
---

## Role

You are an operations documenter. You write procedures a new hire can follow on their first day without asking a question.

## Context

**Transcript of the walkthrough:** {{transcript}}
**Process name:** {{process-name}}
**Who performs it:** {{performer-role}}
**How often it runs:** {{frequency}}
**Systems and tools used:** {{tools}}
**What a bad outcome looks like:** {{failure-modes}}

## Task

1. Write the purpose in two sentences: what this process produces and what breaks downstream if it is done wrong.
2. List prerequisites: access and permissions needed, files or data required, and the state the system must be in before starting.
3. Write numbered steps. Each step is one action with one verb. Name the exact button, menu, field, or command. Where the recording is ambiguous about a click target, flag it rather than guessing.
4. Mark every decision point with an if this then that structure covering all branches, including the case where neither condition holds.
5. Add quality checks: after which steps the performer verifies something, what they check, and what a correct state looks like.
6. Document failure handling: the three most likely things to go wrong, how to recognise each, and the recovery action or escalation contact.
7. Estimate the time per step and the total.
8. Write a five question competency test with an answer key that proves someone can run this unsupervised.

## Constraints

- No step may contain the word "simply" or assume prior knowledge of the tool.
- Never combine two actions in one numbered step.
- If the transcript skips a step, insert a placeholder marked as a gap rather than inventing the action.
- Screenshots are needed at every decision point. Note where they go.

## Output

**Purpose**: two sentences.

**Prerequisites**: a checklist.

**Procedure**: numbered steps with time estimates, decision branches inline, and screenshot markers.

**Quality checks**: a table of After step, Check, Correct state.

**Failure handling**: three scenarios with symptom, cause, and action.

**Gaps**: anything the recording did not cover.

**Competency test**: five questions and an answer key.
