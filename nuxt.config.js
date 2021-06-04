import shrinkRay from "shrink-ray-current";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "anime-quotes",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-compress"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "Quokka",
      short_name: "Quokka",
      lang: "en",
      display: "standalone",
      start_url: "/",
      background_color: "#949996",
      theme_color: "#a3acb5",
      description: "Anime Quotes",
      icons: [
        {
          src: "icos/48.png",
          sizes: "48x48",
          type: "image/png"
        },

        {
          src: "icos/96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "icos/144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "icos/168.png",
          sizes: "168x168",
          type: "image/png"
        },
        {
          src: "icos/192.png",
          sizes: "192x192",
          type: "image/png"
        }
      ]
    },
    workbox: {
      globPatterns: ["**/*.{js,css}", "**/img/*"],
      skipWaiting: true,
      cleanupOutdatedCaches: true,
      offlineStrategy: "networkFirst",
      offlinePage: "/offline.html",
      runtimeCaching: [
        {
          urlPattern: "https://animechan.vercel.app/api/available.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: "https://animechan.vercel.app/api/quotes/anime.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        },
        {
          urlPattern: "https://animechan.vercel.app/api/quotes/character.*",
          handler: "cacheFirst",
          method: "GET",
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
        }
      ]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {},

  render: {
    compressor: shrinkRay()
  }
};
