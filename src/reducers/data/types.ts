import * as AuthProps from "./auth/types";
import * as ItemsProps from "./items/types";

export interface Props {
  auth: AuthProps.StateProps;
  items: ItemsProps.StateProps;
}
