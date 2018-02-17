import * as React from "react";

import AuthSchema from "../../../../common/schemas/auth.js";

const schema = {
  user: {
    email: {
      label: "Email",
      name: "user.email",
      type: "email"
    },
    password: {
      label: "Password",
      name: "user.password",
      type: "password"
    }
  }
};

const layout = [[schema.user.email], [schema.user.password]];

export default () => {
  return <div>Login Form</div>;
};
