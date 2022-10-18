import { useEffect, useRef } from 'react'
import React from 'react'
import { useCanvasParty } from '../../../core/lib'
import { TTemplates } from '../../../core/src/types'

interface ICanvasPartyProps {
  colors?: string[]
  count?: number
}

type TProps = {
  options?: ICanvasPartyProps
  type: TTemplates
}

const CanvasParty: React.FunctionComponent<TProps> = ({ options, type }) => {
  const canvasWrapperRef = useRef<any>()

  useEffect(() => {
    if (!canvasWrapperRef.current) return
    const cp = useCanvasParty(canvasWrapperRef.current, {
      type,
      ...options,
    })
    if (canvasWrapperRef.current.hasChildNodes()) {
      canvasWrapperRef.current.innerHTML = null
    }
    canvasWrapperRef.current.appendChild(cp.canvas)
    cp.setCanvasParty(type)

    return () => cp.removeCanvas()
  }, [type, options])

  return <div ref={canvasWrapperRef} className="canvas-wrapper"></div>
}

export default CanvasParty
