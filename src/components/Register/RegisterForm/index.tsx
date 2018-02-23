import * as Joi from "joi";
import * as React from "react";
import { compose, withHandlers } from "recompose";

import * as RegisterFormProps from "./types";

import { Field, reduxForm } from "redux-form";
import InputField from "../../common/InputField";
import SelectField from "../../common/SelectField";
import ValidatorUtils from "../../../common/utils/validator.js";
import UsersSchema from "../../../common/schemas/users.js";

const FORM_NAME = "REGISTER_FORM";

function RegisterForm(props: RegisterFormProps.Props) {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.error && <p>{props.error}</p>}
      <Field
        label="First name"
        placeholder="First name"
        name="user.firstName"
        type="text"
        component={InputField}
      />
      <Field
        label="Last name"
        placeholder="Last name"
        name="user.lastName"
        type="text"
        component={InputField}
      />
      <Field
        label="Email"
        placeholder="Email"
        name="user.email"
        type="text"
        component={InputField}
      />
      <Field
        label="Confirm password"
        placeholder="Confirm password"
        name="user.confirmPassword"
        type="password"
        component={InputField}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

const enhance = compose<
  RegisterFormProps.ComposeProps,
  RegisterFormProps.OwnProps
>(
  reduxForm({
    form: FORM_NAME,
    validate: (data: RegisterFormProps.FormDataProps) => {
      let validationData = Object.assign({}, data);
      validationData.user = validationData.user || {};
      return ValidatorUtils.getValidationErrors(
        validationData,
        UsersSchema.create
      );
    }
  })
);

export default enhance(RegisterForm);
