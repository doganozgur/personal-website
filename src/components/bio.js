/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (

    <div className="space-y-2">
        <StaticImage
          className="rounded-full"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpg"
          width={200}
          height={200}
          quality={95}
          alt={author.name}
        />
        <h2 className="font-bold text-2xl">Hi, I'm Dogan</h2>
        <p>I'm a frontend developer who likes to create good looking web applications. <br/> I have been actively working on software projects for 3+ years.</p>
        <p>Technologies I'm currently using are: Javascript, React.js, Next.js, GraphQL.</p>
        <p className="pt-5">Follow me online here:</p>
        <ul className="pt-4 pl-6 list-disc">
            <li><a className="text-blue-700" href={ `https://www.github.com/${social.github}` } target="_blank" rel="noreferrer"><u>GitHub</u></a></li>
            <li><a className="text-blue-700" href={ `https://www.linkedin.com/in/${social.linkedin}` } target="_blank" rel="noreferrer"><u>LinkedIn</u></a></li>
        </ul>
    </div>
  )
}

export default Bio
