import { Dispatch } from "redux";

export const ACTIONS = {
  SELECTED_ITEM_CHANGED: "SELECTED_ITEM_CHANGED"
};

export const selectedItemChanged = (itemId: string) => {
  return {
    type: ACTIONS.SELECTED_ITEM_CHANGED,
    payload: itemId
  };
};
