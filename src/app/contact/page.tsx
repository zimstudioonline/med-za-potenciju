import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { ContactForm } from "./contact-form";
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

          <ContactForm />

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
