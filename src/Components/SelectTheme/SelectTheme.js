import React, { useContext } from "react";
import ThemeContext, { themes } from "../../context/themeContext";

const SelectTheme = () => {
  const { setTheme } = useContext(ThemeContext);

  const options = () => {
    return Object.keys(themes).map((el) => {
      return (
        <option key={el} value={el}>
          {el}
        </option>
      );
    });
  };

  const changeTheme = (e) => {
    const selectedTheme = e.target.value;
    console.log(themes[selectedTheme]);
    setTheme(themes[selectedTheme]);
  };

  return <select onChange={changeTheme}>{options()}</select>;
};

export default SelectTheme;
