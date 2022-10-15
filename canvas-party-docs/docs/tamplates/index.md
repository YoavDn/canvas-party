---
layout: home
---

<script setup>
 
    const tamplates = [
        {
        type:'trippy',
        title: 'Trippy'
        },
        {type:'tvSnow',
        title: 'TV Snow'
         },
        {
            type: 'confetti',
            title: 'Confetti'
        },
        {
        type:'underground',
        title: 'Underground'
        },
        {
         type:'starfield',
         title: 'Starfield'
        },
        {
         type:'fireworks',
         title: 'Fireworks'
        },
           ]

const goToTamplate = (type) => window.open(`/tamplates/${type}`)
</script>

 <div class="tamplates-container">
    <div class="tamplate-card" v-for="tamplate in tamplates" @click="goToTamplate(tamplate.type)">
        <CanvasParty class="canvas-card"  :type="tamplate.type"/>
        <h2>{{tamplate.title}}</h2>
     </div>
 </div>

<style> 


</style>
