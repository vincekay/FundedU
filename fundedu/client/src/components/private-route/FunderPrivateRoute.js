import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const FunderPrivateRoute = ({ component: Component }) => {

  const auth = useSelector(state => state.auth);

  return (
    auth.isAuthenticated === true ? (
      <Component />
    ) : (
        <Redirect to="/login" />
      )
  )
}

export default FunderPrivateRoute;
