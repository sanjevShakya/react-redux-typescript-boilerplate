import { createSelector } from "reselect";

import * as StoreProps from "../reducers/types";
import * as ItemProps from "../reducers/data/items/types";

const getOptions = (state: StoreProps.Props, options: any) => options;

const getData = (state: StoreProps.Props) => state.data;
const getItems = createSelector(getData, data => data.items);
const getTags = createSelector(getData, data => data.tags);

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

export const getItem = createSelector(
  getOptions,
  getTags,
  getItems,
  (options, tags, items) => {
    let item = items.byId[options.itemId];

    return {
      ...item,
      tags: item.tags.map(tagId => {
        return tags.byId[tagId];
      })
    };
  }
);
