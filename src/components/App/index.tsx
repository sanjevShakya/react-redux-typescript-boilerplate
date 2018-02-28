import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Link, Redirect, Switch, Route } from "react-router-dom";

import * as AppProps from "./types";

import Main from "../Main";
import { store, persistor } from "../../store";

import * as httpServices from "../../services/http";

httpServices.initInterceptors(store);

class App extends React.Component<AppProps.Props, AppProps.State> {
  constructor(props: AppProps.Props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
