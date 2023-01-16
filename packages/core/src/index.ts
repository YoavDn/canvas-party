import { templates } from './templates/index.js'
import { TTemplates } from './types'

const isClinet = typeof window !== 'undefined'
const efaultWindow = isClinet ? window : undefined

const webglParams = {
   alpha: true,
   depth: false,
   stencil: false,
   antialias: false,
   preserveDrawingBuffer: false,
}

export interface IOptionsType {
   count?: number
   colors?: string[]
   color?: string
   azula?: boolean
}

export interface ICanvasSettings {
   type: TTemplates
   options?: IOptionsType
}

/**
 * Initializing the CanvasParty object and adding the prefered settings
 * @see https://canvas-party.vercel.app/guide/getting-started.html
 * @param wrapper
 * @param canvasOptions
 */
export function useCanvasParty(wrapper: Element, canvasOptions: ICanvasSettings) {
   let { type, options } = canvasOptions

   if (wrapper && !('getBoundingClientRect' in wrapper)) {
      console.error("Wrapper element is not valid, please make sure that the 'wrapper' is an 'Element' type")
   }

   let canvas = document.createElement('canvas')
   let c = type === 'fluid' ? canvas.getContext('webgl2', webglParams) : canvas.getContext('2d')

   if (!c) console.warn('The canvas rendering context is not defined')

   canvas.style.width = '100%'
   canvas.style.height = '100%'
   let elRect = wrapper.getBoundingClientRect()

   canvas.height = elRect.height
   canvas.width = elRect.width

   //template chooser
   let template: any

   function drawTemplate() {
      if (type === 'confetti' || type === 'fire') {
         template = templates[type](c as CanvasRenderingContext2D, canvas, options)
      } else if (type === 'fluid') {
         template = templates[type](c as WebGL2RenderingContext, canvas)
      } else {
         template = templates[type](c as CanvasRenderingContext2D, canvas)
      }
   }
   drawTemplate()

   function set(newType: TTemplates, NewOptions?: IOptionsType) {
      if (Object.keys(templates).includes(type)) {
         template.stop()

         if (type === 'fluid') {
            canvas = document.createElement('canvas')
            c = canvas.getContext('2d')
            console.log(c)
         }

         type = newType
         if (NewOptions) options = NewOptions
         elRect = wrapper.getBoundingClientRect()
         canvas.height = elRect.height
         canvas.width = elRect.width
         drawTemplate()
      } else {
         console.error('Invalid canvasParty template name')
      }
   }

   function remove() {
      template.stop()
   }

   return {
      set,
      canvas,
      remove,
   }
}
