import * as React from "react"

export interface IFancyTextProps {
  className: string
  baseSize: number
}

export function FancyText(props: IFancyTextProps) {
  const { className, baseSize } = props
  const fontSize = baseSize
  const height = baseSize * 5
  const width = baseSize * 12
  const x = baseSize * 5.75
  const y = baseSize * 1.5
  const strokeWidth = baseSize * .02
  return (
    <>
      <div className={className}>
        <svg height={`${height}px`} width={`${width}px`}>
          <text
            x={x}
            y={y}
            text-anchor="middle"
            font-size={fontSize}
            fill="#ffffff"
            fillOpacity={0.15}
            stroke-width={strokeWidth}
            stroke="#ffffff"
            font-family="Yeseva One"
          >
            <tspan x={x} dy={fontSize}>When</tspan>
            <tspan x={x-(fontSize/5)} dy={fontSize}>Dusk</tspan>
            <tspan x={x+(fontSize/2.25)} dy={fontSize}>Settles.</tspan>
          </text>
        </svg>
      </div>
    </>
  )
}
