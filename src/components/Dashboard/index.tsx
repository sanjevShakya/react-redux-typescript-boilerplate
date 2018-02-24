import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { compose, withHandlers } from "recompose";

import * as DashboardProps from "./types";
import * as StoreProps from "../../reducers/types";

import ROUTES from "../../constants/routes";
import * as ItemActions from "../../actions/data/items";
import * as AuthActions from "../../actions/data/auth";
import * as DashboardUIActions from "../../actions/ui/dashboard";
import * as ItemSelectors from "../../selectors/items";

import ItemsList from "../Items/ItemsList";
import ItemCard from "../Items/ItemCard";

class Dashboard extends React.Component<DashboardProps.Props> {
  constructor(props: DashboardProps.Props) {
    super(props);
  }
  componentWillMount() {
    return this.props.fetchItems();
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <h1>DASHBOARD</h1>
        <ItemsList
          items={items.data}
          isLoading={items.isLoading}
          error={items.error}
          selectItem={this.props.updateSelectedItem}
        />
        {this.props.item && <ItemCard item={this.props.item} />}
        <button onClick={() => this.props.logout()}>Log Out</button>
      </div>
    );
  }
}

function mapStateToProps(state: StoreProps.Props, props: any) {
  let items = ItemSelectors.getVisibleItems(state);
  let selectedItemId = state.ui.Dashboard.selectedItemId;
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
    logout: bindActionCreators(AuthActions.logout, dispatch),
    fetchItems: bindActionCreators(ItemActions.fetchItems, dispatch),
    updateSelectedItem: bindActionCreators(
      DashboardUIActions.selectedItemChanged,
      dispatch
    )
  };
}

let enhance = compose(
  connect<
    DashboardProps.StoreProps,
    DashboardProps.DispatchProps,
    DashboardProps.OwnProps
  >(mapStateToProps, mapDispatchToProps)
);

export default enhance(Dashboard);
