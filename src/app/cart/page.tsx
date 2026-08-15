import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Cart01 } from "@/components/sections/cart-01";
import { featuredProducts } from "@/data/catalog";
import { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "@/lib/shipping";

export const metadata: Metadata = {
  title: "Korpa",
  description: "Pregled artikala u vašoj korpi pre nastavka na plaćanje.",
  robots: { index: false },
};

export default function CartPage() {
  // Placeholder line — replaced once the cart keeps real state.
  const product = featuredProducts[0];
  const cartItems = [
    {
      id: product.slug,
      name: product.name,
      variant: product.packSize,
      price: product.price,
      qty: 1,
      image: product.image,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header cta={{ href: "/checkout", label: "Plaćanje" }} />

      <Cart01
        items={cartItems}
        currency={product.currency}
        freeShippingThreshold={FREE_SHIPPING_THRESHOLD}
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
          subtotal: "Zbir",
          shipping: "Dostava",
          free: "Besplatno",
          estimatedTax: "Procenjen porez",
          total: "Ukupno",
          promoLabel: "Promo kod",
          promoPlaceholder: "Unesite kod",
          promoApply: "Primeni",
          checkout: "Nastavi na plaćanje",
          trustLine: "Sigurno i šifrovano plaćanje",
          removeItem: "Ukloni {name} iz korpe",
          decreaseQty: "Smanji količinu — {name}",
          increaseQty: "Povećaj količinu — {name}",
        }}
      />

      <Footer />
    </main>
  );
}
