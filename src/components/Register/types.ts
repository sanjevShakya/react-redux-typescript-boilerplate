// components/Register/types
import { RouteComponentProps } from "react-router-dom";

import * as AuthProps from "../../reducers/data/auth/types";
import * as AuthActions from "../../actions/data/auth";
import * as AuthServices from "../../services/auth";

export type OwnProps = {
  handleRegister: (payload: AuthServices.RegisterPayload) => void;
};

export type StoreProps = {
  auth: AuthProps.StateProps;
};

export type DispatchProps = {};

export type Props = RouteComponentProps<{}> &
  OwnProps &
  StoreProps &
  DispatchProps;
