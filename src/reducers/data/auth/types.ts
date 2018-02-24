import * as AuthActions from "../../../actions/data/auth";

const {
  LOGIN_FULFILLLED,
  LOGIN_REJECTED,
  LOGOUT_FULFILLLED,
  REFRESH_FULFILLLED,
  REFRESH_REJECTED
} = AuthActions.ACTIONS;

export interface StateProps {
  isLoggedIn: boolean;
  token: {
    access: string;
    refresh: string;
  };
}

export interface ActionTypes {
  type:
    | typeof LOGIN_FULFILLLED
    | typeof LOGIN_REJECTED
    | typeof LOGOUT_FULFILLLED;
  payload: any;
}
