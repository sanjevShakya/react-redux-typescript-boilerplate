import * as React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as ItemCardProps from "./types";
import * as StoreProps from "../../../reducers/types";

import TagCard from "../../Tags/TagCard";
import * as ItemSelectors from "../../../selectors/items";

class ItemCard extends React.PureComponent<ItemCardProps.Props> {
  constructor(props: ItemCardProps.Props) {
    super(props);
  }

  render() {
    const { itemId, item, onSelectItem } = this.props;
    return (
      <div onClick={() => onSelectItem(itemId)}>
        {item.name}:{" "}
        {item.tags.map(tag => <span key={tag.id}>{tag.name},</span>)}
      </div>
    );
  }
}

function mapStateToProps(
  state: StoreProps.Props,
  props: ItemCardProps.OwnProps
) {
  let item = ItemSelectors.getItem(state, { itemId: props.itemId });
  return {
    item
  };
}

const enhance = compose<ItemCardProps.ComposeProps, ItemCardProps.OwnProps>(
  connect(mapStateToProps)
);

export default enhance(ItemCard);
