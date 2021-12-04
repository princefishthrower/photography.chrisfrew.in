import * as React from "react"

export interface IFancyInformationProps {
  title: string
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
        <span className="fst-italic">
          <span className="fs-1 mx-1">{"\u201c"}</span>
          {title}
          <span className="fs-1 mx-1">{"\u201d"}</span>
        </span>
      </div>
      <div>
        <p className="fst-italic">{dateTaken}</p>
      </div>
      <div className="d-flex flex-row justify-content-center fst-italic">
        <p className="fs-1 mx-1 align-self-start">{"\u201c"}</p>
        <p className="text-center">{comment}</p>
        <p className="fs-1 mx-1 align-self-start">{"\u201d"}</p>
      </div>
      <p className="fw-bold">- {attribution}</p>
    </div>
  )
}
