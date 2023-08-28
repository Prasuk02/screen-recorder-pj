import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ isAuthUser, Component }) => {
  const navigate = useNavigate();
  console.log(isAuthUser.status);
  useEffect(() => {
    if (!isAuthUser.status) {
      return navigate("/");
    }
  }, []);
  return <>{isAuthUser.status && <Component />}</>;
};

export default AuthRoute;
