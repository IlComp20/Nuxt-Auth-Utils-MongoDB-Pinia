// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // srcDir Because i have modified the srcDir, the path to the components directory is now src/app/components
  srcDir: "app/",
  modules: ["@nuxt/ui", "nuxt-auth-utils", "@vueuse/nuxt", "@pinia/nuxt"],
  imports: {
    autoImport: true,
  },
  components: [
    {
      path: "app/components",
      pathPrefix: false,
    },
  ],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
