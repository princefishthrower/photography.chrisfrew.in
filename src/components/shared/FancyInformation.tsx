import * as React from "react"

export interface IFancyInformationProps {
  title: string;
  dateTaken: string
  comment: string
  attribution: string
}

export function FancyInformation(props: IFancyInformationProps) {
  const { title, dateTaken, comment, attribution } = props
  return (
    <div className="mb-5 d-flex flex-column justify-content-center align-items-center text-light">
      {/* <hr className="text-light"/> */}
      <div>
        <span className="fs-1">{"\u201c"}</span>
        <span className="fst-italic">{title}</span>
        <span className="fs-1">{"\u201d"}</span>
      </div>
      <div>
        <span className="fst-italic">{dateTaken}</span>
      </div>
      <div>
        <span className="fs-1">{"\u201c"}</span>
        <span className="fst-italic">{comment}</span>
        <span className="fs-1">{"\u201d"}</span>
      </div>
      <div>- {attribution}</div>
    </div>
  )
}
