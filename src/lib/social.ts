/**
 * Profili na društvenim mrežama. Prazan string znači „nemamo još adresu" — footer
 * tada ne iscrtava taj link. Mrtav link u footeru prodavnice čini više štete nego
 * njegovo odsustvo, pa se ovde upisuje tek stvarna adresa.
 */
export const SOCIAL_LINKS: { name: string; url: string }[] = [
  { name: "Facebook", url: "" },
];

export const ACTIVE_SOCIAL_LINKS = SOCIAL_LINKS.filter((link) => link.url !== "");
