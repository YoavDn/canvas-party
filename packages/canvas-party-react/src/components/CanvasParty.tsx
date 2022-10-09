import { useState, useEffect, useRef } from 'react'
import { createCanvasParty } from '../../../core/lib'
import { TTamplates } from '../../../core/src/types'

interface ICanvasPartyProps {
  options?: {
    colors?: string[]
    count?: number
  }
}

type TProps = {
  options: ICanvasPartyProps
  type: TTamplates
}

function CanvasParty({ options, type }: TProps) {
  const canvasWrapperRef = useRef<any>()

  useEffect(() => {
    if (!canvasWrapperRef.current) return
    const canvas = createCanvasParty(canvasWrapperRef.current, {
      type,
      ...options,
    })
    if (canvasWrapperRef.current.hasChildNodes()) {
      canvasWrapperRef.current.innerHTML = null
    }
    canvasWrapperRef.current.appendChild(canvas)
  }, [options, type])

  return <div ref={canvasWrapperRef} className="canvas-wraper"></div>
}

export default CanvasParty
