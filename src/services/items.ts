import * as httpUtils from "./http";
import * as ItemReducerProps from "../reducers/data/items/types";

export type CreatePayload = { item?: ItemReducerProps.ItemProps<string> };

export function fetchAll() {
  return httpUtils.get("/items");
}

export function create(data: CreatePayload) {
  return httpUtils.post("/items", { data });
}
