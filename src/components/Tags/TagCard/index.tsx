import * as React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as TagCardProps from "./types";
import * as StoreProps from "../../../reducers/types";

import * as TagSelectors from "../../../selectors/tags";

function TagCard(props: TagCardProps.Props) {
  return <span>{props.tag.name}</span>;
}

function mapStateToProps(
  state: StoreProps.Props,
  props: TagCardProps.OwnProps
) {
  return {
    tag: TagSelectors.getTag(state, { tagId: props.tagId })
  };
}

const enhance = compose<TagCardProps.ComposeProps, TagCardProps.OwnProps>(
  connect(mapStateToProps)
);

export default enhance(TagCard);
