import * as HTTPServices from "./http";

import * as LoginProps from "../components/auth/Login/types";
import * as RegisterProps from "../components/auth/Register/types";

export function login(loginPayload: LoginProps.LoginPayload) {
  return HTTPServices.post(`/auth/login`, {
    data: loginPayload
  }).then((response: { data: LoginProps.LoginResponse }) => {});
}

export function logout() {
  return HTTPServices.get("/auth/logout").then(() => {});
}

export function register(formData: RegisterProps.RegisterPayload) {
  return HTTPServices.post(`/users`, {
    data: formData
  });
}

export function refresh(refreshToken: string) {
  return HTTPServices.post("/auth/refresh", {
    data: {
      refreshToken
    }
  });
}
