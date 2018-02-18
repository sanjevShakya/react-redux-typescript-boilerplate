// components/Login

import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";
import { compose, withHandlers } from "recompose";
import { SubmissionError } from "redux-form"; // ES6

import * as LoginProps from "./types";
import * as LoginFormProps from "./LoginForm/types";
import * as StoreProps from "../../reducers/types";

import LoginForm from "./LoginForm";
import ROUTES from "../../constants/routes";
import * as AuthActions from "../../actions/auth";

function Login(props: LoginProps.Props) {
  if (props.auth.isLoggedIn) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={props.handleLogin} />
      <Link to={ROUTES.AUTH.REGISTER}>Sign up</Link>
    </div>
  );
}

function mapStateToProps(state: StoreProps.Props) {
  return {
    auth: state.data.auth
  };
}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    login: bindActionCreators(AuthActions.login, dispatch)
  };
}

function handleLogin(props: LoginProps.Props) {
  return async (formData: LoginFormProps.FormDataProps) => {
    try {
      await props.login(formData);
    } catch (err) {
      const { data } = err.response;
      throw new SubmissionError({ ...data.details, _error: data.message });
    }
  };
}

const enhance = compose<LoginProps.ComposeProps, LoginProps.OwnProps>(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleLogin
  })
);

export default enhance(Login);
