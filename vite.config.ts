import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Allow importing image files with uppercase extension (e.g. .PNG)
  assetsInclude: ["**/*.PNG"],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
