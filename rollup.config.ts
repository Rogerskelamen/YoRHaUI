// TODO: bundling job
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';

export default {
  input: 'packages/yorhaui/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      formt: 'es',
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
    },
  ],
  plugins: [vue(), typescript()],
  external: ['vue'],
};
