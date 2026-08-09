"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

export const THEME_KEY = "pl-theme";

export function ThemeToggle({ className }: { className?: string }) {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    // Only follow the OS while the visitor has not picked a theme themselves.
    const sync = () => {
      if (localStorage.getItem(THEME_KEY)) return;
      document.documentElement.dataset.theme = mq.matches ? "dark" : "light";
    };

    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full text-[#f7f7f7] transition-colors duration-150 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pl-gold focus-visible:ring-offset-2 focus-visible:ring-offset-pl-dark",
        className,
      )}
    >
      <Sun className="size-[18px] dark:hidden" strokeWidth={1.9} aria-hidden="true" />
      <Moon className="hidden size-[18px] dark:block" strokeWidth={1.9} aria-hidden="true" />
    </button>
  );
}
