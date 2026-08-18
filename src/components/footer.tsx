"use client";

import Link from "next/link";

import { BLOG_CATEGORIES } from "@/data/catalog";
import { ACTIVE_SOCIAL_LINKS } from "@/lib/social";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Main footer content */}
        {/*
         * Četvrta kolona okuplja pravne stranice. Ranije je bila sklonjena jer su
         * joj svi linkovi vodili na href="#" — sada svaki vodi na stranicu koja
         * zaista postoji, a link se dodaje tek kada stranica postoji.
         */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
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
            <h4 className="font-bold text-white">Kategorije</h4>
            <nav className="space-y-2 text-sm">
              {/*
               * Vode na /blog dok stranice po kategoriji ne postoje. Ranije su bila
               * sidra na sekcije, ali blog više nije grupisan po kategorijama, pa bi
               * ta sidra vodila u prazno.
               */}
              {BLOG_CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href="/blog"
                  className="block text-slate-400 transition hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
              <Link href="/blog" className="inline-flex items-center gap-1 text-primary hover:underline">
                Sve kategorije →
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

          {/* Korisni linkovi */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Korisni linkovi</h4>
            <nav className="space-y-2 text-sm">
              <Link
                href="/politika-privatnosti"
                className="block text-slate-400 transition hover:text-white"
              >
                Politika privatnosti
              </Link>
              <Link
                href="/odricanje-od-odgovornosti"
                className="block text-slate-400 transition hover:text-white"
              >
                Disclaimer
              </Link>
              <Link
                href="/partnerska-saradnja"
                className="block text-slate-400 transition hover:text-white"
              >
                Affiliate Disclosure
              </Link>
              <Link
                href="/podesavanja-kolacica"
                className="block text-slate-400 transition hover:text-white"
              >
                Podešavanja kolačića
              </Link>
              <a href="/sitemap.xml" className="block text-slate-400 transition hover:text-white">
                Mapa sajta
              </a>
            </nav>

            {/* Naslov se pojavljuje tek kada postoji bar jedan profil. */}
            {ACTIVE_SOCIAL_LINKS.length > 0 && (
              <div className="space-y-2 pt-4">
                <h4 className="font-bold text-white">Društvene mreže</h4>
                <nav className="space-y-2 text-sm">
                  {ACTIVE_SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener"
                      className="block text-slate-400 transition hover:text-white"
                    >
                      {social.name}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-800" />

        {/* Bottom section */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            <p>© 2026 Med za potenciju. Sva prava zadržana.</p>
            <p className="mt-1">
              Design &amp; SEO by{" "}
              {/* Autorski potpis vodi van sajta, pa ide u novi tab uz rel zbog bezbednosti. */}
              <a
                href="https://zimdigital.rs/"
                target="_blank"
                rel="noopener"
                className="font-medium text-slate-400 underline underline-offset-2 transition hover:text-white"
              >
                ZiM Digital
              </a>
            </p>
          </div>
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
