import { ThemeConsumer } from "../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="toggle-locale" onClick={toggleTheme}>
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
