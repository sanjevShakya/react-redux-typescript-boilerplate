import * as HTTPServices from "./http";

export interface LoginPayload {
  user: {
    email?: string;
    password?: string;
  };
}

export interface LoginResponse {}

export async function login(loginPayload: LoginPayload) {
  let response = await HTTPServices.post(`/auth/login`, {
    data: loginPayload
  });
  return response.data;
}

export async function logout() {
  let response = await HTTPServices.get("/auth/logout");
  return response.data;
}

export interface RegisterPayload {}

export interface RegisterResponse {}

export async function register(formData: RegisterPayload) {
  let response = await HTTPServices.post(`/users`, {
    data: formData
  });
  return response.data;
}

export async function refresh(refreshToken: string) {
  let response = await HTTPServices.post("/auth/refresh", {
    data: {
      refreshToken
    }
  });
  return response.data;
}
