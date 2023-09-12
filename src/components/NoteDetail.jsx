import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from "../utils/index";

function NoteDetail({ title, createdAt, body, id, onDelete, onArchive, archived }) {
  return (
    <div className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteDetail;
