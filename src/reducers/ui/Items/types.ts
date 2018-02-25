import * as ItemsUIActions from "../../../actions/ui/items";

const { SELECTED_ITEM_CHANGED } = ItemsUIActions.ACTIONS;

export interface StateProps {
  selectedItemId: string;
}

export interface ActionTypes {
  type: typeof SELECTED_ITEM_CHANGED;
  payload: any;
}
