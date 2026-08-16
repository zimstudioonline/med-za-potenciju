"use client";

import { Cart01 } from "@/components/sections/cart-01";
import { useCart } from "@/lib/cart-context";
import { DEFAULT_CURRENCY } from "@/lib/money";
import { SHIPPING_FEE } from "@/lib/shipping";

export function CartClient() {
  const { lines, setQty, remove, ready } = useCart();

  // Renders nothing on the server pass, so the stored cart cannot mismatch.
  if (!ready) {
    return <div className="mx-auto max-w-6xl px-6 py-24" aria-busy="true" />;
  }

  return (
    <Cart01
      items={lines.map((line) => ({
        id: line.slug,
        name: line.name,
        variant: line.packSize,
        price: line.price,
        qty: line.qty,
        image: line.image,
      }))}
      onQtyChange={setQty}
      onRemove={remove}
      currency={DEFAULT_CURRENCY}
      shippingFee={SHIPPING_FEE}
      taxRate={0}
      checkoutHref="/checkout"
      continueHref="/shop"
      as="h1"
      labels={{
        heading: "Moja korpa",
        itemSingular: "proizvod",
        itemPlural: "proizvoda",
        continueShopping: "Nastavi kupovinu",
        emptyMessage: "Vaša korpa je prazna.",
        startShopping: "Počni kupovinu",
        each: "kom",
        orderSummary: "Pregled narudžbine",
        subtotal: "Međuzbir",
        shipping: "Dostava",
        free: "Besplatno",
        estimatedTax: "Procenjen porez",
        total: "Ukupno",
        promoLabel: "Promo kod",
        promoPlaceholder: "Unesite kod",
        promoApply: "Primeni",
        checkout: "Nastavi na plaćanje",
        trustLine: "Plaćanje pouzećem — ne plaćate ništa unapred",
        removeItem: "Ukloni {name} iz korpe",
        decreaseQty: "Smanji količinu — {name}",
        increaseQty: "Povećaj količinu — {name}",
      }}
    />
  );
}
