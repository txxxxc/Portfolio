import { graphql, PageProps } from 'gatsby'
import React from 'react'
import AboutMe from '../components/AboutMe'
import Header from '../components/Header'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogIndex: React.FC<PageProps<GatsbyTypes.IndexQuery>> = ({
    location,
}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    return (
        <Layout location={location} title={''}>
            <Seo title="Tomoya Tanaka Portfolio" isRootPath={isRootPath} />
            <Header />
            <AboutMe />
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query Index {
        site {
            siteMetadata {
                title
            }
        }
    }
`
