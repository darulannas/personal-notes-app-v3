import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange, locale }) {
  return <input type="text" placeholder={locale === "id" ? "Cari berdasarkan judul ..." : "Search by title ..."} value={keyword} onChange={(event) => keywordChange(event.target.value)} />;
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default SearchBar;
