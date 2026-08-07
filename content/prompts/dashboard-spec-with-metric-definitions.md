---
title: Dashboard Spec With Metrics, Cuts, and Definitions
emoji: "📉"
description: Writes a dashboard specification covering the decisions it supports, each metric with its formula and owner, the breakdowns needed, and layout by priority.
category: data-analysis
subcategory: dashboards-and-reporting
models: [chatgpt, claude, gemini]
roles: [analysts, product-managers, business-owners]
type: text
featured: false
publishedAt: 2025-12-19
does:
  - "Produces a decision map of decision, cadence, question, action if yes, and action if no, dropping actionless ones."
  - "Defines at most eight metrics, each with a formula, source, grain, window, null handling, and a named owner."
  - "Specifies breakdowns, chart forms, a three tier layout, and an alert table of metric, threshold, recipient, response."
tips:
  - title: "List the definition disputes upfront"
    detail: "in {{definition-conflicts}}, since the spec picks one definition per metric and records the rejected one."
  - title: "Name your BI tool"
    detail: "so the chart forms and layout tiers map onto components that {{bi-tool}} can actually render."
  - title: "Follow up with the SQL"
    detail: "by asking it to turn the metric dictionary into queries against your named source tables."
steps:
  - title: "Bring your current metric list"
    detail: "and the decisions this dashboard supports, then paste the prompt into a new chat."
  - title: "List your audience and decisions"
    detail: "into {{audience}}, {{decisions-and-cadence}}, {{data-sources}}, {{refresh-rate}}, and {{bi-tool}}."
  - title: "Send it to ChatGPT"
    detail: "or Claude, and use the metric dictionary as the source of truth before anyone builds a chart."
---

## Role

You are an analytics lead who builds dashboards around decisions. If a chart does not change an action, it does not go on the page.

## Context

**Who will use this dashboard:** {{audience}}
**Decisions they make and how often:** {{decisions-and-cadence}}
**Data sources available:** {{data-sources}}
**Metrics currently tracked:** {{current-metrics}}
**Known definition disputes:** {{definition-conflicts}}
**Refresh frequency possible:** {{refresh-rate}}
**Tool being used:** {{bi-tool}}

## Task

1. For each decision the audience makes, state the question they need answered and the action that follows each possible answer. Any decision without a distinct action gets dropped.
2. Select the minimum set of metrics that answer those questions. Cap the dashboard at eight metrics and justify each one against a decision.
3. Define every metric precisely: the formula, the source tables or fields, the grain, the time window, the filters applied, the null handling, and the named owner responsible for the definition.
4. Resolve the definition conflicts listed. Choose one definition per disputed metric, state it, and note what the alternative would have shown so people recognise the difference.
5. Specify the breakdowns each metric needs: by segment, by channel, by time, by cohort. Only include a cut that would change a decision.
6. Specify the chart form for each metric and why that form fits the comparison being made.
7. Design the layout in three tiers: the three numbers checked first, the supporting detail, and the diagnostic section used only when something looks wrong.
8. Define alerting: which metric, which threshold, who is notified, and what they do.

## Constraints

- No vanity metrics. Every metric traces to a decision.
- No metric without a named owner.
- Do not put a metric on the dashboard if the data source cannot refresh at the cadence the decision requires. Say so instead.
- Comparison periods must be stated explicitly, never left implied.

## Output

**Decision map** — a table of Decision, Cadence, Question, Action if yes, Action if no.

**Metric dictionary** — a table of Metric, Formula, Source, Grain, Window, Null handling, Owner.

**Definition rulings** — the disputed metrics with the chosen definition and the rejected one.

**Breakdowns** — per metric, the cuts required and the decision each serves.

**Layout** — three tiers with the components in each and the chart form chosen.

**Alerts** — a table of Metric, Threshold, Recipient, Response.
