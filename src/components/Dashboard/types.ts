// components/Dashboard/types

import * as AuthProps from "../../reducers/data/auth/types";
import * as ItemProps from "../../reducers/data/items/types";
import * as ItemSelectorProps from "../../selectors/items";

import * as AuthActions from "../../actions/auth";
import * as ItemActions from "../../actions/items";

export type OwnProps = {};

export type StoreProps = {
  items: ItemSelectorProps.ItemListProps;
  item: ItemProps.ItemProps;
};

export type DispatchProps = {
  logout: typeof AuthActions.logout;
  fetchItems: typeof ItemActions.fetchItems;
  updateSelectedItem: (id: string) => void;
};

export type Props = {} & OwnProps & StoreProps & DispatchProps;
