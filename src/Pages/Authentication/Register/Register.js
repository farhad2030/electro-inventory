import React from "react";
import { Button, Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "./Register.css";

const Register = ({ changeAuthUi }) => {
  const fontStyles = { color: "white", fontSize: "40px" };
  const handelLogin = (event) => {
    event.preventDefault();

    //  event.target.reset();

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
    <div>
      <div className="container d-flex justify-content-center align-item-center">
        <Form
          className="d-flex flex-column align-items-center "
          onSubmit={handelLogin}
        >
          <h1 className="py-3 color-white">Register</h1>

          <Form.Group className="mb-3 inputfield ">
            <Form.Control className="" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3 inputfield">
            <Form.Control type="password" placeholder="Password" />
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
            <button type="button" class="btn btn-link btn-floating mx-1">
              <FcGoogle style={fontStyles} />
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <BsFacebook style={fontStyles} />
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <BsGithub style={fontStyles} />
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
