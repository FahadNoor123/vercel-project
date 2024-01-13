// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';


export default defineConfig({

  server: {
    proxy: {
      '/api': {
        target: 'https://vercel-project-backend.vercel.app/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
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
