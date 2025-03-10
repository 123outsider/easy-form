import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pkgRoot } from '@easy-form/build-utils'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^easy-form\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
    ],
  },
})
