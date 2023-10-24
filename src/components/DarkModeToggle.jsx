import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
};

export default DarkModeToggle;
