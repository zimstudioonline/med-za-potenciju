import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { Packages } from "@/components/home/packages";
import { featuredProducts } from "@/data/catalog";
import {
  BENEFITS,
  FAQ_ITEMS,
  INGREDIENTS,
  TRUST_POINTS,
  USAGE_STEPS,
} from "@/data/product-content";

export const metadata: Metadata = {
  title: "Med za potenciju — Q4You Fortissimo, kesice od 7 g",
  description:
    "Med za potenciju Q4You Fortissimo: cvetni med sa đumbirom, ženšenom, epimediumom i matičnim mlečem u kesicama od 7 g. Pakovanje od 7 kesica 1.960 din, plaćanje pouzećem, diskretna isporuka u 24 časa.",
  alternates: { canonical: "/" },
};

/**
 * Product and FAQ structured data. Deliberately no aggregateRating — there are no
 * real reviews yet, and inventing them would be both dishonest and a policy breach.
 */
function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Q4You Fortissimo — med za potenciju",
        description:
          "Dodatak ishrani na bazi cvetnog meda i biljnih ekstrakata, u kesicama od 7 grama.",
        image: "https://medzapotenciju.com/med-za-potenciju-fortissimo.webp",
        brand: { "@type": "Brand", name: "Q4You" },
        offers: featuredProducts.map((pack) => ({
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
        mainEntity: FAQ_ITEMS.map((item) => ({
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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <StructuredData />
      <Header />

      {/* 2 — Hero */}
      <Hero />

      {/* 3 — Why men choose it */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">
            Kada želite da budete spremni za trenutak koji vam je važan
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[28px] border border-border bg-card p-6 shadow-sm"
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

      {/* 4 — What it is (SEO body copy) */}
      <section id="sta-je" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">
          Med za potenciju – šta je i kome je namenjen?
        </h2>

        <div className="mt-8 space-y-5 leading-8 text-muted-foreground">
          <p>
            Med za potenciju, pod nazivom Q4You Fortissimo, jeste dodatak ishrani na bazi cvetnog
            meda kombinovanog sa biljnim ekstraktima i začinima. Nije lek i nije zamena za lekarski
            pregled — reč je o proizvodu koji odrasle osobe koriste kao podršku energiji i
            vitalnosti, u trenucima kada im je to važno.
          </p>
          <p>
            Osnovu formule čini cvetni med, a uz njega su u sastavu đumbir, galanga, epimedium,
            kopriva, ginko, više vrsta ženšena, cimet, maka, seme bundeve, seme kole, cvetni polen,
            rogač i ovas, kao i liofilizirani matični mleč. Reč je o kombinaciji sastojaka koji se u
            različitim kulturama dugo koriste u ishrani i kao začini, spojenih u medenu bazu koja se
            lako uzima.
          </p>
          <p>
            Proizvod dolazi u praktičnim kesicama od 7 grama. Standardno pakovanje sadrži 7 kesica,
            odnosno ukupno 49 grama, a dostupna su i manja pakovanja od 3 kesice i pojedinačna
            kesica za one koji prvi put isprobavaju proizvod. Format kesice je jedna od glavnih
            praktičnih odlika: nema merenja, mešanja ni pripreme, a pakovanje se lako nosi i
            diskretno čuva.
          </p>
          <p>
            Upotreba je jednostavna. Sadržaj jedne kesice iscedi se direktno u usta ili se stavi na
            kašičicu i pojede. Preporučena upotreba je jedna kesica najmanje sat vremena pre
            intimnog trenutka, na prazan stomak ili najmanje dva sata nakon obroka. Uputstvo sa
            deklaracije je merodavno — pročitajte ga pre prve upotrebe.
          </p>
          <p>
            Proizvod je namenjen odraslim muškarcima i ženama. Nije namenjen osobama mlađim od 18
            godina, trudnicama i dojiljama. Ako imate alergiju na neki od sastojaka, ako koristite
            terapiju ili imate postojeći zdravstveni problem, proverite kompletan sastav na
            deklaraciji i posavetujte se sa lekarom ili farmaceutom.
          </p>
          <p>
            Važno je imati realna očekivanja. Dodaci ishrani ne leče i ne rešavaju uzrok problema.
            Ako su poteškoće sa erekcijom ili libidom česte ili traju duže vreme, razgovor sa
            lekarom je pravi korak — često su u pitanju faktori kao što su stres, nedostatak sna,
            ishrana ili osnovno zdravstveno stanje, koji zahtevaju drugačiji pristup.
          </p>
          <p>
            Ako tražite prirodan dodatak koji se lako uzima i diskretno nosi, Med za potenciju može
            biti dobar izbor. Poručivanje ide preko sajta bez registracije ili telefonom, plaćanje
            je isključivo pouzećem kuriru, a isporuka je u roku od 24 časa u neutralnom pakovanju.
          </p>
        </div>
      </section>

      {/* 5 — Packages and pricing */}
      <Packages />

      {/* 6 — How to use */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Kako se koristi?</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Prema uputstvu sa deklaracije proizvoda.
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
      </section>

      {/* 7 — Ingredients */}
      <section id="sastav" className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Šta se nalazi u Medu za potenciju?
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Sastojci navedeni na deklaraciji. Kompletnu listu, sa količinama i alergenima, proverite
            na pakovanju pre upotrebe.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INGREDIENTS.map((ingredient) => (
              <div
                key={ingredient.name}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span aria-hidden className="text-2xl">
                  {ingredient.icon}
                </span>
                <h3 className="mt-3 font-bold">{ingredient.name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{ingredient.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Why buy here */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Kupovina bez neprijatnosti</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-[28px] border border-border bg-card p-6 shadow-sm"
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

      {/* 9 — No invented reviews: ask-before-you-buy block instead */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight">Imate pitanje pre naručivanja?</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Odgovaramo na pitanja o sastavu, upotrebi, dostavi i plaćanju — svakog dana od 10 do 20
            časova.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+381633423800"
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              +381 63 342 3800
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Pošaljite poruku
            </Link>
            <Link
              href="#faq"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Pogledajte česta pitanja →
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — FAQ */}
      <Faq />

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-6 text-muted-foreground">
          Q4You Fortissimo je dodatak ishrani i nije lek. Dodaci ishrani nisu zamena za uravnoteženu
          ishranu i zdrav način života, ni za lekarski pregled ili lečenje. Proizvod nije namenjen
          osobama mlađim od 18 godina, trudnicama i dojiljama. Pre upotrebe pročitajte deklaraciju;
          ako imate alergiju na neki od sastojaka, koristite terapiju ili imate zdravstveni problem,
          posavetujte se sa lekarom ili farmaceutom.
        </p>
      </section>

      <Footer />
    </main>
  );
}
