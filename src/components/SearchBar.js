import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTags } from "../actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTags, setSearchTagsState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = () => {
    dispatch(setSearchTags(searchTags.trim()));
    setSearchTagsState("");
    navigate("/gallery");
  };

  return (
    <form action="./" method="get">
      <div class="searchbar">
        <button
          type="submit"
          class="searchbar__button e95021"
          onClick={handleSearch}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch : "")}
          disabled={!searchTags}
        >
          <i class="material-icons">search</i>
        </button>
        <input
          style={{ width: "225px", textAlign: "left", fontFamily: "Heebo" }}
          type="text"
          class="searchbar__input"
          value={searchTags}
          onChange={(e) => setSearchTagsState(e.target.value)}
          placeholder="Enter search tags"
        />
      </div>
    </form>
  );
};

export default SearchBar;
