import React from "react";

export const themes = {
  light: {
    color: "black",
    background: "white",
  },
  dark: {
    color: "white",
    background: "black",
  },
  toxic: {
    color: "red",
    background: "green",
  },
};

const ThemeContext = React.createContext();

export default ThemeContext;
