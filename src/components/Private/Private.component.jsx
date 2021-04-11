import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../providers/Auth";

const Private = ({ component: Component, path, isPrivate, ...rest }) => {
  const userState = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isPrivate && !Boolean(userState.authenticated) ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default Private;
