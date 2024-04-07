import { createStore, combineReducers } from "redux";
import { serachTagsReducer, photoGridReducer } from "./reducers";

const rootReducer = combineReducers({
  search: serachTagsReducer,
  photoGrid: photoGridReducer,
});

const store = createStore(rootReducer);

export default store;
