// components/Dashboard/types

import * as ItemProps from "../../../reducers/data/items/types";
import * as ItemSelectorProps from "../../../selectors/items";

import * as AuthActions from "../../../actions/data/auth";
import * as ItemActions from "../../../actions/data/items";

export type OwnProps = {};

export type StoreProps = {
  items: ItemSelectorProps.ItemListProps;
  selectedItemId: string;
};

export type DispatchProps = {
  fetchItems: typeof ItemActions.fetchItems;
  updateSelectedItem: (id: string) => void;
};

export type ComposeProps = StoreProps & DispatchProps;

export type Props = {} & OwnProps & StoreProps & DispatchProps;
