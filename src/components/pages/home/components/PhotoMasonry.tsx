import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { useEffect, useState } from "react"
import imageConfigItems from "../../../../config/imageConfigItems.json"
import createDetailPageUrl from "../../../../utils/createDetailPageUrl"

export interface IPhotoMasonryProps {
  data: any;
}

export function PhotoMasonry(props: IPhotoMasonryProps) {
  const { data } = props;
  const [rerendered, setRerendered] = useState(false)

  useEffect(() => {
    if (rerendered === false) {
      setRerendered(true)
    }
  }, [])

  return (
    <section className="photos">
      {data.allFile.edges.map(({node}: {node: any}) => {
        const imageData = imageConfigItems.find(
          imageConfigItem => imageConfigItem.title === node.name
        )
        if (imageData) {
          const imageLink = createDetailPageUrl(node.name);
          return (
            <Link to={imageLink}>
              <GatsbyImage
                loading="eager"
                image={node.childImageSharp.gatsbyImageData}
                alt={imageData.title}
              />
            </Link>
          )
        }
        return <></>
      })}
    </section>
  )
}
