import * as React from "react";

import * as ItemCardProps from "./types";

import TagCard from "../../Tags/TagCard";

export default (props: ItemCardProps.Props) => (
  <div onClick={props.onClick}>
    {props.item.name} :
    {props.item.tags.map(tagId => (
      <span key={tagId}>
        <TagCard tagId={tagId} />
      </span>
    ))}
  </div>
);
