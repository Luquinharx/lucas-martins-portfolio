import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  // Allow importing image files with uppercase extension (e.g. .PNG)
  assetsInclude: ["**/*.PNG"],
=======
<<<<<<< HEAD
  // Allow importing image files with uppercase extension (e.g. .PNG)
  assetsInclude: ["**/*.PNG"],
=======
>>>>>>> da6cb79b05b53c7f5740e9c2b336712ed7c0ab6f
>>>>>>> 9f4702d1b1db3b4cf1023039a08f9deb072b13f9
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
