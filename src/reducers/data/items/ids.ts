import * as ItemActions from "../../../actions/items";
import * as ItemProps from "./types";

const { FETCH_ITEMS_FULFILLLED, FETCH_ITEMS_REJECTED } = ItemActions.ACTIONS;

const DEFAULT_STATE: ItemProps.IDsProps = [];

export default (state = DEFAULT_STATE, action: ItemProps.ActionTypes) => {
  switch (action.type) {
    case FETCH_ITEMS_FULFILLLED: {
      return action.payload.result;
    }

    case FETCH_ITEMS_REJECTED: {
      return DEFAULT_STATE;
    }
  }

  return state;
};
