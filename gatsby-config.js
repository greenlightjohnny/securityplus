/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },

    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
         classNameDark: "dark-mode",
         classNameLight: "light-mode",
         storageKey: "darkMode",
         minify: true,
      },
    },

    
    

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
   
    
  ],



  siteMetadata: {
    title: "Shocked Koala",
    titleTemplate: "%s | CompTIA Memes",
    description:
      "This is a site about the CompTIA and the Security+ exam. Basically, it's a terrible exam to study for. The solution? Memes. It's so obvious.",
    url: "https://www.fredjones.dev", // No trailing slash allowed!
    image: "./static/favicon.ico", // Path to your image you placed in the 'static' folder
    twitterUsername: "@03001200101101100434",
  },
}
