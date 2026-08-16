import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PostBody } from "@/components/post-body";
import { findPostBySlug, getPostSlugs } from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await findPostBySlug(slug);

  if (!post) {
    return { title: "Tekst nije pronađen" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await findPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <article className="mx-auto max-w-4xl px-6 pb-20 pt-8">
        <Link
          href="/blog"
          className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Nazad na blog
        </Link>

        <div className="mb-6 mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">Autor: {post.author}</p>

        {post.image && (
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            /* Isti odnos kao na kartici — fiksna visina je sekla ivice slike. */
            className="mt-10 aspect-video w-full rounded-[28px] border border-border object-cover"
          />
        )}

        <PostBody document={post.content} />

        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6">
          <h2 className="text-lg font-bold">Q4You Fortissimo</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Med sa biljnim ekstraktima u kesicama od 7 g. Pogledajte dostupna pakovanja i cene.
          </p>
          <Link
            href="/shop"
            className="mt-4 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Pogledaj proizvode
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
