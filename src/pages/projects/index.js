import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import { FaGithub, FaRegEye } from 'react-icons/fa';
import { graphql } from "gatsby"
import Seo from "../../components/seo"


const index = ({ data }) => {
    const projects = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <Seo title="Projects" />
            <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                {projects.map(project => (
                    <li key={project.id}>
                        <a href={project.frontmatter.live} target="_blank" rel="noreferrer">
                            <GatsbyImage image={getImage(project.frontmatter.cover)} alt="Project" />
                        </a>
                        <h3 className="mt-3 text-sm">{project.frontmatter.title}</h3>
                        <div className="flex items-center space-x-2 my-2">
                            {project.frontmatter.techs.map(tech => (
                                <span className="pill">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <a href={project.frontmatter.source} target="_blank" rel="noreferrer" title="View on GitHub" className="flex items-center text-sm">
                                <FaGithub className="mr-1" /> Source
                            </a>
                            <a href={project.frontmatter.live} target="_blank" rel="noreferrer" className="flex items-center text-sm">
                                <FaRegEye className="mr-1" /> View Live
                            </a>
                        </div>
                    </li>
                ))}
                </ul>
        </Layout>
    )
}

export const ProjectQuery = graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}) {
            nodes {
              frontmatter {
                title
                techs
                source
                live
                cover {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              id
            }
          }
    }
`

  

export default index