# Confetti

The confetti type support options object for extra configuration.
not passing the options object will results the default Confetti template

### Example of confetti canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('confetti')
  const [canvasOptions, setCanvasOptions] = useState({
    colors: ['#ffd60a', '#ffc300', '#aacc00'],
    count: 400,
  })

  return <CanvasParty type={canvasType} options={canvasOptions} />
}
export default reactApp
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
    :options="{colors: ['#ffd60a', '#ffc300', '#aacc00'], count: 400}"
    >

  </component>
