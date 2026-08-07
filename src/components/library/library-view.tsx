"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

import { FilterBar, type SortKey } from "@/components/library/filter-bar";
import { PromptCard } from "@/components/library/prompt-card";
import type { Facets, PromptCardData } from "@/lib/types";

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
  scope,
}: {
  prompts: PromptCardData[];
  facets: Facets;
  activeType?: string;
  /** Label of the facet this page is narrowed to, shown as a removable chip. */
  scope?: string;
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
      <FilterBar
        facets={facets}
        activeType={activeType}
        sort={sort}
        onSortChange={(next) => {
          setSort(next);
          setVisible(PAGE_SIZE);
        }}
      />

      {/* Scope chips. Empty on the unfiltered library, which is what sets the gap above the grid. */}
      <div className="-mt-1">
        {scope && (
          <Link
            href="/"
            className="inline-flex h-8 items-center gap-2 rounded-full bg-white pl-3 pr-2 text-[14px] leading-5 text-pl-ink shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:text-pl-ink"
          >
            {scope}
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-pl-capsule text-pl-ink-muted">
              <X className="size-3" strokeWidth={2.2} aria-hidden="true" />
            </span>
          </Link>
        )}
      </div>

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
