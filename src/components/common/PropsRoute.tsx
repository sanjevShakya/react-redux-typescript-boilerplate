import * as React from "react";
import { Route } from "react-router-dom";

export default ({ component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(routeProps: any) => {
        return React.createElement(component, {
          ...routeProps,
          ...rest
        });
      }}
    />
  );
};
