import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import data from "./data";
import ui from "./ui";

const persistConfig = {
  key: "root",
  storage
};

export default combineReducers({
  data: persistReducer(persistConfig, data),
  ui,
  form
});
