---
layout: home

hero:
  name: Canvas Party
  text: Background Animations library.
  tagline:
  image:
    src: /logo.png
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
---


<script setup>
  import { useData } from 'vitepress'
  import {createCanvasParty} from 'canvas-party'
  const homeEl = document.querySelector('.VPHome')
    console.log(homeEl);
  // const canvas  = createCanvasParty(homeEl,{type: "confetti"})    
  // homeEl.appendChild(canvas)

  const { page } = useData()
</script>

<template>
  <h2 class="hello">hii</h2>
</template>

<style>
  .hello {
    color: red;
  }

  </style>

