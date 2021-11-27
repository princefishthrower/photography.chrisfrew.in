import * as React from "react"

export interface IFancyCommentProps {
  comment: string
  attribution: string
}

export function FancyComment(props: IFancyCommentProps) {
  const { comment, attribution } = props
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-light">
      <hr />
      <div>
        <span className="fs-1">{"\u201c"}</span>
        <span className="fst-italic">{comment}</span>
        <span className="fs-1">{"\u201d"}</span>
      </div>
      <div>- {attribution}</div>
    </div>
  )
}
