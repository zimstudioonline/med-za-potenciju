"use server";

import type { ContactState } from "@/app/actions/contact-state";
import { PHONE_DISPLAY } from "@/lib/contact";
import { EmailNotConfiguredError, sendMail } from "@/lib/email";

/** Namerno labav — dovoljno da uhvati greške u kucanju, bez odbijanja ispravnih adresa. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const fieldErrors: Record<string, string> = {};

  const name = text(formData, "name");
  const email = text(formData, "email");
  const phone = text(formData, "phone");
  const subject = text(formData, "subject");
  const message = text(formData, "message");

  if (name.length < 2) fieldErrors.name = "Ime i prezime je obavezno polje.";
  if (!EMAIL_PATTERN.test(email)) fieldErrors.email = "Email adresa nije ispravna.";
  if (subject.length < 2) fieldErrors.subject = "Predmet je obavezno polje.";
  if (message.length < 10) fieldErrors.message = "Poruka je prekratka — napišite bar rečenicu.";

  const problems = Object.values(fieldErrors);
  if (problems.length > 0) {
    return { status: "error", message: problems.join(" "), fieldErrors };
  }

  /*
   * Polje `company` je zamka za botove: pravi posetilac ga ne vidi, pa mora da
   * bude prazno. Popunjeno znači automat — tada se pravimo da je poruka poslata,
   * umesto da mu kažemo šta ga je odalo.
   */
  if (text(formData, "company").length > 0) {
    return { status: "success", message: "Poruka je poslata. Javićemo se u najkraćem roku." };
  }

  const body = [
    "PORUKA SA SAJTA",
    "",
    `  Ime:      ${name}`,
    `  Email:    ${email}`,
    `  Telefon:  ${phone || "—"}`,
    `  Predmet:  ${subject}`,
    "",
    "PORUKA",
    message,
    "",
    `Primljeno: ${new Date().toLocaleString("sr-RS", { timeZone: "Europe/Belgrade" })}`,
  ].join("\n");

  try {
    await sendMail({
      subject: `Poruka sa sajta — ${subject} — ${name}`,
      text: body,
      replyTo: email,
    });
  } catch (error) {
    // Poruka ne sme da nestane samo zato što slanje mejla nije uspelo.
    console.error("[kontakt] slanje mejla nije uspelo:", error);
    console.error(body);

    const reason =
      error instanceof EmailNotConfiguredError
        ? "Slanje poruka još nije podešeno na serveru."
        : "Došlo je do greške pri slanju poruke.";

    return {
      status: "error",
      message: `${reason} Pozovite nas na ${PHONE_DISPLAY} (10–20h) ili pišite direktno na kontakt@medzapotenciju.com.`,
    };
  }

  return {
    status: "success",
    message: "Poruka je poslata. Javićemo se u najkraćem roku, obično u roku od 24 časa.",
  };
}
