import * as AuthActions from "../../../actions/data/auth";
import * as AuthProps from "./types";

const {
  LOGIN_FULFILLLED,
  LOGIN_REJECTED,
  LOGOUT_FULFILLLED,
  REFRESH_FULFILLLED,
  REFRESH_REJECTED
} = AuthActions.ACTIONS;

const DEFAULT_STATE: AuthProps.StateProps = {
  isLoggedIn: false,
  token: {
    access: null,
    refresh: null
  },
  user: {
    id: null,
    firstName: null,
    lastName: null,
    roles: []
  }
};

export default (
  state: AuthProps.StateProps = DEFAULT_STATE,
  action: AuthProps.ActionTypes
) => {
  switch (action.type) {
    case LOGIN_FULFILLLED: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true
      };
    }

    case LOGIN_REJECTED: {
      return DEFAULT_STATE;
    }

    case LOGOUT_FULFILLLED: {
      return DEFAULT_STATE;
    }

    case REFRESH_FULFILLLED: {
      return {
        ...state,
        token: {
          ...state.token,
          access: action.payload.token.access
        },
        isLoggedIn: true
      };
    }

    case REFRESH_REJECTED: {
      return DEFAULT_STATE;
    }
  }

  return state;
};
