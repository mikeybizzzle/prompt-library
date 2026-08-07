"use client";

import Link from "next/link";
import { useState } from "react";
import { Bookmark, Check, Copy, Heart, Share2 } from "lucide-react";

import { ModelIcon } from "@/components/library/model-icon";
import type { PromptCardData } from "@/lib/types";
import { useLocalSet } from "@/lib/use-local-set";
import { cn } from "@/lib/utils";

const iconButton =
  "inline-flex items-center rounded-full p-1 -m-1 transition-colors duration-150 text-white/45 hover:text-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow";

export function PromptCard({
  prompt,
  tall,
  animateIn = false,
}: {
  prompt: PromptCardData;
  tall: boolean;
  animateIn?: boolean;
}) {
  const likes = useLocalSet("pl:likes");
  const saves = useLocalSet("pl:saves");
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const liked = likes.has(prompt.slug);
  const saved = saves.has(prompt.slug);
  const model = prompt.models[0];

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  async function share() {
    await navigator.clipboard.writeText(`${window.location.origin}/p/${prompt.slug}`);
    setShared(true);
    setTimeout(() => setShared(false), 1600);
  }

  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-[20px] border border-white/[0.08] bg-pl-card p-4 text-white transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_16px_34px_-14px_rgba(0,0,0,0.6)] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-pl-accent-yellow",
        tall ? "sm:row-span-2 sm:h-full" : "sm:h-full",
        animateIn && "motion-safe:animate-card-in",
      )}
    >
      <Link
        href={`/p/${prompt.slug}`}
        aria-label={prompt.title}
        className="absolute inset-0 z-[1] outline-none"
      />

      {tall && (
        <div className="relative flex min-h-0 flex-1 flex-col gap-3">
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-[16px] bg-white/[0.08] p-4">
            <pre className="m-0 max-h-[200px] overflow-hidden whitespace-pre-wrap break-words font-mono text-[12px] leading-[22px] text-white/50 sm:h-full sm:max-h-none">
              {prompt.preview}
            </pre>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-14 rounded-b-[16px]"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(40,38,39,0) 0%, rgba(40,38,39,0.85) 70%, rgba(40,38,39,1) 100%)",
              }}
            />
          </div>
        </div>
      )}

      <div className={cn("relative flex flex-col gap-3", !tall && "min-h-0 flex-1")}>
        <h3 className="m-0 flex items-start gap-2 text-[19px] font-medium leading-6 tracking-[-0.01em] text-white">
          <span aria-hidden="true" className="shrink-0 leading-6">
            {prompt.emoji}
          </span>
          <span className="line-clamp-2">{prompt.title}</span>
        </h3>

        <div className="relative z-[2] w-fit">
          <div className="flex flex-wrap items-center gap-1">
            {model && (
              <Link
                href={`/tool/${model.slug}`}
                className={cn(
                  "inline-flex h-[22px] cursor-pointer select-none items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-pl-sm border-0 px-1.5 font-sans text-[13px] font-medium leading-4 tracking-tight text-white no-underline transition-[filter,box-shadow,transform] duration-150 [transition-timing-function:var(--pl-ease-standard)] hover:brightness-[1.06] active:translate-y-px active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pl-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  `model-chip-${model.slug}`,
                )}
              >
                <span className="inline-flex shrink-0 items-center justify-center">
                  <ModelIcon slug={model.slug} className="size-4" />
                </span>
                <span>{model.name}</span>
              </Link>
            )}
            {prompt.tags.map((tag) => (
              <Link
                key={tag.href}
                href={tag.href}
                className="inline-flex h-[22px] items-center rounded-pl-sm bg-white/10 px-1.5 text-[13px] leading-4 text-white/90 no-underline transition-colors hover:bg-white/20"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="m-0 line-clamp-2 text-[14px] leading-5 text-white/60">{prompt.description}</p>

        <div className="relative z-[2] mt-auto pt-1">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-pressed={liked}
                aria-label="Like"
                onClick={() => likes.toggle(prompt.slug)}
                className={cn(
                  "group/like -mx-1 inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-pl-caption tabular-nums transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow",
                  liked ? "text-pl-accent-yellow" : "text-white/45 hover:text-white/80",
                )}
              >
                <Heart
                  className={cn(
                    "size-4 transition-transform duration-200 ease-out group-hover/like:scale-110 motion-reduce:transition-none",
                    liked ? "fill-current" : "fill-transparent",
                  )}
                  strokeWidth={1.8}
                />
                {liked && <span>1</span>}
              </button>

              <button
                type="button"
                aria-pressed={saved}
                aria-label="Save"
                onClick={() => saves.toggle(prompt.slug)}
                className={cn(
                  "group/bm -m-1 inline-flex items-center gap-1 rounded-full p-1 text-pl-caption tabular-nums transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow",
                  saved ? "text-pl-accent-yellow" : "text-white/45 hover:text-white/80",
                )}
              >
                <Bookmark
                  className={cn(
                    "size-4 transition-transform duration-200 ease-out group-hover/bm:scale-110 motion-reduce:transition-none",
                    saved ? "fill-current" : "fill-transparent",
                  )}
                  strokeWidth={1.8}
                />
              </button>

              <button
                type="button"
                onClick={copyPrompt}
                aria-label="Copy prompt"
                className="inline-flex h-7 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-2.5 text-pl-caption tabular-nums text-white/60 transition-colors hover:bg-white/[0.12] hover:text-white/85"
              >
                {copied ? (
                  <Check className="size-3.5" strokeWidth={2} />
                ) : (
                  <Copy className="size-3.5" strokeWidth={1.8} />
                )}
                {copied ? "Copied" : `${prompt.words} words`}
              </button>
            </div>

            <button
              type="button"
              aria-label="Share prompt"
              onClick={share}
              className={iconButton}
            >
              {shared ? (
                <Check className="size-4" strokeWidth={2} />
              ) : (
                <Share2 className="size-4" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
