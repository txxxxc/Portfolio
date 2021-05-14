import { graphql, PageProps } from 'gatsby'
import React from 'react'
import AboutMe from '../components/AboutMe'
import Header from '../components/Header'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Writing from '../components/Writing'

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
            <Skills />
            <Works />
            <Writing />
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
