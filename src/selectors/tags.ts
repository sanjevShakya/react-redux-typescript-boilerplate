import { createSelector } from "reselect";

import * as StoreProps from "../reducers/types";
import * as TagProps from "../reducers/data/tags/types";

const getOptions = (state: StoreProps.Props, options: any) => options;

const getData = (state: StoreProps.Props) => state.data;
const getTags = createSelector(getData, data => data.tags);

export interface TagListProps {
  isLoading: boolean;
  error: string;
  data: Array<TagProps.TagProps>;
}

export const getVisibleTags = createSelector(getTags, tags => {
  return {
    isLoading: tags.meta.isLoading,
    error: tags.meta.error,
    data: tags.ids.map(id => tags.byId[id])
  };
});

export const getTag = createSelector(getOptions, getTags, (options, tags) => {
  return tags.byId[options.tagId];
});

export const makeGetTagsByIds = () =>
  createSelector(
    (state: StoreProps.Props, tagIds: Array<string>) => tagIds,
    getTags,
    (tagIds, tags) => {
      return tagIds.map((tagId: string) => {
        return tags.byId[tagId];
      });
    }
  );
