import Link from "next/link";
import { Cart01 } from "@/components/sections/cart-01";
import { Footer } from "@/components/footer";

export default function CartPage() {
  // Mock cart items
  const cartItems = [
    {
      id: "q4you-fortissimo",
      name: "Q4You Fortissimo",
      variant: "Energija i vitalnost",
      price: 1960,
      qty: 1,
      image: "/med-za-potenciju-fortissimo.webp",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/med-za-potenciju-com-logo.webp"
            alt="Med za potenciju"
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/">Početna</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>
        <Link
          href="/checkout"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Plaćanje
        </Link>
      </header>

      <Cart01
        items={cartItems}
        currency="din"
        freeShippingThreshold={5000}
        shippingFee={300}
        taxRate={0}
        checkoutHref="/checkout"
        continueHref="/shop"
        as="h1"
        labels={{
          heading: "Moja korpa",
          itemSingular: "proizvod",
          itemPlural: "proizvoda",
          continueShopping: "Nastavi kupovinu",
          emptyMessage: "Vasa korpa je prazna.",
          startShopping: "Pocni kupovinu",
          each: "kom",
          orderSummary: "Pregled narudzbine",
          subtotal: "Zbir",
          shipping: "Dostava",
          free: "Besplatno",
          estimatedTax: "Procenjen porez",
          total: "Ukupno",
          promoLabel: "Kod promocije",
          promoPlaceholder: "Unesi kod",
          promoApply: "Primeni",
          checkout: "Nastavi na placanje",
          trustLine: "Sigurno i bezb sifrovano placanje",
          removeItem: "Ukloni {name} iz korpe",
          decreaseQty: "Smanji kolicinu {name}",
          increaseQty: "Povecaj kolicinu {name}",
        }}
      />

      <Footer />
    </main>
  );
}
