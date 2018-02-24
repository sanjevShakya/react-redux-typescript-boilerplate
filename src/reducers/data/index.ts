import { combineReducers } from "redux";
import auth from "./auth";
import items from "./items";
import tags from "./tags";

export default combineReducers({
  auth,
  items,
  tags
});
