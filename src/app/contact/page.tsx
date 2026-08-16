import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Pitanja o proizvodu, porudžbini ili dostavi? Pišite na kontakt@medzapotenciju.com ili nas pozovite na +381 63 342 3800, svakog dana od 10 do 20 časova.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Kontaktirajte nas
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Imate pitanje? Slobodno nam se obratite — odgovorićemo vam u roku od 24 časa.
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
                className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Tema poruke"
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
                className="mt-2 w-full rounded-lg border border-input bg-card px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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

          <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="mt-2 text-muted-foreground">
                <a href="mailto:kontakt@medzapotenciju.com" className="hover:underline text-primary">
                  kontakt@medzapotenciju.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Telefonski broj</h3>
              <p className="mt-2 text-muted-foreground">
                <a href={PHONE_HREF} className="hover:underline text-primary">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
