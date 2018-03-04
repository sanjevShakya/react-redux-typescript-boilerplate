import * as React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { bindActionCreators, Dispatch } from "redux";
import { Switch, Route, Redirect } from "react-router-dom";

import * as StoreProps from "../reducers/types";
import * as AuthReducerProps from "../reducers/data/auth/types";

import ROUTES from "../constants/routes";

import Login from "./Login";
import Dashboard from "./Dashboard";
import ItemsMain from "./Items/ItemsMain";
import NotFound from "./NotFound";

import * as TagActions from "../actions/data/tags";

interface ComposeProps {
  auth: AuthReducerProps.StateProps;
  fetchTags: typeof TagActions.fetchTags;
}

class PrivateRoutes extends React.Component<ComposeProps> {
  componentWillMount() {
    this.props.fetchTags();
  }

  render() {
    if (!this.props.auth.isLoggedIn) {
      return <Redirect to={ROUTES.AUTH.LOGIN} />;
    }
    return (
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route exact path={ROUTES.ITEMS} component={ItemsMain} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

function mapStateToProps(state: StoreProps.Props) {
  return {
    auth: state.data.auth
  };
}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    fetchTags: bindActionCreators(TagActions.fetchTags, dispatch)
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  PrivateRoutes
);
