import Link from "next/link";
import { notFound } from "next/navigation";
import { Product01 } from "@/components/sections/product-01";
import { featuredProducts } from "@/data/catalog";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = featuredProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Determine price and compare price based on product
  const comparePrice = product.price * 1.5; // Mock compare price (50% higher)
  const currency = product.price > 100 ? "€" : "din";
  
  // Mock product images - use the featured image if available, otherwise use placeholder
  const productImages = product.image 
    ? [
        { src: product.image, alt: product.name },
        { src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop", alt: `${product.name} detail 1` },
        { src: "https://images.unsplash.com/photo-1523398002811-999ca8dec4f6?q=80&w=1200&auto=format&fit=crop", alt: `${product.name} detail 2` },
      ]
    : [
        { src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop", alt: product.name },
        { src: "https://images.unsplash.com/photo-1523398002811-999ca8dec4f6?q=80&w=1200&auto=format&fit=crop", alt: `${product.name} detail 1` },
        { src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop", alt: `${product.name} detail 2` },
      ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/med-za-potenciju-com-logo.webp" alt="Med za potenciju" className="h-12 w-auto" />
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/">Početna</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>
        <Link
          href="/shop"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Kupi sada
        </Link>
      </header>

      <Product01
        brand="VitaVital"
        title={product.name}
        price={product.price}
        compareAt={Math.round(comparePrice)}
        currency={currency}
        rating={product.rating}
        reviewCount={Math.floor(Math.random() * 300) + 50}
        description={product.description}
        badge={product.badge}
        addToCartLabel="Dodaj u korpu"
        buyNowLabel="Kupi odmah"
        as="h1"
        images={productImages}
        colors={[]}
        sizes={[]}
        labels={{
          color: "Varijanta",
          size: "Pakovanje",
          sizeGuide: "Pogledaj veličine",
          reviews: "recenzija",
          inStock: "Na stanju, spremno za slanje",
          save: "Ušteda {percent}%",
          freeShipping: "Besplatna dostava",
          returns: "30 dana za povrat",
          decreaseQuantity: "Umanji količinu",
          increaseQuantity: "Uvećaj količinu",
          addToWishlist: "Dodaj na listu želja",
        }}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">O proizvodu</h2>
            <p className="mt-2 text-slate-600">{product.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">Kategorija</p>
              <p className="mt-2 text-lg font-bold">{product.category}</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">Ocena</p>
              <p className="mt-2 text-lg font-bold">★ {product.rating} / 5.0</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">Dostupnost</p>
              <p className="mt-2 text-lg font-bold text-emerald-600">Na stanju</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
        >
          ← Nazad na shop
        </Link>
      </section>
    </main>
  );
}
