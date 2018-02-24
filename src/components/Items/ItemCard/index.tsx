import * as React from "react";
import * as ItemCardProps from "./types";

export default (props: ItemCardProps.Props) => (
  <div onClick={props.onClick}>{props.item.name}</div>
);
