import * as TagActions from "../../../actions/data/tags";

import { combineReducers } from "redux";

import byId from "./byId";
import ids from "./ids";
import meta from "./meta";

const { FETCH_TAGS_FULFILLLED, FETCH_TAGS_REJECTED } = TagActions.ACTIONS;

export default combineReducers({
  byId,
  ids,
  meta
});
