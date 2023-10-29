export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  env: {
    baseUrl: process.env.BASE_URL,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtproject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'update',
        path: '/restaurantdata/update-restaurant/:id',
        component: resolve(__dirname, 'pages/restaurantdata/update-restaurant.vue'),
      });
    },  
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   '@/assets/customcss/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/toasted.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  store: 'store',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseUrl: process.env.BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
