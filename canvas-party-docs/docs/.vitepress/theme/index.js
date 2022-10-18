// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './template.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {},
}
