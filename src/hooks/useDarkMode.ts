import { useEffect, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const colorTheme = theme == "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    if (theme) {
      root.classList.add(theme);

      // save theme to local storage
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}
