---
layout: home
---

<script>
  import {shallowRef, onMounted} from 'vue'
export default {
  setup() {
    const dynamicComponent = shallowRef(null)
    const templates = [
      {
        type:'trippy',
        title:'Trippy'
      },
      { 
        type:'tvSnow',
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
        type:'gradient',
        title: 'Gradient'
      },
       {
        type:'fluid',
        title: 'Fluid'
      },
      ]
        onMounted(() => {
        import('@canvas-party/vue').then((module) => {
          dynamicComponent.value = module.default
        })

    })
        return {
          dynamicComponent,
          templates
        }
   },

}

</script>

 <div class="templates-container">
    <div class="template-card" v-for="template in templates">
    <a :href="`/templates/${template.type}`">
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
