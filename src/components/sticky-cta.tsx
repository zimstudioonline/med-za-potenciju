"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CartIcon, PhoneIcon } from "@/components/icons";
import { PHONE_HREF } from "@/lib/contact";
import { useCart } from "@/lib/cart-context";
import { formatMoney } from "@/lib/money";

/**
 * Na korpi i checkoutu se ne prikazuje — tamo je jedini cilj završiti porudžbinu,
 * a traka bi duplirala isto dugme.
 */
const HIDDEN_ON = ["/cart", "/checkout"];

/**
 * Mobilna traka na dnu ekrana: poručivanje kao glavna akcija, telefon kao izlaz
 * za nedoumice. Na desktopu je ne prikazujemo — tamo je sticky header sa korpom
 * uvek vidljiv, a `tel:` link na računaru najčešće ne radi ništa.
 */
export function StickyCta() {
  const pathname = usePathname();
  const { count, subtotal, ready } = useCart();

  if (HIDDEN_ON.some((path) => pathname.startsWith(path))) return null;

  const hasItems = ready && count > 0;

  return (
    <>
      {/* Rezerviše prostor da traka ne prekrije kraj footera. */}
      <div aria-hidden className="h-20 md:hidden" />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <div className="flex items-center gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <Link
            href={hasItems ? "/checkout" : "/shop"}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            <CartIcon />
            {hasItems ? (
              <>
                <span>Završi porudžbinu</span>
                <span className="tabular-nums opacity-90">{formatMoney(subtotal)}</span>
              </>
            ) : (
              "Poruči odmah"
            )}
          </Link>

          <a
            href={PHONE_HREF}
            aria-label="Pozovi i poruči telefonom"
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition duration-200 hover:border-primary hover:text-primary active:scale-[0.98]"
          >
            <PhoneIcon />
          </a>
        </div>
      </div>
    </>
  );
}
