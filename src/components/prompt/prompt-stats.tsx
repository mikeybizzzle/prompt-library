"use client";

import { useState } from "react";
import { Bookmark, Check, Heart, Share2, Timer } from "lucide-react";

import { useLocalSet } from "@/lib/use-local-set";
import { cn } from "@/lib/utils";

const chip =
  "inline-flex h-8 items-center gap-1 rounded-full border pl-2 pr-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[background-color,border-color,color,transform] duration-150 ease-out active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow";

export function PromptStats({ slug, words }: { slug: string; words: number }) {
  const likes = useLocalSet("pl:likes");
  const saves = useLocalSet("pl:saves");
  const [shared, setShared] = useState(false);

  const liked = likes.has(slug);
  const saved = saves.has(slug);

  async function share() {
    await navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 1800);
  }

  return (
    <div className="flex flex-shrink-0 flex-wrap items-center gap-2 max-[760px]:pt-1">
      <button
        type="button"
        aria-pressed={liked}
        title="Like"
        onClick={() => likes.toggle(slug)}
        className={cn(
          chip,
          liked
            ? "border-pl-accent-yellow bg-pl-accent-yellow/20 text-pl-ink"
            : "border-[rgba(175,175,175,0.24)] bg-white text-pl-ink-muted",
        )}
      >
        <span className={cn("inline-flex", liked ? "text-pl-ink" : "text-pl-dark")} aria-hidden="true">
          <Heart className={cn("size-4", liked && "fill-current")} strokeWidth={1.8} />
        </span>
        <span className="font-sans text-[14px] leading-5 tabular-nums">{liked ? 1 : 0}</span>
        <span className="sr-only">Like</span>
      </button>

      <button
        type="button"
        aria-pressed={saved}
        title="Save"
        onClick={() => saves.toggle(slug)}
        className={cn(
          chip,
          saved
            ? "border-pl-accent-yellow bg-pl-accent-yellow/20 text-pl-ink"
            : "border-[rgba(175,175,175,0.24)] bg-white text-pl-ink-muted",
        )}
      >
        <span className={cn("inline-flex", saved ? "text-pl-ink" : "text-pl-dark")} aria-hidden="true">
          <Bookmark className={cn("size-4", saved && "fill-current")} strokeWidth={1.8} />
        </span>
        <span className="font-sans text-[14px] leading-5 tabular-nums">{saved ? 1 : 0}</span>
        <span className="sr-only">Save</span>
      </button>

      <span
        title={`${words} words`}
        className="inline-flex h-8 items-center gap-1 rounded-full border border-[rgba(175,175,175,0.24)] bg-white pl-2 pr-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      >
        <span className="inline-flex text-pl-dark" aria-hidden="true">
          <Timer className="size-4" strokeWidth={1.8} />
        </span>
        <span className="font-sans text-[14px] leading-5 tabular-nums text-pl-ink-muted">{words}</span>
        <span className="sr-only">words</span>
      </span>

      <button
        type="button"
        title="Copy link"
        aria-label="Copy link to this prompt"
        onClick={share}
        className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(175,175,175,0.24)] bg-white text-pl-dark shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors duration-150 hover:bg-pl-surface-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow"
      >
        {shared ? <Check className="size-4" strokeWidth={2} /> : <Share2 className="size-4" strokeWidth={1.8} />}
      </button>
    </div>
  );
}
