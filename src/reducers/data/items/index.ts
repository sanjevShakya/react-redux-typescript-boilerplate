import * as ItemActions from "../../../actions/data/items";

import { combineReducers } from "redux";

import byId from "./byId";
import ids from "./ids";
import meta from "./meta";

const { FETCH_ITEMS_FULFILLLED, FETCH_ITEMS_REJECTED } = ItemActions.ACTIONS;

export default combineReducers({
  byId,
  ids,
  meta
});
