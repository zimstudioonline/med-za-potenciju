import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { blogPosts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "Blog — saveti o energiji, snu i vitalnosti",
  description:
    "Tekstovi o snu, ishrani i navikama koje utiču na energiju, libido i opštu vitalnost, kao i vodič kroz Q4You Fortissimo.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10">
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">Blog</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Svi tekstovi na jednom mestu — prelistajte najnovije ili pronađite temu koja vas zanima.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                {/* Image */}
                {post.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
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
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white ${post.categoryColor || "bg-muted-foreground"}`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Date */}
                  <p className="text-xs font-medium text-muted-foreground">{post.date}</p>

                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight group-hover:underline">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm leading-6 text-muted-foreground">{post.excerpt}</p>

                  {/* Read time */}
                  <p className="pt-2 text-xs text-muted-foreground">{post.readTime}</p>
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
