import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex: React.FC<PageProps<GatsbyTypes.IndexQuery>> = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <Layout location={location} title={""}>
      <Seo title="Tomoya Tanaka Portfolio" isRootPath={isRootPath} />
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
