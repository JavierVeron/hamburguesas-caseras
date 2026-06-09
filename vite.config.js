import { defineConfig } from 'vite'

export default defineConfig({
  base: '/hamburguesas-caseras/',
  test: {
    environment: 'jsdom',
  },
})
