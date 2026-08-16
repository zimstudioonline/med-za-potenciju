"use client";

import Link from "next/link";
import * as React from "react";
import { useActionState } from "react";

import { placeOrder } from "@/app/actions/order";
import { INITIAL_ORDER_STATE } from "@/app/actions/order-state";
import { Checkout01 } from "@/components/sections/checkout-01";
import { useCart } from "@/lib/cart-context";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { DEFAULT_CURRENCY } from "@/lib/money";
import { SHIPPING_ETA, SHIPPING_FEE } from "@/lib/shipping";

const DELIVERY_OPTIONS = [
  {
    id: "brza-posta",
    name: "Brza pošta — plaćanje pouzećem",
    eta: SHIPPING_ETA,
    fee: SHIPPING_FEE,
  },
];

export function CheckoutClient() {
  const { lines, ready, clear } = useCart();
  const [state, formAction, pending] = useActionState(placeOrder, INITIAL_ORDER_STATE);

  // Empty the cart once the order is in, so a refresh cannot resubmit it.
  React.useEffect(() => {
    if (state.status === "success") clear();
  }, [state.status, clear]);

  if (!ready) {
    return <div className="mx-auto max-w-6xl px-6 py-24" aria-busy="true" />;
  }

  if (state.status === "success") {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-5xl" aria-hidden>
          ✓
        </p>
        <h1 className="mt-6 text-3xl font-black tracking-tight md:text-4xl">
          Porudžbina je primljena
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">{state.message}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Nazad na početnu
          </Link>
          <a
            href={PHONE_HREF}
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    );
  }

  if (lines.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl font-black tracking-tight">Korpa je prazna</h1>
        <p className="mt-4 text-muted-foreground">
          Izaberite pakovanje pa se vratite na plaćanje.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Pogledaj pakovanja
        </Link>
      </section>
    );
  }

  const cartPayload = JSON.stringify(lines.map((line) => ({ slug: line.slug, qty: line.qty })));

  return (
    <Checkout01
      as="h1"
      eyebrow="Plaćanje pouzećem"
      title="Završite porudžbinu"
      description="Unesite podatke za dostavu. Plaćate kuriru pri preuzimanju — kartica nije potrebna i ne plaćate ništa unapred."
      items={lines.map((line) => ({
        name: `${line.name} (${line.packSize})`,
        qty: line.qty,
        price: line.price,
        image: line.image,
      }))}
      deliveryOptions={DELIVERY_OPTIONS}
      currency={DEFAULT_CURRENCY}
      taxRate={0}
      paymentMode="cod"
      formAction={formAction}
      pending={pending}
      pendingLabel="Šaljemo porudžbinu…"
      statusMessage={state.status === "error" ? state.message : undefined}
      statusVariant="error"
      submitLabel="Poruči"
      secureNote="Ne prikupljamo podatke o karticama. Paket dolazi u diskretnom pakovanju."
      extraFields={
        <>
          <input type="hidden" name="cart" value={cartPayload} />
          <div className="flex flex-col gap-2">
            <label htmlFor="checkout-note" className="text-sm font-medium">
              Napomena za dostavu <span className="text-muted-foreground">(opciono)</span>
            </label>
            <textarea
              id="checkout-note"
              name="note"
              rows={3}
              placeholder="Npr. zovite pre dolaska, ostavite kod komšije…"
              className="rounded-lg border border-input bg-card px-4 py-2 text-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </>
      }
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
  );
}
