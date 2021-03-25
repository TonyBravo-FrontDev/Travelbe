module.exports = {
  siteMetadata: {
    title: `T r a v e l b e`,
    description: `Agencia de Viajes turisticos`,
    author: `@tonybravo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-ffmpeg`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-beach.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`galerias`, `paginas`, `paseos`, `apartados`, `localitations`],
        //If using single types place them in this array.
        singleTypes: [`contacto`, `seccion`, `video`, `nosotros`],
      },
    },
  ],
}
