import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/layout/Layout"
import { Home } from "../components/pages/home/Home"

const HomePage = ({ data }) => {
  return (
    <Layout>
      <Home data={data} />
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`

export default HomePage
