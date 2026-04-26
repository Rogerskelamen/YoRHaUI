import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'playground'),
  plugins: [vue()],
  resolve: {
    alias: {
      '@yorha-ui': resolve(__dirname, 'packages')
    }
  }
});
