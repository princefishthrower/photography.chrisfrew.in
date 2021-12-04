import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as bannerStyles from "./banner-image.module.scss"
import { ArtSignature } from "../../../../shared/ArtSignature"
import { FancyText } from "../FancyText/FancyText"

export function BannerImage() {
  return (
    <>
      <StaticImage
        className={bannerStyles.bannerImage}
        // src="../../../../../images/Christmas Eve in Pitztal, at Dusk.jpg"
        src="../../../../../images/Feldkirch and the Blizzard of 2021.jpg"
        alt="Meer :)"
        placeholder="blurred"
      />
      <div
        className={`position-relative d-flex flex-row justify-content-center align-items-center ${bannerStyles.titleContainer}`}
      >
        <div className="m-5 d-flex flex-column justify-content-center align-items-center">
          {/* <h1 className="text-center text-light text-decoration-underline">
            When Dusk Settles.
          </h1> */}
          <FancyText className="d-none d-lg-block" baseSize={200} />
          <FancyText className="d-none d-lg-none d-md-block" baseSize={150} />
          <FancyText className="d-none d-md-none d-sm-block " baseSize={140} />
          <FancyText className="d-block d-sm-none" baseSize={75} />

          <p className="w-25 text-light text-center fst-italic">
            "Blue hour. Dusk. Civil Twilight. It has many names. It's a time when all is still, and everything seems
            within reach. I enjoy capturing what would otherwise be fleeting moments, forever in my photographs."
          </p>
          <ArtSignature />

          <h2 className="text-light">Christopher Frewin</h2>
          <h3 className="text-light">Landscape Photographer</h3>
        </div>
      </div>
    </>
  )
}
