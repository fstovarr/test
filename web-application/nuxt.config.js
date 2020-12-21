const colors = require("vuetify/es5/util/colors").default;

module.exports = {
  mode: "universal",
  /*
   * Environment variables
   */
  env: {
    NUXT_PORT: process.env.API_PORT || "5555",
    apiHost: process.env.API_PORT || "8080",
    apiUrl: process.env.API_HOST || "api-gateway",
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s | Torre",
    title: "Torre" || process.env.npm_package_name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "green" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/global.js",
    "~/plugins/validators.js",
    "~/plugins/moment.js",
    "~/plugins/init-axios.client.js",
    "~/plugins/guard.js",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
    "@nuxtjs/vuetify",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "nuxt-i18n",
    ["cookie-universal-nuxt", { alias: "cookiz" }],
  ],
  i18n: {
    locales: [
      { code: "es", name: "spanish", flag: "es", file: "es.js" },
      { code: "en", name: "english", flag: "gb", file: "en.js" },
    ],
    defaultLocale: "es",
    vueI18nLoader: true,
    lazy: true,
    langDir: "locales/",
    vueI18n: {
      fallbackLocale: "es",
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    host: process.env.API_HOST || "api-gateway",
    port: process.env.API_PORT || "8080",
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ["vee-validate/dist/rules"],
    extend(config, ctx) {
      config.node = {
        fs: "empty",
      };
    },
  },
};
