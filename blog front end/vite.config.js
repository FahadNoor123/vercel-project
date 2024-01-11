// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';


export default defineConfig({

  server: {
    proxy: {
      '/apis': {
        target:'https://vercel-project-backend.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});
