import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaShareSquare } from "react-icons/fa"

const Project = ({ data }) => {
  const { title, techs, source, live, cover } = data

  return (
    <article>
      <a href={live} target="_blank" rel="noreferrer">
        <GatsbyImage
          className="cover-image"
          image={getImage(cover)}
          alt={title}
        />
      </a>
      <h3 className="mt-3 text-sm">{title}</h3>
      <div className="flex items-center space-x-2 mt-2 mb-3">
        {techs.map((tech, idx) => (
          <span className="pill" key={idx}>
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={source}
          target="_blank"
          rel="noreferrer"
          title="View on GitHub"
          className="flex items-center text-sm"
        >
          <FaGithub className="mr-1" size={"1.3em"} />
        </a>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-sm"
        >
          <FaShareSquare className="mr-1" size={"1.3em"} />
        </a>
      </div>
    </article>
  )
}

export default Project
