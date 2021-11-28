import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { useEffect, useState } from "react"

export interface IPhotoMasonryProps {}

export function PhotoMasonry(props: IPhotoMasonryProps) {
  const [rerendered, setRerendered] = useState(false)

  useEffect(() => {
    if (rerendered === false) {
      setRerendered(true)
    }
  }, [])

  return (
    <section className="photos">
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Sonnwendfeier I.jpg"
        alt="Sonnwendfeier I"
        placeholder="blurred"
      />
      <Link to="/detail/Bergenstock%20I">
        <StaticImage
          data-rerendered={rerendered}
          src="../../../../images/Bergenstock I.jpg"
          alt="Bergenstock I"
          placeholder="blurred"
        />
      </Link>
      <Link to="/detail/Christmas Eve in Pitztal, at Dusk">
        <StaticImage
          data-rerendered={rerendered}
          src="../../../../images/Christmas Eve in Pitztal, at Dusk.jpg"
          alt="Christmas Eve in Pitztal, at Dusk"
          placeholder="blurred"
        />
      </Link>
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Sonnwendfeier II.jpg"
        alt="Sonnwendfeier II"
        placeholder="blurred"
      />
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Feldkirch and the Blizzard of 2021.jpg"
        alt="Feldkirch and the Blizzard of 2021"
        placeholder="blurred"
      />
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Gargellen III.jpg"
        alt="Gargellen III"
        placeholder="blurred"
      />
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Sonnwendfeier III.jpg"
        alt="Sonnwendfeier III"
        placeholder="blurred"
      />
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Last of Dusk at the End of the Rhine Valley.jpg"
        alt="Last of Dusk at the End of the Rhine Valley"
        placeholder="blurred"
      />
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Sonnwendfeier IV.jpg"
        alt="Sonnwendfeier IV"
        placeholder="blurred"
      />
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Spät Unterwegs in Bartholomäberg.jpg"
        alt="Spät Unterwegs in Bartholomäberg"
        placeholder="blurred"
      />
      <StaticImage
        data-rerendered={rerendered}
        src="../../../../images/Sonnwendfeier V.jpg"
        alt="Sonnwendfeier V"
        placeholder="blurred"
      />
    </section>
  )
}
