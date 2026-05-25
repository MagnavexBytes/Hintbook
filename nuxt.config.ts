export default defineNuxtConfig({
  compatibilityDate: '2026-05-25',
  future: {
    compatibilityVersion: 4, // Nuxt 4 принудительно
  },
  modules: ['@nuxtjs/tailwindcss'],
  
  devtools: { enabled: true },
  runtimeConfig: {
    yandexAccessKeyId: process.env.YANDEX_ACCESS_KEY_ID,
    yandexSecretAccessKey: process.env.YANDEX_SECRET_ACCESS_KEY,
    yandexBucketName: process.env.YANDEX_BUCKET_NAME,
    yandexRegion: process.env.YANDEX_REGION,
  }
})
