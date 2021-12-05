import * as React from "react"

export interface IFancyInformationProps {
  comment: string
  attribution: string
}

export function FancyInformation(props: IFancyInformationProps) {
  const { comment, attribution } = props
  return (
    <div className="mb-5 d-flex flex-column justify-content-center align-items-center text-light">
      <div className="d-flex flex-row align-items-end fst-italic">
        <span className="fs-1 mx-1 align-self-start">{"\u201c"}</span>
        <p className="text-center">{comment}</p>
        <span className="fs-1 mx-1 align-self-start">{"\u201d"}</span>
      </div>
      <p className="fw-bold">- {attribution}</p>
    </div>
  )
}
