# Starfield

The starfield type doe's not have an options object.
passing the options object will not work.

### Example of starfield canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('starfield')

  return <CanvasParty type={canvasType} />
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
    :type="'starfield'"
    >

  </component>
