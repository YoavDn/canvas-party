// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './tamplate.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {},
}
