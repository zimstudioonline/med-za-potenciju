import Link from "next/link";
import { featuredProducts } from "@/data/catalog";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-black tracking-tight">
          VitaVital
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/">Početna</Link>
          <Link href="/shop" className="text-slate-950">
            Shop
          </Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>
        <Link
          href="/shop"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
        >
          Korpa (0)
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <div className="rounded-[32px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[1px] shadow-lg shadow-emerald-200/60">
          <div className="rounded-[31px] bg-[#f7f7f5] px-10 py-12 md:px-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Wellness shop
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Suplementi za energiju, san i svakodnevnu vitalnost.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Odaberite formule koje podržavaju fokus, imunitet i kvalitet seksualnog zdravlja bez komplikovanih rutina.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Katalog</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight">Najpopularniji proizvodi</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              {product.image ? (
                <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
              ) : (
                <div className={`h-40 bg-gradient-to-br ${product.accent}`} />
              )}
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                    {product.badge}
                  </span>
                  <span className="text-sm font-medium text-amber-500">★ {product.rating}</span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">
                    <Link href={`/shop/${product.slug}`} className="hover:underline">
                      {product.name}
                    </Link>
                  </h3>
                </div>

                <p className="text-sm leading-6 text-slate-600">{product.description}</p>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-2xl font-black">€{product.price}</p>
                  <button className="rounded-full bg-slate-900 px-6 py-1 text-sm font-semibold text-white transition hover:bg-slate-700">
                    Dodaj u korpu
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
