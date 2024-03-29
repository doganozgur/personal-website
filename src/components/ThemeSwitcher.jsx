import React, { useEffect } from "react"
import { FaSun } from "react-icons/fa"

export default function ThemeSwitcher() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const localStorageTheme = localStorage.getItem("theme")
      const htmlTag = document.querySelector("html")

      if (localStorageTheme) {
        htmlTag.classList.add(localStorageTheme)
      }
    }
  }, [])

  function toggleTheme() {
    if (typeof document !== "undefined") {
      const localStorageTheme = localStorage.getItem("theme")
      const htmlTag = document.querySelector("html")
      htmlTag.classList.toggle("dark")

      if (localStorageTheme) {
        localStorage.removeItem("theme")
      } else {
        localStorage.setItem("theme", htmlTag.classList.value)
      }
    }
  }

  return (
    <button onClick={toggleTheme}>
      <FaSun className="dark:text-white" size={"1.3em"} />
    </button>
  )
}
