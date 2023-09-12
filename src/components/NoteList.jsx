import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { noteItemPropTypes } from "./NoteItem";

function NoteList({ notes, locale }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulasikan waktu pemuatan data dengan menggunakan setTimeout
    const delay = 500; // Ubah sesuai kebutuhan Anda
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    // Bersihkan timer saat komponen dibongkar
    return () => clearTimeout(timer);
  }, []);

  // return <div className="notes-list">{notes.length === 0 ? <p className="notes-list-empty">Tidak ada catatan</p> : notes.map((note) => <NoteItem key={note.id} id={note.id} {...note} />)}</div>;

  return (
    <div className="notes-list">
      {isLoading ? (
        <p>{locale === "id" ? "Memuat catatan ..." : "Loading notes ..."}</p>
      ) : notes.length === 0 ? (
        <p className="notes-list-empty">{locale === "id" ? "Tidak ada catatan" : "No notes"}</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} id={note.id} {...note} />)
      )}
    </div>
  );
}

// NoteList.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
  locale: PropTypes.string.isRequired,
};

export default NoteList;

// import React from "react";
// import PropTypes from "prop-types";
// import NoteItem from "./NoteItem";

// function NoteList({ notes }) {
//   return (
//     <div className="note-list">
//       {notes.map((note) => (
//         <NoteItem key={note.id} note={note} />
//       ))}
//     </div>
//   );
// }

// NoteList.propTypes = {
//   notes: PropTypes.arrayOf(NoteItem.propTypes.note).isRequired,
// };

// export default NoteList;
