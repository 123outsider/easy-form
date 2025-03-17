import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { pkgRoot, cpRoot } from '@easy-form/build-utils'
import path from 'path'
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: [
      {
        find: /^easy-form\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
      {
        find: /^easy-form(\/(es|lib))?$/,
        replacement: path.resolve(cpRoot, 'index.ts'),
      },
    ],
  },
})
