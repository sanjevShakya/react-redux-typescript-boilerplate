// components/Dashboard/types

import * as AuthProps from "../../reducers/data/auth/types";
import * as ItemProps from "../../reducers/data/items/types";
import * as ItemSelectorProps from "../../selectors/items";

import * as AuthActions from "../../actions/data/auth";
import * as ItemActions from "../../actions/data/items";

export type OwnProps = {};

export type StoreProps = {};

export type DispatchProps = {
  logout: typeof AuthActions.logout;
};

export type ComposeProps = StoreProps & DispatchProps;

export type Props = {} & OwnProps & StoreProps & DispatchProps;
