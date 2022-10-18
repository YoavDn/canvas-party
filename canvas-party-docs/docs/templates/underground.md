# Underground

The underground type doe's not have an options object.
passing the options object will not work.

### Example of Underground canvas with react

```jsx
import CanvasParty from '@canvas-party/react'

function reactApp() {
  const canvasType = 'underground'

  return (
    <div>
      <CanvasParty type={canvasType} />
    </div>
  )
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
    :type="'underground'"
    >

  </component>
