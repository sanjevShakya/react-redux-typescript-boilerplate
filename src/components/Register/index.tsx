import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { compose, withHandlers } from "recompose";

import * as RegisterProps from "./types";
import * as StoreProps from "../../reducers/types";

import ROUTES from "../../constants/routes";
import * as AuthServices from "../../services/auth";
import RegisterForm from "./RegisterForm";
import * as AuthActions from "../../actions/auth";

function Register(props: RegisterProps.Props) {
  if (props.auth.isLoggedIn) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm />
      <button
        onClick={() => {
          props.onSubmit({
            user: {
              firstName: "Sudhir",
              lastName: "Shrestha",
              email: `sudhirshrestha+${new Date().getTime()}@gmail.com`,
              password: "password"
            }
          });
        }}
      >
        test
      </button>
      <Link to={ROUTES.AUTH.LOGIN}>Login</Link>
    </div>
  );
}

function mapStateToProps(state: StoreProps.Props) {
  return {
    auth: state.data.auth
  };
}

const enhance = compose(
  connect<RegisterProps.StoreProps, {}, RegisterProps.OwnProps>(
    mapStateToProps,
    null
  ),
  withHandlers({
    onSubmit: (props: RegisterProps.Props) => (
      data: AuthServices.RegisterPayload
    ) => {
      return AuthServices.register(data).then(() => {
        props.history.push(ROUTES.AUTH.LOGIN);
      });
    }
  })
);

export default enhance(Register);
