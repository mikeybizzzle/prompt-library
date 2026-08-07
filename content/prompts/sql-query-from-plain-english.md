---
title: SQL Query Builder From a Plain English Question
emoji: "🧮"
description: Turns a business question into a working SQL query against your schema, with the assumptions stated, edge cases handled, and a sanity check to run first.
category: data-analysis
subcategory: sql-and-queries
models: [claude, chatgpt, cursor, gemini]
roles: [analysts, developers, product-managers]
type: code
featured: false
publishedAt: 2025-10-24
does:
  - Restates the question as a metric definition naming grain, time window, implied filters, and the population counted.
  - Returns a sanity check query plus one annotated main query built from common table expressions with no SELECT star.
  - Lists the assumption behind each ambiguity, the edge cases handled, expected result shape, and the cost drivers.
tips:
  - title: Paste the real CREATE TABLE statements
    detail: rather than a column list, so join keys, data types, and nullability are all visible.
  - title: Name the metric definitions in use
    detail: so the query returns numbers that match what your dashboards already report.
  - title: Run it inside Cursor
    detail: when the schema lives in the repo, so it reads your migrations instead of trusting a paste.
steps:
  - title: Open the prompt in a new chat
    detail: with your schema DDL and the business question ready to drop straight in.
  - title: Fill the context block
    detail: "with {{sql-dialect}}, {{schema-ddl}}, {{question}}, {{data-quirks}}, {{timezone}}, and {{row-volume}}."
  - title: Run it in Claude or Cursor
    detail: and execute the sanity check query before you trust anything the main query returns.
---

## Role

You are an analytics engineer. You write SQL that returns the right number, and you say out loud which definition of the metric you chose.

## Context

**Database and dialect:** {{sql-dialect}}
**Schema:** {{schema-ddl}}
**Business question:** {{question}}
**Known data quirks:** {{data-quirks}}
**Time zone of stored timestamps:** {{timezone}}
**Row volume of the largest table:** {{row-volume}}
**Definitions the business already uses:** {{existing-definitions}}

## Task

1. Restate the question as a precise metric definition. Name the grain of the result, the time window, the filters implied but not stated, and the population included or excluded.
2. List the ambiguities in the question and state the choice you are making for each, with the reason. Examples: whether cancelled orders count, whether the window is inclusive of the end date, whether a customer is identified by account or by email.
3. Write a small sanity check query first: a count or a spot check that proves the joins do not fan out and the filters behave as expected.
4. Write the main query. Use common table expressions with one transformation each and readable names. Alias every column that is computed.
5. Handle the edge cases explicitly: null values in join keys, duplicate rows from one to many joins, time zone conversion, and rows outside the window that affect a cumulative measure.
6. State the expected shape of the result: number of rows, columns, and what a plausible value range looks like.
7. Note the cost drivers in the query given the row volume, and one change that would make it cheaper if it is slow.

## Constraints

- No SELECT star in the final query.
- No implicit joins. Use explicit join syntax with the condition stated.
- Do not filter in a WHERE clause what belongs in a join condition for an outer join.
- If the schema cannot answer the question, say so and state what column or table would be required.

## Output

**Metric definition** — grain, window, filters, population.

**Assumptions** — a numbered list with the choice and the reason.

**Sanity check** — a SQL block with the expected result described.

**Main query** — a single annotated SQL block.

**Edge cases handled** — a bulleted list mapping each to the part of the query that handles it.

**Expected result shape** — rows, columns, plausible ranges.

**Performance note** — cost drivers and one optimisation.
