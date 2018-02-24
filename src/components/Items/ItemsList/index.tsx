import * as React from "react";
import * as ItemListProps from "./types";

import ItemCard from "../../Items/ItemCard";

export default (props: ItemListProps.Props) => (
  <div>
    {props.isLoading && <span>Loading...</span>}
    <ul>
      {props.items.map(item => (
        <li key={item.id}>
          <ItemCard item={item} onClick={() => props.selectItem(item.id)} />
        </li>
      ))}
    </ul>
  </div>
);
