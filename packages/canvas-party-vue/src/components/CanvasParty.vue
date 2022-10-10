<script setup lang="ts">
import { defineProps, ref, watchEffect, onMounted } from 'vue'
import { createCanvasParty } from '../../../core/lib'
import { TTamplates } from '../../../core/src/types'

const props = defineProps<{
  type: TTamplates
  options?: { colors?: string[]; count?: number }
}>()

const canvasParty = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const wraper = document.getElementById('canvas-wraper') as HTMLDivElement
  canvasParty.value = createCanvasParty(wraper, {
    type: props.type,
    ...props.options,
  })
  wraper.appendChild(canvasParty.value)
})

watchEffect(() => {
  console.log(props.options, props.type)
  const wraper = document.getElementById('canvas-wraper') as HTMLDivElement
  if (!wraper) return
  wraper.removeChild<HTMLCanvasElement>(canvasParty.value!)
  canvasParty.value = createCanvasParty(wraper, {
    type: props.type,
    ...props.options,
  })
  wraper.appendChild(canvasParty.value)
})
</script>

<template>
  <div class="canvas-wraper" id="canvas-wraper"></div>
</template>
