import React from "react";
import { Button } from "react-bootstrap";
import google from "../../media/social/google.png";
import facebook from "../../media/social/facebook.png";
import github from "../../media/social/github.png";
import {
  //   useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
// import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user1, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(
    auth
  );
  //   const [signInWithGithub, error2] = useSignInWithGithub(auth);
  const [user] = useAuthState(auth);
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location.state?.from?.pathname || "/";
  //   const [token] = useToken(user);
  let errorElement;
  if (error || error2) {
    errorElement = <p className="text-danger">Something went wrong</p>;
  }
  console.log(user, user1, error, user2, error2);
  //   if (token) {
  //     navigate(from, { replace: true });
  //   }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
        <div className="px-2">OR</div>
        <div className="bg-primary w-50" style={{ height: "1px" }}></div>
      </div>
      <div className="text-center">
        {errorElement}
        <Button
          onClick={() => signInWithGoogle()}
          className="btn-dark shadow px-5 mt-2"
        >
          <img height="30px" src={google} alt="google" />{" "}
          <span className="px-2"> Sign In With Google</span>
        </Button>{" "}
        <br />
        <Button
          onClick={() => signInWithFacebook()}
          className="btn-dark shadow px-5 mt-3"
        >
          <img height="30px" src={facebook} alt="facebook" />{" "}
          <span className="px-2"> Sign In With Facebook</span>
        </Button>{" "}
        <br />
        <Button
          //   onClick={() => signInWithGithub()}
          className="btn-dark shadow px-5 mt-3"
        >
          <img height="30px" src={github} alt="github" />{" "}
          <span className="px-2"> Sign In With Github</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
