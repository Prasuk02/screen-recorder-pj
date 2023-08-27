import React from "react";
import loginBg from "../images/loginBg.png";
import "../stylesheets/loginPage.css";
import logoTest from "../images/logoTest.png";

const LoginPage = () => {
  return (
    <>
      <div
        className="loginMainContainer"
        style={{ backgroundImage: `URL(${loginBg})` }}
      >
        <div className="loginForm">
          <img className="loginPageLogo" src={logoTest} alt="logo" />
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="loginBtn">Login</button>
          </form>
          <p className="termsAndConditionText">
            By clicking login or signup, you are agreeing to{" "}
            <span>terms and conditions</span> of the company
          </p>
          <p className="signupText">
            Don't have an account? <span>Sign up</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;