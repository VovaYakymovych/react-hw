import {useTheme} from "../../hooks/useTheme.tsx";


const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "dark" : "light"} theme
        </button>
    );
};

export default ThemeSwitcher;