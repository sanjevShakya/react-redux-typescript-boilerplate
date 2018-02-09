import * as React from "react";
import PropsRoute from "../components/common/PropsRoute";
import PrivateRoute from "../components/common/PrivateRoute";

export function renderRoute(route: any, props: any) {
  let routeComponent = route.isPrivate ? PrivateRoute : PropsRoute;

  return React.createElement(routeComponent, {
    ...route,
    ...props
  });
}
