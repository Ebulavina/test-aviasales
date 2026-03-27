import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': resolve(__dirname, 'src/shared'),
      '@entities': resolve(__dirname, 'src/entities'),
      '@features': resolve(__dirname, 'src/features'),
      '@widgets': resolve(__dirname, 'src/widgets'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
})
