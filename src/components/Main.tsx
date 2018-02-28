import * as React from "react";
import { compose } from "recompose";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import ROUTES from "../constants/routes";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import PrivateRoutes from "./PrivateRoutes";

import * as TagActions from "../actions/data/tags";

interface OwnProps {
  fetchTags: typeof TagActions.fetchTags;
}

class Main extends React.Component<OwnProps> {
  componentWillMount() {
    this.props.fetchTags();
  }

  render() {
    return (
      <Switch>
        <Route exact path={ROUTES.AUTH.LOGIN} component={Login} />
        <Route exact path={ROUTES.AUTH.REGISTER} component={Register} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route component={PrivateRoutes} />
      </Switch>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    fetchTags: bindActionCreators(TagActions.fetchTags, dispatch)
  };
}

const enhance = compose(connect(null, mapDispatchToProps));

export default enhance(Main);
