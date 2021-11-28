import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { FancyInformation } from "../components/shared/FancyInformation"
import { imageConfigItems } from "../config/imageConfigItems"
import { useEffect, useState } from "react"
import { Layout } from "../components/layout/Layout"

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
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    setDidMount(true)
  }, [])

  if (didMount === false) {
    return <></>
  }

  // redirect to homepage if image not found
  if (!imageData) {
    window.location.href = `${window.location.protocol}//${window.location.host}`
    return <></>
  }

  // render image, date taken, and comment
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <GatsbyImage
              loading="eager"
              className="mt-5"
              alt="Bergenstock I"
              image={childImageSharp.gatsbyImageData}
            />
            <FancyInformation
              title={imageData.title}
              dateTaken={imageData.dateTaken}
              comment={imageData.comment}
              attribution={imageData.attribution}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
