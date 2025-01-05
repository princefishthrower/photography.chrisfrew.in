import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/layout/Layout"
import { Home } from "../components/pages/home/Home"
import SEO from "../components/utils/SEO"

const HomePage = ({ data }: { data: any }) => {
  return (
    <Layout>
      <Home data={data} />
    </Layout>
  )
}

export const Head = () => {
  return (
    <SEO
      title="Christopher Frewin Photography"
      description="A selection of fine art photography." />
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
