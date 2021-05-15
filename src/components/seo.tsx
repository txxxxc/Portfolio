/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

type PropertyMetaObj = {
    property: string
    content: string
}

type NameMetaObj = {
    name: string
    content: string
}

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

type Props = {
    description?: string
    lang?: string
    meta?: Meta
    title: string
    isRootPath: boolean
}

const Seo: React.FC<Props> = ({
    description,
    lang,
    meta,
    title,
    isRootPath,
}) => {
    const { site, imageSharp } = useStaticQuery<GatsbyTypes.SEOQuery>(
        graphql`
            query SEO {
                site {
                    siteMetadata {
                        title
                        description
                        social {
                            twitter
                        }
                    }
                }
                imageSharp {
                    fixed {
                        src
                    }
                }
            }
        `
    )

    const metaDescription = description || site?.siteMetadata?.description
    const defaultTitle = site?.siteMetadata?.title

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={
                isRootPath ? `${defaultTitle}` : `%s | ${defaultTitle}`
            }
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: `https://www.tomoyatanaka.site/${imageSharp?.fixed?.src}`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site?.siteMetadata?.social?.twitter || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta || [])}
        />
    )
}

export default Seo
