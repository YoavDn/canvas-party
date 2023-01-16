import './styles.css'
import { useCanvasParty } from '../../../packages/core/src/index'
console.log(useCanvasParty)
const app = document.getElementById('app') as HTMLElement
const div = document.querySelector('.wrapper') as HTMLElement

const canvasParty = useCanvasParty(div, { type: 'trippy' })

div.appendChild(canvasParty.canvas)
app.appendChild(div)
