import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export interface IPhotoMasonryProps {}

export function PhotoMasonry(props: IPhotoMasonryProps) {
  return (
    <section className="photos">
        <StaticImage
        src="../../../../images/Sonnwendfeier I.jpg"
        alt="Sonnwendfeier I"
        placeholder="blurred"
      />
      <Link to="/detail/Bergenstock%20I">
        <StaticImage
          src="../../../../images/Bergenstock I.jpg"
          alt="Bergenstock I"
          placeholder="blurred"
        />
      </Link>
      <Link to="/detail/Christmas Eve in Pitztal, at Dusk">
        <StaticImage
          src="../../../../images/Christmas Eve in Pitztal, at Dusk.jpg"
          alt="Christmas Eve in Pitztal, at Dusk"
          placeholder="blurred"
        />
      </Link>
      <StaticImage
        src="../../../../images/Sonnwendfeier II.jpg"
        alt="Sonnwendfeier II"
        placeholder="blurred"
      />
      <StaticImage
        src="../../../../images/Feldkirch and the Blizzard of 2021.jpg"
        alt="Feldkirch and the Blizzard of 2021"
        placeholder="blurred"
      />
      <StaticImage
        src="../../../../images/Gargellen III.jpg"
        alt="Gargellen III"
        placeholder="blurred"
      />
       <StaticImage
        src="../../../../images/Sonnwendfeier III.jpg"
        alt="Sonnwendfeier III"
        placeholder="blurred"
      />
      <StaticImage
        src="../../../../images/Last of Dusk at the End of the Rhine Valley.jpg"
        alt="Last of Dusk at the End of the Rhine Valley"
        placeholder="blurred"
      />
      <StaticImage
        src="../../../../images/Sonnwendfeier IV.jpg"
        alt="Sonnwendfeier IV"
        placeholder="blurred"
      />
      <StaticImage
        src="../../../../images/Spät Unterwegs in Bartholomäberg.jpg"
        alt="Spät Unterwegs in Bartholomäberg"
        placeholder="blurred"
      />
      <StaticImage
        src="../../../../images/Sonnwendfeier V.jpg"
        alt="Sonnwendfeier V"
        placeholder="blurred"
      />
    </section>
  )
}
