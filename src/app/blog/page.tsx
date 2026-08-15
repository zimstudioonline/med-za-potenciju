import Link from "next/link";
import { blogPosts } from "@/data/catalog";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/med-za-potenciju-com-logo.webp" alt="Med za potenciju" className="h-12 w-auto" />
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/">Početna</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog" className="text-slate-950">
            Blog
          </Link>
          <Link href="/contact">Kontakt</Link>
        </nav>
        <Link
          href="/shop"
          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:border-slate-400"
        >
          Pogledaj proizvode
        </Link>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">Blog</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Svi tekstovi na jednom mestu — pretražite po temama ili prelistajte najnovije.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                {/* Image */}
                {post.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="size-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="space-y-3 p-5">
                  {/* Category badge */}
                  <div className="inline-flex">
                    <span 
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${post.categoryColor || 'bg-slate-400'}`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Date */}
                  <p className="text-xs font-medium text-slate-500">{post.date}</p>

                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:underline">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm leading-6 text-slate-600">{post.excerpt}</p>

                  {/* Read time */}
                  <p className="pt-2 text-xs text-slate-500">{post.readTime}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
