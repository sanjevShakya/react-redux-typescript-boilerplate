import * as React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

import * as LoginProps from "./types";

import LoginForm from "./LoginForm";
import ROUTES from "../../../constants/routes";
import * as AuthServices from "../../../services/auth";

function Login(props: LoginProps.Props) {
  let localState = {
    auth: {
      isLoggedIn: true
    }
  };
  if (localState.auth.isLoggedIn) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  let onSubmit = (data: LoginProps.LoginPayload) => {
    return AuthServices.login(data).then(() => {
      props.history.push(ROUTES.DASHBOARD);
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <Link to={ROUTES.AUTH.REGISTER}>Sign up</Link>
    </div>
  );
}

export default withRouter(Login);
