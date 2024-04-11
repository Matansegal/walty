import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhotosGrid from "./PhotoGrid";
import Tags from "./Tags";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const searchTags = useSelector((state) => state.search.searchTags);
  const pixabatUrl = "https://pixabay.com/api";
  const apiKey = "43264602-7eca1d36ed4a9f04d5bbaf12c";
  const picsAmount = 100;
  const picsPerPage = 20;
  const navigate = useNavigate();

  const backButton = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        `${pixabatUrl}/?key=${apiKey}&q=${searchTags}&image_type=photo&per_page=${picsAmount}`
      );
      const data = await response.json();
      setPhotos(data.hits);
    };

    if (searchTags) {
      fetchPhotos();
    }
  }, [searchTags]);

  return (
    <div class="_98a547">
      <div style={{ margin: "0 80% 15px 0" }}>
        <button class="back-button" onClick={backButton}>
          <span>Go Back</span>
        </button>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Tags tags={searchTags} />
      </div>
      <PhotosGrid photos={photos} photosPerPage={picsPerPage} />
    </div>
  );
};

export default Gallery;
