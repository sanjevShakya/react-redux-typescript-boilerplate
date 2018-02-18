import * as React from "react";
import { compose, withHandlers } from "recompose";
import { Field, reduxForm } from "redux-form";

import * as LoginFormProps from "./types";

import InputField from "../../common/InputField";
import AuthSchema from "../../../common/schemas/auth.js";
import ValidatorUtils from "../../../common/utils/validator.js";

export const FORM_NAME = "LOGIN_FORM";

function LoginForm(props: LoginFormProps.Props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.error && <p>{props.error}</p>}
      <Field
        label="Email"
        placeholder="Email"
        name="user.email"
        type="text"
        component={InputField}
      />
      <Field
        label="Password"
        placeholder="Password"
        name="user.password"
        type="password"
        component={InputField}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

const enhance = compose<LoginFormProps.ComposeProps, LoginFormProps.OwnProps>(
  reduxForm({
    form: FORM_NAME,
    validate: (data: LoginFormProps.FormDataProps) => {
      let validationData = Object.assign({}, data);
      validationData.user = validationData.user || {};
      return ValidatorUtils.getValidationErrors(
        validationData,
        AuthSchema.login
      );
    }
  })
);

export default enhance(LoginForm);
