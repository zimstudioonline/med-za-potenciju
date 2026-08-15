"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export function Header({ cta = { href: "/cart", label: "Korpa" } }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <img
          src="/med-za-potenciju-com-logo.webp"
          alt="Med za potenciju"
          className="h-10 w-auto md:h-12"
        />
      </Link>

      <nav className="flex flex-wrap justify-center gap-3 text-xs font-medium text-muted-foreground sm:gap-5 sm:text-sm">
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

      <Link
        href={cta.href}
        className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 sm:text-sm"
      >
        {cta.label}
      </Link>
    </header>
  );
}
