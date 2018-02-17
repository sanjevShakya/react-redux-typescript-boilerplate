// components/Dashboard/types

import * as AuthProps from "../../reducers/data/auth/types";
import * as AuthActions from "../../actions/auth";

export type OwnProps = {};

export type StoreProps = {};

export type DispatchProps = {
  logout: typeof AuthActions.logout;
};

export type Props = {} & OwnProps & StoreProps & DispatchProps;
