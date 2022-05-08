import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();
  console.log(user, location);
  console.log(user?.providerData[0]?.providerId, user.emailVerified);
  if (!loading) {
    if (!user) {
      return (
        <Navigate
          to="/authentication/login"
          state={{ from: location, Islogin: true }}
          replace
        />
      );
    }
    if (
      user?.providerData[0]?.providerId == "password" &&
      !user.emailVerified
    ) {
      return <Navigate to="/resendEmail" state={{ from: location }} replace />;
    }
  }
  return children;
};

export default RequireAuth;
