import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel expects this
    assetsDir: 'assets',
    sourcemap: false, // Disable in production for security and smaller bundles
    minify: 'esbuild', // Faster minification
  },
  server: {
    port: 3000,
    open: true, // Open browser on dev
  },
});