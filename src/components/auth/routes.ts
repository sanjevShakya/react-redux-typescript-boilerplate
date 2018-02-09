import ROUTES from "../../constants/routes";
import Login from "./Login";
import Register from "./Register";

export default [
  {
    path: ROUTES.AUTH.LOGIN,
    component: Login,
    exact: true
  },
  {
    path: ROUTES.AUTH.REGISTER,
    component: Register,
    exact: true
  }
];
