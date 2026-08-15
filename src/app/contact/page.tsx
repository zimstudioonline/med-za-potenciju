import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Med za potenciju" className="h-12 w-auto" />
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/">Početna</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="text-foreground">
            Kontakt
          </Link>
        </nav>
        <Link
          href="/shop"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
        >
          Kupi sada
        </Link>
      </header>

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Kontaktirajte nas
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Imamo pitanja? Slobodno nam se obratite. Odgovoriće vam u roku od 24 časa.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Ime i prezime
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Vaše ime"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="vasa@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                Telefonski broj
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="+381 60 123 4567"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground">
                Predmet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Vaša poruka"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Poruka
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Napišite vašu poruku..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              Pošalji poruku
            </button>
          </form>

          <div className="grid gap-6 md:grid-cols-2 border-t border-slate-200 pt-8">
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="mt-2 text-muted-foreground">
                <a href="mailto:info@vitavital.rs" className="hover:underline">
                  info@vitavital.rs
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Telefonski broj</h3>
              <p className="mt-2 text-muted-foreground">
                <a href="tel:+381601234567" className="hover:underline">
                  +381 60 123 4567
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
