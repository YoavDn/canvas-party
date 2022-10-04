import CanvasParty from './components/CanvasParty.vue'
import { App, Plugin } from 'vue'

export default {
    install: ( app, options) => {
        app.component("CanvasParty", CanvasParty )
    }
}  as Plugin