import * as React from "react"

export interface IFancyTextProps {
  className: string
  baseSize: number
}

export function FancyText(props: IFancyTextProps) {
  const { className, baseSize } = props
  const fontSize = baseSize
  const lineSize = baseSize * 0.8
  const height = baseSize * 2.75
  const width = baseSize * 3.75
  const y = baseSize * 1
  const strokeWidth = baseSize * 0.02
  return (
    <div className={className}>
      <svg height={`${height}px`} width={`${width}px`}>
        <text
          y={y}
          fontSize={fontSize}
          fill="#ffffff"
          fillOpacity={0.15}
          stroke-width={strokeWidth}
          stroke="#ffffff"
          font-family="Yeseva One"
        >
          <tspan x="0">When</tspan>
          <tspan x="0" dy={lineSize}>
            Dusk
          </tspan>
          <tspan x="0" dy={lineSize}>
            Settles.
          </tspan>
        </text>
      </svg>
    </div>
  )
}
