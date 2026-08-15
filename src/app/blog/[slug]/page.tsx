import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/catalog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-2xl font-black tracking-tight">
          VitaVital
        </Link>
        <Link href="/blog" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
          ← Nazad na blog
        </Link>
      </header>

      <article className="mx-auto max-w-4xl px-6 pb-20 pt-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-slate-600">Autor: {post.author}</p>

        <div className="mt-10 rounded-[28px] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-[1px] shadow-lg shadow-emerald-200/50">
          <div className="h-56 rounded-[27px] bg-slate-900/80" />
        </div>

        <div className="prose prose-slate mt-10 max-w-none text-lg leading-8 text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="mb-5">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
