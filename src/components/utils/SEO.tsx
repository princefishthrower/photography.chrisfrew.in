import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string } | { property: string; content: string }>
  title: string
}

export default function SEO({ description, lang = 'en', meta = [], title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <html lang={lang} />
      <title>{title} {defaultTitle ? `| ${defaultTitle}` : ''}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://photography.chrisfrew.in/img/img.jpg" />
      <meta property="og:url" content="https://photography.chrisfrew.in" />
      <meta property="og:locale" content="de_CH" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {meta.map((metaItem) => {
        const { name, property, content } = metaItem as any
        const prop = name ? 'name' : 'property'
        return (
          <meta
            key={name || property}
            {...{ [prop]: name || property }}
            content={content}
          />
        )
      })}
    </>
  )
}