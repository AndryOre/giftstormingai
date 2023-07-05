import { useTheme } from "next-themes";
import { Sun, Moon } from "@phosphor-icons/react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="dark:shadow-[0 1px 2px 0 rgba(255,255,255,0.05)] inline-block cursor-pointer rounded border border-neutral-100 bg-neutral-50 p-1 shadow-sm dark:border-neutral-900 dark:bg-neutral-950"
      onClick={handleToggle}
    >
      {theme === "light" ? (
        <Moon weight="regular" size={16} className="text-violet-500" />
      ) : (
        <Sun weight="regular" size={16} className="text-yellow-500" />
      )}
    </div>
  );
};

export default ThemeToggle;
