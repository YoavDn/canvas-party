# Trippy

The trippy type doe's not have an options object.
passing the options object will not work.

### Example of trippy canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('trippy')

  return <CanvasParty type={canvasType} />
}

export default reactApp
```

### **Result**

<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted() {
    import('@canvas-party/vue').then((module) => {
      this.dynamicComponent = module.default
      console.log(this.dynamicComponent)
    })
  }
}
</script>

<component
   class="canvas-example" 
    v-if="dynamicComponent"
    :is="dynamicComponent"
    :type="'trippy'"
    >

  </component>
