import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',  // Important: matches your GitHub Pages subdirectory
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
