<script setup lang="ts">
import {
    defineProps,
    ref,
    watch,
    onMounted,
    onUnmounted,
    watchEffect,
} from "vue"
import _ from "lodash"
import { useCanvasParty } from "../../../core/lib"
import { templates } from "../../../core/src/templates/index"
import type { TTemplates } from "../../../core/src/types"

const props = defineProps<{
    type: TTemplates
    options?: { colors?: string[]; count?: number }
}>()

const uniqId = _.uniqueId("canvas_")
const canvasParty = ref<any>(null)

onMounted(() => {
    const wrapper = document.getElementById(uniqId) as HTMLDivElement
    canvasParty.value = useCanvasParty(wrapper, {
        type: props.type,
        options: { ...props.options },
    })
    wrapper.appendChild(canvasParty.value.canvas)
})

watch(
    () => props,
    props => {
        if (Object.keys(templates).includes(props.type)) {
            canvasParty.value.removeCanvas()
            canvasParty.value.setCanvasParty(props.type, props.options)
        } else {
            console.error("Invalid canvasParty template name")
        }
    },
    { deep: true }
)

onUnmounted(() => {
    canvasParty.value.removeCanvas()
})
</script>

<template>
    <div class="canvas-wrapper" :id="uniqId"></div>
</template>
