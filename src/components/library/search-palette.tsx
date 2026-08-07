"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { CornerDownLeft, Search, Sparkles } from "lucide-react";

import { LogoMark } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

export type SearchDoc = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  emoji: string;
};

const PLACEHOLDERS = [
  "What are you working on?",
  "Try “cold email sequence”",
  "Try “landing page copy”",
  "Try “refactor this code”",
  "Try “cinematic product shot”",
];

const kbd =
  "inline-flex h-6 min-w-6 items-center justify-center rounded-md border border-white/[0.12] bg-white/5 px-1.5 font-mono text-pl-caption text-pl-menu-item-2";

function score(doc: SearchDoc, q: string) {
  const title = doc.title.toLowerCase();
  if (title === q) return 100;
  if (title.startsWith(q)) return 80;
  if (title.includes(q)) return 60;
  if (doc.keywords.includes(q)) return 40;
  if (doc.description.toLowerCase().includes(q)) return 20;
  return 0;
}

/** Types the placeholder out one character at a time, then swaps phrases. */
function useTypewriter(active: boolean) {
  const [text, setText] = useState("");
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    if (!active) return;
    const target = PLACEHOLDERS[phrase % PLACEHOLDERS.length];
    if (text === target) {
      const hold = setTimeout(() => {
        setText("");
        setPhrase((p) => p + 1);
      }, 2200);
      return () => clearTimeout(hold);
    }
    const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 45);
    return () => clearTimeout(t);
  }, [text, phrase, active]);

  return text;
}

export function SearchPalette({
  docs,
  isOpen,
  onClose,
  onOpen,
}: {
  docs: SearchDoc[];
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onOpen();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onOpen, onClose]);

  // Mounting only while open keeps the query and cursor reset for free.
  return isOpen ? <SearchDialog docs={docs} onClose={onClose} /> : null;
}

function SearchDialog({ docs, onClose }: { docs: SearchDoc[]; onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const placeholder = useTypewriter(query === "");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return docs
      .map((d) => ({ d, s: score(d, q) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s || a.d.title.localeCompare(b.d.title))
      .slice(0, 12)
      .map((r) => r.d);
  }, [docs, query]);

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 20);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    listRef.current?.querySelector(`[data-row="${cursor}"]`)?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") return onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    }
    if (e.key === "Enter" && results[cursor]) {
      e.preventDefault();
      onClose();
      router.push(`/p/${results[cursor].slug}`);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search prompts"
      onKeyDown={onKeyDown}
    >
      <button
        type="button"
        aria-label="Close search"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/45 opacity-100 backdrop-blur-[6px] transition-opacity duration-200 ease-out"
      />

      <div
        style={{ transformOrigin: "center top" }}
        className="relative z-[1] flex w-full max-w-[600px] scale-100 flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#161514] opacity-100 shadow-[0_28px_80px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-[opacity,transform,scale] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:!scale-100"
      >
        <div className="flex items-center gap-3 px-5 py-[18px]">
          <Search className="size-[18px] shrink-0 text-pl-menu-icon" strokeWidth={1.8} aria-hidden="true" />
          <div className="relative flex-1">
            <input
              ref={inputRef}
              aria-label="Search prompts"
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-listbox"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setCursor(0);
              }}
              className={cn(
                "w-full bg-transparent text-[16px] leading-6 tracking-[-0.01em] text-pl-menu-item focus:outline-none",
                query === "" && "caret-transparent",
              )}
            />
            {query === "" && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-[16px] leading-6 tracking-[-0.01em] text-pl-menu-icon"
              >
                {placeholder}
                <span className="ml-px inline-block h-[18px] w-px translate-y-px bg-pl-accent-yellow/80 motion-safe:animate-pulse" />
              </span>
            )}
          </div>
          <kbd className={kbd}>Esc</kbd>
        </div>

        <div aria-hidden="true" className="mx-4 h-px bg-white/[0.07]" />

        <div
          id="palette-listbox"
          ref={listRef}
          role="listbox"
          aria-label="Search results"
          className="max-h-[54vh] overflow-y-auto p-2 [scrollbar-color:rgba(255,255,255,0.14)_transparent] [scrollbar-width:thin]"
        >
          {query.trim() === "" ? (
            <p className="px-3 py-6 text-center text-pl-body-sm text-pl-menu-item-2">
              Start typing to search the library
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-6 text-center text-pl-body-sm text-pl-menu-item-2">
              No prompts match “{query}”
            </p>
          ) : (
            <div className="mb-1 flex flex-col">
              <div className="flex items-center justify-between px-3 pb-1 pt-2">
                <span className="inline-flex items-center gap-1.5 text-pl-caption font-medium uppercase tracking-[0.08em] text-pl-menu-icon">
                  Results
                </span>
                <span className="text-pl-caption text-pl-menu-icon">
                  {results.length} item{results.length === 1 ? "" : "s"}
                </span>
              </div>
              {results.map((r, i) => (
                <div key={r.slug} id={`palette-row-${i}`} data-row={i}>
                  <a
                    role="option"
                    aria-selected={i === cursor}
                    href={`/p/${r.slug}`}
                    onMouseEnter={() => setCursor(i)}
                    onClick={onClose}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left no-underline transition-colors duration-100 ease-out",
                      i === cursor
                        ? "bg-white/[0.06] shadow-[inset_0_0.6px_2px_rgba(255,255,255,0.16)]"
                        : "hover:bg-white/[0.06] hover:shadow-[inset_0_0.6px_2px_rgba(255,255,255,0.16)]",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-5 w-5 shrink-0 items-center justify-center",
                        i === cursor ? "text-pl-menu-hover" : "text-pl-menu-icon group-hover:text-pl-menu-hover",
                      )}
                    >
                      <Sparkles className="size-4" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 items-baseline gap-2">
                      <span
                        className={cn(
                          "truncate text-pl-body",
                          i === cursor ? "text-pl-menu-hover" : "text-pl-menu-item group-hover:text-pl-menu-hover",
                        )}
                      >
                        {r.title}
                      </span>
                    </span>
                    {i === cursor && (
                      <span className="shrink-0">
                        <kbd className={kbd}>
                          <CornerDownLeft className="size-3" strokeWidth={2} aria-hidden="true" />
                        </kbd>
                      </span>
                    )}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mx-4 h-px bg-white/[0.07]" aria-hidden="true" />

        <div className="flex items-center justify-between px-5 py-3">
          <LogoMark className="size-6 opacity-80" />
          <div className="flex items-center gap-4 text-pl-caption text-pl-menu-item-2">
            <span className="inline-flex items-center gap-1.5">
              <kbd className={kbd}>↑</kbd>
              <kbd className={kbd}>↓</kbd>
              navigate
            </span>
            <span className="inline-flex items-center gap-1.5">
              <kbd className={kbd}>
                <CornerDownLeft className="size-3" strokeWidth={2} aria-hidden="true" />
              </kbd>
              open
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
