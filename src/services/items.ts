import * as HTTPServices from "./http";
import * as ItemReducerProps from "../reducers/data/items/types";

export type CreatePayload = { item?: ItemReducerProps.ItemProps };

export function fetchAll() {
  return HTTPServices.get("/items");
}

export function save(data: CreatePayload) {
  const itemId = data.item && data.item.id;
  if (!itemId) {
    return HTTPServices.post("/items", { data });
  }
  delete data.item.id;
  delete data.item.createdAt;
  delete data.item.updatedAt;
  delete data.item.created_at;
  delete data.item.updated_at;
  return HTTPServices.put(`/items/${itemId}`, { data });
}
