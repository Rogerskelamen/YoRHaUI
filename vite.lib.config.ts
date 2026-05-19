import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['packages', 'typings'],
      exclude: ['playground'],
    }),
  ],

  resolve: {
    alias: {
      'yorha-ui': resolve(__dirname, 'packages/yorha-ui'),
      '@yorha-ui/components': resolve(__dirname, 'packages/components'),
      '@yorha-ui/utils': resolve(__dirname, 'packages/utils'),
    },
  },

  build: {
    outDir: 'dist',

    lib: {
      entry: resolve(__dirname, 'packages/yorha-ui/index.ts'),
      name: 'YoRHaUI',
      fileName: (format) => {
        switch (format) {
          case 'es':
            return 'index.esm.js';

          case 'cjs':
            return 'index.cjs.js';

          default:
            return `index.${format}.js`;
        }
      },
      formats: ['es', 'cjs'],
    },

    rollupOptions: {
      external: ['vue'],

      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
