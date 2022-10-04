# CanvasParty  with Vue

to add canvasParty element to your Vue appliction first install the `@canvas-party/vue` package that serve as a wraper for the canvasElement
and add is as plugin in the `main.js` file.



To get started run this command in the terminal 
```bash 
$ npm install @canvas-party/vue
```

to add canvasParty globaly as a plugin.
```js 
import { createApp } from 'vue'
import './style.css'
import CanvasParty from '@canvas-party/vue'
import App from './App.vue'

const app = createApp(App)

app.use(CanvasParty)
app.mount('#app')
```

Adding your first canvas in Vue 

```vue 
<script setup lang="ts">
import {ref, reacitve} from 'vue'

const canvasType = ref('confetti')
const canvasOptions = reactive({
    colors: ['#399E5A','#5ABCB9','#63E2C6'],
    count: 350
})
</script>

<template>
  <CanvasParty class="canvas-bg" :type="canvasType" :options="options" />
</template>
```

**And that's it!**