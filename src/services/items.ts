import * as httpUtils from "./http";
import * as ItemReducerProps from "../reducers/data/items/types";

export type CreatePayload = { item?: ItemReducerProps.ItemProps };

export function fetchAll() {
  return httpUtils.get("/items");
}

export function save(data: CreatePayload) {
  const itemId = data.item && data.item.id;
  if (!itemId) {
    return httpUtils.post("/items", { data });
  }
  delete data.item.id;
  delete data.item.created_at;
  delete data.item.updated_at;
  return httpUtils.put(`/items/${itemId}`, { data });
}
