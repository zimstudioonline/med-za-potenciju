"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { CartIcon } from "@/components/icons";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Kontakt" },
];

export type HeaderProps = {
  /** Overrides the right-hand button — the cart page points onward to checkout. */
  cta?: { href: string; label: string };
};

export function Header({ cta = { href: "/cart", label: "Naruči" } }: HeaderProps) {
  const pathname = usePathname();
  const { count, ready } = useCart();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/med-za-potenciju-com-logo.webp"
            alt="Med za potenciju"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/*
         * Na mobilnom se ovaj red prelamao u četiri reda i zauzimao pola ekrana,
         * pa je ispod `md` zamenjen dugmetom koje otvara meni.
         */}
        <nav className="hidden gap-5 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-foreground",
                isActive(link.href) && "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={cta.href}
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition duration-200 hover:opacity-90 sm:text-sm"
          >
            <CartIcon />
            {cta.label}
            {/* Rendered only after the stored cart is read, to avoid a hydration mismatch. */}
            {ready && count > 0 && (
              <span className="rounded-full bg-primary-foreground/20 px-1.5 py-0.5 text-[10px] font-bold tabular-nums">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobilni-meni"
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition duration-200 hover:border-primary hover:text-primary md:hidden"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-5"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobilni-meni"
          className="border-t border-border bg-background px-6 pb-4 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "block border-b border-border py-3 text-base font-medium last:border-b-0",
                isActive(link.href) ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
