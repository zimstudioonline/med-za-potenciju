/**
 * Stanje kontakt forme, odvojeno od akcije.
 *
 * Ne sme u `contact.ts`: fajl sa "use server" izvozi isključivo async funkcije.
 * Ista greška je već jednom oborila checkout — vidi `order-state.ts`.
 */
export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
};

export const INITIAL_CONTACT_STATE: ContactState = { status: "idle", message: "" };
