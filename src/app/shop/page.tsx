import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { featuredProducts } from "@/data/catalog";
import { formatMoney } from "@/lib/money";

export const metadata: Metadata = {
  title: "Shop — pakovanja Q4You Fortissimo",
  description:
    "Sva pakovanja Q4You Fortissimo meda za potenciju: pojedinačna kesica, 3 kesice i standardno pakovanje od 7 kesica. Cene u dinarima, dostava po celoj Srbiji.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="rounded-[32px] bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 p-[1px] shadow-lg shadow-primary/20">
          <div className="rounded-[31px] bg-background px-10 py-12 md:px-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Med za potenciju
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight md:text-5xl">
              Q4You Fortissimo — med sa biljnim ekstraktima.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Izaberite pakovanje koje vam odgovara. Ista formula u svakoj kesici — razlika je samo u
              količini i ceni po kesici.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Katalog
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">Dostupna pakovanja</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm"
            >
              {product.image ? (
                <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
              ) : (
                <div className={`h-40 bg-gradient-to-br ${product.accent}`} />
              )}
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {product.badge}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {product.packSize}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    <Link href={`/shop/${product.slug}`} className="hover:underline">
                      {product.name}
                    </Link>
                  </h3>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">{product.description}</p>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <p className="text-2xl font-black tabular-nums">
                    {formatMoney(product.price, product.currency)}
                  </p>
                  <Link
                    href={`/shop/${product.slug}`}
                    className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Pogledaj
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
