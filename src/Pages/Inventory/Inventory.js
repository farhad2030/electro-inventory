import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const Inventory = () => {
  const [user] = useAuthState(auth);

  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <div className="mt-5 pt-5">
      <h1>Inventory</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      end
    </div>
  );
};

export default Inventory;
