import React from "react"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="text-center mt-14 text-sm">Doğan Özgür - {year}</footer>
  )
}
