import { createSelector } from "reselect";

import * as StoreProps from "../reducers/types";
import * as ItemProps from "../reducers/data/items/types";

const getOptions = (state: StoreProps.Props, options: any) => options;

const getData = (state: StoreProps.Props) => state.data;
const getItems = createSelector(getData, data => data.items);

export interface ItemListProps {
  isLoading: boolean;
  error: string;
  data: Array<string>;
}

export const getVisibleItems = createSelector(getItems, items => {
  return {
    isLoading: items.meta.isLoading,
    error: items.meta.error,
    data: items.ids
  };
});

export const makeGetItem = () =>
  createSelector(
    (state: StoreProps.Props, itemId: string) => itemId,
    getItems,
    (itemId, items) => {
      return items.byId[itemId];
    }
  );
