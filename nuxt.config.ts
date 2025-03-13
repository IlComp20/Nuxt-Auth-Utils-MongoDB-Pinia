// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // srcDir Because i have modified the srcDir, the path to the components directory is now src/app/components
  srcDir: "app/",
  // Modules
  modules: [
    "@nuxt/ui",
    "nuxt-auth-utils",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/robots",
    "@nuxt/image",
    "nuxt-security",
  ],
  security: {
    headers: {
      contentSecurityPolicy: {
        //"default-src": ["*"],
        //'script-src': ["*"],
        //'style-src': ["*"],
        //"img-src": ["*"],
        //"connect-src": ["*"],
        //'font-src': ["*"],
        //'object-src': ["*"],
        //'frame-src': ["*"],
        "default-src": ["'self'"],
        "img-src": ["'self'", "data:", "https://lh3.googleusercontent.com"],
        "connect-src": ["'self'", "https://api.iconify.design"],
      },
    },
  },
  // Ssr
  ssr: false,
  // Redirect
  routeRules: {
    "/": { redirect: "/login" },
  },
  // Auto import
  imports: {
    autoImport: true,
  },
  // Components
  components: [
    {
      path: "app/components",
      pathPrefix: false,
    },
  ],
  // Theme
  colorMode: {
    preference: "system",
    fallback: "dark",
    storageKey: "nuxt-color-mode",
  },
  compatibilityDate: "2024-11-01",
  // devtools
  devtools: { enabled: true },
  // Google Login
  runtimeConfig: {
    oauth: {
      google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      },
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "it", // Imposta la lingua italiana
      },
      title: "",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "",
        },
        { name: "theme-color", content: "#000000" },
      ],
      // Aggiungi il link al font Google
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i",
        },
      ],
    },
  },
});
