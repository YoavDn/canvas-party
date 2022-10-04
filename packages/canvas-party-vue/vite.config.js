import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "canvas-party",
      fileName: (format) => `${format}.js`
    },
    rollupOptions : {
      external: ["vue"],
      output: {

        globals: {
          vue: "Vue"
        },
      },
    },
  },
  plugins: [vue()]
})
