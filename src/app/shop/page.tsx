import type { Metadata } from "next";
import Link from "next/link";

import { AddToCart } from "@/components/add-to-cart";
import { FaqAccordion } from "@/components/faq-accordion";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CartIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { getProducts } from "@/lib/content";
import { breadcrumbSchema, faqPageSchema, graph, productGroupSchema } from "@/lib/schema";
import { PACK_ADVICE, SHOP_FAQ_ITEMS, TRUST_BAR } from "@/data/product-content";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { formatMoney } from "@/lib/money";
import { SHIPPING_FEE } from "@/lib/shipping";

export const metadata: Metadata = {
  title: "Med za potenciju – pakovanja, cene i poručivanje",
  description:
    "Q4You Fortissimo u pakovanjima od 1, 3 i 7 kesica po 7 g. Uporedite cenu po kesici i izaberite pakovanje — plaćanje pouzećem, dostava za 24 časa.",
  alternates: { canonical: "/shop" },
};

type Packs = Awaited<ReturnType<typeof getProducts>>;

function StructuredData({ products }: { products: Packs }) {
  return (
    <JsonLd
      data={graph([
        breadcrumbSchema([
          { name: "Početna", path: "/" },
          { name: "Med za potenciju", path: "/shop" },
        ]),
        productGroupSchema(
          products,
          "Dodatak ishrani na bazi meda i biljnih ekstrakata, u kesicama od 7 g. Dostupan u pakovanjima od 1, 3 i 7 kesica."
        ),
        faqPageSchema(SHOP_FAQ_ITEMS),
      ])}
    />
  );
}

export default async function ShopPage() {
  const products = await getProducts();
  /** Largest pack first — the comparison table reads better from cheapest up. */
  const packsBySize = [...products].sort((a, b) => b.sachets - a.sachets);
  const packsByPrice = [...products].sort((a, b) => a.sachets - b.sachets);
  const cheapestPerSachet = packsBySize[0]!;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <StructuredData products={products} />
      <Header />

      {/* 1 — Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Q4You Fortissimo
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-balance md:text-5xl">
            Med za potenciju – Q4You Fortissimo
          </h1>

          <p className="mt-6 max-w-xl text-lg font-semibold leading-8">
            Dodatak ishrani na bazi meda i biljnih ekstrakata. Izaberite pakovanje koje vam
            odgovara.
          </p>

          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Ista formula u svakoj kesici od 7 g — razlikuju se samo količina i cena po kesici. Za
            sastav, upotrebu i upozorenja otvorite stranicu pakovanja.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#pakovanja"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl active:translate-y-0"
            >
              <CartIcon />
              Naruči sada
            </Link>
            <Link
              href="#poredjenje"
              className="rounded-full border border-border px-6 py-4 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Uporedi pakovanja
            </Link>
          </div>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute inset-6 -z-10 rounded-full bg-primary/15 blur-3xl" />
          <img
            src="/med-za-potenciju-fortissimo.webp"
            alt="Med za potenciju Q4You Fortissimo — pakovanje sa 7 kesica po 7 g"
            className="mx-auto w-full max-w-lg rounded-[32px] border border-border bg-card object-contain shadow-xl"
          />
        </div>
      </section>

      <div className="border-y border-border bg-muted/40">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3 px-6 py-4 sm:justify-between">
          {TRUST_BAR.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-medium">
              <span aria-hidden className="text-primary">
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* 3 — The packs */}
      <section id="pakovanja" className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Dostupna pakovanja Meda za potenciju
          </h2>
          <p className="mt-4 text-muted-foreground">
            Izaberite pakovanje koje vam najviše odgovara. Ista formula u svakoj kesici — razlika je
            samo u količini i ceni po kesici.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packsBySize.map((product) => {
              const isBest = product.slug === cheapestPerSachet.slug;

              return (
                <article
                  key={product.id}
                  className={`overflow-hidden rounded-[28px] border bg-card shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                    isBest ? "border-primary ring-1 ring-primary/30" : "border-border"
                  }`}
                >
                  {/*
                   * The pack photos are square 1254×1254 creatives with text and
                   * badges in every corner — any landscape crop cuts a claim in half.
                   * The slot is square so the whole creative survives.
                   */}
                  <img
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    className="aspect-square w-full object-cover"
                  />

                  <div className="space-y-4 p-6">
                    <div>
                      <h3 className="text-xl font-bold">
                        <Link href={`/shop/${product.slug}`} className="hover:underline">
                          {product.packSize}
                        </Link>
                      </h3>
                      <span
                        className={`mt-3 inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                          isBest
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-muted-foreground">{product.description}</p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <p className="text-2xl font-black tabular-nums">
                        {formatMoney(product.price, product.currency)}
                      </p>
                      <AddToCart slug={product.slug} />
                    </div>

                    {/*
                     * Drugi put sa kartice: kupac kome trebaju sastav, upotreba i
                     * upozorenja ide na stranicu pakovanja, gde taj sadržaj i stoji.
                     */}
                    <Link
                      href={`/shop/${product.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      Pogledaj detalje →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-muted-foreground tabular-nums">
            Dostava {formatMoney(SHIPPING_FEE)} · plaćanje pouzećem kuriru brze pošte
          </p>
        </div>
      </section>

      {/* 4 — Which pack to pick */}
      <section id="poredjenje" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Koje pakovanje izabrati?</h2>

        <div className="mt-8 overflow-x-auto rounded-[28px] border border-border bg-card shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold">
                  Pakovanje
                </th>
                <th scope="col" className="px-6 py-4 text-right font-bold">
                  Količina
                </th>
                <th scope="col" className="px-6 py-4 text-right font-bold">
                  Cena
                </th>
                <th scope="col" className="px-6 py-4 text-right font-bold whitespace-nowrap">
                  Cena po kesici
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {packsByPrice.map((pack) => (
                <tr key={pack.id}>
                  <th scope="row" className="px-6 py-4 font-semibold whitespace-nowrap">
                    {pack.sachets === 1 ? "1 kesica" : `${pack.sachets} kesice`}
                  </th>
                  <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                    {pack.sachets * 7} g
                  </td>
                  <td className="px-6 py-4 text-right font-semibold tabular-nums">
                    {formatMoney(pack.price, pack.currency)}
                  </td>
                  <td className="px-6 py-4 text-right tabular-nums text-muted-foreground">
                    {formatMoney(Math.round(pack.price / pack.sachets), pack.currency)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-8 space-y-3">
          {PACK_ADVICE.map((advice) => (
            <li key={advice.when} className="leading-7">
              <strong className="font-bold">{advice.when}:</strong>{" "}
              <span className="text-muted-foreground">{advice.then}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5 — Kratko o proizvodu, sa putem ka punom opisu */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">O proizvodu</h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Q4You Fortissimo je dodatak ishrani na bazi meda i biljnih ekstrakata, u praktičnim
          kesicama od 7 g. Kompletan sastav, način upotrebe i upozorenja stoje na stranici
          pakovanja koje izaberete.
        </p>
        <Link
          href={`/shop/${cheapestPerSachet.slug}#sastav`}
          className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline"
        >
          Pogledaj kompletan sastav i uputstvo →
        </Link>
      </section>

      {/* 6 — Poverenje, jedan red umesto sekcije sa karticama */}
      <div className="border-y border-border bg-muted/30">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 text-sm font-medium">
          <li className="flex items-center gap-2">
            <span aria-hidden>🔒</span> Diskretna isporuka
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>💳</span> Plaćanje pouzećem
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>🚚</span> Dostava za 24 časa
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden>☎</span> Podrška kupcima —{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">
              {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      </div>


      <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Česta pitanja o izboru pakovanja
        </h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          Pitanja o sastavu, upotrebi i upozorenjima nalaze se na stranici svakog pakovanja.
        </p>
        <div className="mt-8">
          <FaqAccordion items={SHOP_FAQ_ITEMS} />
        </div>

        <div className="mt-12 rounded-[28px] border border-border bg-card p-7 text-center shadow-sm">
          <h3 className="text-xl font-bold">Imate još pitanja?</h3>
          <p className="mt-3 leading-7 text-muted-foreground">
            Ako niste pronašli odgovor koji tražite, kontaktirajte nas.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Kontaktirajte nas
            </Link>
            <a
              href={PHONE_HREF}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* 13 — Closing CTA */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight">
            Izaberite pakovanje koje vam odgovara
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Jedna kesica za prvo isprobavanje, tri kesice za nekoliko upotreba ili sedam kesica za
            najpovoljniju cenu po kesici.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <AddToCart
              slug={cheapestPerSachet.slug}
              label="Naruči sada"
              goToCart
              className="px-8 py-4 text-base font-bold uppercase tracking-wide shadow-lg shadow-primary/25"
            />
            <Link
              href="#pakovanja"
              className="rounded-full border border-border px-6 py-4 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Pogledaj pakovanja
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-6 text-muted-foreground">
          Q4You Fortissimo je dodatak ishrani i nije lek. Dodaci ishrani nisu zamena za uravnoteženu
          ishranu i zdrav način života, ni za lekarski pregled ili lečenje, i nisu namenjeni
          dijagnostikovanju, lečenju ni prevenciji bolesti. Proizvod nije namenjen osobama mlađim od
          18 godina, trudnicama i dojiljama. Pre upotrebe pročitajte deklaraciju; ako imate alergiju
          na neki od sastojaka, koristite terapiju ili imate zdravstveni problem, posavetujte se sa
          lekarom ili farmaceutom.
        </p>
      </section>

      <Footer />
    </main>
  );
}
