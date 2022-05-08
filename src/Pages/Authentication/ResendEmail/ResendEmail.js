import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ResendEmail = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  return (
    <div className="notFoundPage">
      <div className="notFound">
        <h1 className="num">Varify your Email</h1>
        <h2 className="text">Or</h2>
        <p className="msg">
          Go back to <Link to="/home">home</Link>
        </p>

        {sending ? (
          <>
            <p>sending ....</p>
            <p className="text-info">Please chek your inbox and spam tab</p>
          </>
        ) : (
          <button
            className="btn btn-warning"
            onClick={async () => {
              await sendEmailVerification();
              toast("Sent email");
            }}
          >
            {" "}
            Send varification email{" "}
          </button>
        )}

        {/* ERROR */}
        {error ? <p className="text-danger">{error.message}</p> : ""}
      </div>
    </div>
  );
};

export default ResendEmail;
