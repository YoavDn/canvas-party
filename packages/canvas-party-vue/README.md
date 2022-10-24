# CanvasParty with Vue

To add canvasParty to your Vue application first install the `@canvas-party/vue` package, then
add it as a plugin in the `main.js` file.

To get started run this command in the terminal

```bash
$ npm install @canvas-party/vue
```

To add canvasParty component globally.

```js
import { createApp } from "vue"
import "./style.css"
import CanvasParty from "@canvas-party/vue"
import App from "./App.vue"

const app = createApp(App)

app.component("canvas-party", CanvasParty)
app.mount("#app")
```

Adding your first canvas in Vue

```vue
<script setup>
import { ref, reactive } from "vue"

const canvasType = ref("confetti")
const canvasOptions = reactive({
  colors: ["#399E5A", "#5ABCB9", "#63E2C6"],
  count: 350,
})
</script>

<template>
  <div>
    <canvas-party :type="canvasType" :options="options" />
  </div>
</template>
```
