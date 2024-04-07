export const SET_SEARCH_TAGS = "SET_SEARCH_TAGS";

export const setSearchTags = (tags) => ({
  type: SET_SEARCH_TAGS,
  payload: tags,
});

export const setCurrentPage = (pageNumber) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: pageNumber,
  };
};
