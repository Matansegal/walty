// import React from "react";

// const PhotosGrid = ({ photos }) => {
//   console.log(photos);
//   return (
//     <div>
//       {photos.map((photo) => (
//         <img
//           key={photo.id}
//           src={photo.webformatURL}
//           alt={photo.tags}
//           style={{
//             width: photo.webformatWidth / 1.5,
//             height: photo.webformatHeight / 1.5,
//             margin: "10px",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default PhotosGrid;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../actions";

const PhotoGrid = ({ photos }) => {
  const currentPage = useSelector((state) => state.photoGrid.currentPage);
  const dispatch = useDispatch();
  const photosPerPage = 20;

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));

  return (
    <div>
      <div className="photo-grid">
        {currentPhotos.map((photo, index) => (
          <img
            class="photo"
            key={photo.id}
            src={photo.webformatURL}
            alt={photo.tags}
            style={{
              width: photo.webformatWidth / 1.5,
              height: photo.webformatHeight / 1.5,
              margin: "10px",
            }}
          />
        ))}
      </div>
      <Pagination
        photosPerPage={photosPerPage}
        totalPhotos={photos.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ photosPerPage, totalPhotos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => paginate(number)}>{number}</button>
        </li>
      ))}
    </ul>
  );
};

export default PhotoGrid;
