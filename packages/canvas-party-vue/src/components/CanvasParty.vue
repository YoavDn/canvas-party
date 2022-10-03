
<template>
    <div class="canvas-wraper" id="canvas-party-wraper">
    </div>
</template>


<script setup  lang='ts'>
import { defineProps, ref, onMounted, defineComponent } from 'vue'
import { createCanvasParty } from '../../../core/lib'


const props = defineProps<{
    type: 'confetti' | 'fireworks' | 'starfield' | 'trippy',
    options?: { colors?: string[], count?: number }
}>()
// const canvasWraper = ref(null)
const canvasParty = ref<HTMLCanvasElement | null>(null)


onMounted(() => {
    const wraper = document.getElementById('canvas-party-wraper')
    canvasParty.value = createCanvasParty(wraper!, { type: props.type, ...props.options })
    wraper!.appendChild(canvasParty.value)
})

</script>

<style lang='scss'>

</style>