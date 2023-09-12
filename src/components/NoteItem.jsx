import React from "react";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";

function NoteItem({ id, title, createdAt, body }) {
  return (
    <div className="note-item">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
    </div>
  );
}

// NoteItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   createdAt: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
// };

export const noteItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

NoteItem.propTypes = noteItemPropTypes;

export default NoteItem;

// import React from "react";
// import NoteItemBody from "./NoteItemBody";
// import PropTypes from "prop-types";

// const noteShape = PropTypes.shape({
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   createdAt: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
// });

// function NoteItem({ note }) {
//   return (
//     <div className="note-item">
//       <NoteItemBody {...note} />
//     </div>
//   );
// }

// NoteItem.propTypes = {
//   note: noteShape.isRequired,
// };

// export default NoteItem;
