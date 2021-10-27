import React, { useContext } from "react";
import { AuthContext } from "./GlobalComponent";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: SecureRouter, ...rest }) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(myProps) => {
        return currentUser ? (
          <SecureRouter {...myProps} />
        ) : (
          <Redirect to="/register" />
        );
      }}
    />
  );
};

export default PrivateRoute;
