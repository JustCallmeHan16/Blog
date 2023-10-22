import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const login = true;

  if (login === false) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default PrivateRoute;
