import { SET_SEARCH_TAGS } from "./actions";

const searchTagInitialState = {
  searchTags: "",
  lastSearches: [],
};

const serachTagsReducer = (state = searchTagInitialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TAGS:
      return {
        ...state,
        searchTags: action.payload,
        lastSearches: [...state.lastSearches.slice(-2), action.payload],
      };
    default:
      return state;
  }
};

const photoGridInitialState = {
  currentPage: 1,
};

const photoGridReducer = (state = photoGridInitialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export { serachTagsReducer, photoGridReducer };
