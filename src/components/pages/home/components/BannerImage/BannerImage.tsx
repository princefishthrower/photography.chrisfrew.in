import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as bannerStyles from "./banner-image.module.scss"

export function BannerImage() {
  return (
    <>
    <StaticImage
        className={bannerStyles.bannerImage}
        src="../../../../../images/Christmas Eve in Pitztal, at Dusk.jpg"
        alt="Meer :)"
        placeholder="blurred"
      />
      <div className={`position-relative d-flex flex-row justify-content-center align-items-center ${bannerStyles.titleContainer}`}>
        <div className="m-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center text-light text-uppercase text-decoration-underline">When Dusk Settles.</h1>
          <h2 className="text-light">Christopher Frewin</h2>
          <h3 className="text-light">Landscape Photographer</h3>
        </div>
      </div>
    </>
  )
}
