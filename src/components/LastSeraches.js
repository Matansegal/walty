import React from "react";
import { useSelector } from "react-redux";
import Tags from "./Tags";

const LastSeraches = () => {
  const lastSearches = useSelector((state) => state.search.lastSearches);
  if (lastSearches.length == 0) {
    return <div></div>;
  }

  return (
    <div>
      <h2>Last Searches</h2>
      <div class="last-searches">
        <ul>
          {lastSearches
            .map((searchTags) => <Tags tags={searchTags} />)
            .reverse()}
        </ul>
      </div>
    </div>
  );
};

export default LastSeraches;
