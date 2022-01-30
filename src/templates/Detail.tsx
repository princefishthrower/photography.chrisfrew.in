import * as React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { FancyInformation } from "../components/shared/FancyInformation"
import { imageConfigItems } from "../config/imageConfigItems"
import { useEffect, useState } from "react"
import { Layout } from "../components/layout/Layout"
import { ArtSignature } from "../components/shared/ArtSignature"

export interface IDetailProps {
  pageContext: {
    name: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export default function Detail(props: IDetailProps) {
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
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center text-light">
              <div>
                <h1><u>{imageData.title}</u></h1>
              </div>
              <div>
                <p className="fst-italic">{imageData.dateTaken}</p>
              </div>
            </div>
            <div className="position-relative d-flex flex-row align-items-center justify-content-center">
              <GatsbyImage
                
                loading="eager"
                className="detail-image"
                alt={name}
                image={childImageSharp.gatsbyImageData}
              />
              <div className="position-absolute bottom-0 end-0 me-2 mb-4">
                <ArtSignature width={75} />
              </div>
            </div>
            <FancyInformation
              comment={imageData.comment}
              attribution={imageData.attribution}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
