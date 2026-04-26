// TODO: bundling job
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'packages/yorhaui/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      formt: 'es'
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs'
    }
  ],
  plugins: [
    vue(),
    typescript()
  ],
  external: ['vue']
};
