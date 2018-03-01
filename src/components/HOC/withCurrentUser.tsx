import * as React from "react";
import { WrappedFieldProps } from "redux-form";
import { connect, Dispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose, withHandlers } from "recompose";

import * as StoreProps from "../../reducers/types";

import ROUTES from "../../constants/routes";
import * as AuthReducerProps from "../../reducers/data/auth/types";

export interface OwnProps {
  currentUser: AuthReducerProps.CurrentUserProps;
}

export type Props = OwnProps;

function mapStateToProps(state: StoreProps.Props) {
  let currentUser = state.data.auth.user;
  return {
    currentUser
  };
}

export default <TOriginalProps extends OwnProps>(
  Component:
    | React.ComponentClass<TOriginalProps>
    | React.StatelessComponent<TOriginalProps>
) => {
  const withCurrentUser = (props: TOriginalProps) => {
    return <Component {...props} />;
  };
  const enhance = compose<TOriginalProps, OwnProps>(connect(mapStateToProps));

  return enhance(withCurrentUser);
};
