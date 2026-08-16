import Link from "next/link";

import { CartIcon } from "@/components/icons";
import { TRUST_BAR } from "@/data/product-content";

export function Hero() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-2 lg:gap-16 lg:pb-20">
        {/* LEFT — copy and CTA */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Q4You Fortissimo
          </p>

          {/*
           * The H1 stays exactly the search term, nothing appended. "Najbolji prirodni
           * med za potenciju u Srbiji" would read as keyword stuffing to both a person
           * and a ranking system.
           */}
          <h1 className="mt-4 text-4xl font-black tracking-tight text-balance md:text-6xl">
            Med za potenciju
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Prirodni dodatak ishrani na bazi meda, biljnih ekstrakata i drugih sastojaka, namenjen
            odraslim osobama koje žele jednostavan način da u svoju svakodnevnu rutinu uključe
            proizvod za podršku energiji i vitalnosti.
          </p>

          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Dolazi u praktičnim kesicama od 7 grama — bez merenja, mešanja i pripreme. Nije lek.
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
              href="#sta-je"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              Saznajte više o proizvodu →
            </Link>
          </div>
        </div>

        {/* RIGHT — the actual box */}
        <div className="relative">
          <div aria-hidden className="absolute inset-6 -z-10 rounded-full bg-primary/15 blur-3xl" />
          <img
            src="/med-za-potenciju-fortissimo.webp"
            alt="Med za potenciju Q4You Fortissimo — originalno pakovanje sa 7 kesica po 7 g"
            className="mx-auto w-full max-w-lg rounded-[32px] border border-border bg-card object-contain shadow-xl"
          />
        </div>
      </section>

      {/* Trust bar — four facts about the purchase, scannable in a second. */}
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
    </>
  );
}
