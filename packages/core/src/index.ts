import { templates } from './templates/index.js'
import { ICanvasSettings, IOptionsType, TTemplates } from './types'

const webglParams = {
    alpha: true,
    depth: false,
    stencil: false,
    antialias: false,
    preserveDrawingBuffer: false,
}

export function useCanvasParty(el: HTMLElement, canvasOptions: ICanvasSettings) {
    let { type, options } = canvasOptions
    let canvas = document.createElement('canvas')
    let c = type === 'fluid' ? canvas.getContext('webgl2', webglParams) : canvas.getContext('2d')

    canvas.style.width = '100%'
    canvas.style.height = '100%'
    let elRect = el.getBoundingClientRect()

    canvas.height = elRect.height
    canvas.width = elRect.width

    //template chooser
    let template: any

    function drawTemplate() {
        if (type === 'confetti' || type === 'fire') { // when has options
            template = templates[type](c! as CanvasRenderingContext2D, canvas, options!)
        } else if (type === 'fluid') { // when canvas is WebGL
            template = templates[type](c! as WebGL2RenderingContext, canvas)
        } else { // when no options
            template = templates[type](c! as CanvasRenderingContext2D, canvas)
        }
    }
    drawTemplate()

    function setCanvasParty(newType: TTemplates, NewOptions?: IOptionsType) {
        if (Object.keys(templates).includes(type)) {
            template.stop()

            if (type === 'fluid') {
                canvas = document.createElement('canvas')
                c = canvas.getContext('2d')
                console.log(c)
            }

            type = newType
            if (NewOptions) options = NewOptions
            elRect = el.getBoundingClientRect()
            canvas.height = elRect.height
            canvas.width = elRect.width
            drawTemplate()
        } else {
            console.error('Invalid canvasParty template name')
        }
    }

    function removeCanvas() {
        template.stop()
    }

    window.requestAnimationFrame
    return {
        setCanvasParty,
        canvas,
        removeCanvas,
    }
}
