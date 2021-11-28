const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Christopher Frewin Photography`,
    description: `Christopher Frewin Photography`,
    author: `Christopher Frewin`,
    siteUrl: `https://photography.chrisfrew.in/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920, 2400],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Christopher Frewin Photography",
        short_name: "Christopher Frewin Photography",
        description: "A selection of fine art landscapes.",
        start_url: "photography.chrisfrew.in",
        lang: "en",
        background_color: "#000000",
        theme_color: "#ffffff",
        display: "standalone",
        icon: `src/images/maskable_icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
  ],
}
