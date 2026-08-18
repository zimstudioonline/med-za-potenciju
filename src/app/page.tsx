import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { CartIcon } from "@/components/icons";
import { Packages } from "@/components/home/packages";
import { JsonLd } from "@/components/json-ld";
import { getPosts, getProducts } from "@/lib/content";
import {
  breadcrumbSchema,
  faqPageSchema,
  graph,
  organizationSchema,
  productGroupSchema,
  websiteSchema,
} from "@/lib/schema";
import {
  AUDIENCE_FOR,
  AUDIENCE_NOT_FOR,
  BENEFITS,
  FAQ_ITEMS,
  INGREDIENTS,
  PRODUCT_FACTS,
  SHORT_ANSWER,
  TRUST_POINTS,
  USAGE_STEPS,
  USAGE_WARNING,
} from "@/data/product-content";
import { PHONE_DISPLAY, PHONE_HOURS, PHONE_HREF } from "@/lib/contact";

/**
 * Title and description describe what the page actually answers — sastav, upotreba,
 * poručivanje — instead of promising superlatives ("najbolji", "100% prirodan") that
 * neither the declaration nor the law backs up.
 */
export const metadata: Metadata = {
  title: "Med za potenciju – sastav, način upotrebe i poručivanje",
  description:
    "Saznajte šta sadrži Med za potenciju (Q4You Fortissimo), kako se koristi, kome je namenjen i kako možete jednostavno i diskretno da ga poručite uz plaćanje pouzećem.",
  alternates: { canonical: "/" },
};

/** Last time the facts on this page were checked against the source. */
const LAST_REVIEWED = "avgust 2026.";

/**
 * Organization + WebSite + ProductGroup + FAQPage + Breadcrumb. Namerno bez
 * aggregateRating — nema stvarnih recenzija, a izmišljene bi bile i laž i
 * kršenje Google-ovih pravila. Nema ni LocalBusiness: ne postoji prodavnica.
 */
function StructuredData({ products }: { products: Awaited<ReturnType<typeof getProducts>> }) {
  return (
    <JsonLd
      data={graph([
        organizationSchema,
        websiteSchema,
        productGroupSchema(products, SHORT_ANSWER),
        faqPageSchema(FAQ_ITEMS),
        breadcrumbSchema([{ name: "Početna", path: "/" }]),
      ])}
    />
  );
}

export default async function Home() {
  const [allPosts, products] = await Promise.all([getPosts(), getProducts()]);
  const posts = allPosts.slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <StructuredData products={products} />
      <Header />

      {/* 1 — Hero + trust bar */}
      <Hero />

      {/*
       * 2 — The direct answer. One paragraph that defines the entity without needing
       * any surrounding context, then the longer explanation beside a facts card so
       * the column never reads as a lonely strip of text on a wide screen.
       */}
      <section id="sta-je" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Šta je Med za potenciju?
        </h2>

        <p className="mt-6 max-w-4xl rounded-[28px] border border-primary/30 bg-primary/5 p-6 text-lg leading-8 md:p-8">
          {SHORT_ANSWER}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <div className="space-y-5 leading-8 text-muted-foreground">
            <p>
              Osnovu formule čini cvetni med, a uz njega su u sastavu đumbir, galanga, epimedium,
              kopriva, ginko, više vrsta ženšena, cimet, maka, seme bundeve, seme kole, cvetni
              polen, rogač i ovas, kao i liofilizirani matični mleč. Reč je o kombinaciji sastojaka
              koji se u različitim kulturama dugo koriste u ishrani i kao začini, spojenih u medenu
              bazu koja se lako uzima.
            </p>
            <p>
              Proizvod dolazi u kesicama od 7 grama. Standardno pakovanje sadrži 7 kesica, odnosno
              ukupno 49 grama, a dostupna su i manja pakovanja od 3 kesice i pojedinačna kesica za
              one koji prvi put isprobavaju proizvod. Format kesice je jedna od glavnih praktičnih
              odlika: nema merenja, mešanja ni pripreme, a pakovanje se lako nosi i diskretno čuva.
            </p>
            <p>
              Važno je imati realna očekivanja. Dodaci ishrani ne leče i ne rešavaju uzrok problema.
              Ako su poteškoće sa erekcijom ili libidom česte ili traju duže vreme, razgovor sa
              lekarom je pravi korak — često su u pitanju faktori kao što su stres, nedostatak sna,
              ishrana ili osnovno zdravstveno stanje, koji zahtevaju drugačiji pristup.
            </p>
            <p>
              Poručivanje ide preko sajta bez registracije ili telefonom, plaćanje je isključivo
              pouzećem kuriru, a isporuka je u roku od 24 časa u neutralnom pakovanju.
            </p>
          </div>

          {/* Same facts an AI assistant would need to answer "šta je ovo, koliko košta". */}
          <aside className="h-fit rounded-[28px] border border-border bg-card p-6 shadow-sm lg:sticky lg:top-28">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Ukratko</h3>
            <dl className="mt-5 space-y-4 text-sm">
              {PRODUCT_FACTS.slice(0, 6).map((fact) => (
                <div key={fact.label}>
                  <dt className="font-semibold">{fact.label}</dt>
                  <dd className="mt-0.5 text-muted-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="#informacije"
              className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Sve informacije o proizvodu →
            </Link>
          </aside>
        </div>
      </section>

      {/* 3 — Why people choose it */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-4xl">
            Zašto muškarci biraju Med za potenciju?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[28px] border border-border bg-card p-6 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md"
              >
                <span aria-hidden className="text-3xl">
                  {benefit.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Ingredients */}
      <section id="sastav" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Šta sadrži Med za potenciju?
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
          Med za potenciju sadrži kombinaciju cvetnog meda i biljnih sastojaka. Ispod je opis svakog
          sastojka iz formule — šta jeste, a ne šta radi. Sastav i količine proverite na deklaraciji
          proizvoda pre upotrebe.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INGREDIENTS.map((ingredient) => (
            <div
              key={ingredient.name}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md"
            >
              <span aria-hidden className="text-2xl">
                {ingredient.icon}
              </span>
              <h3 className="mt-3 font-bold">{ingredient.name}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{ingredient.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — How to use */}
      <section id="upotreba" className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Kako se koristi Med za potenciju?
          </h2>

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
            <strong className="font-bold">Važno:</strong> {USAGE_WARNING}
          </p>
        </div>
      </section>

      {/* 6 — Packages and pricing */}
      <Packages />

      {/* 7 — Who it is (and is not) for */}
      <section id="kome-je-namenjen" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Kome je namenjen Med za potenciju?
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-border bg-card p-7 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md">
            <h3 className="text-lg font-bold">Namenjen je</h3>
            <ul className="mt-5 space-y-3">
              {AUDIENCE_FOR.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span aria-hidden className="mt-0.5 shrink-0 font-bold text-primary">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-7 shadow-sm transition duration-200 hover:border-primary/40 hover:shadow-md">
            <h3 className="text-lg font-bold">Nije namenjen</h3>
            <ul className="mt-5 space-y-3">
              {AUDIENCE_NOT_FOR.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span aria-hidden className="mt-0.5 shrink-0 font-bold text-muted-foreground">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
          Konkretna upozorenja i ograničenja uvek proverite na deklaraciji proizvoda — ona je
          merodavna.
        </p>
      </section>

      {/* 8 — The declarative facts, as a table an AI assistant can read row by row */}
      <section id="informacije" className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Informacije o proizvodu
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Podaci o proizvodu i uslovima kupovine na jednom mestu. Podaci o proizvođaču, zemlji
            porekla, uslovima čuvanja i roku trajanja nalaze se na deklaraciji na pakovanju.
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

          <p className="mt-4 text-xs text-muted-foreground">
            Informacije poslednji put proverene: {LAST_REVIEWED}
          </p>
        </div>
      </section>

      {/* 9 — Why buy here */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Zašto kupci naručuju Med za potenciju kod nas?
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
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
      </section>

      {/* 10 — Internal links into the blog, so the homepage is not a dead end */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Vodiči za muško zdravlje
            </h2>
            <Link
              href="/blog"
              className="text-sm font-semibold text-primary transition hover:underline"
            >
              Svi tekstovi →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-6 group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                <p className="mt-4 text-xs text-muted-foreground">{post.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — FAQ */}
      <Faq />

      {/* 12 — Closing CTA. No invented reviews; an open phone line instead. */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight">Želite da saznate više o proizvodu?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Odgovaramo na pitanja o sastavu, upotrebi, dostavi i plaćanju — {PHONE_HOURS}.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#pakovanja"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg active:translate-y-0"
            >
              <CartIcon />
              Naruči
            </Link>
            <a
              href={PHONE_HREF}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Pošaljite poruku →
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
