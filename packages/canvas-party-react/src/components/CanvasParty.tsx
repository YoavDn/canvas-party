import { useState , useEffect, useRef} from 'react'
import { createCanvasParty } from '../../../core/lib'
type canvasPartyType  = 'confetti' | 'fireworks' | 'starfield' | 'trippy'

interface  ICanvasPartyProps  {
    type: canvasPartyType,
     options?: {
        colors?: string[],
         count?: number }
        }

type TProps = {
    canvasOptions: ICanvasPartyProps
}


function CanvasParty( {canvasOptions } :TProps ) {
    const canvasWrapperRef = useRef<any>()
    
    useEffect(() => {   
        if(!canvasWrapperRef.current) return
        const canvas = createCanvasParty(canvasWrapperRef.current, { type:  canvasOptions.type, ...canvasOptions.options})
        if(canvasWrapperRef.current.hasChildNodes()) {
            canvasWrapperRef.current.innerHTML = null
        }
        canvasWrapperRef.current.appendChild(canvas)
        

    },[canvasOptions])
    
    return ( 
       <div ref={canvasWrapperRef} className='canvas-wraper'></div>
    )
}

export default CanvasParty;