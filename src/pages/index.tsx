import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex: React.FC<PageProps<GatsbyTypes.IndexQuery>> = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Tomoya Tanaka Portfolio" />
      <p>
        No blog posts found. Add markdown posts to "content/blog" (or the
        directory you specified for the "gatsby-source-filesystem" plugin in
        gatsby-config.js).
      </p>
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
