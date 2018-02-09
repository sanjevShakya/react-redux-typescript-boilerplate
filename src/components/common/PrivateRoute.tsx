import * as React from "react";
import { Redirect } from "react-router-dom";

import PropsRoute from "./PropsRoute";
import ROUTES from "../../constants/routes";

export default ({ appState, ...rest }: any) => {
  let localState = {
    auth: {
      isLoggedIn: true
    }
  };
  if (!localState.auth.isLoggedIn) {
    return <Redirect to={ROUTES.AUTH.LOGIN} />;
  }
  return <PropsRoute {...rest} />;
};
