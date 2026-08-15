import type { Metadata } from "next";

import { Checkout01 } from "@/components/sections/checkout-01";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { featuredProducts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Plaćanje",
  description: "Unesite podatke za dostavu i završite porudžbinu.",
  robots: { index: false },
};

export default function CheckoutPage() {
  // Placeholder line — replaced once the cart keeps real state.
  const product = featuredProducts[0];
  const cartItems = [
    {
      name: product.name,
      qty: 1,
      price: product.price,
      image: product.image,
    },
  ];

  // Matches the cart's shippingFee so the total does not change between pages.
  const deliveryOptions = [
    {
      id: "kurir",
      name: "Kurirska služba",
      eta: "Isporuka u roku od 24 časa, diskretno pakovanje",
      fee: 300,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <Checkout01
        as="h1"
        eyebrow="Sigurno plaćanje"
        title="Završite porudžbinu"
        description="Proverite porudžbinu i unesite podatke za dostavu. Cene su u dinarima sa uračunatim PDV-om."
        items={cartItems}
        deliveryOptions={deliveryOptions}
        currency={product.currency}
        taxRate={0}
        submitLabel="Poruči"
        secureNote="Podaci su šifrovani. Ne čuvamo podatke o vašoj kartici."
        paymentMethods={["Visa", "Mastercard"]}
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
          expiryLabel: "Važi do",
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
