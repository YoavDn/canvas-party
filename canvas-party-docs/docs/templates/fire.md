# Fire

### Example of Fire canvas with react

```jsx
import { useState } from 'react'
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const [canvasType, setCanvasType] = useState('fire')
  const [canvasOptions, setCanvasOptions] = useState({ azula: false })

  return <CanvasParty type={canvasType} options={canvasOptions} />
}
export default reactApp
```

### **Result**

<script>
  import {shallowRef, onMounted, ref, reactive, computed} from 'vue'
  
export default {
  setup () {
    const options = reactive({azula: false})
  const btnTitle = computed(() => options.azula ? 'Azula' : 'Default') 
  const type = ref('fire')
    const dynamicComponent = shallowRef(false) 
    onMounted(() => {
      import('@canvas-party/vue').then((module) => {
        dynamicComponent.value = module.default
        })

    })

  
  const setAzula = () => options.azula = !options.azula 

    return {
      btnTitle,
      setAzula,
      options,
      type,
      dynamicComponent
    }
  }
  
}
</script>

<button class="azula-btn" :class="[options.azula && 'azula']" @click="setAzula">{{btnTitle}}</button>
<component
   class="canvas-example" 
    v-if="dynamicComponent"
    :is="dynamicComponent"
    :type="type"
    :options="options"
    >

  </component>

<style>
  .azula-btn {
    font-weight: 700;
    font-size: 1rem;
    padding: .3rem 1rem;
    border: solid 1px  var(--vp-c-brand);
    border-radius: 10px;
  }

  .azula {
    border: solid 1px  var(--vp-c-indigo);
  }
  </style>
