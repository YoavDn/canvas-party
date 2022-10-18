---
layout: home
---

<script>
  import {shallowRef, onMounted}from 'vue'
export default {
  setup() {
    const dynamicComponent = shallowRef(null) 

    onMounted(() => {
      import('@canvas-party/vue').then((module) => {
        dynamicComponent.value = module.default
      })
    })

    return {
      dynamicComponent
    }
  }
}
</script>

  <div ref="wrapper" class="bg-wrapper">
  <!-- <CanvasParty class="index-canvas" :type="'confetti'"/> -->
   <component
   class="index-canvas" 
    v-if="dynamicComponent"
    :is="dynamicComponent"
    :type="'confetti'"
    >
    
  </component>
  </div>
  <div class=hero>
  <h2 class="title">Canvas Party</h2>
  <h3 class="sub-title">Background Animations library</h3>
  <p class="details">Add beautiful backgrounds to your site with ease</p>

<div class="actions-btns">
<a class="get-started" href="/guide/getting-started">Get Started</a>
<a class="view-templates" href="/templates/index">View templates</a>
</div>
  </div>

<style> 
.bg-wrapper {
  position: absolute;
  z-index: 10;
  height: 91vh;
  width: 100%;
}


</style>
