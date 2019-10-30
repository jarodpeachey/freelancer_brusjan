module.exports = {
  siteMetadata: {
    title: 'Brusjan',
    description: '',
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
        name: 'brusjan-website',
        short_name: 'brusjan',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/brusjan_emblem.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-linaria',
    {
      resolve: 'gatsby-plugin-zopfli',
    },
  ],
};
