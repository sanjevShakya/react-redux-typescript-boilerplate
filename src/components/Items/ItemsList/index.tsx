import * as React from "react";
import * as ItemListProps from "./types";

import ItemCard from "../../Items/ItemCard";

export default (props: ItemListProps.Props) => {
  return (
    <div>
      {props.isLoading && <span>Loading...</span>}
      <ul>
        {props.items.map(itemId => (
          <li key={itemId}>
            <ItemCard itemId={itemId} onSelectItem={props.onSelectItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};
