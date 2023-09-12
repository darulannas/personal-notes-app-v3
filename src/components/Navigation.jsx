import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import ToggleLogout from "./ToggleLogout";
import ToggleLocale from "./ToggleLocale";

function Navigation({ showArchivesButton, showLogoutButton, logout, name, locale }) {
  return (
    <>
      <h1>
        <Link to="/">{locale === "id" ? "Aplikasi Catatan" : "Notes App"}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          {showArchivesButton && (
            <li>
              <Link to="/archives">{locale === "id" ? "Terarsip" : "Archived"}</Link>
            </li>
          )}
          <li>
            <ToggleLocale />
          </li>
          <li>
            <ToggleTheme />
          </li>
          {showLogoutButton && (
            <li>
              <ToggleLogout logout={logout} name={name} />
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

Navigation.propTypes = {
  showArchivesButton: PropTypes.bool.isRequired,
  showLogoutButton: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Navigation;
