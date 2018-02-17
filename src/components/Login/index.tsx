// components/Login

import * as React from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";
import { compose, withHandlers } from "recompose";

import * as LoginProps from "./types";
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
      <LoginForm />
      <button
        onClick={() =>
          props.login({
            user: {
              email: "sudhirshresthaktm+1@gmail.com",
              password: "password"
            }
          })
        }
      >
        Test
      </button>
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

const enhance = compose(
  connect<LoginProps.StoreProps, LoginProps.DispatchProps, LoginProps.OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(Login);
