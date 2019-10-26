module.exports = {
  siteMetadata: {
    title: 'Brusjan',
    description:
      'Front-End web developer with an eye for design. Experience in HTML, CSS, Javascript, Bootstrap, as well as back-end languages like PHP, MySQL and others.',
    author: '@jarodpeachey',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/main_logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-linaria',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-zopfli',
    }
  ],
};
