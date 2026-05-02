import configPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

// TODO: make eslint compatible with vitepress
export default [
  // 1. Ignores
  {
    ignores: ['dist', 'node_modules', 'docs/.vitepress/**'],
  },

  // 2. TS strict rules
  ...tseslint.configs.strict,

  // 3. Vue rules
  ...pluginVue.configs['flat/recommended'],

  // 4. Vue enhanced rules (about component)
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/no-v-html': 'warn',
    },
  },

  // 5. TS + Vue override (script setup)
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // 6. Prettier
  configPrettier,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  },

  // 7. Import
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          pathGroups: [
            {
              pattern: '@yorha-ui/**',
              group: 'internal',
            },
          ],
          // in alphabetic order
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-duplicates': 'error',
      'import/first': 'error',
    },
  },
];
