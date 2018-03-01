import * as React from "react";
import { WrappedFieldProps } from "redux-form";
import { connect, Dispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose, withHandlers } from "recompose";

import * as StoreProps from "../../reducers/types";

import ROUTES from "../../constants/routes";
import withCurrentUser, * as withCurrentUserProps from "./withCurrentUser";

interface OwnProps {}

export type Props = {} & withCurrentUserProps.Props;

const enhance = compose<OwnProps, Props>(withCurrentUser);

export default (
  roleIds: Array<number | Array<number>>,
  options: { redirect?: boolean; redirectPath?: string } = {}
) => <TOriginalProps extends OwnProps>(
  Component:
    | React.ComponentClass<TOriginalProps>
    | React.StatelessComponent<TOriginalProps>
) => {
  const withAuthorization = (props: Props) => {
    let userRoleIds = props.currentUser.roles.map(role => role.id);
    let authorized = true;

    for (let i = 0; i < roleIds.length; i++) {
      let roleId = roleIds[i];
      if (roleId.constructor === Array) {
        roleId = roleId as Array<number>;
        let allow = false;
        roleId.forEach(rId => {
          if (userRoleIds.indexOf(rId) > -1) {
            allow = true;
          }
        });
        if (!allow) {
          authorized = false;
          break;
        }
      } else {
        roleId = roleId as number;
        if (userRoleIds.indexOf(roleId) === -1) {
          authorized = false;
          break;
        }
      }
    }

    if (!authorized) {
      if (options.redirect) {
        return <Redirect to={options.redirectPath || ROUTES.DASHBOARD} />;
      }
      return null;
    }

    return <Component {...props} />;
  };

  return enhance(withAuthorization);
};
