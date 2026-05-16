import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    svgr()
  ],
})
