import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import Prettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  eslintPluginPrettierRecommended,
  Prettier,
  {
    files: ['**/*.{js,mjs,cjs,ts,vue,json}'],
    rules: {
      'no-console': 'error',
      'no-debugger': 'warn',
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.es2016, ...globals.node },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    rules: {
      'vue/multi-word-component-names': ['error', { ignores: ['app.example'] }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/require-default-prop': 'off',
    },
  },
  {
    ignores: ['**/dist/*'],
  },
]
