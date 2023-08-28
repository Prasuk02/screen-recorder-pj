import React, { useEffect, useState } from "react";
import loginBg from "../images/loginBg.png";
import "../stylesheets/signupPage.css";
import logoTest from "../images/logoTest.png";
import Alert from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = ({ setIsAuthUser }) => {
  const navigate = useNavigate();
  const [signupCredentials, setSignupCredentials] = useState({});
  const [signupError, setSignupError] = useState("");
  const [invalidSignupError, setInvalidSignupError] = useState("");

  const handleSignupCredentials = (event) => {
    setSignupCredentials({
      ...signupCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const createNewUser = (e) => {
    e.preventDefault();
    if (
      signupCredentials?.email &&
      signupCredentials?.username &&
      signupCredentials?.password
    ) {
      let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (emailRegex.test(signupCredentials.email)) {
        localStorage.setItem("currentUser", JSON.stringify(signupCredentials));
        setIsAuthUser({ status: true, username: signupCredentials.username });
        navigate("/home");
      } else {
        setSignupError("Invalid Email Id");
      }
      return;
    }
    setInvalidSignupError("FILL ALL THE DETAILS TO CREATE NEW ACCOUNT");
  };

  useEffect(() => {
    setTimeout(() => {
      setInvalidSignupError("");
    }, 4000);
  }, [invalidSignupError]);

  return (
    <>
      {invalidSignupError && <Alert alert={invalidSignupError} />}
      <div
        className="signupMainContainer"
        style={{ backgroundImage: `URL(${loginBg})` }}
      >
        <div className="signupForm">
          <img className="signupPageLogo" src={logoTest} alt="logo" />
          <form>
            <input
              onChange={handleSignupCredentials}
              type="text"
              placeholder="Username"
              name="username"
            />
            <input
              onChange={handleSignupCredentials}
              type="email"
              placeholder="Email Id"
              name="email"
            />
            {signupError && <p className="signupError">{signupError}</p>}
            <input
              onChange={handleSignupCredentials}
              type="password"
              placeholder="Password"
              name="password"
            />
            <button onClick={createNewUser} className="signupBtn">
              Create new account
            </button>
          </form>
          <p className="termsAndConditionTextSignup">
            By clicking signup, you are agreeing to{" "}
            <span>terms and conditions</span> of the company
          </p>
          <p className="loginText">
            Already have an account?{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
