import React, { useState } from "react";
import ThemeContext, { themes } from "../../context/themeContext";

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeProvider;
