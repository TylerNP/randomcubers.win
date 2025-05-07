import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: 'src/main.tsx',   // or app.tsx depending on your entry
      formats: ['es'],
      fileName: () => 'index.js',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'index.js',
        manualChunks: undefined,
      },
    },
    minify: true,
    emptyOutDir: true,
  },
  plugins: [react()],
})
