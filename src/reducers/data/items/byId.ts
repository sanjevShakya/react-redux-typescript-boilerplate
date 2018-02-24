import * as ItemActions from "../../../actions/data/items";
import * as ItemProps from "./types";

const { FETCH_ITEMS_FULFILLLED, FETCH_ITEMS_REJECTED } = ItemActions.ACTIONS;

const DEFAULT_STATE: ItemProps.ByIdProps = {};

export default (state = DEFAULT_STATE, action: ItemProps.ActionTypes) => {
  if (action.payload && action.payload.entities) {
    return {
      ...state,
      ...action.payload.entities.items
    };
  }
  return state;
};
