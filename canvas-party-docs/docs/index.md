---
layout: home
---

<!-- ---
layout: home

hero:
  name: Canvas Party
  text: Background Animations library.
  tagline: create beatufiull canvas background with ease
  image:
    src: /public/canvas-party.svg
    alt: Canvas Party png
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-canvas-party
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
features:
  - icon: 🖼
    title: Tamplates
    details: Vite, The DX that can't be beat
  - icon: 🧙
    title: Interactive
    details: Power of canvas meets avrage users Lorem Interactive
  - icon: 😌
    title: Simple and minimal, always
    details: Lorem ipsum...
--- -->

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
