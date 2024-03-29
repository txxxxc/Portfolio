import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundQuery>> = ({
    data,
    location,
}) => {
    const siteTitle = data.site?.siteMetadata?.title
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    return (
        <Layout location={location} title={siteTitle || ''}>
            <Seo title="404: Not Found" isRootPath={isRootPath} />
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    )
}

export default NotFoundPage

export const pageQuery = graphql`
    query NotFound {
        site {
            siteMetadata {
                title
            }
        }
    }
`
