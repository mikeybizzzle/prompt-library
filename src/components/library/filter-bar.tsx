"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Check,
  ChevronDown,
  Code2,
  FileText,
  LayoutGrid,
  ALargeSmall,
  ImageIcon,
  Sparkles,
  Users,
  UserRound,
} from "lucide-react";

import { CategoryIcon } from "@/components/library/icon";
import { ModelIcon } from "@/components/library/model-icon";
import { CATEGORIES, MODELS, ROLES } from "@/data/taxonomy";
import type { Facets } from "@/lib/types";
import { cn } from "@/lib/utils";

export type SortKey = "shuffled" | "newest" | "a-z" | "shortest";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "shuffled", label: "Shuffled" },
  { key: "newest", label: "Newest" },
  { key: "a-z", label: "A to Z" },
  { key: "shortest", label: "Shortest first" },
];

const TYPES = [
  { slug: "all", label: "All", href: "/", Icon: FileText },
  { slug: "text", label: "Text", href: "/type/text", Icon: ALargeSmall },
  { slug: "image", label: "Image", href: "/type/image", Icon: ImageIcon },
  { slug: "code", label: "Code", href: "/type/code", Icon: Code2 },
] as const;

const trigger =
  "inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-white pl-4 pr-2 text-[14px] leading-5 text-pl-ink transition-colors hover:text-pl-ink";
const triggerChevron =
  "inline-flex h-6 w-6 items-center justify-center rounded-[8px] border border-pl-ink-hairline bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]";
const panel =
  "max-h-[70vh] overflow-y-auto rounded-3xl bg-[rgba(20,20,20,0.8)] p-2 backdrop-blur-[24px] shadow-[0_-12px_30px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.06),0_12px_13px_rgba(0,0,0,0.17),0_-3px_5px_rgba(0,0,0,0.09),inset_0_1px_1px_rgba(255,255,255,0.04),inset_0_1px_2px_rgba(255,255,255,0.08)] [scrollbar-width:thin]";
const row =
  "flex h-9 items-center justify-between gap-3 rounded-full px-3 text-[14px] no-underline transition-colors text-[#F7F7F7] hover:bg-white/[0.08]";

function Count({ n }: { n?: number }) {
  return <span className="shrink-0 tabular-nums text-white/50">{n ?? 0}</span>;
}

function Divider() {
  return <span aria-hidden="true" className="mx-1 my-0.5 h-px bg-white/[0.06]" />;
}

export function FilterBar({
  facets,
  activeType,
  sort,
  onSortChange,
}: {
  facets: Facets;
  activeType: string;
  sort: SortKey;
  onSortChange: (s: SortKey) => void;
}) {
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [openSort, setOpenSort] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (wrap.current && !wrap.current.contains(e.target as Node)) {
        setOpenPanel(null);
        setOpenSort(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenPanel(null);
        setOpenSort(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const sortLabel = SORTS.find((s) => s.key === sort)?.label ?? "Shuffled";

  return (
    <div
      ref={wrap}
      className="flex flex-wrap items-center justify-between gap-3 scroll-mt-24"
    >
      <div className="relative inline-flex max-w-full">
        <div className="no-scrollbar flex items-center gap-0.5 overflow-x-auto rounded-full bg-pl-capsule p-0.5">
          {(
            [
              { id: "category", label: "Category", Icon: LayoutGrid },
              { id: "models", label: "Models", Icon: Sparkles },
              { id: "roles", label: "Roles", Icon: Users },
            ] as const
          ).map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              aria-expanded={openPanel === id}
              aria-controls={`lib-panel-${id}`}
              onClick={() => setOpenPanel((v) => (v === id ? null : id))}
              className={trigger}
            >
              <Icon className="size-4 text-pl-ink-muted" strokeWidth={1.8} aria-hidden="true" />
              {label}
              <span className={triggerChevron}>
                <ChevronDown
                  className={cn(
                    "size-3.5 text-[#4F4E4F] transition-transform duration-200",
                    openPanel === id && "rotate-180",
                  )}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </span>
            </button>
          ))}
        </div>

        <div
          id="lib-panel-category"
          hidden={openPanel !== "category"}
          style={{ left: 0 }}
          className="absolute top-[calc(100%+8px)] z-30 w-[280px] max-w-[calc(100vw-32px)] max-[640px]:!left-0"
        >
          <nav className={panel}>
            <ul className="m-0 flex list-none flex-col p-0">
              {(showAllCategories ? CATEGORIES : CATEGORIES.slice(0, 6)).map((c, i) => (
                <li key={c.slug} className="flex flex-col">
                  {i > 0 && <Divider />}
                  <span className="flex items-center gap-1">
                    <Link href={`/category/${c.slug}`} className={cn(row, "min-w-0 flex-1")}>
                      <span className="flex min-w-0 items-center gap-2.5 text-[15px]">
                        <CategoryIcon name={c.icon} size={16} className="shrink-0" />
                        <span className="truncate">{c.name}</span>
                      </span>
                      <Count n={facets.categories[c.slug]} />
                    </Link>
                    <button
                      type="button"
                      aria-label={`Expand ${c.name} subcategories`}
                      aria-expanded={expandedCategory === c.slug}
                      onClick={() => setExpandedCategory((v) => (v === c.slug ? null : c.slug))}
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#8F8E8F] transition-colors hover:bg-white/[0.08] hover:text-white"
                    >
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          expandedCategory === c.slug && "rotate-180",
                        )}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </button>
                  </span>
                  <ul
                    hidden={expandedCategory !== c.slug}
                    className="m-0 flex list-none flex-col gap-0.5 py-1 pl-2 pr-0"
                  >
                    {c.children.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/category/${s.slug}`}
                          className={cn(row, "text-white/75 hover:text-white")}
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <span className="truncate">{s.name}</span>
                          </span>
                          <Count n={facets.subcategories[s.slug]} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="flex flex-col">
                <Divider />
                <button
                  type="button"
                  aria-expanded={showAllCategories}
                  onClick={() => setShowAllCategories((v) => !v)}
                  className={cn(row, "justify-center gap-1 text-white/80 hover:text-white")}
                >
                  {showAllCategories ? "Less" : "More"}
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      showAllCategories && "rotate-180",
                    )}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div
          id="lib-panel-models"
          hidden={openPanel !== "models"}
          className="absolute top-[calc(100%+8px)] z-30 w-[280px] max-w-[calc(100vw-32px)] max-[640px]:!left-0"
          style={{ left: 0 }}
        >
          <nav className={panel}>
            <ul className="m-0 flex list-none flex-col p-0">
              {MODELS.filter((m) => facets.models[m.slug]).map((m, i) => (
                <li key={m.slug} className="flex flex-col">
                  {i > 0 && <Divider />}
                  <Link href={`/tool/${m.slug}`} className={row}>
                    <span className="flex min-w-0 items-center gap-2.5">
                      <span className="shrink-0">
                        <ModelIcon slug={m.slug} className="size-4" />
                      </span>
                      <span className="truncate">{m.name}</span>
                    </span>
                    <Count n={facets.models[m.slug]} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          id="lib-panel-roles"
          hidden={openPanel !== "roles"}
          className="absolute top-[calc(100%+8px)] z-30 w-[280px] max-w-[calc(100vw-32px)] max-[640px]:!left-0"
          style={{ left: 0 }}
        >
          <nav className={panel}>
            <ul className="m-0 flex list-none flex-col p-0">
              {ROLES.filter((r) => facets.roles[r.slug]).map((r, i) => (
                <li key={r.slug} className="flex flex-col">
                  {i > 0 && <Divider />}
                  <Link href={`/for/${r.slug}`} className={row}>
                    <span className="flex min-w-0 items-center gap-2.5">
                      <UserRound className="size-4 shrink-0" strokeWidth={1.8} aria-hidden="true" />
                      <span className="truncate">{r.name}</span>
                    </span>
                    <Count n={facets.roles[r.slug]} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={openSort}
            onClick={() => setOpenSort((v) => !v)}
            className="inline-flex h-8 items-center gap-1 rounded-full bg-white px-3 text-[14px] leading-5 text-[#4F4E4F] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:text-pl-ink"
          >
            Sort by: <span className="text-pl-ink">{sortLabel}</span>
            <ChevronDown
              className={cn("size-3.5 transition-transform duration-200", openSort && "rotate-180")}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>
          {openSort && (
            <div className="absolute right-0 top-[calc(100%+8px)] z-30 w-[180px]">
              <ul role="listbox" className={cn(panel, "m-0 flex list-none flex-col p-2")}>
                {SORTS.map((s) => (
                  <li key={s.key}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={s.key === sort}
                      onClick={() => {
                        onSortChange(s.key);
                        setOpenSort(false);
                      }}
                      className={cn(row, "w-full")}
                    >
                      <span>{s.label}</span>
                      {s.key === sort && <Check className="size-4 text-pl-accent-yellow" strokeWidth={2} />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div
          className="inline-flex items-center rounded-full bg-pl-capsule p-0.5"
          role="group"
          aria-label="Output format"
        >
          {TYPES.map(({ slug, label, href, Icon }) => {
            const active = activeType === slug;
            return (
              <Link
                key={slug}
                href={href}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "group/fmt inline-flex h-7 items-center rounded-full px-2.5 text-[14px] leading-5 no-underline transition-[background-color,color,box-shadow] duration-200",
                  active
                    ? "bg-white text-pl-ink shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                    : "text-pl-ink-muted hover:text-pl-ink",
                )}
              >
                <Icon className="size-[14px]" strokeWidth={1.9} aria-hidden="true" />
                <span
                  className={cn(
                    "overflow-hidden whitespace-nowrap transition-[max-width,opacity,margin-left] duration-200 ease-out",
                    active
                      ? "ml-1 max-w-[72px] opacity-100"
                      : "ml-0 max-w-0 opacity-0 group-hover/fmt:ml-1 group-hover/fmt:max-w-[72px] group-hover/fmt:opacity-100",
                  )}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
