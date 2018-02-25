import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { compose, withHandlers } from "recompose";

import * as ItemsMainProps from "./types";
import * as StoreProps from "../../reducers/types";

import ROUTES from "../../constants/routes";
import * as ItemActions from "../../actions/data/items";

import * as ItemUIActions from "../../actions/ui/items";
import * as ItemSelectors from "../../selectors/items";

import ItemsList from "../Items/ItemsList";
import ItemCard from "../Items/ItemCard";

class ItemsMain extends React.Component<ItemsMainProps.Props> {
  constructor(props: ItemsMainProps.Props) {
    super(props);
  }
  componentWillMount() {
    return this.props.fetchItems();
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <h1>Item</h1>
        <ItemsList
          items={items.data}
          isLoading={items.isLoading}
          error={items.error}
          selectItem={this.props.updateSelectedItem}
        />
        {this.props.item && <ItemCard item={this.props.item} />}
      </div>
    );
  }
}

function mapStateToProps(state: StoreProps.Props, props: any) {
  let items = ItemSelectors.getVisibleItems(state);
  let selectedItemId = state.ui.Items.selectedItemId;
  let item =
    selectedItemId && !items.isLoading && items.data.length
      ? ItemSelectors.getItem(state, { itemId: selectedItemId })
      : null;
  return {
    items,
    item
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchItems: bindActionCreators(ItemActions.fetchItems, dispatch),
    updateSelectedItem: bindActionCreators(
      ItemUIActions.selectedItemChanged,
      dispatch
    )
  };
}

let enhance = compose<ItemsMainProps.ComposeProps, ItemsMainProps.OwnProps>(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(ItemsMain);
