import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as bannerStyles from "./banner-image.module.scss"

export function BannerImage() {
  return (
    <>
    <StaticImage
        className={bannerStyles.bannerImage}
        src="../../../images/ocean.jpg"
        alt="Meer :)"
        placeholder="blurred"
      />
      <div className={`position-relative d-flex flex-row justify-content-center align-items-center ${bannerStyles.titleContainer}`}>
        <div className="m-5 text-light">Logo :)</div>
        <div className="m-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-light">Sabrina Lackner</h1>
          <h2 className="text-light">Coaching & Energiearbeit</h2>
        </div>
      </div>
    </>
  )
}
