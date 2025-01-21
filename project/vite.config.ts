// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Replace with your actual repo name
  base: '/vite-react-typescript-starter/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
