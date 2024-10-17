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
        {
          property: 'google-site-verification',
          content: 'kWEdRPzLf8owgliBWrA2EkB8Ra6ZAYTrucZz45dlc2g',
        },
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
        {
          hid: 'author',
          name: 'author',
          content: 'Gonzalo Espindola',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'fondos animados, diseño de fondos, personalización, modern backgrounds, css bakcgrounds, css backgrounds, backgrounds, background, css background, background generator, generator, design, design background, design backgrounds, generate background, generate backgrounds, create background, create backgrounds, crear background con css, personalizar background con css, crear fondo con css, crear fondos con css, crear background con css3, crear backgrounds con css3, crear fondo con css3, crear fondos con css3, crear background con css3, crear backgrounds con css3, crear fondo con css3, crear fondos con css3',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'index',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '32x32',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          sizes: '16x16',
          href: '/favicon.ico',
        },
      ],
    },
  },
})
