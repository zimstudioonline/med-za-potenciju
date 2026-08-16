import type { Metadata } from "next";
import Link from "next/link";

import { AddToCart } from "@/components/add-to-cart";
import { FaqAccordion } from "@/components/faq-accordion";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CartIcon } from "@/components/icons";
import { getProducts } from "@/lib/content";
import {
  AUDIENCE_NOT_FOR,
  DELIVERY_POINTS,
  INGREDIENTS,
  PACK_ADVICE,
  PRODUCT_FACTS,
  QUICK_FACTS,
  SHOP_FAQ_ITEMS,
  SHOP_WHY_US,
  TRUST_BAR,
  USAGE_STEPS,
} from "@/data/product-content";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { formatMoney } from "@/lib/money";
import { SHIPPING_FEE } from "@/lib/shipping";

export const metadata: Metadata = {
  title: "Med za potenciju – pakovanja, cene i poručivanje",
  description:
    "Q4You Fortissimo u pakovanjima od 1, 3 i 7 kesica po 7 g. Cene, cena po kesici, sastav, način upotrebe i poručivanje uz plaćanje pouzećem i dostavu za 24 časa.",
  alternates: { canonical: "/shop" },
};

type Packs = Awaited<ReturnType<typeof getProducts>>;

function StructuredData({ products }: { products: Packs }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Početna",
            item: "https://medzapotenciju.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Med za potenciju",
            item: "https://medzapotenciju.com/shop",
          },
        ],
      },
      {
        "@type": "Product",
        name: "Med za potenciju — Q4You Fortissimo",
        description:
          "Dodatak ishrani na bazi meda i biljnih ekstrakata, u kesicama od 7 g. Dostupan u pakovanjima od 1, 3 i 7 kesica.",
        image: "https://medzapotenciju.com/med-za-potenciju-fortissimo.webp",
        brand: { "@type": "Brand", name: "Q4You" },
        category: "Dodatak ishrani",
        offers: products.map((pack) => ({
          "@type": "Offer",
          name: pack.packSize,
          price: pack.price,
          priceCurrency: "RSD",
          availability: "https://schema.org/InStock",
          url: `https://medzapotenciju.com/shop/${pack.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: SHOP_FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
            Dodatak ishrani na bazi meda i biljnih ekstrakata, dostupan u pakovanjima od 1, 3 i 7
            kesica.
          </p>

          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Q4You Fortissimo je dodatak ishrani u praktičnoj kesici od 7 g. Izaberite pakovanje koje
            vam odgovara — od pojedinačne kesice za prvo isprobavanje do pakovanja od 7 kesica.
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
              href="#sastav"
              className="rounded-full border border-border px-6 py-4 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Pogledaj sastav
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

      {/* 2 — Spec block: the facts a buyer (or an AI assistant) needs first */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Med za potenciju – najvažnije informacije
        </h2>

        <dl className="mt-8 grid gap-x-10 gap-y-4 rounded-[28px] border border-border bg-card p-7 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-wrap gap-x-2 text-sm">
              <dt className="font-bold">{fact.label}:</dt>
              <dd className="text-muted-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          Q4You Fortissimo nije lek i ne treba ga koristiti kao zamenu za propisanu terapiju ili
          savet zdravstvenog radnika.
        </p>
      </section>

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
      <section className="mx-auto max-w-4xl px-6 py-20">
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

      {/* 5 — What it is */}
      <section id="sta-je" className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Šta je Q4You Fortissimo?
          </h2>
          {/*
           * Kept to three sentences on purpose. The full explanation lives on the
           * homepage — repeating it here would give the two pages near-identical
           * bodies, and this page's job is choosing a pack, not explaining honey.
           */}
          <div className="mt-6 space-y-4 leading-8 text-muted-foreground">
            <p>
              Q4You Fortissimo je dodatak ishrani na bazi meda i biljnih ekstrakata, namenjen
              odraslim osobama. Proizvod dolazi u praktičnim kesicama od 7 g, što omogućava
              jednostavno doziranje i praktično korišćenje. Kompletan sastav, preporučeni način
              upotrebe i upozorenja treba proveriti na deklaraciji proizvoda.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/#sta-je" className="font-semibold text-primary hover:underline">
              Detaljno o proizvodu na početnoj →
            </Link>
            <Link href="#sastav" className="font-semibold text-primary hover:underline">
              Pogledaj kompletan sastav →
            </Link>
          </div>
        </div>
      </section>

      {/* 6 — Ingredients */}
      <section id="sastav" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Šta se nalazi u Medu za potenciju?
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          Formula Q4You Fortissimo sadrži med i kombinaciju biljnih sastojaka navedenih na
          deklaraciji proizvoda. Opisi ispod govore šta je koji sastojak, ne šta radi.
        </p>

        <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Sastojci formule
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INGREDIENTS.map((ingredient) => (
            <div
              key={ingredient.name}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md"
            >
              <span aria-hidden className="text-2xl">
                {ingredient.icon}
              </span>
              <h4 className="mt-3 font-bold">{ingredient.name}</h4>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{ingredient.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
          <strong className="font-bold text-foreground">Napomena:</strong> Kompletan sastav i
          količine sastojaka proverite na aktuelnoj deklaraciji proizvoda.
        </p>
      </section>

      {/* 7 — How to use */}
      <section id="upotreba" className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Kako se koristi Med za potenciju?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Q4You Fortissimo koristite u skladu sa uputstvom i deklaracijom proizvoda.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {USAGE_STEPS.map((step) => (
              <div key={step.step} className="rounded-[28px] border border-border bg-card p-6">
                <span className="font-heading text-4xl font-black text-primary/25 tabular-nums">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm leading-6">
            <strong className="font-bold">Važno:</strong> Ako imate zdravstvene tegobe, alergiju na
            neki od sastojaka ili koristite lekove i terapiju, pre upotrebe razgovarajte sa lekarom
            ili farmaceutom. Nemojte prekoračiti preporučenu količinu navedenu na deklaraciji.
          </p>
        </div>
      </section>

      {/* 8 — Who it is for */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Kome je namenjen Q4You Fortissimo?
        </h2>
        <p className="mt-6 leading-8 text-muted-foreground">
          Proizvod je namenjen odraslim osobama koje žele da u svoju svakodnevnu rutinu uključe
          dodatak ishrani na bazi meda i biljnih sastojaka.
        </p>

        <h3 className="mt-10 text-xl font-bold">Kome se ne preporučuje?</h3>
        <p className="mt-3 text-muted-foreground">Proizvod nije namenjen:</p>
        <ul className="mt-4 space-y-3">
          {AUDIENCE_NOT_FOR.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-muted-foreground">
              <span aria-hidden className="mt-1 shrink-0 font-bold text-muted-foreground">
                ✕
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 leading-7 text-muted-foreground">
          Ukoliko koristite terapiju ili imate zdravstveni problem, pre upotrebe konsultujte lekara
          ili farmaceuta.
        </p>
      </section>

      {/* 9 — Declarative facts table */}
      <section id="informacije" className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">Informacije o proizvodu</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Podaci o proizvođaču, zemlji porekla, uslovima čuvanja i roku trajanja nalaze se na
            deklaraciji na pakovanju.
          </p>

          <div className="mt-8 overflow-x-auto rounded-[28px] border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-border">
                {PRODUCT_FACTS.map((fact) => (
                  <tr key={fact.label}>
                    <th
                      scope="row"
                      className="w-2/5 px-6 py-4 align-top font-semibold whitespace-nowrap"
                    >
                      {fact.label}
                    </th>
                    <td className="px-6 py-4 leading-6 text-muted-foreground">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10 — Delivery and payment */}
      <section id="dostava" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Dostava i plaćanje</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERY_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-[28px] border border-border bg-card p-6 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md"
            >
              <span aria-hidden className="text-3xl">
                {point.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
            </div>
          ))}
        </div>

        <Link
          href="#pakovanja"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl active:translate-y-0"
        >
          <CartIcon />
          Naruči med za potenciju
        </Link>
      </section>

      {/* 11 — Why buy here */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">Zašto naručiti kod nas?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SHOP_WHY_US.map((point) => (
              <div
                key={point.title}
                className="rounded-[28px] border border-border bg-card p-6 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md"
              >
                <span aria-hidden className="text-3xl">
                  {point.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Česta pitanja o Medu za potenciju
        </h2>
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
