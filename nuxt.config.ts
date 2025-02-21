// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // srcDir Because i have modified the srcDir, the path to the components directory is now src/app/components
  srcDir: "app/",
  modules: [
    "@nuxt/ui",
    "nuxt-auth-utils",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxt/icon",
  ],
  imports: {
    autoImport: true,
  },
  routeRules: {
    "/": { redirect: "/login" },
  },
  components: [
    {
      path: "app/components",
      pathPrefix: false,
    },
  ],
  colorMode: {
    preference: "system", // or 'dark'
    fallback: "dark",
    storageKey: "nuxt-color-mode",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
