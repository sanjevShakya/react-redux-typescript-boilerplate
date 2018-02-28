import axios, { AxiosResponse, AxiosPromise } from "axios";

import * as AuthActions from "../actions/data/auth";
import ROUTES from "../constants/routes";
import ENV_CONSTANTS from "../constants/env";

import store from "../store";

type HttpActionProps = (uri: string, options?: any) => AxiosPromise;

axios.defaults.baseURL = ENV_CONSTANTS.API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

export function initInterceptors(store: any) {
  axios.interceptors.request.use(
    function(config) {
      let state = store.getState();
      const accessToken = state.data.auth.token.access;

      if (accessToken) config.headers.Authorization = accessToken;

      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(undefined, async function(err) {
    const error = err.response;
    let state = store.getState();
    if (error && error.status === 401) {
      const refreshToken = state.data.auth.token.refresh;

      if (refreshToken) {
        return new Promise(async (resolve, reject) => {
          let actionResponse = await store.dispatch(
            AuthActions.refresh(refreshToken)
          );
          resolve(axios(err.config));
        });
      }

      window.location.href = ROUTES.AUTH.LOGIN;
    }
    return Promise.reject(err);
  });
}

export const get: HttpActionProps = function(uri, options = {}) {
  let { params } = options;
  return axios({
    method: "get",
    url: uri,
    params: params,
    data: {}
  });
};

export const post: HttpActionProps = function(uri, options = {}) {
  let { data } = options;
  return axios({
    method: "post",
    url: uri,
    data: data
  });
};

export const put: HttpActionProps = function(uri, options = {}) {
  let { data } = options;
  return axios({
    method: "put",
    url: uri,
    data: data
  });
};

export default {
  get,
  post
};
