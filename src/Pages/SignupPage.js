import React from "react";
import loginBg from "../images/loginBg.png";
import "../stylesheets/signupPage.css";
import logoTest from "../images/logoTest.png";

const SignupPage = () => {
  return (
    <>
      <div
        className="signupMainContainer"
        style={{ backgroundImage: `URL(${loginBg})` }}
      >
        <div className="signupForm">
          <img className="signupPageLogo" src={logoTest} alt="logo" />
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Re-enter Password" />
            <button className="signupBtn">Create new account</button>
          </form>
          <p className="termsAndConditionText">
            By clicking signup, you are agreeing to{" "}
            <span>terms and conditions</span> of the company
          </p>
          <p className="loginText">
            Already have an account? <span>Login</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;