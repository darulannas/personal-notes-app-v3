// import React from "react";
// import NoteList from "../components/NoteList";
// import { getArchivedNotes } from "../utils/local-data";
// import SearchBar from "../components/SearchBar";

// function ArchivesPage() {
//   const archivedNotes = getArchivedNotes();

//   const [keyword, setKeyword] = React.useState("");

//   function handleKeywordChange(newKeyword) {
//     setKeyword(newKeyword);
//   }

//   const filteredNotes = archivedNotes.filter((note) => {
//     return note.title.toLowerCase().includes(keyword.toLowerCase());
//   });

//   return (
//     <div>
//       <h2>Catatan Arsip</h2>
//       <div className="search-bar">
//         <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />
//       </div>
//       {filteredNotes.length === 0 ? <p className="notes-list-empty">Arsip kosong.</p> : <NoteList notes={filteredNotes} />}
//     </div>
//   );
// }

// export default ArchivesPage;

import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import PropTypes from "prop-types";

function ArchivesPage({ locale }) {
  const [archivedNotes, setArchivedNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(true); // Tambahkan status isLoading

  React.useEffect(() => {
    const fetchArchivedNotes = async () => {
      const { error, data } = await getArchivedNotes();

      if (!error) {
        setArchivedNotes(data);
      } else {
        // Handle error jika diperlukan
        console.error("Error fetching archived notes:", error);
      }

      setIsLoading(false); // Set isLoading menjadi false ketika data telah dimuat
    };

    fetchArchivedNotes();
  }, []);

  function handleKeywordChange(newKeyword) {
    setKeyword(newKeyword);
  }

  const filteredNotes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div>
      <h2>{locale === "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
      <div className="search-bar">
        <SearchBar keyword={keyword} keywordChange={handleKeywordChange} locale={locale} />
      </div>
      {/* {filteredNotes.length === 0 ? <p className="notes-list-empty">Arsip kosong.</p> : <NoteList notes={filteredNotes} />} */}
      {isLoading ? (
        <p className="notes-list">{locale === "id" ? "Memuat catatan ..." : "Loading notes ..."}</p> // Tampilkan pesan loading saat isLoading true
      ) : filteredNotes.length > 0 ? (
        <NoteList notes={filteredNotes} locale={locale} />
      ) : (
        <p className="notes-list-empty">{locale === "id" ? "Arsip kosong." : "No notes"}</p>
      )}
    </div>
  );
}

ArchivesPage.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default ArchivesPage;
