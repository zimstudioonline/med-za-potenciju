import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { type BlogPost, findCategory } from "@/data/catalog";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog — potencija, muško seksualno zdravlje i dodaci ishrani",
  description:
    "Tekstovi o potenciji i erekciji, muškom seksualnom zdravlju, dodacima ishrani na bazi meda i o biljnim sastojcima koji se koriste u suplementima.",
  alternates: { canonical: "/blog" },
};

/**
 * Naslovna slika preko cele širine, pa red sa pilulom kategorije i datumom, pa
 * naslov i uvod. Okvir seče sliku (`overflow-hidden`), a unutrašnji razmak stoji
 * na sadržaju, ne na kartici.
 */
function PostCard({ post }: { post: BlogPost }) {
  const category = findCategory(post.category);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
    >
      {post.image && (
        <img src={post.image} alt={post.title} className="aspect-[16/10] w-full object-cover" />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              category?.pill ?? "bg-muted text-muted-foreground"
            }`}
          >
            {post.category}
          </span>
          <span className="text-sm text-muted-foreground tabular-nums">{post.date}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-7 tracking-tight group-hover:text-primary">
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>

        {/* `mt-auto` drži potpis na dnu, pa se donje ivice kartica poravnaju. */}
        <p className="mt-auto pt-4 text-xs text-muted-foreground">
          {post.author} · {post.readTime}
        </p>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <h1 className="text-5xl font-black tracking-tight md:text-6xl">Blog</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
          Svi tekstovi na jednom mestu — prelistajte najnovije ili pronađite temu koja vas zanima.
        </p>
      </section>

      {/*
       * Jedan grid svih tekstova, bez grupisanja po kategorijama. Kategorija je i
       * dalje vidljiva, ali kao pilula na kartici — tako najnoviji tekst uvek stoji
       * prvi, umesto da zavisi od toga u kojoj je grupi.
       */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
