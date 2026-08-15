import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    // Keep the warning useful while allowing the current animation stack.
    // This does not increase the bundle size; it only adjusts the warning threshold.
    chunkSizeWarningLimit: 600,
  },
})
