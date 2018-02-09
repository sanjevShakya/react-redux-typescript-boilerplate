import * as React from "react";
import { Redirect, withRouter, RouterProps } from "react-router";

import * as DashboardProps from "./types";
import ROUTES from "../../constants/routes";
import * as ItemServices from "../../services/items";
import * as AuthServices from "../../services/auth";

function Logout(props: DashboardProps.Props & RouterProps) {
  const logOut = () => {
    return AuthServices.logout().then(() => {
      props.history.push(ROUTES.AUTH.LOGIN);
    });
  };

  return (
    <div>
      <h1>DASHBOARD</h1>
      <button onClick={ItemServices.getAll}>TEst</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default withRouter(Logout);
