# Fireworks

The fireworks type support a options object for extra configuration.
not passing the options object will results the default fireworks template

### Example of confetti canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('fireworks')
  const [canvasOptions, setCanvasOptions] = useState({
    colors: ['#ABDF75', '#DB5461', '#FDE74C'],
    count: 60,
  })

  return <CanvasParty type={canvasType} options={canvasOptions} />
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
    :type="'fireworks'"
    >

  </component>
