"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

/**
 * Traka za saglasnost sa kolačićima.
 *
 * Izbor se pamti u `localStorage`, a ne u kolačiću: sam zapis o saglasnosti ne
 * mora da putuje do servera, pa nema razloga da opterećuje svaki zahtev.
 *
 * Verzija je deo zapisa — kada se skup kolačića promeni, dovoljno je podići
 * `CONSENT_VERSION` da bi se saglasnost ponovo zatražila od svih posetilaca.
 */
export const CONSENT_KEY = "mzp-cookie-consent";
export const CONSENT_VERSION = 1;

export type ConsentChoice = "all" | "necessary";

type StoredConsent = {
  choice: ConsentChoice;
  version: number;
  date: string;
};

export function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;
    return parsed.version === CONSENT_VERSION ? parsed : null;
  } catch {
    // Neispravan ili nedostupan localStorage — ponašamo se kao da izbora nema.
    return null;
  }
}

/*
 * Vidljivost trake je stanje van Reacta: čita se iz localStorage-a, a menja je i
 * dugme sa stranice sa podešavanjima. Zato ide kroz `useSyncExternalStore` —
 * server uvek vidi „sakriveno", pa se prvi render poklapa sa HTML-om sa servera.
 */
const listeners = new Set<() => void>();
let forcedOpen = false;

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): "visible" | "hidden" {
  return forcedOpen || !readConsent() ? "visible" : "hidden";
}

function getServerSnapshot(): "visible" | "hidden" {
  return "hidden";
}

/** Ponovo otvara traku, bez obzira na ranije sačuvan izbor. */
export function openCookieConsent() {
  forcedOpen = true;
  emit();
}

function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ choice, version: CONSENT_VERSION, date: new Date().toISOString() }),
    );
  } catch {
    // Ako je čuvanje onemogućeno, traka se sklanja bar za ovu posetu.
  }
  forcedOpen = false;
  emit();
}

export function CookieConsent() {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (state === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-label="Saglasnost za kolačiće"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur md:p-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-muted-foreground">
          Koristimo kolačiće neophodne za rad sajta i korpe. Opcione kolačiće za analitiku i marketing
          koristimo samo uz vašu saglasnost.{" "}
          <Link
            href="/podesavanja-kolacica"
            className="font-medium text-blue-700 underline underline-offset-2 hover:no-underline dark:text-blue-400"
          >
            Više o kolačićima
          </Link>
        </p>

        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => saveConsent("necessary")}
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold transition hover:bg-muted"
          >
            Samo neophodni
          </button>
          <button
            type="button"
            onClick={() => saveConsent("all")}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Prihvati sve
          </button>
        </div>
      </div>
    </div>
  );
}

/** Dugme na stranici sa podešavanjima — ponovo otvara traku sa izborom. */
export function CookieConsentReopen() {
  return (
    <button
      type="button"
      onClick={openCookieConsent}
      className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
    >
      Promeni izbor kolačića
    </button>
  );
}
