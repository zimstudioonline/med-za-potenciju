"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { CartIcon } from "@/components/icons";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

export type AddToCartProps = {
  slug: string;
  label?: string;
  /** Go straight to the cart after adding — used by the "order now" buttons. */
  goToCart?: boolean;
  /** The confirmation state carries its own ✓, so the cart icon steps aside. */
  icon?: boolean;
  className?: string;
};

export function AddToCart({
  slug,
  label = "Dodaj u korpu",
  goToCart = false,
  icon = true,
  className,
}: AddToCartProps) {
  const { add } = useCart();
  const router = useRouter();
  const [added, setAdded] = React.useState(false);

  // Clears the confirmation without leaving a timer behind on unmount.
  React.useEffect(() => {
    if (!added) return;
    const timer = window.setTimeout(() => setAdded(false), 2000);
    return () => window.clearTimeout(timer);
  }, [added]);

  return (
    <button
      type="button"
      onClick={() => {
        add(slug);
        if (goToCart) {
          router.push("/cart");
          return;
        }
        setAdded(true);
      }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground",
        // Only transform and colour move, so nothing around the button reflows.
        "transition duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0",
        className
      )}
    >
      {icon && !added && <CartIcon />}
      {added ? "Dodato ✓" : label}
    </button>
  );
}
