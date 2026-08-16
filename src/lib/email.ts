/**
 * Minimal Resend client over fetch — no SDK dependency.
 *
 * Koristi ga i porudžbina i kontakt forma: obe šalju na istu adresu radnje,
 * a adresa pošiljaoca ide u reply-to da se odgovara jednim klikom.
 *
 * Required environment variables:
 *   RESEND_API_KEY     API key from resend.com
 *   ORDER_EMAIL_FROM   verified sender, e.g. "Porudžbine <porudzbine@medzapotenciju.com>"
 *                      (until the domain is verified, "onboarding@resend.dev" works for testing)
 *   ORDER_EMAIL_TO     where orders land; defaults to the shop's address
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export const DEFAULT_ORDER_RECIPIENT = "medzapotencijuonline@gmail.com";

export type SendEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

export class EmailNotConfiguredError extends Error {
  constructor(missing: string) {
    super(`Email nije konfigurisan: ${missing} nije postavljen.`);
    this.name = "EmailNotConfiguredError";
  }
}

export async function sendMail({ subject, text, replyTo }: SendEmailInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ORDER_EMAIL_FROM;
  const to = process.env.ORDER_EMAIL_TO ?? DEFAULT_ORDER_RECIPIENT;

  if (!apiKey) throw new EmailNotConfiguredError("RESEND_API_KEY");
  if (!from) throw new EmailNotConfiguredError("ORDER_EMAIL_FROM");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Resend je odbio zahtev (${response.status}): ${detail.slice(0, 300)}`);
  }
}
