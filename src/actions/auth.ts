import { createActions } from "redux-actions";

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

export const { login, logout, refresh } = createActions({
  [LOGIN]: AuthServices.login,
  [LOGOUT]: AuthServices.logout,
  [REFRESH]: AuthServices.refresh
});