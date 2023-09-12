import { FiLogOut } from "react-icons/fi";
import PropTypes from "prop-types";

function ToggleLogout({ logout, name }) {
  return (
    <button className="button-logout" onClick={logout}>
      <FiLogOut />
      {name}
    </button>
  );
}

ToggleLogout.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ToggleLogout;
