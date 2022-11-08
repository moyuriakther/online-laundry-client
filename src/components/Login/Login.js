import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import SocialLogin from "./SocialLogin";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
  useAuthState,
} from "react-firebase-hooks/auth";
import PageTitle from "../Common/PageTitle/PageTitle";
import auth from "../../firebase.init";

const Login = () => {
  const [
    signInWithEmailAndPassword,

    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleBlur = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Email Send");
    } else {
      toast("Provide an email address");
    }
  };
  return (
    <div className="w-50 m-auto my-5">
      <div className="login">
        <PageTitle title={"login"} />
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              onBlur={handleBlur}
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              onBlur={handleBlur}
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
          </Form.Group>
          <Form.Group>
            <p>
              New User?{" "}
              <Link
                to="/register"
                className="text-decoration-none text-primary"
              >
                Please Register
              </Link>
              <p>
                Forgot Password?
                <Button onClick={resetPassword} variant="link">
                  Reset Password
                </Button>
              </p>
            </p>
          </Form.Group>
          <Button variant="primary" type="Login">
            Login
          </Button>
        </Form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
