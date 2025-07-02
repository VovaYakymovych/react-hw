import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "dark" : "light"} theme
        </button>
    );
};

export default ThemeSwitcher;