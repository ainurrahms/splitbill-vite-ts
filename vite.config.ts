import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  manifest: {
    name: 'Split Bill',
    short_name: 'Split Bill',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/split-billx128.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/split-billx512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/split-billx512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
};

export default defineConfig({
  base: './',
  plugins: [react(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
