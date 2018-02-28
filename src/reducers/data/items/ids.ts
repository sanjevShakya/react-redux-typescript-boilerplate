import * as ItemActions from "../../../actions/data/items";
import * as ItemProps from "./types";

const {
  FETCH_ITEMS_FULFILLLED,
  FETCH_ITEMS_REJECTED,
  SAVE_ITEMS_FULFILLLED
} = ItemActions.ACTIONS;

const DEFAULT_STATE: ItemProps.IDsProps = [];

export default (state = DEFAULT_STATE, action: ItemProps.ActionTypes) => {
  switch (action.type) {
    case FETCH_ITEMS_FULFILLLED: {
      return action.payload.result;
    }

    case FETCH_ITEMS_REJECTED: {
      return DEFAULT_STATE;
    }

    case SAVE_ITEMS_FULFILLLED: {
      if (state.indexOf(action.payload.result) === -1)
        state.unshift(action.payload.result);
      return state;
    }
  }

  return state;
};
