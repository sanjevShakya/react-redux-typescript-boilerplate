import * as RouteConfigProps from "../interfaces/RouteConfig";

import ROUTES from "../constants/routes";
import AuthRoutes from "./auth/routes";
import Home from "./Home";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

const routes: Array<RouteConfigProps.RouteConfig> = [
  ...AuthRoutes,
  {
    path: ROUTES.DASHBOARD,
    component: Dashboard,
    exact: true,
    isPrivate: true
  },
  {
    path: ROUTES.HOME,
    component: Home,
    exact: true
  },
  {
    component: NotFound
  }
];

export default routes;
