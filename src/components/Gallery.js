import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhotosGrid from "./PhotoGrid";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const searchTags = useSelector((state) => state.search.searchTags);
  const pixabatUrl = "https://pixabay.com/api";
  const apiKey = "43264602-7eca1d36ed4a9f04d5bbaf12c";
  const picsAmount = 100;
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
      <div>
        <button class="back-button" onClick={backButton}>
          <span>Go Back</span>
        </button>
      </div>

      <div class="_91418f">
        <div class="_4b8672 a12742 _1b5290" style={{ color: "white" }}>
          <h2>{searchTags}</h2>
        </div>

        <div>
          <PhotosGrid photos={photos} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
