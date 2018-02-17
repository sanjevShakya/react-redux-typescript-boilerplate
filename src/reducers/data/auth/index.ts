import * as AuthActions from "../../../actions/auth";

const {
  LOGIN_FULFILLLED,
  LOGIN_REJECTED,
  LOGOUT_FULFILLLED,
  REFRESH_FULFILLLED,
  REFRESH_REJECTED
} = AuthActions.ACTIONS;

interface StateProps {
  isLoggedIn: boolean;
  token: {
    access: string;
    refresh: string;
  };
}

interface ActionTypes {
  type:
    | typeof LOGIN_FULFILLLED
    | typeof LOGIN_REJECTED
    | typeof LOGOUT_FULFILLLED;
  payload: any;
}

const DEFAULT_STATE: StateProps = {
  isLoggedIn: false,
  token: {
    access: null,
    refresh: null
  }
};

export default (state: StateProps = DEFAULT_STATE, action: ActionTypes) => {
  switch (action.type) {
    case LOGIN_FULFILLLED: {
      return {
        ...state,
        token: action.payload.token,
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
