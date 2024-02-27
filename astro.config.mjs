import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  /* Internacionalización (idiomas) */
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // es -> /     en -> /en ///// si lo pongo en true-> es -> /es     en -> /en
    },
  },
});
