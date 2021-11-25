/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://audiophile-ecommerce-web.herokuapp.com",
        queryLimit: 5000, // Defaults to 100
        collectionTypes: [`Product-modal`, `Speaker`],
        singleTypes: [`hero`, `addreview`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
