import * as React from "react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className="container mt-5 mb-1">
      <div className="row d-flex flex-column justify-content-center align-items-center text-light">
        © {year} Christopher Frewin
      </div>
    </div>
  )
}
