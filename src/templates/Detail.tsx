import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { FancyComment } from "../components/shared/FancyComment"
import { imageConfigItems } from "../config/imageConfigItems"

export interface IDetailProps {
  pageContext: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export default function Detail(props: IDetailProps) {
  console.log(props)
  const { pageContext } = props
  const { childImageSharp, name } = pageContext
  const imageData = imageConfigItems.find(
    imageConfigItem => imageConfigItem.title === name
  )

  // redirect to homepage if image not found
  if (!imageData) {
    window.location.href = `${window.location.protocol}//${window.location.host}`
    return <></>
  }

  // render image, date taken, and comment
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <GatsbyImage
            className="mt-5"
            alt="Bergenstock I"
            image={childImageSharp.gatsbyImageData}
          />
          <FancyComment
            dateTaken={imageData.dateTaken}
            comment={imageData.comment}
            attribution={imageData.attribution}
          />
        </div>
      </div>
    </div>
  )
}
