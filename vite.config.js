// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Fix: OneDrive holds a sync-lock on .glb files which crashes Vite's
  // file watcher with EBUSY. We simply tell Vite not to watch them.
  server: {
    watch: {
      ignored: ['**/*.glb', '**/*.gltf'],
    },
  },

  // Fix: model-viewer is loaded from CDN (see index.html), so we must
  // tell Vite NOT to try to pre-bundle it as an npm package.
  optimizeDeps: {
    exclude: ['@google/model-viewer'],
  },
})
