import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://astro-starter.pages.dev",
    scopedStyleStrategy: "class",
    security: {
        checkOrigin: true,
    },
    build: {
        assets: "assets",
        inlineStylesheets: "never",
    },
    prefetch: {
        prefetchAll: false,
        defaultStrategy: "load",
    },
    i18n: {
        defaultLocale: "es",
        locales: ["es"],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    output: "server",
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
});
