module.exports = {
    siteMetadata: {
        title: `Tomoya Tanaka Portfolio`,
        author: {
            name: `Tomoya Tanaka`,
            summary: `who lives and works in San Francisco building useful things.`,
        },
        description: `A starter blog demonstrating what Gatsby can do.`,
        siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
        social: {
            twitter: ``,
        },
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `links`,
                path: `${__dirname}/src/images/links`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `languages`,
                path: `${__dirname}/src/images/languages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `skills`,
                path: `${__dirname}/src/images/skills`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `works`,
                path: `${__dirname}/src/images/works`,
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
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Tomoya Tanaka Portfolio`,
                short_name: `tt Portfolio`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#ffffff`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-typegen`,
        `gatsby-plugin-styled-components`,
    ],
}
