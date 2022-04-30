import React from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";

const Login = ({ changeAuthUi }) => {
  const fontStyles = { color: "white", fontSize: "40px" };

  const handelLogin = (event) => {
    event.preventDefault();

    //  toast.info("🦄 Wow so easy!", {
    //    position: "top-right",
    //    autoClose: 5000,
    //    hideProgressBar: true,
    //    closeOnClick: true,
    //    pauseOnHover: true,
    //    draggable: true,
    //    progress: undefined,
    //  });
  };
  return (
    <div className="container">
      <Form
        className="d-flex flex-column align-items-center "
        onSubmit={handelLogin}
      >
        <h1 className="py-3 color-white">Login</h1>
        <Form.Group className="mb-3 inputfield">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3 inputfield">
          <Form.Control type="password" placeholder="Password" />
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
          <button type="button" className="btn btn-link btn-floating mx-1">
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
