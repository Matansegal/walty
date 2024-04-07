import React from "react";

export default function Tags({ tags }) {
  const splitIntoBoxes = (searchTags) => {
    return searchTags.split(" ").filter((tag) => tag.trim() !== "");
  };
  return (
    <div class="_91418f">
      <div class="_4b8672 a12742 _1b5290">
        {splitIntoBoxes(tags).map((word, index) => (
          <span key={index} class="card">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
