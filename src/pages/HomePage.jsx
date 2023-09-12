// import React from "react";
// import { useSearchParams } from "react-router-dom";
// import NoteList from "../components/NoteList";
// import SearchBar from "../components/SearchBar";
// // import { getActiveNotes } from "../utils/local-data";
// import { getActiveNotes } from "../utils/network-data";
// import { Link } from "react-router-dom";
// import AddButton from "../components/AddButton";

// function HomePage() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const defaultKeyword = searchParams.get("keyword");

//   const [notes, setNotes] = React.useState([]);
//   const [keyword, setKeyword] = React.useState(defaultKeyword || "");

//   React.useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const { error, data } = await getActiveNotes();

//         if (!error) {
//           // Berhasil mendapatkan catatan aktif
//           // setNotes(
//           //   data.map((note) => ({
//           //     id: note.id,
//           //     title: note.title,
//           //     body: note.body,
//           //   }))
//           // );
//           if (keyword) {
//             const filteredNotes = data.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
//             setNotes(filteredNotes);
//           } else {
//             setNotes(data);
//           }
//         } else {
//           // Handle error jika diperlukan
//           console.error("Error fetching active notes:", error);
//         }
//       } catch (error) {
//         console.error("Error fetching notes:", error);
//       }
//     };

//     fetchNotes();
//   }, [keyword]);

//   const onKeywordChangeHandler = (newKeyword) => {
//     setKeyword(newKeyword);
//     changeSearchParams(newKeyword);
//   };

//   function changeSearchParams(newKeyword) {
//     setSearchParams({ keyword: newKeyword });
//   }

//   return (
//     <section>
//       <h2>Catatan Aktif</h2>
//       <div className="search-bar">
//         <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
//       </div>
//       <NoteList notes={notes} />
//       <div className="homepage__action">
//         <Link to="/notes/new">
//           <AddButton />
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default HomePage;

import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
// import { getActiveNotes } from "../utils/local-data";
import { getActiveNotes } from "../utils/network-data";
import { Link } from "react-router-dom";
import AddButton from "../components/AddButton";
import PropTypes from "prop-types";

function HomePage({ locale }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get("keyword");

  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(defaultKeyword || "");

  React.useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { error, data } = await getActiveNotes();

        if (!error) {
          // Berhasil mendapatkan catatan aktif
          // setNotes(
          //   data.map((note) => ({
          //     id: note.id,
          //     title: note.title,
          //     body: note.body,
          //   }))
          // );
          if (keyword) {
            const filteredNotes = data.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));
            setNotes(filteredNotes);
          } else {
            setNotes(data);
          }
        } else {
          // Handle error jika diperlukan
          console.error("Error fetching active notes:", error);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, [keyword]);

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    changeSearchParams(newKeyword);
  };

  function changeSearchParams(newKeyword) {
    setSearchParams({ keyword: newKeyword });
  }

  return (
    <section>
      <h2>{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
      <div className="search-bar">
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} locale={locale} />
      </div>
      <NoteList notes={notes} locale={locale} />
      <div className="homepage__action">
        <Link to="/notes/new">
          <AddButton />
        </Link>
      </div>
    </section>
  );
}

HomePage.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default HomePage;
