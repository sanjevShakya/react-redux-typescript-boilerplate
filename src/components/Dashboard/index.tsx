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
import * as ItemSelectors from "../../selectors/items";

import ItemsList from "../Items/ItemsList";
import ItemCard from "../Items/ItemCard";

class Dashboard extends React.Component<DashboardProps.Props> {
  constructor(props: DashboardProps.Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>DASHBOARD</h1>
        <button onClick={() => this.props.logout()}>Log Out</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    logout: bindActionCreators(AuthActions.logout, dispatch)
  };
}

let enhance = compose<DashboardProps.ComposeProps, DashboardProps.OwnProps>(
  connect(null, mapDispatchToProps)
);

export default enhance(Dashboard);
