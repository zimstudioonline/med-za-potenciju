"use client";

import { useActionState } from "react";

import { sendContactMessage } from "@/app/actions/contact";
import { INITIAL_CONTACT_STATE } from "@/app/actions/contact-state";

const FIELD =
  "mt-2 w-full rounded-lg border border-input bg-card px-4 py-2 text-foreground placeholder-muted-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, INITIAL_CONTACT_STATE);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
        <p className="text-4xl" aria-hidden>
          ✓
        </p>
        <h2 className="mt-4 text-2xl font-black tracking-tight">Poruka je poslata</h2>
        <p className="mt-3 leading-7 text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm leading-6"
        >
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Ime i prezime
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-invalid={state.fieldErrors?.name ? true : undefined}
          className={FIELD}
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
          aria-invalid={state.fieldErrors?.email ? true : undefined}
          className={FIELD}
          placeholder="vasa@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Telefonski broj <span className="text-muted-foreground">(opciono)</span>
        </label>
        <input type="tel" id="phone" name="phone" className={FIELD} placeholder="+381 60 123 4567" />
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
          aria-invalid={state.fieldErrors?.subject ? true : undefined}
          className={FIELD}
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
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          className={FIELD}
          placeholder="Napišite vašu poruku..."
        />
      </div>

      {/*
       * Zamka za botove. Sakrivena je od ljudi i od čitača ekrana, a automati je
       * popunjavaju jer čitaju HTML. Ako stigne popunjena, poruka se tiho odbacuje.
       */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Firma</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Šaljemo poruku…" : "Pošalji poruku"}
      </button>
    </form>
  );
}
