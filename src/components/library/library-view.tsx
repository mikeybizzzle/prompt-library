"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { FilterBar, type SortKey } from "@/components/library/filter-bar";
import { PromptCard } from "@/components/library/prompt-card";
import type { Facets } from "@/lib/types-facets";
import type { PromptCardData } from "@/lib/types";

const PAGE_SIZE = 24;

/** Tall cards repeat on a 9-card cycle, matching the dense grid rhythm. */
function isTall(index: number) {
  const i = index % 9;
  return i === 0 || i === 1 || i === 5 || i === 6;
}

/** Deterministic shuffle so server and client render the same order. */
function seededShuffle<T>(items: T[], seed = 20260207): T[] {
  const out = [...items];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) % 2147483648;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function LibraryView({
  prompts,
  facets,
  activeType = "all",
}: {
  prompts: PromptCardData[];
  facets: Facets;
  activeType?: string;
}) {
  const [sort, setSort] = useState<SortKey>("shuffled");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinel = useRef<HTMLDivElement>(null);

  const sorted = useMemo(() => {
    switch (sort) {
      case "newest":
        return [...prompts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
      case "a-z":
        return [...prompts].sort((a, b) => a.title.localeCompare(b.title));
      case "shortest":
        return [...prompts].sort((a, b) => a.words - b.words);
      default:
        return seededShuffle(prompts);
    }
  }, [prompts, sort]);

  useEffect(() => setVisible(PAGE_SIZE), [sort, prompts]);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible((v) => Math.min(v + PAGE_SIZE, sorted.length));
      },
      { rootMargin: "600px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [sorted.length]);

  const shown = sorted.slice(0, visible);

  return (
    <div className="flex flex-col gap-5" data-dock-boundary>
      <FilterBar facets={facets} activeType={activeType} sort={sort} onSortChange={setSort} />

      {shown.length === 0 ? (
        <div className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-[20px] border border-pl-ink-hairline bg-white/60 py-14 text-center">
          <p className="m-0 text-pl-body font-medium text-pl-ink">No prompts here yet</p>
          <p className="m-0 text-pl-body-sm text-pl-ink-muted">
            Try another category, or add the first one.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 transition-opacity duration-200 sm:auto-rows-[234px] sm:grid-flow-dense sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <PromptCard key={p.slug} prompt={p} tall={isTall(i)} />
          ))}
        </div>
      )}

      <div className="h-px" />
      <div ref={sentinel} className="flex min-h-10 items-center justify-center">
        {visible < sorted.length && (
          <span className="text-pl-body-sm text-pl-ink-soft">Loading more prompts…</span>
        )}
      </div>
    </div>
  );
}
