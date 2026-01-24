import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Permite importar imagens com extensão maiúscula (ex: .PNG)
  assetsInclude: ['**/*.PNG'],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
