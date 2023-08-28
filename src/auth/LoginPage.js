import React, { useEffect, useState } from "react";
import loginBg from "../images/loginBg.png";
import "../stylesheets/loginPage.css";
import logoTest from "../images/logoTest.png";
import Alert from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthUser }) => {
  const [loginCredentials, setLoginCredentials] = useState({});
  const [invalidEmailError, setInvalidEmailError] = useState("");
  const [loginError, setLoginError] = useState("");
  let navigate = useNavigate()

  const handleLoginCredentials = (event) => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let { email, password: loginPassword } = loginCredentials;
    if (regex.test(email)) {
      let validUsers = JSON.parse(localStorage.getItem("users"));
      if (email in validUsers) {
        if (validUsers[email].password == loginPassword) {
          setIsAuthUser({ status: true, username: validUsers[email].username });
          navigate('/home')
        } else {
          setLoginError("Invalid Password!!");
        }
      } else {
        setLoginError("Email Id not registered!!");
      }
    } else {
      setInvalidEmailError("Invalid Email Id!!");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoginError("");
      setInvalidEmailError("");
    }, 5000);
  }, [invalidEmailError, loginError]);

  return (
    <>
      {loginError && <Alert alert={loginError} />}
      <div
        className="loginMainContainer"
        style={{ backgroundImage: `URL(${loginBg})` }}
      >
        <div className="loginForm">
          <img className="loginPageLogo" src={logoTest} alt="logo" />
          <form>
            <input
              onChange={handleLoginCredentials}
              name="email"
              type="email"
              placeholder="Email Id"
            />
            {invalidEmailError && (
              <p className="invalidEmailError">{invalidEmailError}</p>
            )}
            <input
              onChange={handleLoginCredentials}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button onClick={handleLogin} className="loginBtn">
              Login
            </button>
          </form>
          <p className="termsAndConditionText">
            By clicking login, you are agreeing to{" "}
            <span>terms and conditions</span> of the company
          </p>
          <p className="signupText">
            Don't have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span>Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
