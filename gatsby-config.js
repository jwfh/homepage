/* eslint-disable camelcase */
module.exports = {
  siteMetadata: {
    title: 'JWFH',
    description: 'Jacob House -- Personal Website and Portfolio',
    author: 'Jacob William House',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/blog/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'rgba(33, 37, 38, 1)',
        theme_color: '#0075f6',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: 'src/images/full-logo.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
