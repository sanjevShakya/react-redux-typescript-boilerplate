import * as TokenProps from "../interfaces/Token";

export interface LocalStorageState {
  auth: {
    isLoggedIn: boolean;
    token: TokenProps.Token;
  };
}
