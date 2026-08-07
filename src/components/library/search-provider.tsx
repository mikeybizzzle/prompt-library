"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { SearchPalette, type SearchDoc } from "@/components/library/search-palette";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };

const SearchContext = createContext<Ctx | null>(null);

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used inside <SearchProvider>");
  return ctx;
}

export function SearchProvider({
  docs,
  children,
}: {
  docs: SearchDoc[];
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <SearchContext.Provider value={value}>
      {children}
      <SearchPalette docs={docs} isOpen={isOpen} onClose={close} onOpen={open} />
    </SearchContext.Provider>
  );
}
