
<template>
    <div class="canvas-wraper" id="canvas-wraper">

    </div>
</template>


<script setup  lang='ts'>
import { defineProps, ref, watchEffect, onMounted } from 'vue'
import { createCanvasParty } from '../../../core/lib';


const props = defineProps<{
    type: 'confetti' | 'fireworks' | 'starfield' | 'trippy',
    options?: { colors?: string[], count?: number }
}>()

const canvasParty = ref<HTMLCanvasElement | null>(null)


onMounted(() => {
    const wraper = document.getElementById('canvas-wraper') as HTMLDivElement
    canvasParty.value = createCanvasParty(wraper, { type: props.type, ...props.options })
    wraper.appendChild(canvasParty.value)
})

watchEffect(() => {
    console.log(props.type, props.options);
    const wraper = document.getElementById('canvas-wraper') as HTMLDivElement
    if (!wraper) return
    wraper.removeChild<HTMLCanvasElement>(canvasParty.value!)
    canvasParty.value = createCanvasParty(wraper, { type: props.type, ...props.options })
    wraper.appendChild(canvasParty.value)
})

</script>

<style lang='scss'>

</style>