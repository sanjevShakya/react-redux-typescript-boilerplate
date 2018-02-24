import * as DashboardUIActions from "../../../actions/ui/dashboard";
import * as DashboardUIProps from "./types";

const { SELECTED_ITEM_CHANGED } = DashboardUIActions.ACTIONS;

const DEFAULT_STATE: DashboardUIProps.StateProps = {
  selectedItemId: null
};

export default (
  state = DEFAULT_STATE,
  action: DashboardUIProps.ActionTypes
) => {
  switch (action.type) {
    case SELECTED_ITEM_CHANGED: {
      return { ...state, selectedItemId: action.payload };
    }
  }

  return state;
};
