"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, LayoutGrid } from "lucide-react";

import { CategoryIcon } from "@/components/library/icon";
import { CATEGORIES } from "@/data/taxonomy";
import { cn } from "@/lib/utils";

const VISIBLE = 7;

const tileWrap = "group flex w-24 shrink-0 flex-col items-center gap-3 no-underline max-[640px]:w-[76px]";
const tile =
  "relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-[12px] bg-white text-pl-ink-muted shadow-[0_8px_12px_-4px_rgba(0,0,0,0.04),0_1px_4px_rgba(0,0,0,0.08)] transition-colors duration-200 group-hover:text-pl-ink";
const label = "flex items-center gap-0.5 whitespace-nowrap text-[13px] leading-4 text-[#4F4E4F]";

function Sheen() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-1.5 left-1/2 h-5 w-[85%] -translate-x-1/2 rounded-full bg-white opacity-60 blur-[5px]"
    />
  );
}

export function CategoryRail({ activeSlug }: { activeSlug?: string }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? CATEGORIES : CATEGORIES.slice(0, VISIBLE);
  const hidden = CATEGORIES.length - VISIBLE;

  return (
    <div className="mb-9 max-[640px]:mb-6">
      <nav
        aria-label="Browse categories"
        className="flex flex-wrap items-start justify-center gap-2 pb-1 max-[900px]:justify-start max-[900px]:overflow-x-auto max-[900px]:flex-nowrap max-[900px]:no-scrollbar"
      >
        {shown.map((c) => (
          <Link key={c.slug} href={`/category/${c.slug}`} className={tileWrap}>
            <span className={cn(tile, activeSlug === c.slug && "text-pl-ink ring-1 ring-pl-ink-hairline")}>
              <Sheen />
              <CategoryIcon name={c.icon} className="relative" />
            </span>
            <span className={label}>{c.name}</span>
          </Link>
        ))}

        {hidden > 0 && (
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className={cn(tileWrap, "cursor-pointer border-0 bg-transparent p-0")}
          >
            <span className={tile}>
              <Sheen />
              <LayoutGrid width={23} height={23} strokeWidth={1.8} className="relative" aria-hidden="true" />
            </span>
            <span className={label}>
              {expanded ? "Less" : `More (${hidden})`}
              <ChevronDown
                aria-hidden="true"
                className={cn("size-3.5 transition-transform duration-200", expanded && "rotate-180")}
                strokeWidth={2}
              />
            </span>
          </button>
        )}
      </nav>
    </div>
  );
}
