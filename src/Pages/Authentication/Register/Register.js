import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// icon
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";

// auth and firebase hook
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import "./Register.css";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Register = ({ changeAuthUi }) => {
  // iconstyle
  const fontStyles = { color: "white", fontSize: "40px" };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathnane || "/";
  //   firebase hook
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth);

  //  handel google login
  const handelgooglelogin = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    if (googleError) toast.error(`${googleError}`);
    if (emailError) toast.error(`${emailError}`);
    if (googleUser) {
      navigate(from, { replace: true });
    }
    if (emailUser) {
      navigate(from, { replace: true });
    }
  }, [googleUser, googleError, emailError, emailUser]);

  // handel submit
  const handelRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);

    createUserWithEmailAndPassword(formDataObj.email, formDataObj.password);
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-item-center">
        <Form
          className="d-flex flex-column align-items-center "
          onSubmit={handelRegister}
        >
          <h1 className="py-3 color-white">Register</h1>

          <Form.Group className="mb-3 inputfield ">
            <Form.Control
              className=""
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3 inputfield">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <p className="my-3">
            Have an account , Please{" "}
            <span className="changeAuthPageLink" onClick={changeAuthUi}>
              login
            </span>
          </p>
          {/* social login */}
          <p>or sign up with:</p>
          <p className="">
            <button
              type="button"
              className="btn btn-link btn-floating mx-1"
              onClick={() => {
                handelgooglelogin();
              }}
            >
              <FcGoogle style={fontStyles} />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <BsFacebook style={fontStyles} />
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <BsGithub style={fontStyles} />
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
