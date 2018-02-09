import axios from "axios";

import * as LoginProps from "../components/auth/Login/types";
import * as AuthServices from "../services/auth";
import ROUTES from "../constants/routes";
import ENV_CONSTANTS from "../constants/env";

type httpActionProps = (uri: string, options?: any) => any;

axios.defaults.baseURL = ENV_CONSTANTS.API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function(config) {
    const accessToken = "accessToken";

    if (accessToken) config.headers.Authorization = accessToken;

    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(undefined, function(err) {
  const error = err.response;
  if (error && error.status === 401) {
    const refreshToken = "refreshToken";

    if (refreshToken) {
      return new Promise((resolve, reject) => {
        AuthServices.refresh(refreshToken)
          .then((response: { data: LoginProps.LoginResponse }) => {
            resolve(axios(err.config));
          })
          .catch(() => {
            window.location.href = ROUTES.AUTH.LOGIN;
            reject(err);
          });
      });
    }

    window.location.href = ROUTES.AUTH.LOGIN;
  }
  return Promise.reject(err);
});

export const get: httpActionProps = function(uri, options = {}) {
  let { params } = options;
  return axios({
    method: "get",
    url: uri,
    params: params,
    data: {}
  });
};

export const post: httpActionProps = function(uri, options = {}) {
  let { data } = options;
  return axios({
    method: "post",
    url: uri,
    data: data
  });
};

export default {
  get,
  post
};
