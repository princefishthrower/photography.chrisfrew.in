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
        src="../../../../../images/Feldkirch and the Blizzard of 2021.jpg"
        alt="Feldkirch and the Blizzard of 2021"
        placeholder="blurred"
      />
      {/* <div
        className={`position-relative d-flex flex-row justify-content-center align-items-center ${bannerStyles.titleContainer}`}
      > */}
        <div className="position-absolute">

        <div className="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
          <FancyText className="d-none d-lg-block" baseSize={180} />
          <FancyText className="d-none d-lg-none d-md-block" baseSize={150} />
          <FancyText className="d-none d-md-none d-sm-block " baseSize={140} />
          <FancyText className="d-block d-sm-none" baseSize={75} />
          <p className="w-75 text-light text-center fst-italic">
            "Blue hour. Dusk. Civil Twilight. It has many names. A time when all is still, and everything seems
            within reach. I attempt to capture these moments as best I can through my photographs - moments which would otherwise be gone forever."
          </p>
          <ArtSignature />
          <p className="text-light">Christopher Frewin</p>
          <p className="text-light">Landscape Photographer</p>
        </div>
      </div>
      <div className="vh-100 "></div>
    </>
  )
}
