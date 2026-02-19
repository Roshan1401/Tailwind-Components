import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "lucide-react";

function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const Switch = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      case "system":
        setTheme(systemTheme === "light" ? "dark" : "light");
        break;
    }
  };

  return (
    <button
      onClick={Switch}
      className="flex size-5 items-center justify-center"
    >
      <SunIcon className="absolute inset-0 scale-100 rotate-0 transition-all duration-200 dark:scale-0 dark:rotate-90" />
      <MoonIcon className="absolute inset-0 scale-0 rotate-90 transition-all duration-200 dark:scale-100 dark:rotate-0" />
    </button>
  );
}

export default ModeToggle;
