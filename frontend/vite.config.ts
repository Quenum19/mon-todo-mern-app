import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic'
  })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
})