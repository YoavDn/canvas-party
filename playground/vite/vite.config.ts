import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@canvas-party': resolve(__dirname, '../../packages/core/src/index.ts'),
    },
  },
})
