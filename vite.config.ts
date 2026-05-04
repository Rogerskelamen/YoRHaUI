import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(__dirname, 'playground'),
  plugins: [vue()],
  resolve: {
    alias: {
      'yorha-ui': resolve(__dirname, 'packages/yorha-ui'),
      '@yorha-ui/components': resolve(__dirname, 'packages/components'),
      '@yorha-ui/utils': resolve(__dirname, 'packages/utils'),
    },
  },
});
