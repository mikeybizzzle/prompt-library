"use client";

import { Search } from "lucide-react";

import { useSearch } from "@/components/library/search-provider";

export function Hero({ title, emphasis, subtitle }: { title: string; emphasis: string; subtitle: string }) {
  const { open } = useSearch();

  return (
    <div className="mb-8 flex flex-col items-center gap-6 text-center">
      <div className="flex flex-col gap-2.5">
        <h1 className="m-0 text-center text-[clamp(24px,3vw,32px)] font-light leading-[1.1] tracking-[-0.01em] text-pl-heading">
          {title} <em className="font-semibold italic">{emphasis}</em>
        </h1>
        <p className="m-0 mx-auto max-w-[520px] text-[14px] leading-5 text-[#A8A7A8]">{subtitle}</p>
      </div>

      <div className="flex w-full justify-center">
        <button
          type="button"
          onClick={open}
          aria-label="Search prompts (Command K)"
          aria-keyshortcuts="Meta+K Control+K"
          className="group relative inline-flex h-12 w-full max-w-[480px] items-center justify-between overflow-hidden rounded-full bg-pl-surface px-4 text-pl-body-sm text-pl-ink-soft shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_16px_-8px_rgba(0,0,0,0.08)] transition-[box-shadow,transform] duration-200 [transition-timing-function:var(--pl-ease-standard)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_12px_24px_-10px_rgba(0,0,0,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pl-accent-yellow"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-2 left-1/2 h-6 w-[90%] -translate-x-1/2 rounded-full bg-pl-sheen opacity-60 blur-[6px]"
          />
          <span className="relative flex items-center gap-2">
            <Search className="size-[18px] text-pl-ink-soft" strokeWidth={1.8} aria-hidden="true" />
            <span>Search</span>
          </span>
          <kbd
            aria-hidden="true"
            className="relative inline-flex h-[26px] items-center rounded-[8px] border border-pl-ink-hairline bg-pl-surface px-1.5 font-sans text-[13px] text-pl-ink-soft shadow-[0_1px_1px_rgba(0,0,0,0.04)]"
          >
            ⌘K
          </kbd>
        </button>
      </div>
    </div>
  );
}
