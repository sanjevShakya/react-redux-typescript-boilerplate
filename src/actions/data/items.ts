import { Dispatch } from "redux";
import { normalize, schema } from "normalizr";

import * as ItemReducerProps from "../../reducers/data/items/types";

import * as ItemServices from "../../services/items";
import { TAG_SCHEMA } from "./tags";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const CREATE_ITEMS = "CREATE_ITEMS";

const ITEM_SCHEMA = new schema.Entity("items", {
  tags: [TAG_SCHEMA]
});
const ITEM_LIST_SCHEMA = [ITEM_SCHEMA];

export const ACTIONS = {
  FETCH_ITEMS_PENDING: `${FETCH_ITEMS}_PENDING`,
  FETCH_ITEMS_FULFILLLED: `${FETCH_ITEMS}_FULFILLED`,
  FETCH_ITEMS_REJECTED: `${FETCH_ITEMS}_REJECTED`,

  CREATE_ITEMS_PENDING: `${CREATE_ITEMS}_PENDING`,
  CREATE_ITEMS_FULFILLLED: `${CREATE_ITEMS}_FULFILLED`,
  CREATE_ITEMS_REJECTED: `${CREATE_ITEMS}_REJECTED`
};

export const fetchItems = () => {
  return (dispatch: Dispatch<{}>) => {
    dispatch({
      type: ACTIONS.FETCH_ITEMS_PENDING
    });
    return ItemServices.fetchAll()
      .then(response => {
        dispatch({
          type: ACTIONS.FETCH_ITEMS_FULFILLLED,
          payload: normalize(response.data, ITEM_LIST_SCHEMA)
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.FETCH_ITEMS_REJECTED
        });
      });
  };
};

export const createItem = (data: ItemServices.CreatePayload) => {
  return (dispatch: Dispatch<{}>) => {
    dispatch({
      type: ACTIONS.CREATE_ITEMS_PENDING
    });
    return ItemServices.create(data)
      .then(response => {
        dispatch({
          type: ACTIONS.CREATE_ITEMS_FULFILLLED
          // payload: normalize(response.data, ITEM_LIST_SCHEMA)
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.CREATE_ITEMS_REJECTED
        });
      });
  };
};
