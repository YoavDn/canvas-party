# Getting started

::: warning
canvasParty is currently in alpha status. It is already suitable
for out-of-the-box documentation use, but the API may still change between minor releases.
:::

## Installation

If you want to use **CanvasParty** with a JavaScript framework see the [Frameworks](/guide/using-react) section

With npm:

```Bash
$ npm install canvas-party
```

With yarn:

```Bash
$ yarn add canvas-party
```

## Basic usage

to create your first canvas first create a wrapper on witch the canvas element sits in.
then use the `useCanvasParty` function with the "type" of the desired [template](/templates/index), this will return a custom canvas.
The final step is to append the canvas element to the wrapper.

```js
import { useCanvasParty } from 'canvas-party'

const canvasWrapper = document.querySelector('.canvas-wrapper')
const canvasParty = useCanvasParty(canvasWrapper, { type: 'confetti' })

canvasWrapper.appendChild(canvasParty.canvas)
```

## Template customization:

Currently **only** the `confetti` template have customization options, putting a options attributes on other
templates **will not work**

```ts
interface canvasOptions {
  type: templateName
  colors?: string[]
  count?: number
}
```

Example of custom confetti canvas:

```js
const myCustomCanvas = useCanvasParty(canvasWrapper, {
  type: 'confetti',
  colors: ['#A3F7B5', '#EB5160', '#B0F2B4'],
  count: 450,
})
```

### **Result**

<script>
  import {shallowRef, onMounted} from 'vue'
export default {
  setup () {
    const dynamicComponent = shallowRef(null) 
    onMounted(() => {
      import('@canvas-party/vue').then((module) => {
        dynamicComponent.value = module.default
        console.log(this.dynamicComponent)
        })

    })

    return {
      dynamicComponent
    }
  }
  
}
</script>

<component
   class="canvas-example" 
    v-if="dynamicComponent"
    :is="dynamicComponent"
    :type="'confetti'"
    :options="{colors: ['#A3F7B5', '#EB5160', '#B0F2B4'], count: 400}"
    >

  </component>
