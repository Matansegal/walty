import React from "react";

export default function Tags({ tags }) {
  const splitIntoBoxes = (searchTags) => {
    return searchTags.split(" ").filter((tag) => tag.trim() !== "");
  };
  return (
    <div
      class="_91418f _4b8672 a12742 _1b5290"
      style={{ marginBottom: "10px" }}
    >
      {splitIntoBoxes(tags).map((word, index) => (
        <span key={index} class="card">
          {word}
        </span>
      ))}
    </div>
  );
}
