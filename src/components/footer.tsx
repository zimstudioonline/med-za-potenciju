"use client";

import Link from "next/link";

/** Mirrors the categories actually used by posts in the catalog. */
const FOOTER_TOPICS = ["Zdravlje", "Rutina", "Nutricionizam", "Proizvodi"];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-white">Med za potenciju</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Vaš vodič ka zdravijem i kvalitetnijem životu — saveti o zdravlju, ishrani i navikama
              koje utiču na energiju i vitalnost.
            </p>
          </div>

          {/* Kategorije */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Teme</h4>
            <nav className="space-y-2 text-sm">
              {FOOTER_TOPICS.map((topic) => (
                <Link
                  key={topic}
                  href="/blog"
                  className="block text-slate-400 transition hover:text-white"
                >
                  {topic}
                </Link>
              ))}
              <Link href="/blog" className="inline-flex items-center gap-1 text-primary hover:underline">
                Sve teme →
              </Link>
            </nav>
          </div>

          {/* Navigacija */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Navigacija</h4>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block text-slate-400 transition hover:text-white">
                Početna
              </Link>
              <Link href="/blog" className="block text-slate-400 transition hover:text-white">
                Blog
              </Link>
              <Link href="/shop" className="block text-slate-400 transition hover:text-white">
                Shop
              </Link>
              <Link href="/cart" className="block text-slate-400 transition hover:text-white">
                Korpa
              </Link>
              <Link href="/contact" className="block text-slate-400 transition hover:text-white">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Pravno & Društvene mreže */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-bold text-white">Pravno</h4>
              <nav className="space-y-2 text-sm">
                <Link href="#" className="block text-slate-400 transition hover:text-white">
                  Politika privatnosti
                </Link>
                <Link href="#" className="block text-slate-400 transition hover:text-white">
                  Cookie politika
                </Link>
                <Link href="#" className="block text-slate-400 transition hover:text-white">
                  Disclaimer
                </Link>
                <Link href="#" className="block text-slate-400 transition hover:text-white">
                  Mapa sajta
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-white">Društvene mreže</h4>
              <nav className="space-y-2 text-sm">
                <Link href="#" className="block text-slate-400 transition hover:text-white">
                  Facebook
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-800" />

        {/* Bottom section */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            © 2026 Med za potenciju. Sva prava zadržana.
          </p>
          <button
            onClick={scrollToTop}
            className="flex size-10 items-center justify-center rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
