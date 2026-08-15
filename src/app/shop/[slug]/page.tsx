import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToCart } from "@/components/add-to-cart";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Product01 } from "@/components/sections/product-01";
import { featuredProducts, findProduct } from "@/data/catalog";
import { formatMoney } from "@/lib/money";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    return { title: "Proizvod nije pronađen" };
  }

  return {
    title: `${product.name} — ${formatMoney(product.price, product.currency)}`,
    description: product.description,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.image ? [product.image] : undefined,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) {
    notFound();
  }

  const images = product.image
    ? [{ src: product.image, alt: `${product.name} — pakovanje` }]
    : undefined;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <Product01
        brand="Q4You"
        title={product.name}
        price={product.price}
        compareAt={product.compareAt}
        currency={product.currency}
        reviewCount={0}
        description={product.description}
        badge={product.badge}
        addToCartLabel="Dodaj u korpu"
        buyNowLabel="Kupi odmah"
        as="h1"
        images={images}
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-muted/30 p-6">
            <p className="text-2xl font-black tabular-nums">
              {formatMoney(product.price, product.currency)}
            </p>
            <AddToCart
              slug={product.slug}
              label="Dodaj u korpu"
              className="px-6 py-3 text-base font-bold"
            />
            <AddToCart
              slug={product.slug}
              label="Poruči odmah"
              goToCart
              className="border border-primary bg-transparent px-6 py-3 text-base font-bold text-primary hover:bg-primary/10"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold">O proizvodu</h2>
            <p className="mt-2 text-muted-foreground">{product.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Pakovanje
              </p>
              <p className="mt-2 text-lg font-bold">{product.packSize}</p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Plaćanje
              </p>
              <p className="mt-2 text-lg font-bold">Pouzećem</p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Dostupnost
              </p>
              <p className="mt-2 text-lg font-bold text-emerald-600">Na stanju</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
        >
          ← Nazad na shop
        </Link>
      </section>

      <Footer />
    </main>
  );
}
