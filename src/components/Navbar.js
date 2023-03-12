import React from "react"
import { Link } from "gatsby"
import ThemeSwitcher from "./ThemeSwitcher"

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-16">
      <ThemeSwitcher />
      <div className="space-x-6 text-right">
        <Link
          className="border-b-2 border-transparent hover:border-black dark:hover:border-white"
          to="/"
        >
          Home
        </Link>
        <Link
          className="border-b-2 border-transparent hover:border-black dark:hover:border-white"
          to="/projects"
        >
          Projects
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
