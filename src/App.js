import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import {Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageNotFound from "./Pages/PageNotFound";
import AuthRoute from "./auth/AuthRoute";

function App() {
  let navigate = useNavigate()
  const [isAuthUser, setIsAuthUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
      ? {
          status: true,
          username: JSON.parse(localStorage.getItem("currentUser")).username,
        }
      : {
          status: false,
          username: "",
        }
  );

  useEffect(() => {
    if(isAuthUser.status){
      navigate('/home')
    }
  }, [isAuthUser])

  return (
    <>
        <Navbar username={isAuthUser.username}  setIsAuthUser={setIsAuthUser} />
        <Routes>
          <Route
            exact
            path={"/"}
            element={<LoginPage setIsAuthUser={setIsAuthUser} />}
          />
          <Route
            path={"/signup"}
            element={<SignupPage setIsAuthUser={setIsAuthUser} />}
          />
          <Route
            path={"/home"}
            element={<AuthRoute isAuthUser={isAuthUser} Component={Home} />}
          />
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Routes>
    </>
  );
}

export default App;
