import { Dispatch } from "redux";
import { normalize, schema } from "normalizr";

import * as TagServices from "../../services/tags";

export const FETCH_TAGS = "FETCH_TAGS";

export const TAG_SCHEMA = new schema.Entity("tags");
const TAG_LIST_SCHEMA = [TAG_SCHEMA];

export const ACTIONS = {
  FETCH_TAGS_PENDING: `${FETCH_TAGS}_PENDING`,
  FETCH_TAGS_FULFILLLED: `${FETCH_TAGS}_FULFILLED`,
  FETCH_TAGS_REJECTED: `${FETCH_TAGS}_REJECTED`
};

export const fetchTags = () => {
  return (dispatch: Dispatch<{}>) => {
    dispatch({
      type: ACTIONS.FETCH_TAGS_PENDING
    });
    return TagServices.fetchAll()
      .then(response => {
        dispatch({
          type: ACTIONS.FETCH_TAGS_FULFILLLED,
          payload: normalize(response.data, TAG_LIST_SCHEMA)
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.FETCH_TAGS_REJECTED
        });
      });
  };
};
