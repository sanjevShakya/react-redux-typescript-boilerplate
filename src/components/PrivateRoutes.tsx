import * as React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import ROUTES from "../constants/routes";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

function PrivateRoutes(props: any) {
  if (!props.auth.isLoggedIn) {
    return <Redirect to={ROUTES.AUTH.LOGIN} />;
  }
  return (
    <Switch>
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
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
