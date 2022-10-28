import { useEffect, useRef } from "react"
import _ from "lodash"
import React from "react"
import { useCanvasParty } from "../../../core/lib"
import { TTemplates } from "../../../core/src/types"

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
  const uniqId = _.uniqueId("canvas_")
  let canvasParty: any = null

  useEffect(() => {
    if (!canvasWrapperRef.current) return

    if (canvasWrapperRef.current) {
      canvasWrapperRef.current.innerHTML = null
    }
    canvasParty = useCanvasParty(canvasWrapperRef.current, {
      type,
      options: { ...options },
    })
    canvasWrapperRef.current.appendChild(canvasParty.canvas)

    return () => canvasParty.removeCanvas()
  }, [type, options])

  return (
    <div ref={canvasWrapperRef} id={uniqId} className="canvas-wrapper"></div>
  )
}

export default CanvasParty
