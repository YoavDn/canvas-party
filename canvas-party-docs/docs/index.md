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

<script setup>
  import { useData } from 'vitepress'
  import {ref, onMounted} from 'vue'
  import { createCanvasParty } from '../../packages/core/lib'

  const wraper = ref(null)
  const canvas = ref(null)

onMounted(() => {
  if(wraper.value ) {
    canvas.value= createCanvasParty(wraper.value , {type: 'confetti'})
    const wraperEl  = document.querySelector('.bg-wraper')    
    wraperEl.appendChild(canvas.value)
  }
})
  
</script>

  <div ref="wraper" class="bg-wraper">
  </div>
  <div class=hero>
  <h2 class="title">Canvas Party</h2>
  <h3 class="sub-title">Background Animations library</h3>
  <p class="details">Add beautiful backgrounds to your site with ease</p>

<div class="actions-btns">
<a class="get-started" href="/guide/getting-started">Get Started</a>
<a class="view-tamplates" href="/tamplates/tamplates">View tamplates</a>
</div>
  </div>

<style> 
.bg-wraper {
  position: absolute;
  z-index: 10;
  height: 91vh;
  width: 100%;
}


</style>
