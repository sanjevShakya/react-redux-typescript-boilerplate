import { RouteComponentProps } from "react-router-dom";

import * as TokenProps from "../../../interfaces/Token";

export type Props = {} & RouteComponentProps<{}>;

export interface RegisterPayload {}

export interface RegisterResponse {
  token: TokenProps.Token;
}
