import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="notFoundPage">
      <div className="notFound">
        <h1 className="num">404</h1>
        <h2 className="text">NOT FOUND</h2>
        <p className="msg">
          {" "}
          Sorroy the address is not fount . Go back to{" "}
          <Link to="/home">home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
