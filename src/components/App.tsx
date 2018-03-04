import * as React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Main from "./Main";
import { store, persistor } from "../store";

import * as HttpServices from "../services/http";

HttpServices.initInterceptors(store);

class App extends React.Component<{}> {
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
