import * as ItemUIActions from "../../../actions/ui/items";
import * as ItemsUIProps from "./types";

const { SELECTED_ITEM_CHANGED } = ItemUIActions.ACTIONS;

const DEFAULT_STATE: ItemsUIProps.StateProps = {
  selectedItemId: null
};

export default (state = DEFAULT_STATE, action: ItemsUIProps.ActionTypes) => {
  switch (action.type) {
    case SELECTED_ITEM_CHANGED: {
      return { ...state, selectedItemId: action.payload };
    }
  }

  return state;
};
