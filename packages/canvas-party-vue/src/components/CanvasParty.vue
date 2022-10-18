<script setup lang="ts">
import { defineProps, ref, watch, onMounted, onUnmounted } from 'vue'
import _ from 'lodash'
// import { useCanvasParty } from '../../../core/lib'
import { useCanvasParty } from '../../../core/lib'
import { templates } from '../../../core/src/templates/index'
import type { TTemplates } from '../../../core/src/types'

const props = defineProps<{
  type: TTemplates
  options?: { colors?: string[]; count?: number }
}>()

const uniqId = _.uniqueId('canvas_')
const canvasParty = ref<any>(null)

onMounted(() => {
  const wrapper = document.getElementById(uniqId) as HTMLDivElement
  canvasParty.value = useCanvasParty(wrapper, {
    type: props.type,
    ...props.options,
  })
  wrapper.appendChild(canvasParty.value.canvas)
})

watch(
  () => props.type,
  type => {
    if (Object.keys(templates).includes(type)) {
      canvasParty.value.removeCanvas()
      canvasParty.value.setCanvasParty(type)
    } else {
      console.error('Invalid canvasParty template name')
    }
  }
)

onUnmounted(() => {
  canvasParty.value.removeCanvas()
})
</script>

<template>
  <div class="canvas-wrapper" :id="uniqId"></div>
</template>
