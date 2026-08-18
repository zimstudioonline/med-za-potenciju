/**
 * Ubacuje JSON-LD u HTML stranice.
 *
 * Podaci se serijalizuju na serveru i završe u HTML-u koji stiže pretraživaču —
 * zato ovde stoji `dangerouslySetInnerHTML`, a ne `<script>{...}</script>`: React
 * bi u drugom slučaju eskejpovao navodnike i izlaz ne bi bio validan JSON.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
