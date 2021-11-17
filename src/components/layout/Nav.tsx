import { Link } from "gatsby"
import * as React from "react"

export interface INavProps {}

// Startseite, Ueber mich, Angebote, Kontakt

export function Nav(props: INavProps) {
  return (
    <ul className="nav justify-content-center bg-secondary">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Start
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/ueber-mich" className="nav-link">
          Über Mich
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/angebote" className="nav-link">
          Angebote
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/kontakt" className="nav-link">
          Kontakt
        </Link>
      </li>
    </ul>
  )
}
