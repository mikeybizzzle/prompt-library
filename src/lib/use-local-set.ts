"use client";

import { useCallback, useSyncExternalStore } from "react";

const EMPTY: string[] = [];

const caches = new Map<string, string[]>();
const listeners = new Map<string, Set<() => void>>();

function subscribe(key: string, onChange: () => void) {
  const set = listeners.get(key) ?? new Set();
  set.add(onChange);
  listeners.set(key, set);
  return () => set.delete(onChange);
}

/** Cached so getSnapshot returns a stable reference between notifications. */
function getSnapshot(key: string): string[] {
  const cached = caches.get(key);
  if (cached) return cached;
  let parsed: string[] = EMPTY;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw) parsed = JSON.parse(raw) as string[];
  } catch {
    parsed = EMPTY;
  }
  caches.set(key, parsed);
  return parsed;
}

/**
 * A set of slugs persisted to localStorage and shared across every component
 * reading the same key, so a like on a card updates the prompt page too.
 */
export function useLocalSet(key: string) {
  const items = useSyncExternalStore(
    (onChange) => subscribe(key, onChange),
    () => getSnapshot(key),
    () => EMPTY,
  );

  const toggle = useCallback(
    (slug: string) => {
      const current = getSnapshot(key);
      const next = current.includes(slug)
        ? current.filter((s) => s !== slug)
        : [...current, slug];
      window.localStorage.setItem(key, JSON.stringify(next));
      caches.set(key, next);
      listeners.get(key)?.forEach((fn) => fn());
    },
    [key],
  );

  return { items, has: (slug: string) => items.includes(slug), toggle };
}
