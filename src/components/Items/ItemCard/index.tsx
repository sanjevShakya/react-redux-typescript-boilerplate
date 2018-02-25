import * as React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import * as ItemCardProps from "./types";
import * as StoreProps from "../../../reducers/types";

import TagCard from "../../Tags/TagCard";
import * as ItemSelectors from "../../../selectors/items";
import * as TagSelectors from "../../../selectors/tags";

class ItemCard extends React.PureComponent<ItemCardProps.Props> {
  constructor(props: ItemCardProps.Props) {
    super(props);
  }

  render() {
    console.debug("===== Render ItemCard ======");
    const { itemId, item, tags, onSelectItem } = this.props;

    return (
      <div onClick={() => onSelectItem(itemId)}>
        {item.name}: {tags.map(tag => <span key={tag.id}>{tag.name}</span>)}
      </div>
    );
  }
}

function mapStateToProps() {
  let getTagsByIds = TagSelectors.makeGetTagsByIds();
  let getItem = ItemSelectors.makeGetItem();

  return (state: StoreProps.Props, props: ItemCardProps.OwnProps) => {
    let item = getItem(state, props.itemId);

    return {
      item,
      tags: getTagsByIds(state, item.tags)
    };
  };
}

const enhance = compose<ItemCardProps.ComposeProps, ItemCardProps.OwnProps>(
  connect(mapStateToProps)
);

export default enhance(ItemCard);
