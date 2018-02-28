import { Dispatch } from "redux";
import { normalize, schema } from "normalizr";

import * as ItemReducerProps from "../../reducers/data/items/types";

import * as ItemServices from "../../services/items";
import { TAG_SCHEMA } from "./tags";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const SAVE_ITEMS = "SAVE_ITEMS";

const ITEM_SCHEMA = new schema.Entity("items", {
  tags: [TAG_SCHEMA]
});
const ITEM_LIST_SCHEMA = [ITEM_SCHEMA];

export const ACTIONS = {
  FETCH_ITEMS_PENDING: `${FETCH_ITEMS}_PENDING`,
  FETCH_ITEMS_FULFILLLED: `${FETCH_ITEMS}_FULFILLED`,
  FETCH_ITEMS_REJECTED: `${FETCH_ITEMS}_REJECTED`,

  SAVE_ITEMS_PENDING: `${SAVE_ITEMS}_PENDING`,
  SAVE_ITEMS_FULFILLLED: `${SAVE_ITEMS}_FULFILLED`,
  SAVE_ITEMS_REJECTED: `${SAVE_ITEMS}_REJECTED`
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
      .catch(err => {
        dispatch({
          type: ACTIONS.FETCH_ITEMS_REJECTED
        });
        throw err;
      });
  };
};

export const saveItem = (data: ItemServices.CreatePayload) => {
  return (dispatch: Dispatch<{}>) => {
    dispatch({
      type: ACTIONS.SAVE_ITEMS_PENDING
    });
    return ItemServices.save(data)
      .then(response => {
        dispatch({
          type: ACTIONS.SAVE_ITEMS_FULFILLLED,
          payload: normalize(response.data, ITEM_SCHEMA)
        });
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.SAVE_ITEMS_REJECTED,
          payload: err
        });
        throw err;
      });
  };
};
