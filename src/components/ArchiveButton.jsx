import React from "react";
import PropTypes from "prop-types";
import { FiDownload, FiUpload } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ArchiveButton({ id, archived, onArchive }) {
  const navigate = useNavigate();

  const handleArchiveClick = async () => {
    await onArchive(id);
    navigate("/");
  };

  return (
    <button className="action" onClick={handleArchiveClick}>
      {archived ? <FiUpload /> : <FiDownload />}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
