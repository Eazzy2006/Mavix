import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './', // Explicit root
  build: {
    outDir: './dist', // Outputs to /mavix/dist
    emptyOutDir: true,
  },
  plugins: [react()],
})