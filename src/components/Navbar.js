import React from 'react'
import { Link } from "gatsby"

function Navbar() {
    return (
        <nav className="py-6 mb-16">
            <div className="space-x-6 text-right">
                <Link className="border-b-2 border-transparent hover:border-black" to="/">Home</Link>
                <Link className="border-b-2 border-transparent hover:border-black" to="/blog">Blog</Link>
                <Link className="border-b-2 border-transparent hover:border-black" to="/projects">Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar
