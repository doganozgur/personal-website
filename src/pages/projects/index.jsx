import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import Project from "../../components/Project"

const index = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title="Projects" />
      <section className="grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-12">
        {projects.map(project => (
          <Project key={project.id} data={project.frontmatter} />
        ))}
      </section>
    </Layout>
  )
}

export const ProjectQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
      sort: { fields: frontmatter___cover___birthTime, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          techs
          source
          live
          cover {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`

export default index
