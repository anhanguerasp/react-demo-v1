import { useState } from "react";
import useDarkSide from "../../utils/navbar/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "./style.scss";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="">
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={35}
        //style={{ position: "absolute", top: "7" }}
        className="dk-switch"
      />
    </div>
  );
}
