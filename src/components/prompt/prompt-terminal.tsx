"use client";

import Link from "next/link";
import { Fragment, useMemo, useState } from "react";
import { Check, Copy, ExternalLink, RotateCcw, Share2, SlidersHorizontal } from "lucide-react";

import { LogoMark } from "@/components/brand/logo";
import { ModelIcon } from "@/components/library/model-icon";
import type { PromptCardData } from "@/lib/types";
import { cn } from "@/lib/utils";

const OPEN_IN: Record<string, string> = {
  chatgpt: "https://chatgpt.com/?q=",
  claude: "https://claude.ai/new?q=",
  gemini: "https://gemini.google.com/app",
  grok: "https://grok.com/",
  perplexity: "https://www.perplexity.ai/search?q=",
};

const VAR_RE = /\{\{([a-z0-9-]+)\}\}/gi;

const ACRONYMS = new Set(["icp", "seo", "kpi", "roi", "url", "api", "sql", "cta", "faq", "ai", "ux", "ui"]);

function humanise(key: string) {
  return key
    .split("-")
    .map((w, i) =>
      ACRONYMS.has(w) ? w.toUpperCase() : i === 0 ? w[0].toUpperCase() + w.slice(1) : w,
    )
    .join(" ");
}

export function PromptTerminal({
  prompt,
  categoryName,
  subcategoryName,
  categoryHref,
  subcategoryHref,
  roleName,
  roleHref,
}: {
  prompt: PromptCardData;
  categoryName: string;
  subcategoryName: string;
  categoryHref: string;
  subcategoryHref: string;
  roleName?: string;
  roleHref?: string;
}) {
  const keys = useMemo(
    () => [...new Set([...prompt.body.matchAll(VAR_RE)].map((m) => m[1]))],
    [prompt.body],
  );
  const [values, setValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const filled = keys.filter((k) => values[k]?.trim()).length;

  const resolved = useMemo(
    () => prompt.body.replace(VAR_RE, (m, k: string) => values[k]?.trim() || m),
    [prompt.body, values],
  );

  async function copy() {
    await navigator.clipboard.writeText(resolved);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  async function share() {
    await navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 1800);
  }

  async function openIn(slug: string) {
    await navigator.clipboard.writeText(resolved);
    const base = OPEN_IN[slug];
    if (base) window.open(base.endsWith("=") ? base + encodeURIComponent(resolved) : base, "_blank");
  }

  /** Renders the body with each {{placeholder}} as a highlighted token. */
  const highlighted = useMemo(() => {
    const parts: React.ReactNode[] = [];
    let last = 0;
    for (const m of prompt.body.matchAll(VAR_RE)) {
      const i = m.index ?? 0;
      if (i > last) parts.push(prompt.body.slice(last, i));
      const key = m[1];
      const value = values[key]?.trim();
      parts.push(
        <span
          key={`${key}-${i}`}
          data-var-key={key}
          className="inline-block rounded-[5px] border border-[rgba(252,217,74,0.1)] bg-[linear-gradient(to_bottom,rgba(252,217,74,0.12),rgba(252,217,74,0.09))] px-1 align-baseline font-mono text-[13px] leading-[22px] tracking-[-0.5px] text-pl-accent-yellow"
        >
          {value || m[0]}
        </span>,
      );
      last = i + m[0].length;
    }
    parts.push(prompt.body.slice(last));
    return parts.map((p, i) => <Fragment key={i}>{p}</Fragment>);
  }, [prompt.body, values]);

  const actionModels = prompt.models.filter((m) => OPEN_IN[m.slug]).slice(0, 4);

  return (
    <div>
      <section className="pl-terminal">
        <div className="pl-terminal-deco">
          <span className="pl-terminal-glow" aria-hidden="true" />
        </div>

        <div className="relative z-[1] flex flex-col gap-4 p-6 max-[640px]:p-3">
          <header className="pl-terminal-pill flex min-h-[44px] items-center justify-between gap-3 py-1.5 pl-6 pr-2 max-[640px]:pl-4">
            <div className="flex min-w-0 items-center gap-4">
              <LogoMark className="size-6 shrink-0" />
              <p className="m-0 truncate font-sans text-[14px] leading-5 text-white">
                {prompt.title}
              </p>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              {actionModels.map((m) => (
                <button
                  key={m.slug}
                  type="button"
                  title={`Open in ${m.name}`}
                  aria-label={`Open in ${m.name} (opens in a new tab; the prompt is copied for you)`}
                  onClick={() => openIn(m.slug)}
                  className="pl-action"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center justify-self-center">
                    <ModelIcon slug={m.slug} className="size-4" />
                  </span>
                  <span className="pl-action-label">Open in {m.name}</span>
                </button>
              ))}
              <button
                type="button"
                onClick={copy}
                data-state={copied ? "copied" : "idle"}
                aria-label="Copy prompt"
                className="pl-action"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center justify-self-center">
                  {copied ? (
                    <Check className="size-4" strokeWidth={2} />
                  ) : (
                    <Copy className="size-4" strokeWidth={1.8} />
                  )}
                </span>
                <span className="pl-action-label">{copied ? "Copied" : "Copy"}</span>
              </button>
              <button
                type="button"
                onClick={share}
                aria-label="Share prompt"
                title="Share prompt"
                className="pl-action"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center justify-self-center">
                  {shared ? (
                    <Check className="size-4" strokeWidth={2} />
                  ) : (
                    <Share2 className="size-4" strokeWidth={1.8} />
                  )}
                </span>
                <span className="pl-action-label">{shared ? "Link copied" : "Share"}</span>
              </button>
            </div>
          </header>

          <div
            className={cn(
              "grid items-start gap-4 max-[960px]:grid-cols-1",
              keys.length > 0 ? "grid-cols-[minmax(0,1fr)_320px]" : "grid-cols-1",
            )}
          >
            <div className="pl-terminal-panel relative overflow-hidden">
              <div className="pl-terminal-body">
                <div className="flex items-start gap-6 p-6">
                  <pre className="m-0 min-w-0 flex-1 overflow-x-auto whitespace-pre-wrap break-words bg-transparent font-mono text-[14px] leading-6 text-white">
                    <code>{highlighted}</code>
                  </pre>
                </div>
              </div>
            </div>

            {keys.length > 0 && (
              <div className="pl-terminal-panel flex flex-col gap-3 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 font-sans text-[15px] leading-5 text-white">
                    <SlidersHorizontal className="size-4 text-white/60" strokeWidth={1.8} aria-hidden="true" />
                    Fill in the variables
                  </span>
                  <span className="inline-flex items-center gap-2 text-pl-caption tabular-nums text-white/45">
                    {filled}/{keys.length}
                    <button
                      type="button"
                      aria-label="Reset variables"
                      onClick={() => setValues({})}
                      className="rounded-full p-0.5 transition-colors hover:text-white"
                    >
                      <RotateCcw className="size-3.5" strokeWidth={1.8} />
                    </button>
                  </span>
                </div>

                {keys.map((key) => (
                  <label key={key} className="pl-field">
                    <span className="sr-only">{humanise(key)}</span>
                    <input
                      type="text"
                      value={values[key] ?? ""}
                      placeholder={humanise(key)}
                      onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
                      className="w-full bg-transparent font-sans text-[14px] leading-5 text-white placeholder:text-white/40 focus:outline-none"
                    />
                  </label>
                ))}

                <button
                  type="button"
                  onClick={copy}
                  className="mt-auto inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/[0.24] bg-[#242223] px-3 font-sans text-[16px] leading-6 text-[#f7f7f7] shadow-[0_0_0_1px_#000] transition-[background,box-shadow,transform] hover:bg-[#2f2d2e] active:translate-y-px"
                >
                  <ExternalLink className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  Copy filled prompt
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div
        className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-b-2xl px-4 py-6 shadow-[inset_0_0.6px_2px_rgba(255,255,255,0.16),inset_0_27px_76px_rgba(255,255,255,0.06)] max-[640px]:px-3 max-[640px]:py-4"
        style={{
          background:
            "linear-gradient(rgba(255,255,255,0.08),rgba(255,255,255,0.08)), #1B1A1A",
        }}
      >
        <div className="flex flex-wrap items-center gap-2">
          {[
            { label: "Category", value: categoryName, href: categoryHref },
            { label: "Subcategory", value: subcategoryName, href: subcategoryHref },
            roleName && roleHref ? { label: "Perfect for", value: roleName, href: roleHref } : null,
          ]
            .filter((x) => x !== null)
            .map((chip) => (
              <Link
                key={chip.label}
                href={chip.href}
                className="inline-flex h-8 items-center gap-2 rounded-pl-sm border border-white/[0.08] bg-white/[0.05] px-2 no-underline transition-[border-color,background-color] hover:border-white/[0.16] hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow"
              >
                <span className="font-sans text-[11px] leading-4 tracking-[0.2px] text-white/50">
                  {chip.label}
                </span>
                <span className="font-sans text-[13px] leading-4 text-white/85">{chip.value}</span>
              </Link>
            ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-sans text-pl-caption text-pl-menu-item-2">Works with</span>
          <div className="flex flex-wrap items-center gap-1">
            {prompt.models.map((m) => (
              <Link
                key={m.slug}
                href={`/tool/${m.slug}`}
                className={cn(
                  "inline-flex h-[22px] select-none items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-pl-sm border-0 px-1.5 font-sans text-[13px] font-medium leading-4 tracking-tight text-white no-underline transition-[filter,transform] duration-150 hover:brightness-[1.06] active:translate-y-px",
                  `model-chip-${m.slug}`,
                )}
              >
                <span className="inline-flex shrink-0 items-center justify-center">
                  <ModelIcon slug={m.slug} className="size-4" />
                </span>
                <span>{m.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
