import * as React from "react";
import * as Joi from "joi";

import UsersSchema from "../../../../common/schemas/users.js";

const schema = {
  user: {
    firstName: {
      label: "First Name",
      name: "user.firstName",
      type: "text"
    },
    lastName: {
      label: "Last Name",
      name: "user.lastName",
      type: "text"
    },
    email: {
      label: "Email",
      name: "user.email",
      type: "email"
    },
    password: {
      label: "Password",
      name: "user.password",
      type: "password"
    },
    confirmPassword: {
      label: "Confirm Password",
      name: "user.confirmPassword",
      type: "password",
      excludeSubmit: true
    }
  }
};

const layout = [
  [schema.user.firstName, schema.user.lastName],
  [schema.user.email],
  [schema.user.password],
  [schema.user.confirmPassword]
];

export default () => {
  return <div>Register form</div>;
};
