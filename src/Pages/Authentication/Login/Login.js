import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = ({ changeAuthUi }) => {
  const fontStyles = { color: "white", fontSize: "40px" };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //   firebase hook
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  //  handel google login
  const handelgooglelogin = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    if (googleError) toast.error(`${googleError}`);
    if (googleUser) {
      console.log(googleUser);
      navigate(from, { replace: true });
    }
  }, [googleUser, googleError]);

  const handelLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };
  return (
    <div className="container">
      <Form
        className="d-flex flex-column align-items-center "
        onSubmit={handelLogin}
      >
        <h1 className="py-3 color-white">Login</h1>
        <Form.Group className="mb-3 inputfield">
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 inputfield">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="my-3">
          Dont have an account , Please{" "}
          <span className="changeAuthPageLink" onClick={changeAuthUi}>
            Register
          </span>
        </p>
        {/* social login */}
        <p>or sign up with:</p>
        <p className="">
          <button
            type="button"
            className="btn btn-link btn-floating mx-1"
            onClick={handelgooglelogin}
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
  );
};

export default Login;
