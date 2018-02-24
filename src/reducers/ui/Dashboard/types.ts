import * as DashboardUIActions from "../../../actions/ui/dashboard";

const { SELECTED_ITEM_CHANGED } = DashboardUIActions.ACTIONS;

export interface StateProps {
  selectedItemId: string;
}

export interface ActionTypes {
  type: typeof SELECTED_ITEM_CHANGED;
  payload: any;
}
