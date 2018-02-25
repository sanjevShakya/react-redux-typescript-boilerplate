import * as React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import ROUTES from "../constants/routes";

import Login from "./Login";

import Dashboard from "./Dashboard";
import Items from "./Items";
import NotFound from "./NotFound";

function PrivateRoutes(props: any) {
  if (!props.auth.isLoggedIn) {
    return <Redirect to={ROUTES.AUTH.LOGIN} />;
  }
  return (
    <Switch>
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route exact path={ROUTES.ITEMS} component={Items} />
      <Route component={NotFound} />
    </Switch>
  );
}

function mapStateToProps(state: any, props: any) {
  return {
    auth: state.data.auth
  };
}

function mapDispatchToProps(dispatch: any) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);
