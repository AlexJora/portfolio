import { useEffect, createContext, useState } from "react";
import PropTypes from "prop-types";

// Create a new context for managing the theme
const ThemeContext = createContext();

// Function to get the current theme from local storage or set a default if not found
const getTheme = () => {
  // Retrieve the theme from local storage
  const theme = localStorage.getItem("theme");

  // If no theme is found in local storage, set the default theme to "light-theme"
  if (!theme) {
    localStorage.setItem("theme", "light-theme");
    return "light-theme";
  } else {
    // Return the theme found in local storage
    return theme;
  }
};

// =======THEME PROVIDER component manages the theme state and provides it to its children
const ThemeProvider = ({ children }) => {
  // Use state to manage the current theme, initialize with the result of getTheme function
  const [theme, setTheme] = useState(getTheme);

  // Function to toggle between "dark-theme" and "light-theme"
  function toggleTheme() {
    // If the current theme is "dark-theme", switch to "light-theme", and vice versa
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  // Effect to run when the theme changes, updating the theme in local storage
  useEffect(() => {
    const refreshTheme = () => {
      // Update the theme in local storage
      localStorage.setItem("theme", theme);
    };

    // Call the refreshTheme function when the theme changes
    refreshTheme();
  }, [theme]); // Depend on the 'theme' variable to trigger the effect when it changes

  // Provide the theme state and related functions to its children components
  return (
    <ThemeContext.Provider
      value={{
        theme, // Current theme
        setTheme, // Function to set the theme
        toggleTheme, // Function to toggle between dark and light themes
      }}
    >
      {/* Render the children components */}
      {children}
    </ThemeContext.Provider>
  );
};

// Define prop types for the ThemeProvider component
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
