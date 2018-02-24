import { Dispatch } from "redux";

import * as AuthServices from "../services/auth";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REFRESH = "REFRESH";

export const ACTIONS = {
  LOGIN_PENDING: `${LOGIN}_PENDING`,
  LOGIN_FULFILLLED: `${LOGIN}_FULFILLED`,
  LOGIN_REJECTED: `${LOGIN}_REJECTED`,

  LOGOUT_PENDING: `${LOGOUT}_PENDING`,
  LOGOUT_FULFILLLED: `${LOGOUT}_FULFILLED`,
  LOGOUT_REJECTED: `${LOGOUT}_REJECTED`,

  REFRESH_PENDING: `${REFRESH}_PENDING`,
  REFRESH_FULFILLLED: `${REFRESH}_FULFILLED`,
  REFRESH_REJECTED: `${REFRESH}_REJECTED`
};

export const login = (data: AuthServices.LoginPayload) => {
  return (dispatch: Dispatch<{}>) => {
    dispatch({
      type: ACTIONS.LOGIN_PENDING
    });
    AuthServices.login(data)
      .then(response => {
        dispatch({
          type: ACTIONS.LOGIN_FULFILLLED,
          payload: response
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.LOGIN_REJECTED
        });
      });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<{}>) => {
    dispatch({
      type: ACTIONS.LOGOUT_PENDING
    });
    AuthServices.logout()
      .then(() => {
        dispatch({
          type: ACTIONS.LOGOUT_FULFILLLED
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.LOGOUT_REJECTED
        });
      });
  };
};

export const refresh = (refreshToken: string) => {
  return (dispatch: Dispatch<{}>) => {
    dispatch({
      type: ACTIONS.REFRESH_PENDING
    });
    AuthServices.refresh(refreshToken)
      .then(response => {
        dispatch({
          type: ACTIONS.REFRESH_FULFILLLED,
          payload: response
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.REFRESH_REJECTED
        });
      });
  };
};
