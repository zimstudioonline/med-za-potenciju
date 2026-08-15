import Link from "next/link";
import { Product01 } from "@/components/sections/product-01";
import { Footer } from "@/components/footer";

export default function Home() {
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
          href="/cart"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Korpa
        </Link>
      </header>

      <Product01
        brand="VitaVital"
        title="PureBalance Pro"
        price={52}
        compareAt={78}
        currency="€"
        rating={4.9}
        reviewCount={214}
        description="Napredna formula za svakodnevnu energiju, fokus i balans bez previše dodataka. Ovaj blend podržava imunitet, vitalnost i samopouzdanje kroz celodnevni ritam."
        badge="Bestseller"
        addToCartLabel="Dodaj u korpu"
        buyNowLabel="Kupi odmah"
        as="h1"
        images={[
          {
            src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop",
            alt: "PureBalance Pro bottle front",
          },
          {
            src: "https://images.unsplash.com/photo-1523398002811-999ca8dec4f6?q=80&w=1200&auto=format&fit=crop",
            alt: "Wellness supplement close up",
          },
          {
            src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
            alt: "Lifestyle shot of natural wellness product",
          },
          {
            src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1200&auto=format&fit=crop",
            alt: "Product on a desk with natural lighting",
          },
        ]}
        colors={[
          { name: "Forest", className: "bg-gradient-to-br from-emerald-600 via-emerald-500 to-lime-300" },
          { name: "Sand", className: "bg-gradient-to-br from-amber-200 via-stone-100 to-orange-300" },
          { name: "Midnight", className: "bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500" },
          { name: "Rose", className: "bg-gradient-to-br from-pink-300 via-rose-200 to-red-300" },
        ]}
        sizes={["S", "M", "L", "XL"]}
        labels={{
          color: "Boja",
          size: "Veličina",
          sizeGuide: "Pogledaj veličinu",
          reviews: "recenzija",
          inStock: "Na stanju, spremno za slanje",
          save: "Ušteda {percent}%",
          freeShipping: "Besplatna dostava",
          returns: "30 dana za povrat",
          secureCheckout: "Sigurno plaćanje",
        }}
      />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Praktični proizvodi", "Dizajnirani za svakodnevnu rutinu i realan efekat."],
            ["Naučno zasnovani saveti", "Blog i preporuke za bolji san, fokus i opštu energiju."],
            ["Bez zbrke", "Jednostavna komunikacija, transparentni sastojci i kvalitet."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[28px] border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 h-12 w-12 rounded-full bg-primary/10" />
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
