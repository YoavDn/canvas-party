---
layout: home
---

<script>
export default {
  data() {
    return {
      dynamicComponent: null,
        templates: [
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

 <div class="templates-container">
    <div class="template-card" v-for="template in templates">
    <a :href="`/template/${template.type}`">
    <component
     class="canvas-card"  
     v-if="dynamicComponent"
     :is="dynamicComponent"
     :type="template.type"
    >
  </component>
  </a>
        <h2>{{template.title}}</h2>
     </div>
 </div>

<style> 


</style>
