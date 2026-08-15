import type { Metadata } from "next";

import { Checkout01 } from "@/components/sections/checkout-01";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { featuredProducts } from "@/data/catalog";
import { SHIPPING_ETA, SHIPPING_FEE } from "@/lib/shipping";

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
      id: "brza-posta",
      name: "Brza pošta — plaćanje pouzećem",
      eta: SHIPPING_ETA,
      fee: SHIPPING_FEE,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <Checkout01
        as="h1"
        eyebrow="Sigurno plaćanje"
        title="Završite porudžbinu"
        description="Proverite porudžbinu i unesite podatke za dostavu. Plaćate kuriru pri preuzimanju — kartica nije potrebna."
        items={cartItems}
        deliveryOptions={deliveryOptions}
        currency={product.currency}
        taxRate={0}
        paymentMode="cod"
        submitLabel="Poruči"
        secureNote="Ne prikupljamo i ne čuvamo podatke o karticama. Paket dolazi u diskretnom pakovanju."
        labels={{
          contact: "Kontakt",
          shippingAddress: "Adresa za dostavu",
          deliveryMethod: "Način dostave",
          payment: "Plaćanje",
          emailLabel: "Email adresa",
          phoneLabel: "Telefon",
          firstNameLabel: "Ime",
          lastNameLabel: "Prezime",
          addressLabel: "Adresa",
          apartmentLabel: "Stan/Broj",
          optionalHint: "(opciono)",
          cityLabel: "Grad",
          postalCodeLabel: "Poštanski broj",
          countryLabel: "Država",
          emailPlaceholder: "vasa@email.com",
          phonePlaceholder: "+381 6X XXX XXXX",
          codTitle: "Plaćanje pouzećem",
          codNote:
            "Plaćate kuriru brze pošte u trenutku preuzimanja paketa. Ne unosite podatke o kartici i ne plaćate ništa unapred.",
          codBadge: "Pouzećem",
          firstNamePlaceholder: "Vaše ime",
          lastNamePlaceholder: "Vaše prezime",
          addressPlaceholder: "Ulica i broj",
          apartmentPlaceholder: "Broj stana",
          cityPlaceholder: "Beograd",
          postalCodePlaceholder: "11000",
          countryPlaceholder: "Srbija",
          orderSummary: "Pregled narudžbine",
          qty: "Količina",
          subtotal: "Međuzbir",
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
