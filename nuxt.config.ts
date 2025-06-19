

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY, // Solo accesible en el backend
    public: {
      stripePublicKey: process.env.STRIPE_PUBLIC_KEY, // Disponible en frontend
      baseUrl:''
    }
  }
})