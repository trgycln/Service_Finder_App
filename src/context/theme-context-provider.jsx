import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const contextValue = {
    theme,
    setTheme,
    toggleTheme: () => {
      if (theme === "light") {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
