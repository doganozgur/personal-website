import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import ThemeSwitcher from "./ThemeSwitcher"
import { globalHistory } from "@reach/router"

function Navbar() {
  const [path, setPath] = useState(globalHistory.location.pathname)

  useEffect(() => {
    setPath(globalHistory.location.pathname)
  }, [globalHistory.location.pathname])

  // Default classes
  const linkClassNames =
    "border-b-2 border-transparent hover:border-black border-dashed dark:hover:border-white active:border-black"

  return (
    <nav className="flex items-center justify-between py-6 mb-16">
      <ThemeSwitcher />
      <div className="space-x-6 text-right">
        <Link
          className={`${linkClassNames} ${
            path === "/" ? "border-black dark:border-white" : " "
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${linkClassNames} ${
            path === "/projects" ? "border-black dark:border-white" : " "
          }`}
          to="/projects"
        >
          Projects
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
