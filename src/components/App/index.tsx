import * as React from "react";
import { BrowserRouter, Link, Redirect, Switch } from "react-router-dom";

import * as AppProps from "./types";

import Routes from "../routes";
import PropRoute from "../../components/common/PropsRoute";
import * as RouteService from "../../services/route";

import * as joi from "joi";

class App extends React.Component<AppProps.Props, AppProps.State> {
  constructor(props: AppProps.Props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {Routes.map((route, index) => {
            return RouteService.renderRoute(route, {
              key: index
            });
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
