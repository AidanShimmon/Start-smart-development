module.exports = {
  siteMetadata: {
    siteUrl: "https://www.startsmartdevelopment.com",
    title: "Start Smart Development",
    description: 'Helping new businesses create websites built to suit there needs.',
    author: '@aidanshimmon',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@use 'globals' as *;`,
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        }
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway\: 400,700`, 
          `Sarabun\: 600,700,800`,
        ],
        display: `swap`,
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        },
      },
    }, 
    {
      resolve: 'gatsby-plugin-accessibilityjs',
      options: {
        injectStyles: false,
        errorClassName: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Start Smart Development`,
        short_name: `StartSmartDev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
