import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../actions";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const PhotoGrid = ({ photos, photosPerPage }) => {
  const currentPage = useSelector((state) => state.photoGrid.currentPage);
  const dispatch = useDispatch();
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const columnsCount = {
    300: 2,
    600: 3,
    900: 4,
  };

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={columnsCount}>
        <Masonry gutter="8px">
          {currentPhotos.map((photo) => (
            <img
              key={photo.id}
              src={photo.webformatURL}
              alt={photo.tags}
              style={{ width: "100%" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <Pagination
        photosPerPage={photosPerPage}
        totalPhotos={photos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ photosPerPage, totalPhotos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <button
        class="page-button"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage == 1}
      >
        <span>Prev Page</span>
      </button>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            class="page-button"
            onClick={() => paginate(number)}
            disabled={currentPage == number}
          >
            <span>{number}</span>
          </button>
        </li>
      ))}
      <button
        class="page-button"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage == pageNumbers[pageNumbers.length - 1]}
      >
        <span>Next Page</span>
      </button>
    </ul>
  );
};

export default PhotoGrid;
