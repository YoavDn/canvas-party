# Fire

### Example of Fire canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('fire')

  return <CanvasParty type={canvasType} />
}
export default reactApp
```

### **Result**

<script>
  import {shallowRef, onMounted, ref} from 'vue'
export default {
  setup () {
    const isAzula = ref(true)
    const dynamicComponent = shallowRef(false) 
    onMounted(() => {
      import('@canvas-party/vue').then((module) => {
        dynamicComponent.value = module.default
        console.log(this.dynamicComponent)
        })

    })

  const setAzula = () => {
    console.log('hi')
    isAzula.value = true
  }

    return {
      setAzula,
      isAzula,
      dynamicComponent
    }
  }
  
}
</script>

<button @click="setAzula">Azula</button>
<component
   class="canvas-example" 
    v-if="dynamicComponent"
    :is="dynamicComponent"
    :type="'fire'"
    :options="{azula: isAzula}"
    >

  </component>
