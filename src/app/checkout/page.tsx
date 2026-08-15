import Link from "next/link";
import { Checkout01 } from "@/components/sections/checkout-01";
import { Footer } from "@/components/footer";

export default function CheckoutPage() {
  // Mock cart items
  const cartItems = [
    {
      name: "Q4You Fortissimo",
      qty: 1,
      price: 1960,
      image: "/med-za-potenciju-fortissimo.webp",
    },
  ];

  const deliveryOptions = [
    {
      id: "standard",
      name: "Standardna dostava",
      eta: "3-5 radnih dana",
      fee: 0,
    },
    {
      id: "express",
      name: "Ekspresna dostava",
      eta: "1-2 radna dana",
      fee: 300,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/med-za-potenciju-com-logo.webp" alt="Med za potenciju" className="h-12 w-auto" />
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/">Početna</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>
        <Link
        <Link href="/cart"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Korpa
        </Link>
      </header>

      <Checkout01
        items={cartItems}
        deliveryOptions={deliveryOptions}
        currency="din"
        labels={{
          contact: "Kontakt",
          shippingAddress: "Adresa za dostavu",
          deliveryMethod: "Način dostave",
          payment: "Plaćanje",
          emailLabel: "Email adresa",
          firstNameLabel: "Ime",
          lastNameLabel: "Prezime",
          addressLabel: "Adresa",
          apartmentLabel: "Stan/Broj",
          optionalHint: "(opciono)",
          cityLabel: "Grad",
          postalCodeLabel: "Poštanski broj",
          countryLabel: "Država",
          cardNumberLabel: "Broj kartice",
          expiryLabel: "Ročnost",
          cvcLabel: "CVC",
          emailPlaceholder: "vasa@email.com",
          firstNamePlaceholder: "Vaše ime",
          lastNamePlaceholder: "Vaše prezime",
          addressPlaceholder: "Ulica i broj",
          apartmentPlaceholder: "Broj stana",
          cityPlaceholder: "Beograd",
          postalCodePlaceholder: "11000",
          countryPlaceholder: "Srbija",
          cardNumberPlaceholder: "1234 5678 9012 3456",
          expiryPlaceholder: "MM/YY",
          cvcPlaceholder: "123",
          paymentNote: "Vaše plaćanje je zaštićeno i sigurno",
          orderSummary: "Pregled narudžbine",
          qty: "Količina",
          subtotal: "Zbir",
          shipping: "Dostava",
          tax: "Porez",
          total: "Ukupno",
          free: "Besplatno",
        }}
      />

      <Footer />
    </main>
  );
}
