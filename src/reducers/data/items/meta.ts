import * as ItemActions from "../../../actions/items";
import * as ItemProps from "./types";

const {
  FETCH_ITEMS_PENDING,
  FETCH_ITEMS_FULFILLLED,
  FETCH_ITEMS_REJECTED
} = ItemActions.ACTIONS;

const DEFAULT_STATE: ItemProps.MetaProps = {
  isLoading: false,
  error: null
};

export default (state = DEFAULT_STATE, action: ItemProps.ActionTypes) => {
  switch (action.type) {
    case FETCH_ITEMS_PENDING: {
      return {
        ...state,
        isLoading: true
      };
    }

    case FETCH_ITEMS_FULFILLLED: {
      return {
        isLoading: false,
        error: null
      };
    }

    case FETCH_ITEMS_REJECTED: {
      return {
        isLoading: false,
        error: "Something went wrong"
      };
    }
  }

  return state;
};
