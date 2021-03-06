module.exports = {
  siteMetadata: {
    title: `beraliv`,
    author: {
      name: `Alexey Berezin`,
      summary: `who loves London 🏴󠁧󠁢󠁥󠁮󠁧󠁿, players ⏯ and TypeScript.`,
    },
    description: `Alexey Berezin blog`,
    siteUrl: `https://blog.beraliv.dev/`,
    social: {
      twitter: `beraliv`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-figure-caption`,
            options: { figureClassName: "md-figure" },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alexey Berezin blog`,
        short_name: `beraliv blog`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#005b99`,
        display: `standalone`,
        icon: `./content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
  ],
}
