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
    // <div>
    //   <div class="search-container">
    //     <input
    //       style={{ width: "225px", textAlign: "left", fontFamily: "Heebo" }}
    //       type="text"
    //       value={searchTags}
    //       onChange={(e) => setSearchTagsState(e.target.value)}
    //       placeholder="Enter search tags"
    //     />
    //   </div>
    //   <div class="eb1752">
    //     <button class="e95021" onClick={handleSearch} disabled={!searchTags}>
    //       <div>Search</div>
    //     </button>
    //   </div>
    // </div>
    <form action="./" method="get">
      <div class="searchbar">
        <button
          type="submit"
          class="searchbar__button e95021"
          onClick={handleSearch}
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
