import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter, RouterProps } from "react-router";
import { compose, withHandlers } from "recompose";

import * as DashboardProps from "./types";
import ROUTES from "../../constants/routes";
import * as ItemServices from "../../services/items";
import * as AuthActions from "../../actions/auth";

function Dashboard(props: DashboardProps.Props & RouterProps) {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <button onClick={ItemServices.getAll}>Test</button>
      <button onClick={() => props.logout()}>Log Out</button>
    </div>
  );
}

function mapDispatchToProps(dispatch: any) {
  return {
    logout: bindActionCreators(AuthActions.logout, dispatch)
  };
}

let enhance = compose(
  connect<null, DashboardProps.DispatchProps, DashboardProps.OwnProps>(
    null,
    mapDispatchToProps
  )
);

export default enhance(Dashboard);
