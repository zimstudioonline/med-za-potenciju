import Link from "next/link";
import { blogPosts } from "@/data/catalog";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-black tracking-tight">
          VitaVital
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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Blog</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Saveti za energiju, san i seksualnu vitalnost</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Uvek praktični saveti koji pomažu da svakodnevno osećate više energije, ravnoteže i samopouzdanja.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6 pb-20">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="text-2xl font-black tracking-tight md:text-3xl">{post.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{post.excerpt}</p>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">Autor: {post.author}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Pročitaj članak
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
