import * as React from "react"
import Navbar from "./Navbar.js"

const Layout = ({ children }) => {

  return (
    <div className="max-w-2xl mx-auto px-4">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
