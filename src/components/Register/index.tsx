import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { compose, withHandlers } from "recompose";
import { SubmissionError } from "redux-form"; // ES6

import * as RegisterProps from "./types";
import * as RegisterFormProps from "./RegisterForm/types";
import * as StoreProps from "../../reducers/types";

import ROUTES from "../../constants/routes";
import * as AuthServices from "../../services/auth";
import RegisterForm from "./RegisterForm";
import * as AuthActions from "../../actions/auth";
import * as JSONUtils from "../../utils/json";

function Register(props: RegisterProps.Props) {
  if (props.auth.isLoggedIn) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={props.handleRegister} />
      <Link to={ROUTES.AUTH.LOGIN}>Login</Link>
    </div>
  );
}

function mapStateToProps(state: StoreProps.Props) {
  return {
    auth: state.data.auth
  };
}

function handleRegister(props: RegisterProps.Props) {
  return async (formData: RegisterFormProps.FormDataProps) => {
    try {
      let data = JSONUtils.deepCopyJSON(formData);
      data.user && delete data.user.confirmPassword;
      await AuthServices.register(data);
      props.history.push(ROUTES.AUTH.LOGIN);
    } catch (err) {
      const { data } = err.response;
      throw new SubmissionError({ ...data.details, _error: data.message });
    }
  };
}

const enhance = compose(
  connect<RegisterProps.StoreProps, {}, RegisterProps.OwnProps>(
    mapStateToProps,
    null
  ),
  withHandlers({
    handleRegister
  })
);

export default enhance(Register);
