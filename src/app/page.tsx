import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Product01 } from "@/components/sections/product-01";
import { featuredProducts } from "@/data/catalog";
import { formatMoney } from "@/lib/money";

export const metadata: Metadata = {
  title: "Q4You Fortissimo — med za potenciju i vitalnost",
  description:
    "Q4You Fortissimo: med sa đumbirom, ženšenom, epimediumom i matičnim mlečem u kesicama od 7 g. Pakovanje od 7 kesica za 1.960 din, diskretna dostava u 24 časa.",
  alternates: { canonical: "/" },
};

/** The 7-sachet pack is the hero offer; the smaller packs are cross-sold below. */
const heroProduct = featuredProducts[0];
const otherPacks = featuredProducts.slice(1);

const SELLING_POINTS = [
  [
    "Praktične kesice od 7 g",
    "Sadržaj se iscedi direktno u usta ili na kašičicu — bez merenja i bez pripreme.",
  ],
  [
    "Biljni sastojci i cvetni med",
    "Đumbir, galanga, epimedium, ginko, ženšen, maka i matični mleč u medenoj bazi.",
  ],
  [
    "Diskretna dostava u 24 časa",
    "Neutralno pakovanje, porudžbine telefonom svakog dana od 10 do 20 časova.",
  ],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <Product01
        brand="Q4You"
        title={heroProduct.name}
        price={heroProduct.price}
        compareAt={heroProduct.compareAt}
        currency={heroProduct.currency}
        rating={heroProduct.rating}
        reviewCount={heroProduct.reviewCount}
        description="Dodatak ishrani na bazi cvetnog meda i biljnih ekstrakata, namenjen odraslima koji žele da podrže energiju, vitalnost i seksualnu želju. Jedna kesica najmanje sat vremena pre aktivnosti, na prazan stomak."
        badge={heroProduct.badge}
        addToCartLabel="Dodaj u korpu"
        buyNowLabel="Kupi odmah"
        as="h1"
        images={[
          { src: heroProduct.image!, alt: `${heroProduct.name} — pakovanje` },
        ]}
        colors={[]}
        sizes={[]}
        labels={{
          reviews: "recenzija",
          inStock: "Na stanju, šaljemo u roku od 24 časa",
          save: "Ušteda {percent}%",
          freeShipping: "Diskretna dostava",
          returns: "Podrška 10–20h svakog dana",
          secureCheckout: "Sigurno plaćanje",
          decreaseQuantity: "Umanji količinu",
          increaseQuantity: "Uvećaj količinu",
          addToWishlist: "Dodaj na listu želja",
        }}
      />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {SELLING_POINTS.map(([title, text]) => (
            <div key={title} className="rounded-[28px] border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-full bg-primary/10" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-3xl font-black tracking-tight">Ostala pakovanja</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Želite prvo da isprobate? Dostupne su i manje količine.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {otherPacks.map((pack) => (
            <article
              key={pack.id}
              className="flex items-center justify-between gap-4 rounded-[28px] border border-border bg-card p-6 shadow-sm"
            >
              <div>
                <h3 className="text-lg font-bold">
                  <Link href={`/shop/${pack.slug}`} className="hover:underline">
                    {pack.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{pack.packSize}</p>
              </div>
              <p className="shrink-0 text-xl font-black tabular-nums">
                {formatMoney(pack.price, pack.currency)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <p className="rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-6 text-muted-foreground">
          Dodaci ishrani nisu zamena za uravnoteženu ishranu, pregled ili lečenje. Proizvod nije
          namenjen osobama mlađim od 18 godina, trudnicama i dojiljama. Ako imate alergiju na neki
          od sastojaka ili koristite terapiju, posavetujte se sa lekarom ili farmaceutom.
        </p>
      </section>

      <Footer />
    </main>
  );
}
