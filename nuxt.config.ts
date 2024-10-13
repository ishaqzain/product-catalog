// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'https://fakestoreapi.com',
    }
  },
  modules: ['@pinia/nuxt'],
  css: ['@/assets/css/main.css'],
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in'
    }
  },
})
