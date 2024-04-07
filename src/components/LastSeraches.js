import React from "react";
import { useSelector } from "react-redux";

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
            .map((tags, index) => <li key={index}>{tags}</li>)
            .reverse()}
        </ul>
      </div>
    </div>
  );
};

export default LastSeraches;
