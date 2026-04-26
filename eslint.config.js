import vue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

// TODO: make eslint compatible with vitepress
export default [
  // 1. ignores
  {
    ignores: [
      'dist',
      'node_modules',
      'docs/.vitepress/dist'
    ]
  },

  // 2. TS strict rules
  ...tseslint.configs.strict,

  // 3. Vue rules
  ...vue.configs['flat/recommended'],

  // 4. Vue enhanced rules (about component)
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/no-v-html': 'warn'
    }
  },

  // 5. TS + Vue override (script setup)
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  }
];
