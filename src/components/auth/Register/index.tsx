import * as React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

import * as RegisterProps from "./types";

import RegisterForm from "./RegisterForm";
import ROUTES from "../../../constants/routes";
import * as AuthServices from "../../../services/auth";

export default function Register(props: RegisterProps.Props) {
  let localState = {
    auth: {
      isLoggedIn: true
    }
  };
  if (localState.auth.isLoggedIn) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  const onSubmit = (data: RegisterProps.RegisterPayload) => {
    return AuthServices.register(data).then(() => {
      props.history.push(ROUTES.AUTH.LOGIN);
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <Link to={ROUTES.AUTH.LOGIN}>Login</Link>
    </div>
  );
}
