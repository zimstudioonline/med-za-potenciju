"use client";

import * as React from "react";

import type { Product } from "@/data/catalog";

const STORAGE_KEY = "mzp-cart-v1";

/** Only the slug and quantity are stored — prices always come from the catalog. */
export type CartLine = { slug: string; qty: number };

/** A line joined with its catalog product, ready for display. */
export type ResolvedLine = {
  slug: string;
  qty: number;
  name: string;
  packSize: string;
  price: number;
  currency: string;
  image?: string;
};

/**
 * Provera oblika, bez provere da li proizvod postoji — katalog sada stiže iz
 * CMS-a preko servera, pa se nepostojeći slugovi odbacuju kasnije, kad se linija
 * spaja sa proizvodom.
 */
function parseStored(raw: string | null): CartLine[] {
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.flatMap((entry): CartLine[] => {
      if (typeof entry !== "object" || entry === null) return [];
      const { slug, qty } = entry as Partial<CartLine>;
      if (typeof slug !== "string" || slug.length === 0) return [];
      const safeQty = typeof qty === "number" && Number.isFinite(qty) ? Math.floor(qty) : 1;
      return [{ slug, qty: Math.min(Math.max(safeQty, 1), 99) }];
    });
  } catch {
    return [];
  }
}

/**
 * localStorage is an external store, so it is read through useSyncExternalStore
 * rather than copied into state inside an effect. The cached snapshot keeps the
 * reference stable between reads, which useSyncExternalStore requires.
 */
const EMPTY: CartLine[] = [];

let snapshot: CartLine[] = EMPTY;
let snapshotRaw: string | null = null;
let snapshotValid = false;

const listeners = new Set<() => void>();

function getSnapshot(): CartLine[] {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!snapshotValid || raw !== snapshotRaw) {
    snapshotRaw = raw;
    snapshot = parseStored(raw);
    snapshotValid = true;
  }
  return snapshot;
}

function getServerSnapshot(): CartLine[] {
  return EMPTY;
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);

  // Keeps a second tab in sync when it writes to the same key.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== STORAGE_KEY) return;
    snapshotValid = false;
    listeners.forEach((listener) => listener());
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function write(next: CartLine[]): void {
  snapshotRaw = JSON.stringify(next);
  snapshot = next;
  snapshotValid = true;
  window.localStorage.setItem(STORAGE_KEY, snapshotRaw);
  listeners.forEach((listener) => listener());
}

/** False during hydration, true afterwards — without touching state in an effect. */
const noopSubscribe = () => () => {};
const alwaysTrue = () => true;
const alwaysFalse = () => false;

type CartContextValue = {
  lines: ResolvedLine[];
  count: number;
  subtotal: number;
  /** False until the stored cart has been read, so the UI can avoid a hydration flash. */
  ready: boolean;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = React.createContext<CartContextValue | null>(null);

/**
 * `products` stiže iz korenskog layouta, koji ih čita iz CMS-a na serveru.
 * Klijent nema pristup fajlovima sa sadržajem, pa katalog mora da se prosledi.
 */
export function CartProvider({
  children,
  products,
}: {
  children: React.ReactNode;
  products: Product[];
}) {
  const stored = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ready = React.useSyncExternalStore(noopSubscribe, alwaysTrue, alwaysFalse);

  const bySlug = React.useMemo(
    () => new Map(products.map((product) => [product.slug, product])),
    [products]
  );

  const add = React.useCallback(
    (slug: string, qty = 1) => {
      if (!bySlug.has(slug)) return;
      const current = getSnapshot();
      const existing = current.find((line) => line.slug === slug);
      write(
        existing
          ? current.map((line) =>
              line.slug === slug ? { ...line, qty: Math.min(line.qty + qty, 99) } : line
            )
          : [...current, { slug, qty: Math.min(Math.max(qty, 1), 99) }]
      );
    },
    [bySlug]
  );

  const setQty = React.useCallback((slug: string, qty: number) => {
    write(
      getSnapshot().map((line) =>
        line.slug === slug ? { ...line, qty: Math.min(Math.max(qty, 1), 99) } : line
      )
    );
  }, []);

  const remove = React.useCallback((slug: string) => {
    write(getSnapshot().filter((line) => line.slug !== slug));
  }, []);

  const clear = React.useCallback(() => write([]), []);

  const value = React.useMemo<CartContextValue>(() => {
    // Linije čiji proizvod više ne postoji tiho ispadaju — preimenovano
    // pakovanje ne sme da vaskrsne kao stavka bez cene u nečijoj korpi.
    const resolved = stored.flatMap((line): ResolvedLine[] => {
      const product = bySlug.get(line.slug);
      if (!product) return [];
      return [
        {
          slug: line.slug,
          qty: line.qty,
          name: product.name,
          packSize: product.packSize,
          price: product.price,
          currency: product.currency,
          image: product.image,
        },
      ];
    });

    return {
      lines: resolved,
      count: resolved.reduce((sum, line) => sum + line.qty, 0),
      subtotal: resolved.reduce((sum, line) => sum + line.price * line.qty, 0),
      ready,
      add,
      setQty,
      remove,
      clear,
    };
  }, [stored, bySlug, ready, add, setQty, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
}
