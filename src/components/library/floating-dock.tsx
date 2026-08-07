"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, Shuffle } from "lucide-react";

import { useSearch } from "@/components/library/search-provider";
import { cn } from "@/lib/utils";

const pill =
  "group pointer-events-auto flex h-12 items-center overflow-hidden rounded-full border border-white/[0.08] bg-pl-card no-underline shadow-[inset_0_1px_0_rgba(255,255,255,0.09),inset_0_0.6px_2px_rgba(255,255,255,0.12),0_14px_30px_-12px_rgba(0,0,0,0.65)] backdrop-blur-[12px] transition-transform duration-150 ease-out hover:-translate-y-px focus-within:-translate-y-px active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pl-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const labelBase =
  "max-w-0 overflow-hidden whitespace-nowrap pr-0 text-[15px] leading-5 opacity-0 transition-[max-width,opacity,padding] duration-200 ease-out group-hover:max-w-[200px] group-hover:opacity-100 group-focus-visible:max-w-[200px] group-focus-visible:opacity-100 motion-reduce:transition-none";

export function FloatingDock({ slugs }: { slugs: string[] }) {
  const { open } = useSearch();
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const boundary = document.querySelector("[data-dock-boundary]");
    if (!boundary) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.boundingClientRect.top < 0 && !entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(boundary);
    return () => io.disconnect();
  }, []);

  function surprise() {
    if (!slugs.length) return;
    router.push(`/p/${slugs[Math.floor(Math.random() * slugs.length)]}`);
  }

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-6 z-40 flex items-center justify-between px-6 transition-opacity duration-200",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <button
        type="button"
        aria-label="Open a random prompt"
        onClick={surprise}
        tabIndex={visible ? 0 : -1}
        className={pill}
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center text-white">
          <Shuffle className="size-5" strokeWidth={1.9} aria-hidden="true" />
        </span>
        <span className={cn(labelBase, "font-medium text-white group-hover:pr-5 group-focus-visible:pr-5")}>
          Surprise me
        </span>
      </button>

      <button
        type="button"
        aria-label="Search prompts (Command K)"
        aria-keyshortcuts="Meta+K Control+K"
        onClick={open}
        tabIndex={visible ? 0 : -1}
        className={pill}
      >
        <span className={cn(labelBase, "order-1 text-white/45 group-hover:pl-5 group-focus-visible:pl-5")}>
          Search prompts…
        </span>
        <span className="order-2 grid h-12 w-12 shrink-0 place-items-center text-white">
          <Search className="size-5" strokeWidth={1.9} aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}
