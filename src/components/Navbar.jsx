import React from "react"
import { Link } from "gatsby"
import ThemeSwitcher from "./ThemeSwitcher"
import { globalHistory } from "@reach/router"

function Navbar() {
  const path = globalHistory.location.pathname
  // Classes
  const linkClassNames =
    "border-b-2 border-transparent hover:border-black border-dashed dark:hover:border-white active:border-black"
  const linkHomeClassname =
    path === "/" ? "border-black dark:border-white" : " "
  const linkProjectsClassname =
    path === "/projects" ? "border-black dark:border-white" : " "

  return (
    <nav className="flex items-center justify-between py-6 mb-16">
      <ThemeSwitcher />
      <div className="space-x-6 text-right">
        <Link className={`${linkClassNames} ${linkHomeClassname}`} to="/">
          Home
        </Link>
        <Link
          className={`${linkClassNames} ${linkProjectsClassname}`}
          to="/projects"
        >
          Projects
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
