// components/Login/types

import * as AuthProps from "../../reducers/data/auth/types";
import * as AuthActions from "../../actions/auth";

export type OwnProps = {};

export type StoreProps = {
  auth: AuthProps.Props;
};

export type DispatchProps = {
  login: typeof AuthActions.login;
};

export type Props = {} & OwnProps & StoreProps & DispatchProps;
