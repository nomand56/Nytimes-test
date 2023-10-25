import { useEffect, useState } from "react"
import { DarkModeSwitch } from "react-toggle-dark-mode"

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark"))
  )

  const toggleDarkMode = () => {
    localStorage.setItem("dark", !isDarkMode)
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    document.documentElement.classList[isDarkMode ? "remove" : "add"]("dark")
  }, [isDarkMode])

  return (
    <button
      className="flex flex-col border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 p-2"
      onClick={toggleDarkMode}
    >
      <DarkModeSwitch checked={!isDarkMode} size={22} onChange={() => {}} />
    </button>
  )
}

export default DarkModeToggle
