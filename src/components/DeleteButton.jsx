// import React from "react";
// import PropTypes from "prop-types";
// import { FiTrash2 } from "react-icons/fi";
// import { Link } from "react-router-dom";

// function DeleteButton({ id, onDelete }) {
//   return (
//     <Link to="/">
//       <button className="action" onClick={() => onDelete(id)}>
//         <FiTrash2 />
//       </button>
//     </Link>
//   );
// }

// DeleteButton.propTypes = {
//   id: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default DeleteButton;

import React from "react";
import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function DeleteButton({ id, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await onDelete(id);
    // Arahkan pengguna ke halaman beranda
    navigate("/");
  };

  return (
    <button className="action" onClick={handleDelete}>
      <FiTrash2 />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
