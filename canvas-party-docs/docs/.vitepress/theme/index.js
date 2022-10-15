// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './tamplate.css'
import CanvasParty from '@canvas-party/vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(CanvasParty)
  },
}
