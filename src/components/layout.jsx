import * as React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 pb-4">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
