"use client";

import { useCallback, useEffect, useState } from "react";

const listeners = new Map<string, Set<(v: string[]) => void>>();

function read(key: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/**
 * A set of slugs persisted to localStorage and shared across every component
 * that reads the same key, so a like on a card updates the detail page too.
 */
export function useLocalSet(key: string) {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(read(key));
    const set = listeners.get(key) ?? new Set();
    set.add(setItems);
    listeners.set(key, set);
    return () => {
      set.delete(setItems);
    };
  }, [key]);

  const toggle = useCallback(
    (slug: string) => {
      const next = read(key);
      const i = next.indexOf(slug);
      if (i === -1) next.push(slug);
      else next.splice(i, 1);
      window.localStorage.setItem(key, JSON.stringify(next));
      listeners.get(key)?.forEach((fn) => fn(next));
    },
    [key],
  );

  return { items, has: (slug: string) => items.includes(slug), toggle };
}
