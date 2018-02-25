import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { compose, withHandlers } from "recompose";

import * as ItemsMainProps from "./types";
import * as StoreProps from "../../../reducers/types";

import ROUTES from "../../../constants/routes";
import * as ItemActions from "../../../actions/data/items";

import * as ItemUIActions from "../../../actions/ui/items";
import * as ItemSelectors from "../../../selectors/items";

import ItemsList from "../../Items/ItemsList";
import ItemCard from "../../Items/ItemCard";
import ItemForm from "../../Items/ItemForm";

class ItemsMain extends React.PureComponent<ItemsMainProps.Props> {
  constructor(props: ItemsMainProps.Props) {
    super(props);
  }

  componentWillMount() {
    return this.props.fetchItems();
  }

  render() {
    const { items, selectedItemId } = this.props;
    return (
      <div>
        <h1>Item</h1>
        <ItemForm onSubmit={this.props.createItem} />
        {selectedItemId && <ItemCard itemId={selectedItemId} />}
        <ItemsList
          items={items.data}
          isLoading={items.isLoading}
          error={items.error}
          onSelectItem={this.props.updateSelectedItem}
        />
      </div>
    );
  }
}

function mapStateToProps(state: StoreProps.Props) {
  let items = ItemSelectors.getVisibleItems(state);
  let selectedItemId = state.ui.Items.selectedItemId;
  return {
    items,
    selectedItemId
  };
}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    fetchItems: bindActionCreators(ItemActions.fetchItems, dispatch),
    createItem: bindActionCreators(ItemActions.createItem, dispatch),
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
