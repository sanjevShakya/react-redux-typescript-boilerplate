import { RouteComponentProps } from "react-router-dom";

import * as TokenProps from "../../../interfaces/Token";

export type Props = {} & RouteComponentProps<{}>;

export interface LoginPayload {}

export interface LoginResponse {
  token: TokenProps.Token;
}
