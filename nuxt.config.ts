// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/styles/main.css'],
  app: {
    head: {
      title: 'AniBackground',
      htmlAttrs: {
        lang: 'es',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { property: 'og:title', content: 'AniBackground' },
        {
          property: 'og:description',
          content: 'Crea tus propios fondos animados modernos',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Crea tus propios fondos animados modernos',
        },
      ],
    },
  },
})
