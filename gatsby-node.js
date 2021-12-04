// Generate all detail pages using the detail template
const path = require(`path`)

// TODO: how to we import the typescript version of this function into gatsby-node?
const createDetailPageUrl = (title) => {
  return `/detail/${title.replace(/\s+/g, '-').toLowerCase()}`;
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const detail = path.resolve("./src/templates/Detail.tsx")
  
  // query all images
  const result = await graphql(
    `
      {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              name
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, quality: 100)
              }
            }
          }
        }
      }
    `
  )

  // throw if any error during query
  if (result.errors) {
    throw result.errors
  }

  // pull off the edges array for readability
  const images = result.data.allFile.edges

  // Create image detail pages.
  images.forEach(image => {
    const pagePath = createDetailPageUrl(image.node.name)
    console.log(`Creating page at: ${pagePath}`)
    createPage({
      path: pagePath,
      component: detail,
      context: {
        name: image.node.name,
        childImageSharp: image.node.childImageSharp,
      },
    })
  })

  createPage({
    path: '/a',
    component: detail,
  })
}
