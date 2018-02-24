// components/Login/types

import * as LoginFormProps from "./LoginForm/types";

import * as AuthProps from "../../reducers/data/auth/types";
import * as AuthActions from "../../actions/auth";

export type OwnProps = {
  handleLogin: (d: LoginFormProps.FormDataProps) => void;
};

export type StoreProps = {
  auth: AuthProps.StateProps;
};

export type DispatchProps = {
  login: typeof AuthActions.login;
};

export type ComposeProps = StoreProps & DispatchProps;

export type Props = OwnProps & ComposeProps;
