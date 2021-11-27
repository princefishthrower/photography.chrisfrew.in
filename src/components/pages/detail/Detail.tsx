import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { useDetailPhoto } from "../../../hooks/useDetailPhoto"
import { FancyComment } from "../../shared/FancyComment"

export interface IDetailProps {}

export function Detail(props: IDetailProps) {
  const { photoName } = useDetailPhoto()

  switch (photoName) {
    case "Bergenstock%20I":
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <StaticImage
                className="mt-5"
                src="../../../../images/Bergenstock I.jpg"
                alt="Bergenstock I"
                placeholder="blurred"
              />
              <FancyComment
                comment="All that is gold does not glitter, not all those who wander are lost..."
                attribution="J. R. R. Tolkien"
              />
            </div>
          </div>
        </div>
      )
    default:
      return <p>Photo not found :(</p>
  }
}
