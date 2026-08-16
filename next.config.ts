import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * Sadržaj se čita sa fajl sistema u trenutku izvršavanja (Keystatic reader),
   * a ne kroz `import`. Tragač zavisnosti zato ne vidi `content/` i ne spakuje
   * ga u serversku funkciju — statične stranice rade jer su napravljene pri
   * buildu, ali server akcija za porudžbinu na produkciji dobije prazan katalog
   * i odbije svaku porudžbinu porukom „Korpa je prazna".
   *
   * `/*` pokriva rute u korenu, `/**` i one ugnežđene — checkout je u korenu,
   * ali root layout čita katalog i za dinamičke rute poput /keystatic.
   */
  outputFileTracingIncludes: {
    "/*": ["./content/**/*"],
    "/**": ["./content/**/*"],
  },
};

export default nextConfig;
