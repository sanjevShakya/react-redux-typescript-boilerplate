import * as React from "react";
import { Switch, Route } from "react-router-dom";

import ROUTES from "../constants/routes";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import PrivateRoutes from "./PrivateRoutes";

class Main extends React.Component<{}> {
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

export default Main;
