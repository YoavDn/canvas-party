---
layout: home
---

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
        tamplates: [
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

    }
  },

  mounted() {
    import('@canvas-party/vue').then((module) => {
      this.dynamicComponent = module.default
      console.log(this.dynamicComponent)
    })
  },
}

</script>

 <div class="tamplates-container">
    <div class="tamplate-card" v-for="tamplate in tamplates">
        <!-- <CanvasParty class="canvas-card"  :type="tamplate.type"/> -->
    <a :href="`/tamplates/${tamplate.type}`">
    <component
     class="canvas-card"  
     v-if="dynamicComponent"
     :is="dynamicComponent"
     :type="tamplate.type"
    >
  </component>
  </a>
        <h2>{{tamplate.title}}</h2>
     </div>
 </div>

<style> 


</style>
